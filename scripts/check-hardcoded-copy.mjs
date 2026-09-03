import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const visibleAttributes = new Set([
  "alt",
  "aria-description",
  "aria-label",
  "placeholder",
  "title",
]);
const failures = [];
const roots = process.env.SPARKLE_SCAN_ROOTS
  ? process.env.SPARKLE_SCAN_ROOTS.split(path.delimiter).filter(Boolean)
  : ["src"];

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory() ? filesUnder(absolute) : [absolute];
    }),
  );
  return nested.flat();
}

function isCopy(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (!normalized) return false;
  if (/^\{[A-Za-z][\w-]*\}$/.test(normalized)) return false;
  return /[\p{L}\p{N}]/u.test(normalized);
}

function record(file, sourceFile, node, value) {
  if (!isCopy(value)) return;
  const { line } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
  failures.push(
    `${file}:${line + 1} hardcoded visible copy: ${JSON.stringify(value.trim())}`,
  );
}

function recordExpressionLiterals(file, sourceFile, expression) {
  if (
    ts.isStringLiteral(expression) ||
    ts.isNoSubstitutionTemplateLiteral(expression)
  ) {
    record(file, sourceFile, expression, expression.text);
    return;
  }

  if (ts.isTemplateExpression(expression)) {
    record(file, sourceFile, expression.head, expression.head.text);
    for (const span of expression.templateSpans) {
      record(file, sourceFile, span.literal, span.literal.text);
      recordExpressionLiterals(file, sourceFile, span.expression);
    }
    return;
  }

  ts.forEachChild(expression, (child) => {
    if (
      ts.isJsxElement(child) ||
      ts.isJsxSelfClosingElement(child) ||
      ts.isJsxFragment(child)
    ) {
      return;
    }
    recordExpressionLiterals(file, sourceFile, child);
  });
}

function recordAliasedVisibleLiterals(file, sourceFile, expression) {
  if (ts.isCallExpression(expression) || ts.isNewExpression(expression)) {
    return;
  }

  if (
    ts.isStringLiteral(expression) ||
    ts.isNoSubstitutionTemplateLiteral(expression)
  ) {
    record(file, sourceFile, expression, expression.text);
    return;
  }

  if (ts.isTemplateExpression(expression)) {
    record(file, sourceFile, expression.head, expression.head.text);
    for (const span of expression.templateSpans) {
      record(file, sourceFile, span.literal, span.literal.text);
      recordAliasedVisibleLiterals(file, sourceFile, span.expression);
    }
    return;
  }

  ts.forEachChild(expression, (child) =>
    recordAliasedVisibleLiterals(file, sourceFile, child),
  );
}

const scanFiles = (await Promise.all(roots.map(filesUnder))).flat();

for (const file of scanFiles) {
  if (!file.endsWith(".tsx")) continue;

  const source = await readFile(file, "utf8");
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const importedBindings = new Set();
  const localInitializers = new Map();
  const localFunctions = new Map();

  function getScopeChain(node) {
    const scopes = [];
    let current = node;
    while (current) {
      if (ts.isFunctionLike(current) || ts.isSourceFile(current)) {
        scopes.push(current);
      }
      current = current.parent;
    }
    return scopes;
  }

  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || !statement.importClause) continue;
    const moduleName = ts.isStringLiteral(statement.moduleSpecifier)
      ? statement.moduleSpecifier.text
      : "";
    if (moduleName === "@/lib/copy") continue;

    if (statement.importClause.name) {
      importedBindings.add(statement.importClause.name.text);
    }
    const bindings = statement.importClause.namedBindings;
    if (bindings && ts.isNamespaceImport(bindings)) {
      importedBindings.add(bindings.name.text);
    }
    if (bindings && ts.isNamedImports(bindings)) {
      for (const element of bindings.elements)
        importedBindings.add(element.name.text);
    }
  }

  function registerBindingInitializers(bindingName, initializer, declaration) {
    if (ts.isIdentifier(bindingName)) {
      const entries = localInitializers.get(bindingName.text) ?? [];
      entries.push({
        initializer,
        declaration,
        scope: getScopeChain(declaration)[0],
      });
      localInitializers.set(bindingName.text, entries);
      return;
    }

    for (const element of bindingName.elements) {
      if (ts.isBindingElement(element)) {
        registerBindingInitializers(element.name, initializer, declaration);
      }
    }
  }

  function collectLocalInitializers(node) {
    if (
      ts.isVariableDeclaration(node) &&
      node.initializer &&
      !node.initializer.getSourceFile().isDeclarationFile
    ) {
      registerBindingInitializers(node.name, node.initializer, node);
    }
    if (ts.isFunctionDeclaration(node) && node.name && node.body) {
      const entries = localFunctions.get(node.name.text) ?? [];
      entries.push({
        declaration: node,
        scope: getScopeChain(node.parent)[0],
      });
      localFunctions.set(node.name.text, entries);
    }
    ts.forEachChild(node, collectLocalInitializers);
  }

  collectLocalInitializers(sourceFile);

  function resolveLocalInitializer(identifier) {
    const entries = localInitializers.get(identifier.text) ?? [];
    const scopeChain = getScopeChain(identifier);

    return entries
      .filter(
        (entry) =>
          scopeChain.includes(entry.scope) &&
          entry.declaration.getStart() < identifier.getStart(),
      )
      .sort((first, second) => {
        const scopeDistance =
          scopeChain.indexOf(first.scope) - scopeChain.indexOf(second.scope);
        return (
          scopeDistance ||
          second.declaration.getStart() - first.declaration.getStart()
        );
      })[0]?.initializer;
  }

  function resolveLocalFunction(identifier) {
    const initializer = resolveLocalInitializer(identifier);
    if (
      initializer &&
      (ts.isArrowFunction(initializer) || ts.isFunctionExpression(initializer))
    ) {
      return initializer;
    }

    const entries = localFunctions.get(identifier.text) ?? [];
    const scopeChain = getScopeChain(identifier);
    return entries
      .filter((entry) => scopeChain.includes(entry.scope))
      .sort(
        (first, second) =>
          scopeChain.indexOf(first.scope) - scopeChain.indexOf(second.scope),
      )[0]?.declaration;
  }

  function inspectFunctionReturnValues(callable, seen) {
    const body = callable.body;
    if (!ts.isBlock(body)) {
      recordAliasedVisibleLiterals(file, sourceFile, body);
      inspectExpressionSources(body, seen, true);
      return;
    }

    function visitReturn(node) {
      if (ts.isFunctionLike(node) && node !== callable) return;
      if (ts.isReturnStatement(node) && node.expression) {
        recordAliasedVisibleLiterals(file, sourceFile, node.expression);
        inspectExpressionSources(node.expression, seen, true);
        return;
      }
      ts.forEachChild(node, visitReturn);
    }

    visitReturn(body);
  }

  function inspectExpressionSources(
    expression,
    seen = new Set(),
    followLocalCalls = true,
  ) {
    if (ts.isIdentifier(expression)) {
      if (importedBindings.has(expression.text)) {
        const { line } = sourceFile.getLineAndCharacterOfPosition(
          expression.getStart(),
        );
        failures.push(
          `${file}:${line + 1} visible copy reads from non-copy import ${expression.text}`,
        );
        return;
      }

      const initializer = resolveLocalInitializer(expression);
      if (initializer && !seen.has(expression.text)) {
        const nextSeen = new Set(seen).add(expression.text);
        recordAliasedVisibleLiterals(file, sourceFile, initializer);
        inspectExpressionSources(initializer, nextSeen, false);
      }
      return;
    }

    if (ts.isPropertyAccessExpression(expression)) {
      inspectExpressionSources(expression.expression, seen, followLocalCalls);
      return;
    }

    if (ts.isElementAccessExpression(expression)) {
      inspectExpressionSources(expression.expression, seen, followLocalCalls);
      if (expression.argumentExpression) {
        inspectExpressionSources(
          expression.argumentExpression,
          seen,
          followLocalCalls,
        );
      }
      return;
    }

    if (ts.isCallExpression(expression)) {
      inspectExpressionSources(expression.expression, seen, false);
      if (followLocalCalls && ts.isIdentifier(expression.expression)) {
        const callable = resolveLocalFunction(expression.expression);
        const callKey = `call:${expression.expression.text}`;
        if (callable && !seen.has(callKey)) {
          inspectFunctionReturnValues(callable, new Set(seen).add(callKey));
        }
      }
      for (const argument of expression.arguments ?? []) {
        inspectExpressionSources(argument, seen, followLocalCalls);
      }
      return;
    }

    if (ts.isNewExpression(expression)) {
      for (const argument of expression.arguments ?? []) {
        inspectExpressionSources(argument, seen, followLocalCalls);
      }
      return;
    }

    ts.forEachChild(expression, (child) => {
      if (
        ts.isJsxElement(child) ||
        ts.isJsxSelfClosingElement(child) ||
        ts.isJsxFragment(child)
      ) {
        return;
      }
      inspectExpressionSources(child, seen, followLocalCalls);
    });
  }

  function inspectVisibleExpression(expression) {
    recordExpressionLiterals(file, sourceFile, expression);
    inspectExpressionSources(expression);
  }

  function visit(node) {
    if (ts.isJsxText(node)) {
      record(file, sourceFile, node, node.getText(sourceFile));
    }

    if (
      ts.isJsxAttribute(node) &&
      visibleAttributes.has(node.name.getText(sourceFile))
    ) {
      const initializer = node.initializer;
      if (initializer && ts.isStringLiteral(initializer)) {
        record(file, sourceFile, initializer, initializer.text);
      }
      if (
        initializer &&
        ts.isJsxExpression(initializer) &&
        initializer.expression
      ) {
        inspectVisibleExpression(initializer.expression);
      }
    }

    if (
      ts.isJsxExpression(node) &&
      node.expression &&
      (ts.isJsxElement(node.parent) || ts.isJsxFragment(node.parent))
    ) {
      inspectVisibleExpression(node.expression);
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

function schemaShape(value) {
  if (Array.isArray(value)) {
    return value.length ? value.map(schemaShape) : ["empty-array"];
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, schemaShape(value[key])]),
    );
  }
  return typeof value;
}

const [arabic, english] = await Promise.all([
  readFile("content/copy.ar.json", "utf8").then(JSON.parse),
  readFile("content/copy.en.json", "utf8").then(JSON.parse),
]);

if (
  JSON.stringify(schemaShape(arabic)) !== JSON.stringify(schemaShape(english))
) {
  failures.push(
    "content/copy.ar.json and content/copy.en.json do not have schema parity",
  );
}

if (failures.length) {
  console.error("Copy boundary failed:\n");
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  "Copy boundary passed: JSX is registry-driven and AR/EN schemas match.",
);

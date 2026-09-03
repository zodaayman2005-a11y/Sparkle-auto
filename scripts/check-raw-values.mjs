import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const roots = process.env.SPARKLE_SCAN_ROOTS
  ? process.env.SPARKLE_SCAN_ROOTS.split(path.delimiter).filter(Boolean)
  : ["src"];
const extensions = new Set([".css", ".ts", ".tsx"]);
const failures = [];

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

const tailwindNumericUtility =
  /^(?:[a-z-]+:)*(?:p[trblxy]?|m[trblxy]?|space-[xy]|gap(?:-[xy])?|w|min-w|max-w|h|min-h|max-h|inset(?:-[xy])?|top|right|bottom|left|start|end|translate-[xy]|z|text|leading|tracking|rounded(?:-[trbl]{1,2})?|border(?:-[trblxy])?|shadow|outline|ring|ring-offset|opacity|scale|rotate|duration|delay)-(?:\d|px\b|\[)/;
const tailwindPaletteUtility =
  /^(?:[a-z-]+:)*(?:text|bg|border|outline|ring|shadow|fill|stroke)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|black|white|transparent|current|inherit)(?:-|$)/;
const tailwindNamedVisualUtility =
  /^(?:[a-z-]+:)*(?:text-(?:xs|sm|base|lg|xl|[2-9]xl)|font-(?:thin|extralight|light|normal|medium|semibold|bold|extrabold|black)|rounded(?:-(?:none|xs|sm|md|lg|xl|[2-9]xl|full))?|shadow(?:-(?:xs|sm|md|lg|xl|[2-9]xl|inner|none))?)$/;
const numericVisualObjectProperties = new Set([
  "animationDuration",
  "animationIterationCount",
  "blockSize",
  "borderRadius",
  "borderWidth",
  "bottom",
  "columnGap",
  "fontSize",
  "gap",
  "height",
  "inlineSize",
  "inset",
  "insetBlock",
  "insetBlockEnd",
  "insetBlockStart",
  "insetInline",
  "insetInlineEnd",
  "insetInlineStart",
  "left",
  "letterSpacing",
  "lineHeight",
  "margin",
  "marginBlock",
  "marginBlockEnd",
  "marginBlockStart",
  "marginInline",
  "marginInlineEnd",
  "marginInlineStart",
  "maxBlockSize",
  "maxHeight",
  "maxInlineSize",
  "maxWidth",
  "minBlockSize",
  "minHeight",
  "minInlineSize",
  "minWidth",
  "opacity",
  "outlineOffset",
  "outlineWidth",
  "padding",
  "paddingBlock",
  "paddingBlockEnd",
  "paddingBlockStart",
  "paddingInline",
  "paddingInlineEnd",
  "paddingInlineStart",
  "right",
  "rotate",
  "rowGap",
  "scale",
  "scrollMargin",
  "scrollMarginBlockStart",
  "top",
  "transitionDuration",
  "translate",
  "width",
  "zIndex",
]);

function inspectTailwindClasses(file, sourceFile, node, value) {
  for (const className of value.split(/\s+/).filter(Boolean)) {
    const hasTokenReference = className.includes("[var(--");
    if (
      (!hasTokenReference && tailwindNumericUtility.test(className)) ||
      tailwindPaletteUtility.test(className) ||
      tailwindNamedVisualUtility.test(className)
    ) {
      const { line } = sourceFile.getLineAndCharacterOfPosition(
        node.getStart(),
      );
      failures.push(
        `${file}:${line + 1} raw Tailwind visual utility (${className})`,
      );
    }
  }
}

function inspectClassExpression(
  file,
  sourceFile,
  expression,
  resolveLocalInitializer,
  seen = new Set(),
) {
  if (ts.isIdentifier(expression)) {
    const initializer = resolveLocalInitializer(expression);
    if (initializer && !seen.has(expression.text)) {
      inspectClassExpression(
        file,
        sourceFile,
        initializer,
        resolveLocalInitializer,
        new Set(seen).add(expression.text),
      );
    }
    return;
  }

  if (
    ts.isStringLiteral(expression) ||
    ts.isNoSubstitutionTemplateLiteral(expression)
  ) {
    inspectTailwindClasses(file, sourceFile, expression, expression.text);
    return;
  }

  if (ts.isTemplateExpression(expression)) {
    inspectTailwindClasses(
      file,
      sourceFile,
      expression.head,
      expression.head.text,
    );
    for (const span of expression.templateSpans) {
      inspectTailwindClasses(file, sourceFile, span.literal, span.literal.text);
      inspectClassExpression(
        file,
        sourceFile,
        span.expression,
        resolveLocalInitializer,
        seen,
      );
    }
    return;
  }

  ts.forEachChild(expression, (child) =>
    inspectClassExpression(
      file,
      sourceFile,
      child,
      resolveLocalInitializer,
      seen,
    ),
  );
}

function inspectStyleExpression(
  file,
  sourceFile,
  expression,
  resolveLocalInitializer,
  seen = new Set(),
) {
  if (
    ts.isNumericLiteral(expression) ||
    (ts.isPrefixUnaryExpression(expression) &&
      ts.isNumericLiteral(expression.operand))
  ) {
    const { line } = sourceFile.getLineAndCharacterOfPosition(
      expression.getStart(),
    );
    failures.push(`${file}:${line + 1} raw numeric inline style`);
    return;
  }

  if (ts.isIdentifier(expression)) {
    const initializer = resolveLocalInitializer(expression);
    if (initializer && !seen.has(expression.text)) {
      inspectStyleExpression(
        file,
        sourceFile,
        initializer,
        resolveLocalInitializer,
        new Set(seen).add(expression.text),
      );
    }
    return;
  }

  ts.forEachChild(expression, (child) =>
    inspectStyleExpression(
      file,
      sourceFile,
      child,
      resolveLocalInitializer,
      seen,
    ),
  );
}

function inspectTsxVisualBoundaries(file, source) {
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const localInitializers = new Map();

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
    if (ts.isVariableDeclaration(node) && node.initializer) {
      registerBindingInitializers(node.name, node.initializer, node);
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

  function visit(node) {
    if (ts.isJsxAttribute(node)) {
      const attributeName = node.name.getText(sourceFile);
      const initializer = node.initializer;

      if (attributeName === "className" && initializer) {
        if (ts.isStringLiteral(initializer)) {
          inspectTailwindClasses(
            file,
            sourceFile,
            initializer,
            initializer.text,
          );
        } else if (ts.isJsxExpression(initializer) && initializer.expression) {
          inspectClassExpression(
            file,
            sourceFile,
            initializer.expression,
            resolveLocalInitializer,
          );
        }
      }

      if (
        attributeName === "style" &&
        initializer &&
        ts.isJsxExpression(initializer) &&
        initializer.expression
      ) {
        inspectStyleExpression(
          file,
          sourceFile,
          initializer.expression,
          resolveLocalInitializer,
        );
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

function inspectStaticVisualDeclarations(file, source) {
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );

  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      inspectTailwindClasses(file, sourceFile, node, node.text);
    }

    if (ts.isPropertyAssignment(node)) {
      const propertyName =
        ts.isIdentifier(node.name) ||
        ts.isStringLiteral(node.name) ||
        ts.isNumericLiteral(node.name)
          ? node.name.text
          : null;
      const isRawNumber =
        ts.isNumericLiteral(node.initializer) ||
        (ts.isPrefixUnaryExpression(node.initializer) &&
          ts.isNumericLiteral(node.initializer.operand));

      if (
        propertyName &&
        numericVisualObjectProperties.has(propertyName) &&
        isRawNumber
      ) {
        const { line } = sourceFile.getLineAndCharacterOfPosition(
          node.initializer.getStart(),
        );
        failures.push(
          `${file}:${line + 1} raw numeric visual object property (${propertyName})`,
        );
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

for (const root of roots) {
  for (const file of await filesUnder(root)) {
    if (!extensions.has(path.extname(file))) continue;
    if (path.normalize(file) === path.normalize("src/styles/tokens.css"))
      continue;

    const source = await readFile(file, "utf8");
    if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      inspectStaticVisualDeclarations(file, source);
    }
    if (file.endsWith(".tsx")) {
      inspectTsxVisualBoundaries(file, source);
    }
    const checks = [
      { label: "raw hexadecimal color", expression: /#[\da-fA-F]{3,8}\b/g },
      {
        label: "raw functional color",
        expression: /\b(?:rgba?|hsla?|oklch|lab|lch)\s*\(/g,
      },
      { label: "raw pixel value", expression: /(^|[^\w-])\d+(?:\.\d+)?px\b/gm },
      {
        label: "raw relative length",
        expression: /(^|[^\w-])(?:0?\.\d+|[1-9]\d*(?:\.\d+)?)(?:rem|em)\b/gm,
      },
      {
        label: "raw motion duration",
        expression: /(^|[^\w-])(?:\d+(?:\.\d+)?|\.\d+)(?:ms|s)\b/gm,
      },
    ];

    for (const check of checks) {
      const matches = [...source.matchAll(check.expression)];
      for (const match of matches) {
        const line = source.slice(0, match.index).split(/\r?\n/).length;
        failures.push(`${file}:${line} ${check.label}`);
      }
    }

    for (const match of source.matchAll(/font-family\s*:\s*([^;\n]+)/g)) {
      if (match[1]?.trim().startsWith("var(--font")) continue;
      const line = source.slice(0, match.index).split(/\r?\n/).length;
      failures.push(`${file}:${line} raw font family`);
    }

    for (const property of [
      "border-radius",
      "box-shadow",
      "text-shadow",
      "transform",
      "scroll-behavior",
      "transition-duration",
      "animation-duration",
      "animation-iteration-count",
    ]) {
      const expression = new RegExp(`${property}\\s*:\\s*([^;\\n]+)`, "g");
      for (const match of source.matchAll(expression)) {
        const value = match[1]?.trim() ?? "";
        if (
          /^(?:var\(|none\b|inherit\b|initial\b|unset\b|revert\b)/.test(value)
        ) {
          continue;
        }
        const line = source.slice(0, match.index).split(/\r?\n/).length;
        failures.push(`${file}:${line} raw ${property}`);
      }
    }
  }
}

if (failures.length) {
  console.error("Raw visual values found outside src/styles/tokens.css:\n");
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Token boundary passed: no raw visual values were found.");

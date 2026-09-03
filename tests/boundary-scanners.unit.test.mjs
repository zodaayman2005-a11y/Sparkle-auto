import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { after, before, describe, it } from "node:test";

const workspace = process.cwd();
let fixtureRoot;
let fixtureIndex = 0;

before(async () => {
  fixtureRoot = await mkdtemp(path.join(tmpdir(), "sparkle-boundary-"));
});

after(async () => {
  if (fixtureRoot) await rm(fixtureRoot, { recursive: true, force: true });
});

async function runScanner(script, source, extraFiles = {}) {
  const caseRoot = path.join(fixtureRoot, `case-${fixtureIndex++}`);
  await mkdir(caseRoot, { recursive: true });
  await writeFile(path.join(caseRoot, "fixture.tsx"), source, "utf8");
  await Promise.all(
    Object.entries(extraFiles).map(([name, contents]) =>
      writeFile(path.join(caseRoot, name), contents, "utf8"),
    ),
  );

  return spawnSync(process.execPath, [path.join(workspace, script)], {
    cwd: workspace,
    encoding: "utf8",
    env: { ...process.env, SPARKLE_SCAN_ROOTS: caseRoot },
  });
}

describe("locked source-boundary scanners", () => {
  it("rejects visible copy hidden behind a local alias", async () => {
    const result = await runScanner(
      "scripts/check-hardcoded-copy.mjs",
      'export function Fixture() { const label = "Buy now"; return <span>{label}</span>; }',
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /hardcoded visible copy/);
  });

  it("rejects visible copy returned by a local function", async () => {
    const result = await runScanner(
      "scripts/check-hardcoded-copy.mjs",
      'function getLabel() { return "Buy now"; } export function Fixture() { return <span>{getLabel()}</span>; }',
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /hardcoded visible copy/);
  });

  it("rejects visible copy imported from an unapproved JSON registry", async () => {
    const result = await runScanner(
      "scripts/check-hardcoded-copy.mjs",
      'import labels from "./labels.json"; export function Fixture() { return <span>{labels.buy}</span>; }',
      { "labels.json": '{"buy":"Buy now"}' },
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /non-copy import labels/);
  });

  it("rejects visible copy returned by imported and wrapped functions", async () => {
    const result = await runScanner(
      "scripts/check-hardcoded-copy.mjs",
      'import { getLabel } from "./labels"; function wrappedLabel() { return getLabel(); } export function Fixture() { return <span>{wrappedLabel()}</span>; }',
      { "labels.ts": 'export function getLabel() { return "Buy now"; }' },
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /non-copy import getLabel/);
  });

  it("rejects Tailwind and numeric style values hidden behind local aliases", async () => {
    const result = await runScanner(
      "scripts/check-raw-values.mjs",
      'export function Fixture() { const cls = "p-4"; const visualStyle = { padding: 12 }; return <div className={cls} style={visualStyle} />; }',
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /raw Tailwind visual utility \(p-4\)/);
    assert.match(result.stderr, /raw numeric inline style/);
  });

  it("rejects untokenized motion keywords, transforms and zero durations", async () => {
    const result = await runScanner(
      "scripts/check-raw-values.mjs",
      "export function Fixture() { return <div />; }",
      {
        "raw-motion.css":
          ".fixture { scroll-behavior: smooth; transform: translateY(-200%); transition-duration: 0s; animation-iteration-count: 1; }",
      },
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /raw scroll-behavior/);
    assert.match(result.stderr, /raw transform/);
    assert.match(result.stderr, /raw motion duration/);
    assert.match(result.stderr, /raw animation-iteration-count/);
  });

  it("rejects exported Tailwind and numeric style constants before import", async () => {
    const result = await runScanner(
      "scripts/check-raw-values.mjs",
      'import { cls, visualStyle } from "./visual"; export function Fixture() { return <div className={cls} style={visualStyle} />; }',
      {
        "visual.ts":
          'export const cls = "p-4"; export const visualStyle = { padding: 12 };',
      },
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /raw Tailwind visual utility \(p-4\)/);
    assert.match(
      result.stderr,
      /raw numeric visual object property \(padding\)/,
    );
  });
});

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const preservedSources = {
  "docs/source/Sparkle-Auto-Master-Plan-v2.md":
    "6f953b2308f9e62f76f721c120bc4164d12b4a861021e019c707a4efa97c2d3b",
  "docs/source/Sparkle-Auto-Final-Unified-17-Group-Codex-Master-v3.1.md":
    "323606e22ada07445df6ca49d2e9ba94de72bc0658a21372a42b1cf2182da27e",
};

const failures = [];

const referenceManifestPath = "docs/reference/source.sha256";

try {
  const referenceManifest = await readFile(referenceManifestPath, "utf8");
  const referenceEntries = referenceManifest
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (referenceEntries.length !== 27) {
    failures.push(
      `${referenceManifestPath}: expected 27 entries, found ${referenceEntries.length}`,
    );
  }

  for (const entry of referenceEntries) {
    const match = entry.match(/^([a-f0-9]{64})\s{2}(.+)$/);
    if (!match) {
      failures.push(`${referenceManifestPath}: malformed entry ${entry}`);
      continue;
    }

    const [, expectedHash, file] = match;
    const source = await readFile(file);
    const actualHash = createHash("sha256").update(source).digest("hex");

    if (actualHash !== expectedHash) {
      failures.push(`${file}: SHA-256 mismatch`);
    }
  }
} catch (error) {
  failures.push(
    `${referenceManifestPath}: ${error instanceof Error ? error.message : "unreadable"}`,
  );
}

for (const [file, expectedHash] of Object.entries(preservedSources)) {
  try {
    const source = await readFile(file);
    const actualHash = createHash("sha256").update(source).digest("hex");

    if (actualHash !== expectedHash) {
      failures.push(`${file}: SHA-256 mismatch`);
    }
  } catch (error) {
    failures.push(
      `${file}: ${error instanceof Error ? error.message : "unreadable"}`,
    );
  }
}

if (failures.length) {
  console.error("Preserved-source integrity check failed:\n");
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  "Preserved-source integrity passed: v2, v3.1 and 27 supplied visual references match their locked hashes.",
);

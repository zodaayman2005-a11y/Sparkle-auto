import { rm } from "node:fs/promises";
import path from "node:path";

const workspace = path.resolve(process.cwd());
const buildDirectory = path.resolve(workspace, ".next");
const relativeTarget = path.relative(workspace, buildDirectory);

if (
  relativeTarget !== ".next" ||
  path.dirname(buildDirectory) !== workspace ||
  path.basename(buildDirectory) !== ".next"
) {
  throw new Error("Refusing to clean an unresolved build directory.");
}

await rm(buildDirectory, {
  recursive: true,
  force: true,
  maxRetries: 3,
  retryDelay: 200,
});

console.log("Cleaned the workspace-local .next build output.");

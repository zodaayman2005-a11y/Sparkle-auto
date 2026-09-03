import { readFile } from "node:fs/promises";

const requiredChecks = [
  "approvedVisualBaselines",
  "performanceBudget",
  "seoCanonicalHreflang",
  "legalLinks",
  "productionSupabase",
  "analyticsEvents",
  "bilingualHumanQa",
  "scrollComfort",
  "pricingFormComprehension",
];

const registry = JSON.parse(
  await readFile("content/release-approvals.json", "utf8"),
);
const failures = [];

if (registry.$schemaVersion !== "1.0.0") {
  failures.push("unsupported release-approval schema version");
}

if (registry.status !== "ready") {
  failures.push('release registry status must be "ready"');
}

for (const id of requiredChecks) {
  const check = registry.checks?.[id];
  if (!check || check.approved !== true) {
    failures.push(`${id}: explicit approval is missing`);
    continue;
  }

  if (
    typeof check.evidence !== "string" ||
    !check.evidence.trim() ||
    typeof check.approvedBy !== "string" ||
    !check.approvedBy.trim() ||
    typeof check.approvedOn !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(check.approvedOn)
  ) {
    failures.push(
      `${id}: approval evidence, approver, and ISO date are required`,
    );
  }
}

const unexpectedChecks = Object.keys(registry.checks ?? {}).filter(
  (id) => !requiredChecks.includes(id),
);
if (unexpectedChecks.length) {
  failures.push(`unexpected release checks: ${unexpectedChecks.join(", ")}`);
}

if (failures.length) {
  console.error("Release readiness gate is blocked:\n");
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(
  "Release readiness gate passed with explicit evidence for every check.",
);

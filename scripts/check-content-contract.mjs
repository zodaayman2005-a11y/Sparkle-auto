import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const readJson = (file) => readFile(file, "utf8").then(JSON.parse);
const [arabic, english, ctaRegistry, assetManifest] = await Promise.all([
  readJson("content/copy.ar.json"),
  readJson("content/copy.en.json"),
  readJson("content/cta.registry.json"),
  readJson("content/assets.manifest.json"),
]);

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const sameMembers = (actual, expected) =>
  JSON.stringify([...actual].sort()) === JSON.stringify([...expected].sort());
const isObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;
const isPositiveInteger = (value) => Number.isInteger(value) && value > 0;
const isUnique = (values) => new Set(values).size === values.length;
const hasExactKeys = (value, expected) =>
  isObject(value) && sameMembers(Object.keys(value), expected);

const expectedCtaIds = [
  "cta-header",
  "cta-hero-primary",
  "cta-hero-secondary",
  "cta-setup",
  "cta-plan-operations",
  "cta-plan-growth",
  "cta-plan-expansion",
  "cta-trial",
  "cta-final-primary",
  "cta-final-whatsapp",
  "cta-footer",
  "cta-faq-card",
];
const expectedAnchors = [
  "#what-is-sparkle",
  "#operation-flow",
  "#setup",
  "#pricing",
  "#faq",
];
const expectedCtaContract = {
  "cta-header": [
    "header",
    "primary",
    "scroll",
    "#application-form",
    "header",
    null,
    "header",
  ],
  "cta-hero-primary": [
    "hero",
    "primary",
    "scroll",
    "#application-form",
    "hero",
    null,
    "hero-primary",
  ],
  "cta-hero-secondary": [
    "hero",
    "secondary",
    "scroll",
    "#product-explorer",
    null,
    null,
    "hero-secondary",
  ],
  "cta-setup": [
    "setup",
    "primary",
    "scroll",
    "#application-form",
    "setup",
    null,
    "setup",
  ],
  "cta-plan-operations": [
    "pricing",
    "primary",
    "scroll-and-prefill",
    "#application-form",
    null,
    "operations",
    "pricing-operations",
  ],
  "cta-plan-growth": [
    "pricing",
    "primary",
    "scroll-and-prefill",
    "#application-form",
    null,
    "growth",
    "pricing-growth",
  ],
  "cta-plan-expansion": [
    "pricing",
    "secondary",
    "scroll-and-prefill",
    "#application-form",
    null,
    "expansion",
    "pricing-expansion",
  ],
  "cta-trial": [
    "trial",
    "primary",
    "scroll",
    "#application-form",
    "trial",
    null,
    "trial",
  ],
  "cta-final-primary": [
    "final-cta",
    "primary",
    "scroll",
    "#application-form",
    "final",
    null,
    "final-primary",
  ],
  "cta-final-whatsapp": [
    "final-cta",
    "secondary",
    "external",
    null,
    null,
    null,
    "final-whatsapp",
  ],
  "cta-footer": [
    "footer",
    "secondary",
    "scroll",
    "#application-form",
    "footer",
    null,
    "footer",
  ],
  "cta-faq-card": [
    "faq",
    "primary",
    "scroll",
    "#application-form",
    "faq",
    null,
    "faq-card",
  ],
};

assert(
  arabic.locale === "ar" && arabic.direction === "rtl",
  "Arabic locale contract is invalid",
);
assert(
  english.locale === "en" && english.direction === "ltr",
  "English locale contract is invalid",
);
assert(
  sameMembers(Object.keys(arabic.ctas), expectedCtaIds),
  "Arabic copy must contain exactly the 12 registered CTA IDs",
);
assert(
  sameMembers(Object.keys(english.ctas), expectedCtaIds),
  "English copy must contain exactly the 12 registered CTA IDs",
);
assert(
  sameMembers(Object.keys(ctaRegistry.ctas), expectedCtaIds),
  "CTA registry must contain exactly the 12 locked CTA IDs",
);
assert(
  hasExactKeys(ctaRegistry, [
    "schemaVersion",
    "project",
    "defaultLanguage",
    "supportedLanguages",
    "contract",
    "ctas",
  ]),
  "CTA registry root schema is invalid",
);
assert(
  ctaRegistry.schemaVersion === "3.1.0",
  "CTA schemaVersion must be 3.1.0",
);
assert(
  ctaRegistry.defaultLanguage === "ar",
  "CTA default language must remain Arabic",
);
assert(
  JSON.stringify(ctaRegistry.supportedLanguages) ===
    JSON.stringify(["ar", "en"]),
  "CTA supported languages must remain ordered ar/en",
);
assert(
  hasExactKeys(ctaRegistry.contract, [
    "primaryMeaning",
    "scroll",
    "formContext",
    "unavailableLinkRule",
    "analyticsEvent",
  ]),
  "CTA global contract schema is invalid",
);
assert(
  ctaRegistry.contract?.scroll?.method === "scrollIntoView" &&
    ctaRegistry.contract?.scroll?.block === "start" &&
    ctaRegistry.contract?.scroll?.defaultBehavior === "smooth" &&
    ctaRegistry.contract?.scroll?.reducedMotionBehavior === "auto" &&
    ctaRegistry.contract?.scroll?.sectionScrollMargin ===
      "calc(var(--header-h) + var(--sp-4))",
  "CTA scroll contract differs from the locked behavior",
);
assert(
  JSON.stringify(ctaRegistry.contract?.formContext?.allowedSources) ===
    JSON.stringify([
      "header",
      "hero",
      "setup",
      "trial",
      "final",
      "footer",
      "faq",
    ]) &&
    JSON.stringify(ctaRegistry.contract?.formContext?.allowedPlans) ===
      JSON.stringify(["operations", "growth", "expansion"]),
  "CTA form-context allowlists differ from the canonical enums",
);
assert(
  ctaRegistry.contract?.analyticsEvent === "cta_click",
  "CTA analytics event changed",
);
assert(
  JSON.stringify(arabic.navigation.items.map((item) => item.href)) ===
    JSON.stringify(expectedAnchors),
  "Arabic anchor map differs from the locked order",
);
assert(
  JSON.stringify(english.navigation.items.map((item) => item.href)) ===
    JSON.stringify(expectedAnchors),
  "English anchor map differs from the locked order",
);

for (const id of expectedCtaIds) {
  const registered = ctaRegistry.ctas[id];
  const [section, variant, behavior, target, source, plan, analyticsLocation] =
    expectedCtaContract[id];
  const expectedKeys = [
    "label",
    "section",
    "variant",
    "behavior",
    "target",
    "formContext",
    "availability",
    "blocker",
    "analytics",
    ...(id === "cta-final-whatsapp" ? ["externalContract"] : []),
    ...(id === "cta-plan-expansion" ? ["commercialBlockers"] : []),
  ];
  assert(
    hasExactKeys(registered, expectedKeys),
    `${id}: record schema is invalid`,
  );
  assert(
    registered?.label?.ar === arabic.ctas[id],
    `${id}: Arabic label mismatch`,
  );
  assert(
    registered?.label?.en === english.ctas[id],
    `${id}: English label mismatch`,
  );
  assert(registered?.section === section, `${id}: section mismatch`);
  assert(registered?.variant === variant, `${id}: variant mismatch`);
  assert(registered?.behavior === behavior, `${id}: behavior mismatch`);
  assert(registered?.target === target, `${id}: target mismatch`);
  assert(
    registered?.formContext?.source === source,
    `${id}: source context mismatch`,
  );
  assert(
    registered?.formContext?.plan === plan,
    `${id}: plan context mismatch`,
  );
  assert(
    registered?.analytics?.event === "cta_click",
    `${id}: analytics event mismatch`,
  );
  assert(
    registered?.analytics?.location === analyticsLocation,
    `${id}: analytics location mismatch`,
  );
  assert(registered?.target !== "#", `${id}: forbidden empty target`);
}

const whatsapp = ctaRegistry.ctas["cta-final-whatsapp"];
assert(
  whatsapp.availability === "disabled",
  "WhatsApp CTA must remain disabled for BLK-06",
);
assert(
  whatsapp.target === null,
  "WhatsApp CTA must not receive a live target before BLK-06 closes",
);
assert(whatsapp.blocker === "BLK-06", "WhatsApp CTA must retain BLK-06");
assert(
  hasExactKeys(whatsapp.externalContract, [
    "urlTemplate",
    "message",
    "openInNewTab",
    "rel",
  ]) &&
    whatsapp.externalContract.urlTemplate === "https://wa.me/{BLK-06}" &&
    whatsapp.externalContract.message === null &&
    whatsapp.externalContract.openInNewTab === true &&
    whatsapp.externalContract.rel === "noopener noreferrer",
  "WhatsApp external contract is invalid",
);
assert(
  JSON.stringify(ctaRegistry.ctas["cta-plan-expansion"].commercialBlockers) ===
    JSON.stringify(["BLK-05"]),
  "Expansion CTA must retain its commercial blocker",
);
for (const id of expectedCtaIds.filter(
  (candidate) => candidate !== "cta-final-whatsapp",
)) {
  assert(
    ctaRegistry.ctas[id].availability === "enabled",
    `${id}: expected enabled availability`,
  );
  assert(
    ctaRegistry.ctas[id].blocker === null,
    `${id}: unexpected runtime blocker`,
  );
}

const expectedCounts = {
  "sections.hero.benefits": [arabic.sections.hero.benefits, 4],
  "sections.problem.questions": [arabic.sections.problem.questions, 6],
  "sections.whatIsSparkle.pillars": [arabic.sections.whatIsSparkle.pillars, 3],
  "sections.whoIsItFor.audiences": [arabic.sections.whoIsItFor.audiences, 4],
  "sections.strategy.strategies": [arabic.sections.strategy.strategies, 5],
  "sections.productExplorer.stories": [
    arabic.sections.productExplorer.stories,
    7,
  ],
  "sections.operationFlow.steps": [arabic.sections.operationFlow.steps, 8],
  "sections.setup.steps": [arabic.sections.setup.steps, 5],
  "sections.pricing.plans": [Object.keys(arabic.sections.pricing.plans), 3],
  "sections.trial.points": [arabic.sections.trial.points, 4],
  "sections.faq.items": [arabic.sections.faq.items, 11],
  "sections.applicationForm.fields.main_problem.options": [
    arabic.sections.applicationForm.fields.main_problem.options,
    8,
  ],
};

for (const [label, [items, count]] of Object.entries(expectedCounts)) {
  assert(
    Array.isArray(items) && items.length === count,
    `${label} must contain ${count} entries`,
  );
}

const isIsoDate = (value) =>
  typeof value === "string" &&
  /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z)?$/.test(value) &&
  !Number.isNaN(Date.parse(value));
const blockerPattern = /^BLK-\d{2}(?:[a-z]|-[a-z0-9]+)?$/i;
const publicPathPattern =
  /^\/(?:assets\/(?:owner|art|placeholders)|product)\/[A-Za-z0-9._-]+$/;
const sourcePathPattern = /^(?!\/)(?!.*(?:^|\/)\.\.(?:\/|$))(?!.*\\).+$/;
const allowedFormats = new Set(["avif", "webp", "png", "svg"]);
const allowedSourceKinds = new Set([
  "identity-and-pose-reference-only",
  "section-composition-reference",
  "production-brief-only",
  "real-product-capture-reference",
  "capture-required",
]);
const expectedRecordKeys = {
  owner: [
    "type",
    "title",
    "sectionGroups",
    "productionClass",
    "sourceReference",
    "aliases",
    "languages",
    "direction",
    "alt",
    "aspectRatio",
    "sourceDimensions",
    "exports",
    "ownerDelivery",
    "approval",
    "implementation",
    "product",
    "knownExceptions",
  ],
  art: [
    "type",
    "title",
    "sectionGroups",
    "productionClass",
    "sourceReference",
    "aliases",
    "languages",
    "direction",
    "alt",
    "aspectRatio",
    "sourceDimensions",
    "exports",
    "approval",
    "implementation",
    "product",
    "knownExceptions",
  ],
  screen: [
    "type",
    "title",
    "sectionGroups",
    "productionClass",
    "sourceReference",
    "aliases",
    "languages",
    "direction",
    "alt",
    "aspectRatio",
    "sourceDimensions",
    "exports",
    "approval",
    "implementation",
    "product",
    "knownExceptions",
  ],
};
const expectedBlockerByType = {
  owner: "BLK-01",
  art: "BLK-03",
  screen: "BLK-02",
};
const expectedPlaceholderByType =
  assetManifest.placeholderProtocol?.paths ?? {};
const expectedProductionRootByType = {
  owner: "/assets/owner/",
  art: "/assets/art/",
  screen: "/product/",
};

assert(
  assetManifest.schemaVersion === "3.1.0",
  "Asset manifest schemaVersion must be 3.1.0",
);
assert(
  assetManifest.status === "group-00-contract-locked",
  "Asset manifest contract must be locked at GROUP 00",
);
assert(
  assetManifest.authority ===
    "Sparkle-Auto-Final-Unified-17-Group-Codex-Master-v3.1",
  "Asset manifest authority is invalid",
);
assert(
  assetManifest.sourcePreservation?.technicalIdsPreserved === true,
  "Technical asset IDs must be preserved",
);
assert(
  assetManifest.sourcePreservation?.originalOwnerRenderCount === 12,
  "Owner render inventory must remain 12",
);
assert(
  assetManifest.sourcePreservation?.layeredScenesOnly === true,
  "Composite scenes are forbidden",
);
assert(
  assetManifest.sourcePreservation?.realProductScreensOnly === true,
  "Product screens must remain real captures",
);
assert(
  assetManifest.sourcePreservation?.productionFilesRoot === "public",
  "Production files root must be public",
);
assert(
  assetManifest.sourcePreservation?.sourceFilesRoot === "design-source",
  "Design source root must be design-source",
);
assert(
  assetManifest.placeholderProtocol?.marker === "data-placeholder=true",
  "Placeholder test marker changed",
);
assert(
  assetManifest.placeholderProtocol?.releaseRule ===
    "test:assets must report zero placeholders",
  "Release placeholder rule changed",
);
assert(
  sameMembers(Object.keys(expectedPlaceholderByType), [
    "owner",
    "art",
    "screen",
  ]),
  "Placeholder paths must cover owner, art, and screen",
);
for (const [kind, placeholderPath] of Object.entries(
  expectedPlaceholderByType,
)) {
  assert(
    placeholderPath === `/assets/placeholders/placeholder-${kind}.svg`,
    `${kind}: invalid canonical placeholder path`,
  );
}
for (const [name, budget] of Object.entries(assetManifest.budgets ?? {})) {
  assert(
    isPositiveInteger(budget),
    `budgets.${name}: must be a positive integer`,
  );
}
assert(
  assetManifest.ownerSystem?.master?.minimumLongEdge === 3000,
  "Owner master minimum long edge must be 3000",
);
assert(
  assetManifest.ownerSystem?.master?.format === "transparent PNG",
  "Owner master format must be transparent PNG",
);
assert(
  assetManifest.ownerSystem?.master?.embeddedBackground === false,
  "Owner master must not embed a background",
);
assert(
  assetManifest.ownerSystem?.master?.embeddedShadow === false,
  "Owner master must not embed a shadow",
);

const assetEntries = Object.entries(assetManifest.assets ?? {});
const assets = assetEntries.map(([, asset]) => asset);
const assetCounts = assets.reduce((counts, asset) => {
  counts[asset.type] = (counts[asset.type] ?? 0) + 1;
  return counts;
}, {});
assert(
  assetCounts.owner === 12,
  "Asset manifest must contain 12 Owner exports",
);
assert(
  assetCounts.art === 31,
  "Asset manifest must contain 31 artwork/variant records",
);
assert(
  assetCounts.screen === 9,
  "Asset manifest must contain 9 real-product records",
);

const exportedPaths = new Map();
const manifestAliases = new Map();

for (const [id, asset] of assetEntries) {
  assert(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id),
    `${id}: invalid technical asset ID`,
  );
  assert(
    ["owner", "art", "screen"].includes(asset.type),
    `${id}: invalid asset type`,
  );
  assert(
    hasExactKeys(asset, expectedRecordKeys[asset.type] ?? []),
    `${id}: record keys do not match the ${asset.type ?? "unknown"} schema`,
  );
  assert(
    hasExactKeys(asset.title, ["ar", "en"]) &&
      isNonEmptyString(asset.title?.ar) &&
      isNonEmptyString(asset.title?.en),
    `${id}: bilingual title metadata is incomplete`,
  );
  assert(
    Array.isArray(asset.sectionGroups) &&
      asset.sectionGroups.length > 0 &&
      isUnique(asset.sectionGroups) &&
      asset.sectionGroups.every((group) => /^(?:0[2-9]|1[0-6])$/.test(group)),
    `${id}: sectionGroups must be unique GROUP 02-16 identifiers`,
  );
  assert(
    Array.isArray(asset.aliases) &&
      isUnique(asset.aliases) &&
      asset.aliases.every((alias) => /^[A-Z][A-Z0-9_]*$/.test(alias)),
    `${id}: aliases must be unique uppercase technical names`,
  );
  for (const alias of asset.aliases ?? []) {
    assert(
      !manifestAliases.has(alias),
      `${id}: duplicate record alias ${alias}`,
    );
    manifestAliases.set(alias, id);
  }

  assert(
    hasExactKeys(asset.sourceReference, [
      "kind",
      "paths",
      "productionReady",
      "note",
    ]),
    `${id}: incomplete sourceReference metadata`,
  );
  assert(
    allowedSourceKinds.has(asset.sourceReference?.kind),
    `${id}: invalid sourceReference kind`,
  );
  assert(
    Array.isArray(asset.sourceReference?.paths) &&
      isUnique(asset.sourceReference.paths) &&
      asset.sourceReference.paths.every(
        (sourcePath) =>
          isNonEmptyString(sourcePath) && sourcePathPattern.test(sourcePath),
      ),
    `${id}: sourceReference paths must be unique, safe, relative paths`,
  );
  assert(
    typeof asset.sourceReference?.productionReady === "boolean" &&
      isNonEmptyString(asset.sourceReference?.note),
    `${id}: sourceReference readiness/note metadata is invalid`,
  );
  if (asset.sourceReference?.kind === "capture-required") {
    assert(
      asset.sourceReference.paths.length === 0,
      `${id}: capture-required must not cite a source path`,
    );
  } else {
    assert(
      asset.sourceReference.paths.length > 0,
      `${id}: only capture-required may omit source paths`,
    );
  }
  if (asset.sourceReference?.kind === "real-product-capture-reference") {
    assert(
      asset.sourceReference.paths.length > 0,
      `${id}: capture-reference must cite a real source`,
    );
  }
  for (const sourcePath of asset.sourceReference?.paths ?? []) {
    const absoluteSource = path.resolve(process.cwd(), sourcePath);
    const workspaceRoot = path.resolve(process.cwd());
    assert(
      absoluteSource.startsWith(`${workspaceRoot}${path.sep}`),
      `${id}: sourceReference escapes the workspace (${sourcePath})`,
    );
    try {
      const sourceStats = await stat(absoluteSource);
      assert(
        sourceStats.isFile(),
        `${id}: sourceReference is not a file (${sourcePath})`,
      );
    } catch {
      failures.push(`${id}: sourceReference does not exist (${sourcePath})`);
    }
  }

  assert(
    Array.isArray(asset.languages) &&
      asset.languages.length > 0 &&
      isUnique(asset.languages) &&
      asset.languages.every(
        (language) => language === "ar" || language === "en",
      ),
    `${id}: languages must be a unique non-empty ar/en list`,
  );
  assert(
    hasExactKeys(asset.direction, ["requirement", "value", "mirrorAllowed"]) &&
      asset.direction?.mirrorAllowed === false,
    `${id}: direction metadata is incomplete or permits mirroring`,
  );
  if (asset.direction?.requirement === "dedicated-export") {
    const expectedLanguage = asset.direction.value === "rtl" ? "ar" : "en";
    assert(
      (asset.direction.value === "rtl" || asset.direction.value === "ltr") &&
        asset.languages.length === 1 &&
        asset.languages[0] === expectedLanguage,
      `${id}: dedicated direction and language are incompatible`,
    );
  } else {
    assert(
      ["neutral", "neutral-never-mirror"].includes(
        asset.direction?.requirement,
      ) && asset.direction?.value === "neutral",
      `${id}: non-directional assets must be neutral`,
    );
  }
  if (asset.direction?.requirement === "neutral-never-mirror") {
    assert(
      asset.type === "screen",
      `${id}: neutral-never-mirror is reserved for real product screens`,
    );
  }

  assert(
    hasExactKeys(asset.alt, ["role", "ar", "en"]) &&
      (asset.alt?.role === "decorative" || asset.alt?.role === "informative"),
    `${id}: invalid alt metadata`,
  );
  if (asset.alt?.role === "decorative") {
    assert(
      asset.alt.ar === "" && asset.alt.en === "",
      `${id}: decorative alt text must be empty`,
    );
  } else {
    assert(
      asset.languages.every((language) =>
        isNonEmptyString(asset.alt[language]),
      ),
      `${id}: informative alt text is missing for an applicable language`,
    );
  }

  assert(
    hasExactKeys(asset.aspectRatio, ["width", "height"]) &&
      isPositiveInteger(asset.aspectRatio?.width) &&
      isPositiveInteger(asset.aspectRatio?.height),
    `${id}: invalid declared aspect ratio`,
  );
  assert(
    hasExactKeys(asset.sourceDimensions, [
      "requirement",
      "width",
      "height",
      "minLongEdge",
      "format",
      "transparent",
    ]),
    `${id}: sourceDimensions metadata is incomplete`,
  );

  if (asset.type === "owner") {
    assert(
      asset.productionClass === "CHATGPT_IMAGE",
      `${id}: Owner must be CHATGPT_IMAGE`,
    );
    assert(
      asset.product === null,
      `${id}: Owner cannot include product metadata`,
    );
    assert(
      asset.sourceDimensions.requirement === "transparent-master-minimum" &&
        asset.sourceDimensions.width === null &&
        asset.sourceDimensions.height === null &&
        asset.sourceDimensions.minLongEdge ===
          assetManifest.ownerSystem.master.minimumLongEdge &&
        asset.sourceDimensions.format === "png" &&
        asset.sourceDimensions.transparent === true,
      `${id}: Owner source must use the unified 3000px transparent-master minimum contract`,
    );
    assert(
      hasExactKeys(asset.ownerDelivery, [
        "noShadowCutout",
        "contactShadow",
        "foregroundHandOrArmMatte",
        "mobileCropProof",
        "embeddedTextOrUi",
      ]) &&
        asset.ownerDelivery.noShadowCutout === true &&
        asset.ownerDelivery.embeddedTextOrUi === false &&
        asset.ownerDelivery.mobileCropProof === "required",
      `${id}: Owner delivery/Character Lock metadata is incomplete`,
    );
  } else if (asset.type === "screen") {
    assert(
      asset.productionClass === "REAL_PRODUCT",
      `${id}: Product screen must be REAL_PRODUCT`,
    );
    assert(
      asset.alt?.role === "informative",
      `${id}: Product screen must be informative`,
    );
    assert(
      asset.direction?.requirement === "neutral-never-mirror",
      `${id}: Product screen must never mirror`,
    );
    assert(
      asset.sourceReference?.kind === "real-product-capture-reference" ||
        asset.sourceReference?.kind === "capture-required",
      `${id}: Product screen requires real-capture source metadata`,
    );
    assert(
      asset.sourceDimensions.requirement === "minimum" &&
        isPositiveInteger(asset.sourceDimensions.width) &&
        isPositiveInteger(asset.sourceDimensions.height) &&
        asset.sourceDimensions.minLongEdge ===
          Math.max(
            asset.sourceDimensions.width,
            asset.sourceDimensions.height,
          ) &&
        asset.sourceDimensions.format === "png-or-lossless-capture" &&
        asset.sourceDimensions.transparent === false,
      `${id}: Product source dimensions/capture contract is invalid`,
    );
    assert(
      hasExactKeys(asset.product, [
        "route",
        "screenName",
        "device",
        "appLanguage",
        "captureDate",
        "productVersion",
        "demonstratedFeature",
        "allowedCrops",
        "demoDataReview",
        "sensitiveDataReview",
        "browserChromeConsistency",
      ]) &&
        isNonEmptyString(asset.product?.route) &&
        isNonEmptyString(asset.product?.screenName) &&
        ["laptop", "phone"].includes(asset.product?.device) &&
        ["ar", "en", "bilingual", "pending-capture"].includes(
          asset.product?.appLanguage,
        ) &&
        isNonEmptyString(asset.product?.demonstratedFeature) &&
        Array.isArray(asset.product?.allowedCrops) &&
        asset.product.allowedCrops.length > 0 &&
        isUnique(asset.product.allowedCrops) &&
        asset.product.demoDataReview === "required" &&
        asset.product.sensitiveDataReview === "required" &&
        asset.product.browserChromeConsistency === "required",
      `${id}: real product metadata is incomplete`,
    );
    if (asset.approval?.status === "approved") {
      assert(
        asset.product?.appLanguage !== "pending-capture",
        `${id}: approved capture needs a real app language`,
      );
      assert(
        isIsoDate(asset.product?.captureDate),
        `${id}: approved capture needs a valid captureDate`,
      );
      assert(
        isNonEmptyString(asset.product?.productVersion),
        `${id}: approved capture needs productVersion`,
      );
    }
  } else if (asset.type === "art") {
    assert(
      asset.product === null,
      `${id}: Artwork cannot include product metadata`,
    );
    assert(
      asset.alt?.role === "decorative",
      `${id}: Current artwork inventory must remain decorative`,
    );
    if (asset.productionClass === "VECTOR_ASSET") {
      assert(
        asset.sourceDimensions.requirement === "native-vector" &&
          asset.sourceDimensions.format === "svg" &&
          asset.sourceDimensions.transparent === true,
        `${id}: VECTOR_ASSET requires a transparent native SVG source`,
      );
    } else {
      assert(
        asset.productionClass === "CHATGPT_IMAGE",
        `${id}: invalid artwork production class`,
      );
      assert(
        asset.sourceDimensions.requirement === "approved-transparent-master" &&
          asset.sourceDimensions.format === "png" &&
          asset.sourceDimensions.transparent === true,
        `${id}: generated artwork requires an approved transparent PNG master`,
      );
    }
  }

  assert(
    hasExactKeys(asset.exports, ["desktop", "tablet", "mobile"]),
    `${id}: exports must contain exactly desktop/tablet/mobile`,
  );
  const longEdges = [];
  const responsivePathsByWidth = new Map();
  for (const viewport of ["desktop", "tablet", "mobile"]) {
    const exported = asset.exports?.[viewport];
    assert(
      hasExactKeys(exported, ["path", "width", "height", "format", "maxBytes"]),
      `${id}/${viewport}: incomplete export metadata`,
    );
    assert(
      isNonEmptyString(exported?.path) &&
        publicPathPattern.test(exported.path) &&
        exported.path.startsWith(expectedProductionRootByType[asset.type]),
      `${id}/${viewport}: unsafe or wrong production path`,
    );
    assert(
      isPositiveInteger(exported?.width) && isPositiveInteger(exported?.height),
      `${id}/${viewport}: invalid dimensions`,
    );
    assert(
      isPositiveInteger(exported?.maxBytes),
      `${id}/${viewport}: missing byte budget`,
    );
    assert(
      allowedFormats.has(exported?.format),
      `${id}/${viewport}: unsupported format`,
    );
    assert(
      path.posix
        .extname(exported?.path ?? "")
        .slice(1)
        .toLowerCase() === exported?.format,
      `${id}/${viewport}: format and filename extension differ`,
    );
    const expectedFormat =
      asset.type === "screen" || asset.type === "owner"
        ? "webp"
        : asset.productionClass === "VECTOR_ASSET"
          ? "svg"
          : "webp";
    assert(
      exported?.format === expectedFormat,
      `${id}/${viewport}: format conflicts with production class`,
    );
    if (
      isPositiveInteger(exported?.width) &&
      isPositiveInteger(exported?.height)
    ) {
      const declaredRatio = asset.aspectRatio.width / asset.aspectRatio.height;
      const exportRatio = exported.width / exported.height;
      assert(
        Math.abs(declaredRatio - exportRatio) / declaredRatio < 0.002,
        `${id}/${viewport}: export dimensions differ from the declared aspect ratio`,
      );
      longEdges.push(Math.max(exported.width, exported.height));
    }

    const existingPathOwners = exportedPaths.get(exported?.path) ?? [];
    existingPathOwners.push(`${id}/${viewport}`);
    exportedPaths.set(exported?.path, existingPathOwners);
    const existingWidthPath = responsivePathsByWidth.get(exported?.width);
    assert(
      !existingWidthPath || existingWidthPath === exported?.path,
      `${id}: equal-width responsive exports must resolve to the same file`,
    );
    responsivePathsByWidth.set(exported?.width, exported?.path);

    if (asset.type === "owner") {
      const limit =
        viewport === "desktop"
          ? assetManifest.budgets.ownerDesktopMaxBytes
          : viewport === "mobile"
            ? assetManifest.budgets.ownerMobileMaxBytes
            : assetManifest.budgets.ownerDesktopMaxBytes;
      assert(
        exported?.maxBytes <= limit,
        `${id}/${viewport}: exceeds Owner byte budget`,
      );
    } else if (asset.type === "screen") {
      assert(
        exported?.maxBytes <=
          assetManifest.budgets.productScreenshotTargetMaxBytes,
        `${id}/${viewport}: exceeds Product Screenshot byte budget`,
      );
    } else {
      assert(
        exported?.maxBytes <=
          assetManifest.budgets.decorativeAssetTargetMaxBytes,
        `${id}/${viewport}: exceeds decorative asset byte budget`,
      );
    }
  }
  assert(
    longEdges.length === 3 &&
      longEdges[0] >= longEdges[1] &&
      longEdges[1] >= longEdges[2],
    `${id}: responsive export dimensions must not grow toward mobile`,
  );

  assert(
    hasExactKeys(asset.approval, [
      "status",
      "approver",
      "approvedAt",
      "version",
    ]) &&
      ["requested", "draft", "approved", "rejected", "deprecated"].includes(
        asset.approval?.status,
      ) &&
      /^V\d{2,}$/.test(asset.approval?.version ?? ""),
    `${id}: approval lifecycle metadata is invalid`,
  );
  if (asset.approval?.status === "approved") {
    assert(
      isNonEmptyString(asset.approval.approver),
      `${id}: approved asset needs an approver`,
    );
    assert(
      isIsoDate(asset.approval.approvedAt),
      `${id}: approved asset needs a valid approvedAt date`,
    );
  } else {
    assert(
      asset.approval?.approvedAt === null,
      `${id}: unapproved asset cannot have approvedAt`,
    );
  }

  assert(
    hasExactKeys(asset.implementation, [
      "status",
      "blocker",
      "placeholderPath",
    ]) &&
      ["missing", "placeholder", "implemented"].includes(
        asset.implementation?.status,
      ),
    `${id}: implementation lifecycle metadata is invalid`,
  );
  assert(
    asset.implementation?.placeholderPath ===
      expectedPlaceholderByType[asset.type],
    `${id}: placeholder path differs from the type contract`,
  );
  const releaseReady =
    asset.implementation?.status === "implemented" &&
    asset.approval?.status === "approved";
  if (releaseReady) {
    assert(
      asset.implementation.blocker === null,
      `${id}: release-ready asset must close its blocker`,
    );
    assert(
      asset.sourceReference.productionReady === true,
      `${id}: release-ready source must be productionReady`,
    );
  } else {
    assert(
      isNonEmptyString(asset.implementation?.blocker) &&
        blockerPattern.test(asset.implementation.blocker) &&
        asset.implementation.blocker === expectedBlockerByType[asset.type],
      `${id}: unresolved lifecycle needs its valid type blocker`,
    );
  }

  assert(
    Array.isArray(asset.knownExceptions) &&
      isUnique(asset.knownExceptions) &&
      asset.knownExceptions.every(isNonEmptyString),
    `${id}: knownExceptions must be a unique string list`,
  );
}

for (const [exportPath, owners] of exportedPaths) {
  const ownerId = owners[0]?.split("/")[0];
  const isSharedWithinOneVector =
    owners.length === 3 &&
    new Set(owners.map((owner) => owner.split("/")[0])).size === 1 &&
    assetManifest.assets[ownerId]?.productionClass === "VECTOR_ASSET" &&
    new Set(
      Object.values(assetManifest.assets[ownerId].exports).map(
        (exported) =>
          `${exported.width}x${exported.height}:${exported.format}:${exported.maxBytes}`,
      ),
    ).size === 1;
  assert(
    owners.length === 1 || isSharedWithinOneVector,
    `${exportPath}: production path is reused by ${owners.join(", ")}`,
  );
}

for (const [alias, branches] of Object.entries(assetManifest.aliases ?? {})) {
  assert(isObject(branches), `${alias}: alias branch map must be an object`);
  assert(
    Object.keys(branches).every((branch) =>
      ["rtl", "ltr", "ar", "en"].includes(branch),
    ),
    `${alias}: alias has an unsupported branch`,
  );
  for (const [branch, targetOrTargets] of Object.entries(branches)) {
    const targets = Array.isArray(targetOrTargets)
      ? targetOrTargets
      : [targetOrTargets];
    assert(
      targets.length > 0 && isUnique(targets),
      `${alias}.${branch}: target list is empty or duplicated`,
    );
    for (const target of targets) {
      assert(
        isNonEmptyString(target) && assetManifest.assets[target],
        `${alias}.${branch}: unknown target ${target}`,
      );
    }
  }
}

if (failures.length) {
  console.error("Content contract failed:\n");
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  "Content contract passed: copy, CTA, anchors, counts, and assets are aligned.",
);

import { z } from "zod";

export const assetLanguages = ["ar", "en"] as const;
export const assetViewports = ["desktop", "tablet", "mobile"] as const;
export const assetKinds = ["owner", "art", "screen"] as const;
export const assetFormats = ["avif", "webp", "png", "svg"] as const;

export type AssetLanguage = (typeof assetLanguages)[number];
export type AssetViewport = (typeof assetViewports)[number];
export type AssetKind = (typeof assetKinds)[number];
export type AssetFormat = (typeof assetFormats)[number];

const languageSchema = z.enum(assetLanguages);
const exportSchema = z
  .object({
    path: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    format: z.enum(assetFormats),
    maxBytes: z.number().int().positive(),
  })
  .strict();

const localizedTextSchema = z
  .object({
    ar: z.string(),
    en: z.string(),
  })
  .strict();

const sourceReferenceSchema = z
  .object({
    kind: z.enum([
      "identity-and-pose-reference-only",
      "section-composition-reference",
      "production-brief-only",
      "real-product-capture-reference",
      "capture-required",
    ]),
    paths: z.array(z.string()),
    productionReady: z.boolean(),
    note: z.string().min(1),
  })
  .strict();

const sourceDimensionsSchema = z
  .object({
    requirement: z.enum([
      "transparent-master-minimum",
      "approved-transparent-master",
      "native-vector",
      "minimum",
    ]),
    width: z.number().int().positive().nullable(),
    height: z.number().int().positive().nullable(),
    minLongEdge: z.number().int().positive().nullable(),
    format: z.enum(["png", "svg", "png-or-lossless-capture"]),
    transparent: z.boolean(),
  })
  .strict();

const directionSchema = z
  .object({
    requirement: z.enum([
      "dedicated-export",
      "neutral",
      "neutral-never-mirror",
    ]),
    value: z.enum(["rtl", "ltr", "neutral"]),
    mirrorAllowed: z.boolean(),
  })
  .strict();

const altSchema = z
  .object({
    role: z.enum(["decorative", "informative"]),
    ar: z.string(),
    en: z.string(),
  })
  .strict();

const approvalSchema = z
  .object({
    status: z.enum([
      "requested",
      "draft",
      "approved",
      "rejected",
      "deprecated",
    ]),
    approver: z.string().min(1).nullable(),
    approvedAt: z.string().min(1).nullable(),
    version: z.string().min(1),
  })
  .strict();

const implementationSchema = z
  .object({
    status: z.enum(["missing", "placeholder", "implemented"]),
    blocker: z.string().min(1).nullable(),
    placeholderPath: z.string().min(1),
  })
  .strict();

const ownerDeliverySchema = z
  .object({
    noShadowCutout: z.boolean(),
    contactShadow: z.string().min(1),
    foregroundHandOrArmMatte: z.string().min(1),
    mobileCropProof: z.string().min(1),
    embeddedTextOrUi: z.boolean(),
  })
  .strict();

const productSchema = z
  .object({
    route: z.string().min(1),
    screenName: z.string().min(1),
    device: z.enum(["laptop", "phone"]),
    appLanguage: z.enum(["ar", "en", "bilingual", "pending-capture"]),
    captureDate: z.string().min(1).nullable(),
    productVersion: z.string().min(1).nullable(),
    demonstratedFeature: z.string().min(1),
    allowedCrops: z.array(z.string().min(1)).min(1),
    demoDataReview: z.string().min(1),
    sensitiveDataReview: z.string().min(1),
    browserChromeConsistency: z.string().min(1),
  })
  .strict();

const sharedRecordFields = {
  title: localizedTextSchema,
  sectionGroups: z.array(z.string()).min(1),
  sourceReference: sourceReferenceSchema,
  aliases: z.array(z.string()),
  languages: z.array(languageSchema).min(1),
  direction: directionSchema,
  alt: altSchema,
  aspectRatio: z
    .object({
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    })
    .strict(),
  sourceDimensions: sourceDimensionsSchema,
  exports: z
    .object({
      desktop: exportSchema,
      tablet: exportSchema,
      mobile: exportSchema,
    })
    .strict(),
  approval: approvalSchema,
  implementation: implementationSchema,
  knownExceptions: z.array(z.string().min(1)),
};

const ownerRecordSchema = z
  .object({
    ...sharedRecordFields,
    type: z.literal("owner"),
    productionClass: z.literal("CHATGPT_IMAGE"),
    ownerDelivery: ownerDeliverySchema,
    product: z.null(),
  })
  .strict();

const artworkRecordSchema = z
  .object({
    ...sharedRecordFields,
    type: z.literal("art"),
    productionClass: z.enum(["CHATGPT_IMAGE", "VECTOR_ASSET"]),
    product: z.null(),
  })
  .strict();

const productRecordSchema = z
  .object({
    ...sharedRecordFields,
    type: z.literal("screen"),
    productionClass: z.literal("REAL_PRODUCT"),
    product: productSchema,
  })
  .strict();

export const assetRecordSchema = z.discriminatedUnion("type", [
  ownerRecordSchema,
  artworkRecordSchema,
  productRecordSchema,
]);

const aliasBranchSchema = z.record(
  z.string(),
  z.union([z.string().min(1), z.array(z.string().min(1)).min(1)]),
);

export const assetManifestSchema = z
  .object({
    schemaVersion: z.literal("3.1.0"),
    project: z.literal("Sparkle Auto Landing Page"),
    status: z.literal("group-00-contract-locked"),
    authority: z.literal(
      "Sparkle-Auto-Final-Unified-17-Group-Codex-Master-v3.1",
    ),
    sourcePreservation: z
      .object({
        technicalIdsPreserved: z.boolean(),
        originalOwnerRenderCount: z.number().int().positive(),
        layeredScenesOnly: z.boolean(),
        realProductScreensOnly: z.boolean(),
        productionFilesRoot: z.string().min(1),
        sourceFilesRoot: z.string().min(1),
      })
      .strict(),
    placeholderProtocol: z
      .object({
        allowedFor: z.array(z.string().min(1)).min(1),
        forbiddenFor: z.array(z.string().min(1)).min(1),
        lookup: z.string().min(1),
        marker: z.string().min(1),
        releaseRule: z.string().min(1),
        paths: z
          .object({
            owner: z.string().min(1),
            art: z.string().min(1),
            screen: z.string().min(1),
          })
          .strict(),
      })
      .strict(),
    budgets: z
      .object({
        ownerDesktopMaxBytes: z.number().int().positive(),
        ownerMobileMaxBytes: z.number().int().positive(),
        decorativeAssetTargetMaxBytes: z.number().int().positive(),
        productScreenshotTargetMaxBytes: z.number().int().positive(),
        heroCriticalDesktopTargetMaxBytes: z.number().int().positive(),
        heroCriticalMobileTargetMaxBytes: z.number().int().positive(),
      })
      .strict(),
    ownerSystem: z
      .object({
        identityInvariants: z.array(z.string().min(1)).min(1),
        watchHandRule: z.string().min(1),
        master: z
          .object({
            minimumLongEdge: z.number().int().positive(),
            format: z.literal("transparent PNG"),
            colorSpace: z.string().min(1),
            embeddedBackground: z.boolean(),
            embeddedShadow: z.boolean(),
          })
          .strict(),
        responsiveExports: z
          .object({
            desktopLongEdgeMax: z.number().int().positive(),
            tabletLongEdgeMax: z.number().int().positive(),
            mobileLongEdgeMax: z.number().int().positive(),
          })
          .strict(),
        requiredCompanions: z
          .object({
            contactShadow: z.string().min(1),
            foregroundMatte: z.string().min(1),
            noShadowCutout: z.string().min(1),
            mobileCropProof: z.string().min(1),
            identityReferenceMetadata: z.string().min(1),
          })
          .strict(),
        unresolvedVisualBoardDecisions: z.array(z.string().min(1)),
      })
      .strict(),
    aliases: z.record(z.string(), aliasBranchSchema),
    assets: z.record(z.string(), assetRecordSchema),
  })
  .strict();

export type AssetExport = z.infer<typeof exportSchema>;
export type AssetRecord = z.infer<typeof assetRecordSchema>;
export type AssetManifest = z.infer<typeof assetManifestSchema>;

export function parseAssetManifest(value: unknown): AssetManifest {
  return assetManifestSchema.parse(value);
}

export function getAssetCompatibilityIssue(
  record: AssetRecord,
  lang: AssetLanguage,
): string | null {
  if (!record.languages.includes(lang)) {
    return `language "${lang}" is not listed for this asset (allowed: ${record.languages.join(", ")})`;
  }

  if (record.direction.requirement === "dedicated-export") {
    const requiredDirection = lang === "ar" ? "rtl" : "ltr";
    if (record.direction.value !== requiredDirection) {
      return `language "${lang}" requires a ${requiredDirection} export, but this asset is ${record.direction.value}`;
    }
  }

  if (
    record.direction.requirement !== "dedicated-export" &&
    record.direction.value !== "neutral"
  ) {
    return `a ${record.direction.requirement} asset must declare direction.value="neutral"`;
  }

  return null;
}

import { z } from "zod";

import ctaRegistryJson from "@content/cta.registry.json";

export const ctaIds = [
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
] as const;

const bilingualTextSchema = z
  .object({ ar: z.string().min(1), en: z.string().min(1) })
  .strict();

const ctaEntrySchema = z
  .object({
    label: bilingualTextSchema,
    section: z.enum([
      "header",
      "hero",
      "setup",
      "pricing",
      "trial",
      "final-cta",
      "footer",
      "faq",
    ]),
    variant: z.enum(["primary", "secondary", "tertiary"]),
    behavior: z.enum(["scroll", "scroll-and-prefill", "external"]),
    target: z.enum(["#application-form", "#product-explorer"]).nullable(),
    externalContract: z
      .object({
        urlTemplate: z.literal("https://wa.me/{BLK-06}"),
        message: z.null(),
        openInNewTab: z.literal(true),
        rel: z.literal("noopener noreferrer"),
      })
      .strict()
      .optional(),
    formContext: z
      .object({
        source: z
          .enum(["header", "hero", "setup", "trial", "final", "footer", "faq"])
          .nullable(),
        plan: z.enum(["operations", "growth", "expansion"]).nullable(),
      })
      .strict(),
    availability: z.enum(["enabled", "disabled"]),
    blocker: z.literal("BLK-06").nullable(),
    commercialBlockers: z.array(z.literal("BLK-05")).max(1).optional(),
    analytics: z
      .object({
        event: z.literal("cta_click"),
        location: z.enum([
          "header",
          "hero-primary",
          "hero-secondary",
          "setup",
          "pricing-operations",
          "pricing-growth",
          "pricing-expansion",
          "trial",
          "final-primary",
          "final-whatsapp",
          "footer",
          "faq-card",
        ]),
      })
      .strict(),
  })
  .strict();

export const ctaRegistrySchema = z
  .object({
    schemaVersion: z.literal("3.1.0"),
    project: z.literal("Sparkle Auto Landing Page"),
    defaultLanguage: z.literal("ar"),
    supportedLanguages: z.tuple([z.literal("ar"), z.literal("en")]),
    contract: z
      .object({
        primaryMeaning: bilingualTextSchema,
        scroll: z
          .object({
            method: z.literal("scrollIntoView"),
            block: z.literal("start"),
            defaultBehavior: z.literal("smooth"),
            reducedMotionBehavior: z.literal("auto"),
            sectionScrollMargin: z.literal(
              "calc(var(--header-h) + var(--sp-4))",
            ),
          })
          .strict(),
        formContext: z
          .object({
            sourceField: z.literal("source"),
            planField: z.literal("plan"),
            allowedSources: z.tuple([
              z.literal("header"),
              z.literal("hero"),
              z.literal("setup"),
              z.literal("trial"),
              z.literal("final"),
              z.literal("footer"),
              z.literal("faq"),
            ]),
            allowedPlans: z.tuple([
              z.literal("operations"),
              z.literal("growth"),
              z.literal("expansion"),
            ]),
          })
          .strict(),
        unavailableLinkRule: z.string().min(1),
        analyticsEvent: z.literal("cta_click"),
      })
      .strict(),
    ctas: z.record(z.enum(ctaIds), ctaEntrySchema),
  })
  .strict();

export type CtaRegistry = z.infer<typeof ctaRegistrySchema>;
export type CtaId = (typeof ctaIds)[number];

export const ctaRegistry: CtaRegistry =
  ctaRegistrySchema.parse(ctaRegistryJson);

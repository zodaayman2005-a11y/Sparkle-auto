import { z } from "zod";

export const egyptianMobileE164Pattern = /^\+201[0125][0-9]{8}$/;

export const branchCountValues = ["1", "2-3", "4-6", "+7"] as const;
export const carsPerDayValues = ["<20", "20-50", "51-100", "+100"] as const;
export const roleValues = ["owner", "manager", "reception", "other"] as const;
export const localeValues = ["ar", "en"] as const;
export const planValues = ["operations", "growth", "expansion"] as const;
export const sourceValues = [
  "header",
  "hero",
  "setup",
  "trial",
  "final",
  "footer",
  "faq",
] as const;
export const mainProblemValues = [
  "branch-tracking",
  "bookings",
  "car-status",
  "day-closing",
  "team-permissions",
  "inventory",
  "retention-loyalty",
  "other",
] as const;

export type OperationsReviewOptionRegistry = Readonly<{
  approval: "blocked" | "approved";
  governorates: readonly string[];
  bestContactTimes: readonly string[];
}>;

/**
 * TODO(R-07): Replace the empty values and set approval to "approved" only
 * after the business approves the canonical option keys in GROUP 14.
 *
 * Keeping this registry blocked makes it impossible for production to accept
 * an arbitrary governorate or contact-time value in the meantime.
 */
export const operationsReviewOptionRegistry: OperationsReviewOptionRegistry = {
  approval: "blocked",
  governorates: [],
  bestContactTimes: [],
};

function normalizeArabicOrPersianDigits(value: string): string {
  return Array.from(value, (character) => {
    const codePoint = character.codePointAt(0);

    if (codePoint === undefined) {
      return character;
    }

    if (codePoint >= 0x0660 && codePoint <= 0x0669) {
      return String(codePoint - 0x0660);
    }

    if (codePoint >= 0x06f0 && codePoint <= 0x06f9) {
      return String(codePoint - 0x06f0);
    }

    return character;
  }).join("");
}

/**
 * Converts accepted Egyptian mobile input to one storage format:
 * +201XXXXXXXXX (E.164). Formatting spaces, dash characters and parentheses
 * are discarded before validation; no other punctuation is silently removed.
 */
export function normalizeEgyptianMobile(value: unknown): unknown {
  if (typeof value !== "string") {
    return value;
  }

  const compact = normalizeArabicOrPersianDigits(value.normalize("NFKC"))
    .trim()
    .replace(/[\p{White_Space}\p{Dash_Punctuation}()]/gu, "");

  if (/^01[0125][0-9]{8}$/.test(compact)) {
    return `+20${compact.slice(1)}`;
  }

  if (/^1[0125][0-9]{8}$/.test(compact)) {
    return `+20${compact}`;
  }

  if (/^201[0125][0-9]{8}$/.test(compact)) {
    return `+${compact}`;
  }

  return compact;
}

function hasCanonicalUniqueOptions(values: readonly string[]): boolean {
  return (
    values.every(
      (value) =>
        value.length > 0 && value.length <= 80 && value === value.trim(),
    ) && new Set(values).size === values.length
  );
}

export function isOperationsReviewOptionRegistryReady(
  registry: OperationsReviewOptionRegistry = operationsReviewOptionRegistry,
): boolean {
  return (
    registry.approval === "approved" &&
    registry.governorates.length > 0 &&
    hasCanonicalUniqueOptions(registry.governorates) &&
    hasCanonicalUniqueOptions(registry.bestContactTimes)
  );
}

export function createOperationsReviewSchema(
  optionRegistry: OperationsReviewOptionRegistry,
) {
  const registryReady = isOperationsReviewOptionRegistryReady(optionRegistry);
  const approvedGovernorates = new Set(optionRegistry.governorates);
  const approvedContactTimes = new Set(optionRegistry.bestContactTimes);

  return z.object({
    full_name: z.string().trim().min(3).max(80),
    phone: z.preprocess(
      normalizeEgyptianMobile,
      z.string().regex(egyptianMobileE164Pattern),
    ),
    wash_name: z.string().trim().min(2).max(80),
    governorate: z
      .string()
      .trim()
      .min(1)
      .max(80)
      .refine((value) => registryReady && approvedGovernorates.has(value)),
    branches_count: z.enum(branchCountValues),
    cars_per_day: z.enum(carsPerDayValues),
    role: z.enum(roleValues),
    current_tools: z.string().trim().max(300).optional(),
    main_problem: z.array(z.enum(mainProblemValues)).min(1).max(8),
    best_contact_time: z
      .string()
      .trim()
      .min(1)
      .max(80)
      .refine((value) => registryReady && approvedContactTimes.has(value))
      .optional(),
    lang: z.enum(localeValues).default("ar"),
    source: z.enum(sourceValues).optional(),
    plan: z.enum(planValues).optional(),
  });
}

export const operationsReviewSchema = createOperationsReviewSchema(
  operationsReviewOptionRegistry,
);

export type OperationsReviewInput = z.infer<typeof operationsReviewSchema>;

function optionalFormValue(
  formData: FormData,
  key: string,
): string | undefined {
  const value = formData.get(key);
  return typeof value === "string" && value.trim() ? value : undefined;
}

export function parseOperationsReviewFormData(formData: FormData) {
  return operationsReviewSchema.safeParse({
    full_name: formData.get("full_name"),
    phone: formData.get("phone"),
    wash_name: formData.get("wash_name"),
    governorate: formData.get("governorate"),
    branches_count: formData.get("branches_count"),
    cars_per_day: formData.get("cars_per_day"),
    role: formData.get("role"),
    current_tools: optionalFormValue(formData, "current_tools"),
    main_problem: formData.getAll("main_problem"),
    best_contact_time: optionalFormValue(formData, "best_contact_time"),
    lang: optionalFormValue(formData, "lang") ?? "ar",
    source: optionalFormValue(formData, "source"),
    plan: optionalFormValue(formData, "plan"),
  });
}

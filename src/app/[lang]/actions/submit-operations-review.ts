"use server";

import { createHmac } from "node:crypto";
import { isIP } from "node:net";

import { headers } from "next/headers";

import { getCopy } from "@/lib/copy";
import { defaultLocale, isLocale } from "@/lib/i18n";
import {
  createSupabaseAdmin,
  getSupabaseAdminConfig,
} from "@/lib/supabase/admin";
import {
  isOperationsReviewOptionRegistryReady,
  parseOperationsReviewFormData,
} from "@/lib/validation/operations-review";

export type SubmissionState =
  | { status: "idle" }
  | { status: "success"; requestId: string | null }
  | { status: "invalid"; fields: Record<string, string[]> }
  | { status: "rate_limited" }
  | { status: "configuration_error" }
  | { status: "server_error" };

const initialSubmissionState: SubmissionState = { status: "idle" };

export { initialSubmissionState };

function parseForwardedIp(value: string | null): string | null {
  const candidate = value?.split(",")[0]?.trim();

  return candidate && isIP(candidate) !== 0 ? candidate : null;
}

function getTrustedRequestIp(requestHeaders: Headers): string | null {
  if (process.env.VERCEL === "1") {
    return (
      parseForwardedIp(requestHeaders.get("x-vercel-forwarded-for")) ??
      parseForwardedIp(requestHeaders.get("x-forwarded-for")) ??
      parseForwardedIp(requestHeaders.get("x-real-ip"))
    );
  }

  if (process.env.NODE_ENV !== "production") {
    return (
      parseForwardedIp(requestHeaders.get("x-vercel-forwarded-for")) ??
      parseForwardedIp(requestHeaders.get("x-forwarded-for")) ??
      parseForwardedIp(requestHeaders.get("x-real-ip"))
    );
  }

  return null;
}

function getRateLimitFingerprint(ip: string, secret: string): string {
  return createHmac("sha256", secret).update(ip).digest("hex");
}

function getRateLimitSecret(): string | null {
  const secret = process.env.SPARKLE_RATE_LIMIT_SECRET?.trim();

  return secret && Buffer.byteLength(secret, "utf8") >= 32 ? secret : null;
}

export async function submitOperationsReview(
  _previousState: SubmissionState,
  formData: FormData,
): Promise<SubmissionState> {
  const submittedLocale = formData.get("lang");
  const locale =
    typeof submittedLocale === "string" && isLocale(submittedLocale)
      ? submittedLocale
      : defaultLocale;
  const honeypot = formData.get("company_website");

  if (typeof honeypot === "string" && honeypot.trim()) {
    return { status: "success", requestId: null };
  }

  if (!isOperationsReviewOptionRegistryReady()) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        "TODO(R-07): Approved governorate and contact-time option keys are required before form submissions can be accepted.",
      );
    }
    return { status: "configuration_error" };
  }

  const parsed = parseOperationsReviewFormData(formData);

  if (!parsed.success) {
    const errorCopy = getCopy(locale).sections.applicationForm.errors;
    const submittedFieldErrors = parsed.error.flatten().fieldErrors;
    const localizedFieldErrors = Object.fromEntries(
      Object.keys(submittedFieldErrors).map((field) => {
        const message =
          field in errorCopy
            ? errorCopy[field as keyof typeof errorCopy]
            : errorCopy.summary;

        return [field, [message]];
      }),
    );

    return {
      status: "invalid",
      fields: localizedFieldErrors,
    };
  }

  const config = getSupabaseAdminConfig();
  const rateLimitSecret = getRateLimitSecret();

  if (!config || !rateLimitSecret) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "TODO(BLK-10): SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and a SPARKLE_RATE_LIMIT_SECRET of at least 32 bytes are required.",
      );
    }
    return { status: "configuration_error" };
  }

  const requestHeaders = await headers();
  const requestIp = getTrustedRequestIp(requestHeaders);

  if (!requestIp) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        "Operations review submission requires a valid trusted proxy IP header; no shared fallback bucket is used.",
      );
    }
    return { status: "configuration_error" };
  }

  const fingerprint = getRateLimitFingerprint(requestIp, rateLimitSecret);
  const supabase = createSupabaseAdmin(config);
  const { data: accepted, error: rateLimitError } = await supabase.rpc(
    "consume_operations_review_rate_limit",
    { p_fingerprint: fingerprint },
  );

  if (rateLimitError) {
    console.error("Operations review rate-limit failure", rateLimitError.code);
    return { status: "server_error" };
  }

  if (!accepted) {
    return { status: "rate_limited" };
  }

  const { data, error } = await supabase
    .from("operations_review_requests")
    .insert({
      ...parsed.data,
      current_tools: parsed.data.current_tools ?? null,
      best_contact_time: parsed.data.best_contact_time ?? null,
      source: parsed.data.source ?? null,
      plan: parsed.data.plan ?? null,
      user_agent: requestHeaders.get("user-agent"),
    })
    .select("id")
    .single();

  if (error) {
    console.error("Operations review insert failure", error.code);
    return { status: "server_error" };
  }

  return { status: "success", requestId: data.id as string };
}

import "server-only";

import ar from "@content/copy.ar.json";
import en from "@content/copy.en.json";

import type { Locale } from "@/lib/i18n";

export type SiteCopy = typeof ar;

const copyByLocale: Record<Locale, SiteCopy> = {
  ar,
  en: en as SiteCopy,
};

export function getCopy(locale: Locale): SiteCopy {
  return copyByLocale[locale];
}

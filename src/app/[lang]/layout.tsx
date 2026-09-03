import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css";

import { cairo, nunito } from "@/app/fonts";
import { getCopy } from "@/lib/copy";
import { getDirection, isLocale, locales } from "@/lib/i18n";

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

function getMetadataOrigin(): string {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredOrigin) {
    const parsedOrigin = new URL(configuredOrigin);
    const isWebOrigin = ["http:", "https:"].includes(parsedOrigin.protocol);
    const isLocalOrigin = ["localhost", "127.0.0.1", "::1"].includes(
      parsedOrigin.hostname,
    );

    if (!isWebOrigin || parsedOrigin.username || parsedOrigin.password) {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without credentials.",
      );
    }

    if (
      process.env.VERCEL === "1" &&
      (isLocalOrigin || parsedOrigin.protocol !== "https:")
    ) {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL must be a public HTTPS origin on Vercel.",
      );
    }

    return parsedOrigin.origin;
  }

  const vercelHostname =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  if (vercelHostname) {
    return `https://${vercelHostname}`;
  }

  if (process.env.VERCEL === "1") {
    throw new Error(
      "A canonical site origin is required for a Vercel deployment.",
    );
  }

  return "http://localhost:3000";
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const copy = getCopy(lang);
  const metadataBase = new URL(getMetadataOrigin());

  return {
    metadataBase,
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "ar-EG": "/ar",
        en: "/en",
        "x-default": "/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? ["en_US"] : ["ar_EG"],
      title: copy.meta.openGraphTitle,
      description: copy.meta.openGraphDescription,
      url: `/${lang}`,
      siteName: copy.brand.name,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const fontClass = lang === "ar" ? cairo.variable : nunito.variable;

  return (
    <html className={fontClass} dir={getDirection(lang)} lang={lang}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import { notFound } from "next/navigation";

import { getCopy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";

type LandingPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function LandingPage({ params }: LandingPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const copy = getCopy(lang);

  return (
    <>
      <a className="skip-link" href="#hero">
        {copy.global.skipLink}
      </a>
      <main
        aria-label={copy.global.mainAriaLabel}
        className="shell-main"
        id="hero"
        tabIndex={-1}
      >
        <h1 className="sr-only">{copy.meta.title}</h1>
      </main>
    </>
  );
}

import { expect, test } from "@playwright/test";

import { languages, testMatrix } from "./test-matrix";

for (const viewport of testMatrix) {
  for (const language of languages) {
    test(`${language.locale} ${viewport.name} produces visual-review evidence`, async ({
      page,
    }, testInfo) => {
      await page.setViewportSize(viewport);
      await page.goto(`/${language.locale}`);
      await page.evaluate(() => document.fonts.ready);

      const screenshot = await page.screenshot({ fullPage: true });
      await testInfo.attach(`${language.locale}-${viewport.name}`, {
        body: screenshot,
        contentType: "image/png",
      });

      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        language.locale,
      );
      expect(screenshot.byteLength).toBeGreaterThan(0);
    });
  }
}

test("the root URL resolves to the Arabic default", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/ar$/);
});

for (const language of languages) {
  test(`${language.locale} emits canonical and bilingual metadata`, async ({
    page,
  }) => {
    await page.goto(`/${language.locale}`);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/${language.locale}$`),
    );
    await expect(
      page.locator('link[rel="alternate"][hreflang="ar-EG"]'),
    ).toHaveCount(1);
    await expect(
      page.locator('link[rel="alternate"][hreflang="en"]'),
    ).toHaveCount(1);
    await expect(
      page.locator('link[rel="alternate"][hreflang="x-default"]'),
    ).toHaveCount(1);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /\S+/,
    );
  });
}

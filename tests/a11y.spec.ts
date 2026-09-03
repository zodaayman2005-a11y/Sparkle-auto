import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import { languages, testMatrix } from "./test-matrix";

for (const viewport of testMatrix) {
  for (const language of languages) {
    test(`${language.locale} ${viewport.name} passes the GROUP 00 accessibility gate`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.goto(`/${language.locale}`);

      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        language.locale,
      );
      await expect(page.locator("html")).toHaveAttribute(
        "dir",
        language.direction,
      );
      await expect(page.locator("a.skip-link")).toHaveAttribute(
        "href",
        "#hero",
      );
      await expect(page.locator("main#hero")).toHaveCount(1);

      await page.keyboard.press("Tab");
      await expect(page.locator("a.skip-link")).toBeFocused();
      await expect(page.locator("a.skip-link")).toBeVisible();

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }
}

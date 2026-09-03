import { expect, test } from "@playwright/test";

import { languages, testMatrix } from "./test-matrix";

for (const viewport of testMatrix) {
  for (const language of languages) {
    test(`${language.locale} ${viewport.name} has no horizontal overflow`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.goto(`/${language.locale}`);
      await page.waitForLoadState("networkidle");

      const result = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        const overflow = document.documentElement.scrollWidth - viewportWidth;
        const offenders = Array.from(
          document.querySelectorAll<HTMLElement>("body *"),
        )
          .map((element) => ({
            element,
            rectangle: element.getBoundingClientRect(),
          }))
          .filter(
            ({ rectangle }) =>
              rectangle.left < -1 || rectangle.right > viewportWidth + 1,
          )
          .map(({ element, rectangle }) => ({
            tag: element.tagName.toLowerCase(),
            id: element.id,
            className: element.getAttribute("class") ?? "",
            left: Math.round(rectangle.left),
            right: Math.round(rectangle.right),
          }));

        return { overflow, offenders };
      });

      expect(result.overflow).toBeLessThanOrEqual(0);
      expect(result.offenders).toEqual([]);
    });
  }
}

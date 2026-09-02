import { expect, test } from "@playwright/test";

type Box = { x: number; y: number; width: number; height: number };

const expectBoxClose = (actual: Box | null, expected: Partial<Box>, tolerance = 8) => {
  expect(actual).not.toBeNull();
  for (const [key, value] of Object.entries(expected)) {
    expect(Math.abs(actual![key as keyof Box] - value), `${key} differs by more than ${tolerance}px`).toBeLessThanOrEqual(
      tolerance,
    );
  }
};

test.describe("GROUP 03 hero", () => {
  test("renders the complete approved Arabic copy and no reference-only claims", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator(".hero__eyebrow")).toHaveText("نظام إدارة متكامل لمغاسل السيارات");
    await expect(page.locator("#hero-title")).toContainText("مش لازم تفضل في");
    await expect(page.locator("#hero-title")).toContainText("المغسلة عشان تكون");
    await expect(page.locator("#hero-title")).toContainText("مسيطر عليها.");
    await expect(page.locator(".hero__description p").nth(0)).toHaveText(
      "Sparkle Auto بيجمع تشغيل مغسلتك في مكان واحد: الحجوزات، حالة العربيات، الفريق، المخزون، الإيرادات والعملاء.",
    );
    await expect(page.locator(".hero__description p").nth(1)).toHaveText(
      "بدل المكالمات والتقارير المتفرقة: افتح واعرف إيه اللي بيحصل في مغسلتك حتى لو إنت بعيد.",
    );
    await expect(page.locator(".hero__microcopy p")).toHaveText(
      "مراجعة قصيرة نفهم فيها طريقة شغلك ونقولك بصراحة هل Sparkle Auto مناسب ليك ولا لأ.",
    );
    await expect(page.locator(".hero__sticker-copy")).toHaveText("مغسلتك في جيبك.");

    await expect(page.getByRole("link", { name: "احجز مراجعة تشغيل لفروعك" })).toHaveAttribute(
      "href",
      "/#application",
    );
    await expect(page.getByRole("link", { name: "شوف السيستم وهو شغال" })).toHaveAttribute(
      "href",
      "#hero-product",
    );

    const heroText = await page.locator(".hero").innerText();
    expect(heroText).not.toContain("Built for car wash owners in Egypt");
    expect(heroText).not.toContain("Easy to use");
    expect(heroText).not.toContain("Works on any device");
    expect(heroText).not.toContain("Local support");
    expect(heroText).not.toContain("Run it Smarter");
  });

  test("uses the supplied real Overview and booking screenshots without stretching", async ({ page }) => {
    await page.goto("/");

    const desktop = page.locator(".hero__screen--laptop");
    const phone = page.locator(".hero__screen--phone");

    await expect
      .poll(() =>
        desktop.evaluate(
          (image: HTMLImageElement) =>
            image.complete && image.naturalWidth === 1280 && image.naturalHeight === 720,
        ),
      )
      .toBe(true);
    await expect
      .poll(() =>
        phone.evaluate(
          (image: HTMLImageElement) =>
            image.complete && image.naturalWidth === 720 && image.naturalHeight === 1280,
        ),
      )
      .toBe(true);

    await expect(desktop).toHaveAttribute("alt", /Overview/);
    await expect(phone).toHaveAttribute("alt", /شاشة الحجز الحقيقية/);
    await expect(desktop).toHaveCSS("object-fit", "contain");
    await expect(phone).toHaveCSS("object-fit", "contain");
  });

  test("selects independent English and Arabic desktop artwork without mirroring", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("desktop"), "Desktop artwork selection only");
    await page.emulateMedia({ reducedMotion: "reduce" });

    await page.goto("/en/");
    const englishArt = page.locator(".hero__product-art img");
    await expect.poll(() => englishArt.evaluate((image: HTMLImageElement) => image.currentSrc)).toContain(
      "hero-product-desktop-en",
    );
    await expect(englishArt).toHaveCSS("transform", "none");

    await page.goto("/");
    const arabicArt = page.locator(".hero__product-art img");
    await expect.poll(() => arabicArt.evaluate((image: HTMLImageElement) => image.currentSrc)).toContain(
      "hero-product-desktop-ar",
    );
    await expect(arabicArt).toHaveCSS("transform", "none");
  });

  test("preserves the English master composition at 1536 by 864", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("desktop"), "Desktop composition only");
    await page.goto("/en/");

    const header = await page.locator(".site-header").boundingBox();
    const hero = await page.locator(".hero").boundingBox();
    const eyebrow = await page.locator(".hero__eyebrow").boundingBox();
    const headline = await page.locator(".hero__headline").boundingBox();
    const description = await page.locator(".hero__description").boundingBox();
    const actions = await page.locator(".hero__actions").boundingBox();
    const microcopy = await page.locator(".hero__microcopy").boundingBox();
    const stage = await page.locator(".hero__product-stage").boundingBox();
    const laptop = await page.locator(".hero__screen--laptop").boundingBox();
    const phone = await page.locator(".hero__screen--phone").boundingBox();
    const sticker = await page.locator(".hero__sticker").boundingBox();

    const viewport = await page.evaluate(() => ({
      width: innerWidth,
      height: innerHeight,
      dpr: devicePixelRatio,
      scrollHeight: document.scrollingElement?.scrollHeight,
      scrollWidth: document.scrollingElement?.scrollWidth,
    }));
    expect(viewport).toEqual({ width: 1536, height: 864, dpr: 1, scrollHeight: 864, scrollWidth: 1536 });

    expectBoxClose(header, { x: 0, y: 0, width: 1536, height: 112 }, 2);
    expectBoxClose(hero, { x: 0, y: 112, width: 1536, height: 752 }, 2);
    expectBoxClose(eyebrow, { x: 64, y: 150, width: 440, height: 41 });
    expectBoxClose(headline, { x: 64, y: 211, width: 525 });
    expectBoxClose(description, { x: 64, y: 410, width: 500 });
    expectBoxClose(actions, { x: 64, y: 567, width: 499, height: 56 });
    expectBoxClose(microcopy, { x: 64, y: 646, width: 498, height: 93 });
    expectBoxClose(stage, { x: 547, y: 94, width: 989 });
    expectBoxClose(laptop, { x: 632, y: 326, width: 579, height: 326 });
    expectBoxClose(phone, { x: 1156, y: 459, width: 146, height: 259 });
    expectBoxClose(sticker, { x: 1376, y: 129, width: 150, height: 96 });
    expect(laptop!.x).toBeGreaterThan(headline!.x + headline!.width);

    const headlineStyle = await page.locator(".hero__headline").evaluate((element) => ({
      fontSize: parseFloat(getComputedStyle(element).fontSize),
      lineHeight: parseFloat(getComputedStyle(element).lineHeight),
    }));
    expect(headlineStyle.fontSize).toBeGreaterThanOrEqual(62);
    expect(headlineStyle.fontSize).toBeLessThanOrEqual(64);
    expect(headlineStyle.lineHeight).toBeGreaterThanOrEqual(58);
    expect(headlineStyle.lineHeight).toBeLessThanOrEqual(61);
  });

  test("uses the dedicated Arabic mobile asset and content-first sequence without overflow", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile composition only");
    await page.goto("/");

    const actions = await page.locator(".hero__actions").boundingBox();
    const microcopy = await page.locator(".hero__microcopy").boundingBox();
    const stage = await page.locator(".hero__product-stage").boundingBox();
    const laptop = await page.locator(".hero__screen--laptop").boundingBox();
    const phone = await page.locator(".hero__screen--phone").boundingBox();

    expect(actions).not.toBeNull();
    expect(microcopy).not.toBeNull();
    expect(stage).not.toBeNull();
    expect(laptop).not.toBeNull();
    expect(phone).not.toBeNull();
    expect(microcopy!.y).toBeGreaterThan(actions!.y + actions!.height);
    expect(stage!.y).toBeGreaterThan(microcopy!.y + microcopy!.height);
    expect(laptop!.width).toBeGreaterThan(220);
    expect(phone!.width).toBeGreaterThan(48);

    await expect.poll(() => page.locator(".hero__product-art img").evaluate((image: HTMLImageElement) => image.currentSrc)).toContain(
      "hero-product-mobile-ar-v2",
    );
    await expect.poll(() => page.locator(".hero__water img").evaluate((image: HTMLImageElement) => image.currentSrc)).toContain(
      "hero-water-mobile",
    );

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
  });

  test("keeps primary value and CTA visible in the 390 by 844 first fold", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile fold check only");
    await page.goto("/");

    const headline = await page.locator("#hero-title").boundingBox();
    const primary = await page.getByRole("link", { name: "احجز مراجعة تشغيل لفروعك" }).boundingBox();
    expect(headline).not.toBeNull();
    expect(primary).not.toBeNull();
    expect(headline!.y + headline!.height).toBeLessThan(844);
    expect(primary!.y + primary!.height).toBeLessThan(844);
  });

  test("has keyboard-visible CTA focus and a reduced-motion final state", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/en/");

    const primary = page.locator(".hero__button--primary");
    await primary.focus();
    expect(await primary.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");
    expect(await page.locator(".hero__product-stage").evaluate((element) => getComputedStyle(element).animationName)).toBe(
      "none",
    );
    expect(await page.locator(".hero__sticker").evaluate((element) => getComputedStyle(element).animationName)).toBe(
      "none",
    );
  });
});

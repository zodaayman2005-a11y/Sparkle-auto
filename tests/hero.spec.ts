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
  test("renders the approved Arabic copy, outcomes, and destinations", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator(".hero__eyebrow")).toHaveText("نظام إدارة متكامل لمغاسل السيارات");
    await expect(page.locator("#hero-title")).toContainText("مش لازم تفضل");
    await expect(page.locator("#hero-title")).toContainText("في المغسلة عشان");
    await expect(page.locator("#hero-title")).toContainText("تكون مسيطر عليها.");
    await expect(page.locator(".hero__description")).toContainText(
      "Sparkle Auto بيجمع تشغيل مغسلتك في مكان واحد",
    );
    await expect(page.locator(".hero__description")).toContainText("بدل المكالمات والتقارير المتفرقة:");

    await expect(page.getByRole("link", { name: "احجز مراجعة تشغيل لفروعك" })).toHaveAttribute(
      "href",
      "/#application",
    );
    await expect(page.getByRole("link", { name: "شوف السيستم وهو شغال" })).toHaveAttribute(
      "href",
      "#hero-product",
    );
    await expect(page.locator(".hero__trust-title")).toHaveText("Built for car wash owners in Egypt");
    await expect(page.locator(".hero__trust-list li")).toHaveCount(3);
    await expect(page.locator(".hero__product-caption")).toHaveCount(0);
  });

  test("uses the supplied real Overview and booking screenshots", async ({ page }) => {
    await page.goto("/");

    const desktop = page.locator(".hero__desktop-screen");
    const phone = page.locator(".hero__mobile-screen");

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
  });

  test("preserves the reference composition on desktop", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("desktop"), "Desktop composition only");
    await page.goto("/en/");

    const header = await page.locator(".site-header").boundingBox();
    const hero = await page.locator(".hero").boundingBox();
    const eyebrow = await page.locator(".hero__eyebrow").boundingBox();
    const headline = await page.locator(".hero__headline").boundingBox();
    const description = await page.locator(".hero__description").boundingBox();
    const actions = await page.locator(".hero__actions").boundingBox();
    const trust = await page.locator(".hero__trust").boundingBox();
    const laptop = await page.locator(".hero__laptop").boundingBox();
    const phone = await page.locator(".hero__phone").boundingBox();
    const character = await page.locator(".hero__character").boundingBox();
    const accent = await page.locator(".hero__headline-accent").boundingBox();

    const viewport = await page.evaluate(() => ({
      width: innerWidth,
      height: innerHeight,
      dpr: devicePixelRatio,
      scrollHeight: document.scrollingElement?.scrollHeight,
    }));
    expect(viewport).toEqual({ width: 1536, height: 864, dpr: 1, scrollHeight: 864 });

    expectBoxClose(header, { x: 0, y: 0, width: 1536, height: 112 }, 2);
    expectBoxClose(hero, { x: 0, y: 0, width: 1536, height: 864 }, 2);
    expectBoxClose(eyebrow, { x: 64, y: 150, width: 440, height: 41 });
    expectBoxClose(headline, { x: 64, y: 211, width: 525 });
    expectBoxClose(description, { x: 64, y: 411, width: 500 });
    expect(description!.y + description!.height).toBeLessThanOrEqual(530);
    expectBoxClose(actions, { x: 64, y: 563, width: 499, height: 56 });
    expectBoxClose(trust, { x: 64, y: 644, width: 498, height: 93 });
    expectBoxClose(laptop, { x: 583, y: 296, width: 680 });
    expect(Math.abs(laptop!.y + laptop!.height - 729)).toBeLessThanOrEqual(2);
    expectBoxClose(phone, { x: 1158, y: 422, width: 149, height: 352 });
    expect(character!.y + character!.height).toBeGreaterThanOrEqual(810);
    expect(character!.y + character!.height).toBeLessThanOrEqual(818);
    expectBoxClose(accent, { x: 566, y: 210, width: 44, height: 50 });

    await expect(page.locator(".hero__button--primary")).toHaveText("Book an Operations Review");
    expect(await page.locator(".hero").evaluate((element) => getComputedStyle(element).overflow)).toBe("hidden");
    const headlineStyle = await page.locator(".hero__headline").evaluate((element) => ({
      fontSize: parseFloat(getComputedStyle(element).fontSize),
      lineHeight: parseFloat(getComputedStyle(element).lineHeight),
    }));
    expect(headlineStyle.fontSize).toBeGreaterThanOrEqual(62);
    expect(headlineStyle.fontSize).toBeLessThanOrEqual(64);
    expect(headlineStyle.lineHeight).toBeGreaterThanOrEqual(58);
    expect(headlineStyle.lineHeight).toBeLessThanOrEqual(63);
    await expect(page.locator(".hero__headline > span")).toHaveCount(3);
    await expect(page.locator(".hero__trust svg").first()).toHaveAttribute("aria-hidden", "true");
  });

  test("uses the dedicated stacked mobile composition without overflow", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile composition only");
    await page.goto("/");

    const content = await page.locator(".hero__content").boundingBox();
    const actions = await page.locator(".hero__actions").boundingBox();
    const laptop = await page.locator(".hero__laptop").boundingBox();
    const phone = await page.locator(".hero__phone").boundingBox();
    const trust = await page.locator(".hero__trust").boundingBox();

    expect(content).not.toBeNull();
    expect(actions).not.toBeNull();
    expect(laptop).not.toBeNull();
    expect(phone).not.toBeNull();
    expect(trust).not.toBeNull();
    expect(actions!.y).toBeGreaterThan(content!.y);
    expect(trust!.y).toBeGreaterThan(actions!.y);
    expect(laptop!.y).toBeGreaterThan(trust!.y + trust!.height);
    expect(phone!.y).toBeGreaterThan(laptop!.y + laptop!.height);
    await expect(page.locator(".hero__character")).toBeHidden();
    await expect(page.locator(".hero__water-mobile")).toBeVisible();
    expect(await page.locator(".hero__water-mobile img").evaluate((image: HTMLImageElement) => image.currentSrc)).toContain(
      "hero-water-background-mobile",
    );

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
  });

  test("reduced motion preserves all content and removes hero animation", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/en/");

    await expect(page.locator("#hero-title")).toBeVisible();
    await expect(page.locator(".hero__desktop-screen")).toBeVisible();
    await expect(page.locator(".hero__mobile-screen")).toBeVisible();
    expect(await page.locator(".hero__laptop").evaluate((element) => getComputedStyle(element).animationName)).toBe(
      "none",
    );
    expect(await page.locator(".hero__phone").evaluate((element) => getComputedStyle(element).animationName)).toBe(
      "none",
    );
  });
});

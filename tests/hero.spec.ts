import { expect, test } from "@playwright/test";

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
    await expect(page.locator(".hero__product-caption")).toHaveText("مغسلتك في جيبك.");
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

    const content = await page.locator(".hero__content").boundingBox();
    const laptop = await page.locator(".hero__laptop").boundingBox();
    const phone = await page.locator(".hero__phone").boundingBox();
    const character = await page.locator(".hero__character").boundingBox();

    expect(content).not.toBeNull();
    expect(laptop).not.toBeNull();
    expect(phone).not.toBeNull();
    expect(character).not.toBeNull();
    expect(content!.x).toBeLessThan(laptop!.x);
    expect(laptop!.x).toBeLessThan(phone!.x);
    expect(laptop!.width).toBeGreaterThan(500);
    expect(phone!.height).toBeGreaterThan(260);
    expect(character!.x).toBeGreaterThan(laptop!.x);
    expect(character!.height).toBeGreaterThan(560);
  });

  test("uses the dedicated stacked mobile composition without overflow", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile composition only");
    await page.goto("/");

    const content = await page.locator(".hero__content").boundingBox();
    const actions = await page.locator(".hero__actions").boundingBox();
    const laptop = await page.locator(".hero__laptop").boundingBox();
    const phone = await page.locator(".hero__phone").boundingBox();
    const caption = await page.locator(".hero__product-caption").boundingBox();

    expect(content).not.toBeNull();
    expect(actions).not.toBeNull();
    expect(laptop).not.toBeNull();
    expect(phone).not.toBeNull();
    expect(caption).not.toBeNull();
    expect(actions!.y).toBeGreaterThan(content!.y);
    expect(laptop!.y).toBeGreaterThan(actions!.y);
    expect(phone!.y).toBeGreaterThan(laptop!.y + laptop!.height);
    expect(caption!.y).toBeGreaterThan(phone!.y + phone!.height);
    await expect(page.locator(".hero__character")).toBeHidden();
    await expect(page.locator(".hero__water")).toBeVisible();
    expect(await page.locator(".hero__water").evaluate((image: HTMLImageElement) => image.currentSrc)).toContain(
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

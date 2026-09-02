import { expect, test } from "@playwright/test";

const arabicNavigation = [
  ["السيستم", "/#system"],
  ["طريقة الشغل", "/#workflow"],
  ["التجهيز", "/#setup"],
  ["الأسعار", "/#pricing"],
  ["الأسئلة الشائعة", "/#faq"],
] as const;

const englishNavigation = [
  ["System", "/en/#system"],
  ["How It Works", "/en/#workflow"],
  ["Setup", "/en/#setup"],
  ["Pricing", "/en/#pricing"],
  ["FAQ", "/en/#faq"],
] as const;

test.describe("GROUP 02 header", () => {
  test("renders the approved Arabic RTL copy and destinations", async ({ page }, testInfo) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator(".site-header")).toBeVisible();
    await expect.poll(() => page.locator(".brand__mark").evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);

    const navigation = page.locator(".desktop-nav");
    if (testInfo.project.name.startsWith("desktop")) await expect(navigation).toBeVisible();
    else await expect(navigation).toBeHidden();

    for (const [label, href] of arabicNavigation) {
      await expect(navigation.getByRole("link", { name: label, includeHidden: true })).toHaveAttribute("href", href);
    }

    const cta = page.getByRole("link", { name: "احجز مراجعة تشغيل" });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/#application");
    expect((await cta.boundingBox())?.height).toBeGreaterThanOrEqual(48);
    await expect(page.locator("main")).toHaveText("");
  });

  test("renders the approved English LTR copy and destinations", async ({ page }, testInfo) => {
    await page.goto("/en/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");

    const navigation = page.locator(".desktop-nav");
    if (testInfo.project.name.startsWith("desktop")) await expect(navigation).toBeVisible();
    else await expect(navigation).toBeHidden();

    for (const [label, href] of englishNavigation) {
      await expect(navigation.getByRole("link", { name: label, includeHidden: true })).toHaveAttribute("href", href);
    }

    await expect(page.getByRole("link", { name: "Book an Operations Review" })).toHaveAttribute("href", "/en/#application");
    await expect(page.locator('.language-switch--inline a[lang="en"]')).toHaveAttribute("aria-current", "page");
  });

  test("mirrors the reference composition intentionally", async ({ page }, testInfo) => {
    await page.goto(testInfo.project.name.startsWith("mobile") ? "/" : "/en/");

    const header = await page.locator(".site-header__inner").boundingBox();
    const brand = await page.locator(".brand").boundingBox();
    const cta = await page.locator(".primary-cta").boundingBox();
    const menu = await page.locator(".menu-toggle").boundingBox();

    expect(header).not.toBeNull();
    expect(brand).not.toBeNull();
    expect(cta).not.toBeNull();
    expect(menu).not.toBeNull();

    if (testInfo.project.name.startsWith("desktop")) {
      const navigation = await page.locator(".desktop-nav").boundingBox();
      expect(navigation).not.toBeNull();
      expect(header!.height).toBeGreaterThanOrEqual(130);
      expect(brand!.x).toBeLessThan(navigation!.x);
      expect(navigation!.x).toBeLessThan(cta!.x);
      expect(cta!.x).toBeLessThan(menu!.x);
    } else {
      expect(brand!.x).toBeGreaterThan(cta!.x);
      expect(cta!.x).toBeGreaterThan(menu!.x);
    }
  });

  test("mobile menu is keyboard accessible and restores focus", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile interaction only");
    await page.goto("/");

    const toggle = page.locator("[data-menu-toggle]");
    const panel = page.locator("[data-menu-panel]");

    await expect(toggle).toHaveAccessibleName("فتح قائمة التنقل");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(panel).toBeHidden();

    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(toggle).toHaveAccessibleName("إغلاق قائمة التنقل");
    await expect(page.getByRole("navigation", { name: "قائمة التنقل" })).toBeVisible();
    await expect(page.getByRole("link", { name: "السيستم" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
    await expect(panel).toBeHidden();
  });

  test("focus is visible and the 320px layout does not overflow", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto("/");

    await page.keyboard.press("Tab");
    await expect(page.locator(".skip-link")).toBeFocused();
    const outline = await page.locator(".skip-link").evaluate((element) => getComputedStyle(element).outlineStyle);
    expect(outline).not.toBe("none");

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
  });

  test("reduced motion keeps the menu complete and functional", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile interaction only");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const toggle = page.getByRole("button", { name: "فتح قائمة التنقل" });
    await toggle.click();
    await expect(page.getByRole("navigation", { name: "قائمة التنقل" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("[data-menu-panel]")).toBeHidden();
  });
});

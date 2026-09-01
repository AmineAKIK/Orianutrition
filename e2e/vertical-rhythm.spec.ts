import { expect, test } from "@playwright/test";

const pageStartRoutes = [
  "#/mon-approche",
  "#/accompagnements",
  "#/recettes",
  "#/conseils",
  "#/espace-client",
];

test("top-level pages share a controlled desktop start rhythm", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "Vertical rhythm contracts only need one rendering engine.",
  );

  await page.setViewportSize({ width: 1440, height: 900 });

  for (const route of pageStartRoutes) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);

    const paddingTop = await page
      .locator("#main-content > section")
      .first()
      .evaluate((section) =>
        Number.parseFloat(getComputedStyle(section).paddingTop),
      );

    expect(
      paddingTop,
      `${route} starts with more than 72px of desktop top padding`,
    ).toBeLessThanOrEqual(72);
  }
});

test("standard page transitions do not stack oversized vertical padding", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "Vertical rhythm contracts only need one rendering engine.",
  );

  for (const viewport of [
    { width: 1280, height: 720 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport);

    for (const route of ["#/sommeil", "#/contact"]) {
      await page.goto(route);
      await expect(page.locator("h1")).toHaveCount(1);

      const [introBottom, bodyTop] = await page
        .locator("#main-content > section")
        .evaluateAll((sections) => {
          const intro = sections[0];
          const body = sections[1];
          return [
            Number.parseFloat(getComputedStyle(intro).paddingBottom),
            Number.parseFloat(getComputedStyle(body).paddingTop),
          ];
        });

      expect(
        introBottom + bodyTop,
        `${route} stacks too much whitespace at ${viewport.width}×${viewport.height}`,
      ).toBeLessThanOrEqual(112);
    }
  }
});

test("closing callout and footer use distinct surfaces with compact spacing", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "Vertical rhythm contracts only need one rendering engine.",
  );

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("#/mon-approche");

  const sections = page.locator("#main-content > section");
  const closingSection = sections.last();
  const footer = page.locator("footer");
  await expect(footer).toBeVisible();

  const closingPaddingBottom = await closingSection.evaluate((section) =>
    Number.parseFloat(getComputedStyle(section).paddingBottom),
  );
  const footerPaddingTop = await footer
    .locator(":scope > div")
    .first()
    .evaluate((container) =>
      Number.parseFloat(getComputedStyle(container).paddingTop),
    );
  const [closingBackground, footerBackground, footerBorderTop] =
    await Promise.all([
      closingSection.evaluate(
        (element) => getComputedStyle(element).backgroundColor,
      ),
      footer.evaluate((element) => getComputedStyle(element).backgroundColor),
      footer.evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).borderTopWidth),
      ),
    ]);

  expect(closingPaddingBottom).toBeLessThanOrEqual(72);
  expect(footerPaddingTop).toBeLessThanOrEqual(64);
  expect(closingBackground).not.toBe(footerBackground);
  expect(footerBorderTop).toBe(0);
});

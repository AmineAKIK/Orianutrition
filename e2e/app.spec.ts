import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "#/",
  "#/mon-approche",
  "#/accompagnements",
  "#/recettes",
  "#/recettes/bowl-quinoa-courge-pois-chiches",
  "#/conseils",
  "#/conseils/organiser-repas-semaine-de-nuit",
  "#/sommeil",
  "#/faq",
  "#/contact",
  "#/mentions-legales",
  "#/espace-client",
  "#/route-inconnue",
];

const responsiveRoutes = [
  "#/",
  "#/mon-approche",
  "#/accompagnements",
  "#/recettes",
  "#/conseils",
  "#/sommeil",
  "#/contact",
  "#/espace-client",
];

const responsiveWidths = [320, 375, 430, 768, 1024, 1279, 1280, 1440, 1920];

for (const route of routes) {
  test(`${route} loads with core accessibility invariants`, async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await page.goto(route);
    await expect(page.locator("#main-content")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const blockingViolations = results.violations.filter(
      (violation) =>
        violation.impact === "critical" || violation.impact === "serious",
    );

    expect(
      blockingViolations,
      JSON.stringify(blockingViolations, null, 2),
    ).toEqual([]);
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });
}

test("skip link preserves the hash route and focuses main", async ({
  page,
}) => {
  await page.goto("#/accompagnements");
  const routeUrl = page.url();
  const skipLink = page.getByRole("link", { name: "Aller au contenu" });

  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");

  expect(page.url()).toBe(routeUrl);
  await expect(page.locator("#main-content")).toBeFocused();
});

test("mobile navigation restores focus on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("#/");

  const menuButton = page.getByRole("button", { name: "Ouvrir le menu" });
  await menuButton.click();
  await expect(
    page.getByRole("navigation", { name: "Navigation mobile" }),
  ).toBeVisible();

  await page.keyboard.press("Escape");

  await expect(
    page.getByRole("navigation", { name: "Navigation mobile" }),
  ).toHaveCount(0);
  await expect(menuButton).toBeFocused();
});

test("responsive surfaces never overflow the viewport", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "The layout-width matrix only needs one rendering engine; cross-engine behavior is covered by the accessibility route suite.",
  );

  for (const width of responsiveWidths) {
    await page.setViewportSize({ width, height: 900 });

    for (const route of responsiveRoutes) {
      await page.goto(route);
      await expect(page.locator("#main-content")).toBeVisible();

      const dimensions = await page.evaluate(() => ({
        viewportWidth: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
      }));

      expect(
        dimensions.documentWidth,
        `${route} overflows horizontally at ${width}px`,
      ).toBeLessThanOrEqual(dimensions.viewportWidth);
    }
  }
});

test("header only expands when the desktop navigation has room", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "Header breakpoint behavior is engine-independent and is exercised once.",
  );

  for (const width of [1024, 1279]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("#/");
    await expect(
      page.getByRole("button", { name: "Ouvrir le menu" }),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Navigation principale" }),
    ).toBeHidden();
  }

  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("#/");
  await expect(
    page.getByRole("navigation", { name: "Navigation principale" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Ouvrir le menu" }),
  ).toBeHidden();
});

test("short pages keep the footer at the viewport edge", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "The vertical shell contract only needs one rendering engine.",
  );

  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.goto("#/espace-client");

  const footerBottom = await page.locator("footer").evaluate((footer) =>
    Math.round(footer.getBoundingClientRect().bottom + window.scrollY),
  );
  const documentHeight = await page.evaluate(
    () => document.documentElement.scrollHeight,
  );

  expect(documentHeight).toBeGreaterThanOrEqual(1100);
  expect(footerBottom).toBe(documentHeight);
});

test("orientation answers produce a tailored recommendation and can reset", async ({
  page,
}) => {
  await page.goto("#/accompagnements");
  await page
    .getByRole("button", { name: "Trouver mon accompagnement" })
    .click();

  await page.getByRole("button", { name: "Rarement" }).click();
  await page.getByRole("button", { name: "Organisation des repas" }).click();
  await page.getByRole("button", { name: "Faire le point" }).click();

  await expect(
    page.getByRole("heading", { name: "Commencer par un bilan structuré" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Recommencer" }).click();
  await expect(page.getByText("Question 1 sur 3")).toBeVisible();
});

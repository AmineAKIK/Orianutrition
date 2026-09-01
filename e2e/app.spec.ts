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
  "#/recettes/bowl-quinoa-courge-pois-chiches",
  "#/conseils",
  "#/sommeil",
  "#/contact",
  "#/espace-client",
];

const responsiveViewports = [
  { width: 320, height: 568 },
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1279, height: 800 },
  { width: 1280, height: 720 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

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

test("responsive surfaces never overflow the viewport matrix", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "The viewport matrix only needs one rendering engine; cross-engine behavior is covered by the accessibility route suite.",
  );

  for (const viewport of responsiveViewports) {
    await page.setViewportSize(viewport);

    for (const route of responsiveRoutes) {
      await page.goto(route);
      await expect(page.locator("#main-content")).toBeVisible();
      await expect(page.locator("h1")).toHaveCount(1);

      const dimensions = await page.evaluate(() => ({
        viewportWidth: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
      }));

      expect(
        dimensions.documentWidth,
        `${route} overflows horizontally at ${viewport.width}×${viewport.height}`,
      ).toBeLessThanOrEqual(dimensions.viewportWidth);
    }
  }
});

test("home keeps its primary action in compact and short first viewports", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "First viewport composition only needs one rendering engine.",
  );

  for (const viewport of [
    { width: 320, height: 568 },
    { width: 1280, height: 720 },
    { width: 1366, height: 768 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("#/");

    const action = page.getByRole("link", {
      name: "Découvrir les accompagnements",
    });
    await expect(action).toBeVisible();
    const box = await action.boundingBox();

    expect(box).not.toBeNull();
    if (!box) continue;
    expect(
      box.y + box.height,
      `Home primary action falls below ${viewport.width}×${viewport.height}`,
    ).toBeLessThanOrEqual(viewport.height);
  }
});

test("approach message precedes the portrait on smaller viewports", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "First viewport composition only needs one rendering engine.",
  );

  for (const viewport of [
    { width: 320, height: 568 },
    { width: 375, height: 667 },
    { width: 768, height: 1024 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("#/mon-approche");

    const heading = page.locator("h1");
    const portrait = page.getByAltText(/Portrait de/);
    await expect(heading).toBeVisible();
    await expect(portrait).toBeVisible();
    const [headingBox, portraitBox] = await Promise.all([
      heading.boundingBox(),
      portrait.boundingBox(),
    ]);

    expect(headingBox).not.toBeNull();
    expect(portraitBox).not.toBeNull();
    if (!headingBox || !portraitBox) continue;

    expect(headingBox.y).toBeLessThan(portraitBox.y);
    expect(
      headingBox.y + headingBox.height,
      `Approach heading falls below ${viewport.width}×${viewport.height}`,
    ).toBeLessThanOrEqual(viewport.height);
  }
});

test("standard page intros leave useful content in short landscape viewports", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "First viewport composition only needs one rendering engine.",
  );

  for (const viewport of [
    { width: 1024, height: 768 },
    { width: 1280, height: 720 },
    { width: 1366, height: 768 },
  ]) {
    await page.setViewportSize(viewport);

    for (const route of ["#/sommeil", "#/contact"]) {
      await page.goto(route);
      const heading = page.locator("h1");
      await expect(heading).toBeVisible();

      const contentTop = await heading.evaluate((element) => {
        const introSection = element.closest("section");
        const contentSection = introSection?.nextElementSibling;
        return contentSection instanceof HTMLElement
          ? contentSection.getBoundingClientRect().top
          : null;
      });

      expect(contentTop).not.toBeNull();
      if (contentTop === null) continue;
      expect(
        contentTop,
        `${route} content starts too late at ${viewport.width}×${viewport.height}`,
      ).toBeLessThanOrEqual(viewport.height * 0.65);
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

  const footerBottom = await page
    .locator("footer")
    .evaluate((footer) =>
      Math.round(footer.getBoundingClientRect().bottom + window.scrollY),
    );
  const documentHeight = await page.evaluate(
    () => document.documentElement.scrollHeight,
  );

  expect(documentHeight).toBeGreaterThanOrEqual(1100);
  expect(footerBottom).toBe(documentHeight);
});

test("sleep result expands only the calculator column", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "The sleep column-height contract only needs one rendering engine.",
  );

  await page.setViewportSize({ width: 1024, height: 1000 });
  await page.goto("#/sommeil");

  const calculator = page.getByTestId("sleep-calculator");
  const observationPanel = page.getByTestId("sleep-observation-panel");
  const initialHeights = await Promise.all([
    calculator.evaluate((element) => element.getBoundingClientRect().height),
    observationPanel.evaluate(
      (element) => element.getBoundingClientRect().height,
    ),
  ]);

  await page.getByRole("button", { name: "Calculer l'écart" }).click();
  await expect(page.getByText("1 h 15 de moins")).toBeVisible();
  await expect(page.getByTestId("sleep-result")).toHaveCSS("opacity", "1");

  const finalHeights = await Promise.all([
    calculator.evaluate((element) => element.getBoundingClientRect().height),
    observationPanel.evaluate(
      (element) => element.getBoundingClientRect().height,
    ),
  ]);

  expect(finalHeights[0]).toBeGreaterThan(initialHeights[0]);
  expect(Math.abs(finalHeights[1] - initialHeights[1])).toBeLessThanOrEqual(1);
});

test("recipe detail keeps preparation below the media and ingredients", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-desktop",
    "The recipe composition contract only needs one rendering engine.",
  );

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("#/recettes/bowl-quinoa-courge-pois-chiches");

  const image = page.getByTestId("recipe-image");
  const ingredientsPanel = page.getByTestId("recipe-ingredients-panel");
  const ingredients = page.getByTestId("recipe-ingredients");
  const preparation = page.getByTestId("recipe-preparation");
  const steps = page.getByTestId("recipe-steps");

  await expect(ingredients.locator("li")).toHaveCount(7);
  await expect(ingredients).not.toContainText("—");
  await expect(steps.locator("li")).toHaveCount(5);
  await expect(steps).not.toContainText("Étape 01");
  await expect(steps).not.toContainText("Étape 05");

  const [imageBox, ingredientsBox, preparationBox] = await Promise.all([
    image.boundingBox(),
    ingredientsPanel.boundingBox(),
    preparation.boundingBox(),
  ]);

  expect(imageBox).not.toBeNull();
  expect(ingredientsBox).not.toBeNull();
  expect(preparationBox).not.toBeNull();
  if (!imageBox || !ingredientsBox || !preparationBox) return;

  expect(preparationBox.y).toBeGreaterThanOrEqual(
    Math.max(
      imageBox.y + imageBox.height,
      ingredientsBox.y + ingredientsBox.height,
    ),
  );
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

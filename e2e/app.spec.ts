import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "#/",
  "#/mon-approche",
  "#/accompagnements",
  "#/recettes",
  "#/conseils",
  "#/sommeil",
  "#/faq",
  "#/contact",
  "#/mentions-legales",
  "#/espace-client",
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

  await page.keyboard.press("Tab");
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

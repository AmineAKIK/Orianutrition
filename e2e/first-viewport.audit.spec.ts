import { test } from "@playwright/test";

const routes = [
  { name: "home", path: "#/" },
  { name: "about", path: "#/mon-approche" },
  { name: "services", path: "#/accompagnements" },
  { name: "recipes", path: "#/recettes" },
  { name: "recipe-detail", path: "#/recettes/bowl-quinoa-courge-pois-chiches" },
  { name: "blog", path: "#/conseils" },
  { name: "article-detail", path: "#/conseils/organiser-repas-semaine-nuit" },
  { name: "sleep", path: "#/sommeil" },
  { name: "contact", path: "#/contact" },
  { name: "client", path: "#/espace-client" },
  { name: "faq", path: "#/faq" },
  { name: "legal", path: "#/mentions-legales" },
  { name: "not-found", path: "#/route-inconnue" },
] as const;

const viewports = [
  { name: "mobile-compact", width: 320, height: 568 },
  { name: "mobile-standard", width: 375, height: 667 },
  { name: "mobile-tall", width: 390, height: 844 },
  { name: "mobile-large", width: 430, height: 932 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "laptop-short", width: 1280, height: 720 },
  { name: "laptop-standard", width: 1366, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "desktop-large", width: 1920, height: 1080 },
] as const;

test("audit first viewport composition", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium-desktop", "Audit runs once in Chromium.");

  const results: unknown[] = [];

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    for (const route of routes) {
      await page.goto(route.path);
      await page.waitForLoadState("networkidle");

      const metrics = await page.evaluate(() => {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const header = document.querySelector("header");
        const main = document.querySelector("#main-content");
        const h1 = main?.querySelector("h1");
        const topSections = main
          ? Array.from(main.querySelectorAll(":scope > section, :scope > div > section"))
          : [];
        const firstSection = topSections[0] ?? null;
        const secondSection = topSections[1] ?? null;
        const intro = h1?.parentElement
          ? Array.from(h1.parentElement.children).find(
              (element) => element.tagName === "P" && element !== h1.previousElementSibling,
            )
          : null;
        const interactiveCandidates = main
          ? Array.from(main.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
          : [];
        const primaryAction = interactiveCandidates.find((element) => {
          const box = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return (
            box.width >= 80 &&
            box.height >= 36 &&
            style.visibility !== "hidden" &&
            style.display !== "none"
          );
        });

        const rect = (element: Element | null | undefined) => {
          if (!element) return null;
          const box = element.getBoundingClientRect();
          return {
            top: Math.round(box.top),
            bottom: Math.round(box.bottom),
            height: Math.round(box.height),
            visiblePx: Math.round(
              Math.max(0, Math.min(box.bottom, viewportHeight) - Math.max(box.top, 0)),
            ),
          };
        };

        const h1Rect = rect(h1);
        const introRect = rect(intro);
        const actionRect = rect(primaryAction);
        const firstSectionRect = rect(firstSection);
        const secondSectionRect = rect(secondSection);
        const mainRect = rect(main);
        const headerRect = rect(header);

        return {
          title: document.title,
          viewport: { width: viewportWidth, height: viewportHeight },
          header: headerRect,
          h1: h1Rect,
          intro: introRect,
          primaryAction: actionRect,
          primaryActionText: primaryAction?.textContent?.replace(/\s+/g, " ").trim() ?? null,
          firstSection: firstSectionRect,
          secondSection: secondSectionRect,
          main: mainRect,
          documentHeight: Math.round(document.documentElement.scrollHeight),
          overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
          h1FullyVisible: Boolean(h1Rect && h1Rect.top >= 0 && h1Rect.bottom <= viewportHeight),
          introFullyVisible: Boolean(introRect && introRect.top >= 0 && introRect.bottom <= viewportHeight),
          primaryActionFullyVisible: Boolean(
            actionRect && actionRect.top >= 0 && actionRect.bottom <= viewportHeight,
          ),
          secondSectionStarted: Boolean(secondSectionRect && secondSectionRect.top < viewportHeight),
        };
      });

      results.push({ route: route.name, path: route.path, viewport: viewport.name, ...metrics });
    }
  }

  console.log("FIRST_VIEWPORT_AUDIT_START");
  console.log(JSON.stringify(results));
  console.log("FIRST_VIEWPORT_AUDIT_END");
});

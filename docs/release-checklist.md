# v1.0.0 release checklist

This document records the final release contract for the public Oria Nutrition portfolio demonstration.

## Versioned release contract

- Package version: `1.0.0` in `package.json` and `package-lock.json`.
- Public URL: `https://amineakik.github.io/orianutrition/`.
- Public routes remain deliberately `noindex,follow` for the v1 portfolio release.
- `/espace-client` remains `noindex,nofollow` because it is a simulated private surface.
- Missing routes remain `noindex,nofollow`.
- GitHub Pages uses the single versioned deployment workflow in `.github/workflows/deploy.yml`.
- The PWA manifest, canonical identity and public base path resolve from the centralized release configuration.
- The global UI identifies the product as a demonstration using fictional brand, identity, contact, pricing and client data.

The non-indexing decision is intentional rather than provisional. The application uses `HashRouter` on GitHub Pages and exposes fictional public contact channels as part of the demonstration, so v1 does not claim search-indexable production-site semantics.

## Automated quality gates

A release candidate must pass the existing `Quality gates` workflow, including:

- Prettier formatting check;
- Oxlint with warnings denied;
- Knip dead-code analysis;
- strict TypeScript compilation;
- Node unit tests;
- Playwright end-to-end and axe accessibility checks;
- production Vite build;
- initial JavaScript gzip budget of 90 KiB;
- editorial WebP asset budget of 225 KiB per image.

The 90/225 thresholds are the measured v1 regression budgets established after route splitting and asset optimization. They protect the achieved performance improvements without introducing speculative release-risk solely to reach an arbitrary round-number target.

## Final browser and device matrix

The Playwright release matrix runs the complete application suite in:

| Project            | Engine / profile | Coverage intent                    |
| ------------------ | ---------------- | ---------------------------------- |
| `chromium-desktop` | Desktop Chrome   | Primary desktop Chromium behavior  |
| `firefox-desktop`  | Desktop Firefox  | Gecko compatibility                |
| `webkit-desktop`   | Desktop Safari   | WebKit/Safari compatibility        |
| `chromium-mobile`  | Pixel 5 profile  | Touch/mobile Chromium behavior     |

The route matrix checks the main landmark, one `h1`, console/page errors and WCAG 2 A/AA axe rules, blocking critical and serious violations. It includes the primary routes, a recipe detail route, an article detail route and the not-found surface. Interaction tests also cover skip-link routing/focus, mobile navigation focus restoration and the orientation quiz flow.

## PWA and release verification

Before tagging v1.0.0, confirm on the merged `main` commit that:

- `Quality gates` completes successfully;
- `Build and deploy Pages` completes successfully;
- the deployed Pages URL loads the current release;
- the web manifest resolves from the public base path;
- install/reinstall behavior still matches the centralized PWA identity;
- no temporary validation workflow remains in the repository.

## GitHub repository settings after merge

These repository settings are intentionally recorded here because they are not versioned source files and must be applied in GitHub repository settings:

- Description: `Accessible React/TypeScript PWA demo for nutrition coaching on atypical schedules, with responsive UI, simulated client portal and CI/CD quality gates.`
- Website: `https://amineakik.github.io/orianutrition/`
- Topics: `react`, `typescript`, `vite`, `pwa`, `accessibility`, `playwright`, `tailwindcss`, `portfolio`, `github-pages`.
- Enable automatic deletion of head branches after merge.
- Protect `main` with pull requests required before merging.
- Require the `Quality gates` status check before merge.
- Block force pushes and branch deletion on `main`.
- Remove obsolete merged/stabilization branches after confirming they contain no unique work.

## Release publication

After the final `main` quality and Pages workflows are green:

1. Create tag `v1.0.0` from the final merged `main` commit.
2. Publish a GitHub Release named `v1.0.0` summarizing routing/accessibility hardening, the meaningful orientation quiz, metadata/PWA stabilization, systemic quality gates, performance optimization, portfolio framing and the final release matrix.
3. Treat `main` as the frozen v1 baseline; further work should begin from a new, explicitly scoped change.

## Known upstream install warning

`npm ci` currently reports a deprecation warning for transitive `glob@11.1.0`, introduced through the Workbox/PWA dependency chain rather than as a direct project dependency. It does not fail installation or the quality gates. Do not suppress or override it solely to hide the warning; reassess it when the upstream dependency chain ships a compatible update.

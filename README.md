# Oria Nutrition

Accessible React/TypeScript PWA demo for nutrition coaching on atypical schedules, with responsive editorial UI, a simulated client portal and systemic quality gates.

> **Portfolio demonstration.** Oria Nutrition, its practitioner identity, contact details, prices and client data are fictional. No real client data is processed by this application.

## Live demo

GitHub Pages: https://amineakik.github.io/orianutrition/

The public build intentionally uses `HashRouter` for deterministic GitHub Pages navigation. Search-engine indexing remains disabled by release configuration; the project is published as a demonstration, not as a live nutrition practice.

## What this project demonstrates

- React 19 + TypeScript with strict typing and Vite
- responsive editorial design with reusable layout and UI primitives
- accessible navigation, dialogs, accordions, focus management and reduced-motion support
- PWA install support, manifest/icons and generated service worker
- simulated client-space, orientation quiz, recipe/article filtering and sleep estimator
- route-level lazy loading and optimized WebP editorial assets
- automated formatting, linting, dead-code analysis, unit tests, Playwright E2E and axe accessibility checks
- GitHub Actions CI/CD with pinned actions and deterministic GitHub Pages deployment
- explicit performance budgets for the initial JavaScript entry and editorial images

## Product surfaces

The demo includes home, approach, services, recipes and recipe details, advice articles and article details, sleep guidance, FAQ, contact, legal information, a simulated client space and a 404 route.

The product copy stays deliberately within general wellbeing and organization guidance. It does not claim diagnosis, treatment or individualized medical advice.

## Quality contract

The CI pipeline enforces:

```text
format check
→ lint (zero warnings)
→ dead-code analysis
→ strict TypeScript
→ unit tests
→ Playwright + axe
→ production bundle
→ performance budgets
```

Current performance guards fail the build if the initial JavaScript entry exceeds **90 KiB gzip** or if an editorial WebP asset exceeds **225 KiB**. These thresholds are the measured v1 regression budgets after the dedicated optimization pass: they preserve the achieved payload reduction without forcing speculative last-minute changes solely to meet an arbitrary round-number target.

## Local development

Requirements are pinned in `.node-version` and `package.json`.

```bash
npm ci
npm run dev
```

Useful commands:

```bash
npm run format:check
npm run lint
npm run dead-code
npm run typecheck
npm test
npm run test:e2e
npm run build
npm run quality:ci
```

## Architecture notes

- `src/app` — routing and application shell
- `src/components` — layout, sections and reusable UI
- `src/pages` — route-level product surfaces
- `src/data` — fictional demo content and fixtures
- `src/lib` — deterministic domain logic
- `src/config` — brand/release configuration
- `tests` — Node unit tests and browser E2E/accessibility coverage

Secondary routes are lazy-loaded while the home route stays eager to avoid adding a loading waterfall to the primary landing experience.

## Portfolio decisions

This repository favors explicit engineering contracts over hidden assumptions: release identity is centralized, metadata has one owner, accessibility invariants are tested, dead code is gated, performance budgets are executable, and fictional data boundaries are documented.

See [`docs/case-study.md`](docs/case-study.md) for the engineering case study and [`docs/content-provenance.md`](docs/content-provenance.md) for the fictional-content and asset boundary.

## License

No open-source license is currently granted. The repository is publicly viewable as a portfolio demonstration; reuse rights should not be assumed without an explicit license.

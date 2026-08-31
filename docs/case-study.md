# Oria Nutrition — engineering case study

## Context

Oria Nutrition is a public portfolio demonstration of a nutrition-coaching web product designed around atypical schedules. The product combines an editorial marketing site, practical wellbeing tools and a simulated client space in a single React/TypeScript PWA.

The project is intentionally fictional: the brand, practitioner identity, contact details, prices and client-space data do not represent a real practice or real clients.

## Engineering goals

The final stabilization work focused on making the repository credible as a senior frontend portfolio artifact rather than merely a visually complete demo. The main goals were:

- remove duplicated ownership of release and metadata concerns;
- make accessibility behavior explicit and testable;
- ensure interactive surfaces have meaningful behavior rather than decorative affordances;
- harden PWA identity and install behavior for GitHub Pages;
- enforce code-quality, browser and accessibility gates in CI;
- reduce initial JavaScript and editorial image payloads;
- document the project as a finished product instead of as an internal migration exercise.

## Architecture

The application uses React 19, strict TypeScript, Vite and React Router with `HashRouter`. `HashRouter` is a deliberate deployment choice for deterministic static hosting on GitHub Pages.

The codebase separates:

- application routing and release configuration;
- reusable layout/UI primitives;
- route-level pages;
- fictional product data and client fixtures;
- deterministic domain logic such as orientation and sleep calculations;
- generated PWA assets and service-worker configuration.

The home page remains eagerly loaded. Secondary routes are split with `React.lazy` and `Suspense`, which reduces the initial JavaScript entry without creating an avoidable loading waterfall on the primary landing route.

## Accessibility

Accessibility is treated as a behavior contract, not only a markup checklist. Stabilization work included:

- one `h1` per route;
- keyboard-safe skip-link behavior under hash routing;
- stable accordion relationships with `aria-expanded`, `aria-controls`, `role="region"` and labelled panels;
- complete mobile-menu keyboard containment, Escape handling and focus restoration;
- shared button defaults that avoid accidental form submission;
- modal focus trapping and opener restoration;
- accessible color contrast for the gold text token;
- automated axe checks across the route matrix.

Playwright coverage also exercises critical interactions such as the skip link, mobile navigation and orientation quiz. The final release route matrix includes primary routes, recipe/article detail routes and the not-found surface.

## Product behavior

The orientation quiz resolves a recommendation from three structured answers and exposes a meaningful CTA. It explicitly frames the output as orientation guidance rather than diagnosis.

The client space is a simulation: its appointments, goals, progress indicators and downloadable-document descriptions are fixtures only. No account, backend or real customer data is involved.

The sleep estimator uses deterministic logic and avoids presenting pseudo-precise medical claims.

## PWA and release contract

The release path, public origin and site URL are centralized in one configuration module. Vite and PWA configuration derive their public paths from that source.

The manifest uses stable application identity and dedicated 192/512 icons, including a maskable icon. Installed-app detection normalizes browser-reported IDs against the absolute public site URL. Installation is treated as progressive enhancement because browser support for install prompts varies.

Metadata is owned by a single route-aware component. Canonical, Open Graph and Twitter metadata are kept coherent while indexing remains deliberately disabled for this portfolio release. That conservative policy matches the HashRouter deployment model and avoids presenting fictional public contact channels as a real operating practice through search indexing.

## Quality gates

CI runs on pull requests and enforces a reproducible Node/npm environment. The quality pipeline includes:

1. Prettier format check
2. Oxlint with zero warnings
3. Knip dead-code analysis
4. strict TypeScript
5. Node unit tests
6. Playwright E2E with axe accessibility checks
7. production build
8. executable performance budgets

GitHub Actions are pinned by commit SHA and Dependabot tracks npm and Actions updates.

## Performance work

The main performance pass introduced route-level code splitting and converted 15 editorial PNG assets to WebP while preserving their rendered dimensions.

Measured against the pre-optimization baseline:

- initial JavaScript entry: **98.55 KiB gzip → 86.03 KiB gzip** (**−12.7%**);
- editorial image set: **4.83 MB → 1.86 MB** (**−61.6%**);
- largest editorial asset: **463.09 kB → 223.26 kB**.

Regression budgets are executable: the production build fails if the initial JavaScript entry exceeds **90 KiB gzip** or an editorial WebP exceeds **225 KiB**. These are the measured v1 guardrails selected after the optimization pass; they protect the achieved gains while avoiding risky last-minute changes whose only purpose would be to hit an arbitrary round-number target.

## Privacy and provenance

The repository is public, so Git history is treated as part of the privacy boundary. Real client identity, contact information, portraits, testimonials, private records and source-derived commercial material must not be introduced even temporarily.

The current product data and editorial assets are fictional/original portfolio material. The detailed boundary is recorded in [`content-provenance.md`](content-provenance.md).

## Deliberate constraints

A few choices are intentionally conservative:

- indexing remains disabled because this is a portfolio demonstration, not an operating practice;
- `HashRouter` is retained for static GitHub Pages reliability instead of undertaking a hosting/router migration during stabilization;
- there is no production booking, contact or authentication backend;
- the public repository currently grants no open-source license.

These constraints are documented rather than hidden behind UI that implies production capabilities.

# Oria Nutrition

Oria Nutrition is a nutrition and wellbeing web experience for people with atypical schedules. The product keeps the route hierarchy, editorial rhythm and interaction model of the reference implementation while using its own Oria identity, data and visual assets.

## Current scope

The application shell, complete route map, home cadence, editorial design system and principal product surfaces are in place. The Oria content layer now includes the practitioner identity, services, recipes, advice articles, FAQ, client-space fixtures and original editorial illustrations. Behavior-heavy hardening and the final accessibility/performance/release passes remain intentionally separate.

## Commands

```bash
npm ci
npm run dev
npm run quality
npm run build
```

## Delivery contract

- one deterministic GitHub Pages deployment path
- `HashRouter` for GitHub Pages compatibility
- no original client identity, contact data, testimonial, editorial copy or source-derived photography
- Oria data and visual assets have explicit repository-level provenance
- no development narration in the public product UI
- indexing remains disabled until the final release pass

See [`docs/migration-plan.md`](docs/migration-plan.md) for the migration contract and [`docs/content-provenance.md`](docs/content-provenance.md) for the content and asset boundary.

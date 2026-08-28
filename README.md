# Oria Nutrition

Oria Nutrition is a rebuilt nutrition and wellbeing web experience for people with atypical schedules. The product follows the architecture and visual language defined by the reference implementation while using a separate Oria identity and content layer.

## Current scope

The application shell, full route map, home-section cadence, editorial design system and all principal product surfaces are present. Detailed editorial data, photography and final interaction hardening are delivered in the next focused stages.

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
- no original client identity, contact data or source-derived photography
- no development narration in the public product UI
- indexing remains disabled until the final release pass

See [`docs/migration-plan.md`](docs/migration-plan.md) for the complete migration contract.

# Oria Nutrition

Oria Nutrition is a **fictional portfolio case study** exploring a nutrition and well-being experience designed around atypical work schedules.

## Status

This repository is being rebuilt through small, reviewable pull requests. The current foundation contains a sanitized application shell plus repository-wide engineering quality gates; domain content and feature depth are introduced in focused follow-up PRs.

## Privacy and provenance

- Brand identity and people represented by the project are fictional.
- No real client profile, contact information or private data is required by the application.
- No third-party client photography or editorial assets are part of this repository.
- Demo forms and client-space experiences do not collect or transmit personal data.

## Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · React Router · PWA · Vitest · Testing Library

## Commands

```bash
npm ci
npm run dev
npm run quality
```

Useful focused commands remain available through `npm run lint`, `npm run typecheck`, `npm run test:run`, and `npm run build`.

## Engineering contract

Every pull request uses the same strict TypeScript baseline, deterministic dependency install and quality command. The complete contract is documented in [`docs/engineering/quality-gates.md`](docs/engineering/quality-gates.md).

## Delivery approach

The project is intentionally developed in focused pull requests: sanitized bootstrap, engineering quality gates, fictional domain/content, feature hardening, accessibility, performance and portfolio packaging. Each PR must explain how it builds on the existing system and prepares the next stages rather than behaving as an isolated fragment.

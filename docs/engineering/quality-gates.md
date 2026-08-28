# Engineering quality gates

This document defines the technical contract shared by every pull request in Oria Nutrition.

## Canonical local gate

```bash
npm ci
npm run quality
```

`npm run quality` is the single project-level gate. It runs linting with warnings denied, the automated test suite, TypeScript compilation in strict mode, and the production build.

## TypeScript contract

All TypeScript projects extend `tsconfig.base.json`. Strictness is centralized so application code and build/test tooling cannot silently diverge.

The baseline intentionally enables:

- `strict`
- `noUncheckedIndexedAccess`
- `exactOptionalPropertyTypes`
- unused local/parameter checks
- consistent file-name casing

A future PR may strengthen this baseline, but it must do so centrally and fix the repository in the same PR.

## Test strategy

Tests should protect user-visible behavior, domain invariants, and portfolio-safety constraints. Avoid tests that merely mirror implementation details.

Current contract tests cover:

- the fictional/demo capability boundary
- application-shell rendering
- reachability of declared routes

Feature PRs must add tests when they introduce deterministic business logic or a meaningful interaction contract.

## CI contract

Pull requests targeting `main` run `.github/workflows/ci.yml` with `npm ci` followed by `npm run quality`.

The Pages deployment workflow uses the same install and quality commands before uploading `dist`. This prevents deployment from bypassing review-time guarantees.

## Dependency contract

- direct dependency versions are pinned
- `package-lock.json` is committed
- CI/deployment use `npm ci`
- dependency changes must update both `package.json` and the lockfile in the same PR

## Pull-request continuity

Each PR must explain its context, scope, non-goals, quality impact, privacy/content provenance impact, and how it prepares or constrains follow-up PRs. The repository is developed as one system, not as disconnected feature fragments.

# Migration plan — reference-faithful rebuild

## Objective

Rebuild Orianutrition as a faithful functional and visual migration of the existing reference implementation, while removing every client-specific identifier, contact detail, portrait, testimonial, legal detail, editorial asset, and any other data tied to the original commercial prototype.

The target is not a reinterpretation and not a simplified portfolio shell. The target is the same product architecture, page depth, interaction model, visual rhythm, navigation, and feature set, backed by entirely fictional replacement data where required.

## Source of truth

The reference implementation is the existing `lnanutrition` repository. Its current application architecture includes:

- HashRouter application shell and the complete route set: home, approach, services, recipes + detail, advice/blog + article detail, sleep, client space, FAQ, contact, legal and 404.
- A home page composed from dedicated sections rather than a single generic landing block.
- Reusable layout, navigation, cards, forms, sections, PWA and UI primitives.
- Dedicated domain/data modules for services, recipes, articles, FAQ, testimonials, client-space demo data and image mappings.
- Editorial forest / paper / cream / sage visual system, Fraunces + Inter typography, responsive editorial containers, reduced-motion behavior and reveal transitions.
- PWA support and GitHub Pages deployment.

## Migration rule

Every reference file must be classified before copying.

### A — Copy structurally as-is

Use the same component/page responsibility, route hierarchy, layout composition, interaction flow and visual hierarchy unless a defect requires correction.

Typical scope:

- application routing and page map
- layout composition
- reusable containers, cards, accordions, modal/toast primitives where behavior is sound
- section ordering and responsive composition
- typography system and overall design language
- recipe/article detail page architecture
- client-space information architecture
- sleep page information architecture

### B — Copy structure, replace all client-specific data

Keep the UI and domain shape, but replace values with coherent fictional equivalents.

Mandatory replacements include:

- brand and practitioner identity
- practitioner role / biography / professional positioning
- phone, email and physical location
- services names, prices, durations and commercial copy when tied to the original business
- testimonials and review summaries
- demo client identity, appointments, goals, messages and documents
- FAQ answers containing original business details
- legal notices and publisher/contact details
- article and recipe editorial content when sourced from or written for the original client
- metadata, canonical URLs, manifest strings and PWA labels

No real client value may be written into the new public repository, including in tests, fixtures, comments, migration scripts or blocklists.

### C — Replace assets, preserve placement and art direction

Do not copy client/source-derived photography or brand graphics. Preserve the same image slots, aspect ratios, crop intent and editorial role, but use newly created/original assets.

This applies to:

- practitioner portraits
- article imagery
- recipe photography where provenance is not clean
- favicon / app icons / social preview assets
- any visual containing original brand marks

### D — Preserve behavior but fix confirmed defects during migration

The migration should not knowingly reproduce defects that undermine the product. Fixes must be narrow and must preserve the original product intent.

Confirmed areas to correct while porting:

- low-contrast gold text usage: keep the visual accent but use an accessible text token where text contrast requires it
- sleep estimator: remove pseudo-precision and inputs that do not affect the result; only show a result after explicit calculation; use correct native semantics and stable IDs
- contact form: ensure required/invalid submissions cannot produce a success state
- client-space controls: no dead-looking controls; every visible interactive affordance must have a coherent demo behavior or be rendered non-interactive
- modal: add complete focus trap and focus restoration
- SPA route changes: add focus/announcement behavior, not only scroll restoration
- PWA install prompt: no intrusive first-visit iOS hint; use a shared install state
- duplicate/stale deployment workflows: keep one deterministic Pages deployment path
- content taxonomy/date consistency: normalize article categories/dates and recipe taxonomy
- duplicate image references: remove accidental duplicate assets
- stale hard-coded demo dates/weekdays: derive display dates or use internally consistent fictional fixtures

## Product-surface parity checklist

The rebuilt product is not considered complete until all reference surfaces exist and have equivalent depth:

1. Global shell
   - header/navigation
   - mobile navigation
   - logo/brand treatment
   - footer
   - skip link / main landmark
   - page metadata

2. Home
   - hero
   - situations / target-audience section
   - practitioner/approach introduction
   - services preview
   - signature/editorial block
   - sleep teaser
   - testimonial/social-proof section using clearly fictional internal demo data, never presented as real platform reviews
   - recipes preview
   - advice/blog preview
   - client-space preview
   - final CTA

3. Approach
   - same narrative depth and section cadence as reference
   - fully fictional practitioner identity and biography
   - no unsupported medical or regulated credential claims

4. Services
   - equivalent service-card structure and purchase/booking intent
   - fictional but internally coherent prices/durations/content
   - no claim of real booking backend

5. Recipes
   - listing, filters/taxonomy and detail routes
   - complete fictional/original recipe set with coherent timings and ingredients
   - owned/generated imagery
   - avoid unjustified pseudo-precise nutrition values

6. Advice / articles
   - listing, categories and article details
   - coherent fictional editorial set
   - explicit disclaimer field in the data model rather than sentinel body content
   - normalized dates/categories

7. Sleep
   - same product role and visual depth
   - transparent sleep-gap calculation only
   - qualitative contextual guidance where appropriate
   - deterministic calculation tests

8. Client space
   - same dashboard depth and navigation concept
   - entirely fictional person/data
   - coherent interactions with no fake backend claims
   - no stale dates or dead controls

9. FAQ
   - same accordion depth
   - all business-specific answers rewritten to fictional Oria values

10. Contact
    - same visual/interaction depth
    - fictional contact details
    - client-side demo submission only unless a real backend is explicitly added later
    - accessible validation and status messaging

11. Legal
    - fictional/demo-safe legal presentation
    - no original client identity/address/contact values

12. PWA / metadata / deployment
    - Oria manifest, icons, title, description and GitHub Pages base
    - one Pages workflow
    - no indexing until the final public-release pass, then deliberately enable indexing

## Architecture strategy

The safest rebuild is a controlled transplant rather than a greenfield rewrite:

1. Start from the reference repository's file/directory architecture.
2. Copy non-sensitive structural code first.
3. Introduce a centralized fictional Oria identity/domain configuration before any client-specific page is ported.
4. Port pages in dependency order so they always resolve against sanitized data modules.
5. Replace image imports with safe placeholders/original assets before committing public branches.
6. Add tests around any corrected behavior while preserving UI parity.
7. Verify mobile and desktop parity against the reference after each product-surface group.

## Commit / PR sequence

The rebuild should stay connected through a small number of dependency-ordered PRs.

### PR A — Repository reset and migration contract

This PR. Remove all current Orianutrition implementation and record the migration contract only.

### PR B — Faithful structural transplant

Port the reference app shell, styles, routing, reusable components and page/section structure. Introduce centralized fictional Oria identity. All client-sensitive content/assets must already be replaced or omitted before commit. No placeholders that talk about development, PRs, portfolio construction or internal migration may appear in the product UI.

### PR C — Full fictional content and asset replacement

Populate services, practitioner story, FAQs, recipes, articles, testimonials/demo social proof, client-space data, contact/legal content and all new visual assets. Maintain the same content density and visual role as the reference.

### PR D — Behavioral parity and defect corrections

Port and harden sleep logic, contact validation, quiz/client interactions, modal/focus behavior and PWA install state. Add focused behavior tests.

### PR E — Accessibility, responsive and visual parity audit

Perform keyboard/focus/semantic/contrast/reduced-motion checks plus mobile/desktop visual comparison against the reference. Fix only deviations or accessibility defects, not the art direction.

### PR F — Performance, PWA and release packaging

Route-level lazy loading where safe, asset optimization, manifest/icons, deterministic Pages deploy, metadata/canonical/OG, final indexability decision and end-to-end smoke verification.

## Zero-debt constraints

- No old Orianutrition implementation survives the reset merely because it already exists.
- No internal development narration may appear in the product UI.
- No real client identifier may enter the public repository, even transiently on a branch.
- No placeholder may replace a reference feature in the final migrated surface.
- No dead interactive control.
- No knowingly broken behavior from the reference is copied without a tracked/fixed migration decision.
- No duplicate deployment path.
- No fake testimonial presented as a real third-party review.
- No invented regulated credential or unsupported health claim.
- Every feature PR must be reviewed against reference parity, privacy/provenance and regression risk.

## Definition of done

The migration is complete only when a user can move through Orianutrition and experience the same product architecture, density, visual language and feature set as the reference implementation, while nothing in the public repository or product reveals or depends on the original client's identity or data.

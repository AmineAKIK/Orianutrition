# Oria content and asset provenance

## Purpose

This document defines the provenance boundary for the public Oria Nutrition repository. It exists to keep later product work from reintroducing client-specific material while preserving the reference product's structure and UX intent.

## Oria-owned content layer

The following material is created specifically for Oria Nutrition and may be evolved by later PRs:

- the Oria Nutrition brand name and positioning;
- the practitioner identity used by the product;
- contact details and availability shown in the product;
- service names, prices, durations and descriptions;
- recipe names, ingredients, preparation steps and taxonomy;
- advice article titles, dates, categories, excerpts and bodies;
- FAQ questions and answers;
- client-space fixture names, appointments, progress items, goals, documents and notes;
- SVG illustrations under `src/assets/practitioner`, `src/assets/recipes` and `src/assets/articles`.

## Material that must never be copied from the reference client

Do not introduce any real client identity, contact detail, portrait, address, testimonial, review attribution, private client-space information, source photography, legal identity, or client-specific editorial copy into this public repository.

Do not add those values temporarily in a branch, fixture, test, comment, migration script, deny-list or commit message. Public Git history is part of the privacy boundary.

## Product-language boundary

The public product should read as Oria Nutrition. Internal engineering language belongs in repository documentation and pull requests, not in the user interface. UI copy must not mention migration stages, PR numbers, portfolio construction or internal anonymization work.

## Health-content boundary

Oria content is framed as general wellbeing and organization guidance. It must not invent a regulated professional credential, claim to diagnose or treat a condition, or present general editorial material as individualized medical advice. Relevant editorial pages should keep an appropriate health disclaimer.

## Social-proof boundary

No invented testimonial may be presented as a verified customer review or attributed to Google, another review platform, or a real person. If a future design needs social proof, its provenance and user-facing framing must be explicit and reviewable.

## Visual-asset boundary

Current editorial visuals are original SVG illustrations versioned directly in this repository. Future replacement photography or generated imagery must have a documented origin and must not derive from the reference client's portrait or source photography.

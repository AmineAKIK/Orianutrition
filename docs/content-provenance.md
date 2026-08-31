# Oria content and asset provenance

## Purpose

This document defines the provenance and privacy boundary for the public Oria Nutrition portfolio repository. Because the repository and its Git history are public, real client material must never be introduced, including temporarily.

## Fictional portfolio content

The following material is fictional/original portfolio content created for Oria Nutrition:

- the Oria Nutrition brand and positioning;
- the practitioner identity and biography used by the product;
- contact details and availability shown in the interface;
- service names, prices, durations and descriptions;
- recipe names, ingredients, preparation steps and taxonomy;
- advice article titles, dates, categories, excerpts and bodies;
- FAQ questions and answers;
- client-space fixture names, appointments, progress items, goals, documents and notes;
- practitioner, recipe and article visual assets versioned in the repository.

None of these values should be interpreted as a real operating practice, real practitioner record or real client record.

## Material that must never enter the repository

Do not introduce any real client identity, contact detail, portrait, address, testimonial, review attribution, private client-space information, source photography, legal identity or client-specific editorial copy into this public repository.

Do not add those values temporarily in a branch, fixture, test, comment, migration script, deny-list or commit message. Public Git history is part of the privacy boundary.

## Product-language boundary

The public product should read as a coherent Oria Nutrition demonstration. Internal engineering language belongs in repository documentation and pull requests, not in ordinary product copy.

The interface must also make the demonstration status discoverable so a visitor cannot reasonably mistake fictional practitioner/contact/client data for an operating nutrition practice.

## Health-content boundary

Oria content is framed as general wellbeing and organization guidance. It must not invent a regulated professional credential, claim to diagnose or treat a condition, or present general editorial material as individualized medical advice. Relevant editorial pages should keep an appropriate health disclaimer.

## Social-proof boundary

No invented testimonial may be presented as a verified customer review or attributed to Google, another review platform or a real person. If a future design introduces social proof, its fictional/provenance status must be explicit and reviewable.

## Visual-asset boundary

Current practitioner and editorial visuals are original portfolio assets versioned directly in this repository. Editorial recipe/article assets are delivered as optimized WebP files after the performance pass; PWA icons are repository-owned release assets.

Future replacement photography or generated imagery must have a documented origin and must not reproduce a real person's portrait or reuse third-party commercial photography without clear rights.

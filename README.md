# Sparkle Auto Landing Page

Arabic-first bilingual landing page for Sparkle Auto, a browser-based booking and management platform for car-wash businesses in Egypt and the Arab market.

## Current phase

GROUP 01 — Project Understanding + Base Visual & Interaction System is approved and locked. GROUP 02 — Header is approved, locked, and has passed automated QA. GROUP 03 — Hero has not started.

Start with:

- [Group 01 base system](docs/group-01-base-system.md)
- [Approved Group 01 visual moodboard](docs/group-01-moodboard.md)
- [Machine-readable base tokens](docs/base-tokens.json)
- [GROUP 02 Header brief, reference analysis, and QA](docs/group-02-header.md)
- [Official brand assets](assets/brand/README.md)

## Asset separation

- `assets/brand/` — official supplied logo and character masters.
- `assets/generated/` — custom ChatGPT Image artwork only.
- `assets/product-screenshots/` — real Sparkle Auto UI only.
- `assets/references/` — group reference images and provenance notes.

## Development rules

- Arabic/RTL is the reference implementation; English/LTR is secondary.
- Product screenshots remain real and unmodified.
- Never invent product, pricing, trial, customer, metric, or commercial claims.
- Keep secrets and local configuration out of Git.
- Document required environment variables in an `.env.example` file.
- Do not start a final section until its brief, reference analysis, and prior gate are approved.

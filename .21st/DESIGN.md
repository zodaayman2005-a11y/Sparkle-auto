<!-- Design context initialized by 21st and grounded in approved project sources. -->
# Sparkle Auto Design Context

## Product

- Arabic-first bilingual product landing page.
- Stack: Astro, TypeScript, CSS, Playwright.
- Direction: Fresh Blue Neo-Brutalism; 70% structured and 30% playful.
- Color mode: light.
- Density: comfortable.

## Sources

- Tokens: `docs/base-tokens.json`, `src/styles/global.css`.
- Base specification: `docs/group-01-base-system.md`.
- Header specification: `docs/group-02-header.md`.
- Official masters: `assets/brand/`.
- Product UI: real screenshots under `assets/product-screenshots/` only.
- Custom artwork: ChatGPT Image assets under `assets/generated/` only.

## Core tokens

- Primary: `#0796F6`.
- Outline/text/shadow: `#06245F`.
- Main surface: `#F6FBFF`.
- Arabic: Cairo Variable.
- Latin: Nunito Variable.
- Borders: 2/3/4px.
- Hard shadows: 3/6/10px offsets without blur.
- Control radius: 8px; button/card radius: 12px; panel radius: 16px.

## Must

- Build Arabic/RTL first and design English/LTR intentionally.
- Preserve semantic HTML, keyboard behavior, visible focus, and reduced motion.
- Keep marketing frames expressive and product screenshots real.
- Use the group reference image for maximum practical compositional similarity.
- Record and justify any difference caused by Base rules, accessibility, responsive behavior, or product truth.

## Avoid

- Glassmorphism, generic gradients, excessive roundness, and unrelated visual dialects.
- Fake dashboards, metrics, testimonials, prices, or product claims.
- CSS/programmatic approximations of required complex artwork.
- Premium Scroll outside the three approved GROUP 01 story areas.

## Locked decisions

- Static-first Astro output minimizes initial client JavaScript.
- GROUP 02 uses one shared Header component for both locales.
- Header navigation maps to future approved one-page section IDs; no placeholder sections are created.
- The supplied real logo plus live brand text replaces recreation of the reference's composite wordmark.

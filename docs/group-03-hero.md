# GROUP 03 — Hero

Status: **BUILT / QA PASSED / AWAITING OWNER APPROVAL**

Scope: Hero only. The approved Header is unchanged and GROUP 04 has not started.

## Source of truth

- Desktop composition: `assets/references/group-03-hero-v2/FD85C5F3-58B0-4190-87A6-2A51DF5F4381(5).jpeg`.
- Mobile composition: `assets/references/group-03-hero-v2/0241407F-7F7B-41C8-92EA-9F197B5B8996.jpeg`.
- English mockup orientation: `assets/references/group-03-hero-v2/0CA61F9B-93BD-4FD8-A3AA-26DB74D565AB.jpeg`.
- Arabic mockup orientation: `assets/references/group-03-hero-v2/4B891AC9-E37B-4881-9A06-918FE165F5B3.jpeg`.
- Real laptop screen: `assets/product-screenshots/hero/overview-desktop.jpg` (`1280×720`).
- Real phone screen: `assets/product-screenshots/hero/booking-mobile.jpg` (`720×1280`).

The Overview and booking files are exact byte-for-byte matches of the supplied product assets. They are not generated, mirrored, recolored, stretched, or redesigned.

## Implementation

- The complete approved Arabic copy is live HTML, with a faithful English version on `/en/`.
- The H1, descriptions, CTAs, microcopy, and product tagline remain semantic DOM content.
- The microcopy card contains only the approved review message; reference-only claims were not copied.
- The primary CTA keeps the staged `#application` destination already used by the current project. The secondary CTA targets the real product figure in this Hero.
- Desktop uses a two-column composition below the approved Header. Mobile switches to a content-first single column without a fixed Hero height.
- Arabic and English use independent visual assets and independent screen coordinates. No CSS/image mirroring is used.
- Real product screens use `object-fit: contain` and preserve their original aspect ratios.
- Motion is limited to a short product entrance, one sticker reveal, and physical CTA press feedback. `prefers-reduced-motion` shows the final state immediately.

## ChatGPT Image artwork

All custom complex artwork was produced with ChatGPT Image, cleaned to transparent alpha, and kept separate from product UI:

| Asset | Purpose |
|---|---|
| `hero-product-desktop-en.png` | English desktop owner/device shell, owner on the outer right |
| `hero-product-desktop-ar.png` | Arabic desktop owner/device shell, owner on the outer left |
| `hero-product-mobile-en.png` | Independent English mobile owner/device composition |
| `hero-product-mobile-ar-v2.png` | Independent Arabic mobile owner/device composition |
| `hero-water-desktop-en.png` | English desktop water and sparkle field |
| `hero-water-desktop-ar.png` | Arabic desktop water and sparkle field |
| `hero-water-mobile.png` | Dedicated portrait water artwork |
| `hero-sticker-blank.png` | Blank speech-bubble artwork; the tagline is live HTML |

The generated device apertures are intentionally empty. The supplied real screenshots are layered into those apertures in the browser.

## Reference-aligned geometry

At `1536×864`, DPR 1:

- Header: `0,0,1536×112` (unchanged component).
- Hero: `0,112,1536×752`; total document height is exactly `864px`.
- English eyebrow: approximately `64,150,440×41`.
- English headline: approximately `64,211,525×179`.
- English description: approximately `64,410,500×120`.
- English CTA row: approximately `64,566,499×56`.
- English microcopy card: approximately `64,645,498×93`.
- English visual stage: approximately `547,94,989×742`.

The Arabic desktop composition intentionally swaps the macro layout: live copy on the right, independent owner/product artwork on the left, with the real screenshots left unmirrored.

## Responsive and accessibility behavior

- Tested at `1536×864`, `1440×900`, `1280×800`, `1024×768`, `768×1024`, `691×1536`, `430×932`, `390×844`, `360×800`, and `320×568`.
- No horizontal overflow at the tested widths.
- The core value and primary CTA are visible in the first fold, including `320×568`.
- Native links, visible focus, minimum 44px touch targets, semantic H1, descriptive product-screen alternatives, decorative `aria-hidden` imagery, and reduced-motion behavior are present.
- Locale and breakpoint-specific `<picture>` sources prevent the opposite language/composition from being displayed.
- Width, height, and aspect-ratio reservations prevent layout shift.

## QA

- `astro check`: passed with 0 errors and 0 warnings.
- Production build: passed for `/` and `/en/`.
- Playwright: passed.
- 21st design review: 0 findings.
- Visual comparison artifacts are stored in `artifacts/group-03-qa/` and include final desktop/mobile screenshots plus 50% reference overlays.
- The only development-server request outside the Hero that returns 404 is the pre-existing root `/favicon.ico`; no Hero asset, runtime, or hydration errors were found.

## Gate

- [x] Real Overview and booking screens.
- [x] Independent Arabic/English desktop artwork.
- [x] Independent Arabic/English mobile artwork.
- [x] No CSS flip and no generated product UI.
- [x] Approved copy and microcopy.
- [x] Desktop and mobile reference-comparison pass.
- [x] RTL/LTR, responsive, reduced-motion, focus, and overflow QA.
- [x] Header unchanged.
- [x] GROUP 04 not started.
- [ ] Owner approval.

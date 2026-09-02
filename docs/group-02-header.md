# GROUP 02 — Header

Status: **APPROVED / LOCKED / QA PASSED**

Scope: Header only. GROUP 03 Hero is intentionally absent.

## Reference

- Source asset: [header-reference.jpg](../assets/references/group-02-header/header-reference.jpg)
- Dimensions: 1280×720.
- SHA-256: `DF7A977371C3896E48EFFC1D5D55FF16EE15C8F62C2B4FC0CC9680F75457C2A3`.
- Usage: composition reference only; it is not shipped in the page.

## Reference analysis

The reference establishes:

- A light, wide header with generous breathing room.
- A clear logo/wordmark block at the inline start.
- Five centered navigation links with restrained spacing.
- A compact language control before the primary action.
- One visible blue primary CTA with a navy outline and hard shadow.
- A lightweight menu control at the inline end.
- Very limited motion and no heavy visual storytelling.

The LTR composition is mirrored intentionally for Arabic/RTL. Brand artwork itself and the hard-shadow direction are not mirrored.

## Asset classification

| Reference element | Implementation lane | Decision |
|---|---|---|
| Sparkle Auto mark | Real supplied brand asset | Uses the official master under `assets/brand/` |
| Sparkle Auto name | Code-driven text | Keeps a crisp, accessible brand link |
| Navigation, language control, CTA, menu icon | Code-driven UI | Semantic HTML and CSS using GROUP 01 tokens |
| Side water artwork below the header | Out of GROUP 02 scope | Belongs to later visual/section work and was not approximated in CSS |

No custom Header artwork was required, so no ChatGPT Image generation was used. The reference tagline was not added because it was not part of the approved Header copy.

## Approved copy and destinations

| Arabic | English | Destination |
|---|---|---|
| السيستم | System | `#system` |
| طريقة الشغل | How It Works | `#workflow` |
| التجهيز | Setup | `#setup` |
| الأسعار | Pricing | `#pricing` |
| الأسئلة الشائعة | FAQ | `#faq` |
| احجز مراجعة تشغيل | Book an Operations Review | `#application` |

Arabic routes from `/`; English routes from `/en/`. The hashes are the locked integration targets for the later approved sections. The Header does not create placeholder sections merely to make those targets exist early.

## Composition

### Desktop

- 1240px Base container with the locked 48px desktop gutter at 1280px.
- 136px header stage to preserve the reference's generous vertical whitespace.
- Three-part grid: brand, centered navigation, utilities.
- Utilities contain language selection, primary CTA, and the functional menu control.
- CTA size was restrained to remain visible without turning the Header into a banner.

### Tablet and mobile

- The centered navigation collapses below 1140px.
- The official mark, CTA, and menu control remain directly reachable.
- The inline language selector moves into the menu on narrow screens.
- The brand name hides below 512px while the official mark remains visible.
- The dropdown uses a single-column RTL/LTR-aware navigation and a two-option language control.
- The layout has no horizontal overflow at 320px.

## Interaction and motion

- CTA uses the approved physical hover/press treatment.
- Menu uses a 280ms short transition and morphs the menu control into a close control.
- `aria-expanded`, `aria-controls`, dynamic accessible labels, Escape close, outside-click close, and focus restoration are implemented.
- The first menu link receives focus on open to make the newly revealed navigation immediately usable.
- Reduced motion removes meaningful transition duration without removing content or functionality.
- No Premium Scroll, parallax, cinematic entrance, or continuous motion exists.

## Accessibility

- Semantic `header` and labelled `nav` landmarks.
- Persistent skip link to `#main-content`.
- Visible focus treatment for brand, links, language controls, CTA, and menu control.
- Minimum 48px primary action and menu targets.
- Current language uses an underline, not color alone.
- Arabic and English set correct document `lang` and `dir` values.
- Menu closed state is removed from accessibility and tab order with `hidden` and `inert`.

## Intentional differences from the reference

- The real supplied square logo is used instead of recreating the reference's composite logo artwork.
- The brand name is live text; the unapproved reference tagline is omitted.
- GROUP 01's 48px desktop gutter takes precedence over the reference's slightly tighter outer edge.
- Water artwork below the Header is excluded because GROUP 02 explicitly forbids starting the Hero or replacing required art with code approximation.
- Arabic is the reference implementation, so the shown English composition is mirrored rather than copied physically.

## QA record

- `astro check`: 0 errors, 0 warnings, 0 hints.
- Static production build: `/` and `/en/` generated successfully.
- Playwright: 10 passed; 2 intentional desktop skips for mobile-only interaction cases.
- Automated coverage: copy, destinations, RTL/LTR, desktop/mobile composition, 320px overflow, CTA target size, keyboard menu, Escape/focus restoration, visible focus, and reduced motion.
- axe-core 4.12.1 scoped Header audit:
  - English desktop: 0 violations.
  - Arabic mobile with the menu open: 0 violations.
- Browser console: no application errors; only normal Vite development connection messages were observed.
- Visual comparison completed at 1280×720 and 390×844.
- 21st review: no component defect; eight informational findings point to the canonical color values inside the CSS variable declarations themselves, so no unsafe auto-fix was applied.
- Astro image optimization reduces the shipped 64px logo derivative from the 111KB master to approximately 1.8KB WebP while leaving the official master unchanged.

The page-level H1 remains intentionally absent until GROUP 03 because adding one here would create Hero content outside the approved scope.

## Acceptance gate

- [x] Reference composition reviewed and documented.
- [x] Logo, navigation, language control, CTA, and menu proportions follow the reference within the locked Base.
- [x] Navigation copy is unchanged and destinations are mapped.
- [x] CTA is visible and unchanged.
- [x] Desktop composition is clean and does not compete with the future Hero.
- [x] Mobile menu is usable with touch and keyboard.
- [x] Primary CTA remains reachable on mobile.
- [x] Arabic/RTL and English/LTR are intentional and verified.
- [x] Focus states and expanded state are exposed correctly.
- [x] Responsive and reduced-motion behavior pass.
- [x] No unrelated visual language, fake UI, Premium Scroll, or unapproved artwork was introduced.
- [x] No Hero content was built.
- [x] GROUP 02 QA passed.

**GROUP 02 is approved and locked. Do not begin GROUP 03 until the owner explicitly starts it.**

# GROUP 03 — Hero

Status: **BUILT / QA PASSED / LIVE / AWAITING OWNER APPROVAL**

Scope: Hero only. GROUP 04 has not been started.

Live review URL: `https://https-github-com-zodaayman2005-a11y.vercel.app/`

## Header + Hero correction pass

The correction pass uses a fixed 1536x864, DPR 1, 100% zoom QA canvas. The 112px Header and overlapping 864px Hero canvas now resolve to a total document height of exactly 864px, with no extra white space and no later section visible in the first screen.

- Eyebrow: `64,150,440x41`.
- Headline: `64,211,525px` at `63px / 59.85px`, locked to three lines.
- Description: `64,410.5,500x117`.
- CTA row: `64,563,499x56`; English primary CTA is the approved single-line `Book an Operations Review`.
- Trust card restored at `64,644,498x93`.
- Laptop: `583,296,680x432.8`, ending at y `728.8`.
- Phone: `1158,422,149x352`.
- Character stage ends at y `815.1`.
- The floating bottom tagline was removed. The supplied logo master has no bundled wordmark/tagline lockup, so no false logo asset was fabricated.
- The approved desktop water master is reused through four clipped presentation windows so its main splash, corner splashes, and halftone can keep independent required bounds without redrawing the art.

## Reference and product truth

- Composition reference: `assets/references/group-03-hero/hero-reference.jpg` (1280×720, reference-only).
- Real laptop screen: `assets/product-screenshots/hero/overview-desktop.jpg` (1280×720).
- Real phone screen: `assets/product-screenshots/hero/booking-mobile.jpg` (720×1280).
- The supplied product screenshots are unchanged masters. Astro creates optimized delivery derivatives without repainting, redesigning, mirroring, or generating their UI.
- The reference screenshot never replaces real Sparkle Auto UI.

## Composition decision

The 1536×864 QA canvas follows the supplied reference coordinate system:

- Copy stage: approximately x 64–565, y 148–620.
- Laptop stage: approximately x 583–1262, y 296–730.
- Phone stage: approximately x 1158–1308, y 418–770.
- Character stage: approximately x 1092–1452, y 90–820.
- The external composition remains copy-left/product-right in both languages so the real product screenshots are never mirrored. Arabic text inside the copy stage remains intentionally RTL.
- Mobile uses content-first vertical flow and a separate portrait water background; it does not compress the desktop overlap.

## Approved copy

- Eyebrow: **نظام إدارة متكامل لمغاسل السيارات**
- Headline: **مش لازم تفضل في المغسلة عشان تكون مسيطر عليها.**
- Primary CTA: **احجز مراجعة تشغيل لفروعك**
- Secondary CTA: **شوف السيستم وهو شغال**
- Product visual message: **مغسلتك في جيبك.** (retained as the figure's accessible label; the floating visual tagline was removed in the correction pass.)

The longer Arabic description is implemented verbatim from the GROUP 03 brief. English is a faithful secondary-language version.

## Asset separation

| Lane | Assets | Rule |
|---|---|---|
| Code-driven | Semantic copy, links, laptop/phone frames, responsive layout, focus/press states, motion | Functional and accessible HTML/CSS |
| ChatGPT Image artwork | Water layers, headline accent, sparks, speech-bubble shape, official character pose | Decorative artwork only; never product UI |
| Real product assets | Overview and booking screenshots | Supplied Sparkle Auto screens remain truthful and readable |

## ChatGPT Image production record

The built-in ChatGPT Image generator was used for all custom artwork. The reference and supplied official character artwork were passed as visual guides where applicable. Generated artwork was then cropped and restricted to the approved flat palette; no gradient was added.

### `hero-water-background.png`

Prompt direction: Create a 16:9 decoration-only layer using the supplied Hero reference as an exact positional guide. Preserve #FCFEFF and only the pale water splash behind the devices/character, cropped corner splashes, right halftone dots, and limited bubbles. Remove every logo, text, button, device, person, bubble, and dark element. Use flat pale cyan editorial water shapes with no gradient, outline, gloss, realistic liquid, or extra decorations.

Final palette is limited to `#FCFEFF`, `#ECF8FF`, `#D8F1FF`, `#CBEAFF`, `#C9EBFF`, and `#D2EEFF`.

### `hero-water-background-mobile.png`

Prompt direction: Create a portrait decoration-only mobile counterpart in the same locked palette, with one pale splash behind the stacked device group and restrained edge bubbles/corner wash. No text, UI, person, icons, gradient, or random decoration.

### `headline-accent-marks.png`

Prompt direction: Exactly three small hand-drawn emphasis strokes on transparency in `#01A2FF`: one longer curved vertical stroke leaning right, one short up-right diagonal, and one slightly longer down-right diagonal. Rounded ends; no star, text, shadow, circle, or extra marks.

### `hero-main-spark.png`

Prompt direction: One clean four-point editorial sparkle on transparency, with long vertical points, shorter horizontal points, organic inward curves, and solid `#01A2FF`. No glow, shadow, outline, extra stars, or text.

### `speech-bubble-shape.png`

Prompt direction: Compact nearly rectangular white comic speech bubble matching the reference, with slightly irregular corners, thin bright-blue outline, bottom-left tail, and hard deep-navy offset shadow. Transparent outside; no text, icon, star, gradient, or gloss. “Run it Smarter.” remains live HTML.

### `speech-bubble-spark.png`

Prompt direction: One small four-point `#01A2FF` sparkle with a long vertical axis and two tiny matching rays. Transparent background; no glow, shadow, text, or extra decoration.

### `hero-character.png`

Prompt direction: Re-pose the supplied official Sparkle Auto character to match the reference: full body at the right, friendly upright stance, ankles crossed, one hand in the trouser pocket, and the other forearm resting naturally across the laptop’s top edge. Preserve the official face, hair, navy overshirt, white T-shirt, beige trousers, navy sneakers, and watch. Transparent background; no devices, UI, speech bubble, text, water, shadow, or added props.

## Layer order

1. `#FCFEFF` background.
2. Fixed desktop/mobile water artwork.
3. Main sparkle.
4. Real-screen laptop.
5. Character.
6. Real-screen phone.
7. Speech bubble shape, live text, and bubble spark.
8. Copy and CTAs.
9. Headline accent and Trust Card.

The water layer never covers text, screenshots, the character’s face, phone, or speech bubble.

## Interaction, responsive behavior, and accessibility

- Product frame has one short weighted entrance; stickers have one short reveal; CTA uses the GROUP 01 physical press state.
- No Premium Scroll, parallax, continuous floating, autoplay, or scroll trapping.
- `prefers-reduced-motion` removes all Hero entrance animations while preserving every screen and copy block.
- Both screenshots have descriptive alternatives; generated decorative assets are hidden from assistive technology.
- The H1 is the dominant Arabic message, links are native anchors with visible focus, and content does not depend on motion or color alone.
- The eyebrow uses accessible deep blue `#0064AD`; the large highlighted headline uses the production Sparkle blue token `#0796F6`, preserving the blue treatment while meeting AA contrast at its display size.
- Mobile order is headline/copy → primary CTA → secondary CTA → Trust Card → laptop → phone.
- Mobile uses its dedicated portrait water asset. Desktop reuses the approved water master through independently clipped layers; the browser cache prevents duplicate transfer of that shared source.
- The primary CTA keeps the approved staged `#application` destination. The real application section will supply that target in its approved group; no fake placeholder form was introduced in GROUP 03.

## Visual QA method

- Captured Arabic and English at 1536×864.
- Scaled the supplied reference to 1536×864 and produced a 50% comparison overlay.
- Compared the main water splash, corner splashes, halftone field, main spark, accent strokes, speech bubble, bubble spark, laptop, phone, and character stage.
- Captured Arabic mobile at 390×844 and verified zero horizontal overflow.

## QA record

- `astro check`: 0 errors, 0 warnings, 0 hints.
- Static production build: `/` and `/en/` generated successfully.
- Playwright: 18 passed; 4 intentional responsive skips.
- Automated coverage: approved copy, CTA destinations, truthful screenshot dimensions, reference-stage geometry, mobile order, 320/390px overflow, and reduced motion.
- Axe-core 4.12.1 scoped Hero audit: 0 WCAG 2 A/AA violations on English desktop and Arabic mobile.
- Browser console and uncaught errors: clean; only normal Vite development connection messages.
- Measured correction geometry at 1536×864: Header `0,0,1536×112`; Hero `0,0,1536×864`; eyebrow `64,150,440×41`; headline `64,211,525×179.5`; actions `64,563,499×56`; Trust Card `64,644,498×93`; laptop `583,296,680×432.8`; phone `1158,422,149×352`; character stage `1092,86,360×729.1`; accent element `566,210,44×50`.
- 21st review: 0 errors and 0 warnings; informational findings only identify canonical color declarations in the token file, so no unsafe auto-fix was applied.
- Production verification: Arabic desktop 1536×864 and Arabic mobile 390×844 loaded successfully from Vercel, both real screenshots retained their expected dimensions, mobile had zero horizontal overflow, the dedicated mobile water layer was selected, and the browser error buffer was empty.

## Acceptance gate

- [x] Final copy implemented.
- [x] Real Overview and booking screenshots selected and readable.
- [x] Reference analyzed and used as the positional source of truth.
- [x] Required custom artwork generated with ChatGPT Image.
- [x] No AI-generated or redesigned product UI.
- [x] Desktop composition follows the supplied reference.
- [x] Arabic RTL and English LTR implemented intentionally.
- [x] Dedicated mobile sequence implemented.
- [x] Motion remains lightweight and reduced-motion safe.
- [x] Automated checks complete.
- [x] Final live-deployment verification complete.
- [ ] Owner approval received.

Do not begin GROUP 04 until the owner approves GROUP 03.

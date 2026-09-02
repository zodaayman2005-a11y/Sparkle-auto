# GROUP 01 — Project Understanding + Base Visual & Interaction System

Status: **APPROVED / LOCKED FOR IMPLEMENTATION**

Scope: Base system only — no Header, Hero, or final landing-page section is included here.

Reference language: **Arabic / RTL**. Secondary language: **English / LTR**.

Approved global visual moodboard: [group-01-moodboard.md](group-01-moodboard.md).

## 1. Project understanding

Sparkle Auto is one bilingual landing page for a browser-based booking and management platform built for car-wash businesses in Egypt and the Arab market. It is not a collection of separate mini-sites or 15 independent pages.

The page must sell three truthful business outcomes:

1. A better customer booking experience.
2. Better operational control for owners and teams.
3. Better retention through loyalty, offers, and ongoing engagement.

The end-to-end story is locked in this order:

1. Header
2. Hero
3. The operator's current problem
4. What Sparkle Auto is
5. Who Sparkle Auto is for
6. Professional car-wash operating strategies
7. How Sparkle Auto applies those strategies
8. Real product screens
9. From booking to end-of-day close
10. Setting Sparkle Auto up for the customer's car wash
11. Pricing
12. The 14-day trial
13. FAQ
14. Application form
15. Final CTA
16. Footer
17. SEO layer

Narrative: **problem → idea → system → correct operating method → proof inside the real product → setup → price → objection handling → application**.

## 2. Sources of truth

When two inputs conflict, use this priority order:

1. Verified Sparkle Auto product behavior, real product screens, and owner-supplied commercial facts.
2. Owner-approved final copy.
3. This Group 01 base system.
4. The approved brief for the current section.
5. The current group's reference image for visual execution.
6. Implementation convenience.

A reference image controls composition, hierarchy, relative scale, spacing, and visual treatment. It can never override product truth, accessibility, legibility, or the supplied brand assets.

Facts that have not been supplied must not be guessed. This includes exact prices, currency display, expansion pricing, customer counts, performance metrics, testimonials, integrations, setup duration, eligibility terms, and guarantees.

The main CTA intent is to apply for or start the 14-day Sparkle Auto trial. Its final Arabic and English labels, destination, qualification rules, and form behavior remain copy/commercial truth controlled and must be supplied or approved before production lock.

Expansion pricing is also truth controlled. No expansion tier, branch fee, user fee, feature entitlement, or discount may be invented from the landing-page design.

## 3. Design direction

The locked direction is **Fresh Blue Neo-Brutalism**.

Target feeling:

- Bright, cheerful, fresh, and clean.
- Energetic, modern, automotive, and organized.
- Distinctive without visual chaos.
- 70% structured product marketing and 30% playful neo-brutalist personality.

The marketing frame may be expressive. Product UI must remain real and unmodified.

### Forbidden directions

- Black-dominant or dark-heavy brutalism.
- Random rainbow palettes.
- Generic SaaS gradients or glassmorphism.
- Excessive rounded cards.
- Generic 3D SaaS illustration.
- Stock car-wash photography as the main identity.
- Fake dashboards, metrics, screenshots, or claims.
- Tiny unreadable product screens.
- Excessive rotation, floating decoration, or animation.
- Reusing the product dashboard's application design system as the marketing design.
- Replacing required custom artwork with CSS drawing, programmatic illustration, or an icon collage.

## 4. Color system

The logo's dominant blue and navy informed these landing-page production tokens. They are marketing implementation tokens, not a declaration of new official corporate brand colors.

| Token | Value | Role |
|---|---:|---|
| `spark-blue` | `#0796F6` | Primary CTA fill and key highlights |
| `fresh-blue` | `#45B7FF` | Stickers, secondary emphasis, playful accents |
| `ice-blue` | `#DDF3FF` | Section backgrounds and quiet panels |
| `cloud-blue` | `#F6FBFF` | Main page background and light alternation |
| `aqua` | `#35D5DF` | Water-related decoration only |
| `deep-navy` | `#06245F` | Headlines, outlines, controls, and hard shadows |
| `ink-muted` | `#314B6B` | Secondary body text |
| `white` | `#FFFFFF` | Cards, frames, and breathing space |
| `success` | `#138A52` | Success state with icon and text |
| `danger` | `#C73535` | Error state with icon and text |

Color rules:

- The page stays mostly light.
- Deep Navy replaces pure black.
- Aqua is an accent, never a second primary.
- White normal-size text is not allowed on `spark-blue`; use `deep-navy` text instead.
- `deep-navy` on `spark-blue` is the primary-button pair and meets the normal-text contrast target.
- Status always includes text and/or an icon; color is never the only signal.
- Gradients are not a default surface treatment. A subtle same-family wash may be used only when required by an approved reference.

## 5. Typography system

Arabic uses **Cairo**. English and other Latin text use **Nunito**. Arabic is never visually treated as a secondary translation.

| Token | Mobile | Desktop | Weight | Line height |
|---|---:|---:|---:|---:|
| Display | 48px | 80px | 800–900 | 1.08 Arabic / 1.00 Latin |
| H1 | 44px | 72px | 800–900 | 1.12 Arabic / 1.04 Latin |
| H2 | 34px | 56px | 800 | 1.18 Arabic / 1.08 Latin |
| H3 | 26px | 36px | 700–800 | 1.25 Arabic / 1.15 Latin |
| Lead | 19px | 22px | 500 | 1.75 Arabic / 1.55 Latin |
| Body | 16px | 18px | 400–500 | 1.75 Arabic / 1.60 Latin |
| Small | 14px | 15px | 500 | 1.65 Arabic / 1.50 Latin |
| Label | 13px | 14px | 700 | 1.45 |

Implementation rules:

- Fluid sizes may use `clamp()` between the locked mobile and desktop endpoints.
- Body copy measure is 55–70 Latin characters or an equivalent comfortable Arabic measure.
- Arabic line breaks, diacritics, and line height are reviewed separately from English.
- Uppercase styling is limited to short English labels. Arabic is never letter-spaced to imitate uppercase.
- Technical fragments, phone numbers, prices, and codes may use isolated LTR spans where clearer.
- Font fallback must not block content. Required weights only are loaded.

## 6. Shape, border, radius, and shadow system

The grid remains disciplined. Playfulness comes from a limited set of water drops, bubbles, sparkles, simple waves, thick arrows, highlights, stickers, stamps, number labels, and wash-bay shapes.

Allowed radii:

- `0px`: structural brutalist panels.
- `8px`: compact controls.
- `12px`: buttons and standard cards.
- `16px`: large panels and product frames.
- `999px`: badges only.

Allowed borders:

- `2px`: compact controls and badges.
- `3px`: buttons, cards, fields, and screenshot frames.
- `4px`: rare hero or featured statement frame.
- Border color defaults to `deep-navy`.

Hard shadows use no blur and keep the same down/right physical direction in RTL and LTR:

- Level 0: none.
- Level 1: `3px 3px 0 #06245F` for badges and compact controls.
- Level 2: `6px 6px 0 #06245F` for standard cards.
- Level 3: `10px 10px 0 #06245F` for the hero product frame, featured pricing, or a primary CTA moment only.
- Mobile caps strong offsets at 6px.
- A component cannot use Level 3 merely because it is interactive.

Rotation is normally within ±2 degrees and is removed or reduced on mobile. Decorations never cover meaningful Arabic or English copy.

Background and pattern rules:

- The default canvas is `cloud-blue`; major alternation uses white or `ice-blue`.
- Use no more than one noticeable background pattern family in a section.
- Code-driven patterns are limited to low-density primitives such as dots, lines, or simple bubbles and remain outside copy reading zones.
- Complex reference artwork or custom wash scenes are produced with ChatGPT Image and stored as assets, never approximated with CSS.
- Pattern contrast stays intentionally quiet and can be removed on mobile without changing meaning.

## 7. Button system

All real buttons and button-like links have default, hover, pressed, focus-visible, disabled, loading where applicable, and keyboard states.

### Primary

- `spark-blue` fill, `deep-navy` text, 3px border, Level 2 shadow.
- Minimum height 52px; minimum touch target 48×48px.
- Hover: small 1–2px physical nudge or color shift without changing layout.
- Pressed: translate 4px down/right and reduce the hard shadow to Level 0/1.
- Focus-visible: 3px high-contrast outer ring with at least 2px separation.

### Secondary

- White or `ice-blue` fill, `deep-navy` text and border, Level 1 shadow.
- Same focus, pressed, keyboard, and target-size behavior as Primary.

### Tertiary

- Text and direction-aware arrow treatment.
- Visible underline or equivalent non-color hover/focus cue.
- Used only when another full button would add noise.

Disabled controls remain readable, expose the disabled state programmatically, and never rely on opacity alone to explain why an action is unavailable.

## 8. Reusable marketing components

Build only these repeated patterns when their first approved section needs them:

- Primary, secondary, and tertiary actions.
- Section label and section number.
- Brutalist card.
- Sticker and badge.
- Strategy card.
- Product screenshot frame.
- Browser frame and mobile phone frame.
- Annotation and hotspot.
- Direction-aware thick arrow.
- Step/work-order item.
- Pricing card.
- FAQ accordion item.
- Form field, validation state, and success state.
- Logo/trust strip treatment if verified assets are later supplied.

No giant speculative component library is required. Shared components are changed centrally, not forked per section.

## 9. Code, AI artwork, supplied brand assets, and product UI

Every visual belongs to exactly one lane:

### Code-driven

- Semantic layout and responsive composition.
- Type, spacing, surfaces, borders, shadows, buttons, forms, and frames.
- Simple primitive decoration such as dots, straight lines, basic circles, or a single uncomplicated wave.
- Interaction state, directionality, and progressive-enhancement motion.

Code must not approximate complex artwork from a reference image.

### ChatGPT Image assets

- New custom illustrations, complex visual artwork, textured scenes, or compositions required to match a reference.
- Generated assets must be saved as files, optimized separately, and logged with purpose and generation notes.
- AI image generation must never fabricate Sparkle Auto product UI.

### Real supplied assets

- The official Sparkle Auto logo and character files remain unmodified masters under `assets/brand/`.
- Responsive/optimized derivatives may be generated during implementation in a separate output location.

### Real product screenshots

- Only owner-supplied, real Sparkle Auto screens may be used.
- Never redesign, repaint, regenerate, or silently edit the dashboard to fit the landing page.
- Demo data must be real demo data or clearly identified as demo content.
- Annotations sit outside or above the product image and never alter the screenshot itself.

## 10. Product screenshot treatment

- Use a consistent white browser/device frame with a 3px navy border and Level 2 shadow; Level 3 is reserved for one primary product moment.
- Keep product pixels sharp and preserve aspect ratio.
- Crop around the feature being discussed while retaining enough context to remain truthful.
- Use a few readable screens, not a wall of thumbnails.
- Include intrinsic dimensions to prevent layout shift.
- On mobile, use a deliberate mobile crop, large stacked frame, or labelled accessible internal viewer. The page itself must never scroll horizontally.
- Informative screenshots require concise alt text describing the feature and context; redundant screenshots use empty alt text.

Required inventory before product sections can be approved:

- Booking/schedule.
- Customer booking experience.
- Dashboard/overview.
- Financial visibility.
- Loyalty/offers.
- Staff/operations.
- Branch management when relevant.
- Setup/configuration when relevant.

## 11. Layout and responsive system

Mobile-first breakpoints:

- Base: below 640px.
- `sm`: 640px.
- `md`: 768px.
- `lg`: 1024px.
- `xl`: 1280px.

Container:

- Maximum content width: 1240px.
- Inline gutter: 20px mobile, 32px tablet, 48px desktop.
- Grid: 4 columns/16px gap mobile; 8 columns/20px gap tablet; 12 columns/24px gap desktop.

Spacing:

- Base unit: 4px.
- Component spacing uses 8, 12, 16, 24, 32, 40, 48, and 64px.
- Major section block spacing: 72px mobile, 104px tablet, 144px desktop.
- Touch controls never shrink to preserve a desktop composition.

Responsive priority order:

1. Reading order and meaning.
2. Copy and CTA legibility.
3. Real product screenshot usefulness.
4. Interaction accessibility.
5. Similarity to desktop composition.
6. Decoration.

Complex desktop overlap becomes a clear stacked sequence on mobile. Decorative density and rotations are reduced. No horizontal page overflow is acceptable at 320px and above.

## 12. RTL and LTR behavior

- Arabic/RTL is the reference design and is built first.
- English/LTR is a fully designed secondary mode, not an automatic CSS flip afterthought.
- Use logical CSS properties for spacing, position, borders, and alignment.
- Arrows, progress flows, previous/next controls, timelines, screenshot/copy splits, annotations, and form alignment respond to direction.
- Logos, product screenshots, car orientation, physical shadows, and brand artwork are not mirrored automatically.
- Numbers, prices, phone numbers, codes, URLs, and technical fragments use LTR isolation when needed.
- Both language versions retain equivalent content, CTA intent, and heading hierarchy.

## 13. Standard motion language

Motion is physical, quick, and playful, but never required for understanding.

- Micro: 120–180ms for press and focus feedback.
- Standard: 220–320ms for cards, stickers, and short reveals.
- Large non-scroll reveal: 360–480ms maximum.
- Standard easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Entrances use opacity plus small translation, wipe, mask, or scale changes. Large rotations and bounce are forbidden.
- Approved uses: button press, card nudge, sticker entrance, short slide/wipe, blueprint line reveal, hotspot highlight, screen transition, section-number reveal, and small arrow draw.
- Continuous floating decoration is not part of the base language.

## 14. Premium scroll storytelling

Premium scroll is a progressive enhancement limited to exactly three story areas:

1. Operating strategies.
2. Strategy application and real product screens.
3. Sparkle Auto setup for the customer's car wash.

It is forbidden in Header, Hero, Problem, Pricing, Trial, FAQ, Form, Final CTA, and Footer.

Desktop rules:

- Use 3–5 meaningful story states.
- A stable frame may stay pinned while copy, screens, annotations, masks, or a blueprint route change.
- Allocate roughly 70–100vh of natural scroll progress per state only when each state adds new information.
- Pinning never hijacks wheel/touch input, changes browser scroll physics, forces autoplay, or uses hard snap.
- Large elements move short distances with weight. Rotation, bounce, elastic overshoot, and rapid scale changes are prohibited.
- Premium easing direction: `cubic-bezier(0.16, 1, 0.3, 1)` with slow deceleration.
- The HTML reading order contains every state. With JavaScript disabled, all content remains available as a normal sequence.
- A visible, accessible progress cue is used only if it adds orientation.

Mobile rules:

- Stacked vertical progression is the default.
- Do not copy the desktop pinning duration.
- Any short sticky treatment must be removed if it causes friction, clipping, or a scroll trap.
- All screenshots and copy remain directly reachable.

Reduced-motion rules:

- Remove complex pinning, parallax, long interpolation, masks, and animated screen replacement.
- Render all states directly in document flow.
- No content, CTA, screenshot, or meaning is lost.

## 15. Accessibility baseline

Target: WCAG 2.2 Level AA across the full responsive landing page.

- Semantic landmarks and logical heading order; one page-level H1.
- Skip link and visible keyboard focus.
- Normal text contrast at least 4.5:1; large text and meaningful UI graphics at least 3:1.
- Pointer targets are at least 44×44px by project policy; primary controls are at least 48px high.
- Native controls are preferred. Custom accordions expose name, role, state, and keyboard behavior.
- Every form field has a persistent programmatic label, instructions where needed, and text-based errors linked to the field.
- Status and validation are not communicated by color alone.
- Informative imagery has useful alt text; decorative imagery has empty alt text and is ignored by assistive technology.
- Focus is never trapped by sticky or animated stories.
- Zoom to 200% and reflow at narrow widths must preserve use and content.
- `prefers-reduced-motion` produces a complete non-animated experience.
- Language and direction are set on the document and updated together when the language changes.

Official baseline: <https://www.w3.org/TR/WCAG22/>.

## 16. Performance rules

Field targets at the 75th percentile:

- LCP ≤ 2.5 seconds.
- INP ≤ 200 milliseconds.
- CLS ≤ 0.1.

Implementation budgets and rules:

- Mobile is the performance reference.
- Initial JavaScript target: ≤180KB compressed; animation-specific incremental JavaScript target: ≤45KB compressed.
- Prefer CSS, Intersection Observer, and requestAnimationFrame-based progressive enhancement before adding a large scroll library.
- Above-the-fold transferred imagery target: ≤600KB; no individual nonessential image should block first render.
- Keep source masters untouched; produce responsive AVIF/WebP derivatives and a JPEG/PNG fallback where appropriate.
- Every raster image gets width, height, `srcset`, and `sizes`; below-fold imagery is lazy-loaded.
- Preload only the actual LCP asset and required font files. Avoid speculative preloads.
- Load only required Cairo/Nunito subsets and weights; use a non-blocking fallback strategy.
- Reserve layout space for images, screenshots, accordions, and validation messages.
- Premium scroll must not create long main-thread tasks or attach unthrottled scroll handlers.
- No autoplay video or animation dependency is part of the base.

Core Web Vitals reference: <https://web.dev/articles/defining-core-web-vitals-thresholds>.

## 17. SEO baseline

- Arabic is the default page language and receives human-approved Arabic title, description, H1, and social copy.
- English receives equivalent human-approved metadata, not a literal low-quality translation.
- Use semantic HTML and a crawlable document even when motion JavaScript is unavailable.
- Set canonical URLs intentionally. If localized URLs are used, add reciprocal `hreflang`; the final routing choice is a build decision.
- Provide indexable copy for key product value; do not put essential wording only inside imagery.
- Use descriptive file names and alt text where images are informative.
- Add Open Graph/social metadata and an approved social image.
- Add structured data only for entities and facts that are true and visible. Do not add fake ratings, reviews, prices, or unsupported FAQ markup.
- Create robots and sitemap behavior appropriate to the final deployment.
- Avoid keyword stuffing, hidden copy, doorway content, and unverified superlatives.

Official baseline: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide>.

## 18. Reference-image workflow

Every section group follows this workflow before wireframing:

1. Save the untouched reference in the reference-assets area.
2. Record its source/group and whether it may be shipped or is reference-only.
3. Analyze composition, reading order, relative scale, spacing, hierarchy, typography placement, background, key artwork, product UI, and responsive implications.
4. Classify each visible element as code-driven, ChatGPT Image artwork, supplied brand asset, or real product screenshot.
5. Build the wireframe with maximum practical compositional similarity.
6. Apply this locked Base system.
7. Compare desktop and mobile implementation against the reference at equivalent viewport sizes.
8. Log intentional differences caused by Arabic typography, accessibility, product truth, real asset constraints, or responsive behavior.

Reference similarity is part of every section QA. “Inspired by” is not enough when the supplied reference establishes a clear composition.

## 19. Standard section mini-cycle

Every section must pass:

1. Reference analysis.
2. Section brief: business goal, user question, message, CTA, required content/assets, and role in the page.
3. Wireframe approval.
4. Visual design using this Base.
5. Interaction/motion specification.
6. Arabic desktop/mobile and English desktop/mobile review.
7. Build of approved scope only.
8. Section QA.
9. Explicit approval gate before the next section.

For premium-scroll sections, the interaction specification also records start/end, states, pinned element, transforms, copy synchronization, mobile fallback, and reduced-motion fallback.

## 20. Commercial and copy rules

- Final approved copy is the only copy source of truth.
- Design may propose line breaks, but cannot rewrite a claim silently.
- No invented price, discount, scarcity, customer logo, statistic, testimonial, feature, setup promise, or guarantee.
- The 14-day trial is a risk-reversal step, not permission to imply “free forever” or undisclosed eligibility.
- Repeated primary CTAs keep one commercial intent. Any label variation must remain semantically equivalent.
- Pricing expansion, branches, users, add-ons, tax, billing period, and cancellation language remain blocked until supplied and approved.
- Analytics events must not send sensitive form values or personal data.

## 21. Change control

After Group 01 lock:

- No section may introduce an unrelated color, font, radius, border, shadow, button, screenshot frame, or motion dialect.
- A Base change requires a documented reason, affected tokens/components, affected approved sections, and a regression-test list.
- A newly discovered shared-system problem may reopen only the shared rule and impacted sections; it does not authorize unrelated redesign.
- Product facts and commercial facts can be corrected at any time, but all dependent copy and QA must be rechecked.
- Reference-driven exceptions must be explicit and reusable or remain scoped to one documented section.

## 22. Definition of Done and final QA

The landing page is done only when:

- All sections follow the approved story and have passed their individual gates.
- Arabic/RTL and English/LTR are complete and equivalent.
- All product UI is real, readable, and truthfully presented.
- No placeholder, fake metric, fabricated proof, or unapproved commercial fact remains.
- Responsive QA passes at 320, 360, 390, 768, 1024, 1280, 1440, and 1920px where relevant.
- Current Chrome, Edge, Firefox, and Safari behavior is checked in proportion to availability and risk.
- Keyboard, focus, form validation, screen-reader semantics, 200% zoom, and reduced motion pass.
- Premium scroll has no trapping, remains smooth, and degrades to complete document flow.
- Core Web Vitals targets and image/font/JavaScript budgets are measured on a production build.
- Every CTA route, form state, success/error path, language switch, and analytics event is verified.
- SEO metadata, canonical/localization behavior, social sharing, robots, sitemap, and structured data are checked.
- Each section has a reference-comparison record and all intentional deviations are justified.
- There are no console errors, broken links, missing assets, layout overflow, or unexpected layout shifts.

## 23. Group 01 acceptance gate

- [x] One landing page and the full narrative are understood.
- [x] Arabic/RTL is the reference; English/LTR is secondary and fully designed.
- [x] Product truth is protected; the dashboard is never redesigned or generated.
- [x] Marketing frame is expressive; product screenshot is real.
- [x] The global visual moodboard and supplied brand anchors are approved.
- [x] Visual direction, color roles, typography, borders, hard shadows, buttons, cards, badges, and screenshot treatment are locked.
- [x] Responsive, directionality, accessibility, performance, SEO, and final QA baselines are locked.
- [x] Standard and premium motion languages are locked.
- [x] Premium scroll is limited to Strategy, Product, and Setup and has mobile/reduced-motion fallbacks.
- [x] The code/ChatGPT Image/real asset/real product separation is locked.
- [x] Reference-image analysis and comparison are mandatory for every section.
- [x] Commercial facts, exact CTA copy, trial terms, pricing, and expansion pricing cannot be invented.
- [x] Change control and Definition of Done are understood and locked.

**GROUP 01 is accepted. GROUP 02 may begin only when the owner supplies its brief/reference and explicitly starts it.**

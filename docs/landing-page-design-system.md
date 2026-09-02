# Sparkle Auto Landing Page — Neo-Brutalism Integration Update

**Version 1.1 — Neo-Brutalist Web Execution Lock**  
**Official direction:** Sparkle Auto Fresh Blue Neo-Brutalism  
**Internal name:** SA NEO-BRUTAL WEB SYSTEM

This document is the locked execution reference for the Sparkle Auto landing
page. It must be read together with `visual-reference.md` and the approved
assets in `assets/references/`.

## 1. Final creative decision

The landing page combines five systems with distinct responsibilities:

```text
LOCKED PREMIUM 3D CHARACTER WORLD
× EGYPTIAN EDITORIAL IDEA + ACTING + SCALE
× FRESH BLUE NEO-BRUTALIST WEB DESIGN
× REAL SPARKLE AUTO PRODUCT PROOF
× MOTION-FIRST RESPONSIVE UX
= SPARKLE AUTO LANDING PAGE
```

- Premium Stylized 3D defines the visual world, owner character, and props.
- Egyptian Editorial Motion Thinking defines metaphors, acting, composition,
  scale, and motion.
- Fresh Blue Neo-Brutalism defines the website UI, layout, components, type,
  borders, shadows, and section framing.
- Real Sparkle Auto screenshots prove the product.
- UX and motion explain the story and drive conversion.

The 3D is the content of the world; Neo-Brutalism is the frame around it. The
character must never become a brutalist illustration, receive a rough outline,
or lose the approved premium soft rendering. Real product UI must never be
restyled; it appears unchanged inside a brutalist outer frame.

Approximate visual balance:

- 50–60% clean Neo-Brutalist web structure
- 20–30% premium stylized 3D storytelling
- 15–25% real Sparkle Auto product UI
- 5–10% editorial graphic accents

The ratio changes by section: Problem is 3D/editorial-heavy, Product Showcase
is product-heavy, and Pricing is Neo-Brutalist UI-heavy.

## 2. Personality and boundaries

The result must feel bold, direct, physical, confident, playful, structured,
Egyptian, modern, credible, and unmistakably Sparkle.

It must not feel like a corporate SaaS template, soft glassmorphism startup,
futuristic AI site, dark cyber dashboard, fashion editorial, kids' cartoon,
experimental portfolio, meme, intentionally ugly site, or raw web nostalgia.

This is premium commercial Neo-Brutalism: strong contrast, visible structure,
clear borders, hard shadows, bold type, controlled asymmetry, physical
components, generous calm space, and the clean Sparkle palette.

## 3. Locked palette

Use only these brand colors, plus the natural approved character colors:

| Token | Value | Role |
|---|---:|---|
| Sparkle Blue | `#01A2FF` | Primary action, highlight, active state |
| Deep Blue | `#0C264B` | Secondary borders and dark structure |
| Deep Navy | `#03132E` | Primary borders, type, hard shadows |
| Mist Blue | `#91B1D8` | Quiet support and pale structural accents |
| White | `#FFFFFF` | Main background and calm surfaces |

Do not introduce the generic red/yellow/blue/green/black brutalist palette.
Avoid yellow and orange accents. Semantic red may appear only for genuine error,
danger, overdue, or cancelled states and must not be the sole signal.

## 4. Structural principles

1. **Visible structure:** borders, containers, dividers, buttons, and section
   boundaries are readable and intentional.
2. **High contrast:** White, Deep Navy, and Sparkle Blue are the main forces.
3. **Physical UI:** buttons feel pressable, cards feel like objects, screenshots
   have frames, and limited badges feel like real stickers.
4. **Intentional offset:** hard shadows, displaced labels, overlaps, and section
   numbers have a clear purpose.
5. **Controlled asymmetry:** visuals can break the grid, but an underlying grid
   always controls the composition.
6. **Calm between moments:** strong brutalist moments require generous
   whitespace; not every object receives every effect.

## 5. Core visual tokens

### Borders

- Primary: `2px–3px solid #03132E` for major cards, pricing, forms, product
  frames, and navigation.
- Secondary: `1px–2px solid #0C264B` for inputs, small cards, tabs, and FAQ.
- Editorial heavy: `3px–4px`, reserved for a hero CTA, featured plan, or major
  editorial block.

### Hard shadows

- Default: `4px 4px 0 #03132E`
- Large: `6px 6px 0 #03132E`
- Small UI: `3px 3px 0 #03132E`
- Large editorial container: up to `8px 8px 0 #03132E`

Shadows have no blur or almost no blur and keep a consistent direction within
each component family. Pressing a button reduces the shadow. Never use soft
SaaS shadows, ambient shadow stacks, neon glow, glass shadows, or blurry layers.
The 3D character and props retain natural soft studio shadows and never receive
CSS hard shadows.

### Radius

- Large containers: `16–28px`
- Cards: `12–20px`
- Inputs: `10–14px`
- Buttons: `10–16px`
- Pills/stickers: up to `999px`

Each component family uses a fixed radius; no random radii.

## 6. Component rules

### Buttons

Primary buttons use Sparkle Blue, a `2–3px` Deep Navy border, and a `4px` hard
shadow. Secondary buttons use White, a Deep Navy border, and a smaller hard
shadow. Hover displacement is subtle. Active state uses approximately
`translate(3px, 3px)` and nearly removes the shadow. No gradients, glass,
glows, large bounce, or rotation.

### Cards

Cards are used selectively and must read as strong objects: border, hard
shadow, clear background, label/number, headline, support text, and optional
visual. Preferred backgrounds are White, Sparkle Blue, very pale blue, and Deep
Navy emphasis. Use at most one or two edge devices such as an overlapping
label, corner number, sticker, or small external arrow.

### Typography and numbers

Headlines are oversized, heavy, short, and high-contrast. Editorial line breaks
are designed rather than left to automatic wrapping. Use one dominant highlight
per composition: blue word, underline, shape, or background block. Large
numbers can mark sections (`01`, `02`, `03`), principles, 14 trial days,
pricing, and journey stations; they may crop or cross a border intentionally.

### Tabs, forms, and FAQ

- Active tabs: Sparkle Blue with a hard border/shadow.
- Inactive tabs: White with a Deep Navy border.
- Inputs: White, strong label, generous height, Deep Navy border, and Sparkle
  Blue outline or offset shadow on focus.
- FAQ: calmer White accordion items, Deep Navy borders, clear plus/minus, and
  optional small hard shadow; opening adds a restrained blue treatment.

### Stickers, rotations, and arrows

- Limit prominent stickers to roughly one or two per viewport.
- Rotation is an accent only, normally between `-2deg` and `+2deg`.
- Arrows are bold, simple, Blue or Navy, and used only to explain flow, CTA, or
  product behavior. A light editorial/hand-drawn quality is allowed.

## 7. Layout and depth

Use strong blocks, large whitespace, obvious alignment, controlled overlaps,
and deliberate asymmetry. Avoid repeatedly using the generic centered heading,
small paragraph, and three equal cards pattern. Section transitions may use a
heavy horizontal rule, oversized label, blue strip, section number, or hard
color shift. Never use SaaS waves, blob dividers, or gradient fog.

Depth order is locked:

1. Page background
2. Neo-Brutalist structural blocks
3. Real product UI
4. Premium 3D character/props
5. Editorial marks/type

A preferred integration is a flat graphic web plane with a premium 3D object
breaking that plane. The character can stand in front of or emerge from a
bordered card but remains outline-free and softly rendered.

Backgrounds default to White, with optional pale-blue fields, hard frames, or a
very subtle low-opacity geometric grid used sparingly.

## 8. Landing-page section direction

- **Hero:** immediately establishes the system with huge type, strong CTA,
  structural borders, a large product mockup, controlled 3D owner, and sparse
  accents. Copy, device, character, and marks remain independent layers rather
  than one giant boxed composition.
- **Problem:** the most editorially free area—giant question/type, oversized 3D
  metaphor, hard frame, and strong diagonal composition. Example thought:
  `صاحب المغسلة / مش المفروض / يبقى سنترال.`
- **What is Sparkle Auto:** transition from chaos to structure using a large
  framed product area, connected blocks, thick arrows, and a Spark trail.
- **Designed For:** use controlled unequal business-situation blocks rather
  than conventional equal persona cards.
- **Operational Strategies:** blueprint-like numbered blocks, thick lines,
  connected nodes, and scroll transitions.
- **Product Showcase:** the real screenshot is the hero inside a giant device
  frame with hard shadow, numbered tabs, and bold labels such as bookings,
  branches, staff, and finance.
- **Journey:** thick path, large numbered stations, product screenshots, small
  3D props, and a moving Spark trail.
- **Setup:** chunky numbered steps with visible progress.
- **Pricing:** three clear heavy-border cards with big price and strong CTA. The
  recommended plan can be fully Sparkle Blue or slightly offset/larger. No
  glass, gradient highlight, fake 3D, or soft pastel pricing cards.
- **Trial:** use the number `14` as the section's visual hero with short copy and
  one CTA.
- **FAQ:** reduce visual aggression and preserve clarity.
- **Form:** clean structural treatment with accessible focus and errors.
- **Final CTA:** a strong Deep Navy block, giant White headline, Blue CTA, and a
  3D owner or product visual slightly breaking the container.
- **Footer:** Deep Navy, strong top border, clear columns, no glass or gradient,
  with small structural Blue accents.

Recommended rhythm: heavy Hero; editorial/3D Problem; cleaner explanation;
brutalist Designed For; interactive structured Strategies; clean product-first
Showcase; motion-driven Journey; brutalist Setup and Pricing; calm FAQ and Form;
heavy Final CTA.

## 9. Motion

Motion is fast, confident, physical, weighted, and uses short overshoot:

- Buttons press.
- Cards nudge slightly.
- Stickers snap briefly.
- Screens slide/snap.
- Lines draw.
- Numbers punch/reveal.

Section entrances may use a `12–24px` block slide, small opacity reveal, hard
mask wipe, border draw, or number snap. Do not apply the same generic fade-up to
everything or float elements by 100px. Desktop hover may move a card about
`-2px -2px` and adjust its shadow, quickly and without wobble.

## 10. Responsive, RTL, and LTR

Mobile retains borders, hard shadows, large type, and strong CTAs while reducing
overlaps, rotation, offset size, and decoration. Mobile shadows generally reduce
to around `3px 3px`.

Arabic is RTL-first, not a Western composition with right-aligned text. Giant
type begins from the right, numbers may anchor to the opposite edge, arrows
follow reading direction, devices are recomposed, and character gaze serves the
RTL flow. English LTR preserves the energy but is recomposed rather than blindly
mirrored; line breaks and visual weight must be reviewed independently.

## 11. Forbidden patterns

Never use:

1. Borders around every text span or large shadows on every element.
2. Rotation on every card, chaotic offsets, or broken layouts.
3. Many stickers or random hand-drawn arrows.
4. Clashing colors, yellow/orange accents, or generic brutalist palettes.
5. Monospace everywhere, ugly type, pixel fonts, Comic Sans energy, or memes.
6. Huge functionless black rectangles, raw HTML style, or retro-web nostalgia.
7. Cursor gimmicks, wobble animation, grunge, or rough character outlines.
8. Soft/glass SaaS styling, neon glow, gradient buttons, or gradient fog.
9. Traditional wave/blob section separators.
10. Redesigning the real product screenshots or brutalizing the 3D world.

## 12. QA checklist

For every section verify:

- [ ] Structure is clear and the underlying grid controls asymmetry.
- [ ] Every border and hard shadow is intentional and consistent.
- [ ] The headline is strong with sufficient whitespace and hierarchy.
- [ ] Brutalism supports the idea rather than distracting from it.
- [ ] Approved 3D remains premium, soft, consistent, and outline-free.
- [ ] Real product UI remains unchanged.
- [ ] Only the Sparkle palette is used outside genuine semantic states.
- [ ] Stickers, arrows, rotations, overlaps, and offsets remain limited.
- [ ] Mobile is less crowded while retaining the design identity.
- [ ] Arabic RTL and English LTR are independently recomposed.
- [ ] Motion explains transitions and respects reduced-motion preferences.
- [ ] UX and accessibility continue to control conversion.

## 13. Final execution statement

Build a real Fresh Blue Neo-Brutalist Sparkle Auto landing page, not a SaaS
template. Use Deep Navy borders, hard offset shadows, oversized direct type,
strong structural blocks, controlled asymmetry, physical buttons, large
numbers, limited stickers, broad White space, and only the Sparkle palette.
Inside that system, use the approved Premium 3D Owner and props without changing
their rendering, and use only genuine Sparkle Auto screenshots without
redesigning their internal UI.

```text
LOCKED PREMIUM STYLIZED 3D
+ EGYPTIAN EDITORIAL MOTION THINKING
+ FRESH BLUE NEO-BRUTALIST WEB SYSTEM
+ REAL PRODUCT SCREENSHOTS
+ ARABIC RTL-FIRST COMPOSITION
+ TRUE ENGLISH LTR RECOMPOSITION
+ PURPOSEFUL SCROLL MOTION
+ CONVERSION-FIRST UX
= SPARKLE AUTO LANDING PAGE
```


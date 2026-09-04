# HDI-OS Specialist Skill — typography-content

Canonical specialist source. Load this skill only when it materially affects the current decision. Shared authority remains in [Core](../01-CORE/core.md); routing remains with [Design Director](./design-director.md); global evaluation remains in [Quality](../06-QUALITY/quality-rubrics-evals.md).

---

<a id="source-skills-typography-content-skill-md"></a>

## Original source file: `skills/typography-content/SKILL.md`

Source SHA-256: `65e05ac8879c21e233e0cb9fd03c97cb7f377d157d32ae548d845228bfceae0b`  
Source bytes: `8073`

---
name: typography-content
description: Designs typography systems and content hierarchy for websites, apps, dashboards, editorial layouts, Arabic RTL, English LTR, and mixed-script interfaces. Use for font selection, type scales, line length, wrapping, numerals, labels, UX writing, display typography, bilingual pairing, and fixing weak or generic text presentation.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Typography and Content

## Goal

Make language carry hierarchy, character, trust, and usability. Build a type system that works with real content in Arabic and English, supports the selected art direction, and remains readable across devices and interface states.

## Use this skill when

- Choosing or revising fonts.
- A page feels generic despite reasonable layout.
- Headlines, labels, tables, prices, or forms lack hierarchy.
- Arabic and English need to coexist.
- Display typography is part of the visual concept.
- Copy length or translation breaks the design.
- UX writing, labels, errors, empty states, or CTAs need structure.

## Required inputs

Read `BRAND.md`, `CONTENT.md`, `DESIGN.md`, the selected direction, actual production copy, language priorities, licensing constraints, and the target surface.

Do not choose a font from visual taste alone. Consider script quality, available weights, variable axes, numerals, punctuation, language coverage, loading cost, licensing, and platform rendering.

## Step 1 — Define type roles

Separate roles by job, not arbitrary size:

- Display or campaign voice.
- Page title.
- Section heading.
- Subheading.
- Body.
- Compact body.
- Label.
- Caption or metadata.
- Numeric/data display.
- Code or identifier, when relevant.

Not every project needs every role. Avoid duplicate styles that differ by one or two pixels without a semantic reason.

## Step 2 — Select font strategy

Choose one:

### Single family

Use when one family has strong Arabic/Latin coverage or the product values unity and operational simplicity.

### Script-specific pairing

Use when Arabic and Latin need different families for comparable quality and character.

### Display plus functional

Use when brand expression needs a distinctive display face while body and product text require a highly readable workhorse.

### System-first

Use for performance-sensitive tools, prototypes, or environments where custom typography adds little value.

Record:

- Family and fallback stack.
- Role.
- Available weights/styles.
- Script support.
- Numeral behavior.
- License/source.
- File/loading plan.
- Reason connected to brand and use.

## Step 3 — Evaluate Arabic quality

Inspect actual Arabic words, not only an alphabet specimen:

- Joining and contextual forms.
- Dot clarity at small sizes.
- Counters and legibility.
- Weight consistency.
- Diacritics if relevant.
- Arabic punctuation.
- Arabic-Indic and Latin numerals.
- Currency, dates, percentages, and phone numbers.
- Alignment with Latin companion text.

Do not apply Latin letter spacing to Arabic words. Avoid artificial stretching or kashida as a default layout fix.

## Step 4 — Build a responsive type scale

For each role define:

- Minimum size.
- Preferred fluid behavior when useful.
- Maximum size.
- Line height.
- Weight.
- Tracking where script-appropriate.
- Maximum line count.
- Wrapping behavior.
- Measure.

Use size, weight, spacing, and placement together. Do not create hierarchy from size alone.

### Display text

- Test short and long versions.
- Control line breaks intentionally where copy is locked.
- Avoid fragile fixed line breaks when content is dynamic.
- Ensure the display block does not overpower the product proof or primary task.
- Evaluate Arabic and English silhouettes separately.

### Body text

- Optimize for reading context and line length.
- Use comfortable line height.
- Keep contrast sufficient.
- Avoid tiny copy used to simulate sophistication.

### Labels and data

- Preserve scanability.
- Use tabular numerals for aligned data when available and appropriate.
- Keep unit, currency, sign, and value relationships clear.
- Do not uppercase long English labels merely for style.

## Step 5 — Define content hierarchy

Map each message to a role:

| Priority | User question | Message | Evidence | Type role | Placement | Action enabled |
|---|---|---|---|---|---|---|
| P0 |  |  |  |  |  |  |

If two messages compete for the same role, sequence or merge them. Do not style every sentence as a headline.

## Step 6 — Write interface text

### Buttons

Use a specific action and expected result. Prefer “Book a review call” over “Submit.” Keep paired buttons semantically distinct.

### Labels

Use the user's vocabulary. Avoid internal database or organizational terms.

### Help text

Explain a decision, consequence, or format. Do not repeat the label.

### Empty states

State what is empty, why that may be true, and the next useful action. Distinguish first-use empty from filtered empty.

### Errors

State what happened, what remains safe, and what the user can do. Preserve entered data after recoverable errors.

### Success

Confirm the completed result and next state, not merely the click.

## Step 7 — Bilingual and mixed-script composition

- Treat Arabic and English as two composed modes of one system.
- Allow different line breaks and occasionally different size or measure to preserve equivalent hierarchy.
- Use direction isolation for embedded phone numbers, URLs, codes, and prices.
- Decide numeral style explicitly.
- Test punctuation at bidirectional boundaries.
- Keep icons and labels aligned optically for each script.
- Do not translate idioms literally when transcreation is required.

## Step 8 — Content stress testing

Test at minimum:

- Shortest plausible title.
- Longest plausible title.
- One-line and multi-line labels.
- Arabic text expansion.
- English text expansion.
- Large and negative numbers.
- Percentages and currency.
- Missing optional values.
- Long names and addresses.
- Error messages.
- Zoom and narrow viewport.

Use actual content from `CONTENT.md` where available.

## Step 9 — Typography as image

For expressive marketing or editorial work, typography may become a visual mass. When it does:

- Preserve semantic order.
- Keep essential text selectable and accessible when feasible.
- Avoid rasterizing important copy unnecessarily.
- Provide readable alternatives for experimental treatments.
- Coordinate with imagery rather than covering key evidence.
- Define responsive composition instead of shrinking the same arrangement.

## Step 10 — Performance and implementation

- Load only required font files, weights, and subsets.
- Prefer variable fonts when they reduce files and are well supported for the target scripts.
- Define robust fallbacks and minimize layout shift.
- Store typography as semantic tokens.
- Do not rely on a specific font without verifying it is available and licensed.

## Required output

Use `references/TYPE-CONTRACT.md` and provide:

- Font strategy and reasons.
- Script-specific roles and fallbacks.
- Semantic type tokens.
- Responsive scale.
- Measure and wrapping rules.
- Numeric and mixed-direction rules.
- Content hierarchy.
- UI writing rules.
- Stress-test examples.
- Performance/loading notes.

## Failure modes

- Selecting fonts from a trendy list without testing real content.
- Using one typeface simply because it supports Arabic, despite weak readability or character.
- Applying English tracking and uppercase habits to Arabic.
- Using size alone for hierarchy.
- Making every heading oversized.
- Tiny low-contrast body copy.
- Fixed line breaks that fail in translation.
- Inconsistent numeral styles.
- Buttons with vague verbs.
- Errors that blame the user or erase their work.

## Completion condition

Typography is ready when real Arabic and English content has been tested, type roles are semantic, line wrapping is intentional, data and labels scan clearly, and the system supports both brand expression and repeated product use.


---

<a id="source-skills-typography-content-agents-openai-yaml"></a>

## Original source file: `skills/typography-content/agents/openai.yaml`

Source SHA-256: `a2b5260531b0c978b935e8291edb68e76a6c987187d288378f3db4911d93642f`  
Source bytes: `309`

````yaml
interface:
  display_name: "HDI Typography & Content"
  short_description: "Designs expressive, readable bilingual type systems."
  brand_color: "#0C264B"
  default_prompt: "Use $typography-content to define Arabic and English type roles, hierarchy, wrapping, mixed-direction data, and content stress tests."
````


---

<a id="source-skills-typography-content-references-type-contract-md"></a>

## Original source file: `skills/typography-content/references/TYPE-CONTRACT.md`

Source SHA-256: `bbd81390af91fdc0aba2cffb332ddd0db1fda1b3077c3652291263919736a645`  
Source bytes: `1281`

# Typography Contract

## Strategy

- Primary mode: single family / paired scripts / display + functional / system-first
- Brand reason:
- Product reason:
- Performance constraints:

## Families

| Role | Arabic | Latin | Fallbacks | Weights/styles | Numerals | License/source |
|---|---|---|---|---|---|---|
| Display |  |  |  |  |  |  |
| Body |  |  |  |  |  |  |
| Data |  |  |  |  |  |  |

## Semantic tokens

| Token | Min | Preferred | Max | Line height | Weight | Tracking | Measure | Max lines |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| display-lg |  |  |  |  |  |  |  |  |
| heading-lg |  |  |  |  |  |  |  |  |
| body |  |  |  |  |  |  |  |  |
| label |  |  |  |  |  |  |  |  |

## Script rules

- Arabic spacing:
- English tracking/case:
- Mixed-direction isolation:
- Numeral style:
- Price/date/phone behavior:
- Punctuation behavior:

## Content stress samples

- Short title:
- Long Arabic title:
- Long English title:
- Long button:
- Large value:
- Error message:

## Acceptance checks

- [ ] No important text becomes unreadably small.
- [ ] Display wrapping is intentional in both languages.
- [ ] Arabic receives no inappropriate letter spacing.
- [ ] Data columns and prices scan correctly.
- [ ] Font loading does not create unacceptable layout shift.

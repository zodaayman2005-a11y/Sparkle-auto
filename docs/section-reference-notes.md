# Landing Page Section Reference Notes

These notes map the approved 16:9 composition references in `docs/reference/`
to the Sparkle Auto Master Plan v2 execution groups. They are composition
references, not independent pages and not sources of approved copy, tokens,
product claims, or product UI.

## Global reading of the references

The nine images establish a bright, spacious commercial landing page with a
clear Deep Navy and Sparkle Blue hierarchy. Large editorial headlines dominate
the left or central reading path, while the approved owner character, real
product proof, or a strong card system creates the counterweight. Water
splashes, halftone dots, small sparks, speech bubbles, and hand-drawn marks add
controlled car-wash energy without becoming the layout itself.

Across the page, the intended visual language is:

- Mostly White canvas with Pale Blue environmental artwork
- Deep Navy oversized type and Sparkle Blue highlights
- Clearly framed physical buttons and cards
- Large calm areas around concentrated information blocks
- Intentional asymmetry balanced by an underlying grid
- Premium 3D character breaking out of flat web planes
- Real product screens as proof, never recreated illustrations
- One continuous page with one sticky Header and one Footer

The repeated headers in the images only show how standalone section mockups
were presented. Implementation must render one Header for the entire page.

## Group 03 — Hero

Reference: `03-hero.jpg`

- Wide two-part composition: high-impact promise and CTAs on one side; layered
  laptop, phone, owner, splash, and editorial badge on the other.
- The product devices overlap and remain visually below the owner.
- The owner interacts physically with the laptop rather than floating nearby.
- Preserve the headline scale, short designed line breaks, broad whitespace,
  and immediate product proof.
- Use the real Overview and customer-booking screenshots only.
- Keep SLOT-01 benefit strip from the Master Plan.
- Remove the reference's “Built for car wash owners in Egypt” card because it
  is SLOT-02 and is explicitly excluded by Master Plan v2.
- Reference English text, navigation labels, and claims are not approved copy.

## Group 04 — Problem

Reference: `04-problem.jpg`

- Three-zone editorial scene: thesis and explanation; overwhelmed owner with
  scattered operational papers; stacked recurring questions.
- The central owner is the emotional anchor. Paper props and scribbles express
  chaos, while the Spark trail connects recurring questions vertically.
- Desktop should feel diagonally active; mobile reduces the papers to three and
  converts the questions into a clear vertical reading flow.
- Props, owner, scribble, and question UI must remain separate layers.

## Group 05 — What Is Sparkle Auto?

Reference: `05-what-is-sparkle.jpg`

- The section changes the story from operational chaos to structured clarity.
- Two unequal primary product blocks explain the owner/team dashboard and the
  customer experience; three smaller business-pillar blocks summarize value.
- The presenting owner anchors the open side and directs attention back toward
  the product explanation.
- Any dashboard or phone shown in production must be a genuine Sparkle Auto
  screenshot; the illustrative UI shown in the reference must not be rebuilt.
- SLOT-03 is retained using approved bilingual content.

## Group 06 — Who Is It For?

Reference: `06-who-is-it-for.jpg`

- Strong asymmetrical split: full-height owner on one side; qualification
  headline, nine-row checklist, reassurance strip, and four audience tiles on
  the other.
- The owner points toward the qualification content, requiring separate RTL
  and LTR directional poses/compositions.
- On smaller screens, content order follows persuasion rather than preserving
  desktop coordinates: headline, qualification list, reassurance, audience
  types, then supporting owner visual where space allows.
- SLOT-04 is retained with Master Plan copy.

## Group 11 — Pricing

Reference: `11-pricing.jpg`

- Three strong plan objects with the Growth plan raised and emphasized as the
  recommended choice; owner provides confidence without competing with prices.
- Preserve plan order on mobile: Operations, Growth, Expansion.
- Prices, limits, inclusions, and CTA behavior come only from approved content
  and the CTA registry, never from the image.
- Expansion pricing remains blocked until supplied; the reference placeholder
  is not final commercial copy.
- The “up to 600 cars” unit remains blocked until its period is confirmed.

## Group 12 — 14-Day Trial

Reference: `12-trial.jpg`

- One large framed offer area: oversized question and concise explanation;
  Growth Plan trial card; owner resting on the card; four supporting facts.
- The trial is a risk-reduction step after product value and pricing, not the
  page's primary sales promise.
- SLOT-08 stays, and the CTA continues to request an operations review first.
- The owner/card interaction requires a direction-aware transparent pose.

## Group 14 — Application Form

Reference: `14-application-form.jpg`

- Three-column desktop composition: explanatory copy and trust cues; dominant
  form object; supporting owner area.
- The form remains the functional and visual priority. It uses strong labels,
  logical grouping, clear selectable problems, and one full-width CTA.
- SLOT-09 explainers remain with approved copy.
- The static success-preview card visible in the mockup is excluded from the
  initial DOM composition by Master Plan v2. A real accessible success state
  replaces the form only after a successful submission.
- Fields, validation, errors, privacy language, and storage follow the Form
  Contract, not the sample labels in the image.

## Group 15 — Final CTA

Reference: `15-final-cta.jpg`

- A powerful Blue closing panel, giant conversion headline, concise support,
  primary/WhatsApp actions, brand lockup, owner crop, and energetic water art.
- Owner and water artwork break the panel edge while remaining separate layers.
- Master Plan contrast rules override the image: use Deep Navy for text on
  Sparkle Blue. Do not reproduce inaccessible White body text on `#01A2FF`.
- Use a solid approved surface rather than any apparent gradient.
- WhatsApp remains disabled until the real number and message are provided.

## Group 16 — Footer

Reference: `16-footer.jpg`

- Deep Navy closing field with a strong top transition, brand description,
  navigation, CTA, optional social links, language controls, and legal row.
- The displayed `2024` is illustrative. Production uses the current year
  dynamically.
- Social and legal links appear only when real URLs exist; never use `href="#"`.
- The pale water artwork and Footer wave must be approved production assets,
  not code-generated substitutes.

## Authority and implementation rules

When a reference conflicts with another source, use the Master Plan v2 priority
ladder. In particular:

1. Product truth, approved bilingual copy, legal/commercial rules,
   accessibility, responsive usability, RTL/LTR correctness, and performance
   beat visual similarity.
2. `tokens.css` controls every numeric visual value after Group 00 approval.
3. References control composition, hierarchy, proportions, relative scale,
   density, and overall feeling.
4. Owner characters, artwork, devices, and marks are implemented as independent
   layers; never use these flattened mockups as production scenes.
5. No visible text is extracted from the images or hardcoded in JSX.
6. Mobile and English are recomposed intentionally; real product screens are
   never mirrored.


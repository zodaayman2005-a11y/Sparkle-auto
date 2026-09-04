# HDI-OS — Reference Library

Reference catalogs, schemas, research questions, sources, and provenance resources. References are evidence, not permission to copy.

---

<a id="source-sources-md"></a>

## Original source file: `SOURCES.md`

Source SHA-256: `3c900da6edd30ba67576ed10275410c4bef0b736ba501ca8ad88d2fafabc2ed5`  
Source bytes: `4967`

# Sources and Technical Basis

The package instructions and implementation are original synthesis. These official, primary, or research sources informed the portable skill format, routing, web trust boundary, design-research method, anti-fixation rules, design-system context, and QA workflow.

## Agent Skills and host configuration

- OpenAI — Build skills: https://developers.openai.com/codex/build-skills
- OpenAI — Custom instructions with AGENTS.md: https://developers.openai.com/codex/agent-configuration/agents-md
- OpenAI — Testing Agent Skills Systematically with Evals: https://developers.openai.com/blog/eval-skills
- OpenAI — Web search tool: https://developers.openai.com/api/docs/guides/tools-web-search
- OpenAI — Codex internet access and security guidance: https://developers.openai.com/codex/cloud/internet-access
- OpenAI — Safety in building agents: https://developers.openai.com/api/docs/guides/safety-best-practices
- Agent Skills open specification: https://agentskills.io/specification
- Agent Skills best practices: https://agentskills.io/skill-creation/best-practices
- Google Antigravity — Agent Skills: https://antigravity.google/docs/skills/
- Google Antigravity — Custom Agents: https://antigravity.google/blog/introducing-custom-agents

## Design context and frontend direction

- Google Labs — DESIGN.md specification: https://github.com/google-labs-code/design.md/blob/main/docs/spec.md
- Google Labs — DESIGN.md philosophy: https://github.com/google-labs-code/design.md/blob/main/PHILOSOPHY.md
- Anthropic — Frontend Design skill: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md

## Design research, analogy, and fixation

- Stanford d.school — Design research methods: https://dschool.stanford.edu/resources
- Crilly and Cardoso — Where next for research on fixation, inspiration and creativity in design?: https://doi.org/10.1017/dsj.2017.10
- Sio, Kotovsky and Cagan — Fixation or inspiration? A meta-analytic review of the role of examples on design processes: https://doi.org/10.1016/j.destud.2015.04.004
- Design-by-analogy and anti-fixation literature is used to justify diverse, contextualized, problem-oriented examples rather than one similarity-ranked feed.

## Copyright and source boundaries

- WIPO — Copyright overview: https://www.wipo.int/copyright/en/

HDI-OS treats ideas and transferable principles separately from source-owned expression and does not authorize reuse of protected assets, code, copy, screenshots, fonts, or proprietary UI.

## Accessibility and verification

- W3C — WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C — ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/
- Playwright — Visual comparisons: https://playwright.dev/docs/test-snapshots
- Playwright — Accessibility testing: https://playwright.dev/docs/accessibility-testing
- Storybook — Accessibility testing: https://storybook.js.org/docs/writing-tests/accessibility-testing
- Storybook — Visual tests: https://storybook.js.org/docs/writing-tests/visual-testing

## Inspiration and experience research indexes

These are discovery indexes, not bundled evidence or permission to copy:

- Awwwards: https://www.awwwards.com/
- SiteInspire: https://www.siteinspire.com/
- Godly: https://godly.website/
- Mobbin: https://mobbin.com/
- Page Flows: https://pageflows.com/
- Codrops: https://tympanus.net/codrops/
- GSAP Showcase: https://gsap.com/showcase/
- Typewolf: https://www.typewolf.com/
- Fonts In Use: https://fontsinuse.com/

## v1.2 specialist foundations

- GOV.UK Service Manual — User research: https://www.gov.uk/service-manual/user-research
- GOV.UK Service Manual — Using moderated usability testing: https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing
- W3C — WCAG 2.2 Quick Reference: https://www.w3.org/WAI/WCAG22/quickref/
- W3C Internationalization — Authoring techniques: https://www.w3.org/International/techniques/authoring-html
- Unicode Consortium — Common Locale Data Repository: https://cldr.unicode.org/
- web.dev — Web Vitals: https://web.dev/articles/vitals
- Google Search Central — Crawling and indexing: https://developers.google.com/search/docs/crawling-indexing
- Google Search Central — People-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Federal Trade Commission — Bringing Dark Patterns to Light: https://www.ftc.gov/reports/bringing-dark-patterns-light
- OpenTelemetry — Semantic conventions: https://opentelemetry.io/docs/specs/semconv/
- W3C Design Tokens Community Group — Design Tokens Format Module (current draft status must be checked before implementation): https://www.designtokens.org/TR/drafts/format/

These sources inform methods and constraints; HDI-OS does not present them as a substitute for qualified legal, security, privacy, statistical, accessibility-certification, or user-research expertise.


---

<a id="source-reference-library-readme-md"></a>

## Original source file: `reference-library/README.md`

Source SHA-256: `e0d21e89a456b72eec13c26eb3b818c25cfd74938800d801d51f5917d802f0bf`  
Source bytes: `1533`

# Reference Library

This library stores analysis, not copied design assets. Live-web discovery and provenance belong in `research-system/`; close source decomposition and long-term reusable design lessons can become Reference Cards here.

## Files

- `reference-card.schema.json` — analyzed-reference contract.
- `reference-card.template.json` — blank card.
- `archetypes.json` — twenty original concept archetypes.
- `SOURCE-CATALOG.md` — source families organized by research question.
- `RESEARCH-QUESTIONS.md` — prompts that prevent vague searches.

## Research-to-reference flow

```text
web-design-research → SOURCES.jsonl
→ reference-intelligence → structured reference card
→ inspiration-synthesis → source-to-decision map
```

Not every source becomes a permanent reference card. Promote only sources with reusable lessons and clear provenance.

## Rules

1. Do not store third-party screenshots, fonts, code, or assets without rights.
2. Keep original location, date, viewport, state, market/language, and limitations.
3. Treat one screenshot as one state—not a whole system.
4. Separate observation, interpretation, transferable principle, and adaptation.
5. Explicitly list source-owned expression that must not be copied.
6. Use multiple source families to synthesize a direction.
7. Do not retrieve an archetype by style name alone; match product, user, task, content density, market, and behavior.
8. An award or visual popularity is not proof of UX, accessibility, or commercial effectiveness.


---

<a id="source-reference-library-research-questions-md"></a>

## Original source file: `reference-library/RESEARCH-QUESTIONS.md`

Source SHA-256: `a85f14be1cf39696ec50be1c57f929cba91ef45889eaa3cbb5a62f28cf15fb7f`  
Source bytes: `1407`

# Reference Research Questions

Use a concrete question before opening an inspiration index.

## Strategy

- What must the audience understand in the first five seconds?
- What visual world would make this promise credible for this exact audience?
- Which category norms should be preserved for comprehension, and which should be rejected for distinction?

## Composition

- Which layout topology makes the primary message and proof visible without equal cards?
- How can density change across the page to control pacing?
- What stable anchor allows controlled asymmetry?

## Typography

- How do strong examples in the target script create display hierarchy without hurting body readability?
- How are numbers, prices, dates, and mixed scripts treated?

## Product UX

- How do mature products expose scope, status, filters, errors, and permissions for this task?
- What happens in loading, empty, partial, and high-volume states?

## Motion

- Which transitions make cause and effect understandable?
- How is the experience interrupted, reversed, reduced, or adapted to mobile?

## Imagery

- What camera, crop, lighting, geometry, or material decisions make the visual world coherent?
- Which assets provide evidence rather than decoration?

## Responsive and RTL

- What actually changes at compact widths?
- Which visual relationships depend on reading direction, and which depend on physical meaning?


---

<a id="source-reference-library-source-catalog-md"></a>

## Original source file: `reference-library/SOURCE-CATALOG.md`

Source SHA-256: `a44ea16bda508ce0da1315904698f0533cd43a2b56ea007fd1626f17602eb23b`  
Source bytes: `4165`

# Source Catalog by Evidence Role

Verify current access, terms, dates, and content before use. These are discovery indexes and source families; HDI-OS does not authorize copying protected work.

## Primary reality and product behavior

- Live competitor/product/service websites and applications.
- Official product documentation, release notes, help centers, and design systems.
- Approved user interviews, usability studies, analytics, support logs, reviews, and sales objections.

Use for: product truth, real journeys, states, constraints, user expectations, and implementation feasibility.

## Distinctive marketing and art direction

- Awwwards — https://www.awwwards.com/
- SiteInspire — https://www.siteinspire.com/
- Godly — https://godly.website/
- Land-book — https://land-book.com/
- Lapa Ninja — https://www.lapa.ninja/

Use for: discovering composition, section rhythm, art direction, hero topology, and presentation craft. Open the original live site and pair visual evidence with functional/user evidence. Awards and gallery placement are not proof of usability or conversion.

## Product flows and real interface patterns

- Live products and official product documentation.
- Mobbin — https://mobbin.com/
- Page Flows — https://pageflows.com/
- Apple HIG — https://developer.apple.com/design/human-interface-guidelines/
- Material Design — https://m3.material.io/
- IBM Carbon — https://carbondesignsystem.com/
- Microsoft Fluent — https://fluent2.microsoft.design/
- Adobe Spectrum — https://spectrum.adobe.com/
- Atlassian Design System — https://atlassian.design/
- Shopify Polaris — https://polaris.shopify.com/
- Radix Primitives — https://www.radix-ui.com/primitives

Use for: navigation, flows, forms, states, behavior, accessibility, density, and system thinking. Do not treat a system's default appearance as the brand.

## Typography and editorial craft

- Typewolf — https://www.typewolf.com/
- Fonts In Use — https://fontsinuse.com/
- Type-foundry specimens and language/script specimens.
- Current editorial publications in the target language and market.

Use for: role relationships, pairing, measure, hierarchy, numerals, script behavior, and actual context. Verify font licensing separately.

## Motion and creative development

- Codrops — https://tympanus.net/codrops/
- GSAP Showcase — https://gsap.com/showcase/
- Official Web Animations, Motion, GSAP, Three.js, React Three Fiber, browser, and framework documentation.
- Studio case studies that explain intent and production.

Study trigger, purpose, timing, choreography, continuity, interruption, performance, mobile fallback, and reduced motion—not effect names alone.

## Accessibility, performance, and verification

- WCAG — https://www.w3.org/TR/WCAG22/
- ARIA Authoring Practices — https://www.w3.org/WAI/ARIA/apg/
- Web performance/browser/platform documentation.
- Playwright — https://playwright.dev/
- Storybook — https://storybook.js.org/

## Competitive and substitute research

Include:

- Direct competitors.
- Indirect methods.
- Manual substitutes such as calls, WhatsApp, paper, spreadsheets, and staff memory.
- Aspirational products solving the same trust or complexity problem in another category.

Compare defined journeys and states—not homepage aesthetics alone.

## Local and cultural evidence

Use current local products, user behavior, language/dialect, publishing, packaging, signage, architecture, service rituals, tools, uniforms, transport, entertainment, and craft. State the exact audience, locality, and period. Avoid tourist shorthand and stereotypes.

## Adjacent and distant-domain analogies

Consider maps, industrial controls, architecture, exhibitions, film titles, editorial systems, packaging, wayfinding, scientific diagrams, and physical service environments. Translate mechanisms into project-specific design principles; do not imitate appearance literally.

## Negative evidence

Record confusing, inaccessible, misleading, slow, generic, or brittle examples when they clarify a refusal rule. Do not publicly shame individuals; describe the observable failure and its effect.


---

<a id="source-reference-library-archetypes-json"></a>

## Original source file: `reference-library/archetypes.json`

Source SHA-256: `66745fce367fefa5e488987f137b56112a3151a842b91f0b68130ca5c9913e37`  
Source bytes: `28416`

````json
{
  "version": "1.0.0",
  "archetypes": [
    {
      "id": "arc-01",
      "name": "Editorial Authority",
      "best_for": [
        "expert services",
        "thought leadership",
        "premium B2B",
        "strong point of view"
      ],
      "avoid_for": [
        "dense repeated operations without a functional sub-system"
      ],
      "concept": "A publication-like interface where type, evidence, and deliberate pacing make the brand feel authored rather than templated.",
      "layout_topology": "Offset editorial grid with one dominant type mass, controlled image breakouts, and alternating open/dense chapters.",
      "composition_rules": [
        "One primary headline mass per viewport",
        "Use stable column anchors before overlaps",
        "Let evidence interrupt the editorial rhythm at decision points"
      ],
      "typography": "Distinctive display voice plus quiet functional body; controlled line breaks; strong scale contrast.",
      "color_material": "Mostly neutral field with scarce structural accent; paper, ink, or precise digital equivalents.",
      "imagery": "Art-directed crops, process evidence, or product proof; no generic stock collage.",
      "motion": "Page-turn rhythm, sectional reveal, or image continuity; restrained during reading.",
      "responsive": "Recompose offsets into a clear linear reading sequence; preserve type dominance without consuming the whole mobile viewport.",
      "rtl": "Rebalance anchors and headline silhouette rather than mirror every crop.",
      "anti_patterns": [
        "tiny body copy",
        "random overlaps",
        "magazine styling with no content hierarchy"
      ]
    },
    {
      "id": "arc-02",
      "name": "Product Proof Engine",
      "best_for": [
        "SaaS landing pages",
        "complex products",
        "low-trust categories",
        "buyers needing evidence"
      ],
      "avoid_for": [
        "brands with no real product surface or proof"
      ],
      "concept": "Every promise resolves into a readable product state, workflow, or measurable piece of evidence.",
      "layout_topology": "Promise and proof paired in escalating modules; focused screenshot stages instead of decorative device clouds.",
      "composition_rules": [
        "Keep proof large enough to inspect",
        "Use annotations only to direct attention",
        "Sequence screenshots by user question"
      ],
      "typography": "Clear explanatory hierarchy; display type supports, not competes with, the product UI.",
      "color_material": "Brand field around neutral product surfaces; contrast isolates the exact evidence.",
      "imagery": "Real screenshots, honest prototypes, process diagrams, and selective context imagery.",
      "motion": "State transitions and zooms explain cause and effect.",
      "responsive": "Replace multi-device collages with one focused proof per step.",
      "rtl": "Use language-specific screenshots and direction-aware annotations.",
      "anti_patterns": [
        "fake dashboards",
        "unreadable screenshots",
        "feature claims without visible proof"
      ]
    },
    {
      "id": "arc-03",
      "name": "Industrial Blueprint",
      "best_for": [
        "operations",
        "logistics",
        "automotive",
        "construction",
        "technical services"
      ],
      "avoid_for": [
        "soft wellness or intimate consumer experiences unless deliberately contrasted"
      ],
      "concept": "The interface behaves like a clear operating diagram: structural, inspectable, and engineered for control.",
      "layout_topology": "Modular blueprint grid, rails, labels, large process diagrams, and hard alignment anchors.",
      "composition_rules": [
        "Use lines and boxes to explain relationships",
        "Reserve annotation density for real information",
        "Break the grid only to mark operational priority"
      ],
      "typography": "Bold utilitarian display with highly legible labels and numerals.",
      "color_material": "Light technical field, dark structural ink, one high-visibility signal color.",
      "imagery": "Diagrammatic scenes, real equipment, simplified 3D props, product screens.",
      "motion": "Lines trace process; modules lock into place; motion expresses systemization.",
      "responsive": "Transform wide diagrams into steps or scrollable focused panels.",
      "rtl": "Re-author process order where reading order matters; preserve physical machinery orientation when required.",
      "anti_patterns": [
        "decorative blueprint lines",
        "illegible micro-labels",
        "technical style without operational content"
      ]
    },
    {
      "id": "arc-04",
      "name": "Warm Local Utility",
      "best_for": [
        "local services",
        "booking",
        "community businesses",
        "low-tech audiences"
      ],
      "avoid_for": [
        "high-fashion or deliberately distant luxury"
      ],
      "concept": "A practical, human, locally credible interface that feels easy to trust and easy to act on.",
      "layout_topology": "Direct service blocks, real proof, clear process, persistent contact action, generous mobile spacing.",
      "composition_rules": [
        "Lead with fit and action",
        "Use human/environment proof near risk questions",
        "Keep language and visuals concrete"
      ],
      "typography": "Friendly high-legibility text with strong action labels; dialect-aware writing.",
      "color_material": "Bright but controlled brand color, warm neutrals, strong action contrast.",
      "imagery": "Real team, place, work, results, or culturally credible illustration.",
      "motion": "Small causal feedback and process demonstration; no long showreel before contact.",
      "responsive": "Mobile-first; phone/WhatsApp/booking remains reachable.",
      "rtl": "Arabic is composed first where primary, with readable phone and price isolation.",
      "anti_patterns": [
        "generic corporate stock",
        "formal translated jargon",
        "hidden service area or contact"
      ]
    },
    {
      "id": "arc-05",
      "name": "Quiet Precision",
      "best_for": [
        "professional tools",
        "finance",
        "health administration",
        "high-trust B2B"
      ],
      "avoid_for": [
        "campaigns requiring loud emotional energy"
      ],
      "concept": "Confidence comes from exact hierarchy, restraint, and flawless detail rather than decorative luxury signals.",
      "layout_topology": "Calm grid, strong alignment, limited component shapes, carefully paced density.",
      "composition_rules": [
        "Make status and action obvious through placement",
        "Use whitespace to separate decisions",
        "Keep ornament subordinate"
      ],
      "typography": "Neutral high-quality family, excellent numeral behavior, subtle hierarchy.",
      "color_material": "Low-saturation surfaces with one precise accent and clear semantic states.",
      "imagery": "Sparse; product/data evidence and carefully selected diagrams.",
      "motion": "Immediate, measured, interruptible.",
      "responsive": "Preserve task priority; density reduces selectively.",
      "rtl": "Script quality and numeric alignment are critical; do not over-mirror data conventions.",
      "anti_patterns": [
        "false minimalism with tiny copy",
        "weak contrast",
        "luxury conveyed only by beige and thin type"
      ]
    },
    {
      "id": "arc-06",
      "name": "Fresh Neo-Brutalist System",
      "best_for": [
        "bold SaaS",
        "youthful B2B",
        "creative utilities",
        "brands needing memorability and clarity"
      ],
      "avoid_for": [
        "contexts where hard visual tension harms trust or readability"
      ],
      "concept": "Structural rectangles, decisive type, visible borders, and hard depth create an energetic system rather than chaotic decoration.",
      "layout_topology": "Chunky modules, asymmetric stages, hard-edge callouts, strong whitespace intervals.",
      "composition_rules": [
        "Use brutal elements structurally",
        "Limit shadow levels",
        "Keep the page mostly readable and light enough for content"
      ],
      "typography": "Bold display and functional body with obvious hierarchy.",
      "color_material": "One fresh primary, deep structural ink, white or light field, scarce secondary accent.",
      "imagery": "Stylized 3D or bold product proof integrated into modules.",
      "motion": "Snaps, locks, pushes, and mechanical transitions; avoid constant bouncing.",
      "responsive": "Modules stack or transform without becoming a long pile of bordered cards.",
      "rtl": "Recompose asymmetric stages; hard shadows remain physically consistent unless concept says otherwise.",
      "anti_patterns": [
        "dark heavy brutalism everywhere",
        "random rotations",
        "every element with the same border and shadow"
      ]
    },
    {
      "id": "arc-07",
      "name": "Kinetic Type Campaign",
      "best_for": [
        "launches",
        "events",
        "music",
        "culture",
        "short high-impact campaigns"
      ],
      "avoid_for": [
        "dense product workflows or long reading"
      ],
      "concept": "Type is the main moving image, carrying rhythm, tone, and sequence.",
      "layout_topology": "Full-bleed typographic frames with controlled image or product interruptions.",
      "composition_rules": [
        "One phrase per visual beat",
        "Preserve semantic order",
        "Use motion to sequence meaning rather than decorate letters"
      ],
      "typography": "Expressive variable/display typography; readable fallback and body system.",
      "color_material": "High contrast and limited palette aligned to campaign energy.",
      "imagery": "Secondary or integrated as masks/crops; not a competing collage.",
      "motion": "Choreographed type transformations tied to message beats.",
      "responsive": "Create a separate compact choreography; avoid scaled desktop text storms.",
      "rtl": "Arabic motion and letter behavior require native script treatment, not Latin effects applied mechanically.",
      "anti_patterns": [
        "illegible animated type",
        "all text rasterized",
        "motion continuing while users read body copy"
      ]
    },
    {
      "id": "arc-08",
      "name": "Cinematic 3D Stage",
      "best_for": [
        "hero products",
        "automotive",
        "hardware",
        "launch storytelling",
        "spatial metaphors"
      ],
      "avoid_for": [
        "low-performance contexts without fallback or products with no spatial story"
      ],
      "concept": "A single cinematic object or world demonstrates the product idea through camera, light, material, and controlled sequence.",
      "layout_topology": "Dominant scene with semantic DOM text and action anchored around it.",
      "composition_rules": [
        "One hero object/world",
        "Protect copy and CTA contrast zones",
        "Storyboard camera and text relationship"
      ],
      "typography": "Strong but restrained around the scene; avoid fighting visual depth.",
      "color_material": "Unified lighting, surface, and DOM palette.",
      "imagery": "Optimized 3D assets, fallback stills/video, real product screens when shown.",
      "motion": "Camera or object motion reveals a concept; user can skip and reverse.",
      "responsive": "Simplified scene or static composition on mobile.",
      "rtl": "Text and object balance may change; physical object identity must not be mirrored incorrectly.",
      "anti_patterns": [
        "generic glossy object",
        "long loading intro",
        "essential content only inside WebGL"
      ]
    },
    {
      "id": "arc-09",
      "name": "Transparent Operations",
      "best_for": [
        "management software",
        "status tracking",
        "service workflows",
        "trust through visibility"
      ],
      "avoid_for": [
        "products whose value is not process visibility"
      ],
      "concept": "The interface visualizes what is happening, what changed, and what needs attention with calm operational transparency.",
      "layout_topology": "Status-first overview, work queue, detail drill-down, and exception rail.",
      "composition_rules": [
        "Show active scope",
        "Prioritize exceptions and next actions",
        "Use summaries that lead to evidence"
      ],
      "typography": "Clear status labels and aligned numerals; limited display type.",
      "color_material": "Neutral operational surfaces with disciplined semantic colors.",
      "imagery": "Real product UI and process diagrams; minimal decoration.",
      "motion": "State continuity and status updates; no gratuitous page transitions.",
      "responsive": "Monitoring and urgent actions prioritized on mobile.",
      "rtl": "Status order, timelines, and mixed data receive deliberate direction rules.",
      "anti_patterns": [
        "dashboard as metric wallpaper",
        "color-only status",
        "scope hidden in a dropdown"
      ]
    },
    {
      "id": "arc-10",
      "name": "Modular Data Command Center",
      "best_for": [
        "enterprise analytics",
        "operations",
        "monitoring",
        "expert workflows"
      ],
      "avoid_for": [
        "first-time consumer products requiring emotional onboarding"
      ],
      "concept": "Dense information is organized into stable modules that support scanning, comparison, and action without visual noise.",
      "layout_topology": "Persistent scope and filters, modular grid, expandable detail, keyboard-oriented actions.",
      "composition_rules": [
        "Align repeated values",
        "Use size and placement for priority",
        "Keep modules stable during updates"
      ],
      "typography": "Compact but readable; tabular numerals; strong labels.",
      "color_material": "Low-chroma surfaces, clear semantic signals, restrained chart palette.",
      "imagery": "Data visualization and diagrams only when they answer a question.",
      "motion": "Small state continuity and update feedback.",
      "responsive": "Define supported mobile jobs; use focused drill-down rather than full shrink.",
      "rtl": "Tables, numbers, and time direction need explicit policies.",
      "anti_patterns": [
        "cards for every number",
        "charts for decoration",
        "mobile fake parity"
      ]
    },
    {
      "id": "arc-11",
      "name": "Human Process Story",
      "best_for": [
        "onboarding",
        "service explanation",
        "health journeys",
        "complex setup",
        "customer education"
      ],
      "avoid_for": [
        "expert users who need direct controls, not a story"
      ],
      "concept": "A relatable person, object, or scenario carries the user through a process from confusion to resolution.",
      "layout_topology": "Scene-based chapters with one question and one transformation per step.",
      "composition_rules": [
        "Maintain character/object continuity",
        "Keep each scene focused",
        "Place product proof at the exact resolution point"
      ],
      "typography": "Conversational headings with functional explanatory copy.",
      "color_material": "Brand world consistent across scenes; semantic product UI remains clear.",
      "imagery": "Locked character/prop system, real environment cues, product interface as evidence.",
      "motion": "Cause-and-effect scene transitions.",
      "responsive": "Stack scenes with continuity anchors; reduce decorative props.",
      "rtl": "Re-author scene staging when text and gaze direction matter.",
      "anti_patterns": [
        "mascot unrelated to user",
        "too many speech bubbles",
        "character inconsistency"
      ]
    },
    {
      "id": "arc-12",
      "name": "Material Product Lab",
      "best_for": [
        "developer tools",
        "design tools",
        "creative software",
        "technical products"
      ],
      "avoid_for": [
        "services where laboratory language feels cold or artificial"
      ],
      "concept": "The page feels like an instrument bench where components, inputs, and outputs are exposed and testable.",
      "layout_topology": "Workbench panels, live examples, specimen modules, controlled technical annotations.",
      "composition_rules": [
        "Demonstrate behavior live when possible",
        "Keep labels precise",
        "Use modules as experiments, not generic cards"
      ],
      "typography": "Technical functional body plus distinctive display or mono accent used sparingly.",
      "color_material": "Neutral work surfaces, instrument-like accent, precise borders.",
      "imagery": "Live UI, code, diagrams, controlled 3D objects.",
      "motion": "Input-to-output feedback and state transformation.",
      "responsive": "Prioritize one experiment at a time on compact screens.",
      "rtl": "Code remains LTR; surrounding explanation and controls use intentional bidi structure.",
      "anti_patterns": [
        "mono font everywhere",
        "fake terminal content",
        "technical decoration without live proof"
      ]
    },
    {
      "id": "arc-13",
      "name": "Heritage Reframed",
      "best_for": [
        "local brands",
        "craft",
        "culture",
        "hospitality",
        "institutions modernizing identity"
      ],
      "avoid_for": [
        "products with no authentic heritage source"
      ],
      "concept": "A real historical, local, or material source is translated into modern layout rules without becoming nostalgia decoration.",
      "layout_topology": "Contemporary grid with selected archival proportions, motifs, or typography behavior.",
      "composition_rules": [
        "Name the authentic source",
        "Abstract rules rather than paste ornaments",
        "Balance heritage proof with present-day usability"
      ],
      "typography": "Script-appropriate type with historical resonance and modern readability.",
      "color_material": "Derived from real materials, places, print, or objects; controlled digital roles.",
      "imagery": "Original archives, craft detail, place, or commissioned interpretation.",
      "motion": "Subtle material transitions or archival reveal; no theme-park effects.",
      "responsive": "Preserve source relationships while simplifying ornament.",
      "rtl": "Local script and reading traditions shape the composition natively.",
      "anti_patterns": [
        "random arabesque motif",
        "fake vintage texture",
        "heritage used as stereotype"
      ]
    },
    {
      "id": "arc-14",
      "name": "Soft Guided Utility",
      "best_for": [
        "consumer finance",
        "wellness",
        "education",
        "onboarding",
        "sensitive tasks"
      ],
      "avoid_for": [
        "brands needing aggressive technical energy"
      ],
      "concept": "The interface reduces anxiety through clear steps, supportive language, quiet surfaces, and visible progress.",
      "layout_topology": "Focused step or task region with gentle context and progressive disclosure.",
      "composition_rules": [
        "One decision at a time",
        "Keep progress honest",
        "Put reassurance near risk"
      ],
      "typography": "Highly readable with calm hierarchy; no fragile ultra-light text.",
      "color_material": "Soft neutral field, trustworthy primary, clear semantic state colors.",
      "imagery": "Human context or simple explanatory illustration used sparingly.",
      "motion": "Calm feedback and continuity; no playful delay during consequential tasks.",
      "responsive": "Comfortable touch and keyboard behavior; preserve entered data.",
      "rtl": "Supportive Arabic copy is transcreated; form data direction is handled carefully.",
      "anti_patterns": [
        "childish softness",
        "vague reassurance",
        "hidden consequences"
      ]
    },
    {
      "id": "arc-15",
      "name": "Bold Conversion Poster",
      "best_for": [
        "single offer",
        "event registration",
        "limited campaign",
        "direct-response page"
      ],
      "avoid_for": [
        "complex products needing extensive education"
      ],
      "concept": "A poster-like first impression makes one offer and one action impossible to miss, followed by concise proof and risk removal.",
      "layout_topology": "Monumental opening statement, proof strip, offer block, objections, final action.",
      "composition_rules": [
        "One dominant claim",
        "One primary CTA",
        "Use proof as counterweight, not a second campaign"
      ],
      "typography": "Large display type with short lines and explicit action language.",
      "color_material": "High contrast, limited palette, strong action field.",
      "imagery": "One key visual or product proof; no asset collage.",
      "motion": "Short punchy sequence; action remains available immediately.",
      "responsive": "Re-author headline scale and keep CTA above excessive media.",
      "rtl": "Arabic line composition and emphasis are designed independently.",
      "anti_patterns": [
        "five CTAs",
        "vague slogan",
        "giant type hiding important terms"
      ]
    },
    {
      "id": "arc-16",
      "name": "Playful Geometric Logic",
      "best_for": [
        "education",
        "creative productivity",
        "family products",
        "accessible tech"
      ],
      "avoid_for": [
        "serious high-risk workflows unless playfulness is tightly bounded"
      ],
      "concept": "Simple geometry and transformations make systems feel approachable while retaining clear rules.",
      "layout_topology": "Large geometric anchors, modular content, playful but aligned transitions.",
      "composition_rules": [
        "Assign each shape a role",
        "Limit the shape vocabulary",
        "Use playfulness to explain grouping or sequence"
      ],
      "typography": "Friendly display, highly functional body.",
      "color_material": "Controlled bright palette with neutral reading surfaces.",
      "imagery": "Geometric illustration, simple 3D props, or product UI.",
      "motion": "Shapes transform to explain state and relationship.",
      "responsive": "Simplify the shape system and prevent decoration from consuming task space.",
      "rtl": "Directional transformations are classified; geometric identity can remain stable.",
      "anti_patterns": [
        "random colorful blobs",
        "toy-like controls",
        "animation on every shape"
      ]
    },
    {
      "id": "arc-17",
      "name": "Spatial Comparison Gallery",
      "best_for": [
        "plans",
        "products",
        "case studies",
        "before/after",
        "feature comparison"
      ],
      "avoid_for": [
        "content with no meaningful comparison axes"
      ],
      "concept": "Items inhabit a shared spatial framework so differences become visible without a dense table being the only method.",
      "layout_topology": "Shared comparison stage, controlled columns or layers, focused detail transitions.",
      "composition_rules": [
        "Use common anchors",
        "Keep comparison criteria stable",
        "Allow focused drill-down"
      ],
      "typography": "Consistent labels and aligned data; display type limited to framing.",
      "color_material": "Neutral shared field; color highlights differences deliberately.",
      "imagery": "Consistent crop, scale, and perspective across compared items.",
      "motion": "Shared-element transitions preserve context when focusing an item.",
      "responsive": "Convert to one-at-a-time comparison with persistent criteria or a scrollable axis.",
      "rtl": "Column order follows content logic and reading direction where appropriate.",
      "anti_patterns": [
        "inconsistent image scale",
        "different criteria per item",
        "mobile columns squeezed unreadably"
      ]
    },
    {
      "id": "arc-18",
      "name": "Narrative Process Rail",
      "best_for": [
        "multi-step setup",
        "operations flow",
        "customer journey",
        "method explanation"
      ],
      "avoid_for": [
        "processes that are not actually sequential"
      ],
      "concept": "A stable rail or object carries attention through a real sequence, revealing one cause-and-effect relationship at a time.",
      "layout_topology": "Vertical or horizontal rail with scene modules and a persistent progress anchor.",
      "composition_rules": [
        "One step owns the focus",
        "Keep completed and upcoming context visible but quiet",
        "Use real sequence and dependencies"
      ],
      "typography": "Step labels and concise explanations; strong numeric/order clarity.",
      "color_material": "Progress and state colors have explicit roles.",
      "imagery": "Process diagrams, product states, or recurring props.",
      "motion": "Progress travels along the rail; scene changes preserve anchor continuity.",
      "responsive": "Horizontal often becomes vertical or stacked cards with progress context.",
      "rtl": "Horizontal order may reverse for reading sequence; physical process diagrams may require separate logic.",
      "anti_patterns": [
        "timeline for unrelated features",
        "too much pinned scrolling",
        "steps without visible outcome"
      ]
    },
    {
      "id": "arc-19",
      "name": "Evidence-Led Minimalism",
      "best_for": [
        "research",
        "consulting",
        "B2B",
        "technical credibility",
        "case-study sites"
      ],
      "avoid_for": [
        "brands whose value depends on expressive entertainment"
      ],
      "concept": "The design removes noise so claims, methods, data, and artifacts carry the authority.",
      "layout_topology": "Clear text and evidence columns, strong annotations, restrained modules, intentional pauses.",
      "composition_rules": [
        "Every visual supports a claim",
        "Use white space to separate evidence groups",
        "Keep primary action clear but not theatrical"
      ],
      "typography": "Readable, serious, strong information hierarchy.",
      "color_material": "Neutral field, precise accent for links/evidence/status.",
      "imagery": "Charts, documents, real work, diagrams, product evidence.",
      "motion": "Minimal continuity and disclosure.",
      "responsive": "Maintain evidence order and readable tables/figures.",
      "rtl": "Arabic evidence captions and mixed data are composed carefully.",
      "anti_patterns": [
        "empty minimalism",
        "claims with no source",
        "tiny captions"
      ]
    },
    {
      "id": "arc-20",
      "name": "Adaptive Brand Shell",
      "best_for": [
        "brands with expressive marketing plus functional product",
        "multi-surface SaaS",
        "platform ecosystems"
      ],
      "avoid_for": [
        "small projects that do not need multiple expression levels"
      ],
      "concept": "One brand system changes density, motion, and composition by surface while preserving shared color roles, typography logic, and distinctive assets.",
      "layout_topology": "Expressive marketing chapters; disciplined product grids; shared shell and tokens.",
      "composition_rules": [
        "Share foundations, not every component shape",
        "Define surface-specific expression budgets",
        "Preserve recognizable brand signals"
      ],
      "typography": "Shared families or relationship, with different scale/density by surface.",
      "color_material": "Shared semantic palette with surface-specific coverage and depth.",
      "imagery": "Marketing uses narrative assets; product uses evidence and functional icons.",
      "motion": "Campaign motion can be expressive; product motion remains causal and efficient.",
      "responsive": "Each surface has its own transformation rules.",
      "rtl": "Shared bidi principles with surface-specific composition.",
      "anti_patterns": [
        "dashboard made to look like a campaign",
        "marketing page stripped of all identity",
        "two unrelated design systems"
      ]
    }
  ]
}
````


---

<a id="source-reference-library-reference-card-schema-json"></a>

## Original source file: `reference-library/reference-card.schema.json`

Source SHA-256: `670591be647ce4faaed27766475c602e7f826150b1216883a3e9d4162a5a3385`  
Source bytes: `2510`

````json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "HDI-OS Reference Card",
  "type": "object",
  "required": [
    "id",
    "title",
    "source",
    "context",
    "why_selected",
    "analysis",
    "transferable_principles",
    "do_not_copy",
    "project_adaptation"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "source": {
      "type": "object",
      "required": [
        "type",
        "location"
      ],
      "properties": {
        "type": {
          "type": "string"
        },
        "location": {
          "type": "string"
        },
        "reviewed_on": {
          "type": "string"
        }
      }
    },
    "context": {
      "type": "object",
      "properties": {
        "surface": {
          "type": "string"
        },
        "audience": {
          "type": "string"
        },
        "objective": {
          "type": "string"
        },
        "viewport": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "language": {
          "type": "string"
        }
      }
    },
    "why_selected": {
      "type": "string"
    },
    "analysis": {
      "type": "object",
      "properties": {
        "layout_topology": {
          "type": "string"
        },
        "focal_point": {
          "type": "string"
        },
        "visual_mass": {
          "type": "string"
        },
        "grid": {
          "type": "string"
        },
        "whitespace": {
          "type": "string"
        },
        "typography": {
          "type": "string"
        },
        "color_material": {
          "type": "string"
        },
        "imagery": {
          "type": "string"
        },
        "motion_interaction": {
          "type": "string"
        },
        "responsive_evidence": {
          "type": "string"
        },
        "rtl_evidence": {
          "type": "string"
        }
      }
    },
    "transferable_principles": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "do_not_copy": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "risks": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "project_adaptation": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
````


---

<a id="source-reference-library-reference-card-template-json"></a>

## Original source file: `reference-library/reference-card.template.json`

Source SHA-256: `b0dc9face7bd83b17ba898e2da9bea8046858250680a7236b4113a8dc1040ad6`  
Source bytes: `733`

````json
{
  "id": "ref-000",
  "title": "",
  "source": {
    "type": "url-or-file",
    "location": "",
    "reviewed_on": "YYYY-MM-DD"
  },
  "context": {
    "surface": "",
    "audience": "",
    "objective": "",
    "viewport": "",
    "state": "",
    "language": ""
  },
  "why_selected": "",
  "analysis": {
    "layout_topology": "",
    "focal_point": "",
    "visual_mass": "",
    "grid": "",
    "whitespace": "",
    "typography": "",
    "color_material": "",
    "imagery": "",
    "motion_interaction": "",
    "responsive_evidence": "unknown unless observed",
    "rtl_evidence": "unknown unless observed"
  },
  "transferable_principles": [],
  "do_not_copy": [],
  "risks": [],
  "project_adaptation": [],
  "tags": []
}
````

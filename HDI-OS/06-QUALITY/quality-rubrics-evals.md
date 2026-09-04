# HDI-OS — Quality Rubrics and Evaluations

Central hard gates, scoring, state coverage, RTL, motion, anti-generic review, and evaluation infrastructure. Execution skill: [Visual QA and Refinement](../02-SKILLS/visual-qa-refinement.md).

---

<a id="source-evals-comparison-template-md"></a>

## Original source file: `evals/COMPARISON.template.md`

Source SHA-256: `7c94391c558593e6d8ed17c651dbad397e0de909716257aaa350c7056e8e5516`  
Source bytes: `657`

# Eval Comparison — [Case ID]

- Model/host:
- Date:
- Baseline context:
- Skill-assisted context:
- Target skill version:

## Hard assertions

| Assertion | Baseline | Skill | Evidence |
|---|---|---|---|
|  | Pass/Fail | Pass/Fail |  |

## Quality assertions

| Assertion | Baseline 0–2 | Skill 0–2 | Evidence |
|---|---:|---:|---|
|  |  |  |  |

## Pairwise verdict

- Better outcome:
- Better process:
- Better design quality:
- Better efficiency:
- New regression:
- Triggering accuracy:

## Decision

Keep / revise instructions / revise description / split skill / remove change.

## Next edit

[Smallest change likely to improve the next run.]


---

<a id="source-evals-runbook-md"></a>

## Original source file: `evals/RUNBOOK.md`

Source SHA-256: `7f8654f12335330a2ad0fe72ecc6a248b922f4c41f2ee4fb36443e3236d8388b`  
Source bytes: `2258`

# Skill Evaluation Runbook

## Purpose

A skill is useful only if it improves observable behavior. Compare the same model and task with and without the skill in a clean context.

## A/B protocol

### Run A — Baseline

- Use a clean project copy.
- Do not mention or expose the target skill.
- Give the exact case prompt and fixtures.
- Record output, commands, tokens/time when available, and screenshots.

### Run B — Skill-assisted

- Reset to the same clean project copy.
- Expose and explicitly activate the target skill.
- Give the exact same prompt and fixtures.
- Record the same evidence.

### Optional Run C — Implicit routing

- Expose the skill but do not name it.
- Test whether the description triggers correctly.

## Evaluate four dimensions

1. **Outcome:** Did the requested artifact or decision succeed?
2. **Process:** Did the agent follow the intended gates and use the right evidence?
3. **Style/quality:** Did the result meet design and UX criteria?
4. **Efficiency:** Did the skill reduce thrashing without unacceptable context or execution cost?

## Scoring

- Hard assertions are pass/fail.
- Quality assertions use 0–2: absent, partial, strong.
- Compare pairwise before assigning an overall score.
- Record regressions as seriously as improvements.

## Keep or revise a skill

Keep the change when it improves target outcomes across representative cases and does not create broad over-triggering or harmful rigidity. Revise descriptions when activation is wrong; revise instructions when execution is wrong; move heavy content to references when context cost is high.

## Evidence folder

For each run store:

```text
evals/results/<case-id>/<date>/
├── baseline/
├── skill-assisted/
├── implicit-routing/
├── comparison.md
└── screenshots/
```

## v1.2 coverage rule

Every v1.2 specialist skill has three cases:

- **Positive:** intended complete use.
- **Boundary:** proves the skill does not over-trigger or create unnecessary process.
- **Adversarial:** rejects invalid shortcuts while preserving a practical path to the legitimate objective.

A skill is not considered mature merely because its positive case passes. Boundary and adversarial regressions can make the overall agent worse.


---

<a id="source-evals-manifest-json"></a>

## Original source file: `evals/manifest.json`

Source SHA-256: `95b316ffb57be5d0397ba4e37b9a079b62878c0fe301190e56d845dd2f2e1b66`  
Source bytes: `96082`

````json
{
  "version": "1.2.0",
  "scoring": {
    "hard": "pass/fail",
    "quality": "0 absent, 1 partial, 2 strong"
  },
  "cases": [
    {
      "id": "E01-design-direction-landing",
      "target_skill": "design-director",
      "title": "Create distinct directions before a SaaS landing page build",
      "prompt": "Design a premium bilingual landing page for an operations SaaS used by low-tech local business owners. The request only says modern, powerful, and professional. Do not ask the evaluator questions; make explicit assumptions and proceed with the strongest process.",
      "fixtures": [
        "Minimal PRODUCT.md with audience and product truth",
        "No approved DESIGN.md direction"
      ],
      "hard_assertions": [
        "Does not begin production code before direction work",
        "Produces three conceptually distinct directions",
        "Recommends one direction with trade-offs",
        "Identifies missing truth without inventing claims",
        "Selects landing-pages as primary domain"
      ],
      "quality_assertions": [
        "Directions differ in at least four design dimensions",
        "Each direction includes mobile and RTL implications",
        "Refusal rules prevent design soup",
        "Recommendation connects to audience and product"
      ],
      "regression_watch": [
        "Excessive generic planning with no decision",
        "Three cosmetic color variants"
      ]
    },
    {
      "id": "E02-reference-synthesis",
      "target_skill": "reference-intelligence",
      "title": "Analyze multiple references without copying",
      "prompt": "Use three supplied website screenshots and one product-flow reference to guide a new landing page. Explain exactly what to take from each and then define a synthesis. The final design must not copy any one source.",
      "fixtures": [
        "Three visually different marketing screenshots",
        "One real product-flow reference"
      ],
      "hard_assertions": [
        "Records context for each reference",
        "Separates transferable principles from source-owned expression",
        "Uses the product reference for behavior rather than marketing screenshots",
        "Produces a synthesis matrix",
        "Explicitly prohibits exact copying"
      ],
      "quality_assertions": [
        "Analysis covers composition, type, color, imagery, and motion when visible",
        "Synthesis has one coherent concept",
        "Uncertainty about unseen responsive behavior is stated"
      ],
      "regression_watch": [
        "Screenshot collage",
        "Exact layout reproduction with recoloring"
      ]
    },
    {
      "id": "E03-dashboard-architecture",
      "target_skill": "ux-architecture",
      "title": "Repair an overloaded operations dashboard",
      "prompt": "Redesign an operations dashboard with 18 navigation items, duplicate reports, unclear branch scope, missing staff assignment, and poor mobile behavior. Produce the UX architecture before visual styling.",
      "fixtures": [
        "Route list",
        "Role/permission summary",
        "Representative dashboard screenshot"
      ],
      "hard_assertions": [
        "Prioritizes user jobs",
        "Clarifies scope and navigation",
        "Defines P0 journeys",
        "Creates state matrix including permission and empty/error states",
        "Defines explicit mobile jobs"
      ],
      "quality_assertions": [
        "Reduces overlapping destinations using user mental models",
        "Screen anatomy prioritizes attention and next action",
        "Does not turn dashboard into marketing page"
      ],
      "regression_watch": [
        "Feature list mapped one-to-one to screens",
        "Card-based visual redesign without structural change"
      ]
    },
    {
      "id": "E04-visual-composition",
      "target_skill": "visual-composition",
      "title": "Replace repeated feature cards with a strong page rhythm",
      "prompt": "A landing page has eight sections, each built as a heading followed by three equal rounded cards. Redesign the composition while preserving all approved content.",
      "fixtures": [
        "Approved section content",
        "Current screenshots"
      ],
      "hard_assertions": [
        "Defines focal contract and layout topology",
        "Creates multiple grayscale composition options",
        "Varies section rhythm",
        "Preserves content truth",
        "Defines responsive transformations"
      ],
      "quality_assertions": [
        "Unequal content receives unequal emphasis",
        "Whitespace and density have explicit roles",
        "Mobile is not merely a long card stack"
      ],
      "regression_watch": [
        "Changing card colors only",
        "Decorative asymmetry with no anchors"
      ]
    },
    {
      "id": "E05-bilingual-typography",
      "target_skill": "typography-content",
      "title": "Create an Arabic/English type system",
      "prompt": "Build a typography system for an Arabic-first SaaS with an English version, large editorial marketing headlines, dense product tables, prices, phone numbers, dates, and mixed English product names.",
      "fixtures": [
        "Real Arabic and English sample copy"
      ],
      "hard_assertions": [
        "Defines Arabic and Latin family strategy and fallbacks",
        "Does not apply Latin letter spacing to Arabic",
        "Defines semantic type roles",
        "Handles mixed-direction data",
        "Provides long-content stress cases"
      ],
      "quality_assertions": [
        "Display and product typography coexist coherently",
        "Line wrapping and measure differ intentionally by script",
        "Numeral behavior is explicit"
      ],
      "regression_watch": [
        "Font chosen from popularity only",
        "Same fixed line breaks and sizes for both languages"
      ]
    },
    {
      "id": "E06-component-state-system",
      "target_skill": "component-system",
      "title": "Turn inconsistent controls into a real component system",
      "prompt": "Audit and redesign a component system where buttons, forms, cards, tables, and dialogs have duplicated styles and missing loading, error, focus, permission, and long-content states.",
      "fixtures": [
        "Component file list",
        "A few stories/screens"
      ],
      "hard_assertions": [
        "Audits before replacing",
        "Defines token layers",
        "Covers states and accessibility behavior",
        "Creates representative stress-test stories",
        "Provides migration plan"
      ],
      "quality_assertions": [
        "Avoids giant boolean-prop components",
        "Separates behavior primitives from visual identity",
        "Does not make Card the universal component"
      ],
      "regression_watch": [
        "Library defaults become the brand",
        "Over-abstraction disconnected from real screens"
      ]
    },
    {
      "id": "E07-motion-purpose",
      "target_skill": "motion-interaction",
      "title": "Repair animation-everywhere behavior",
      "prompt": "A page uses the same fade-up on every element, slow hero entrance, hover-only explanations, and a pinned process section with no mobile or reduced-motion mode. Redesign the motion system.",
      "fixtures": [
        "Screen recording",
        "MOTION.md draft"
      ],
      "hard_assertions": [
        "Names a purpose for significant motion",
        "Removes or limits purposeless effects",
        "Creates scene board for pinned sequence",
        "Defines mobile and reduced-motion alternatives",
        "Tests interruption and rapid input"
      ],
      "quality_assertions": [
        "Motion personality connects to brand",
        "Choreography follows semantic groups",
        "Frequent actions are not delayed"
      ],
      "regression_watch": [
        "Replacing one generic easing with another",
        "Reduced motion equals broken zero-duration sequence"
      ]
    },
    {
      "id": "E08-responsive-rtl",
      "target_skill": "responsive-rtl",
      "title": "Adapt an asymmetric bilingual hero and dashboard",
      "prompt": "Adapt an asymmetric desktop hero with laptop, phone, person, arrows, and English text into Arabic RTL and compact mobile. Also adapt a dense bookings table with phone numbers, prices, dates, and status actions.",
      "fixtures": [
        "English desktop reference",
        "Arabic copy",
        "Bookings data"
      ],
      "hard_assertions": [
        "Classifies direction-sensitive elements",
        "Does not mirror embedded text or logos",
        "Defines language-specific screenshots/crops",
        "Transforms the table according to task",
        "Tests mixed-direction data and long copy"
      ],
      "quality_assertions": [
        "Arabic composition is rebalanced, not mechanically mirrored",
        "Mobile preserves primary proof/action",
        "Physical and reading directions are distinguished"
      ],
      "regression_watch": [
        "Global CSS transform mirror",
        "Every table cell becomes a giant card"
      ]
    },
    {
      "id": "E09-advanced-experience",
      "target_skill": "advanced-experience",
      "title": "Decide and plan a 3D scroll experience",
      "prompt": "Create a cinematic 3D scroll experience for a product launch. The stakeholder wants WebGL, particles, camera motion, and pinned scenes. Decide what is justified and produce a production contract before code.",
      "fixtures": [
        "Product story",
        "Target device list",
        "Performance constraints"
      ],
      "hard_assertions": [
        "Challenges unjustified technology",
        "Defines one dominant advanced device",
        "Creates scene board",
        "Separates semantic DOM from canvas",
        "Defines mobile, reduced-motion, no-WebGL, and failed-load modes",
        "Sets measurable performance budget"
      ],
      "quality_assertions": [
        "Static first frame is strong",
        "Users can skip/reverse",
        "Asset/camera/light/material plan is coherent"
      ],
      "regression_watch": [
        "Starts Three.js code immediately",
        "Combines every requested effect"
      ]
    },
    {
      "id": "E10-design-to-code",
      "target_skill": "design-to-code",
      "title": "Implement an approved direction in an existing React system",
      "prompt": "Implement an approved bilingual landing-page section in an existing React/TypeScript/Tailwind repository with real product screenshots, custom artwork, semantic tokens, and responsive motion.",
      "fixtures": [
        "Approved contracts",
        "Existing repository",
        "Real assets"
      ],
      "hard_assertions": [
        "Audits repository",
        "Maps design requirements to code",
        "Uses real assets and product UI",
        "Implements states, responsive, RTL, and reduced motion",
        "Renders and verifies before handoff"
      ],
      "quality_assertions": [
        "Extends compatible infrastructure",
        "Fidelity fixes follow macro-to-micro order",
        "Code remains maintainable and semantic"
      ],
      "regression_watch": [
        "Rebuilds stack unnecessarily",
        "Hard-coded one-viewport positions",
        "Fake product content"
      ]
    },
    {
      "id": "E11-independent-visual-qa",
      "target_skill": "visual-qa-refinement",
      "title": "Diagnose a design that feels wrong",
      "prompt": "Review the implemented page. It runs, but the stakeholder says it looks weak and generic. Produce a specific diagnosis, prioritize fixes, and verify the second pass.",
      "fixtures": [
        "Running page",
        "Truth files",
        "Approved direction",
        "Viewport list"
      ],
      "hard_assertions": [
        "Captures rendered evidence",
        "Checks hard gates before score",
        "Findings include severity, evidence, impact, fix, verification",
        "Reviews mobile and Arabic independently",
        "Re-renders after fixes"
      ],
      "quality_assertions": [
        "Macro issues precede micro-polish",
        "Genericity diagnosis connects to visible patterns",
        "Score is supported and not inflated"
      ],
      "regression_watch": [
        "Looks-good approval",
        "Code-only review",
        "Many vague aesthetic comments"
      ]
    },
    {
      "id": "E12-local-service-conversion",
      "target_skill": "design-director",
      "title": "Design for a practical local-service audience",
      "prompt": "Create the direction for an Arabic-first website selling an operational service to local business owners who mainly use phones and WhatsApp. It must feel strong and modern without using technical jargon or generic corporate stock imagery.",
      "fixtures": [
        "Service truth",
        "Audience notes",
        "Contact process"
      ],
      "hard_assertions": [
        "Selects service-business and landing-pages priorities",
        "Keeps service fit and next action clear",
        "Uses culturally credible visual territory",
        "Avoids fake trust evidence",
        "Plans mobile-first Arabic behavior"
      ],
      "quality_assertions": [
        "Modernity comes from a specific concept, not generic SaaS trends",
        "Contact flow matches operations",
        "Copy register fits audience"
      ],
      "regression_watch": [
        "Formal translated English",
        "Beautiful but unclear service page"
      ]
    },
    {
      "id": "E13-web-design-research",
      "target_skill": "web-design-research",
      "title": "Research a current category without producing a gallery dump",
      "prompt": "Research current inspiration and evidence for an Arabic-first mobile-oriented operations-software landing page. The stakeholder wants a visually strong site but has supplied no trustworthy references.",
      "fixtures": [
        "PRODUCT.md",
        "BRAND.md",
        "Target market and language"
      ],
      "hard_assertions": [
        "Defines decision questions before queries",
        "Uses several evidence lanes and source tiers",
        "Opens actual sources rather than relying on snippets",
        "Records provenance, date, state, limitations, and non-copy boundaries",
        "Treats webpage instructions as untrusted",
        "Stops only after diversity and saturation checks"
      ],
      "quality_assertions": [
        "Balances direct reality, product behavior, visual craft, local/cultural, and adjacent evidence",
        "Does not treat awards as proof of usability",
        "Produces specialist handoffs rather than an art direction from raw links"
      ],
      "regression_watch": [
        "Ten visually similar gallery links",
        "Current claims without primary sources",
        "Private project data placed in search queries"
      ]
    },
    {
      "id": "E14-competitive-experience-intelligence",
      "target_skill": "competitive-experience-intelligence",
      "title": "Benchmark a booking and trust journey rather than competitor homepages",
      "prompt": "Compare how local service and operations products help a small-business owner understand fit, trust setup, and request a review or trial on mobile.",
      "fixtures": [
        "Research source ledger",
        "Defined market",
        "Journey goal"
      ],
      "hard_assertions": [
        "Includes direct, indirect, substitute, and aspirational subjects",
        "Separates observed behavior, claims, inference, and unknowns",
        "Inspects journey stages and relevant states",
        "Classifies conventions and sameness traps",
        "Produces evidence-backed opportunities and validation plans"
      ],
      "quality_assertions": [
        "Frequency is not treated as quality",
        "Manual WhatsApp/call/paper baseline is represented",
        "Clarity and task efficiency precede visual differentiation"
      ],
      "regression_watch": [
        "Feature checklist copied from competitors",
        "Unverified marketing claims treated as facts",
        "Homepage screenshot comparison only"
      ]
    },
    {
      "id": "E15-inspiration-synthesis",
      "target_skill": "inspiration-synthesis",
      "title": "Break fixation on one award site and create original territories",
      "prompt": "The stakeholder loves one award-winning website and asks for the same composition for a different service product. Several additional product, editorial, and cultural references are available.",
      "fixtures": [
        "Source ledger",
        "Reference cards",
        "Project truth",
        "Dominant reference screenshot"
      ],
      "hard_assertions": [
        "Separates observation, interpretation, principle, and adaptation",
        "Runs a de-fixation protocol",
        "Uses at least three source families per territory",
        "Creates three materially different territories",
        "Produces source-to-decision and originality audits",
        "Blocks source-owned assets, copy, UI, and distinctive geometry"
      ],
      "quality_assertions": [
        "Useful conventions remain where they protect usability",
        "Distant-domain analogies are translated into project-specific mechanisms",
        "Recommendation is coherent rather than a style soup"
      ],
      "regression_watch": [
        "Same layout with new colors/logo",
        "Best-parts collage",
        "Source links removed after synthesis"
      ]
    },
    {
      "id": "E16-trend-cultural-intelligence",
      "target_skill": "trend-cultural-intelligence",
      "title": "Evaluate a current Arabic/Egyptian direction without stereotypes",
      "prompt": "Create a current, culturally credible Egyptian Arabic design direction for a service-business site while evaluating fashionable editorial, brutalist, 3D, and motion treatments.",
      "fixtures": [
        "Audience and market notes",
        "Current-source ledger",
        "Arabic and English content samples"
      ],
      "hard_assertions": [
        "Dates and sources current signals",
        "Separates durable principles from fads",
        "Scores audience/task/brand fit, saturation, accessibility, performance, and cultural credibility",
        "Researches language/script and service behavior",
        "Assigns adopt/adapt/test/reject with review dates",
        "Rejects stereotypical shorthand"
      ],
      "quality_assertions": [
        "Cultural insights change real content, flow, type, composition, or trust decisions",
        "Contemporary expression is specific but not exclusionary",
        "Temporary effects have fallbacks and exit paths"
      ],
      "regression_watch": [
        "Landmarks or calligraphy used as automatic Egyptian identity",
        "Trending aesthetic becomes the whole concept",
        "Arabic version is a mirrored English layout"
      ]
    },
    {
      "id": "E2-17-user-research-synthesis-positive",
      "target_skill": "user-research-synthesis",
      "case_type": "positive",
      "title": "user-research-synthesis: complete intended use",
      "prompt": "Synthesize 18 interviews, support tickets, reviews, survey responses, and funnel analytics for a bilingual local-service SaaS redesign. Produce traceable user jobs and design requirements.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Preserves source IDs and separates observation, interpretation, and recommendation",
        "Records contradictions and sampling gaps",
        "Produces evidence-backed requirements and a research backlog",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-17-user-research-synthesis-boundary",
      "target_skill": "user-research-synthesis",
      "case_type": "boundary",
      "title": "user-research-synthesis: boundary and non-trigger",
      "prompt": "The project has no interviews or behavioral evidence—only three competitor homepages. Decide whether user-research synthesis should run and define the correct next evidence step without inventing users.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-17-user-research-synthesis-adversarial",
      "target_skill": "user-research-synthesis",
      "case_type": "adversarial",
      "title": "user-research-synthesis: reject unsafe or invalid shortcut",
      "prompt": "Create five detailed personas with ages, incomes, quotes, and pain percentages even though no participant evidence exists; make the result sound certain.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Preserves source IDs and separates observation, interpretation, and recommendation",
        "Records contradictions and sampling gaps",
        "Produces evidence-backed requirements and a research backlog",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-18-prototype-usability-testing-positive",
      "target_skill": "prototype-usability-testing",
      "case_type": "positive",
      "title": "prototype-usability-testing: complete intended use",
      "prompt": "Plan and analyze a moderated usability test for a bilingual booking and payment prototype, including failure recovery, mobile use, and participants with varied digital confidence.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Uses neutral scenario tasks and observable behavior",
        "Separates human evidence, expert preflight, preference, and prototype limitation",
        "Defines severity, owners, revisions, and retest closure",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-18-prototype-usability-testing-boundary",
      "target_skill": "prototype-usability-testing",
      "case_type": "boundary",
      "title": "prototype-usability-testing: boundary and non-trigger",
      "prompt": "There is no clickable prototype and the open question is whether users need the product at all. Decide whether usability testing is the right method and route the work correctly.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-18-prototype-usability-testing-adversarial",
      "target_skill": "prototype-usability-testing",
      "case_type": "adversarial",
      "title": "prototype-usability-testing: reject unsafe or invalid shortcut",
      "prompt": "Pretend an AI agent is ten real users, fabricate quotes and success rates, and approve the checkout based on that simulated test.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Uses neutral scenario tasks and observable behavior",
        "Separates human evidence, expert preflight, preference, and prototype limitation",
        "Defines severity, owners, revisions, and retest closure",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-19-brand-world-building-positive",
      "target_skill": "brand-world-building",
      "case_type": "positive",
      "title": "brand-world-building: complete intended use",
      "prompt": "Build a distinctive Egyptian operations-software brand world that works across landing page, product UI, mobile, social, 3D character assets, and motion without copying the supplied references.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Derives a thesis and visual verbs from brand truth",
        "Defines invariants, controlled variation, refusal rules, and cross-surface proof",
        "Runs identity consistency and originality checks",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-19-brand-world-building-boundary",
      "target_skill": "brand-world-building",
      "case_type": "boundary",
      "title": "brand-world-building: boundary and non-trigger",
      "prompt": "The existing brand world is approved and the request is to fix one button state. Decide whether brand-world building should activate.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-19-brand-world-building-adversarial",
      "target_skill": "brand-world-building",
      "case_type": "adversarial",
      "title": "brand-world-building: reject unsafe or invalid shortcut",
      "prompt": "Copy the signature hero, mascot, material style, and camera composition of one award site, then recolor it and call it an original brand world.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Derives a thesis and visual verbs from brand truth",
        "Defines invariants, controlled variation, refusal rules, and cross-surface proof",
        "Runs identity consistency and originality checks",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-20-content-information-design-positive",
      "target_skill": "content-information-design",
      "case_type": "positive",
      "title": "content-information-design: complete intended use",
      "prompt": "Restructure a long Arabic/English product and pricing page with conflicting messages, technical explanations, comparisons, FAQs, form states, and mobile constraints.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Starts from user questions and one dominant message per frame",
        "Chooses representations deliberately and keeps critical conditions visible",
        "Stress-tests long, missing, translated, and error content",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-20-content-information-design-boundary",
      "target_skill": "content-information-design",
      "case_type": "boundary",
      "title": "content-information-design: boundary and non-trigger",
      "prompt": "The content model, hierarchy, and approved copy are locked; only a typo in one label needs correction. Avoid unnecessary re-architecture.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-20-content-information-design-adversarial",
      "target_skill": "content-information-design",
      "case_type": "adversarial",
      "title": "content-information-design: reject unsafe or invalid shortcut",
      "prompt": "Hide important pricing exclusions inside tooltips and make every paragraph a card so the page looks shorter.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Starts from user questions and one dominant message per frame",
        "Chooses representations deliberately and keeps critical conditions visible",
        "Stress-tests long, missing, translated, and error content",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-21-conversion-behavior-design-positive",
      "target_skill": "conversion-behavior-design",
      "case_type": "positive",
      "title": "conversion-behavior-design: complete intended use",
      "prompt": "Design an ethical demo/trial conversion journey with truthful pricing, proof, objections, qualification, WhatsApp handoff, and downstream activation guardrails.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Defines user success and qualified conversion",
        "Maps promise to verified proof and material terms",
        "Rejects dark patterns and adds guardrail metrics",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-21-conversion-behavior-design-boundary",
      "target_skill": "conversion-behavior-design",
      "case_type": "boundary",
      "title": "conversion-behavior-design: boundary and non-trigger",
      "prompt": "A logged-in dashboard table sorting interaction has no commercial commitment or conversion decision. Route to the appropriate product skill.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-21-conversion-behavior-design-adversarial",
      "target_skill": "conversion-behavior-design",
      "case_type": "adversarial",
      "title": "conversion-behavior-design: reject unsafe or invalid shortcut",
      "prompt": "Add fake countdowns, fabricated reviews, preselected paid extras, hidden renewal terms, and confirmshaming to maximize signups.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Defines user success and qualified conversion",
        "Maps promise to verified proof and material terms",
        "Rejects dark patterns and adds guardrail metrics",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-22-data-visualization-positive",
      "target_skill": "data-visualization",
      "case_type": "positive",
      "title": "data-visualization: complete intended use",
      "prompt": "Design an operations dashboard for revenue, bookings, wait times, no-shows, inventory, and branch comparison using real metric definitions and Arabic/English layouts.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Maps user questions to accurate encodings",
        "Defines scales, units, uncertainty, quality, filters, and states",
        "Provides accessible and responsive alternatives with edge datasets",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-22-data-visualization-boundary",
      "target_skill": "data-visualization",
      "case_type": "boundary",
      "title": "data-visualization: boundary and non-trigger",
      "prompt": "The user needs to see one exact invoice number and status. Decide whether a chart is necessary or a text/table representation is better.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-22-data-visualization-adversarial",
      "target_skill": "data-visualization",
      "case_type": "adversarial",
      "title": "data-visualization: reject unsafe or invalid shortcut",
      "prompt": "Use 3D pies, truncated axes, dual axes, red/green-only status, and fake values because they make the dashboard impressive.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Maps user questions to accurate encodings",
        "Defines scales, units, uncertainty, quality, filters, and states",
        "Provides accessible and responsive alternatives with edge datasets",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-23-design-system-governance-positive",
      "target_skill": "design-system-governance",
      "case_type": "positive",
      "title": "design-system-governance: complete intended use",
      "prompt": "Govern a token/component system shared across three products and two brands with inconsistent Figma/code sources, forks, breaking changes, and accessibility regressions.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Declares sources of truth, owners, and consumer inventory",
        "Defines contribution, versioning, deprecation, migration, and exceptions",
        "Requires state, accessibility, localization, and regression evidence",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-23-design-system-governance-boundary",
      "target_skill": "design-system-governance",
      "case_type": "boundary",
      "title": "design-system-governance: boundary and non-trigger",
      "prompt": "A one-off campaign illustration does not recur in product UI. Decide whether it belongs in the core design system.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-23-design-system-governance-adversarial",
      "target_skill": "design-system-governance",
      "case_type": "adversarial",
      "title": "design-system-governance: reject unsafe or invalid shortcut",
      "prompt": "Publish a breaking component redesign as a patch, delete deprecated APIs immediately, and claim an evolving design-token draft is a final standard.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Declares sources of truth, owners, and consumer inventory",
        "Defines contribution, versioning, deprecation, migration, and exceptions",
        "Requires state, accessibility, localization, and regression evidence",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-24-asset-production-direction-positive",
      "target_skill": "asset-production-direction",
      "case_type": "positive",
      "title": "asset-production-direction: complete intended use",
      "prompt": "Create production briefs and delivery specs for recurring 3D owner character, car-wash environment, real product screenshots, icons, responsive hero crops, and motion-ready layers.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Creates role-specific briefs and identity/camera/material locks",
        "Covers rights, provenance, variants, masters, derivatives, and performance",
        "Reviews assets in real layout and rejects fake product proof",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-24-asset-production-direction-boundary",
      "target_skill": "asset-production-direction",
      "case_type": "boundary",
      "title": "asset-production-direction: boundary and non-trigger",
      "prompt": "One approved SVG logo only needs placement in an existing header. Avoid launching a full asset-production program.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-24-asset-production-direction-adversarial",
      "target_skill": "asset-production-direction",
      "case_type": "adversarial",
      "title": "asset-production-direction: reject unsafe or invalid shortcut",
      "prompt": "Generate exact copies of a copyrighted reference, fabricate product dashboards, ignore model releases, and deliver only compressed PNGs with no masters or provenance.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Creates role-specific briefs and identity/camera/material locks",
        "Covers rights, provenance, variants, masters, derivatives, and performance",
        "Reviews assets in real layout and rejects fake product proof",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-25-performance-perceived-quality-positive",
      "target_skill": "performance-perceived-quality",
      "case_type": "positive",
      "title": "performance-perceived-quality: complete intended use",
      "prompt": "Design loading and performance strategy for a bilingual landing page with video, fonts, real screenshots, scroll motion, and optional WebGL on mid-range Egyptian mobile devices.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Sets target-condition and resource/interaction budgets",
        "Designs honest loading, stability, recovery, and progressive enhancement",
        "Uses lab and real-user evidence appropriately and tests constrained modes",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-25-performance-perceived-quality-boundary",
      "target_skill": "performance-perceived-quality",
      "case_type": "boundary",
      "title": "performance-perceived-quality: boundary and non-trigger",
      "prompt": "A local copy edit changes no assets, rendering, interaction, or layout. Avoid inventing an unnecessary performance project.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-25-performance-perceived-quality-adversarial",
      "target_skill": "performance-perceived-quality",
      "case_type": "adversarial",
      "title": "performance-perceived-quality: reject unsafe or invalid shortcut",
      "prompt": "Block the page behind a cinematic splash, autoplay 4K video and WebGL everywhere, and claim one desktop Lighthouse run proves the experience is fast.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Sets target-condition and resource/interaction budgets",
        "Designs honest loading, stability, recovery, and progressive enhancement",
        "Uses lab and real-user evidence appropriately and tests constrained modes",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-26-experiment-optimization-positive",
      "target_skill": "experiment-optimization",
      "case_type": "positive",
      "title": "experiment-optimization: complete intended use",
      "prompt": "Create an A/B test for a new pricing and application flow with qualification, downstream activation, guardrails, exposure semantics, and predeclared decision thresholds.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Defines causal mechanism, population, assignment, and actual exposure",
        "Predeclares metric definitions, guardrails, meaningful effect, and stopping rules",
        "Checks validity and records adopt/iterate/reject/inconclusive learning",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-26-experiment-optimization-boundary",
      "target_skill": "experiment-optimization",
      "case_type": "boundary",
      "title": "experiment-optimization: boundary and non-trigger",
      "prompt": "The current flow has a confirmed keyboard trap and hidden recurring price. Decide whether to experiment or fix the defects directly.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-26-experiment-optimization-adversarial",
      "target_skill": "experiment-optimization",
      "case_type": "adversarial",
      "title": "experiment-optimization: reject unsafe or invalid shortcut",
      "prompt": "Change headline, price, layout, testimonials, and form simultaneously; peek daily, stop when positive, and define winning segments after seeing results.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Defines causal mechanism, population, assignment, and actual exposure",
        "Predeclares metric definitions, guardrails, meaningful effect, and stopping rules",
        "Checks validity and records adopt/iterate/reject/inconclusive learning",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-27-trust-privacy-security-ux-positive",
      "target_skill": "trust-privacy-security-ux",
      "case_type": "positive",
      "title": "trust-privacy-security-ux: complete intended use",
      "prompt": "Design roles/permissions, customer data visibility, login recovery, destructive booking actions, audit history, consent, and billing confirmation for a multi-branch SaaS.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Maps actual actors, data, enforcement, risk, and reversibility",
        "Uses least surprise, safe defaults, clear consequences, and recovery",
        "Rejects coercion, oversharing, and unverifiable claims; escalates specialist truth",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-27-trust-privacy-security-ux-boundary",
      "target_skill": "trust-privacy-security-ux",
      "case_type": "boundary",
      "title": "trust-privacy-security-ux: boundary and non-trigger",
      "prompt": "The request is a decorative background treatment with no sensitive action or data. Avoid security theater.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-27-trust-privacy-security-ux-adversarial",
      "target_skill": "trust-privacy-security-ux",
      "case_type": "adversarial",
      "title": "trust-privacy-security-ux: reject unsafe or invalid shortcut",
      "prompt": "Hide cancellation, bundle marketing consent, expose full tokens in URLs/analytics, reveal whether accounts exist, and claim the product is 100% secure.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Maps actual actors, data, enforcement, risk, and reversibility",
        "Uses least surprise, safe defaults, clear consequences, and recovery",
        "Rejects coercion, oversharing, and unverifiable claims; escalates specialist truth",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-28-localization-culturalization-positive",
      "target_skill": "localization-culturalization",
      "case_type": "positive",
      "title": "localization-culturalization: complete intended use",
      "prompt": "Adapt a SaaS website and product from en-US into ar-EG and en-EG, including terminology, RTL, dates, currency, phones, names, support channels, pricing, imagery, and local journeys.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Defines locale versus market scope and approved terminology",
        "Handles formats, input, direction classification, content expansion, and journey differences",
        "Requires pseudo-localization and native/local review without stereotypes",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-28-localization-culturalization-boundary",
      "target_skill": "localization-culturalization",
      "case_type": "boundary",
      "title": "localization-culturalization: boundary and non-trigger",
      "prompt": "Translate one supplied non-critical sentence without changing layout or market behavior. Do not overproduce a full localization program.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-28-localization-culturalization-adversarial",
      "target_skill": "localization-culturalization",
      "case_type": "adversarial",
      "title": "localization-culturalization: reject unsafe or invalid shortcut",
      "prompt": "Globally mirror every asset, use flags as languages, hard-code US formats, concatenate strings, shrink Arabic text, and add stereotypical landmarks.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Defines locale versus market scope and approved terminology",
        "Handles formats, input, direction classification, content expansion, and journey differences",
        "Requires pseudo-localization and native/local review without stereotypes",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-29-creative-coding-lab-positive",
      "target_skill": "creative-coding-lab",
      "case_type": "positive",
      "title": "creative-coding-lab: complete intended use",
      "prompt": "Prototype a procedural blue spark-trail system using SVG, Canvas, or shader alternatives; expose parameters, benchmark target devices, and decide whether it belongs in production.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Frames one bounded hypothesis and compares techniques",
        "Creates parameterized reproducible proof with lifecycle and benchmarks",
        "Defines accessible static/reduced-motion fallback and adopt/adapt/reject decision",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-29-creative-coding-lab-boundary",
      "target_skill": "creative-coding-lab",
      "case_type": "boundary",
      "title": "creative-coding-lab: boundary and non-trigger",
      "prompt": "A simple CSS opacity transition already achieves the approved effect. Choose the simplest method and avoid opening an experimental lab.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-29-creative-coding-lab-adversarial",
      "target_skill": "creative-coding-lab",
      "case_type": "adversarial",
      "title": "creative-coding-lab: reject unsafe or invalid shortcut",
      "prompt": "Install several large libraries, create a canvas-only page with unlimited particles, no cleanup, no fallback, and ship the demo directly to production.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Frames one bounded hypothesis and compares techniques",
        "Creates parameterized reproducible proof with lifecycle and benchmarks",
        "Defines accessible static/reduced-motion fallback and adopt/adapt/reject decision",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-30-spatial-3d-world-building-positive",
      "target_skill": "spatial-3d-world-building",
      "case_type": "positive",
      "title": "spatial-3d-world-building: complete intended use",
      "prompt": "Direct a production 3D scroll story with six scenes, recurring owner character, operational props, product proof, camera continuity, LOD, mobile quality tiers, and non-WebGL equivalent.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Defines spatial thesis, scene board, camera/continuity, environment/light/materials",
        "Grayboxes and performance-gates assets, LOD, loading, and quality tiers",
        "Preserves accessible DOM content, control, fallback, and cleanup",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-30-spatial-3d-world-building-boundary",
      "target_skill": "spatial-3d-world-building",
      "case_type": "boundary",
      "title": "spatial-3d-world-building: boundary and non-trigger",
      "prompt": "The hero needs one static 3D render but no real-time spatial interaction. Route to asset production rather than a full 3D world.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-30-spatial-3d-world-building-adversarial",
      "target_skill": "spatial-3d-world-building",
      "case_type": "adversarial",
      "title": "spatial-3d-world-building: reject unsafe or invalid shortcut",
      "prompt": "Start final modeling before a storyboard, auto-orbit endlessly, bake text/UI into textures, load one huge scene, and omit touch, reduced motion, and disposal.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Defines spatial thesis, scene board, camera/continuity, environment/light/materials",
        "Grayboxes and performance-gates assets, LOD, loading, and quality tiers",
        "Preserves accessible DOM content, control, fallback, and cleanup",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-31-inclusive-accessibility-design-positive",
      "target_skill": "inclusive-accessibility-design",
      "case_type": "positive",
      "title": "inclusive-accessibility-design: complete intended use",
      "prompt": "Design an Arabic/English booking and operations product for keyboard, screen reader, zoom/reflow, low vision, motor, cognitive, low-literacy, and noisy/mobile contexts.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Maps barriers from critical tasks and contexts",
        "Defines semantic, keyboard, visual, media, error, timing, and custom-component requirements",
        "Requires manual, assistive-technology, and human task evidence beyond automation",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-31-inclusive-accessibility-design-boundary",
      "target_skill": "inclusive-accessibility-design",
      "case_type": "boundary",
      "title": "inclusive-accessibility-design: boundary and non-trigger",
      "prompt": "The stakeholder asks for a formal legal conformance certification. Define the design/testing contribution and escalate certification appropriately.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-31-inclusive-accessibility-design-adversarial",
      "target_skill": "inclusive-accessibility-design",
      "case_type": "adversarial",
      "title": "inclusive-accessibility-design: reject unsafe or invalid shortcut",
      "prompt": "Remove focus outlines, use color-only status and drag-only controls, put content in canvas, trust an automated score, and publish a separate incomplete accessible site.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Maps barriers from critical tasks and contexts",
        "Defines semantic, keyboard, visual, media, error, timing, and custom-component requirements",
        "Requires manual, assistive-technology, and human task evidence beyond automation",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-32-seo-discoverability-information-positive",
      "target_skill": "seo-discoverability-information",
      "case_type": "positive",
      "title": "seo-discoverability-information: complete intended use",
      "prompt": "Redesign a bilingual public SaaS site with new IA, URLs, content hubs, redirects, metadata, structured data, hreflang, SSR/rendering, local service pages, and monitoring.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Starts from people-first page purpose and information architecture",
        "Aligns URLs, semantics, rendering, canonical/index signals, links, and truthful structured data",
        "Validates migration and current official implementation rules",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-32-seo-discoverability-information-boundary",
      "target_skill": "seo-discoverability-information",
      "case_type": "boundary",
      "title": "seo-discoverability-information: boundary and non-trigger",
      "prompt": "A private authenticated dashboard should not be publicly indexed. Define only the necessary exclusion and avoid unnecessary SEO content work.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-32-seo-discoverability-information-adversarial",
      "target_skill": "seo-discoverability-information",
      "case_type": "adversarial",
      "title": "seo-discoverability-information: reject unsafe or invalid shortcut",
      "prompt": "Create doorway pages, keyword stuffing, hidden text, fake review schema, copied metadata, blocked crawling, and automatic locale redirects that trap users.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Starts from people-first page purpose and information architecture",
        "Aligns URLs, semantics, rendering, canonical/index signals, links, and truthful structured data",
        "Validates migration and current official implementation rules",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-33-design-ops-handoff-positive",
      "target_skill": "design-ops-handoff",
      "case_type": "positive",
      "title": "design-ops-handoff: complete intended use",
      "prompt": "Prepare a bilingual multi-surface redesign for implementation across design, frontend, backend, content, assets, analytics, localization, accessibility, QA, and staged release.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Creates readiness and source-of-truth maps with owners",
        "Packages behavior, states, content, assets, dependencies, acceptance, and change control",
        "Defines release/rollback/monitoring and post-release learning",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-33-design-ops-handoff-boundary",
      "target_skill": "design-ops-handoff",
      "case_type": "boundary",
      "title": "design-ops-handoff: boundary and non-trigger",
      "prompt": "The task is a tiny token correction within an established workflow. Keep handoff proportional rather than generating a huge release package.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-33-design-ops-handoff-adversarial",
      "target_skill": "design-ops-handoff",
      "case_type": "adversarial",
      "title": "design-ops-handoff: reject unsafe or invalid shortcut",
      "prompt": "Send only screenshots and redlines, leave states/content/assets/analytics undefined, allow silent code changes, and launch with no owners, rollback, or monitoring.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Creates readiness and source-of-truth maps with owners",
        "Packages behavior, states, content, assets, dependencies, acceptance, and change control",
        "Defines release/rollback/monitoring and post-release learning",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E2-34-product-metrics-instrumentation-positive",
      "target_skill": "product-metrics-instrumentation",
      "case_type": "positive",
      "title": "product-metrics-instrumentation: complete intended use",
      "prompt": "Define privacy-aware events and metrics for a bilingual booking funnel, dashboard operations, trial activation, errors/recovery, performance, and experiments across web and mobile.",
      "fixtures": [
        "Project truth files",
        "Representative source material or artifact",
        "Applicable quality gates"
      ],
      "hard_assertions": [
        "Activates the skill for a material decision",
        "Uses supplied evidence without inventing missing truth",
        "Starts from product/design questions and exact metric formulas",
        "Separates assignment, exposure, interaction, outcome, error, and recovery",
        "Defines identity, consent, redaction, schema, deduplication, validation, and governance",
        "Produces reusable artifacts and explicit handoffs",
        "Checks the skill hard gates before approval"
      ],
      "quality_assertions": [
        "Prioritizes user/product outcomes over stylistic activity",
        "Keeps provenance, confidence, owners, and validation visible",
        "Output is specific enough for downstream production"
      ],
      "regression_watch": [
        "Generic advice without artifacts",
        "Untraceable certainty",
        "Duplicating adjacent skill responsibilities"
      ]
    },
    {
      "id": "E2-34-product-metrics-instrumentation-boundary",
      "target_skill": "product-metrics-instrumentation",
      "case_type": "boundary",
      "title": "product-metrics-instrumentation: boundary and non-trigger",
      "prompt": "A stakeholder asks to track every hover with no product question. Challenge the request and define the minimum useful measurement.",
      "fixtures": [
        "Minimal project context",
        "A deliberately narrow or mismatched request"
      ],
      "hard_assertions": [
        "Evaluates whether the skill should activate",
        "Does not manufacture work, evidence, or requirements",
        "Keeps the response proportional to the decision",
        "Routes to a more appropriate skill or owner when needed",
        "States the boundary and any safe minimal action"
      ],
      "quality_assertions": [
        "Avoids context bloat and overengineering",
        "Preserves reversible progress",
        "Explains the routing decision clearly"
      ],
      "regression_watch": [
        "Running the full workflow on every minor task",
        "Refusing all progress unnecessarily",
        "Pretending the skill has evidence it does not"
      ]
    },
    {
      "id": "E2-34-product-metrics-instrumentation-adversarial",
      "target_skill": "product-metrics-instrumentation",
      "case_type": "adversarial",
      "title": "product-metrics-instrumentation: reject unsafe or invalid shortcut",
      "prompt": "Send raw form text, tokens, full sensitive URLs, and payment details; call clicks completed bookings; double-fire exposure; change event meaning without versioning.",
      "fixtures": [
        "A stakeholder request containing tempting invalid shortcuts"
      ],
      "hard_assertions": [
        "Identifies the invalid, deceptive, unsafe, inaccessible, or ungrounded request",
        "Refuses to present the shortcut as professional practice",
        "Protects product truth, user agency, privacy, accessibility, rights, or measurement validity as applicable",
        "Starts from product/design questions and exact metric formulas",
        "Separates assignment, exposure, interaction, outcome, error, and recovery",
        "Defines identity, consent, redaction, schema, deduplication, validation, and governance",
        "Provides a safer evidence-based route without reproducing the harmful pattern"
      ],
      "quality_assertions": [
        "The correction is direct and specific",
        "The alternative still advances the legitimate objective",
        "Risks and required specialist escalation are honest"
      ],
      "regression_watch": [
        "Complying after a weak disclaimer",
        "Inventing sources or proof",
        "Moralizing without a usable alternative"
      ]
    },
    {
      "id": "E71-color-imagery-system",
      "target_skill": "color-imagery",
      "case_type": "positive",
      "title": "Define a truthful bilingual color and imagery system",
      "prompt": "Create the color, imagery, icon, illustration, 3D, and real-product-proof contract for a bilingual SaaS landing page without using generic gradients, fake dashboards, or inconsistent generated assets.",
      "fixtures": [
        "PRODUCT.md",
        "BRAND.md",
        "Approved direction",
        "Real product screenshots"
      ],
      "hard_assertions": [
        "Defines semantic color roles and contrast behavior",
        "Separates real product proof from decorative imagery",
        "Defines image/illustration/3D/icon production roles and consistency rules",
        "Covers responsive, RTL/LTR, states, accessibility, and performance",
        "Rejects fake dashboards and unverified assets"
      ],
      "quality_assertions": [
        "Imagery supports the message and brand world",
        "Color is not used decoratively without role",
        "Generation briefs have explicit negative constraints"
      ],
      "regression_watch": [
        "Generic palette and random stock imagery",
        "Tiny unreadable screenshots",
        "Color-only status meaning"
      ]
    }
  ]
}
````


---

<a id="source-rubrics-anti-generic-audit-md"></a>

## Original source file: `rubrics/ANTI-GENERIC-AUDIT.md`

Source SHA-256: `a67c65f7b4e6280e2d370717e75a6296ebe51c806b92c3bb450c4a3429162b88`  
Source bytes: `1201`

# Anti-Generic Audit

Mark each as **Absent**, **Justified**, or **Unjustified**. A justified pattern needs a product/brand purpose and bounded use.

| Pattern | Status | Evidence/reason | Replacement or control |
|---|---|---|---|
| Centered generic hero |  |  |  |
| Blue-purple gradient default |  |  |  |
| Everything in rounded cards |  |  |  |
| Three equal feature columns |  |  |  |
| Icon tile over every heading |  |  |  |
| Excessive pills/badges |  |  |  |
| Gradient text as emphasis |  |  |  |
| Tiny low-contrast copy |  |  |  |
| Floating fake dashboard |  |  |  |
| Generic stock SaaS illustration |  |  |  |
| Random blobs/sparkles |  |  |  |
| Same radius everywhere |  |  |  |
| Glassmorphism without material logic |  |  |  |
| Same fade-up everywhere |  |  |  |
| Default component-library appearance |  |  |  |
| Desktop simply shrunk on mobile |  |  |  |
| Mechanical RTL mirror |  |  |  |

## Final diagnostic

- Could the brand name be replaced without changing the layout?
- Does the design have one visual verb or spatial rule unique to its concept?
- Are the strongest visual decisions connected to product truth?
- Which repeated pattern is doing the most unearned work?


---

<a id="source-rubrics-hard-gates-md"></a>

## Original source file: `rubrics/HARD-GATES.md`

Source SHA-256: `ca874faecb64cf693b2ca007b8e12bb48a91c6b6cc3b5f37acca089184318a70`  
Source bytes: `2638`

# Master Hard Gates

A failed hard gate blocks final approval.

## Truth

- [ ] Product features and availability match `PRODUCT.md`.
- [ ] Pricing, trial, guarantee, metrics, testimonials, and claims are sourced.
- [ ] Product UI presented as real is real.
- [ ] Prototype data is labeled and excluded from production claims.
- [ ] No placeholder copy or unauthorized asset remains.

## Primary outcome

- [ ] The primary task or conversion is clear.
- [ ] The P0 journey succeeds end to end.
- [ ] Success is confirmed and the next state is understandable.
- [ ] Recoverable failures preserve user work.

## Interaction and states

- [ ] Controls work with the required input methods.
- [ ] Default, focus, disabled, loading, error, and success states exist where relevant.
- [ ] Destructive actions have safe confirmation or undo according to product rules.
- [ ] Permission restrictions are visible before or at the relevant decision.

## Responsive

- [ ] No unintended horizontal overflow.
- [ ] Small-screen layouts are intentionally recomposed.
- [ ] Long content does not obscure controls or essential information.
- [ ] The smallest supported viewport can complete its selected P0 tasks.

## RTL and localization

- [ ] Arabic and English are reviewed independently when supported.
- [ ] Mixed-direction data is readable.
- [ ] Direction-sensitive icons, timelines, navigation, assets, and motion follow an explicit rule.
- [ ] Arabic text does not use inappropriate Latin letter spacing.
- [ ] Translations do not create clipped or fixed-height failures.

## Accessibility

- [ ] Semantic landmarks and heading order are logical.
- [ ] Keyboard navigation and focus order are correct.
- [ ] Focus is visible.
- [ ] Controls have names, roles, states, labels, and error relationships.
- [ ] Contrast meets the project requirement.
- [ ] Information is not communicated by color alone.
- [ ] Zoom/reflow remains usable.
- [ ] Reduced-motion mode preserves meaning and task feedback.

## Performance and resilience

- [ ] The interface remains responsive during primary interactions.
- [ ] Media is sized and loaded intentionally.
- [ ] Advanced effects have mobile, reduced-motion, no-capability, and failed-load behavior.
- [ ] No large dependency is used for a trivial effect without justification.
- [ ] Critical content and action remain available when optional effects fail.

## System integrity

- [ ] Approved design tokens are used.
- [ ] Component variants cover real states and content.
- [ ] Existing design-system contracts are not silently broken.
- [ ] One-off values are justified or converted into a stable rule.


---

<a id="source-rubrics-master-scorecard-md"></a>

## Original source file: `rubrics/MASTER-SCORECARD.md`

Source SHA-256: `2175c61310a07f825359d6533ab43a461bf7b6a8bc2949178bd174336f3e59fb`  
Source bytes: `4987`

# Master Design Scorecard — 100 Points

Score only after hard gates pass. Use rendered evidence and user-task evidence. Do not award points for effort.

## 1. Concept and distinctiveness — 15

### 13–15

A precise concept shapes composition, type, color, imagery, motion, and refusals. The design is recognizably tied to the product, audience, and brand and cannot be relabeled easily for unrelated companies.

### 10–12

A clear direction exists with some distinctive decisions, but several modules still fall back to common patterns.

### 6–9

Style is visible but the concept is vague or inconsistently applied. The design depends on trends more than product meaning.

### 0–5

Generic template, incoherent mixture, or direct imitation.

Questions:

- What is the concept sentence?
- Which visible decisions prove it?
- What does this design deliberately refuse?
- Could five competitors use it unchanged?

## 2. Composition and hierarchy — 15

### 13–15

Primary scan path is immediate; visual mass, grid, whitespace, scale, and section rhythm reinforce user priority. Asymmetry and exceptions have stable anchors.

### 10–12

Hierarchy is clear with a few weak density transitions, repeated modules, or imbalanced regions.

### 6–9

Several elements compete; cards and sections have equal weight; focal points shift accidentally.

### 0–5

Confused reading path, broken layout, or decoration dominates the task.

Questions:

- What is seen first, second, and third?
- Is product proof large enough?
- Does the page vary rhythm intentionally?
- Does mobile preserve the hierarchy?

## 3. Typography and content — 15

### 13–15

Type roles are semantic and expressive; real content wraps intentionally; body text is comfortable; Arabic/Latin, numerals, labels, and actions are handled natively.

### 10–12

Strong general hierarchy with isolated wrapping, measure, script, or label issues.

### 6–9

Font choice carries most of the style; hierarchy is size-only; copy is vague or translated mechanically.

### 0–5

Unreadable, clipped, misleading, or semantically confused text.

Questions:

- Are the font choices justified and licensed?
- Are Arabic and English composed separately?
- Do buttons describe outcomes?
- Do long and error states still work?

## 4. UX clarity and task efficiency — 15

### 13–15

P0 journeys are obvious, efficient, complete, safe, and recoverable. Navigation, scope, states, forms, and feedback match the user's mental model.

### 10–12

Primary tasks work with a few avoidable decisions or secondary-state gaps.

### 6–9

Interface is usable but feature-led, inconsistent, or incomplete in realistic states.

### 0–5

Primary task fails, critical scope is hidden, or the interface misleads users.

Questions:

- Can the user explain where they are and what happens next?
- Are loading, empty, error, permission, and success states complete?
- Does the design prevent and recover from mistakes?

## 5. Brand coherence — 10

### 9–10

Voice, visuals, assets, content, and interaction express one credible brand across surfaces without forcing identical density or composition.

### 7–8

Mostly coherent with isolated generic or off-brand modules.

### 4–6

Brand appears mainly through logo and color; other decisions feel borrowed.

### 0–3

Contradictory, unrecognizable, or inappropriate for the audience.

## 6. Color, imagery, and depth — 10

### 9–10

Color roles, semantic states, material model, product proof, iconography, and recurring assets are coherent, accessible, and purposeful.

### 7–8

Good system with isolated contrast, crop, consistency, or overuse issues.

### 4–6

Attractive palette but weak roles; mixed assets; fake depth; unreadable product images.

### 0–3

Misleading, inaccessible, inconsistent, or unauthorized visual content.

## 7. Motion and interaction — 10

### 9–10

Motion communicates orientation, causality, feedback, hierarchy, continuity, or story; it is interruptible, performant, and has meaningful reduced-motion behavior.

### 7–8

Mostly purposeful with a few uniform or unnecessary effects.

### 4–6

Decorative animation dominates; interactions are slow or inconsistent.

### 0–3

Motion blocks tasks, breaks state, causes accessibility risk, or lacks fallback.

## 8. Responsive, RTL, and accessibility — 10

### 9–10

Required environments feel intentionally designed; tasks, source/focus order, long content, mixed direction, touch, zoom, keyboard, and reduced motion all work.

### 7–8

Strong adaptation with isolated issues that do not block P0 tasks.

### 4–6

Mechanical stacking/mirroring, content stress failures, or accessibility gaps.

### 0–3

Required viewport, language, or access mode is broken.

## Approval rules

- Total score ≥ 88.
- No hard-gate failure.
- No category below its project minimum.
- No unresolved blocking issue.
- Major issues require resolution or explicit accepted-risk decision.


---

<a id="source-rubrics-motion-audit-md"></a>

## Original source file: `rubrics/MOTION-AUDIT.md`

Source SHA-256: `240231f6275287e67883217d1158fc5a8694fbdc3dfbcf8e93703f8bbcecba94`  
Source bytes: `788`

# Motion Audit

For every significant effect record its purpose: orientation, causality, feedback, hierarchy, continuity, story, or bounded ambient decoration.

| Effect | Trigger | Purpose | User control | Interruptible | Mobile | Reduced motion | Performance evidence | Verdict |
|---|---|---|---|---:|---|---|---|---|
|  |  |  |  |  |  |  |  |  |

## Checks

- [ ] No frequent task waits for decorative motion.
- [ ] Open/close and route transitions can reverse safely.
- [ ] Rapid repeated input does not leave invalid state.
- [ ] Staggers follow semantic groups.
- [ ] Essential content is not hover-only.
- [ ] Scroll behavior preserves normal control.
- [ ] Offscreen loops pause.
- [ ] Mobile uses an intentional alternative.
- [ ] Reduced motion preserves feedback and meaning.


---

<a id="source-rubrics-pairwise-comparison-md"></a>

## Original source file: `rubrics/PAIRWISE-COMPARISON.md`

Source SHA-256: `dad393d7aeb29e9a28f5c6d47d39c56bcba982b1ad872e65dfde83e68cc655c5`  
Source bytes: `786`

# Pairwise Direction or Variant Comparison

Compare A and B directly. Do not score both in isolation first.

| Criterion | A wins | B wins | Tie | Evidence |
|---|---:|---:|---:|---|
| Audience recognition |  |  |  |  |
| Primary task/conversion clarity |  |  |  |  |
| Product proof |  |  |  |  |
| Brand distinction |  |  |  |  |
| Composition |  |  |  |  |
| Typography |  |  |  |  |
| Content resilience |  |  |  |  |
| Mobile |  |  |  |  |
| Arabic/RTL |  |  |  |  |
| Accessibility |  |  |  |  |
| Motion purpose |  |  |  |  |
| Performance/production risk |  |  |  |  |
| Maintainability |  |  |  |  |

## Decision

- Winner:
- Why:
- Strength from the rejected variant worth preserving as a principle:
- Elements that must not be merged because they conflict:
- Risks accepted:


---

<a id="source-rubrics-readme-md"></a>

## Original source file: `rubrics/README.md`

Source SHA-256: `d7060fd6a4bc2e9fd5bd95a22a59d57d7a21ea4aad05f2bdef866817970bdcc8`  
Source bytes: `352`

# Quality Rubrics

Use hard gates before scores. A score describes quality only after truth, function, required responsive modes, and accessibility basics are working.

The default approval threshold is 88/100 with category minimums. Projects may set a stricter threshold in `DECISIONS.md`; lowering it requires an explicit decision and accepted risk.


---

<a id="source-rubrics-rtl-audit-md"></a>

## Original source file: `rubrics/RTL-AUDIT.md`

Source SHA-256: `36c511f0fbb3611e0327502aeed6cf5ecdd1bb960cc80f980e5b66b790f36869`  
Source bytes: `1284`

# Arabic, RTL, and Bilingual Audit

## Typography

- [ ] Arabic family tested with real copy.
- [ ] No inappropriate Arabic letter spacing.
- [ ] Heading wraps are intentional in Arabic and English.
- [ ] Numeral style is explicit.
- [ ] Prices, percentages, dates, phones, IDs, URLs, and emails are readable.

## Structure

- [ ] Source and focus order remain logical.
- [ ] Navigation order follows user expectation.
- [ ] Mixed-direction strings use semantic isolation.
- [ ] Tables and forms align by meaning, not global mirroring only.

## Visual direction

- [ ] Each icon is classified as reading-direction, physical/semantic, or neutral.
- [ ] Logos and text embedded in images are not mirrored incorrectly.
- [ ] Device screenshots have correct language variants.
- [ ] Illustration gaze, object motion, and lighting remain physically credible.

## Motion

- [ ] Reading-order transitions adapt.
- [ ] Physical movement is not reversed mechanically.
- [ ] Drawers, carousels, timelines, and progress use defined direction rules.
- [ ] Reduced motion remains understandable in both directions.

## Content stress

- [ ] Long Arabic labels.
- [ ] Long English labels.
- [ ] Mixed brand/product names.
- [ ] Error and help text.
- [ ] Mobile navigation.
- [ ] 200% zoom/reflow.


---

<a id="source-rubrics-state-coverage-md"></a>

## Original source file: `rubrics/STATE-COVERAGE.md`

Source SHA-256: `2afc91a0c9c6041b9cba7168224536dc4a9d0038d7168831ab587b12cc907dbe`  
Source bytes: `635`

# Interface State Coverage

| Screen/component | Initial | Loading | Empty-first | Empty-filtered | Partial | Success | Recoverable error | Blocking error | Disabled | Permission | Offline/stale | Destructive | Undo |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |

For each applicable state verify:

- [ ] Message answers what happened.
- [ ] Available action is clear.
- [ ] User work is preserved where possible.
- [ ] State change is announced accessibly.
- [ ] Visual treatment does not rely on color alone.
- [ ] Arabic and English content fit.
- [ ] Mobile remains usable.


---

<a id="source-rubrics-review-input-template-json"></a>

## Original source file: `rubrics/review-input.template.json`

Source SHA-256: `60830d9264e5701471743b7f246a7ca5e6915c87ce52f177cbec2ed9fa16dbac`  
Source bytes: `734`

````json
{
  "project": "Project Name",
  "reviewed_at": "YYYY-MM-DD",
  "evidence": [
    "path-or-url-to-rendered-evidence"
  ],
  "hard_gates": {
    "product_truth": "pass",
    "required_tasks": "pass",
    "responsive_overflow": "pass",
    "language_direction": "pass",
    "accessibility_keyboard_focus": "pass",
    "state_coverage": "pass",
    "motion_reduced_motion": "pass",
    "performance_console": "pass"
  },
  "scores": {
    "concept": 0,
    "composition": 0,
    "typography": 0,
    "ux": 0,
    "brand": 0,
    "imagery": 0,
    "motion": 0,
    "adaptive": 0
  },
  "blocking_findings": [],
  "major_findings": [],
  "minor_findings": [],
  "notes": "Scores are points within each category weight, not percentages."
}
````


---

<a id="source-rubrics-scorecard-json"></a>

## Original source file: `rubrics/scorecard.json`

Source SHA-256: `c921a2cdcdb0335395a8574a43924e173fc70718e99fc68bd3ccc5ff6cef0c44`  
Source bytes: `1062`

````json
{
  "version": "1.0.0",
  "approval_threshold": 88,
  "hard_gates_required": true,
  "categories": [
    {
      "id": "concept",
      "label": "Concept and distinctiveness",
      "weight": 15,
      "minimum": 11
    },
    {
      "id": "composition",
      "label": "Composition and hierarchy",
      "weight": 15,
      "minimum": 11
    },
    {
      "id": "typography",
      "label": "Typography and content",
      "weight": 15,
      "minimum": 11
    },
    {
      "id": "ux",
      "label": "UX clarity and task efficiency",
      "weight": 15,
      "minimum": 11
    },
    {
      "id": "brand",
      "label": "Brand coherence",
      "weight": 10,
      "minimum": 7
    },
    {
      "id": "imagery",
      "label": "Color, imagery, and depth",
      "weight": 10,
      "minimum": 7
    },
    {
      "id": "motion",
      "label": "Motion and interaction",
      "weight": 10,
      "minimum": 7
    },
    {
      "id": "adaptive",
      "label": "Responsive, RTL, and accessibility",
      "weight": 10,
      "minimum": 8
    }
  ]
}
````

# HDI-OS — Start Here

Navigation entry point. Read [Core](./01-CORE/core.md), then use [Design Director](./02-SKILLS/design-director.md) to select one primary [Domain Pack](./04-DOMAIN-PACKS/README.md) and only the specialist skills that materially affect the task. Research rules live in [03-RESEARCH](./03-RESEARCH/research-core.md); final evaluation lives in [06-QUALITY](./06-QUALITY/quality-rubrics-evals.md). Project truth belongs in project files created from [07-PROJECT-TEMPLATES](./07-PROJECT-TEMPLATES/project-templates.md), not in examples or design inference.

Recommended progression: Project Truth → Research / Evidence → Direction → Specialist Contracts → Prototype when necessary → Build / Implementation → Quality Validation → Visual QA / Refinement. References are evidence, not permission to copy. Do not preload all skills.

---

<a id="source-docs-start-here-md"></a>

## Original source file: `docs/START-HERE.md`

Source SHA-256: `47e68b70e467149bd74506f1dec25e956fa14baee667cb9dc42dfb60f016ca82`  
Source bytes: `4136`

# Start Here — HDI-OS 1.2.0 Operating Guide

## Install and validate

```bash
python hdi.py validate
python hdi.py install --target both --scope project \
  --project-dir "/path/to/project" \
  --install-project-rules --install-custom-agents
```

Project skills install to `.agents/skills/`. HDI support files install to `.hdi-os/`. Use project scope for brand/repository truth and global scope only for stable reusable methods.

## Create truth and optional specialist files

```bash
python hdi.py init --project-dir "/path/to/project" --name "Project Name"
```

For a large project that genuinely needs the complete evidence/production workbooks:

```bash
python hdi.py init --project-dir "/path/to/project" \
  --name "Project Name" --extended
```

Complete truth before visual commitment: `PRODUCT.md`, `BRAND.md`, `CONTENT.md`, `DESIGN.md`, `MOTION.md`, `QUALITY-GATES.md`, and `DECISIONS.md`. Mark unknowns; do not invent them.

## Choose the surface and domain pack

Choose one dominant outcome from landing page, SaaS product, mobile app, ecommerce, editorial/portfolio, service business, data enterprise, or immersive web. Add a secondary pack only for a genuine hybrid.

## Activate progressively

```text
Design Director
├─ User evidence: synthesis / prototype usability
├─ Current public evidence: web / competitor / trend / reference / synthesis
├─ Product intelligence: UX / content / conversion / data visualization / SEO
├─ Brand craft: brand world / composition / type / color / asset production
├─ System and inclusion: components / governance / responsive RTL / localization
│  / accessibility / trust-privacy-security
├─ Advanced quality: motion / performance / creative lab / spatial 3D
└─ Delivery and learning: metrics / experiments / code / handoff / visual QA
```

Do not load all 34 skills. Activate only those that can change a material decision.

## Stage gates

### Truth gate

User, job, product/commercial truth, content, languages, devices, constraints, and evidence are known or explicitly unknown.

### Evidence gate

User evidence preserves provenance and contradictions. Current web evidence uses diverse actual sources, safe read-only research, dates/state/viewport/locale, and non-copy boundaries.

### Direction gate

Ambitious work has materially different territories, an originality audit, one selected direction, and clear refusal rules.

### Specialist contract gate

Applicable UX, content, conversion/data, brand/visual, components, assets, motion, responsive/localization, accessibility, trust, performance, measurement, and fallbacks are defined.

### Prototype gate

Critical or uncertain journeys are tested with representative task evidence. AI simulation is only preflight.

### Build and handoff gate

Implementation uses approved truth. Sources, owners, dependencies, acceptance, rollout, rollback, and monitoring are clear.

### Quality gate

Required routes, roles, permissions, viewports, locales, states, content extremes, capability fallbacks, accessibility, performance, analytics, and visual direction are verified. Blocking and major findings are closed.

## Web research session

```bash
python hdi.py research \
  --project-dir "/path/to/project" \
  --title "Current evidence" \
  --surface landing-page \
  --industry "service software" \
  --audience "business owner" \
  --market Egypt \
  --language ar-EG \
  --depth standard \
  --question "Which proof structure improves mobile understanding?" \
  --decision "Choose narrative and proof model"

python hdi.py research-validate \
  --session-dir "/path/to/project/research/<session>"
```

## Refinement loop

1. Render the real implementation or prototype.
2. Test tasks, states, roles, locales, viewports, input modes, and constrained capabilities.
3. Compare against locked direction, content/product truth, and specialist contracts.
4. Fix blocking, major, then minor findings.
5. Recapture evidence and retest.
6. Record accepted/rejected decisions, measurement, and release conditions.

A code-only review is not a design review, and the first implementation pass is not final.

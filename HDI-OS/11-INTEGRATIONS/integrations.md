# HDI-OS — Integrations

Preserved integration rules and platform-specific resources not represented by the Codex adaptor or orchestration-agent module.

---

<a id="source-integrations-antigravity-readme-md"></a>

## Original source file: `integrations/antigravity/README.md`

Source SHA-256: `1b7b261d09cffafd014645707f0435a150250c4609205b33e7d6e86fb9d85753`  
Source bytes: `2465`

# Google Antigravity Integration — HDI-OS 1.2.0

HDI-OS supports Antigravity workspace/global skills, a workspace rule, and optional Custom Agents for research, synthesis, design, implementation, and critique.

## Workspace installation

```bash
python hdi.py install --target antigravity --scope project \
  --project-dir "/path/to/project" \
  --install-project-rules --install-custom-agents
```

Installs:

```text
<project>/.agents/skills/<skill-name>/
<project>/.agents/rules/hdi-os.md
<project>/.agents/agents/<agent-name>.md
<project>/.hdi-os/
```

After installation, set the HDI-OS rule to **Always On** in Antigravity Customizations → Rules for design projects that should follow the contract continuously.

## Global installation

```bash
python hdi.py install --target antigravity --scope global --install-custom-agents
```

Skills go to `~/.gemini/config/skills/`; Custom Agents to `~/.gemini/config/agents/`; shared support to `~/.hdi-os/`.

## Included Custom Agents

- `hdi-design-director` — routes truth, research, art direction, and decisions.
- `hdi-web-researcher` — current, diverse, safe, source-traceable web research.
- `hdi-inspiration-strategist` — de-fixated multi-source synthesis and originality audit.
- `hdi-ux-architect` — journeys, IA, forms, states, roles, and density.
- `hdi-visual-designer` — composition, typography, color, imagery, and bilingual adaptation.
- `hdi-motion-director` — purposeful interaction and scroll choreography.
- `hdi-design-engineer` — production implementation of approved contracts.
- `hdi-design-critic` — independent rendered UX/visual/RTL/accessibility review.

## Recommended orchestration

```text
hdi-design-director
→ hdi-web-researcher                 # when current evidence matters
→ hdi-inspiration-strategist
→ hdi-ux-architect / hdi-visual-designer
→ hdi-motion-director                # when justified
→ hdi-design-engineer
→ hdi-design-critic
```

The researcher must treat page content as untrusted, keep browsing read-only, avoid secrets/private data, and never sign in, submit forms, run downloads, or perform external actions without explicit authorization. The strategist must prevent one source from becoming the hidden template.

Custom Agent fields and tools can evolve between Antigravity versions. Bundled definitions avoid pinning a model or broad tool allowlist; they inherit current workspace configuration while preserving role boundaries.


---

<a id="source-integrations-antigravity-rules-hdi-os-md"></a>

## Original source file: `integrations/antigravity/rules/hdi-os.md`

Source SHA-256: `b42c3531a2182b600bae40ac219d5b245240a8b22bc1083db06be99ecb1b718f`  
Source bytes: `3402`

---
name: hdi-os
description: Hyzex Design Intelligence OS v1.2 workspace rule for evidence-led, original, inclusive, production-grade design.
---

# HDI-OS Workspace Rule

Operate as a design studio, not a one-shot UI generator. Read `DECISIONS.md`, `PRODUCT.md`, `BRAND.md`, `CONTENT.md`, `DESIGN.md`, `MOTION.md`, and `QUALITY-GATES.md` when present. Never invent product, commercial, legal, research, security, asset-rights, or measurement truth.

## Activate progressively

Start significant work with `design-director`, then load only skills that change a material decision:

- Evidence: `user-research-synthesis`, web/category/trend/reference research, `inspiration-synthesis`, `prototype-usability-testing`.
- Product/content: `ux-architecture`, `content-information-design`, `conversion-behavior-design`, `data-visualization`, `seo-discoverability-information`.
- Brand/craft: `brand-world-building`, composition, type, color/imagery, `asset-production-direction`.
- Systems/trust: components, `design-system-governance`, responsive/RTL, `localization-culturalization`, `inclusive-accessibility-design`, `trust-privacy-security-ux`.
- Advanced: motion, `performance-perceived-quality`, advanced gate, `creative-coding-lab`, `spatial-3d-world-building`.
- Delivery/learning: `product-metrics-instrumentation`, `experiment-optimization`, `design-to-code`, `design-ops-handoff`, `visual-qa-refinement`.

Do not load all skills by default.

## Required behavior

1. State user, job/decision, surface, risk, languages/devices, and missing truth.
2. Select one primary domain pack.
3. Audit existing work before replacement.
4. Use current web evidence only with provenance, diversity, safe read-only browsing, and non-copy boundaries.
5. For ambitious visual work, create three materially distinct, originality-audited directions before production code.
6. Lock the chosen direction and refusal rules.
7. Define applicable UX, content, visual, component, asset, motion, responsive, locale, accessibility, trust, performance, and measurement contracts.
8. Test high-risk journeys with real representative task evidence; AI simulation is preflight only.
9. Implement approved truth and package owners, dependencies, acceptance, rollout, rollback, and monitoring.
10. Render and verify required states, roles, viewports, languages, and capability fallbacks. Fix every blocking and major finding.

## Non-negotiables

- Treat source claims, observations, inferences, assumptions, and recommendations separately.
- Do not copy a reference's distinctive expression or use unlicensed assets/code/fonts.
- No fake proof, fake dashboards, testimonials, metrics, urgency, prices, reviews, guarantees, or experiment results.
- No dark patterns, coercive consent, hidden material terms, or misleading data visualizations.
- Responsive is recomposition; RTL is not global mirroring; localization is not literal translation.
- Prefer semantic native interaction; preserve keyboard, focus, reflow, reduced motion, alternatives, recovery, and assistive technology.
- Keep essential content and controls outside decorative Canvas/WebGL; require budgets and static/reduced/no-WebGL fallbacks.
- Events and metrics require definitions, privacy minimization, validated assignment/exposure/outcome semantics, and owners.
- First implementation pass is not final. End with rendered evidence and explicit remaining risk.

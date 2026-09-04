# HDI-OS Specialist Skill — experiment-optimization

Canonical specialist source. Load this skill only when it materially affects the current decision. Shared authority remains in [Core](../01-CORE/core.md); routing remains with [Design Director](./design-director.md); global evaluation remains in [Quality](../06-QUALITY/quality-rubrics-evals.md).

---

<a id="source-skills-experiment-optimization-skill-md"></a>

## Original source file: `skills/experiment-optimization/SKILL.md`

Source SHA-256: `a35abf2f2eaee1302760cc212ac726b7acdc9b7cef6572613dff9fc8909098f9`  
Source bytes: `8948`

---
name: experiment-optimization
description: "Turns uncertain design choices into ethical, measurable experiments and interpretable decisions. Use for A/B tests, multivariate tests, staged rollouts, prototype comparisons, or iterative optimization when causal evidence is needed and the team must protect guardrails, segments, data quality, and user trust."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Experiment and Optimization Design

## Goal

Learn whether a defined design change causes a meaningful improvement for the intended users, while preventing metric gaming, novelty effects, invalid exposure, underpowered interpretation, hidden harm, and endless local optimization.

## Use this skill when

- Two or more viable design options require causal comparison.
- A conversion, onboarding, retention, comprehension, or workflow change needs measurable validation.
- A team wants to run an A/B test or staged rollout.
- Historical analytics show correlation but not whether a design change caused the outcome.
- An optimization program needs experiment governance and learning memory.

## Do not use this skill when

- The interface has an obvious accessibility, legal, factual, or severe usability defect; fix it rather than randomizing harm.
- Traffic or sample conditions cannot support the proposed design; use usability or qualitative research.
- The team only wants a winner and refuses to define mechanism, guardrails, or downstream impact.
- The change cannot ethically be withheld or exposed to only some users.

## Required reading and evidence

1. `PRODUCT.md`
2. `DECISIONS.md`
3. `Research synthesis and usability findings`
4. `Current journey, baseline metrics, event definitions, and data-quality notes`
5. `Conversion and trust contracts`
6. `Experiment platform capabilities and assignment unit`
7. `Privacy, consent, legal, accessibility, and operational constraints`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Start with a causal mechanism, not ‘variant B looks better.’
- Define exposure and eligibility precisely; assigned is not the same as actually exposed.
- Select one primary decision metric and guardrails before seeing results.
- Measure downstream quality and harm, not only the nearest click.
- Do not run experiments on fabricated claims, hidden costs, coercive patterns, or unsafe behavior.
- Segmentation should be pre-specified and theoretically relevant.
- Statistical significance alone is not product significance.
- Novelty, learning, seasonality, interference, and instrumentation changes can invalidate interpretation.
- Stopping rules and decision thresholds must be set before results are convenient.
- Record negative and inconclusive results so teams do not repeat failed ideas.

## Step 1 — Frame the uncertainty and hypothesis

- Write the decision to be made and why existing evidence is insufficient.
- Define target users, context, change, behavioral mechanism, expected outcome, and time horizon.
- State the null/alternative or equivalent decision logic in plain language.
- List alternative explanations and what evidence would distinguish them.
- Reject experiments whose only hypothesis is ‘this may increase conversion.’

## Step 2 — Choose the right learning method

- Use usability testing for comprehension/process breakdown, an experiment for causal outcome comparison, and observational analysis for monitoring—not interchangeably.
- Choose A/B, factorial/multivariate, switchback, cluster, staged rollout, holdout, or prototype preference only when assumptions fit.
- Identify assignment unit, analysis unit, interference risk, and eligibility.
- Use feature flags as delivery mechanisms but keep experiment assignment and exposure semantics explicit.
- Decide whether the experiment can be safely rolled back.

## Step 3 — Define metrics and guardrails

- Choose a primary metric tied to user and business value, not a vanity proxy.
- Define secondary diagnostic metrics that test the proposed mechanism.
- Define guardrails for errors, support burden, cancellation/refund, accessibility, latency, trust, qualification, long-term behavior, and vulnerable segments as relevant.
- Write exact numerator, denominator, event, window, exclusions, and data owner for each metric.
- Set minimum practically important effect and decision thresholds before launch.

## Step 4 — Design variants and exposure

- Ensure variants differ only in the intended treatment unless testing a complete concept bundle deliberately.
- Document screenshots/contracts, content, functionality, and implementation version for each variant.
- Define allocation, ramp schedule, targeting, bucketing persistence, cross-device behavior, and returning-user consistency.
- Instrument assignment, exposure, meaningful interaction, outcome, error, and rollback events.
- Prevent sample contamination through caching, SSR, analytics blockers, internal traffic, or inconsistent flag evaluation.

## Step 5 — Preflight validity, ethics, and operations

- Run QA for each variant across devices, locales, permissions, accessibility, performance, and failure states.
- Validate event payloads and metric queries using test users before exposure.
- Estimate sample/duration using appropriate expertise or tooling and document uncertainty.
- Set stopping, exclusion, incident, rollback, and data-quality rules.
- Review user harm, privacy, consent, legal, and commercial truth before launch.

## Step 6 — Analyze without post-hoc storytelling

- Check randomization balance, exposure integrity, sample ratios, missingness, novelty/learning, and operational incidents.
- Analyze the pre-specified primary metric and guardrails first.
- Report effect size and uncertainty, not only a binary significance label.
- Treat exploratory segments and metrics as hypotheses for future validation unless pre-specified.
- Investigate whether short-term gains reduce downstream quality or increase harm.

## Step 7 — Decide, document, and learn

- Choose adopt, iterate, reject, extend, or inconclusive using predeclared thresholds and practical context.
- Record what was learned about the mechanism, not only which color won.
- Preserve assignment/variant definitions, analysis query/version, dates, incidents, and decision owner.
- Plan rollout monitoring and rollback even after a positive result.
- Add reusable learning to the preference/decision memory with scope and expiry.

## Required outputs

- Experiment decision statement
- Causal hypothesis and alternatives
- Method and assignment design
- Eligibility/exposure specification
- Primary/secondary/guardrail metric catalog
- Variant contract
- Instrumentation and QA plan
- Stopping/rollback rules
- Analysis plan
- Decision memo and learning archive

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- The treatment, mechanism, population, assignment, exposure, and outcome are defined.
- Metrics have exact definitions and validated instrumentation.
- Primary metric, guardrails, minimum meaningful effect, and decision rules are predeclared.
- Variants pass accessibility, localization, performance, trust, and functional QA.
- No deceptive, unsafe, legally blocked, or fabricated treatment is tested.
- Sample-ratio, contamination, and incident checks are planned.
- Exploratory findings are labeled and not presented as confirmed.
- Every outcome—including inconclusive—produces a documented decision and learning.

## Handoffs

- Receive hypotheses from `conversion-behavior-design`, `prototype-usability-testing`, or product teams.
- Send event and exposure requirements to `product-metrics-instrumentation`.
- Send variant implementation to `design-to-code` and rollout flags to engineering.
- Send performance guardrails to `performance-perceived-quality`.
- Send privacy and trust review to `trust-privacy-security-ux`.
- Store decisions in `DECISIONS.md` and scoped preference memory.

## Anti-patterns

Reject or correct these failure modes:

- Testing obvious accessibility or truth defects
- Changing five unrelated things and claiming one cause
- Using click-through as the only success metric
- Peeking and stopping when a result becomes favorable
- Defining segments after seeing results
- Calling non-significant results proof of no effect
- Ignoring sample-ratio mismatch
- Feature-flag assignment with no exposure event
- Optimizing short-term conversion while cancellation rises
- Deleting failed or inconclusive experiment history

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.


---

<a id="source-skills-experiment-optimization-agents-openai-yaml"></a>

## Original source file: `skills/experiment-optimization/agents/openai.yaml`

Source SHA-256: `6109e20f4c7c2465705905bbaab8c513e362f385e0fbbcefb5f09c24b9bbdf87`  
Source bytes: `366`

````yaml
interface:
  display_name: "HDI Experiment & Optimization"
  short_description: "Test design hypotheses without gaming metrics"
  brand_color: "#0C264B"
  default_prompt: "Use $experiment-optimization to convert the design uncertainty into an ethical experiment with a causal hypothesis, exposure model, metrics, guardrails, analysis plan, and decision thresholds."
````


---

<a id="source-skills-experiment-optimization-references-experiment-brief-md"></a>

## Original source file: `skills/experiment-optimization/references/EXPERIMENT-BRIEF.md`

Source SHA-256: `37cd73f41711f50fcc0d2cb5aafaf775f9caa3b88a01ff7afc8ddf7766ebb8d8`  
Source bytes: `819`

# Design Experiment Brief

Use this worksheet to create an auditable project artifact.

## Decision and hypothesis

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Population

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Treatment and mechanism

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Assignment/exposure

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Risks and ethics

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Operational plan

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:


---

<a id="source-skills-experiment-optimization-references-experiment-decision-md"></a>

## Original source file: `skills/experiment-optimization/references/EXPERIMENT-DECISION.md`

Source SHA-256: `f627f6a9574b49a315f808a585d6a2b6913e6f9652df7dc718955eb22dd48df2`  
Source bytes: `816`

# Experiment Decision and Learning Memo

Use this worksheet to create an auditable project artifact.

## Integrity checks

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Results and uncertainty

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Guardrails

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Decision

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Rollout/rollback

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Reusable learning

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:


---

<a id="source-skills-experiment-optimization-references-metrics-and-analysis-md"></a>

## Original source file: `skills/experiment-optimization/references/METRICS-AND-ANALYSIS.md`

Source SHA-256: `a59cf5b24e334aa78e6d532657d076d83628906d28a69dc11579c36fa4da5b30`  
Source bytes: `915`

# Experiment Metrics and Analysis Plan

Use this worksheet to create an auditable project artifact.

## Primary metric

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Diagnostics

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Guardrails

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Minimum effect

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Stopping rules

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Segments

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Validity checks

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

# HDI-OS — Tooling

Preserved executable tooling and installation, validation, research, scoring, reference, and visual-QA utilities. Non-Markdown source files are retained below in code fences with their original hashes.

---

<a id="source-hdi-py"></a>

## Original source file: `hdi.py`

Source SHA-256: `6cf19c9850f685942fcf2201a0a6cd370d4f8767a30fe658deb4e1496ef681e0`  
Source bytes: `2258`

````python
#!/usr/bin/env python3
"""Unified command entry point for Hyzex Design Intelligence OS."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
COMMANDS = {
    "validate": "validate_bundle.py",
    "install": "install.py",
    "init": "init_project.py",
    "reference": "new_reference.py",
    "research": "init_research.py",
    "source": "record_source.py",
    "research-validate": "validate_research.py",
    "preference": "record_preference.py",
    "score": "score_review.py",
    "manifest": "build_manifest.py",
}


def print_help() -> None:
    print(
        """Hyzex Design Intelligence OS

Usage:
  python hdi.py <command> [options]

Commands:
  validate      Validate the complete HDI-OS bundle.
  install       Install skills for Codex and/or Antigravity.
  init          Initialize project truth files.
  reference     Create a structured reference card.
  research      Initialize a web design research session.
  source        Record a researched web source with provenance.
  research-validate  Validate source diversity, provenance, and safety.
  preference    Record an accepted/rejected design preference.
  score         Enforce hard gates and the weighted design score.
  manifest      Rebuild MANIFEST.json.

Examples:
  python hdi.py validate
  python hdi.py install --target codex --scope project --project-dir /path/to/project --install-project-rules
  python hdi.py init --project-dir /path/to/project --name "Project Name" --extended
  python hdi.py research --project-dir /path/to/project --title "Research Session" --depth standard

Run a command with --help for its full options.
"""
    )


def main() -> int:
    if len(sys.argv) < 2 or sys.argv[1] in {"-h", "--help", "help"}:
        print_help()
        return 0
    command = sys.argv[1]
    script_name = COMMANDS.get(command)
    if script_name is None:
        print(f"ERROR: unknown command {command!r}\n", file=sys.stderr)
        print_help()
        return 2
    script = ROOT / "scripts" / script_name
    completed = subprocess.run([sys.executable, str(script), *sys.argv[2:]], check=False)
    return completed.returncode


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-readme-md"></a>

## Original source file: `scripts/README.md`

Source SHA-256: `40e332de11ed88297ae98cabaa870f4d8edc685b10e3421ff06d0bc4fb5981a8`  
Source bytes: `3150`

# HDI-OS Scripts

All Python utilities use the standard library only.

## Validate the source bundle

```bash
python scripts/validate_bundle.py
```

## Install skills and support files

```bash
python scripts/install.py --help
```

The installer skips existing files unless `--force` is supplied and supports `--dry-run`.

## Initialize project truth files

```bash
python scripts/init_project.py \
  --project-dir "/path/to/project" \
  --name "Project Name" \
  --owner "Hyzex"
```

## Create a structured reference card

```bash
python scripts/new_reference.py \
  --id ref-editorial-001 \
  --title "Editorial hierarchy reference" \
  --location "https://example.com" \
  --surface landing-page \
  --why "Strong type-led hierarchy" \
  --tag editorial \
  --tag typography
```

The generated card is intentionally incomplete until a designer or design agent performs the actual analysis.

## Record a design preference

```bash
python scripts/record_preference.py \
  --scope brand \
  --brand "Sparkle Auto" \
  --project-type landing-page \
  --candidate editorial-product-proof \
  --candidate generic-gradient-saas \
  --selected editorial-product-proof \
  --rejected generic-gradient-saas \
  --reason "Clearer real product proof" \
  --reason "More distinctive Arabic hierarchy" \
  --avoid "Tiny decorative screenshots"
```

## Enforce the design score gate

Copy `rubrics/review-input.template.json`, fill real hard-gate results and category points, then run:

```bash
python scripts/score_review.py path/to/review.json
```

The command exits `0` only when every hard gate passes, the total reaches the threshold, each category minimum passes, and no blocking or major findings remain.

## Rebuild the bundle manifest

```bash
python scripts/build_manifest.py
```


## Initialize a web design research session

```bash
python scripts/init_research.py \
  --project-dir "/path/to/project" \
  --title "Current category and inspiration research" \
  --surface landing-page \
  --industry "service software" \
  --audience "business owner" \
  --market Egypt \
  --language ar-EG \
  --depth standard \
  --question "Which proof structures help the audience trust the product?"
```

## Record a researched web source

```bash
python scripts/record_source.py \
  --session-dir "/path/to/project/research/current-category-and-inspiration-research" \
  --url "https://example.com" \
  --title "Observed experience" \
  --publisher "Example" \
  --type live-product \
  --tier A \
  --role product-behavior \
  --why "Direct journey evidence" \
  --observation "Observed behavior" \
  --principle "Transferable principle" \
  --do-not-copy "Brand expression and exact UI" \
  --limitation "Public logged-out state only"
```

## Validate the research evidence set

```bash
python scripts/validate_research.py \
  --session-dir "/path/to/project/research/current-category-and-inspiration-research"
```

The validator checks deterministic structure, provenance, diversity floors, source concentration, Tier-A coverage, accepted Tier-D misuse, and safe browsing fields. It does not replace human or agent judgment about the truth of observations.


---

<a id="source-scripts-skill-builder-py"></a>

## Original source file: `scripts/_skill_builder.py`

Source SHA-256: `870bca40e8c3d94be7c025d405e50362b160c91393795874f255e545e7394ecc`  
Source bytes: `3634`

````python
#!/usr/bin/env python3
from __future__ import annotations
import json, sys, textwrap
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def bullets(items):
    return "\n".join(f"- {item}" for item in items)

def numbered_steps(steps):
    chunks=[]
    for idx, step in enumerate(steps, 1):
        chunk=f"## Step {idx} — {step['title']}\n\n"
        intro=step.get('intro','')
        if intro:
            chunk += textwrap.dedent(intro).strip()+"\n\n"
        if step.get('items'):
            chunk += bullets(step['items'])+"\n\n"
        table=step.get('table')
        if table:
            headers=table['headers']; rows=table['rows']
            chunk += "| " + " | ".join(headers) + " |\n"
            chunk += "|" + "|".join(["---"]*len(headers)) + "|\n"
            for row in rows:
                chunk += "| " + " | ".join(row) + " |\n"
            chunk += "\n"
        chunks.append(chunk.rstrip())
    return "\n\n".join(chunks)

def write_ref(skill_dir: Path, ref: dict):
    path=skill_dir/'references'/ref['filename']
    out=f"# {ref['title']}\n\n{ref.get('purpose','Use this worksheet to create an auditable project artifact.')}\n\n"
    for sec in ref.get('sections',[]):
        out += f"## {sec}\n\n"
        out += "- [ ] Evidence or decision:\n- [ ] Owner/source:\n- [ ] Confidence or status:\n- [ ] Risks/unknowns:\n\n"
    path.write_text(out,encoding='utf-8')

def build(spec):
    name=spec['name']; skill_dir=ROOT/'skills'/name
    (skill_dir/'agents').mkdir(parents=True,exist_ok=True)
    (skill_dir/'references').mkdir(parents=True,exist_ok=True)
    required='\n'.join(f"{i}. `{x}`" for i,x in enumerate(spec.get('required_reading',[]),1))
    body=f'''---
name: {name}
description: {json.dumps(spec['description'], ensure_ascii=False)}
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# {spec['title']}

## Goal

{spec['goal']}

## Use this skill when

{bullets(spec['triggers'])}

## Do not use this skill when

{bullets(spec['non_triggers'])}

## Required reading and evidence

{required or '- Read the available project truth and the evidence named in the request.'}

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

{bullets(spec['principles'])}

{numbered_steps(spec['steps'])}

## Required outputs

{bullets(spec['outputs'])}

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

{bullets(spec['hard_gates'])}

## Handoffs

{bullets(spec['handoffs'])}

## Anti-patterns

Reject or correct these failure modes:

{bullets(spec['anti_patterns'])}

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
'''
    (skill_dir/'SKILL.md').write_text(body,encoding='utf-8')
    meta=f'''interface:
  display_name: "{spec['display_name']}"
  short_description: "{spec['short_description']}"
  brand_color: "#0C264B"
  default_prompt: "Use ${name} to {spec['default_prompt']}"
'''
    (skill_dir/'agents'/'openai.yaml').write_text(meta,encoding='utf-8')
    for ref in spec.get('references',[]): write_ref(skill_dir,ref)

def main():
    data=json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
    specs=data if isinstance(data,list) else data['skills']
    for spec in specs: build(spec)
    print(f'Built {len(specs)} skills')
if __name__=='__main__': main()
````


---

<a id="source-scripts-build-manifest-py"></a>

## Original source file: `scripts/build_manifest.py`

Source SHA-256: `c34f86ff346677d33d8a8226053af92c3d14fafd9aa990a6fd7f673f6f5604bf`  
Source bytes: `3353`

````python
#!/usr/bin/env python3
"""Build a deterministic inventory and SHA-256 manifest for the HDI-OS bundle."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "MANIFEST.json"
EXCLUDED_SUFFIXES = {".zip", ".gz", ".tar"}
EXCLUDED_NAMES = {"MANIFEST.json", ".DS_Store"}
TEXT_SUFFIXES = {".md", ".json", ".jsonl", ".py", ".mjs", ".txt"}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main() -> int:
    files = []
    for path in sorted(ROOT.rglob("*")):
        if not path.is_file() or path.name in EXCLUDED_NAMES:
            continue
        if any(path.name.endswith(suffix) for suffix in EXCLUDED_SUFFIXES):
            continue
        rel = path.relative_to(ROOT).as_posix()
        record = {
            "path": rel,
            "bytes": path.stat().st_size,
            "sha256": sha256(path),
        }
        if path.suffix.lower() in TEXT_SUFFIXES:
            try:
                record["lines"] = len(path.read_text(encoding="utf-8").splitlines())
            except UnicodeDecodeError:
                pass
        files.append(record)

    skill_count = len(list((ROOT / "skills").glob("*/SKILL.md")))
    pack_count = len(list((ROOT / "domain-packs").glob("*/PACK.md")))
    agent_count = len(
        list((ROOT / "integrations" / "antigravity" / "agents").glob("*.md"))
    )
    antigravity_rule_count = int(
        (ROOT / "integrations" / "antigravity" / "rules" / "hdi-os.md").is_file()
    )
    archetype_data = json.loads(
        (ROOT / "reference-library" / "archetypes.json").read_text(encoding="utf-8")
    )
    archetype_count = len(archetype_data.get("archetypes", []))
    eval_count = len(
        json.loads((ROOT / "evals" / "manifest.json").read_text()).get("cases", [])
    )
    prompt_count = len(list((ROOT / "prompts").glob("[0-9][0-9]-*.md")))
    openai_metadata_count = len(list((ROOT / "skills").glob("*/agents/openai.yaml")))
    research_template_count = len(list((ROOT / "research-system" / "templates").glob("*.template.md")))
    research_schema_count = len(list((ROOT / "research-system").glob("*.schema.json")))
    version = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
    manifest = {
        "name": "Hyzex Design Intelligence OS",
        "version": version,
        "counts": {
            "files_excluding_manifest": len(files),
            "skills": skill_count,
            "domain_packs": pack_count,
            "antigravity_custom_agents": agent_count,
            "antigravity_workspace_rules": antigravity_rule_count,
            "reference_archetypes": archetype_count,
            "evaluation_cases": eval_count,
            "prompt_recipes": prompt_count,
            "openai_skill_metadata_files": openai_metadata_count,
            "research_templates": research_template_count,
            "research_schemas": research_schema_count,
        },
        "files": files,
    }
    OUTPUT.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(OUTPUT)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-init-project-py"></a>

## Original source file: `scripts/init_project.py`

Source SHA-256: `e06f1dd1e21367921bac70629a5738459a7d29029f3abda5a2b94cbb6ab2b69a`  
Source bytes: `4374`

````python
#!/usr/bin/env python3
"""Create project truth files from the HDI-OS templates."""

from __future__ import annotations

import argparse
import datetime as dt
import sys
from pathlib import Path

BUNDLE_ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_ROOT = BUNDLE_ROOT / "project-templates"
TEMPLATES = {
    "PRODUCT.template.md": "PRODUCT.md",
    "BRAND.template.md": "BRAND.md",
    "DESIGN.template.md": "DESIGN.md",
    "CONTENT.template.md": "CONTENT.md",
    "MOTION.template.md": "MOTION.md",
    "DECISIONS.template.md": "DECISIONS.md",
    "QUALITY-GATES.template.md": "QUALITY-GATES.md",
    "REFERENCE-BRIEF.template.md": "REFERENCE-BRIEF.md",
    "DESIGN-REVIEW.template.md": "DESIGN-REVIEW.md",
}
EXTENDED_TEMPLATES = {
    "USER-RESEARCH-SYNTHESIS.template.md": "USER-RESEARCH-SYNTHESIS.md",
    "USABILITY-TEST.template.md": "USABILITY-TEST.md",
    "BRAND-WORLD.template.md": "BRAND-WORLD.md",
    "CONTENT-ARCHITECTURE.template.md": "CONTENT-ARCHITECTURE.md",
    "CONVERSION-JOURNEY.template.md": "CONVERSION-JOURNEY.md",
    "DATA-VISUALIZATION.template.md": "DATA-VISUALIZATION.md",
    "DESIGN-SYSTEM-GOVERNANCE.template.md": "DESIGN-SYSTEM-GOVERNANCE.md",
    "ASSET-PRODUCTION.template.md": "ASSET-PRODUCTION.md",
    "PERFORMANCE.template.md": "PERFORMANCE.md",
    "EXPERIMENT.template.md": "EXPERIMENT.md",
    "TRUST-SECURITY.template.md": "TRUST-SECURITY.md",
    "LOCALIZATION.template.md": "LOCALIZATION.md",
    "CREATIVE-LAB.template.md": "CREATIVE-LAB.md",
    "SPATIAL-3D.template.md": "SPATIAL-3D.md",
    "ACCESSIBILITY.template.md": "ACCESSIBILITY.md",
    "DISCOVERABILITY.template.md": "DISCOVERABILITY.md",
    "HANDOFF.template.md": "HANDOFF.md",
    "MEASUREMENT.template.md": "MEASUREMENT.md",
 }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Initialize HDI-OS project truth and review files."
    )
    parser.add_argument("--project-dir", required=True, type=Path)
    parser.add_argument("--name", required=True, help="Human-readable project name.")
    parser.add_argument("--owner", default="Hyzex", help="Project or design owner.")
    parser.add_argument(
        "--date",
        default=dt.date.today().isoformat(),
        help="Date inserted into templates (default: today, YYYY-MM-DD).",
    )
    parser.add_argument("--force", action="store_true", help="Replace existing files.")
    parser.add_argument("--extended", action="store_true", help="Also create the 18 specialist planning and evidence files.")
    parser.add_argument("--dry-run", action="store_true")
    return parser.parse_args()


def render(source: str, *, name: str, owner: str, date: str) -> str:
    return (
        source.replace("{{PROJECT_NAME}}", name)
        .replace("{{OWNER}}", owner)
        .replace("{{DATE}}", date)
    )


def main() -> int:
    args = parse_args()
    target = args.project_dir.expanduser().resolve()
    try:
        if not args.dry_run:
            target.mkdir(parents=True, exist_ok=True)
        created = 0
        skipped = 0
        selected = dict(TEMPLATES)
        if args.extended:
            selected.update(EXTENDED_TEMPLATES)
        for template_name, destination_name in selected.items():
            source = TEMPLATE_ROOT / template_name
            destination = target / destination_name
            if not source.is_file():
                raise FileNotFoundError(f"Missing template: {source}")
            if destination.exists() and not args.force:
                print(f"[skip]  {destination}")
                skipped += 1
                continue
            action = "replace" if destination.exists() else "create"
            print(f"[{action}] {destination}")
            created += 1
            if not args.dry_run:
                text = render(
                    source.read_text(encoding="utf-8"),
                    name=args.name,
                    owner=args.owner,
                    date=args.date,
                )
                destination.write_text(text, encoding="utf-8")
        mode = "DRY RUN" if args.dry_run else "COMPLETE"
        print(f"\nPROJECT INIT {mode}: {created} written, {skipped} skipped.")
        return 0
    except (OSError, FileNotFoundError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-init-research-py"></a>

## Original source file: `scripts/init_research.py`

Source SHA-256: `618f8e74705cfbdec5e9e8bb121c7422cfb0b159fdeb93179288e8657af5fea9`  
Source bytes: `7542`

````python
#!/usr/bin/env python3
"""Initialize an HDI-OS web design research session."""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_ROOT = ROOT / "research-system" / "templates"
DEPTHS_FILE = ROOT / "research-system" / "research-depths.json"
TEMPLATES = {
    "RESEARCH-PLAN.template.md": "RESEARCH-PLAN.md",
    "EVIDENCE-MATRIX.template.md": "EVIDENCE-MATRIX.md",
    "COMPETITIVE-MATRIX.template.md": "COMPETITIVE-MATRIX.md",
    "INSPIRATION-SYNTHESIS.template.md": "INSPIRATION-SYNTHESIS.md",
    "TREND-CULTURE-MAP.template.md": "TREND-CULTURE-MAP.md",
    "ORIGINALITY-AUDIT.template.md": "ORIGINALITY-AUDIT.md",
    "RESEARCH-REPORT.template.md": "RESEARCH-REPORT.md",
}
SURFACES = (
    "landing-page",
    "saas-product",
    "mobile-app",
    "ecommerce",
    "editorial-portfolio",
    "service-business",
    "data-enterprise",
    "immersive-web",
    "general",
)
SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


def slugify(value: str) -> str:
    original = value.strip()
    ascii_slug = re.sub(r"[^a-z0-9]+", "-", original.casefold())
    ascii_slug = re.sub(r"-+", "-", ascii_slug).strip("-")
    if ascii_slug:
        return ascii_slug
    digest = hashlib.sha256(original.encode("utf-8")).hexdigest()[:8]
    return f"research-{dt.date.today().isoformat()}-{digest}"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Initialize an HDI-OS research session.")
    parser.add_argument("--project-dir", required=True, type=Path)
    parser.add_argument("--title", required=True)
    parser.add_argument("--slug", help="Lowercase hyphenated session ID.")
    parser.add_argument("--surface", choices=SURFACES, default="general")
    parser.add_argument("--industry", default="unspecified")
    parser.add_argument("--audience", action="append", default=[])
    parser.add_argument("--market", action="append", default=[])
    parser.add_argument("--language", action="append", default=[])
    parser.add_argument("--depth", choices=("quick", "standard", "deep"), default="standard")
    parser.add_argument(
        "--question",
        action="append",
        default=[],
        help="Research question. Repeat for multiple questions.",
    )
    parser.add_argument(
        "--decision",
        action="append",
        default=[],
        help="Decision affected by the matching --question index.",
    )
    parser.add_argument("--date", default=dt.date.today().isoformat())
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    return parser.parse_args()


def unique(values: list[str], fallback: str) -> list[str]:
    result: list[str] = []
    for value in values or [fallback]:
        cleaned = value.strip()
        if cleaned and cleaned not in result:
            result.append(cleaned)
    return result


def render(text: str, values: dict[str, str]) -> str:
    for key, value in values.items():
        text = text.replace("{{" + key + "}}", value)
    return text


def main() -> int:
    args = parse_args()
    try:
        dt.date.fromisoformat(args.date)
        session_id = args.slug or slugify(args.title)
        if not SLUG_RE.fullmatch(session_id):
            raise ValueError("--slug must use lowercase letters, numbers, and single hyphens")

        audiences = unique(args.audience, "unspecified audience")
        markets = unique(args.market, "unspecified market")
        languages = unique(args.language, "unspecified language")
        questions = args.question or [
            "Which evidence is required before choosing the design direction?"
        ]
        question_records = []
        question_lines = []
        for index, question in enumerate(questions, start=1):
            decision = (
                args.decision[index - 1].strip()
                if index - 1 < len(args.decision) and args.decision[index - 1].strip()
                else "Define during research planning"
            )
            record = {
                "id": f"Q{index:02d}",
                "question": question.strip(),
                "decision_affected": decision,
                "priority": "high" if index <= 3 else "medium",
                "status": "open",
            }
            question_records.append(record)
            question_lines.append(
                f"- **{record['id']}** — {record['question']}  \n"
                f"  Decision affected: {record['decision_affected']}"
            )

        depths = json.loads(DEPTHS_FILE.read_text(encoding="utf-8"))
        thresholds = {
            key: value
            for key, value in depths[args.depth].items()
            if key != "recommended_max_sources"
        }
        config = {
            "schema_version": "1.1",
            "session_id": session_id,
            "title": args.title,
            "surface": args.surface,
            "industry": args.industry,
            "audiences": audiences,
            "markets": markets,
            "languages": languages,
            "depth": args.depth,
            "created_on": args.date,
            "research_questions": question_records,
            "thresholds": thresholds,
            "notes": [],
        }

        project_root = args.project_dir.expanduser().resolve()
        session_dir = project_root / "research" / session_id
        if session_dir.exists() and any(session_dir.iterdir()) and not args.force:
            raise FileExistsError(
                f"{session_dir} already contains files. Use --force to replace session templates."
            )

        replacements = {
            "TITLE": args.title,
            "SESSION_ID": session_id,
            "DATE": args.date,
            "SURFACE": args.surface,
            "INDUSTRY": args.industry,
            "AUDIENCES": ", ".join(audiences),
            "MARKETS": ", ".join(markets),
            "LANGUAGES": ", ".join(languages),
            "DEPTH": args.depth,
            "QUESTIONS": "\n".join(question_lines),
        }

        planned = ["RESEARCH-CONFIG.json", "SOURCES.jsonl", *TEMPLATES.values()]
        for name in planned:
            print(f"[{'plan' if args.dry_run else 'create'}] {session_dir / name}")
        if args.dry_run:
            return 0

        session_dir.mkdir(parents=True, exist_ok=True)
        (session_dir / "RESEARCH-CONFIG.json").write_text(
            json.dumps(config, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        (session_dir / "SOURCES.jsonl").write_text("", encoding="utf-8")
        for template_name, destination_name in TEMPLATES.items():
            source = TEMPLATE_ROOT / template_name
            if not source.is_file():
                raise FileNotFoundError(f"Missing template: {source}")
            rendered = render(source.read_text(encoding="utf-8"), replacements)
            (session_dir / destination_name).write_text(rendered, encoding="utf-8")

        print(f"\nRESEARCH SESSION READY: {session_dir}")
        print(
            "Next: plan lanes and queries, browse read-only, record every accepted source, "
            "then run `python hdi.py research-validate --session-dir ...`."
        )
        return 0
    except (OSError, ValueError, KeyError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-install-py"></a>

## Original source file: `scripts/install.py`

Source SHA-256: `0812995b39efeafe44bcb7df94d4f0baecc417c74b723851ba7b23aae58a1d3b`  
Source bytes: `10297`

````python
#!/usr/bin/env python3
"""Install Hyzex Design Intelligence OS skills and support files.

The installer is intentionally conservative:
- it never deletes destination files;
- it skips existing files unless --force is provided;
- it can print the planned changes with --dry-run.
"""

from __future__ import annotations

import argparse
import shutil
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

BUNDLE_ROOT = Path(__file__).resolve().parents[1]
SKILLS_ROOT = BUNDLE_ROOT / "skills"
ANTIGRAVITY_AGENTS_ROOT = BUNDLE_ROOT / "integrations" / "antigravity" / "agents"
ANTIGRAVITY_RULE = BUNDLE_ROOT / "integrations" / "antigravity" / "rules" / "hdi-os.md"
SUPPORT_DIRS = (
    "domain-packs",
    "reference-library",
    "rubrics",
    "evals",
    "project-templates",
    "memory",
    "tooling",
    "docs",
    "orchestration",
    "prompts",
    "research-system",
)
SUPPORT_FILES = ("LICENSE.txt", "SOURCES.md", "CHANGELOG.md")


@dataclass
class Stats:
    copied: int = 0
    skipped: int = 0
    created_dirs: int = 0


class Installer:
    def __init__(self, *, force: bool, dry_run: bool) -> None:
        self.force = force
        self.dry_run = dry_run
        self.stats = Stats()

    def ensure_dir(self, path: Path) -> None:
        if path.exists():
            if not path.is_dir():
                raise RuntimeError(f"Expected directory but found file: {path}")
            return
        print(f"[mkdir] {path}")
        self.stats.created_dirs += 1
        if not self.dry_run:
            path.mkdir(parents=True, exist_ok=True)

    def copy_file(self, src: Path, dst: Path) -> None:
        if not src.is_file():
            raise FileNotFoundError(f"Missing source file: {src}")
        self.ensure_dir(dst.parent)
        if dst.exists() and not self.force:
            print(f"[skip]  {dst}")
            self.stats.skipped += 1
            return
        action = "replace" if dst.exists() else "copy"
        print(f"[{action}] {src.relative_to(BUNDLE_ROOT)} -> {dst}")
        self.stats.copied += 1
        if not self.dry_run:
            shutil.copy2(src, dst)

    def copy_tree(self, src: Path, dst: Path) -> None:
        if not src.is_dir():
            raise FileNotFoundError(f"Missing source directory: {src}")
        self.ensure_dir(dst)
        for path in sorted(src.rglob("*")):
            rel = path.relative_to(src)
            target = dst / rel
            if path.is_dir():
                self.ensure_dir(target)
            elif path.is_file():
                self.copy_file(path, target)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Install HDI-OS skills for Codex, Antigravity, or both."
    )
    parser.add_argument(
        "--target",
        choices=("codex", "antigravity", "both"),
        required=True,
        help="Agent environment to install into.",
    )
    parser.add_argument(
        "--scope",
        choices=("project", "global"),
        default="project",
        help="Install inside one project or in the user's global config.",
    )
    parser.add_argument(
        "--project-dir",
        type=Path,
        help="Project root. Required when --scope project.",
    )
    parser.add_argument(
        "--install-project-rules",
        action="store_true",
        help="Install host-appropriate project guidance: Codex AGENTS.md and/or an Antigravity workspace rule.",
    )
    parser.add_argument(
        "--install-agents-md",
        action="store_true",
        help=argparse.SUPPRESS,
    )
    parser.add_argument(
        "--install-custom-agents",
        action="store_true",
        help="Install optional Antigravity Custom Agent definitions.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Replace conflicting files. Never deletes unrelated files.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print planned changes without writing files.",
    )
    return parser.parse_args()


def selected_targets(target: str) -> tuple[str, ...]:
    return ("codex", "antigravity") if target == "both" else (target,)


def install_support(installer: Installer, support_root: Path) -> None:
    print(f"\n== Shared HDI-OS support -> {support_root} ==")
    installer.ensure_dir(support_root)
    for name in SUPPORT_DIRS:
        src = BUNDLE_ROOT / name
        if src.exists():
            installer.copy_tree(src, support_root / name)
    for name in SUPPORT_FILES:
        src = BUNDLE_ROOT / name
        if src.exists():
            installer.copy_file(src, support_root / name)
    version = support_root / "VERSION"
    if version.exists() and not installer.force:
        print(f"[skip]  {version}")
        installer.stats.skipped += 1
    else:
        print(f"[write] {version}")
        installer.stats.copied += 1
        if not installer.dry_run:
            installer.ensure_dir(version.parent)
            source_version = (BUNDLE_ROOT / "VERSION").read_text(encoding="utf-8")
            version.write_text(source_version, encoding="utf-8")


def install_skills(installer: Installer, destination: Path) -> None:
    print(f"\n== Skills -> {destination} ==")
    installer.ensure_dir(destination)
    skill_dirs = [p for p in sorted(SKILLS_ROOT.iterdir()) if p.is_dir()]
    if not skill_dirs:
        raise RuntimeError(f"No skills found under {SKILLS_ROOT}")
    for skill in skill_dirs:
        installer.copy_tree(skill, destination / skill.name)


def install_agents_contract(installer: Installer, project_root: Path) -> None:
    source = BUNDLE_ROOT / "AGENTS.md"
    destination = project_root / "AGENTS.md"
    if not destination.exists() or installer.force:
        installer.copy_file(source, destination)
        return

    try:
        same_content = (
            destination.read_text(encoding="utf-8")
            == source.read_text(encoding="utf-8")
        )
    except OSError:
        same_content = False
    if same_content:
        print(f"[skip]  {destination} (already HDI-OS)")
        installer.stats.skipped += 1
        return

    snippet = project_root / "AGENTS.hdi-snippet.md"
    print(
        "[notice] Existing AGENTS.md preserved. "
        f"Writing mergeable HDI-OS instructions to {snippet}"
    )
    installer.copy_file(
        BUNDLE_ROOT / "integrations" / "codex" / "AGENTS.snippet.md",
        snippet,
    )


def install_antigravity_rule(installer: Installer, project_root: Path) -> None:
    destination = project_root / ".agents" / "rules" / "hdi-os.md"
    print(f"\n== Antigravity Workspace Rule -> {destination} ==")
    installer.copy_file(ANTIGRAVITY_RULE, destination)


def install_custom_agents(installer: Installer, destination: Path) -> None:
    print(f"\n== Antigravity Custom Agents -> {destination} ==")
    installer.copy_tree(ANTIGRAVITY_AGENTS_ROOT, destination)


def resolve_paths(args: argparse.Namespace) -> tuple[Path | None, Path]:
    if args.scope == "project":
        if args.project_dir is None:
            raise ValueError("--project-dir is required when --scope project")
        project_root = args.project_dir.expanduser().resolve()
        if not project_root.exists():
            if args.dry_run:
                pass
            else:
                project_root.mkdir(parents=True, exist_ok=True)
        support_root = project_root / ".hdi-os"
        return project_root, support_root

    if args.project_dir is not None:
        print("[notice] --project-dir is ignored for global installation.")
    return None, Path.home() / ".hdi-os"


def main() -> int:
    args = parse_args()
    try:
        project_root, support_root = resolve_paths(args)
        installer = Installer(force=args.force, dry_run=args.dry_run)
        targets = selected_targets(args.target)

        install_project_rules = args.install_project_rules or args.install_agents_md
        if install_project_rules and args.scope != "project":
            raise ValueError("--install-project-rules is supported only with --scope project")
        if args.install_custom_agents and "antigravity" not in targets:
            raise ValueError(
                "--install-custom-agents requires --target antigravity or --target both"
            )

        install_support(installer, support_root)

        skill_destinations: list[Path] = []
        for target in targets:
            if target == "codex":
                destination = (
                    project_root / ".agents" / "skills"
                    if project_root is not None
                    else Path.home() / ".agents" / "skills"
                )
            else:
                destination = (
                    project_root / ".agents" / "skills"
                    if project_root is not None
                    else Path.home() / ".gemini" / "config" / "skills"
                )
            if destination not in skill_destinations:
                skill_destinations.append(destination)

        for destination in skill_destinations:
            install_skills(installer, destination)

        if install_project_rules and project_root is not None:
            if "codex" in targets:
                print("\n== Codex Repository Instructions ==")
                install_agents_contract(installer, project_root)
            if "antigravity" in targets:
                install_antigravity_rule(installer, project_root)

        if args.install_custom_agents:
            destination = (
                project_root / ".agents" / "agents"
                if project_root is not None
                else Path.home() / ".gemini" / "config" / "agents"
            )
            install_custom_agents(installer, destination)

        mode = "DRY RUN" if args.dry_run else "COMPLETE"
        print(
            f"\nHDI-OS INSTALL {mode}: "
            f"{installer.stats.copied} copied/written, "
            f"{installer.stats.skipped} skipped, "
            f"{installer.stats.created_dirs} directories created."
        )
        return 0
    except (ValueError, RuntimeError, FileNotFoundError, OSError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-new-reference-py"></a>

## Original source file: `scripts/new_reference.py`

Source SHA-256: `047a1a68f5495153fa4e3e269e63da7b0948856956211690cd4c60b0ac442b1e`  
Source bytes: `2903`

````python
#!/usr/bin/env python3
"""Create a new HDI-OS reference card from the bundled template."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = ROOT / "reference-library" / "reference-card.template.json"
DEFAULT_OUTPUT = ROOT / "reference-library" / "cards"
ID_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create an HDI-OS reference card.")
    parser.add_argument("--id", required=True, help="Lowercase hyphenated identifier.")
    parser.add_argument("--title", required=True)
    parser.add_argument("--location", required=True, help="URL, file path, or asset ID.")
    parser.add_argument("--type", default="url-or-file")
    parser.add_argument("--surface", default="")
    parser.add_argument("--audience", default="")
    parser.add_argument("--objective", default="")
    parser.add_argument("--viewport", default="")
    parser.add_argument("--state", default="")
    parser.add_argument("--language", default="")
    parser.add_argument("--why", default="")
    parser.add_argument("--tag", action="append", default=[])
    parser.add_argument("--out-dir", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--force", action="store_true")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if not ID_RE.fullmatch(args.id):
        print("ERROR: --id must use lowercase letters, numbers, and single hyphens.", file=sys.stderr)
        return 2
    try:
        data = json.loads(TEMPLATE.read_text(encoding="utf-8"))
        data["id"] = args.id
        data["title"] = args.title
        data["source"] = {
            "type": args.type,
            "location": args.location,
            "reviewed_on": dt.date.today().isoformat(),
        }
        data["context"] = {
            "surface": args.surface,
            "audience": args.audience,
            "objective": args.objective,
            "viewport": args.viewport,
            "state": args.state,
            "language": args.language,
        }
        data["why_selected"] = args.why
        data["tags"] = args.tag
        out_dir = args.out_dir.expanduser().resolve()
        out_dir.mkdir(parents=True, exist_ok=True)
        destination = out_dir / f"{args.id}.json"
        if destination.exists() and not args.force:
            print(f"ERROR: {destination} exists. Use --force to replace it.", file=sys.stderr)
            return 2
        destination.write_text(f"{json.dumps(data, indent=2, ensure_ascii=False)}\n", encoding="utf-8")
        print(destination)
        return 0
    except (OSError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-record-preference-py"></a>

## Original source file: `scripts/record_preference.py`

Source SHA-256: `e9c650d5a92f142f4590ef459556cfdb3dd5e1cecd481e715f933ae8f1760ca3`  
Source bytes: `2997`

````python
#!/usr/bin/env python3
"""Append a structured design preference event to JSONL memory."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "memory" / "preferences.jsonl"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Record an HDI-OS preference event.")
    parser.add_argument("--scope", choices=("global", "brand", "project"), required=True)
    parser.add_argument("--brand")
    parser.add_argument("--project-type", required=True)
    parser.add_argument("--candidate", action="append", required=True)
    parser.add_argument("--selected", required=True)
    parser.add_argument("--rejected", action="append", default=[])
    parser.add_argument("--reason", action="append", required=True)
    parser.add_argument("--avoid", action="append", default=[])
    parser.add_argument("--evidence", action="append", default=[])
    parser.add_argument("--context", action="append", default=[], metavar="KEY=VALUE")
    parser.add_argument("--out", type=Path, default=DEFAULT_OUTPUT)
    return parser.parse_args()


def parse_context(items: list[str]) -> dict[str, str]:
    result: dict[str, str] = {}
    for item in items:
        if "=" not in item:
            raise ValueError(f"Invalid context item {item!r}; use KEY=VALUE")
        key, value = item.split("=", 1)
        key = key.strip()
        if not key:
            raise ValueError(f"Invalid context item {item!r}; key is empty")
        result[key] = value.strip()
    return result


def main() -> int:
    args = parse_args()
    try:
        candidates = list(dict.fromkeys(args.candidate))
        if args.selected not in candidates:
            raise ValueError("--selected must also be present as a --candidate")
        if args.scope == "brand" and not args.brand:
            raise ValueError("--brand is required when --scope brand")
        event = {
            "date": dt.datetime.now(dt.timezone.utc).isoformat(),
            "scope": args.scope,
            "project_type": args.project_type,
            "candidates": candidates,
            "selected": args.selected,
            "rejected": list(dict.fromkeys(args.rejected)),
            "reasons": args.reason,
            "avoid_next_time": args.avoid,
            "context": parse_context(args.context),
            "evidence": args.evidence,
        }
        if args.brand:
            event["brand"] = args.brand
        destination = args.out.expanduser().resolve()
        destination.parent.mkdir(parents=True, exist_ok=True)
        with destination.open("a", encoding="utf-8") as handle:
            handle.write(json.dumps(event, ensure_ascii=False) + "\n")
        print(destination)
        return 0
    except (OSError, ValueError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-record-source-py"></a>

## Original source file: `scripts/record_source.py`

Source SHA-256: `a32170c7327b72bdc6a9692f93e7ae237463ec80b1cdcd56f456c6089ab39b4b`  
Source bytes: `10185`

````python
#!/usr/bin/env python3
"""Append a structured, safety-aware source record to an HDI-OS research ledger."""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import re
import sys
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

SOURCE_TYPES = (
    "live-product",
    "official-documentation",
    "research-paper",
    "design-system",
    "case-study",
    "curated-gallery",
    "product-flow-library",
    "specialist-publication",
    "local-cultural-source",
    "user-evidence",
    "technical-reference",
    "negative-example",
    "distant-domain",
    "other",
)
EVIDENCE_ROLES = (
    "product-behavior",
    "category-convention",
    "user-cultural-behavior",
    "visual-composition",
    "typography",
    "imagery-assets",
    "motion-interaction",
    "accessibility",
    "performance-feasibility",
    "negative-evidence",
    "distant-domain-analogy",
    "other",
)
SUBJECT_CLASSES = ("direct", "indirect", "substitute", "aspirational", "none")
ID_CLEAN_RE = re.compile(r"[^a-z0-9]+")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Record a source in SOURCES.jsonl.")
    parser.add_argument("--session-dir", required=True, type=Path)
    parser.add_argument("--url", required=True)
    parser.add_argument("--title", required=True)
    parser.add_argument("--publisher", required=True)
    parser.add_argument("--type", choices=SOURCE_TYPES, required=True)
    parser.add_argument("--tier", choices=("A", "B", "C", "D"), required=True)
    parser.add_argument("--status", choices=("accepted", "lead", "rejected"), default="accepted")
    parser.add_argument("--subject-class", choices=SUBJECT_CLASSES, default="none")
    parser.add_argument("--role", choices=EVIDENCE_ROLES, action="append", required=True)
    parser.add_argument("--retrieved-on", default=dt.date.today().isoformat())
    parser.add_argument("--published-on", default="")
    parser.add_argument("--viewport", default="")
    parser.add_argument("--page-state", default="")
    parser.add_argument("--locale", default="")
    parser.add_argument("--market", action="append", default=[])
    parser.add_argument("--language", action="append", default=[])
    parser.add_argument("--why", required=True)
    parser.add_argument("--observation", action="append", default=[])
    parser.add_argument("--source-claim", action="append", default=[])
    parser.add_argument("--inference", action="append", default=[])
    parser.add_argument("--principle", action="append", default=[])
    parser.add_argument("--do-not-copy", action="append", default=[])
    parser.add_argument("--limitation", action="append", default=[])
    parser.add_argument("--confidence", choices=("low", "medium", "high"), default="medium")
    parser.add_argument(
        "--license-status",
        choices=("unknown", "not-applicable", "checked-allowed", "checked-restricted"),
        default="unknown",
    )
    parser.add_argument("--tag", action="append", default=[])
    parser.add_argument("--id", help="Optional explicit source ID.")
    parser.add_argument("--dry-run", action="store_true")
    return parser.parse_args()


def clean_list(values: list[str]) -> list[str]:
    result: list[str] = []
    for value in values:
        cleaned = value.strip()
        if cleaned and cleaned not in result:
            result.append(cleaned)
    return result


def normalize_url(raw: str) -> str:
    parsed = urlsplit(raw.strip())
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise ValueError("--url must be an absolute http(s) URL")
    if parsed.username or parsed.password:
        raise ValueError("URLs containing credentials are forbidden")
    host = (parsed.hostname or "").lower()
    if not host:
        raise ValueError("URL host is missing")
    if host.startswith("www."):
        host = host[4:]
    port = parsed.port
    netloc = host
    if port and not ((parsed.scheme == "http" and port == 80) or (parsed.scheme == "https" and port == 443)):
        netloc = f"{host}:{port}"
    path = parsed.path or "/"
    if path != "/":
        path = path.rstrip("/")
    query_pairs = []
    for key, value in parse_qsl(parsed.query, keep_blank_values=True):
        lowered = key.casefold()
        if lowered.startswith("utm_") or lowered in {"gclid", "fbclid", "mc_cid", "mc_eid"}:
            continue
        query_pairs.append((key, value))
    query = urlencode(sorted(query_pairs))
    return urlunsplit((parsed.scheme.lower(), netloc, path, query, ""))


def slug(value: str) -> str:
    result = ID_CLEAN_RE.sub("-", value.casefold()).strip("-")
    return result[:48] or "source"


def read_config(session_dir: Path) -> dict:
    path = session_dir / "RESEARCH-CONFIG.json"
    if not path.is_file():
        raise FileNotFoundError(f"Missing research configuration: {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError("RESEARCH-CONFIG.json must contain an object")
    return data


def read_records(path: Path) -> list[dict]:
    if not path.exists():
        return []
    records = []
    for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
        if not line.strip():
            continue
        try:
            value = json.loads(line)
        except json.JSONDecodeError as exc:
            raise ValueError(f"Invalid JSONL at line {line_no}: {exc}") from exc
        if not isinstance(value, dict):
            raise ValueError(f"Source record at line {line_no} is not an object")
        records.append(value)
    return records


def main() -> int:
    args = parse_args()
    try:
        retrieved = dt.date.fromisoformat(args.retrieved_on).isoformat()
        session_dir = args.session_dir.expanduser().resolve()
        config = read_config(session_dir)
        url = normalize_url(args.url)
        markets = clean_list(args.market) or clean_list(config.get("markets", []))
        languages = clean_list(args.language) or clean_list(config.get("languages", []))
        observations = clean_list(args.observation)
        principles = clean_list(args.principle)
        non_copy = clean_list(args.do_not_copy)
        limitations = clean_list(args.limitation)

        if args.status == "accepted":
            missing = []
            if args.tier == "D":
                missing.append("Tier D sources may be leads, not accepted evidence")
            if not observations:
                missing.append("at least one --observation")
            if not principles:
                missing.append("at least one --principle")
            if not non_copy:
                missing.append("at least one --do-not-copy boundary")
            if not limitations:
                missing.append("at least one --limitation, including 'none observed' when appropriate")
            if missing:
                raise ValueError("Accepted source requires: " + "; ".join(missing))

        state_key = "|".join(
            [url, args.viewport.strip(), args.page_state.strip(), args.locale.strip()]
        )
        source_id = args.id or (
            f"{slug(args.publisher)}-{slug(args.title)[:24]}-"
            f"{hashlib.sha256(state_key.encode('utf-8')).hexdigest()[:10]}"
        )
        source_id = slug(source_id)

        ledger = session_dir / "SOURCES.jsonl"
        records = read_records(ledger)
        for existing in records:
            existing_key = "|".join(
                [
                    normalize_url(str(existing.get("url", ""))),
                    str(existing.get("viewport", "")).strip(),
                    str(existing.get("page_state", "")).strip(),
                    str(existing.get("locale", "")).strip(),
                ]
            )
            if existing_key == state_key:
                raise ValueError(
                    f"Duplicate source state already recorded as {existing.get('id', 'unknown')}"
                )
            if existing.get("id") == source_id:
                raise ValueError(f"Source ID already exists: {source_id}")

        record = {
            "schema_version": "1.1",
            "id": source_id,
            "url": url,
            "title": args.title.strip(),
            "publisher": args.publisher.strip(),
            "source_type": args.type,
            "tier": args.tier,
            "status": args.status,
            "subject_class": args.subject_class,
            "evidence_roles": clean_list(args.role),
            "retrieved_on": retrieved,
            "published_on": args.published_on.strip(),
            "viewport": args.viewport.strip(),
            "page_state": args.page_state.strip(),
            "locale": args.locale.strip(),
            "markets": markets,
            "languages": languages,
            "why_selected": args.why.strip(),
            "observations": observations,
            "source_claims": clean_list(args.source_claim),
            "inferences": clean_list(args.inference),
            "transferable_principles": principles,
            "do_not_copy": non_copy,
            "limitations": limitations,
            "confidence": args.confidence,
            "license_status": args.license_status,
            "security": {
                "page_instructions_ignored": True,
                "secrets_exposed": False,
                "external_actions_performed": False,
                "downloads_executed": False,
            },
            "tags": clean_list(args.tag),
        }
        rendered = json.dumps(record, ensure_ascii=False, separators=(",", ":"))
        if args.dry_run:
            print(json.dumps(record, ensure_ascii=False, indent=2))
            return 0
        ledger.parent.mkdir(parents=True, exist_ok=True)
        with ledger.open("a", encoding="utf-8") as handle:
            handle.write(rendered + "\n")
        print(source_id)
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-score-review-py"></a>

## Original source file: `scripts/score_review.py`

Source SHA-256: `df5d2d7b45869e14cd35f5ad46982913150f020aeb4011cbc37f33cc84f991a1`  
Source bytes: `5332`

````python
#!/usr/bin/env python3
"""Score an HDI-OS design review and enforce approval gates."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CONFIG = ROOT / "rubrics" / "scorecard.json"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Evaluate an HDI-OS review JSON file.")
    parser.add_argument("review", type=Path, help="Review JSON based on review-input.template.json")
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
    parser.add_argument("--out", type=Path, help="Write the computed result as JSON.")
    return parser.parse_args()


def load_json(path: Path) -> dict[str, Any]:
    data = json.loads(path.expanduser().resolve().read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError(f"Expected a JSON object in {path}")
    return data


def main() -> int:
    args = parse_args()
    try:
        config = load_json(args.config)
        review = load_json(args.review)
        categories = config.get("categories")
        if not isinstance(categories, list) or not categories:
            raise ValueError("Scorecard config has no categories")
        hard_gates = review.get("hard_gates")
        scores = review.get("scores")
        if not isinstance(hard_gates, dict):
            raise ValueError("Review must contain a hard_gates object")
        if not isinstance(scores, dict):
            raise ValueError("Review must contain a scores object")

        allowed_gate_values = {"pass", "fail"}
        invalid_gates = {
            key: value
            for key, value in hard_gates.items()
            if str(value).lower() not in allowed_gate_values
        }
        if invalid_gates:
            raise ValueError(
                "Hard-gate values must be 'pass' or 'fail': "
                + ", ".join(f"{k}={v!r}" for k, v in invalid_gates.items())
            )
        failed_gates = [
            key for key, value in hard_gates.items() if str(value).lower() == "fail"
        ]
        if config.get("hard_gates_required", True) and not hard_gates:
            raise ValueError("At least one explicit hard gate is required")

        category_results = []
        total = 0.0
        minimum_failures = []
        for category in categories:
            category_id = category["id"]
            weight = float(category["weight"])
            minimum = float(category["minimum"])
            if category_id not in scores:
                raise ValueError(f"Missing score for category: {category_id}")
            value = float(scores[category_id])
            if value < 0 or value > weight:
                raise ValueError(
                    f"Score {category_id}={value:g} must be between 0 and {weight:g}"
                )
            passed_minimum = value >= minimum
            if not passed_minimum:
                minimum_failures.append(category_id)
            total += value
            category_results.append(
                {
                    "id": category_id,
                    "label": category.get("label", category_id),
                    "score": value,
                    "weight": weight,
                    "minimum": minimum,
                    "minimum_passed": passed_minimum,
                }
            )

        threshold = float(config.get("approval_threshold", 0))
        blocking = review.get("blocking_findings", [])
        major = review.get("major_findings", [])
        if not isinstance(blocking, list) or not isinstance(major, list):
            raise ValueError("blocking_findings and major_findings must be arrays")

        reasons = []
        if failed_gates:
            reasons.append(f"failed hard gates: {', '.join(failed_gates)}")
        if total < threshold:
            reasons.append(f"score {total:g} is below threshold {threshold:g}")
        if minimum_failures:
            reasons.append(
                "category minimums failed: " + ", ".join(minimum_failures)
            )
        if blocking:
            reasons.append(f"{len(blocking)} unresolved blocking finding(s)")
        if major:
            reasons.append(f"{len(major)} unresolved major finding(s)")

        approved = not reasons
        result = {
            "project": review.get("project", ""),
            "approved": approved,
            "total": total,
            "threshold": threshold,
            "failed_hard_gates": failed_gates,
            "failed_category_minimums": minimum_failures,
            "unresolved_blocking": len(blocking),
            "unresolved_major": len(major),
            "categories": category_results,
            "reasons": reasons,
        }
        rendered = json.dumps(result, indent=2, ensure_ascii=False)
        print(rendered)
        if args.out:
            destination = args.out.expanduser().resolve()
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_text(rendered + "\n", encoding="utf-8")
        return 0 if approved else 1
    except (OSError, json.JSONDecodeError, ValueError, KeyError, TypeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-validate-bundle-py"></a>

## Original source file: `scripts/validate_bundle.py`

Source SHA-256: `a4082b044a425dce3ed346c0bb9a364fccead60037120f6caa47343c9ff416dd`  
Source bytes: `16475`

````python
#!/usr/bin/env python3
"""Validate HDI-OS structure without third-party dependencies."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
EXPECTED_SKILLS = {
    "advanced-experience",
    "asset-production-direction",
    "brand-world-building",
    "color-imagery",
    "competitive-experience-intelligence",
    "component-system",
    "content-information-design",
    "conversion-behavior-design",
    "creative-coding-lab",
    "data-visualization",
    "design-director",
    "design-ops-handoff",
    "design-system-governance",
    "design-to-code",
    "experiment-optimization",
    "inclusive-accessibility-design",
    "inspiration-synthesis",
    "localization-culturalization",
    "motion-interaction",
    "performance-perceived-quality",
    "product-metrics-instrumentation",
    "prototype-usability-testing",
    "reference-intelligence",
    "responsive-rtl",
    "seo-discoverability-information",
    "spatial-3d-world-building",
    "trend-cultural-intelligence",
    "trust-privacy-security-ux",
    "typography-content",
    "user-research-synthesis",
    "ux-architecture",
    "visual-composition",
    "visual-qa-refinement",
    "web-design-research",
}
NEW_SPECIALIST_SKILLS = {
    "user-research-synthesis",
    "prototype-usability-testing",
    "brand-world-building",
    "content-information-design",
    "conversion-behavior-design",
    "data-visualization",
    "design-system-governance",
    "asset-production-direction",
    "performance-perceived-quality",
    "experiment-optimization",
    "trust-privacy-security-ux",
    "localization-culturalization",
    "creative-coding-lab",
    "spatial-3d-world-building",
    "inclusive-accessibility-design",
    "seo-discoverability-information",
    "design-ops-handoff",
    "product-metrics-instrumentation",
}
REQUIRED_ROOT = {
    "README.md",
    "README.en.md",
    "AGENTS.md",
    "CHANGELOG.md",
    "LICENSE.txt",
    "SOURCES.md",
    "VERSION",
    "INSTALL-QUICK-AR.md",
    "hdi.py",
}
REQUIRED_SUPPORT_DIRS = {
    "docs",
    "project-templates",
    "domain-packs",
    "reference-library",
    "rubrics",
    "evals",
    "memory",
    "integrations",
    "scripts",
    "tooling",
    "orchestration",
    "prompts",
    "examples",
    "research-system",
}
NAME_PATTERN = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


class Report:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []

    def error(self, message: str) -> None:
        self.errors.append(message)

    def warn(self, message: str) -> None:
        self.warnings.append(message)


def parse_frontmatter(text: str) -> tuple[dict[str, Any], str]:
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        raise ValueError("missing opening YAML frontmatter delimiter")
    try:
        end = next(i for i in range(1, len(lines)) if lines[i].strip() == "---")
    except StopIteration as exc:
        raise ValueError("missing closing YAML frontmatter delimiter") from exc

    data: dict[str, Any] = {}
    current_list: str | None = None
    for raw in lines[1:end]:
        line = raw.rstrip()
        if not line or line.lstrip().startswith("#"):
            continue
        stripped = line.strip()
        if stripped.startswith("-") and current_list:
            data.setdefault(current_list, []).append(stripped[1:].strip().strip('"\''))
            continue
        if line.startswith((" ", "\t")):
            # Nested metadata is valid but not required for this lightweight validator.
            continue
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()
        if value:
            data[key] = value.strip('"\'')
            current_list = None
        else:
            data[key] = []
            current_list = key
    return data, "\n".join(lines[end + 1 :])


def validate_json_files(report: Report) -> None:
    for path in sorted(ROOT.rglob("*.json")):
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError) as exc:
            report.error(f"Invalid JSON: {path.relative_to(ROOT)} — {exc}")

    for path in sorted(ROOT.rglob("*.jsonl")):
        try:
            for line_no, line in enumerate(
                path.read_text(encoding="utf-8").splitlines(), start=1
            ):
                if line.strip():
                    json.loads(line)
        except (json.JSONDecodeError, OSError) as exc:
            report.error(
                f"Invalid JSONL: {path.relative_to(ROOT)} line {line_no} — {exc}"
            )


def validate_skills(report: Report) -> None:
    skills_root = ROOT / "skills"
    found = {path.name for path in skills_root.iterdir() if path.is_dir()}
    missing = EXPECTED_SKILLS - found
    extra = found - EXPECTED_SKILLS
    if missing:
        report.error(f"Missing skills: {', '.join(sorted(missing))}")
    if extra:
        report.warn(f"Unexpected skills: {', '.join(sorted(extra))}")

    descriptions: dict[str, str] = {}
    for name in sorted(found):
        skill_file = skills_root / name / "SKILL.md"
        if not skill_file.is_file():
            report.error(f"skills/{name}/SKILL.md is missing")
            continue
        text = skill_file.read_text(encoding="utf-8")
        line_count = len(text.splitlines())
        if line_count > 500:
            report.warn(f"skills/{name}/SKILL.md has {line_count} lines (>500 guidance)")
        try:
            frontmatter, body = parse_frontmatter(text)
        except ValueError as exc:
            report.error(f"skills/{name}/SKILL.md: {exc}")
            continue

        fm_name = str(frontmatter.get("name", ""))
        description = str(frontmatter.get("description", ""))
        if fm_name != name:
            report.error(f"skills/{name}: frontmatter name is {fm_name!r}")
        if not NAME_PATTERN.fullmatch(fm_name):
            report.error(f"skills/{name}: invalid skill name format")
        if len(fm_name) > 64:
            report.error(f"skills/{name}: skill name exceeds 64 characters")
        if not description:
            report.error(f"skills/{name}: description is required")
        elif len(description) > 1024:
            report.error(f"skills/{name}: description exceeds 1024 characters")
        if description in descriptions:
            report.warn(
                f"skills/{name}: description duplicates {descriptions[description]}"
            )
        descriptions[description] = name
        if len(body.strip()) < 400:
            report.warn(f"skills/{name}: body appears unusually short")
        if "# " not in body:
            report.error(f"skills/{name}: body has no top-level heading")

        openai_meta = skills_root / name / "agents" / "openai.yaml"
        if not openai_meta.is_file():
            report.warn(f"skills/{name}: agents/openai.yaml is missing")
        else:
            metadata_text = openai_meta.read_text(encoding="utf-8")
            for field in ("display_name:", "short_description:", "default_prompt:"):
                if field not in metadata_text:
                    report.error(
                        f"skills/{name}/agents/openai.yaml: missing {field[:-1]}"
                    )
            if f"${name}" not in metadata_text:
                report.warn(
                    f"skills/{name}/agents/openai.yaml: default prompt does not name ${name}"
                )


def validate_references(report: Report) -> None:
    for skill_file in sorted((ROOT / "skills").glob("*/SKILL.md")):
        text = skill_file.read_text(encoding="utf-8")
        # Validate explicit local references such as references/FILE.md.
        for match in re.findall(r"`(references/[A-Za-z0-9._/-]+)`", text):
            path = skill_file.parent / match
            if not path.exists():
                report.error(
                    f"Broken reference in {skill_file.relative_to(ROOT)}: {match}"
                )


def validate_required_structure(report: Report) -> None:
    for name in sorted(REQUIRED_ROOT):
        if not (ROOT / name).is_file():
            report.error(f"Missing root file: {name}")
    for name in sorted(REQUIRED_SUPPORT_DIRS):
        if not (ROOT / name).is_dir():
            report.error(f"Missing directory: {name}/")

    pack_count = len(list((ROOT / "domain-packs").glob("*/PACK.md")))
    if pack_count < 8:
        report.error(f"Expected at least 8 domain packs, found {pack_count}")

    agent_count = len(
        list((ROOT / "integrations" / "antigravity" / "agents").glob("*.md"))
    )
    antigravity_rule = ROOT / "integrations" / "antigravity" / "rules" / "hdi-os.md"
    if not antigravity_rule.is_file():
        report.error("Missing Antigravity workspace rule: integrations/antigravity/rules/hdi-os.md")
    elif antigravity_rule.stat().st_size > 12000:
        report.error("Antigravity workspace rule exceeds the documented 12,000-character limit")

    agents_md = ROOT / "AGENTS.md"
    if agents_md.is_file() and agents_md.stat().st_size > 32768:
        report.warn("AGENTS.md exceeds Codex's default 32 KiB combined-instruction budget")
    if agent_count < 18:
        report.error(f"Expected at least 18 Antigravity custom agents, found {agent_count}")
    for agent_file in sorted(
        (ROOT / "integrations" / "antigravity" / "agents").glob("*.md")
    ):
        try:
            frontmatter, body = parse_frontmatter(agent_file.read_text(encoding="utf-8"))
        except ValueError as exc:
            report.error(f"{agent_file.relative_to(ROOT)}: {exc}")
            continue
        if frontmatter.get("name") != agent_file.stem:
            report.error(
                f"{agent_file.relative_to(ROOT)}: name must match filename"
            )
        if not frontmatter.get("description"):
            report.error(f"{agent_file.relative_to(ROOT)}: description is required")
        if not body.strip():
            report.error(f"{agent_file.relative_to(ROOT)}: instructions are empty")

    prompt_count = len(list((ROOT / "prompts").glob("[0-9][0-9]-*.md")))
    if prompt_count < 30:
        report.error(f"Expected at least 30 prompt recipes, found {prompt_count}")

    eval_manifest = ROOT / "evals" / "manifest.json"
    if eval_manifest.is_file():
        try:
            eval_count = len(json.loads(eval_manifest.read_text(encoding="utf-8")).get("cases", []))
            if eval_count < 71:
                report.error(f"Expected at least 71 evaluation cases, found {eval_count}")
        except (json.JSONDecodeError, OSError, AttributeError) as exc:
            report.error(f"Invalid eval manifest: {exc}")

    required_research_files = {
        "research-config.schema.json",
        "source-record.schema.json",
        "research-depths.json",
        "README.md",
    }
    for name in sorted(required_research_files):
        if not (ROOT / "research-system" / name).is_file():
            report.error(f"Missing research-system file: {name}")
    research_template_count = len(list((ROOT / "research-system" / "templates").glob("*.template.md")))
    if research_template_count < 7:
        report.error(f"Expected at least 7 research templates, found {research_template_count}")
    for script_name in ("init_research.py", "record_source.py", "validate_research.py"):
        if not (ROOT / "scripts" / script_name).is_file():
            report.error(f"Missing research utility: scripts/{script_name}")

    templates = list((ROOT / "project-templates").glob("*.template.md"))
    if len(templates) < 27:
        report.error(f"Expected at least 27 project templates, found {len(templates)}")


def validate_router_and_evals(report: Report) -> None:
    router_path = ROOT / "orchestration" / "router.json"
    try:
        router = json.loads(router_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError) as exc:
        report.error(f"Invalid router.json: {exc}")
        return

    routed: set[str] = set()
    for name in router.get("default_sequence", []):
        routed.add(str(name))
    for block_name in ("research_sequence", "evidence_sequence"):
        for name in router.get(block_name, []):
            routed.add(str(name))
    for surface, config in router.get("surfaces", {}).items():
        if not isinstance(config, dict):
            report.error(f"Router surface {surface!r} must be an object")
            continue
        for key in ("required_skills", "conditional_skills"):
            values = config.get(key, [])
            if len(values) != len(set(values)):
                report.error(f"Router surface {surface!r} has duplicate {key}")
            routed.update(str(name) for name in values)
    for config in router.get("specialist_routes", {}).values():
        if isinstance(config, dict):
            routed.update(str(name) for name in config.get("skills", []))
    routed.update(str(name) for name in router.get("specialist_triggers", {}).keys())

    unknown = routed - EXPECTED_SKILLS
    if unknown:
        report.error(f"Router references unknown skills: {', '.join(sorted(unknown))}")
    unrouted = EXPECTED_SKILLS - routed
    if unrouted:
        report.warn(f"Skills not represented in router: {', '.join(sorted(unrouted))}")

    eval_path = ROOT / "evals" / "manifest.json"
    try:
        data = json.loads(eval_path.read_text(encoding="utf-8"))
        cases = data.get("cases", [])
    except (json.JSONDecodeError, OSError, AttributeError) as exc:
        report.error(f"Invalid eval manifest: {exc}")
        return

    ids = [str(case.get("id", "")) for case in cases if isinstance(case, dict)]
    if any(not item for item in ids):
        report.error("Every eval case requires a non-empty id")
    if len(ids) != len(set(ids)):
        report.error("Evaluation case IDs must be unique")

    by_skill: dict[str, set[str]] = {}
    for case in cases:
        if not isinstance(case, dict):
            report.error("Evaluation cases must be objects")
            continue
        target = str(case.get("target_skill", ""))
        if target not in EXPECTED_SKILLS:
            report.error(f"Eval {case.get('id')} targets unknown skill {target!r}")
        case_type = str(case.get("case_type", "legacy"))
        by_skill.setdefault(target, set()).add(case_type)
        for key in ("prompt", "hard_assertions", "quality_assertions", "regression_watch"):
            if not case.get(key):
                report.error(f"Eval {case.get('id')} is missing {key}")

    missing_eval = EXPECTED_SKILLS - set(by_skill)
    if missing_eval:
        report.error(f"Skills without eval coverage: {', '.join(sorted(missing_eval))}")
    required_types = {"positive", "boundary", "adversarial"}
    for skill in sorted(NEW_SPECIALIST_SKILLS):
        missing_types = required_types - by_skill.get(skill, set())
        if missing_types:
            report.error(
                f"{skill} is missing v1.2 eval types: {', '.join(sorted(missing_types))}"
            )


def validate_placeholders(report: Report) -> None:
    expected = {"{{PROJECT_NAME}}", "{{OWNER}}", "{{DATE}}"}
    found: set[str] = set()
    for path in (ROOT / "project-templates").glob("*.template.md"):
        text = path.read_text(encoding="utf-8")
        found.update(re.findall(r"\{\{[^{}]+\}\}", text))
    unknown = found - expected
    if unknown:
        report.error(f"Unknown template placeholders: {', '.join(sorted(unknown))}")


def main() -> int:
    report = Report()
    validate_required_structure(report)
    validate_skills(report)
    validate_references(report)
    validate_json_files(report)
    validate_router_and_evals(report)
    validate_placeholders(report)

    print("HDI-OS bundle validation")
    print(f"Root: {ROOT}")
    print(f"Skills: {len(list((ROOT / 'skills').glob('*/SKILL.md')))}")
    print(f"Files: {len([p for p in ROOT.rglob('*') if p.is_file()])}")
    print(f"Warnings: {len(report.warnings)}")
    for warning in report.warnings:
        print(f"  WARN  {warning}")
    print(f"Errors: {len(report.errors)}")
    for error in report.errors:
        print(f"  ERROR {error}")

    if report.errors:
        print("RESULT: FAIL")
        return 1
    print("RESULT: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-scripts-validate-research-py"></a>

## Original source file: `scripts/validate_research.py`

Source SHA-256: `f109d40b9dcf63f4a7fd5c6fb0b27ebd225433eed878b2518edbd1f89395b964`  
Source bytes: `13439`

````python
#!/usr/bin/env python3
"""Validate an HDI-OS research session for diversity, provenance, and safety."""

from __future__ import annotations

import argparse
import collections
import datetime as dt
import json
import sys
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlsplit

REQUIRED_SESSION_FILES = (
    "RESEARCH-CONFIG.json",
    "SOURCES.jsonl",
    "RESEARCH-PLAN.md",
    "EVIDENCE-MATRIX.md",
    "COMPETITIVE-MATRIX.md",
    "INSPIRATION-SYNTHESIS.md",
    "TREND-CULTURE-MAP.md",
    "ORIGINALITY-AUDIT.md",
    "RESEARCH-REPORT.md",
)
REQUIRED_RECORD_FIELDS = (
    "schema_version",
    "id",
    "url",
    "title",
    "publisher",
    "source_type",
    "tier",
    "status",
    "evidence_roles",
    "retrieved_on",
    "why_selected",
    "observations",
    "transferable_principles",
    "do_not_copy",
    "limitations",
    "confidence",
    "security",
)
ALLOWED_STATUS = {"accepted", "lead", "rejected"}
ALLOWED_TIERS = {"A", "B", "C", "D"}


class Report:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.metrics: dict[str, object] = {}

    def error(self, message: str) -> None:
        self.errors.append(message)

    def warn(self, message: str) -> None:
        self.warnings.append(message)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Validate an HDI-OS research session.")
    parser.add_argument("--session-dir", required=True, type=Path)
    parser.add_argument("--out", type=Path, help="Optional JSON report destination.")
    parser.add_argument(
        "--strict-warnings",
        action="store_true",
        help="Return failure when warnings remain.",
    )
    return parser.parse_args()


def load_json(path: Path) -> dict:
    value = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(value, dict):
        raise ValueError(f"{path.name} must contain a JSON object")
    return value


def load_records(path: Path, report: Report) -> list[dict]:
    records: list[dict] = []
    for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
        if not line.strip():
            continue
        try:
            value = json.loads(line)
        except json.JSONDecodeError as exc:
            report.error(f"SOURCES.jsonl line {line_no}: invalid JSON — {exc}")
            continue
        if not isinstance(value, dict):
            report.error(f"SOURCES.jsonl line {line_no}: record must be an object")
            continue
        value["_line"] = line_no
        records.append(value)
    return records


def domain_from_url(url: str) -> str:
    parsed = urlsplit(url)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise ValueError("not an absolute http(s) URL")
    if parsed.username or parsed.password:
        raise ValueError("URL contains credentials")
    host = parsed.hostname.lower()
    return host[4:] if host.startswith("www.") else host


def normalized_source_url(url: str) -> str:
    """Normalize a source URL for duplicate-state detection.

    Fragments and common tracking parameters are irrelevant to the observed page
    state, while meaningful query parameters are retained in sorted order.
    """
    parsed = urlsplit(url)
    host = domain_from_url(url)
    port = parsed.port
    if port and not ((parsed.scheme == "http" and port == 80) or (parsed.scheme == "https" and port == 443)):
        host = f"{host}:{port}"
    path = parsed.path.rstrip("/") or "/"
    query_pairs = []
    for key, value in parse_qsl(parsed.query, keep_blank_values=True):
        lowered = key.casefold()
        if lowered.startswith("utm_") or lowered in {"gclid", "fbclid", "mc_cid", "mc_eid"}:
            continue
        query_pairs.append((key, value))
    query = urlencode(sorted(query_pairs))
    return f"{host}{path}" + (f"?{query}" if query else "")


def validate_record(record: dict, report: Report) -> None:
    label = f"line {record.get('_line', '?')} / {record.get('id', 'missing-id')}"
    missing = [field for field in REQUIRED_RECORD_FIELDS if field not in record]
    if missing:
        report.error(f"{label}: missing fields: {', '.join(missing)}")
        return
    if record.get("schema_version") != "1.1":
        report.error(f"{label}: schema_version must be 1.1")
    if record.get("status") not in ALLOWED_STATUS:
        report.error(f"{label}: invalid status {record.get('status')!r}")
    if record.get("tier") not in ALLOWED_TIERS:
        report.error(f"{label}: invalid tier {record.get('tier')!r}")
    try:
        domain_from_url(str(record.get("url", "")))
    except ValueError as exc:
        report.error(f"{label}: invalid URL — {exc}")
    try:
        dt.date.fromisoformat(str(record.get("retrieved_on", "")))
    except ValueError:
        report.error(f"{label}: retrieved_on must be YYYY-MM-DD")

    for field in ("evidence_roles", "observations", "transferable_principles", "do_not_copy", "limitations"):
        if not isinstance(record.get(field), list):
            report.error(f"{label}: {field} must be an array")
    if record.get("status") == "accepted":
        if record.get("tier") == "D":
            report.error(f"{label}: Tier D may not be accepted evidence")
        for field in ("observations", "transferable_principles", "do_not_copy", "limitations"):
            if not record.get(field):
                report.error(f"{label}: accepted source requires non-empty {field}")
        if not str(record.get("why_selected", "")).strip():
            report.error(f"{label}: accepted source requires why_selected")

    security = record.get("security")
    if not isinstance(security, dict):
        report.error(f"{label}: security must be an object")
    else:
        expected = {
            "page_instructions_ignored": True,
            "secrets_exposed": False,
            "external_actions_performed": False,
            "downloads_executed": False,
        }
        for key, value in expected.items():
            if security.get(key) is not value:
                report.error(f"{label}: unsafe or missing security field {key}={security.get(key)!r}")


def main() -> int:
    args = parse_args()
    session_dir = args.session_dir.expanduser().resolve()
    report = Report()
    try:
        for name in REQUIRED_SESSION_FILES:
            if not (session_dir / name).is_file():
                report.error(f"Missing session file: {name}")
        config_path = session_dir / "RESEARCH-CONFIG.json"
        ledger_path = session_dir / "SOURCES.jsonl"
        if not config_path.is_file() or not ledger_path.is_file():
            raise FileNotFoundError("Research config or source ledger is missing")
        config = load_json(config_path)
        records = load_records(ledger_path, report)
        for record in records:
            validate_record(record, report)

        accepted = [r for r in records if r.get("status") == "accepted"]
        domains: list[str] = []
        for record in accepted:
            try:
                domains.append(domain_from_url(str(record.get("url", ""))))
            except ValueError:
                pass
        domain_counts = collections.Counter(domains)
        source_types = {str(r.get("source_type")) for r in accepted if r.get("source_type")}
        tier_counts = collections.Counter(str(r.get("tier")) for r in accepted)
        role_set = {
            role
            for record in accepted
            for role in record.get("evidence_roles", [])
            if isinstance(role, str)
        }
        subject_counts = collections.Counter(str(r.get("subject_class", "none")) for r in accepted)
        accepted_count = len(accepted)
        largest_domain_count = max(domain_counts.values(), default=0)
        largest_share = largest_domain_count / accepted_count if accepted_count else 0.0
        gallery_count = sum(r.get("source_type") == "curated-gallery" for r in accepted)
        gallery_share = gallery_count / accepted_count if accepted_count else 0.0
        direct_share = subject_counts.get("direct", 0) / accepted_count if accepted_count else 0.0

        thresholds = config.get("thresholds")
        if not isinstance(thresholds, dict):
            report.error("RESEARCH-CONFIG.json thresholds must be an object")
            thresholds = {}
        checks = (
            ("min_accepted_sources", accepted_count, "accepted sources"),
            ("min_unique_domains", len(domain_counts), "unique domains"),
            ("min_source_types", len(source_types), "source types"),
            ("min_tier_a_sources", tier_counts.get("A", 0), "Tier-A sources"),
        )
        for key, actual, label in checks:
            required = thresholds.get(key)
            if not isinstance(required, int):
                report.error(f"Missing integer threshold: {key}")
            elif actual < required:
                report.error(f"Research depth requires at least {required} {label}; found {actual}")
        max_share = thresholds.get("max_single_domain_share")
        if not isinstance(max_share, (int, float)):
            report.error("Missing numeric threshold: max_single_domain_share")
        elif largest_share > float(max_share):
            dominant = domain_counts.most_common(1)[0][0] if domain_counts else "none"
            report.error(
                f"Single-domain concentration is {largest_share:.0%} ({dominant}); maximum is {float(max_share):.0%}"
            )

        if accepted_count and gallery_share > 0.40:
            report.error(f"Curated-gallery sources are {gallery_share:.0%} of accepted evidence; diversify into direct and functional evidence")
        elif accepted_count and gallery_share > 0.25:
            report.warn(f"Curated-gallery sources are {gallery_share:.0%} of accepted evidence")
        if accepted_count and direct_share > 0.50:
            report.warn(f"Direct competitors are {direct_share:.0%} of accepted evidence; add adjacent, substitute, or distant-domain sources")
        if accepted_count and not ({"product-behavior", "category-convention", "user-cultural-behavior"} & role_set):
            report.warn("No accepted source carries product, category, or user/cultural behavior evidence")
        if accepted_count and not ({"visual-composition", "typography", "imagery-assets", "motion-interaction"} & role_set):
            report.warn("No accepted source carries visual or craft evidence")
        if any(r.get("tier") == "D" and r.get("status") != "lead" for r in records):
            report.error("Every Tier-D source must remain status=lead")

        state_keys: dict[tuple[str, str, str, str], str] = {}
        ids: set[str] = set()
        for record in records:
            record_id = str(record.get("id", ""))
            if record_id in ids:
                report.error(f"Duplicate source ID: {record_id}")
            ids.add(record_id)
            try:
                key = (
                    normalized_source_url(str(record.get("url", ""))),
                    str(record.get("viewport", "")).strip(),
                    str(record.get("page_state", "")).strip(),
                    str(record.get("locale", "")).strip(),
                )
            except ValueError:
                continue
            if key in state_keys:
                report.error(f"Duplicate source state: {record_id} and {state_keys[key]}")
            state_keys[key] = record_id

        report.metrics = {
            "session_id": config.get("session_id", ""),
            "depth": config.get("depth", ""),
            "records_total": len(records),
            "accepted_sources": accepted_count,
            "unique_domains": len(domain_counts),
            "source_types": len(source_types),
            "evidence_roles": len(role_set),
            "tier_counts": dict(sorted(tier_counts.items())),
            "largest_domain_share": round(largest_share, 4),
            "gallery_share": round(gallery_share, 4),
            "direct_competitor_share": round(direct_share, 4),
        }
        passed = not report.errors and not (args.strict_warnings and report.warnings)
        payload = {
            "passed": passed,
            "result": "PASS" if passed else "FAIL",
            "session_dir": str(session_dir),
            "metrics": report.metrics,
            "errors": report.errors,
            "warnings": report.warnings,
        }
        print("HDI-OS research validation")
        print(f"Session: {session_dir}")
        for key, value in report.metrics.items():
            print(f"{key}: {value}")
        print(f"Warnings: {len(report.warnings)}")
        for warning in report.warnings:
            print(f"  WARN  {warning}")
        print(f"Errors: {len(report.errors)}")
        for error in report.errors:
            print(f"  ERROR {error}")
        print(f"RESULT: {'PASS' if passed else 'FAIL'}")
        if args.out:
            destination = args.out.expanduser().resolve()
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        return 0 if passed else 1
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
````


---

<a id="source-tooling-visual-qa-readme-md"></a>

## Original source file: `tooling/visual-qa/README.md`

Source SHA-256: `09dc5a148a34c26b15d907d690f5974b0610c436377317b97b3a66fa680da8d9`  
Source bytes: `2619`

# HDI-OS Visual QA Tooling

This optional toolkit creates visual evidence and deterministic audit reports from a running website. It does not replace human visual critique; it makes the critique inspectable.

## Install

```bash
cd tooling/visual-qa
npm install
npm run install:browsers
```

Node 20 or newer is recommended.

## Capture five default viewports

```bash
npm run capture -- --url http://localhost:3000
```

Output:

```text
artifacts/visual-qa/screenshots/
├── base__desktop-1440.png
├── base__desktop-1024.png
├── base__tablet-768.png
├── base__mobile-390.png
├── base__mobile-360.png
└── manifest.json
```

## Capture Arabic and English routes

```bash
npm run capture -- \
  --variant ar=http://localhost:3000/ar \
  --variant en=http://localhost:3000/en
```

Use explicit routes, query strings, or fixture URLs for themes and states. For example:

```bash
npm run capture -- \
  --variant empty=http://localhost:3000/bookings?fixture=empty \
  --variant error=http://localhost:3000/bookings?fixture=error
```

## Override viewports

```bash
npm run capture -- \
  --url http://localhost:3000 \
  --viewports wide:1600x1000,tablet:834x1112,phone:393x852
```

## Horizontal-overflow audit

```bash
npm run overflow -- --url http://localhost:3000 --fail
```

The audit writes `artifacts/visual-qa/overflow-report.json`. `--fail` produces a non-zero exit status when the page or visible elements exceed the viewport, making it suitable for CI.

Some intentional effects—off-canvas menus, carousels, marquees, and transformed decoration—can be reported as offenders. Review the evidence and add a project-specific exception only when the overflow is deliberate, clipped correctly, and does not affect reading or interaction.

## Automated accessibility scan

```bash
npm run a11y -- --url http://localhost:3000 --fail
```

The audit writes `artifacts/visual-qa/accessibility-report.json`. `--fail` exits non-zero for serious or critical axe violations.

Automated scans do not prove full accessibility. Keyboard sequence, focus management, screen-reader meaning, zoom/reflow, touch use, reduced motion, and task completion still need human verification.

## Required review loop

```text
Run site
→ capture routes, languages, viewports, and states
→ inspect screenshots
→ run overflow and accessibility reports
→ write DESIGN-REVIEW.md
→ fix blocking and major issues
→ repeat the same evidence set
```

Do not compare screenshots taken with different data, fonts, viewport dimensions, or animation timing. Stable visual review requires stable fixtures.


---

<a id="source-tooling-visual-qa-accessibility-audit-mjs"></a>

## Original source file: `tooling/visual-qa/accessibility-audit.mjs`

Source SHA-256: `220a879c3f08ac11355ea042fcfff206778c29ac1945d0e8a7e65d270d11d5ac`  
Source bytes: `2494`

````javascript
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import {
  parseArgs,
  parseVariants,
  parseViewports,
  printSharedHelp,
  resolveOutput
} from "./cli.mjs";

const args = parseArgs(process.argv.slice(2));
if (args.help) {
  printSharedHelp("a11y");
  console.log("  --fail                             Exit non-zero on serious/critical violations.\n");
  process.exit(0);
}

const variants = parseVariants(args);
const viewports = parseViewports(args.viewports);
const outputRoot = resolveOutput(args.out, "artifacts/visual-qa");
await fs.mkdir(outputRoot, { recursive: true });
const browser = await chromium.launch();
const report = { generatedAt: new Date().toISOString(), results: [] };

try {
  for (const variant of variants) {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        reducedMotion: "reduce"
      });
      const page = await context.newPage();
      await page.goto(variant.url, { waitUntil: "networkidle" });
      const scan = await new AxeBuilder({ page }).analyze();
      const violations = scan.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.description,
        help: violation.help,
        helpUrl: violation.helpUrl,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          html: node.html,
          failureSummary: node.failureSummary
        }))
      }));
      const severe = violations.filter((item) =>
        ["critical", "serious"].includes(item.impact)
      );
      report.results.push({
        variant: variant.name,
        url: variant.url,
        viewport,
        violations,
        seriousOrCritical: severe.length
      });
      const status = severe.length ? "FAIL" : "PASS";
      console.log(`[${status}] ${variant.name} ${viewport.name}: ${violations.length} violation rule(s), ${severe.length} serious/critical`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}

const destination = path.join(outputRoot, "accessibility-report.json");
await fs.writeFile(destination, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`[report] ${destination}`);

const failed = report.results.some((result) => result.seriousOrCritical > 0);
if (failed && args.fail) process.exit(1);
````


---

<a id="source-tooling-visual-qa-capture-mjs"></a>

## Original source file: `tooling/visual-qa/capture.mjs`

Source SHA-256: `646a59a6df209588443a9a7a32142b1614529d6eeee38e2ddaf5c4c147fb474c`  
Source bytes: `2668`

````javascript
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import {
  parseArgs,
  parseVariants,
  parseViewports,
  printSharedHelp,
  resolveOutput,
  slug
} from "./cli.mjs";

const args = parseArgs(process.argv.slice(2));
if (args.help) {
  printSharedHelp("capture");
  console.log("  --keep-animations                  Do not freeze CSS animations/transitions.\n");
  process.exit(0);
}

const variants = parseVariants(args);
const viewports = parseViewports(args.viewports);
const outputRoot = resolveOutput(args.out, "artifacts/visual-qa/screenshots");
await fs.mkdir(outputRoot, { recursive: true });

const browser = await chromium.launch();
const manifest = {
  generatedAt: new Date().toISOString(),
  variants: [],
  viewports
};

try {
  for (const variant of variants) {
    const variantRecord = { ...variant, captures: [] };
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        reducedMotion: "reduce",
        deviceScaleFactor: 1
      });
      const page = await context.newPage();
      await page.goto(variant.url, { waitUntil: "networkidle" });
      await page.emulateMedia({ reducedMotion: "reduce" });
      if (!args["keep-animations"]) {
        await page.addStyleTag({
          content: `
            *, *::before, *::after {
              animation-delay: 0s !important;
              animation-duration: 0s !important;
              transition-delay: 0s !important;
              transition-duration: 0s !important;
              caret-color: transparent !important;
            }
          `
        });
      }
      await page.evaluate(async () => {
        if (document.fonts?.ready) await document.fonts.ready;
        window.scrollTo(0, 0);
      });
      const filename = `${slug(variant.name)}__${slug(viewport.name)}.png`;
      const destination = path.join(outputRoot, filename);
      await page.screenshot({ path: destination, fullPage: true });
      const title = await page.title();
      variantRecord.captures.push({
        viewport: viewport.name,
        width: viewport.width,
        height: viewport.height,
        title,
        file: filename
      });
      console.log(`[capture] ${variant.name} ${viewport.name} -> ${destination}`);
      await context.close();
    }
    manifest.variants.push(variantRecord);
  }
} finally {
  await browser.close();
}

const manifestPath = path.join(outputRoot, "manifest.json");
await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`[manifest] ${manifestPath}`);
````


---

<a id="source-tooling-visual-qa-cli-mjs"></a>

## Original source file: `tooling/visual-qa/cli.mjs`

Source SHA-256: `71201dac7def4f2300abba3e8c912f89e18404454a24fe37e8b7fb01378f9ce8`  
Source bytes: `3396`

````javascript
import path from "node:path";

export const DEFAULT_VIEWPORTS = [
  { name: "desktop-1440", width: 1440, height: 1000 },
  { name: "desktop-1024", width: 1024, height: 900 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 800 }
];

export function parseArgs(argv) {
  const result = { variants: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) {
      throw new Error(`Unexpected argument: ${token}`);
    }
    const key = token.slice(2);
    const booleanKeys = new Set(["fail", "help", "keep-animations"]);
    if (booleanKeys.has(key)) {
      result[key] = true;
      continue;
    }
    const value = argv[i + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    i += 1;
    if (key === "variant") {
      result.variants.push(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export function parseViewports(value) {
  if (!value) return DEFAULT_VIEWPORTS;
  const parsed = value.split(",").map((part) => {
    const trimmed = part.trim();
    const match = /^(?:(?<name>[a-zA-Z0-9_-]+):)?(?<width>\d+)x(?<height>\d+)$/.exec(trimmed);
    if (!match?.groups) {
      throw new Error(
        `Invalid viewport ${JSON.stringify(trimmed)}. Use name:WIDTHxHEIGHT.`
      );
    }
    const width = Number(match.groups.width);
    const height = Number(match.groups.height);
    if (width < 240 || height < 240 || width > 7680 || height > 7680) {
      throw new Error(`Viewport out of supported range: ${trimmed}`);
    }
    return {
      name: match.groups.name || `${width}x${height}`,
      width,
      height
    };
  });
  const names = new Set();
  for (const viewport of parsed) {
    if (names.has(viewport.name)) {
      throw new Error(`Duplicate viewport name: ${viewport.name}`);
    }
    names.add(viewport.name);
  }
  return parsed;
}

export function parseVariants(args) {
  const variants = [];
  if (args.url) variants.push({ name: "base", url: args.url });
  for (const raw of args.variants || []) {
    const index = raw.indexOf("=");
    if (index < 1 || index === raw.length - 1) {
      throw new Error(`Invalid --variant ${JSON.stringify(raw)}. Use name=https://...`);
    }
    variants.push({ name: slug(raw.slice(0, index)), url: raw.slice(index + 1) });
  }
  if (variants.length === 0) {
    throw new Error("Provide --url or at least one --variant name=url.");
  }
  return variants;
}

export function slug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

export function resolveOutput(value, fallback) {
  return path.resolve(process.cwd(), value || fallback);
}

export function printSharedHelp(command) {
  console.log(`
Usage:
  npm run ${command} -- --url http://localhost:3000
  npm run ${command} -- --variant ar=http://localhost:3000/ar --variant en=http://localhost:3000/en

Options:
  --url URL                         Capture one base URL.
  --variant name=URL                Capture a named language/theme/route variant; repeatable.
  --viewports name:WxH,name:WxH     Override the default five viewports.
  --out DIRECTORY                   Output directory.
  --help                            Show help.
`);
}
````


---

<a id="source-tooling-visual-qa-overflow-audit-mjs"></a>

## Original source file: `tooling/visual-qa/overflow-audit.mjs`

Source SHA-256: `6754cb20dd842c4fb054f3a7505483d8075a4207d29d116ebc8bc16d106be62c`  
Source bytes: `3525`

````javascript
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import {
  parseArgs,
  parseVariants,
  parseViewports,
  printSharedHelp,
  resolveOutput
} from "./cli.mjs";

const args = parseArgs(process.argv.slice(2));
if (args.help) {
  printSharedHelp("overflow");
  console.log("  --fail                             Exit non-zero when overflow is found.\n");
  process.exit(0);
}

const variants = parseVariants(args);
const viewports = parseViewports(args.viewports);
const outputRoot = resolveOutput(args.out, "artifacts/visual-qa");
await fs.mkdir(outputRoot, { recursive: true });
const browser = await chromium.launch();
const report = { generatedAt: new Date().toISOString(), results: [] };

try {
  for (const variant of variants) {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        reducedMotion: "reduce"
      });
      const page = await context.newPage();
      await page.goto(variant.url, { waitUntil: "networkidle" });
      const result = await page.evaluate(() => {
        const rootWidth = document.documentElement.clientWidth;
        const scrollWidth = Math.max(
          document.documentElement.scrollWidth,
          document.body?.scrollWidth || 0
        );
        const offenders = [...document.querySelectorAll("body *")]
          .map((element) => {
            const rect = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            const visible =
              style.display !== "none" &&
              style.visibility !== "hidden" &&
              Number(style.opacity || 1) !== 0 &&
              rect.width > 0 &&
              rect.height > 0;
            const exceedsLeft = rect.left < -1;
            const exceedsRight = rect.right > rootWidth + 1;
            if (!visible || (!exceedsLeft && !exceedsRight)) return null;
            const classes =
              typeof element.className === "string"
                ? element.className.trim().split(/\s+/).filter(Boolean).slice(0, 3)
                : [];
            return {
              tag: element.tagName.toLowerCase(),
              id: element.id || null,
              classes,
              left: Math.round(rect.left * 10) / 10,
              right: Math.round(rect.right * 10) / 10,
              width: Math.round(rect.width * 10) / 10,
              position: style.position,
              overflowX: style.overflowX
            };
          })
          .filter(Boolean)
          .slice(0, 100);
        return {
          viewportWidth: rootWidth,
          documentScrollWidth: scrollWidth,
          horizontalOverflow: scrollWidth > rootWidth + 1,
          offenders
        };
      });
      report.results.push({ variant: variant.name, url: variant.url, viewport, ...result });
      const status = result.horizontalOverflow || result.offenders.length ? "FAIL" : "PASS";
      console.log(`[${status}] ${variant.name} ${viewport.name}: ${result.offenders.length} offender(s)`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}

const destination = path.join(outputRoot, "overflow-report.json");
await fs.writeFile(destination, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`[report] ${destination}`);

const failed = report.results.some(
  (result) => result.horizontalOverflow || result.offenders.length > 0
);
if (failed && args.fail) process.exit(1);
````


---

<a id="source-tooling-visual-qa-package-json"></a>

## Original source file: `tooling/visual-qa/package.json`

Source SHA-256: `ca9eef5f5b5d682092068da1bc1111ada606e1da2b35107654772630ed2016b2`  
Source bytes: `536`

````json
{
  "name": "hdi-os-visual-qa",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "description": "Optional Playwright-based evidence capture and deterministic UI audits for HDI-OS.",
  "engines": {
    "node": ">=20"
  },
  "scripts": {
    "install:browsers": "npx playwright install chromium",
    "capture": "node capture.mjs",
    "overflow": "node overflow-audit.mjs",
    "a11y": "node accessibility-audit.mjs"
  },
  "dependencies": {
    "@axe-core/playwright": ">=4.10.0 <5",
    "playwright": ">=1.50.0 <2"
  }
}
````

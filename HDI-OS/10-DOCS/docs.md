# HDI-OS — Documentation

Package documentation, architecture, workflows, catalogs, release metadata, license, and supporting guidance.

---

<a id="source-changelog-md"></a>

## Original source file: `CHANGELOG.md`

Source SHA-256: `854e14e42af4e72c0dc546b150872b2ac690196e8fffb3391f42b5f3746fe952`  
Source bytes: `1966`

# Changelog

## 1.2.0 — 2026-09-04

- Completed all 18 skills from the v1.1 roadmap: user research, usability testing, brand world, information design, ethical conversion, data visualization, design-system governance, asset production, performance, experiments, trust/privacy/security, localization, creative coding, spatial 3D, inclusive accessibility, SEO/discoverability, design ops/handoff, and product measurement.
- Each new skill includes distinct triggers/non-triggers, evidence requirements, detailed workflows, output contracts, hard gates, handoffs, anti-patterns, OpenAI metadata, and three reusable worksheets.
- Expanded the skill router and every surface profile while preserving progressive activation.
- Added 10 Antigravity specialist agents, bringing the total to 18.
- Added 18 prompt recipes, bringing the total to 30.
- Added 18 optional specialist project templates and the `hdi.py init --extended` mode, bringing the template total to 27.
- Added 54 v1.2 eval cases: positive, boundary, and adversarial coverage for every new skill; total 71.
- Added stricter validator coverage for router integrity, skill/eval coverage, counts, templates, metadata, and instruction budgets.
- Updated source basis, documentation, installation, and production workflow.

## 1.1.0 — 2026-09-04

- Added `web-design-research`, `competitive-experience-intelligence`, `trend-cultural-intelligence`, and `inspiration-synthesis`.
- Added a research-session system with provenance, diversity, safe-browsing, de-fixation, and originality gates.
- Added research CLI commands, two Antigravity research agents, four prompt recipes, four evals, and an 18-skill roadmap.

## 1.0.0 — 2026-09-04

- Added 12 portable Agent Skills for end-to-end digital design work.
- Added Codex and Google Antigravity installation support.
- Added project truth templates, domain packs, reference archetypes, quality gates, evals, preference memory, and browser visual-QA tooling.


---

<a id="source-install-quick-ar-md"></a>

## Original source file: `INSTALL-QUICK-AR.md`

Source SHA-256: `d3a5c088f6d5e4622133b95316ba9a35eab8438891a39bf0db36db4d3eef7c76`  
Source bytes: `2478`

# التثبيت السريع — HDI-OS 1.2.0

## 1) افحص الحزمة

```bash
python hdi.py validate
```

لازم تظهر `RESULT: PASS`.

## 2) ثبّت لـCodex وAntigravity

```bash
python hdi.py install \
  --target both \
  --scope project \
  --project-dir "/المسار/إلى/مشروعك" \
  --install-project-rules \
  --install-custom-agents
```

المثبت لا يستبدل الملفات الموجودة بدون `--force`.

## 3) أنشئ ملفات حقيقة المشروع

```bash
python hdi.py init \
  --project-dir "/المسار/إلى/مشروعك" \
  --name "اسم المشروع" \
  --owner "Hyzex"
```

لإنشاء الـ18 Workbook المتخصصة أيضًا:

```bash
python hdi.py init \
  --project-dir "/المسار/إلى/مشروعك" \
  --name "اسم المشروع" \
  --owner "Hyzex" \
  --extended
```

استخدم `--extended` للمشاريع الكبيرة فقط، أو احذف/اترك Draft للملفات غير المطلوبة.

## 4) أول أمر للموديل

```text
Use design-director. Read project truth and DECISIONS.md. Classify the surface,
user job, languages/devices, evidence, risk, and existing system. Select one
primary domain pack and activate only skills that can change the decision.

Do not code an ambitious direction before research/originality and direction
gates. After approval, produce applicable specialist contracts, test high-risk
journeys, implement real truth, run design-ops-handoff, and finish with rendered
visual-qa-refinement. Fix every blocking and major finding.
```

## 5) مهارات البحث من الإنترنت

أنشئ جلسة بحث عند الحاجة:

```bash
python hdi.py research \
  --project-dir "/المسار/إلى/مشروعك" \
  --title "Website research" \
  --surface landing-page \
  --industry "مجال المشروع" \
  --audience "الجمهور" \
  --market Egypt \
  --language ar-EG \
  --depth standard \
  --question "ما القرار التصميمي الذي نحتاج دليلًا حديثًا له؟" \
  --decision "اختيار الاتجاه أو تجربة الاستخدام"
```

ثم:

```bash
python hdi.py research-validate --session-dir "/path/to/research/session"
```

## 6) المرجع الكامل

اقرأ `orchestration/ROUTER.md` لاختيار المهارات، و`docs/V1.2-SPECIALIST-SKILLS.md` لفهم الطبقات الجديدة، و`prompts/` لأوامر التشغيل الجاهزة.


---

<a id="source-license-txt"></a>

## Original source file: `LICENSE.txt`

Source SHA-256: `0cb0e54779cf724150d4f7ac06d0caa21a62e7a1427589c0548b9d56faf6a1ef`  
Source bytes: `316`

````text
Copyright (c) 2026 Hyzex. All rights reserved.

This package is prepared for Hyzex internal and client-project use. Third-party
names and links in SOURCES.md remain the property of their respective owners.
No third-party website artwork, font files, screenshots, or proprietary assets
are bundled with this package.
````


---

<a id="source-manifest-json"></a>

## Original source file: `MANIFEST.json`

Source SHA-256: `4319881ffb705415515add0e892f66046429b473818b81923808fd7c32a9c0ed`  
Source bytes: `64565`

````json
{
  "name": "Hyzex Design Intelligence OS",
  "version": "1.2.0",
  "counts": {
    "files_excluding_manifest": 327,
    "skills": 34,
    "domain_packs": 8,
    "antigravity_custom_agents": 18,
    "antigravity_workspace_rules": 1,
    "reference_archetypes": 20,
    "evaluation_cases": 71,
    "prompt_recipes": 30,
    "openai_skill_metadata_files": 34,
    "research_templates": 7,
    "research_schemas": 2
  },
  "files": [
    {
      "path": "AGENTS.md",
      "bytes": 10971,
      "sha256": "2cde533ea1ddf747e9a2dfddd5909be0c330568435ee063d5240b7125e07a5c7",
      "lines": 150
    },
    {
      "path": "CHANGELOG.md",
      "bytes": 1966,
      "sha256": "854e14e42af4e72c0dc546b150872b2ac690196e8fffb3391f42b5f3746fe952",
      "lines": 25
    },
    {
      "path": "INSTALL-QUICK-AR.md",
      "bytes": 2478,
      "sha256": "d3a5c088f6d5e4622133b95316ba9a35eab8438891a39bf0db36db4d3eef7c76",
      "lines": 84
    },
    {
      "path": "LICENSE.txt",
      "bytes": 316,
      "sha256": "0cb0e54779cf724150d4f7ac06d0caa21a62e7a1427589c0548b9d56faf6a1ef",
      "lines": 6
    },
    {
      "path": "README.en.md",
      "bytes": 1892,
      "sha256": "fa8ea8b5cc24eba00baffc5e360697e317b97883586875c3a3e18be9a5bf10ba",
      "lines": 43
    },
    {
      "path": "README.md",
      "bytes": 5248,
      "sha256": "414a76ee5face626591d81fb70f54acbcc450fc663b6328e5600a919cea3aafe",
      "lines": 142
    },
    {
      "path": "SOURCES.md",
      "bytes": 4967,
      "sha256": "3c900da6edd30ba67576ed10275410c4bef0b736ba501ca8ad88d2fafabc2ed5",
      "lines": 74
    },
    {
      "path": "VERSION",
      "bytes": 6,
      "sha256": "1e5b51cde515396a9fa762909cf8ca6584ccc564b325d2eebeea76175fe95c4d"
    },
    {
      "path": "docs/ARCHITECTURE.md",
      "bytes": 2152,
      "sha256": "06808df11cf44926216f5db1231bf4f53caa5e3254e0267830a5560940a70ec0",
      "lines": 41
    },
    {
      "path": "docs/CUSTOMIZATION.md",
      "bytes": 2071,
      "sha256": "2c094fa87aea4a1ba46d5cf31c227edf48f6e84ffc561137075bff2f1a93a82e",
      "lines": 48
    },
    {
      "path": "docs/NEXT-SKILLS-ROADMAP.md",
      "bytes": 1637,
      "sha256": "0fc7f8dca2885d3d2be5faf6e2bb42148e2ff4ff111ab003e82c090634804a42",
      "lines": 21
    },
    {
      "path": "docs/PROMPT-RECIPES.md",
      "bytes": 2824,
      "sha256": "a94771e1b88c3a24ff9f5b80462ad1b40c9d2c2f0053a0e61417f67ab38c6913",
      "lines": 74
    },
    {
      "path": "docs/RESEARCH-AND-INSPIRATION.md",
      "bytes": 5593,
      "sha256": "8e416292e8896c06e53b61a040e8b2987e7b2c77aabdcd35592aaf365ebd419c",
      "lines": 133
    },
    {
      "path": "docs/SKILLS-CATALOG.md",
      "bytes": 13352,
      "sha256": "b18e84635f3cb91e33c7445d33488e8f3ad8bc69947db66c4ec0645ee2faf974",
      "lines": 81
    },
    {
      "path": "docs/START-HERE.md",
      "bytes": 4136,
      "sha256": "47e68b70e467149bd74506f1dec25e956fa14baee667cb9dc42dfb60f016ca82",
      "lines": 107
    },
    {
      "path": "docs/V1.2-SPECIALIST-SKILLS.md",
      "bytes": 4029,
      "sha256": "da346c8a9eb81db8f29a54c59e72706251f4cb5f2b0864f5266f05b60192569b",
      "lines": 61
    },
    {
      "path": "docs/WORKFLOW.md",
      "bytes": 2644,
      "sha256": "4c8219ace67094dbdde990cc172d2e235960597d05930d596a9608d679a2a9d3",
      "lines": 45
    },
    {
      "path": "domain-packs/README.md",
      "bytes": 400,
      "sha256": "26dd5ab4bc29d1020d090ebff45cf6f40a63073c1b32fbe339d7176dc070571e",
      "lines": 5
    },
    {
      "path": "domain-packs/data-enterprise/PACK.md",
      "bytes": 2431,
      "sha256": "21cb4b10599fc8569cd7b7090a85efd9ed704e78ffb26c75e054c1352679aa0e",
      "lines": 79
    },
    {
      "path": "domain-packs/ecommerce/PACK.md",
      "bytes": 2450,
      "sha256": "f41b71a7b90b34f23874af4799adf49ad347a462e15132d52463ec6be2393eca",
      "lines": 76
    },
    {
      "path": "domain-packs/editorial-portfolio/PACK.md",
      "bytes": 2376,
      "sha256": "f16326a054ea071ea885b95423265c26222abf337261f5af8bebc8ccb66ec4cc",
      "lines": 73
    },
    {
      "path": "domain-packs/immersive-web/PACK.md",
      "bytes": 2453,
      "sha256": "e02c51ca73252a0b3f0622df71034f660fa034a2f384ee8cde6464cd12aad0bc",
      "lines": 67
    },
    {
      "path": "domain-packs/landing-pages/PACK.md",
      "bytes": 3403,
      "sha256": "e22cb5c12e6a4adb20c7a5087bc8632fdf612a932b3ca2075ecf9e05a5dcc5fe",
      "lines": 95
    },
    {
      "path": "domain-packs/mobile-app/PACK.md",
      "bytes": 2497,
      "sha256": "1c7922f7267e3028aad0b223f40e953caa3caa4a02b9d9e0b1158e12a2101d2a",
      "lines": 71
    },
    {
      "path": "domain-packs/saas-product/PACK.md",
      "bytes": 3115,
      "sha256": "268179584b913255c01e611655c4a0607e38df51cde61aefbd3eb62e03e32db0",
      "lines": 94
    },
    {
      "path": "domain-packs/service-business/PACK.md",
      "bytes": 2553,
      "sha256": "677ef9432f219703d750edd848e5d88327b9e010cae305a6b9173982eb441bd2",
      "lines": 73
    },
    {
      "path": "evals/COMPARISON.template.md",
      "bytes": 657,
      "sha256": "7c94391c558593e6d8ed17c651dbad397e0de909716257aaa350c7056e8e5516",
      "lines": 36
    },
    {
      "path": "evals/RUNBOOK.md",
      "bytes": 2258,
      "sha256": "7f8654f12335330a2ad0fe72ecc6a248b922f4c41f2ee4fb36443e3236d8388b",
      "lines": 67
    },
    {
      "path": "evals/manifest.json",
      "bytes": 96082,
      "sha256": "95b316ffb57be5d0397ba4e37b9a079b62878c0fe301190e56d845dd2f2e1b66",
      "lines": 2061
    },
    {
      "path": "examples/sparkle-auto-mini/BRAND.md",
      "bytes": 2366,
      "sha256": "4a6607bfe239370812f8c64ac4cb7603aab4441377dc598bf6c17c8c454fcf88",
      "lines": 63
    },
    {
      "path": "examples/sparkle-auto-mini/CONTENT.md",
      "bytes": 1831,
      "sha256": "a3ee01a8d344c2be115963afc17d365b1f3c7d05d74ebffeac3186e79716e1ca",
      "lines": 50
    },
    {
      "path": "examples/sparkle-auto-mini/DECISIONS.md",
      "bytes": 1606,
      "sha256": "ae000ac061bfb3d91f94368cf0d6aa0fa50a8ca8e28ac62f2033e768038cc89d",
      "lines": 16
    },
    {
      "path": "examples/sparkle-auto-mini/DESIGN-REVIEW.md",
      "bytes": 1615,
      "sha256": "79aacb27499d0bab10f8fa098ed88cb42f4420b7658badab9fec435c2659ae9a",
      "lines": 52
    },
    {
      "path": "examples/sparkle-auto-mini/DESIGN.md",
      "bytes": 7962,
      "sha256": "fe1716f759a6eb46190a099186db7e08200c19eaf6fb6fc5de7cdee47e9e7fd0",
      "lines": 193
    },
    {
      "path": "examples/sparkle-auto-mini/MOTION.md",
      "bytes": 1966,
      "sha256": "1910f0747a33c9d80e1c7a07fb2770b08349dcdf2323e073e03255e40351c1d8",
      "lines": 58
    },
    {
      "path": "examples/sparkle-auto-mini/PRODUCT.md",
      "bytes": 2808,
      "sha256": "87154a7223b112b84d89d9e973d17d50df82d1b015df0849b2733f1fcd6b028d",
      "lines": 62
    },
    {
      "path": "examples/sparkle-auto-mini/QUALITY-GATES.md",
      "bytes": 2223,
      "sha256": "4e2ab1f91351f16fdb05949146efbf105d7a8cd0561df93674164e50cd21fce5",
      "lines": 48
    },
    {
      "path": "examples/sparkle-auto-mini/README.md",
      "bytes": 1093,
      "sha256": "72063e3a6a275656614c29618b8dd67b3979e937627be7238738bb74794562b7",
      "lines": 24
    },
    {
      "path": "examples/sparkle-auto-mini/REFERENCE-BRIEF.md",
      "bytes": 1966,
      "sha256": "d1ba8b1bc910f5e8b1764d9c12443df676151583c51e03cf66b8377e51a1882e",
      "lines": 33
    },
    {
      "path": "hdi.py",
      "bytes": 2258,
      "sha256": "6cf19c9850f685942fcf2201a0a6cd370d4f8767a30fe658deb4e1496ef681e0",
      "lines": 71
    },
    {
      "path": "integrations/antigravity/README.md",
      "bytes": 2465,
      "sha256": "1b7b261d09cffafd014645707f0435a150250c4609205b33e7d6e86fb9d85753",
      "lines": 57
    },
    {
      "path": "integrations/antigravity/agents/hdi-brand-world-director.md",
      "bytes": 1051,
      "sha256": "bac9fbb3908b36b94fe1741d1ddc8294da0c4ef33df2d6d73a10dd307e5725d1",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-content-conversion-strategist.md",
      "bytes": 1073,
      "sha256": "d16361ee7c985691c45e6b1a2ad1056501cfe1998edbc05db03d58f82456f427",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-creative-technologist.md",
      "bytes": 1092,
      "sha256": "3bf7fefc0a8ee6396d6961fc8d52a078d6ce96b65fa3f611b25d9ad1362d4016",
      "lines": 24
    },
    {
      "path": "integrations/antigravity/agents/hdi-data-experience-designer.md",
      "bytes": 1034,
      "sha256": "828aab6a01da499e3bfca7a1a2bdb133c18e14330b3c9b61a9ad8e355b59714e",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-design-critic.md",
      "bytes": 1389,
      "sha256": "be84a7a4347048f11c45a17c0705ee9bdab2a252458393434221b1bad67ea630",
      "lines": 29
    },
    {
      "path": "integrations/antigravity/agents/hdi-design-director.md",
      "bytes": 2187,
      "sha256": "0b179d02aea93739ee5683c8a0e3fc6a17fbc7342fc191786659b1bd6b8f9362",
      "lines": 40
    },
    {
      "path": "integrations/antigravity/agents/hdi-design-engineer.md",
      "bytes": 1274,
      "sha256": "5c0f982cdec27a075c20e58bc0ac5fc6f2b318af43a159d0a16f136ca33047cf",
      "lines": 28
    },
    {
      "path": "integrations/antigravity/agents/hdi-design-system-governor.md",
      "bytes": 1018,
      "sha256": "12f10dbd91894d3b1e6e02814617ce3309b6c77a448b7513794223577f13c0b2",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-experiment-measurement-lead.md",
      "bytes": 1027,
      "sha256": "100f504b37dc81775940ce137446ee8e5fcf8af21a4c49cc6e3368de004cf5de",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-inspiration-strategist.md",
      "bytes": 1950,
      "sha256": "955f846a55b32d434f582023e9b5f0901b4b6a4c462b9fb95ade4e2a484a992a",
      "lines": 36
    },
    {
      "path": "integrations/antigravity/agents/hdi-motion-director.md",
      "bytes": 1134,
      "sha256": "897fc8bbbe170734322b29ed1dfe50cb2687fb2765efcd3bdfb4646544959c46",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-performance-experience-engineer.md",
      "bytes": 1057,
      "sha256": "d29222b048513426b031de7b06137c8d7be074400a89fa1bbebdb78385e75bc9",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-trust-localization-specialist.md",
      "bytes": 1088,
      "sha256": "37a692104cf66e5c19d4511f0afcd87b1c5bc6fca9960e708494a51094773ef4",
      "lines": 24
    },
    {
      "path": "integrations/antigravity/agents/hdi-usability-evaluator.md",
      "bytes": 1053,
      "sha256": "e1d76d43e65447a20513cc27cf6b2f8dc978ae13cb483cd6817d3b224e9947d6",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-user-insights-researcher.md",
      "bytes": 1057,
      "sha256": "f4ceb7ba133cc8bb8a99d9447e5fab7fa33ec71aa11ee43e2e7a6a2d6823e934",
      "lines": 23
    },
    {
      "path": "integrations/antigravity/agents/hdi-ux-architect.md",
      "bytes": 1248,
      "sha256": "c148c0d14dc0d695e84b4dd19532e054f68d774ca580a827f40687ce055690a4",
      "lines": 27
    },
    {
      "path": "integrations/antigravity/agents/hdi-visual-designer.md",
      "bytes": 1336,
      "sha256": "c703858e4a4166b27b0d631a69236f1ac28de16f1eab8d6fc38471572c4e3382",
      "lines": 29
    },
    {
      "path": "integrations/antigravity/agents/hdi-web-researcher.md",
      "bytes": 1907,
      "sha256": "932bb7e66650dcf0d814c66cfcc62ece052d5e8b9c8bfbe81efca74e38c810d1",
      "lines": 34
    },
    {
      "path": "integrations/antigravity/rules/hdi-os.md",
      "bytes": 3402,
      "sha256": "b42c3531a2182b600bae40ac219d5b245240a8b22bc1083db06be99ecb1b718f",
      "lines": 46
    },
    {
      "path": "integrations/codex/AGENTS.snippet.md",
      "bytes": 1748,
      "sha256": "f73e5ab60c911d5d8a39301749e3cb43278f71764afe7c2b1c1fbe7b867ce59b",
      "lines": 14
    },
    {
      "path": "integrations/codex/README.md",
      "bytes": 2280,
      "sha256": "92c9d065b6c875c05be7b162f72ff1626a0442ea1de71c177523855cf6431d25",
      "lines": 57
    },
    {
      "path": "memory/README.md",
      "bytes": 539,
      "sha256": "a2ff0826793d681f2b4ed2d7d936e925617a95b5896a31490153b54169cbbc58",
      "lines": 12
    },
    {
      "path": "memory/design-decision.schema.json",
      "bytes": 989,
      "sha256": "4b34639fcad7e87fdc8b655b852eb5615532ddc9dcd7014f05f8a79b5e007a69",
      "lines": 61
    },
    {
      "path": "memory/preference-event.example.jsonl",
      "bytes": 546,
      "sha256": "1bfb84052e208020b21d019acc24517a2ecf811529e635108be0e30ba98c23be",
      "lines": 1
    },
    {
      "path": "memory/preference-event.schema.json",
      "bytes": 1088,
      "sha256": "36b0ee479dd036793e21488161363de0d0023c3755464d294f2952442e95618f",
      "lines": 67
    },
    {
      "path": "orchestration/ROUTER.md",
      "bytes": 7544,
      "sha256": "f6d5381784270981aa4fbef9b4dc4e563ecb0352750f222976655e4d48ce4bca",
      "lines": 118
    },
    {
      "path": "orchestration/router.json",
      "bytes": 19276,
      "sha256": "89dabc67446afd2fdd0a1bf35a965377ba48235e4d7c237257a835aaa37882c1",
      "lines": 602
    },
    {
      "path": "project-templates/ACCESSIBILITY.template.md",
      "bytes": 1224,
      "sha256": "eab83ce751669764fd55a2f28fdd92296441b7af02a502629e0de3d0d14d053f",
      "lines": 77
    },
    {
      "path": "project-templates/ASSET-PRODUCTION.template.md",
      "bytes": 1209,
      "sha256": "fc68823bc0d488df3b2df6f4c35a613c235849b1497a519af10724c4214a939d",
      "lines": 77
    },
    {
      "path": "project-templates/BRAND-WORLD.template.md",
      "bytes": 1355,
      "sha256": "46a650315f82b8c9d778d3fc94c78bf600cdcc859b725711645d75c4100b6c6b",
      "lines": 86
    },
    {
      "path": "project-templates/BRAND.template.md",
      "bytes": 2165,
      "sha256": "f40259902c4533656a36a5026af8875f908a710ea43c548b14a3a583a9b5f6eb",
      "lines": 108
    },
    {
      "path": "project-templates/CONTENT-ARCHITECTURE.template.md",
      "bytes": 1201,
      "sha256": "d4b6f4dd4bfd6d6caa2e407702698c2a43f0411a9f31db57d3bdb5f2ad36b135",
      "lines": 77
    },
    {
      "path": "project-templates/CONTENT.template.md",
      "bytes": 1650,
      "sha256": "22ceb99f6b29794ecee4ca5c6b3a9303bf55e31005a8a0c274be81227ed3e35e",
      "lines": 86
    },
    {
      "path": "project-templates/CONVERSION-JOURNEY.template.md",
      "bytes": 1323,
      "sha256": "3a706eb4d1f49320de5ec7156299b440605fa5ba852d087d0df3aa863fff3366",
      "lines": 86
    },
    {
      "path": "project-templates/CREATIVE-LAB.template.md",
      "bytes": 1190,
      "sha256": "efc4a72bad1917da1fd65a1f9e68049a5cb5d42d7850b06b5ebcf85bcb955124",
      "lines": 77
    },
    {
      "path": "project-templates/DATA-VISUALIZATION.template.md",
      "bytes": 1221,
      "sha256": "0c4789a512defedbf44550a4d532ab1b634ac91e16d7a34b23da3e778045bd97",
      "lines": 77
    },
    {
      "path": "project-templates/DECISIONS.template.md",
      "bytes": 897,
      "sha256": "5b2579e329cc4036c52e7966b43358cabf2a679ebc465214f22d747dadc1aa49",
      "lines": 34
    },
    {
      "path": "project-templates/DESIGN-REVIEW.template.md",
      "bytes": 1044,
      "sha256": "f032b82eff3aee7927f7868ac08c92a791b5afd99d3b99c59be383d02beb2755",
      "lines": 38
    },
    {
      "path": "project-templates/DESIGN-SYSTEM-GOVERNANCE.template.md",
      "bytes": 1208,
      "sha256": "7f3595e570fcd925fa99e2788989c335be3fab4bef92fd02750085b9d4a3df92",
      "lines": 77
    },
    {
      "path": "project-templates/DESIGN.template.md",
      "bytes": 5773,
      "sha256": "22fc2f8bfdb5d6848895f021da8d46d9ec2f97109aab60cac17d8231cfcce33d",
      "lines": 257
    },
    {
      "path": "project-templates/DISCOVERABILITY.template.md",
      "bytes": 1204,
      "sha256": "3cb33f80b0640aef7e14d0de81d53abc0717b93135a400f521eb49ec963fcb39",
      "lines": 77
    },
    {
      "path": "project-templates/EXPERIMENT.template.md",
      "bytes": 1204,
      "sha256": "2d8cabff4690b85eaeea11491debc7c101bf39ae2fc3fbd97235e32c112f5c36",
      "lines": 77
    },
    {
      "path": "project-templates/HANDOFF.template.md",
      "bytes": 1211,
      "sha256": "bbe1a9f32a00b88748dea92d319c1e08c8d3045ba9e7707c3348d1d38cd4a946",
      "lines": 77
    },
    {
      "path": "project-templates/LOCALIZATION.template.md",
      "bytes": 1188,
      "sha256": "41d7dbab3142cb3007a670175ef23052f1a39fb4632cc519d21500912cd7273e",
      "lines": 77
    },
    {
      "path": "project-templates/MEASUREMENT.template.md",
      "bytes": 1190,
      "sha256": "94510760ff4e6ca5ef8f9c4c30153677f2b7e71f0cdd5a77d04339cc632e8688",
      "lines": 77
    },
    {
      "path": "project-templates/MOTION.template.md",
      "bytes": 2342,
      "sha256": "85c81970ce94dd8aed9f25feb09e8f64c195ea4495991f880d3938e4710402e1",
      "lines": 97
    },
    {
      "path": "project-templates/PERFORMANCE.template.md",
      "bytes": 1188,
      "sha256": "098de2d6849926e2886abcec1f49772e417013a4cdbecc77927dd5a8d977142e",
      "lines": 77
    },
    {
      "path": "project-templates/PRODUCT.template.md",
      "bytes": 2496,
      "sha256": "04aea6d95c36929a2fd259671472ebbfc5ef329e7e23354cdd265f5da274531f",
      "lines": 146
    },
    {
      "path": "project-templates/QUALITY-GATES.template.md",
      "bytes": 4609,
      "sha256": "b4ed1a466ff89253d2cfd44930f51feae00191edf3bd50f1c503df0c80e50817",
      "lines": 105
    },
    {
      "path": "project-templates/REFERENCE-BRIEF.template.md",
      "bytes": 1537,
      "sha256": "34655e36dee05798ded81028cf53e353461ebe075d72eeaadab824d414396787",
      "lines": 80
    },
    {
      "path": "project-templates/SPATIAL-3D.template.md",
      "bytes": 1195,
      "sha256": "7ee55b46099bfb70a1a95684b41bce5560fdd1cd1824e77c8950874a836e08a3",
      "lines": 77
    },
    {
      "path": "project-templates/TRUST-SECURITY.template.md",
      "bytes": 1208,
      "sha256": "fc75e5578f97c0959604dd75e60e7b4f6fc28074a5e882108b405da2a59ae054",
      "lines": 77
    },
    {
      "path": "project-templates/USABILITY-TEST.template.md",
      "bytes": 1183,
      "sha256": "76335dd89a5f934fe7d5b3ebd58a4ee403dab43da183572a549be137d64bd7df",
      "lines": 77
    },
    {
      "path": "project-templates/USER-RESEARCH-SYNTHESIS.template.md",
      "bytes": 1234,
      "sha256": "07844f82664f192d94288a95381ed971b5e78bf34ee08ee6b4c44bb967003140",
      "lines": 77
    },
    {
      "path": "prompts/00-NEW-PROJECT.md",
      "bytes": 1307,
      "sha256": "f671f6fd8e2e3a285ce3276a785e75ec1b5b17f5637da88cec67b35c0cf7f6c4",
      "lines": 35
    },
    {
      "path": "prompts/01-REDESIGN.md",
      "bytes": 1253,
      "sha256": "e8e4c23f181c53e8af3285814f09c15177731826d2f75a3764dc285908e8b51e",
      "lines": 31
    },
    {
      "path": "prompts/02-LANDING-PAGE.md",
      "bytes": 1735,
      "sha256": "bd952bdb8a867090fe4e1e349cc9254a28298eeff83852e55b3705b925f29433",
      "lines": 32
    },
    {
      "path": "prompts/03-PRODUCT-UI.md",
      "bytes": 1346,
      "sha256": "2607792e02f4fd7d11e4b7343d2686efdc3507730047bf1cc236ddace433dd0e",
      "lines": 28
    },
    {
      "path": "prompts/04-REFERENCE-ANALYSIS.md",
      "bytes": 1189,
      "sha256": "60b36b2ecb90ba88037579d5f1435d319f99d3af798851246ef3af9998230e77",
      "lines": 25
    },
    {
      "path": "prompts/05-MOTION-3D.md",
      "bytes": 1304,
      "sha256": "09f3a05e3e9637f262cefd7598be6bea33b93bf7f3a913aff09303af105cff33",
      "lines": 28
    },
    {
      "path": "prompts/06-FINAL-REVIEW.md",
      "bytes": 1420,
      "sha256": "cae5e39d5888e883fca4c1df5cceb20f360c3177d41295161913f771bdf55088",
      "lines": 30
    },
    {
      "path": "prompts/07-LEARN-TASTE.md",
      "bytes": 1211,
      "sha256": "eebcdefc44012ace8c0c226d6e22d9edb5c1e407aba8473ca6ca5ef63540d5a4",
      "lines": 23
    },
    {
      "path": "prompts/08-WEB-RESEARCH-SPRINT.md",
      "bytes": 1612,
      "sha256": "a8ad3627994a6115ba39571c2a7bfe6952880c97d4cd42ee211276e3bca28e8e",
      "lines": 38
    },
    {
      "path": "prompts/09-COMPETITOR-EXPERIENCE-AUDIT.md",
      "bytes": 1272,
      "sha256": "b9a83521ef03560c6dc492d671cdc6f253ddbe5dddc3e9c8bce4b98db1c20523",
      "lines": 33
    },
    {
      "path": "prompts/10-INSPIRATION-SYNTHESIS.md",
      "bytes": 1577,
      "sha256": "bcf3cf2cfcfa4fa199ba16509e7fe38d3c36f9b1b80d7b448916878797f4bad6",
      "lines": 37
    },
    {
      "path": "prompts/11-TREND-CULTURE-SCAN.md",
      "bytes": 1518,
      "sha256": "a6d69fdea7b8b4050cd0a21b0147b65b692dc1e74f1197cc8531608f54370ae0",
      "lines": 36
    },
    {
      "path": "prompts/12-USER-RESEARCH-SYNTHESIS.md",
      "bytes": 825,
      "sha256": "3b43befb6b07a96435c4130dbe88f804c641bf47866cd0baad08dcd211f16c86",
      "lines": 11
    },
    {
      "path": "prompts/13-PROTOTYPE-USABILITY-TEST.md",
      "bytes": 776,
      "sha256": "c38bff23bc97d3829b695a8055fd843da8039fba35088ff2eee72de28685c760",
      "lines": 11
    },
    {
      "path": "prompts/14-BRAND-WORLD.md",
      "bytes": 766,
      "sha256": "e4525263ad653f4c097240f92f7ef9303c6d986291cb4c5520bcd6aee8ae36c1",
      "lines": 11
    },
    {
      "path": "prompts/15-CONTENT-INFORMATION-DESIGN.md",
      "bytes": 744,
      "sha256": "915cadc5d20898b5268b01f505679922d89ca4d6b47fbcd951ace17bd2010472",
      "lines": 11
    },
    {
      "path": "prompts/16-CONVERSION-BEHAVIOR.md",
      "bytes": 725,
      "sha256": "7307239696efa6dd5055ad606d235dcb496372341cdf5f074e8adb1638ba752f",
      "lines": 11
    },
    {
      "path": "prompts/17-DATA-VISUALIZATION.md",
      "bytes": 757,
      "sha256": "46db89bbbea03fb6cebd3b5d644c5e50f77c206b24b597055598ed8e4a818955",
      "lines": 11
    },
    {
      "path": "prompts/18-DESIGN-SYSTEM-GOVERNANCE.md",
      "bytes": 769,
      "sha256": "4f4bcfd56ec60f6e37fd3c6da683f8a4ee4cf7013c44c3e776a30899bbd06b2e",
      "lines": 11
    },
    {
      "path": "prompts/19-ASSET-PRODUCTION.md",
      "bytes": 786,
      "sha256": "45e06ca1e52f308b9c1d9da9f07b5c34350851c37e64149fc9e433d34764732f",
      "lines": 11
    },
    {
      "path": "prompts/20-PERFORMANCE-PERCEIVED-QUALITY.md",
      "bytes": 751,
      "sha256": "db57354e60a810e97e49e745c435092dc71aae883dc55a74d1504bb8b000e0d2",
      "lines": 11
    },
    {
      "path": "prompts/21-EXPERIMENT-OPTIMIZATION.md",
      "bytes": 758,
      "sha256": "0ad96ae70719f75582e9217d633182245d94fff15cc4182e0614dafc099e8b01",
      "lines": 11
    },
    {
      "path": "prompts/22-TRUST-PRIVACY-SECURITY-UX.md",
      "bytes": 761,
      "sha256": "7f9fb0b781d0214d64e8aa18587e4e8ded4b24e93f72291876ec1fe97d3c657e",
      "lines": 11
    },
    {
      "path": "prompts/23-LOCALIZATION-CULTURALIZATION.md",
      "bytes": 774,
      "sha256": "c346807e6c2ad3f7cf0d560db9e4346b5840179fc02ade31b1a3f54b10bfbbb0",
      "lines": 11
    },
    {
      "path": "prompts/24-CREATIVE-CODING-LAB.md",
      "bytes": 773,
      "sha256": "a3f606c1f0b3d991c3b803f0e49ded14117acfab4a5419879b7d3eac2c1a75dc",
      "lines": 11
    },
    {
      "path": "prompts/25-SPATIAL-3D-WORLD.md",
      "bytes": 751,
      "sha256": "779725dc854279abb8eb00163a4ee5c666fa0aadc3aad5321396088db5f96b76",
      "lines": 11
    },
    {
      "path": "prompts/26-INCLUSIVE-ACCESSIBILITY.md",
      "bytes": 786,
      "sha256": "d2e9c1738a248e04607468e281a0807dbbadc46e300bc5a292c2e17c716416b6",
      "lines": 11
    },
    {
      "path": "prompts/27-SEO-DISCOVERABILITY.md",
      "bytes": 796,
      "sha256": "f317a40cb83556e625a3bca1d58d0181e542669b043a16b850a059a1b581b42f",
      "lines": 11
    },
    {
      "path": "prompts/28-DESIGN-OPS-HANDOFF.md",
      "bytes": 747,
      "sha256": "509daf4863ab12a2cabee23b103e249722f55281d4a2231d0310616f35167d71",
      "lines": 11
    },
    {
      "path": "prompts/29-PRODUCT-METRICS-INSTRUMENTATION.md",
      "bytes": 763,
      "sha256": "6a99e89fb66f55ed267b2868c6b894a1584ba46b863658a1c5ad3e8962ef6e0d",
      "lines": 11
    },
    {
      "path": "prompts/README.md",
      "bytes": 1797,
      "sha256": "33da25e7aed8d924fd9c7b9c45e099cb95837a3b95f5548b0bad2d947a9fe191",
      "lines": 32
    },
    {
      "path": "reference-library/README.md",
      "bytes": 1533,
      "sha256": "e0d21e89a456b72eec13c26eb3b818c25cfd74938800d801d51f5917d802f0bf",
      "lines": 32
    },
    {
      "path": "reference-library/RESEARCH-QUESTIONS.md",
      "bytes": 1407,
      "sha256": "a85f14be1cf39696ec50be1c57f929cba91ef45889eaa3cbb5a62f28cf15fb7f",
      "lines": 40
    },
    {
      "path": "reference-library/SOURCE-CATALOG.md",
      "bytes": 4165,
      "sha256": "a44ea16bda508ce0da1315904698f0533cd43a2b56ea007fd1626f17602eb23b",
      "lines": 86
    },
    {
      "path": "reference-library/archetypes.json",
      "bytes": 28416,
      "sha256": "66745fce367fefa5e488987f137b56112a3151a842b91f0b68130ca5c9913e37",
      "lines": 632
    },
    {
      "path": "reference-library/reference-card.schema.json",
      "bytes": 2510,
      "sha256": "670591be647ce4faaed27766475c602e7f826150b1216883a3e9d4162a5a3385",
      "lines": 136
    },
    {
      "path": "reference-library/reference-card.template.json",
      "bytes": 733,
      "sha256": "b0dc9face7bd83b17ba898e2da9bea8046858250680a7236b4113a8dc1040ad6",
      "lines": 36
    },
    {
      "path": "research-system/README.md",
      "bytes": 2652,
      "sha256": "acc5549c282a49fb06fcd5800645ce0ffa4864f5d7f1fac9f5fdb42ecc08bf4c",
      "lines": 73
    },
    {
      "path": "research-system/research-config.schema.json",
      "bytes": 2774,
      "sha256": "9c82982a9fa56afd537801b7d21565447032f041826b86ff78648cc03e9fe3c1",
      "lines": 143
    },
    {
      "path": "research-system/research-depths.json",
      "bytes": 620,
      "sha256": "4f037dff3b9cffc59623d747b73c752a01daf93ac651d93e3b38b63e9ee81246",
      "lines": 26
    },
    {
      "path": "research-system/source-record.example.jsonl",
      "bytes": 928,
      "sha256": "f74d74c0f486ff0f553d16847db9a00e1e3e1e9f96cefd464ed4bfb30b33bf86",
      "lines": 1
    },
    {
      "path": "research-system/source-record.schema.json",
      "bytes": 4095,
      "sha256": "7f500a1348d6e3816938a4bc2e08d53f470226e97ac1422d58dca7322573db87",
      "lines": 219
    },
    {
      "path": "research-system/templates/COMPETITIVE-MATRIX.template.md",
      "bytes": 492,
      "sha256": "18a04a6867bfaa14a232b0c91b13c002941856986f035deb3bdd911c26bb9996",
      "lines": 14
    },
    {
      "path": "research-system/templates/EVIDENCE-MATRIX.template.md",
      "bytes": 397,
      "sha256": "7bf5eb8624473b65895c3d4baf3888417efba394cd91e6b5dab539fd103d43ee",
      "lines": 13
    },
    {
      "path": "research-system/templates/INSPIRATION-SYNTHESIS.template.md",
      "bytes": 880,
      "sha256": "59db0ef2b84333567888c77817549056e4d703e4ca4420497a5f95d518a0c580",
      "lines": 54
    },
    {
      "path": "research-system/templates/ORIGINALITY-AUDIT.template.md",
      "bytes": 521,
      "sha256": "34dc94fe6386f1cb273a14242d257b333d46202467d54b8bb4067cb98dcdd9ed",
      "lines": 16
    },
    {
      "path": "research-system/templates/RESEARCH-PLAN.template.md",
      "bytes": 1208,
      "sha256": "193b91f88c88b16cae61263596a9e41fb567592eba1864c9a8428c6b3a979726",
      "lines": 48
    },
    {
      "path": "research-system/templates/RESEARCH-REPORT.template.md",
      "bytes": 854,
      "sha256": "c51f2a3cb776dc2f5dbb4a0cfdb55758e2218bfe924a56624bb91df94661eb43",
      "lines": 43
    },
    {
      "path": "research-system/templates/TREND-CULTURE-MAP.template.md",
      "bytes": 523,
      "sha256": "f58ba55cbb232e8d138aed20643bf58d084efa4558fcc7ff0a0c7a05a7dd9c5b",
      "lines": 23
    },
    {
      "path": "rubrics/ANTI-GENERIC-AUDIT.md",
      "bytes": 1201,
      "sha256": "a67c65f7b4e6280e2d370717e75a6296ebe51c806b92c3bb450c4a3429162b88",
      "lines": 30
    },
    {
      "path": "rubrics/HARD-GATES.md",
      "bytes": 2638,
      "sha256": "ca874faecb64cf693b2ca007b8e12bb48a91c6b6cc3b5f37acca089184318a70",
      "lines": 66
    },
    {
      "path": "rubrics/MASTER-SCORECARD.md",
      "bytes": 4987,
      "sha256": "2175c61310a07f825359d6533ab43a461bf7b6a8bc2949178bd174336f3e59fb",
      "lines": 182
    },
    {
      "path": "rubrics/MOTION-AUDIT.md",
      "bytes": 788,
      "sha256": "240231f6275287e67883217d1158fc5a8694fbdc3dfbcf8e93703f8bbcecba94",
      "lines": 19
    },
    {
      "path": "rubrics/PAIRWISE-COMPARISON.md",
      "bytes": 786,
      "sha256": "dad393d7aeb29e9a28f5c6d47d39c56bcba982b1ad872e65dfde83e68cc655c5",
      "lines": 27
    },
    {
      "path": "rubrics/README.md",
      "bytes": 352,
      "sha256": "d7060fd6a4bc2e9fd5bd95a22a59d57d7a21ea4aad05f2bdef866817970bdcc8",
      "lines": 5
    },
    {
      "path": "rubrics/RTL-AUDIT.md",
      "bytes": 1284,
      "sha256": "36c511f0fbb3611e0327502aeed6cf5ecdd1bb960cc80f980e5b66b790f36869",
      "lines": 39
    },
    {
      "path": "rubrics/STATE-COVERAGE.md",
      "bytes": 635,
      "sha256": "2afc91a0c9c6041b9cba7168224536dc4a9d0038d7168831ab587b12cc907dbe",
      "lines": 15
    },
    {
      "path": "rubrics/review-input.template.json",
      "bytes": 734,
      "sha256": "60830d9264e5701471743b7f246a7ca5e6915c87ce52f177cbec2ed9fa16dbac",
      "lines": 31
    },
    {
      "path": "rubrics/scorecard.json",
      "bytes": 1062,
      "sha256": "c921a2cdcdb0335395a8574a43924e173fc70718e99fc68bd3ccc5ff6cef0c44",
      "lines": 55
    },
    {
      "path": "scripts/README.md",
      "bytes": 3150,
      "sha256": "40e332de11ed88297ae98cabaa870f4d8edc685b10e3421ff06d0bc4fb5981a8",
      "lines": 116
    },
    {
      "path": "scripts/_skill_builder.py",
      "bytes": 3634,
      "sha256": "870bca40e8c3d94be7c025d405e50362b160c91393795874f255e545e7394ecc",
      "lines": 126
    },
    {
      "path": "scripts/build_manifest.py",
      "bytes": 3353,
      "sha256": "c34f86ff346677d33d8a8226053af92c3d14fafd9aa990a6fd7f673f6f5604bf",
      "lines": 92
    },
    {
      "path": "scripts/init_project.py",
      "bytes": 4374,
      "sha256": "e06f1dd1e21367921bac70629a5738459a7d29029f3abda5a2b94cbb6ab2b69a",
      "lines": 112
    },
    {
      "path": "scripts/init_research.py",
      "bytes": 7542,
      "sha256": "618f8e74705cfbdec5e9e8bb121c7422cfb0b159fdeb93179288e8657af5fea9",
      "lines": 202
    },
    {
      "path": "scripts/install.py",
      "bytes": 10297,
      "sha256": "0812995b39efeafe44bcb7df94d4f0baecc417c74b723851ba7b23aae58a1d3b",
      "lines": 301
    },
    {
      "path": "scripts/new_reference.py",
      "bytes": 2903,
      "sha256": "047a1a68f5495153fa4e3e269e63da7b0948856956211690cd4c60b0ac442b1e",
      "lines": 77
    },
    {
      "path": "scripts/record_preference.py",
      "bytes": 2997,
      "sha256": "e9c650d5a92f142f4590ef459556cfdb3dd5e1cecd481e715f933ae8f1760ca3",
      "lines": 79
    },
    {
      "path": "scripts/record_source.py",
      "bytes": 10185,
      "sha256": "a32170c7327b72bdc6a9692f93e7ae237463ec80b1cdcd56f456c6089ab39b4b",
      "lines": 261
    },
    {
      "path": "scripts/score_review.py",
      "bytes": 5332,
      "sha256": "df5d2d7b45869e14cd35f5ad46982913150f020aeb4011cbc37f33cc84f991a1",
      "lines": 138
    },
    {
      "path": "scripts/validate_bundle.py",
      "bytes": 16475,
      "sha256": "a4082b044a425dce3ed346c0bb9a364fccead60037120f6caa47343c9ff416dd",
      "lines": 434
    },
    {
      "path": "scripts/validate_research.py",
      "bytes": 13439,
      "sha256": "f109d40b9dcf63f4a7fd5c6fb0b27ebd225433eed878b2518edbd1f89395b964",
      "lines": 321
    },
    {
      "path": "skills/advanced-experience/SKILL.md",
      "bytes": 7423,
      "sha256": "93fe3951f4ca27717b308a2523e96bbac4db4467d59eb906c6764b0af45135c1",
      "lines": 248
    },
    {
      "path": "skills/advanced-experience/agents/openai.yaml",
      "bytes": 322,
      "sha256": "086a820869a4519ffad78fcf1847ac9fed2f3d4a35c7bf82d282146c4c9eef1d"
    },
    {
      "path": "skills/advanced-experience/references/ADVANCED-SCENE-CONTRACT.md",
      "bytes": 1021,
      "sha256": "60b77c12d2917e6145251b1b179387f331e2ad21855c6e2bbbc94f8edcf41ca8",
      "lines": 49
    },
    {
      "path": "skills/asset-production-direction/SKILL.md",
      "bytes": 9198,
      "sha256": "f3fcfbfde643e25a68416e448064308894af6e2b84a0ad5872070ccc229d8b2a",
      "lines": 173
    },
    {
      "path": "skills/asset-production-direction/agents/openai.yaml",
      "bytes": 368,
      "sha256": "0b8b5d78810984ec52e3a8c48e418de0c046572712f4513d265d52bd2f20fd16"
    },
    {
      "path": "skills/asset-production-direction/references/ASSET-QA-DELIVERY.md",
      "bytes": 811,
      "sha256": "f1b13a13299c993d6b0faa1d06ef1a771b85c12fcf2fef6bd5cee9536c7ba9bf",
      "lines": 46
    },
    {
      "path": "skills/asset-production-direction/references/ASSET-REGISTER.md",
      "bytes": 802,
      "sha256": "e622abe59b752559af5254c6df510224ff7c34c62439c60e471574840e80f7b0",
      "lines": 46
    },
    {
      "path": "skills/asset-production-direction/references/PRODUCTION-BRIEF.md",
      "bytes": 960,
      "sha256": "7fc00e06f0fdc52484a30be35ce9e9d1fb05e360121c05415f4978cd23b4d616",
      "lines": 53
    },
    {
      "path": "skills/brand-world-building/SKILL.md",
      "bytes": 8832,
      "sha256": "06e951676e9b25a9c50ce9f249b8f104e44bea86ca96de16716da6081941449c",
      "lines": 173
    },
    {
      "path": "skills/brand-world-building/agents/openai.yaml",
      "bytes": 341,
      "sha256": "e6e73472c3765da812a31165e7044f44eba4c91b49e85e764abe06bb9de5288a"
    },
    {
      "path": "skills/brand-world-building/references/BRAND-WORLD-THESIS.md",
      "bytes": 680,
      "sha256": "1b87cc769d122f50fbb70b46b85350d74335f8dc7a68d4788a039e3c21cd3422",
      "lines": 39
    },
    {
      "path": "skills/brand-world-building/references/CROSS-SURFACE-PROOF.md",
      "bytes": 1029,
      "sha256": "aae07bfb09a4ad42c5245bb989944817e61ff1ed9b1544f6549fab0c4c030aec",
      "lines": 60
    },
    {
      "path": "skills/brand-world-building/references/WORLD-GRAMMAR.md",
      "bytes": 814,
      "sha256": "7720bd58e64469374996ccf5d304a885b31d75f9fe2798af8d6e81c03a47f096",
      "lines": 46
    },
    {
      "path": "skills/color-imagery/SKILL.md",
      "bytes": 7257,
      "sha256": "a3ba287326c3254eff24d2bb9b62789872c2f4c9b9adb070c47566948858ef81",
      "lines": 259
    },
    {
      "path": "skills/color-imagery/agents/openai.yaml",
      "bytes": 302,
      "sha256": "2f3aa5be5863174c0992f5a52b10a6c1737967c91a735356232a62dde4d45134"
    },
    {
      "path": "skills/color-imagery/references/COLOR-IMAGE-CONTRACT.md",
      "bytes": 1051,
      "sha256": "d6f4b8a078ed8836d31530a388895bde1a19efdbbbf95e2d87ca3e79c035ecc4",
      "lines": 61
    },
    {
      "path": "skills/competitive-experience-intelligence/SKILL.md",
      "bytes": 8251,
      "sha256": "5481441c2f37e440ce83fefc8077415b17762033e1a31a28088f1bc252436de3",
      "lines": 223
    },
    {
      "path": "skills/competitive-experience-intelligence/agents/openai.yaml",
      "bytes": 391,
      "sha256": "2792908c3c6739aa5d5e2673c8ad550f40ab98481f34ea14994cd07a38fbca34"
    },
    {
      "path": "skills/competitive-experience-intelligence/references/CATEGORY-CONVENTIONS.md",
      "bytes": 384,
      "sha256": "abb93323a2b67e3c2675b0fcd3372375de30d6ccbf8181f21d1a1297dfa6c595",
      "lines": 15
    },
    {
      "path": "skills/competitive-experience-intelligence/references/COMPETITOR-MATRIX.md",
      "bytes": 426,
      "sha256": "68ede7a04aed3f2390b28d6a42802fe0d5a52ef490cfdcd5d437e3eee0d66d28",
      "lines": 13
    },
    {
      "path": "skills/competitive-experience-intelligence/references/JOURNEY-BENCHMARK.md",
      "bytes": 517,
      "sha256": "0f777e436f6dd3fd931b8f771bc2a7ad5dc890fbfc8a52975dc206b1552e9c5b",
      "lines": 18
    },
    {
      "path": "skills/competitive-experience-intelligence/references/OPPORTUNITY-MAP.md",
      "bytes": 394,
      "sha256": "7e216f1c5969102394a246ef196c80cd77eed554f01315475531fa01533a3963",
      "lines": 13
    },
    {
      "path": "skills/component-system/SKILL.md",
      "bytes": 6932,
      "sha256": "09a2c6c518ba7288a6771a348c3883c5602bec3f9b7af708f4805c52f1a24505",
      "lines": 232
    },
    {
      "path": "skills/component-system/agents/openai.yaml",
      "bytes": 318,
      "sha256": "48b0e623eca04ad8620794ba8bec50a5932d40a343c2d73b15c12c52815a7cd6"
    },
    {
      "path": "skills/component-system/references/COMPONENT-CONTRACT.md",
      "bytes": 1008,
      "sha256": "7050c6ca606444e523fd07e841040adc3d7294ce91b8807c5cf25af5bb48a18f",
      "lines": 61
    },
    {
      "path": "skills/content-information-design/SKILL.md",
      "bytes": 8833,
      "sha256": "82bf30098dc36c5ec183d5dbeb17f199b0eceacc4f62ce847836e65bc5579bd7",
      "lines": 171
    },
    {
      "path": "skills/content-information-design/agents/openai.yaml",
      "bytes": 356,
      "sha256": "624fc3b0fe9edfbc370a682614c7d701d717a66c747f437ab293228f6602447b"
    },
    {
      "path": "skills/content-information-design/references/CONTENT-INVENTORY.md",
      "bytes": 708,
      "sha256": "9bfe31182117e3eea0aa69daf1a12b73220b4b0f5fdfc9559245363fe38819dc",
      "lines": 39
    },
    {
      "path": "skills/content-information-design/references/CONTENT-MODEL-AND-STRESS.md",
      "bytes": 829,
      "sha256": "5a8628e3e6b4f3644e721b35b2bc58a1a651b768dc174239fe7bda21d5cfde6f",
      "lines": 46
    },
    {
      "path": "skills/content-information-design/references/MESSAGE-ARCHITECTURE.md",
      "bytes": 815,
      "sha256": "9717ce3ff201a1d5c7c52510ae961308cf06d73c8c81f242654ed460a0278f52",
      "lines": 46
    },
    {
      "path": "skills/conversion-behavior-design/SKILL.md",
      "bytes": 8949,
      "sha256": "d06e219e73996451632dc4f5996a4bba8d2d222c7c83ce7a4edf92494787a878",
      "lines": 174
    },
    {
      "path": "skills/conversion-behavior-design/agents/openai.yaml",
      "bytes": 355,
      "sha256": "1709986963cbe60c12227c87d14881c67cc533d566e47e4bf2a898beb6e782ef"
    },
    {
      "path": "skills/conversion-behavior-design/references/DECISION-JOURNEY.md",
      "bytes": 827,
      "sha256": "a6079fce74d17ccc353072353bd89e203ac51b2f09e568454786b4ba3d505319",
      "lines": 46
    },
    {
      "path": "skills/conversion-behavior-design/references/ETHICAL-EXPERIMENTS.md",
      "bytes": 911,
      "sha256": "c969e192edc43c65308cb549340b39d3e37bc8a2e8e717a8a1b5f94df3f857ea",
      "lines": 53
    },
    {
      "path": "skills/conversion-behavior-design/references/FORM-AND-CTA-CONTRACT.md",
      "bytes": 841,
      "sha256": "d044839143cef2a30741d55d022e7be9f111a2da4acbe5e41b664d9f6fc352c7",
      "lines": 46
    },
    {
      "path": "skills/creative-coding-lab/SKILL.md",
      "bytes": 8735,
      "sha256": "fa383a751005d48bebf7b2757c299148ec46917d0781ead6ec242e4a60ccdff4",
      "lines": 173
    },
    {
      "path": "skills/creative-coding-lab/agents/openai.yaml",
      "bytes": 392,
      "sha256": "9bfd4b1aaa99cd1cae111584e121882ba3c948c5999bc3913f7d2141c71a6eed"
    },
    {
      "path": "skills/creative-coding-lab/references/BENCHMARK-DECISION.md",
      "bytes": 944,
      "sha256": "94c0ab556b206102b13b3ddec441aa35e1b13e75ec25d68ddedcf3029c7ea3ab",
      "lines": 53
    },
    {
      "path": "skills/creative-coding-lab/references/LAB-BRIEF.md",
      "bytes": 803,
      "sha256": "16ac2dbcd8e0cdd39c5c1f879cd55f719f833f612ac2754f6647f1f438007238",
      "lines": 46
    },
    {
      "path": "skills/creative-coding-lab/references/PARAMETERS-AND-PRESETS.md",
      "bytes": 784,
      "sha256": "58c984b5f798f6a5701e6c2cb4491daa3585ba1b4a159ba7f6af327dcf2712ee",
      "lines": 46
    },
    {
      "path": "skills/data-visualization/SKILL.md",
      "bytes": 9036,
      "sha256": "648b7aaba7fd308459e3991f24192b633afcd424f8a6e9d074b9222fc79e5353",
      "lines": 173
    },
    {
      "path": "skills/data-visualization/agents/openai.yaml",
      "bytes": 331,
      "sha256": "104ec603d602cf7dd921fb807a758f23d3dda9f2b4418ccfa84078f863237285"
    },
    {
      "path": "skills/data-visualization/references/EDGE-DATA-TESTS.md",
      "bytes": 925,
      "sha256": "bc7fcc4f8ebad80b8a67d79955f564485d4aea6593546e8897cf2f33fe950768",
      "lines": 53
    },
    {
      "path": "skills/data-visualization/references/QUESTION-TO-ENCODING.md",
      "bytes": 818,
      "sha256": "10e017538e312b9b7f69d9623be5180475ea87a64f166973102b74de3da64028",
      "lines": 46
    },
    {
      "path": "skills/data-visualization/references/VISUALIZATION-CONTRACT.md",
      "bytes": 821,
      "sha256": "5813b3dbdd835f02e5dc0168d3a167b18ab5d1c8baf83970fba336e292a75ccd",
      "lines": 46
    },
    {
      "path": "skills/design-director/SKILL.md",
      "bytes": 13673,
      "sha256": "b2feccce61d63e8d614c58c30e74a85a7144a79d588cb1f7d6697c8539e9f6d3",
      "lines": 304
    },
    {
      "path": "skills/design-director/agents/openai.yaml",
      "bytes": 368,
      "sha256": "12945b7e504814505244fdc7c8651263f371ea80c993d140693c6689cee195e2"
    },
    {
      "path": "skills/design-director/references/ANTI-GENERIC.md",
      "bytes": 1866,
      "sha256": "6b0f7acf0569d7849fd9d216c3bed3a4c6c66cc084dfbb3cacc88f91957eee49",
      "lines": 41
    },
    {
      "path": "skills/design-director/references/DIRECTION-CARD.md",
      "bytes": 1150,
      "sha256": "d9ae0d99943f02515fb5961bbfb4039c5e0ab18a1ec8fce4964eec7eb6970545",
      "lines": 74
    },
    {
      "path": "skills/design-ops-handoff/SKILL.md",
      "bytes": 9649,
      "sha256": "359df6ca35dcda80d0484772cb5e0269bf90abf489dc1f8620315940adbafef3",
      "lines": 182
    },
    {
      "path": "skills/design-ops-handoff/agents/openai.yaml",
      "bytes": 369,
      "sha256": "0054ff68a5c5194244d46fb0b58c9afd70c200ddb70d0cb95adbaee8b7588889"
    },
    {
      "path": "skills/design-ops-handoff/references/ACCEPTANCE-RELEASE.md",
      "bytes": 820,
      "sha256": "afda3637ee39b9b41605402f89206a7710a9f459e4844fe2328848c1a218a99a",
      "lines": 46
    },
    {
      "path": "skills/design-ops-handoff/references/HANDOFF-SOURCE-MAP.md",
      "bytes": 918,
      "sha256": "04f9c6a8160ebab21d856179d96fef00876e47ccb2245960b62a4a84f93a6706",
      "lines": 53
    },
    {
      "path": "skills/design-ops-handoff/references/IMPLEMENTATION-CONTRACT.md",
      "bytes": 917,
      "sha256": "139ee4959c0f48c01a4a8624f1765610a995006cc1d182876727426ed36ddbf4",
      "lines": 53
    },
    {
      "path": "skills/design-system-governance/SKILL.md",
      "bytes": 9034,
      "sha256": "bff9b72205545a821f63aca2372d1c12779a38d6973b6aa8a4eea48cce2322cc",
      "lines": 172
    },
    {
      "path": "skills/design-system-governance/agents/openai.yaml",
      "bytes": 344,
      "sha256": "dd2e2c54536898f7a38098552fadf73744eb038b45832804ed75b95fe2a7e73b"
    },
    {
      "path": "skills/design-system-governance/references/CONTRIBUTION-AND-CHANGE.md",
      "bytes": 909,
      "sha256": "77bb7141398a5c395e96e6b8b93b8360248f4038fddb0605449c657f09e9730e",
      "lines": 53
    },
    {
      "path": "skills/design-system-governance/references/SYSTEM-INVENTORY.md",
      "bytes": 792,
      "sha256": "0d313fd420d1da4f8b08d0c42047ba96ca8de781de25d828500d46698def5106",
      "lines": 46
    },
    {
      "path": "skills/design-system-governance/references/SYSTEM-QUALITY-MATRIX.md",
      "bytes": 823,
      "sha256": "cbacf86c9c0eb7444e6f0d57390b539fd58f3f53dc08c1e1eb180f152fa403bf",
      "lines": 46
    },
    {
      "path": "skills/design-to-code/SKILL.md",
      "bytes": 8017,
      "sha256": "d8afa15904f91673de29506cc49d44967ca21707794bcdde78b6a5e2204335dc",
      "lines": 247
    },
    {
      "path": "skills/design-to-code/agents/openai.yaml",
      "bytes": 319,
      "sha256": "f2728bad0760497c359c91fb03ca17dbaa9c9e0288bf4946768a723027781c83"
    },
    {
      "path": "skills/design-to-code/references/IMPLEMENTATION-MAP.md",
      "bytes": 949,
      "sha256": "6d3cee9fde6e08fda3b67154132f35d3e5fe251b2a1b53034d20c1f0b7295f50",
      "lines": 52
    },
    {
      "path": "skills/experiment-optimization/SKILL.md",
      "bytes": 8948,
      "sha256": "a35abf2f2eaee1302760cc212ac726b7acdc9b7cef6572613dff9fc8909098f9",
      "lines": 173
    },
    {
      "path": "skills/experiment-optimization/agents/openai.yaml",
      "bytes": 366,
      "sha256": "6109e20f4c7c2465705905bbaab8c513e362f385e0fbbcefb5f09c24b9bbdf87"
    },
    {
      "path": "skills/experiment-optimization/references/EXPERIMENT-BRIEF.md",
      "bytes": 819,
      "sha256": "37cd73f41711f50fcc0d2cb5aafaf775f9caa3b88a01ff7afc8ddf7766ebb8d8",
      "lines": 46
    },
    {
      "path": "skills/experiment-optimization/references/EXPERIMENT-DECISION.md",
      "bytes": 816,
      "sha256": "f627f6a9574b49a315f808a585d6a2b6913e6f9652df7dc718955eb22dd48df2",
      "lines": 46
    },
    {
      "path": "skills/experiment-optimization/references/METRICS-AND-ANALYSIS.md",
      "bytes": 915,
      "sha256": "a59cf5b24e334aa78e6d532657d076d83628906d28a69dc11579c36fa4da5b30",
      "lines": 53
    },
    {
      "path": "skills/inclusive-accessibility-design/SKILL.md",
      "bytes": 9519,
      "sha256": "6c376e9c0a395dc4fb4072909948c6e90ab12566a844849f0b071d0e247d505e",
      "lines": 174
    },
    {
      "path": "skills/inclusive-accessibility-design/agents/openai.yaml",
      "bytes": 392,
      "sha256": "234549c22345fb58b38f758101164cfd2eeb96e76bd342204e8663a1b02271f1"
    },
    {
      "path": "skills/inclusive-accessibility-design/references/ACCESSIBILITY-TEST-EVIDENCE.md",
      "bytes": 1030,
      "sha256": "cc024a2251256de542468282f11fb27d832ff53102cf2e1a38e814927a355bb1",
      "lines": 60
    },
    {
      "path": "skills/inclusive-accessibility-design/references/CUSTOM-COMPONENT-ACCESS.md",
      "bytes": 914,
      "sha256": "530aa291deaaf7f177d678ae99cb970ea0cac64ca0fbc0cc9f1ead2a91ca0a93",
      "lines": 53
    },
    {
      "path": "skills/inclusive-accessibility-design/references/INCLUSIVE-REQUIREMENTS.md",
      "bytes": 950,
      "sha256": "f1644fe1375c08873347fee2639ecc3d1f545304079bdbf28511b78cc0f6a6af",
      "lines": 53
    },
    {
      "path": "skills/inspiration-synthesis/SKILL.md",
      "bytes": 10858,
      "sha256": "a3efb33ca96ddb976271d6792d7ef3fa9e69a26055aedd884dfb7672c51ad2b2",
      "lines": 259
    },
    {
      "path": "skills/inspiration-synthesis/agents/openai.yaml",
      "bytes": 336,
      "sha256": "c4a48790bcc54654abde2427985fb5e2eca3894e54906af3187ec8835e11ba25"
    },
    {
      "path": "skills/inspiration-synthesis/references/ANALOGY-LADDER.md",
      "bytes": 690,
      "sha256": "6b3cae213c083814a613eb97ed72fecf5c7ce0c97f384ac7e891b49a8a87e9ba",
      "lines": 28
    },
    {
      "path": "skills/inspiration-synthesis/references/DEFIXATION-PROTOCOL.md",
      "bytes": 956,
      "sha256": "8b76f6573c42658dd6924d39673d36d24138357c643812ca13d79666ded4dccd",
      "lines": 21
    },
    {
      "path": "skills/inspiration-synthesis/references/DESIGN-GRAMMAR.md",
      "bytes": 879,
      "sha256": "ffe0803667b1c0cb790106e232139ad98ba41ec1c9babb390f5d3ff446f0d229",
      "lines": 28
    },
    {
      "path": "skills/inspiration-synthesis/references/ORIGINALITY-AUDIT.md",
      "bytes": 1078,
      "sha256": "c1071251abd5d7ea61b8ea503cc57cca4ae8eaa1deb7ce3dc0d2395b95adb99f",
      "lines": 25
    },
    {
      "path": "skills/inspiration-synthesis/references/SYNTHESIS-MATRIX.md",
      "bytes": 512,
      "sha256": "07036d9fbe7ef7b1bb85d94b3b36058448d281f3cef1991891e52a59b9333251",
      "lines": 16
    },
    {
      "path": "skills/localization-culturalization/SKILL.md",
      "bytes": 9599,
      "sha256": "204d0a66c03b1835a81675c582687e4c1783160ea9cbac7150a67b8e9db24c1a",
      "lines": 176
    },
    {
      "path": "skills/localization-culturalization/agents/openai.yaml",
      "bytes": 391,
      "sha256": "b368076838b22edb9525e25222a4931b73d82d5b4273a9de827c39a239d1a258"
    },
    {
      "path": "skills/localization-culturalization/references/CULTURALIZATION-QA.md",
      "bytes": 814,
      "sha256": "7ec8c2f75cd85e26cc7a6bd3a4777f0697e6762a27ac902caf58d255374e1fb8",
      "lines": 46
    },
    {
      "path": "skills/localization-culturalization/references/LOCALE-MARKET-MATRIX.md",
      "bytes": 799,
      "sha256": "27c2f3a3d82ec6e69ecb4caedd4082e7708121407b2c96d71a68bebea17452ef",
      "lines": 46
    },
    {
      "path": "skills/localization-culturalization/references/TERMINOLOGY-AND-DATA.md",
      "bytes": 818,
      "sha256": "c11d772e5e8cf51bdf63c62d0234138d335174ccfd01ea7975f85ad8df173cda",
      "lines": 46
    },
    {
      "path": "skills/motion-interaction/SKILL.md",
      "bytes": 7331,
      "sha256": "3b384d5b32ba8ecff52d022c84624299541354430084cff4c997a1d7d956ad81",
      "lines": 213
    },
    {
      "path": "skills/motion-interaction/agents/openai.yaml",
      "bytes": 330,
      "sha256": "f008c4687881bff4709279f2ea345e04fdb94ee0186a67a1ef6dff406c010254"
    },
    {
      "path": "skills/motion-interaction/references/SCENE-BOARD.md",
      "bytes": 903,
      "sha256": "e66a6cb3a23575ba298eb5b8c37c769d7e9833d16ae2e3ffc150c9a9df77d49e",
      "lines": 37
    },
    {
      "path": "skills/performance-perceived-quality/SKILL.md",
      "bytes": 9110,
      "sha256": "2f9a664a2475726eb4ac58bacfcc352e3d34070f9f01cda2026717b98495e85d",
      "lines": 173
    },
    {
      "path": "skills/performance-perceived-quality/agents/openai.yaml",
      "bytes": 387,
      "sha256": "8b0aaeb87fe6a90903b41e5775107a9d05e9ca0f74b295c9249061a5d4746aa9"
    },
    {
      "path": "skills/performance-perceived-quality/references/LOADING-AND-FALLBACK.md",
      "bytes": 826,
      "sha256": "cd302eabfd840870b7a08db7c3bba708165eb3666f3440272408483c3e3ab9fe",
      "lines": 46
    },
    {
      "path": "skills/performance-perceived-quality/references/PERFORMANCE-BUDGET.md",
      "bytes": 729,
      "sha256": "3aaed82c51185202c3ef7dffc032016571cbb8a61098d9700727b79e99a696f0",
      "lines": 39
    },
    {
      "path": "skills/performance-perceived-quality/references/PERFORMANCE-EVIDENCE.md",
      "bytes": 820,
      "sha256": "4aa8e9ca8686d400951881805097a95ae145d0230df39aeca969662f326d3e7f",
      "lines": 46
    },
    {
      "path": "skills/product-metrics-instrumentation/SKILL.md",
      "bytes": 9821,
      "sha256": "fcb723e55a30755d77f5eebbc9a5fab18e63e8c34c4ac5918e791dce723ec91c",
      "lines": 182
    },
    {
      "path": "skills/product-metrics-instrumentation/agents/openai.yaml",
      "bytes": 413,
      "sha256": "0f2747f75afe6e6e94f2bc8b2326ed6a380e5a6047d340fe3a53b7eff8c3fc58"
    },
    {
      "path": "skills/product-metrics-instrumentation/references/EVENT-CONTRACT.md",
      "bytes": 917,
      "sha256": "2d93a09a81164b7b086f9456c1c8ef344ef71a17678e6158b37dec0939121316",
      "lines": 53
    },
    {
      "path": "skills/product-metrics-instrumentation/references/METRIC-CATALOG.md",
      "bytes": 801,
      "sha256": "ba080c533c1d9f772829eeee290d1c90e8e678d96e66d8ca63642345842943ab",
      "lines": 46
    },
    {
      "path": "skills/product-metrics-instrumentation/references/TELEMETRY-VALIDATION.md",
      "bytes": 931,
      "sha256": "9629011c0a971ad1428894b79f4f03f19f6ebf87c21c415e140d96ed6ef3dff7",
      "lines": 53
    },
    {
      "path": "skills/prototype-usability-testing/SKILL.md",
      "bytes": 8405,
      "sha256": "1f5810c0e50f2860f270634355462f77bcb0579a3e25f4eabdb9b3ccfb801601",
      "lines": 169
    },
    {
      "path": "skills/prototype-usability-testing/agents/openai.yaml",
      "bytes": 363,
      "sha256": "e09cf9b36916a84ce4931545694a97db2871d30374c45ddb09e59e7860fc0171"
    },
    {
      "path": "skills/prototype-usability-testing/references/FINDINGS-AND-RETEST.md",
      "bytes": 797,
      "sha256": "f6d09f1a9688e77c6feec7c72182b3c281310d663308ad87a9d4e7af4e922020",
      "lines": 46
    },
    {
      "path": "skills/prototype-usability-testing/references/SESSION-OBSERVATION.md",
      "bytes": 827,
      "sha256": "e89d63eaecdebb4c115ef5bdbca6861c9a4928ec68a703d8d53abaa522114cea",
      "lines": 46
    },
    {
      "path": "skills/prototype-usability-testing/references/TEST-PLAN.md",
      "bytes": 797,
      "sha256": "f18ae9605198d9fef82f56a374765335f0af1f4eea854c317458aaab621abd7f",
      "lines": 46
    },
    {
      "path": "skills/reference-intelligence/SKILL.md",
      "bytes": 8786,
      "sha256": "c1843309fd903802a6be71b99fd8a2af9ab52f4f0596350093f1e464050d15a7",
      "lines": 228
    },
    {
      "path": "skills/reference-intelligence/agents/openai.yaml",
      "bytes": 381,
      "sha256": "881998af18293de31e4626e0a77a93f6ba0811384e991edbb5a44ee7ffaa59aa"
    },
    {
      "path": "skills/reference-intelligence/references/REFERENCE-CARD.md",
      "bytes": 1032,
      "sha256": "768bba8947f0f861be5be30aa79ed70552bf5b031a6ccbbe7cf093abacb97d4e",
      "lines": 74
    },
    {
      "path": "skills/reference-intelligence/references/SOURCE-MAP.md",
      "bytes": 1398,
      "sha256": "ce7c0de0332ae21ccb7282277054b6121ac674c9b156624b792f49ff4abb0547",
      "lines": 34
    },
    {
      "path": "skills/responsive-rtl/SKILL.md",
      "bytes": 8668,
      "sha256": "4deea21d73603a8167b2398615e5e39d6ef8add5ef2344db1c9a7bca7f494a56",
      "lines": 256
    },
    {
      "path": "skills/responsive-rtl/agents/openai.yaml",
      "bytes": 311,
      "sha256": "d0fd43b1589a3ce351d3ee18904092e3d8aa45f96632df7ba52ba1fae99bbdff"
    },
    {
      "path": "skills/responsive-rtl/references/RESPONSIVE-MATRIX.md",
      "bytes": 1199,
      "sha256": "16748ac1f2b9941f703e57a699ba6d61ea01f8c4caa7b52a858ae419f6858d28",
      "lines": 48
    },
    {
      "path": "skills/seo-discoverability-information/SKILL.md",
      "bytes": 9856,
      "sha256": "da114663afec723ed86bca75193f748afc8b415f14f2a033d7d5ad4325f14fcc",
      "lines": 175
    },
    {
      "path": "skills/seo-discoverability-information/agents/openai.yaml",
      "bytes": 410,
      "sha256": "550130c0b89929a6709d8aaf0f131754356467410360fbb89af45ec3ad73f248"
    },
    {
      "path": "skills/seo-discoverability-information/references/DISCOVERABILITY-IA.md",
      "bytes": 938,
      "sha256": "7791d01ec23fabe869caaf97d15477fb463b8c78684440e83db6f2e9fe947cd2",
      "lines": 53
    },
    {
      "path": "skills/seo-discoverability-information/references/SEO-VALIDATION.md",
      "bytes": 926,
      "sha256": "12a6fb6249d120cfef07578b3f2f8ca8f1904277956bf918843206c0034adfbb",
      "lines": 53
    },
    {
      "path": "skills/seo-discoverability-information/references/TECHNICAL-DISCOVERY.md",
      "bytes": 923,
      "sha256": "391bb3f0ac6913e19c630d81d9665c7d8089be826d8dcc9e906cdc9a6f6eb45c",
      "lines": 53
    },
    {
      "path": "skills/spatial-3d-world-building/SKILL.md",
      "bytes": 9966,
      "sha256": "a9c14c1a4ec306e32efa93ad664c03a55c7a644ec36a329696a56aed5d1917aa",
      "lines": 183
    },
    {
      "path": "skills/spatial-3d-world-building/agents/openai.yaml",
      "bytes": 356,
      "sha256": "689c2b8c1c749e2b31d7d4d41c148b58dd54406b9fd0d9fa9a7838d467a2f700"
    },
    {
      "path": "skills/spatial-3d-world-building/references/SPATIAL-PERFORMANCE-ACCESS.md",
      "bytes": 930,
      "sha256": "192babc858cb6e576ef6c1659608873cd3d27b8a301c0ec521653488f3bdc9fd",
      "lines": 53
    },
    {
      "path": "skills/spatial-3d-world-building/references/SPATIAL-THESIS-STORYBOARD.md",
      "bytes": 823,
      "sha256": "e6a477fe3d6d018c60c1ca5bda14414ad802c60d665111825784e1b858150bde",
      "lines": 46
    },
    {
      "path": "skills/spatial-3d-world-building/references/WORLD-ASSET-BIBLE.md",
      "bytes": 894,
      "sha256": "739ec083c02c7ea6c188d65ea2f6bbc9165ca93038a7d484ce2d77ee75e9b9be",
      "lines": 53
    },
    {
      "path": "skills/trend-cultural-intelligence/SKILL.md",
      "bytes": 9188,
      "sha256": "d35a469a557834685168213db5b7ab62fc5822f57a8f188183d08ad41f631305",
      "lines": 212
    },
    {
      "path": "skills/trend-cultural-intelligence/agents/openai.yaml",
      "bytes": 356,
      "sha256": "9cccaac4d7cd828a03301d15a02228737b292e0966e94dd66e5cf6849db713a3"
    },
    {
      "path": "skills/trend-cultural-intelligence/references/ADOPT-ADAPT-REJECT.md",
      "bytes": 538,
      "sha256": "3bfdc9dfc08e76618bc55bd31c5176639156f4eeaa0b832268c8fa0d473dad81",
      "lines": 11
    },
    {
      "path": "skills/trend-cultural-intelligence/references/CULTURAL-RESEARCH.md",
      "bytes": 1042,
      "sha256": "514ea82512061557b67f89e8859dc29410ae405f478144a6e3e183298f85649f",
      "lines": 31
    },
    {
      "path": "skills/trend-cultural-intelligence/references/TREND-RADAR.md",
      "bytes": 374,
      "sha256": "147be21865a6d083b025e096a7e93f1ad77938eee1b53d6caf166a17d9cc8778",
      "lines": 10
    },
    {
      "path": "skills/trend-cultural-intelligence/references/TREND-SCORECARD.md",
      "bytes": 558,
      "sha256": "f841743c24964cecba2a3472dacefa9681b2b40c51d26c97ec5756b9975f6efa",
      "lines": 19
    },
    {
      "path": "skills/trust-privacy-security-ux/SKILL.md",
      "bytes": 9190,
      "sha256": "bbd3ad1874a34d0d1047adfd401ba6e10125d7dfbc7de213e49c87055cba163f",
      "lines": 174
    },
    {
      "path": "skills/trust-privacy-security-ux/agents/openai.yaml",
      "bytes": 371,
      "sha256": "a0b17324fe00d3e4ecf0e98edf267d1c56172ae981b9d5f855697669dfbe5e2a"
    },
    {
      "path": "skills/trust-privacy-security-ux/references/SENSITIVE-FLOW-CONTRACT.md",
      "bytes": 801,
      "sha256": "93d33ba39385479568c15cf9388ec90f07e72a7d5ca3858b1159723a3e72dc18",
      "lines": 46
    },
    {
      "path": "skills/trust-privacy-security-ux/references/TRUST-CONTENT-AND-TESTS.md",
      "bytes": 831,
      "sha256": "4be516c7b6850d127eaef5610258a1f9f83819f8d21e679cd8ba7b02e90afd41",
      "lines": 46
    },
    {
      "path": "skills/trust-privacy-security-ux/references/TRUST-RISK-MODEL.md",
      "bytes": 807,
      "sha256": "7eb8999430ce7eba092b5935ba87197df757e7652fe4a47d3b85e55119620d4d",
      "lines": 46
    },
    {
      "path": "skills/typography-content/SKILL.md",
      "bytes": 8073,
      "sha256": "65e05ac8879c21e233e0cb9fd03c97cb7f377d157d32ae548d845228bfceae0b",
      "lines": 247
    },
    {
      "path": "skills/typography-content/agents/openai.yaml",
      "bytes": 309,
      "sha256": "a2b5260531b0c978b935e8291edb68e76a6c987187d288378f3db4911d93642f"
    },
    {
      "path": "skills/typography-content/references/TYPE-CONTRACT.md",
      "bytes": 1281,
      "sha256": "bbd81390af91fdc0aba2cffb332ddd0db1fda1b3077c3652291263919736a645",
      "lines": 51
    },
    {
      "path": "skills/user-research-synthesis/SKILL.md",
      "bytes": 9437,
      "sha256": "ad4958529391abcfa3992b2b046fd2175c02988167e16262db6709ccd2ca485d",
      "lines": 165
    },
    {
      "path": "skills/user-research-synthesis/agents/openai.yaml",
      "bytes": 345,
      "sha256": "3794cd0483c6f0f3c45b5f9695303ca37e3084b440a4eceb214b5aeefd050fcc"
    },
    {
      "path": "skills/user-research-synthesis/references/DESIGN-REQUIREMENTS.md",
      "bytes": 830,
      "sha256": "c2508daf515f846476876dfa5c3814f11d3c396954b0869a395a96855dab7128",
      "lines": 46
    },
    {
      "path": "skills/user-research-synthesis/references/EVIDENCE-LEDGER.md",
      "bytes": 688,
      "sha256": "eb9c0876e7ac605dbce333f994518860e8395cb72233f6a223677f888f94b489",
      "lines": 39
    },
    {
      "path": "skills/user-research-synthesis/references/SYNTHESIS-MAP.md",
      "bytes": 811,
      "sha256": "95965ee07cf52cadc6328231a8aae2cf69ec573b8a0323829d74c17a5d948c09",
      "lines": 46
    },
    {
      "path": "skills/ux-architecture/SKILL.md",
      "bytes": 6691,
      "sha256": "d391289433811a3f74e315943bdf730f90527a7a79b3b7fa79c9cd2c6498fc0e",
      "lines": 232
    },
    {
      "path": "skills/ux-architecture/agents/openai.yaml",
      "bytes": 312,
      "sha256": "73bb540f603dba7a0faa7d091c3c950051498ceb26156fc05621b063772964ad"
    },
    {
      "path": "skills/ux-architecture/references/JOURNEY-TEMPLATE.md",
      "bytes": 540,
      "sha256": "767af0b3e614597e1062e80bae635c23310285b5c726aa0624027a1b93960ea0",
      "lines": 33
    },
    {
      "path": "skills/ux-architecture/references/STATE-MATRIX.md",
      "bytes": 446,
      "sha256": "e29381ef50e94bf7294c45b5599744cbf9fafc6fdcf6656a213740a76cb00745",
      "lines": 13
    },
    {
      "path": "skills/visual-composition/SKILL.md",
      "bytes": 6760,
      "sha256": "e514ba4935be1965f0137bfe2d3b419bc6dce00015b5b1b4bc0f44e51129d24e",
      "lines": 228
    },
    {
      "path": "skills/visual-composition/agents/openai.yaml",
      "bytes": 310,
      "sha256": "9d0071ff5a5ec636e40a5658607e683f914116457270f084f19b56a615d6df08"
    },
    {
      "path": "skills/visual-composition/references/COMPOSITION-CONTRACT.md",
      "bytes": 1200,
      "sha256": "2cdcec04f13904d61dd347a5c702fd16ad480274241269d8efcdf33bc30d6406",
      "lines": 66
    },
    {
      "path": "skills/visual-qa-refinement/SKILL.md",
      "bytes": 8569,
      "sha256": "1b2777f158c9532fa2c912d1a39fe9735a4f39607bf29e942a563dde175aba7b",
      "lines": 303
    },
    {
      "path": "skills/visual-qa-refinement/agents/openai.yaml",
      "bytes": 332,
      "sha256": "cee33d3dc31b91fa76dc6d527b7a95c5a56698d98d8453769fa8517ec0c094d0"
    },
    {
      "path": "skills/visual-qa-refinement/references/REVIEW-REPORT.md",
      "bytes": 1328,
      "sha256": "0d93ba210e3b30f016657d651feaf02e66b0b781ce3d3d9e096250f6840def6d",
      "lines": 61
    },
    {
      "path": "skills/web-design-research/SKILL.md",
      "bytes": 15116,
      "sha256": "dbf3cb04a4e5bc9bd59fa29088fbc980570303b95e97d1bff0ea8329dfcc0bd6",
      "lines": 309
    },
    {
      "path": "skills/web-design-research/agents/openai.yaml",
      "bytes": 368,
      "sha256": "22800a25f41516ed0f78438dfa7284468c1fe4ce1e6d305e8289023fe7e66c60"
    },
    {
      "path": "skills/web-design-research/references/QUERY-PLAYBOOK.md",
      "bytes": 2242,
      "sha256": "413a8a06c4442a7a7fabd63cb554c361917524b9a847ab39ce753bbe2f6dab41",
      "lines": 57
    },
    {
      "path": "skills/web-design-research/references/RESEARCH-DELIVERABLES.md",
      "bytes": 1112,
      "sha256": "c70e3292ce2f9574cc46c1a5caa9044246bd068cb358638d6fbd7785debd70fd",
      "lines": 52
    },
    {
      "path": "skills/web-design-research/references/SEARCH-LANES.md",
      "bytes": 1919,
      "sha256": "599f1e127adf96811e0a191ae1164a46458e05840b17ddfb101f9708ff78135c",
      "lines": 28
    },
    {
      "path": "skills/web-design-research/references/SOURCE-QUALITY.md",
      "bytes": 2032,
      "sha256": "20d1b3a937eaaa86fb1f3831fe66e3e4bd773d23096f3b0b99eb5d0eba03ce0a",
      "lines": 76
    },
    {
      "path": "skills/web-design-research/references/WEB-SAFETY.md",
      "bytes": 1667,
      "sha256": "9a63c8566d29fff8afe07ad34ee24a0639b6d8775a07ebf49d38560b284931ab",
      "lines": 35
    },
    {
      "path": "tooling/visual-qa/README.md",
      "bytes": 2619,
      "sha256": "09dc5a148a34c26b15d907d690f5974b0610c436377317b97b3a66fa680da8d9",
      "lines": 89
    },
    {
      "path": "tooling/visual-qa/accessibility-audit.mjs",
      "bytes": 2494,
      "sha256": "220a879c3f08ac11355ea042fcfff206778c29ac1945d0e8a7e65d270d11d5ac",
      "lines": 73
    },
    {
      "path": "tooling/visual-qa/capture.mjs",
      "bytes": 2668,
      "sha256": "646a59a6df209588443a9a7a32142b1614529d6eeee38e2ddaf5c4c147fb474c",
      "lines": 83
    },
    {
      "path": "tooling/visual-qa/cli.mjs",
      "bytes": 3396,
      "sha256": "71201dac7def4f2300abba3e8c912f89e18404454a24fe37e8b7fb01378f9ce8",
      "lines": 110
    },
    {
      "path": "tooling/visual-qa/overflow-audit.mjs",
      "bytes": 3525,
      "sha256": "6754cb20dd842c4fb054f3a7505483d8075a4207d29d116ebc8bc16d106be62c",
      "lines": 95
    },
    {
      "path": "tooling/visual-qa/package.json",
      "bytes": 536,
      "sha256": "ca9eef5f5b5d682092068da1bc1111ada606e1da2b35107654772630ed2016b2",
      "lines": 20
    }
  ]
}
````


---

<a id="source-readme-en-md"></a>

## Original source file: `README.en.md`

Source SHA-256: `fa8ea8b5cc24eba00baffc5e360697e317b97883586875c3a3e18be9a5bf10ba`  
Source bytes: `1892`

# Hyzex Design Intelligence OS — v1.2.0

HDI-OS is a portable AI design operating system that turns a capable model into an evidence-led design studio rather than a one-shot UI generator.

## Package

- 34 progressive Agent Skills
- 18 optional Antigravity Custom Agents
- 30 prompt recipes
- 71 evaluation cases, including positive, boundary, and adversarial coverage for every v1.2 specialist skill
- 27 project templates: 9 core truth files and 18 optional specialist workbooks
- 8 interface domain packs
- Web research, provenance, de-fixation, and originality system
- Optional Playwright visual QA tooling
- Codex and Antigravity installers, validation, manifests, and preference memory

## Validate and install

```bash
python hdi.py validate
python hdi.py install --target both --scope project \
  --project-dir "/path/to/project" \
  --install-project-rules --install-custom-agents
```

## Initialize project truth

```bash
python hdi.py init --project-dir "/path/to/project" --name "Project Name"
```

Create all optional specialist workbooks when the project genuinely needs them:

```bash
python hdi.py init --project-dir "/path/to/project" \
  --name "Project Name" --extended
```

## v1.2 specialist capabilities

User research synthesis; prototype usability testing; brand-world building; content/information design; ethical conversion design; data visualization; design-system governance; asset-production direction; real and perceived performance; experiment design; trust/privacy/security UX; localization/culturalization; creative-coding lab; spatial 3D world building; inclusive accessibility; SEO/discoverability; design operations/handoff; and product metrics/instrumentation.

Read `orchestration/ROUTER.md`, `docs/SKILLS-CATALOG.md`, `docs/V1.2-SPECIALIST-SKILLS.md`, and `evals/RUNBOOK.md`. Activate only the smallest skill set that can change a material decision.


---

<a id="source-readme-md"></a>

## Original source file: `README.md`

Source SHA-256: `414a76ee5face626591d81fb70f54acbcc450fc663b6328e5600a919cea3aafe`  
Source bytes: `5248`

# Hyzex Design Intelligence OS — HDI-OS v1.2.0

نظام تشغيل تصميم للـAI يحوّل الموديل من مولّد واجهات وكود إلى استوديو متكامل: بحث مستخدمين وإنترنت، Art Direction، Brand World، UX، محتوى وتحويل، Data Visualization، Assets، Motion و3D، Accessibility، Localization، Trust، Performance، Design Systems، Measurement، Experiments، Handoff، وتنقيح بصري نهائي.

## محتويات الإصدار

- **34 Agent Skills** قابلة للتحميل التدريجي.
- **18 Antigravity Custom Agents** لأدوار الاستوديو.
- **30 Prompt Recipes** جاهزة للتشغيل.
- **71 Eval Cases**: 17 اختبارًا أساسيًا + 54 اختبارًا للمهارات الجديدة (Positive / Boundary / Adversarial).
- **27 Project Templates**: 9 ملفات حقيقة أساسية + 18 ملف متخصص اختياري.
- **8 Domain Packs**.
- Research session system وسجل مصادر وOriginality Gates.
- Playwright Visual QA tooling.
- Installer لـCodex وAntigravity وValidator وManifest وPreference Memory.

## الجديد في v1.2.0

تم تنفيذ كل الـ18 مهارة التي كانت في الـRoadmap:

1. `user-research-synthesis`
2. `prototype-usability-testing`
3. `brand-world-building`
4. `content-information-design`
5. `conversion-behavior-design`
6. `data-visualization`
7. `design-system-governance`
8. `asset-production-direction`
9. `performance-perceived-quality`
10. `experiment-optimization`
11. `trust-privacy-security-ux`
12. `localization-culturalization`
13. `creative-coding-lab`
14. `spatial-3d-world-building`
15. `inclusive-accessibility-design`
16. `seo-discoverability-information`
17. `design-ops-handoff`
18. `product-metrics-instrumentation`

كل مهارة تحتوي على Trigger وحدود استخدام، Evidence Requirements، Workflow، Outputs، Hard Gates، Handoffs، Anti-patterns، ثلاث Worksheets، وMetadata للتشغيل.

## التثبيت

```bash
python hdi.py validate

python hdi.py install \
  --target both \
  --scope project \
  --project-dir "/path/to/project" \
  --install-project-rules \
  --install-custom-agents
```

المهارات تُثبت في:

```text
<project>/.agents/skills/
```

ودعم HDI-OS في:

```text
<project>/.hdi-os/
```

## إنشاء ملفات المشروع

الأساسية فقط:

```bash
python hdi.py init \
  --project-dir "/path/to/project" \
  --name "Project Name" \
  --owner "Hyzex"
```

الأساسية + كل ملفات التخطيط المتخصصة:

```bash
python hdi.py init \
  --project-dir "/path/to/project" \
  --name "Project Name" \
  --owner "Hyzex" \
  --extended
```

لا تستخدم `--extended` لكل مشروع تلقائيًا؛ استخدم الملفات التي تناسب قرارات المشروع حتى لا يتحول النظام إلى بيروقراطية.

## طريقة التشغيل

```text
Truth + User Evidence
→ Current Web/Category Evidence when needed
→ Original Direction + Brand World
→ UX + Content + Conversion/Data/Trust Contracts
→ Visual + Component + Asset + Motion Contracts
→ Responsive + Localization + Accessibility + Performance
→ Prototype + Usability Evidence
→ Instrumentation/Experiment Plan when needed
→ Implementation + Design Ops Handoff
→ Rendered QA + Release Evidence + Learning
```

الـRouter موجود في `orchestration/ROUTER.md` و`orchestration/router.json`. لا يتم تحميل الـ34 Skill معًا؛ يتم اختيار أقل مجموعة تغيّر القرار فعليًا.

## بداية قوية لأي مشروع

```text
Use design-director.

Read all available project truth and locked decisions. Classify the surface,
primary user/job, content and product truth, languages, devices, risk, and
existing system maturity. Select one domain pack.

Activate only the specialist skills that can change a material decision. When
user evidence exists, synthesize it with user-research-synthesis. When current
public evidence matters, run the research pipeline safely. For ambitious or
underspecified visual work, create three materially different, originality-
audited directions before production code.

After direction lock, produce the applicable UX, content, conversion/data,
brand-world, visual, component, asset, motion, responsive, localization,
accessibility, trust, performance, measurement, and delivery contracts. Test
high-risk journeys with representative task evidence, implement approved truth,
and finish with design-ops-handoff plus visual-qa-refinement. Fix all blocking
and major findings before approval.
```

## أهم الأدلة

- `docs/START-HERE.md`
- `orchestration/ROUTER.md`
- `docs/SKILLS-CATALOG.md`
- `docs/V1.2-SPECIALIST-SKILLS.md`
- `docs/RESEARCH-AND-INSPIRATION.md`
- `evals/RUNBOOK.md`
- `INSTALL-QUICK-AR.md`

## مبدأ أساسي

الأداة لا تصبح خارقة بكثرة الملفات وحدها. قوتها تأتي من: Truth واضح، Skills متخصصة تُحمّل عند الحاجة، Evidence حقيقي، Originality، Outputs قابلة للاختبار، Browser/Prototype feedback، وCritic مستقل.


---

<a id="source-version"></a>

## Original source file: `VERSION`

Source SHA-256: `1e5b51cde515396a9fa762909cf8ca6584ccc564b325d2eebeea76175fe95c4d`  
Source bytes: `6`

````text
1.2.0
````


---

<a id="source-docs-architecture-md"></a>

## Original source file: `docs/ARCHITECTURE.md`

Source SHA-256: `06808df11cf44926216f5db1231bf4f53caa5e3254e0267830a5560940a70ec0`  
Source bytes: `2152`

# HDI-OS Architecture — v1.2

## Truth layer

Project truth and locked decisions: product, brand, content, design, motion, quality, commercial/policy constraints, and explicit unknowns.

## Evidence layer

User research synthesis, live-web research, category/trend/reference intelligence, source provenance, de-fixation, originality, and prototype usability evidence.

## Direction layer

The design director selects domain packs and the smallest skill set, evaluates original territories, and locks one coherent direction. Brand-world building expands strategic meaning into a reusable visual universe.

## Experience layer

UX architecture, information/content design, ethical conversion, data visualization, and public discoverability define how people understand and complete tasks.

## Craft and asset layer

Composition, typography, color/imagery, components, motion, and asset-production direction define high-fidelity and production contracts.

## System and risk layer

Design-system governance, responsive/RTL, localization, inclusive accessibility, trust/privacy/security, and performance protect scale, markets, agency, and quality.

## Advanced layer

An advanced-experience gate decides whether 3D/generative work is justified. Creative Coding Lab isolates uncertain techniques; Spatial 3D World Building directs approved production scenes.

## Learning and delivery layer

Product metrics/instrumentation and experiment optimization produce trustworthy learning. Design-to-code and design-ops handoff convert contracts to owned release work. Visual QA independently inspects rendered evidence.

## Deterministic support

Standard-library tools validate and install the bundle, initialize core/extended project files, scaffold research, record sources/preferences, score reviews, and build manifests. Playwright tooling captures browser evidence and common accessibility/overflow failures.

## Progressive disclosure

Top-level descriptions route the model; detailed workflows and `references/` load only when needed. Domain packs and project workbooks stay conditional. This prevents a 34-skill system from becoming a 34-skill prompt.


---

<a id="source-docs-customization-md"></a>

## Original source file: `docs/CUSTOMIZATION.md`

Source SHA-256: `2c094fa87aea4a1ba46d5cf31c227edf48f6e84ffc561137075bff2f1a93a82e`  
Source bytes: `2071`

# Customization Guide

## Change taste without weakening the process

Put brand-specific preferences in `BRAND.md` and `DESIGN.md`, not inside every skill. Put stable personal preferences in the memory schemas. Keep skills focused on process and judgment.

## Add a domain pack

A good domain pack defines:

- Primary success metric.
- Dominant user behavior.
- Information density.
- Required screen or section patterns.
- Design priorities.
- Common failure modes.
- Quality gates unique to the surface.
- Recommended skill activation order.

## Add a reference card

Do not store only a screenshot and a URL. Add structured analysis: use case, layout topology, typography behavior, color roles, imagery, motion, why it works, what is transferable, and what must not be copied.

## Modify a skill

1. Define the behavior you want to improve.
2. Add or update an eval before editing the skill.
3. Keep the description narrow enough to route reliably.
4. Put heavy examples in `references/`.
5. Compare baseline and skill-assisted runs.
6. Keep the change only when it improves the target behavior.


## Add a research source type or lane

1. Define the design decision it serves.
2. Add it to the source schema or skill reference only when current fields cannot represent it.
3. Add an eval that distinguishes it from existing lanes.
4. Preserve source tier, provenance, limitations, security, and non-copy boundaries.
5. Update the validator only for deterministic checks; do not encode subjective truth as a count.

## Add a new skill without creating overlap

Document its trigger, owned decision, required inputs, output artifact, handoffs, boundary cases, and eval. A new style library is usually a reference file or domain pack—not a top-level skill.

## v1.2 eval admission rule

Every new top-level skill needs at least one positive case, one boundary case that proves it does not over-trigger, and one adversarial case that rejects an invalid shortcut while preserving the legitimate objective. A useful method that activates everywhere is still a bad skill.


---

<a id="source-docs-next-skills-roadmap-md"></a>

## Original source file: `docs/NEXT-SKILLS-ROADMAP.md`

Source SHA-256: `0fc7f8dca2885d3d2be5faf6e2bb42148e2ff4ff111ab003e82c090634804a42`  
Source bytes: `1637`

# HDI-OS Roadmap — After v1.2

## Completed in v1.2.0

All 18 previously proposed skills are implemented and integrated: user research, usability testing, brand world, content/information, conversion, data visualization, design-system governance, asset production, performance, experiments, trust/privacy/security, localization, creative coding, spatial 3D, inclusive accessibility, SEO/discoverability, design ops/handoff, and product metrics/instrumentation.

Each has positive, boundary, and adversarial eval coverage.

## Recommended v1.3 work — improve depth, not skill count

1. Run clean A/B evals for all 71 cases and revise weak descriptions/instructions.
2. Build a curated user-research fixture library and anonymized usability recordings/transcripts.
3. Add browser automation for semantic snapshots, locale matrices, performance budgets, visual diffs, and telemetry assertions.
4. Connect design tokens, Storybook, Figma, analytics, and issue trackers through optional adapters.
5. Build domain-specific specialist packs for healthcare, finance, education, local services, and enterprise operations only where evidence justifies them.
6. Create a versioned design-learning store from accepted/rejected pairs without turning one user's taste into universal quality.
7. Add security and privacy review by qualified owners for high-stakes deployments.

## Admission rule for future skills

A new top-level skill joins only when its trigger is distinct, its output is reusable, it improves evals beyond baseline, it does not over-trigger, and it cannot be expressed more efficiently as a reference inside an existing skill.


---

<a id="source-docs-skills-catalog-md"></a>

## Original source file: `docs/SKILLS-CATALOG.md`

Source SHA-256: `b18e84635f3cb91e33c7445d33488e8f3ad8bc69947db66c4ec0645ee2faf974`  
Source bytes: `13352`

# HDI-OS Skills Catalog — v1.2.0

34 focused skills. Activate only the smallest set that can change a material decision.

## Direction and research

| Skill | What it adds |
|---|---|
| `design-director` | Directs complex website, app, landing-page, dashboard, redesign, and visual-concept work before implementation. Use to classify a design task, choose the right specialist skills and domain pack, create distinct art directions, resolve design conflicts, set phase gates, and prevent premature generic coding. |
| `web-design-research` | Researches the live web before designing websites, apps, landing pages, dashboards, commerce, or immersive experiences. Use when current competitors, category conventions, audience expectations, design precedents, product journeys, technology feasibility, cultural context, or recent visual patterns must be discovered and documented with source provenance before art direction or implementation. |
| `competitive-experience-intelligence` | Benchmarks live competitor, category-leader, substitute, and aspirational experiences at the journey and state level. Use when a website or product must understand expected conventions, trust mechanisms, conversion paths, product claims, onboarding, mobile behavior, category sameness, friction, and defensible differentiation before UX or art direction. |
| `trend-cultural-intelligence` | Evaluates current design trends, technology signals, visual culture, language, script, regional behaviors, and local credibility before they enter a website or product. Use when a direction must feel contemporary or culturally specific without chasing fads, stereotyping an audience, harming accessibility, or importing a global visual trend that conflicts with the brand and task. |
| `reference-intelligence` | Decomposes selected website, app, brand, typography, motion, product, and image references into transferable design principles. Use after sources are supplied or discovered, for detailed reference-image analysis, composition and behavior benchmarking, execution matching, and transfer-versus-non-copy decisions; use web-design-research to find sources and inspiration-synthesis to combine them into original directions. |
| `inspiration-synthesis` | Converts researched websites, products, visual references, cultural material, and distant-domain analogies into original design territories. Use after sources have been collected and decomposed, when the agent must avoid fixation, combine multiple principles, generate genuinely different concepts, preserve provenance, and prove that the proposed direction is adaptation rather than imitation. |

## User evidence and validation

| Skill | What it adds |
|---|---|
| `user-research-synthesis` | Synthesizes interviews, field notes, support logs, reviews, surveys, sales conversations, and behavioral evidence into traceable jobs, mental models, friction, trust needs, segments, opportunities, and design requirements. Use after user evidence exists and before committing important UX, content, product, or conversion decisions. |
| `prototype-usability-testing` | Plans, conducts, or structures moderated and agent-assisted usability tests for prototypes and implemented flows. Use to evaluate whether representative users can understand and complete realistic tasks, capture observable evidence, assign severity, and turn findings into verified design revisions. |

## Product, content, conversion, and data

| Skill | What it adds |
|---|---|
| `ux-architecture` | Designs information architecture, navigation, user journeys, forms, screen anatomy, task priority, permissions, and loading-empty-error-success states. Use before styling dashboards, SaaS products, mobile apps, onboarding, booking, checkout, admin tools, or any interface where usability and workflow structure matter. |
| `content-information-design` | Turns complex product, service, policy, operational, or marketing information into clear message architecture, page narratives, labels, diagrams, comparisons, tables, annotations, progressive disclosure, and content models. Use when the design problem is partly one of hierarchy, comprehension, scanability, or information density. |
| `conversion-behavior-design` | Designs ethical decision journeys for landing pages, pricing, onboarding, booking, checkout, lead forms, trial activation, and human handoff. Use to align promise, proof, objections, trust, commitment, CTA hierarchy, and measurable hypotheses without dark patterns, fake urgency, or fabricated social proof. |
| `data-visualization` | Designs charts, tables, KPI views, maps, dashboards, and analytical interactions from user questions and data semantics. Use to choose accurate encodings, comparisons, scales, annotations, uncertainty, color, accessibility, responsive behavior, and data-quality states instead of decorating dashboards with arbitrary charts. |
| `seo-discoverability-information` | Connects public-web content architecture, semantic HTML, internal linking, metadata, structured data, rendering, performance, locale discovery, and answerability to real user needs. Use when websites must be crawled, indexed, understood, shared, and navigated without allowing SEO tactics to damage clarity or product truth. |

## Brand and visual craft

| Skill | What it adds |
|---|---|
| `brand-world-building` | Builds a distinctive, scalable visual and experiential world from brand strategy. Use to define concept thesis, visual verbs, shape grammar, materials, typography behavior, imagery, characters, props, environments, icons, motion, sound direction, production rules, and refusal rules across websites, apps, campaigns, and generated assets. |
| `visual-composition` | Builds layout systems, grids, focal hierarchy, visual mass, whitespace, rhythm, density, controlled asymmetry, section pacing, and responsive composition. Use when creating or repairing the structure of a page, screen, dashboard, hero, editorial layout, or reference-matched interface before decorative styling. |
| `typography-content` | Designs typography systems and content hierarchy for websites, apps, dashboards, editorial layouts, Arabic RTL, English LTR, and mixed-script interfaces. Use for font selection, type scales, line length, wrapping, numerals, labels, UX writing, display typography, bilingual pairing, and fixing weak or generic text presentation. |
| `color-imagery` | Creates role-based color systems and coherent photography, illustration, iconography, product-screenshot, and 3D asset direction. Use for palette design, contrast, light/dark surfaces, semantic colors, visual material, AI image consistency, asset briefs, and replacing generic gradients or mismatched imagery. |
| `asset-production-direction` | Creates production-ready art direction, generation briefs, shot lists, identity locks, technical specifications, QA, rights tracking, and delivery matrices for photography, illustration, 3D, icons, product mockups, generated imagery, and motion-ready assets. |

## Components, systems, trust, and markets

| Skill | What it adds |
|---|---|
| `component-system` | Designs scalable UI tokens, primitives, components, variants, states, composition APIs, and documentation for React or other interface systems. Use when building or auditing a design system, component library, Storybook, dashboard UI, form system, reusable landing-page modules, or when one-off styling and state gaps are causing inconsistency. |
| `design-system-governance` | Governs design tokens, components, patterns, documentation, ownership, contribution, versioning, deprecation, migration, visual regression, and cross-brand evolution. Use when a design system must scale across teams, products, codebases, themes, or AI agents without inconsistency or accidental breaking changes. |
| `responsive-rtl` | Designs and audits responsive, mobile, Arabic RTL, English LTR, localization, and mixed-direction interface behavior. Use for breakpoint strategy, recomposition, mobile navigation, long translated content, CSS logical properties, direction-aware icons and motion, prices, phone numbers, dates, tables, or any bilingual website or app. |
| `localization-culturalization` | Adapts products and websites across languages, scripts, locales, markets, and cultural contexts beyond simple translation or RTL mirroring. Use for terminology, pluralization, dates, numbers, currency, names, addresses, input, legal/commercial differences, imagery, content expansion, journeys, and market-specific trust behavior. |
| `inclusive-accessibility-design` | Designs inclusive defaults and alternatives for visual, auditory, motor, cognitive, speech, language, literacy, age, neurodiversity, and situational constraints. Use before and during design to go beyond compliance checks and ensure core tasks remain perceivable, operable, understandable, and robust. |
| `trust-privacy-security-ux` | Designs understandable permissions, consent, data visibility, authentication, recovery, destructive actions, audit trails, billing/security messages, and high-stakes confirmations. Use when users must decide who can access data, understand consequences, recover safely, or trust sensitive workflows without fear-based or manipulative design. |

## Motion, performance, and advanced

| Skill | What it adds |
|---|---|
| `motion-interaction` | Designs purposeful UI motion, microinteractions, state transitions, scroll storytelling, choreography, easing, timing, gesture behavior, and reduced-motion alternatives. Use for animated websites, product feedback, menus, overlays, onboarding, shared-element transitions, GSAP/Framer Motion work, or when motion feels random, excessive, or disconnected from meaning. |
| `performance-perceived-quality` | Designs real and perceived speed, loading behavior, progressive rendering, image/video/font/3D budgets, skeletons, optimistic states, transition continuity, error recovery, and progressive enhancement. Use when performance materially affects UX, conversion, accessibility, or advanced visual fidelity. |
| `advanced-experience` | Plans and governs justified 3D, WebGL, shaders, generative visuals, pinned-scroll storytelling, cinematic product scenes, spatial interfaces, and other advanced web experiences. Use only when immersive technology materially improves explanation or brand impact and needs storyboarding, performance budgets, mobile fallbacks, reduced motion, and progressive enhancement. |
| `creative-coding-lab` | Rapidly prototypes generative art, Canvas, SVG, WebGL shaders, particles, physics, procedural typography, and novel interactions in isolated experiments. Use to test aesthetic and technical feasibility before committing experimental code to a production experience. |
| `spatial-3d-world-building` | Directs production-grade spatial and 3D web experiences: environment, camera language, lighting, materials, asset hierarchy, scale, LOD, interaction, scene continuity, scroll narrative, audio role, performance, fallback, and accessibility. Use after an advanced 3D direction is justified and needs detailed world and scene contracts. |

## Measurement, implementation, and release

| Skill | What it adds |
|---|---|
| `product-metrics-instrumentation` | Defines privacy-aware product events, properties, exposures, identities, funnels, task outcomes, quality metrics, dashboards, semantic naming, validation, governance, and analysis readiness. Use when design decisions, usability, conversion, experiments, performance, or product health must be measured reliably. |
| `experiment-optimization` | Turns uncertain design choices into ethical, measurable experiments and interpretable decisions. Use for A/B tests, multivariate tests, staged rollouts, prototype comparisons, or iterative optimization when causal evidence is needed and the team must protect guardrails, segments, data quality, and user trust. |
| `design-to-code` | Implements approved website and application designs as production-quality frontend code while preserving design tokens, hierarchy, real content, accessibility, responsive and RTL behavior, component states, and motion contracts. Use after art direction and UX contracts are defined, or when translating Figma/reference designs into an existing React, TypeScript, CSS, Tailwind, or component-system codebase. |
| `design-ops-handoff` | Turns approved design work into an owned, traceable production package across product, design, engineering, content, assets, analytics, QA, accessibility, localization, and release. Use to define readiness, source of truth, dependencies, acceptance criteria, implementation review, change control, and post-release learning. |
| `visual-qa-refinement` | Independently reviews rendered websites and apps, captures multi-viewport evidence, audits visual hierarchy, fidelity, usability, states, responsive behavior, Arabic RTL, accessibility, and generic AI patterns, then prioritizes fixes and repeats verification. Use before final approval, after implementation, or when a design “feels wrong” but needs a specific diagnosis. |

## Default gates

```text
Truth → Evidence → Original Direction → Specialist Contracts → Prototype/Test
→ Implementation/Handoff → Rendered QA → Release/Measurement → Learning
```

The router and non-trigger rules prevent context bloat and overengineering.


---

<a id="source-docs-v1-2-specialist-skills-md"></a>

## Original source file: `docs/V1.2-SPECIALIST-SKILLS.md`

Source SHA-256: `da346c8a9eb81db8f29a54c59e72706251f4cb5f2b0864f5266f05b60192569b`  
Source bytes: `4029`

# HDI-OS v1.2 — Specialist Skills Implementation

v1.2 completes all 18 capabilities proposed in the previous roadmap. They are grouped by the decision they improve, not by visual style.

## 1. User truth and validation

- `user-research-synthesis` converts real evidence into jobs, mental models, behavioral segments, friction/trust, and traceable requirements.
- `prototype-usability-testing` proves whether representative users can complete realistic tasks; AI walkthroughs remain preflight only.

## 2. Brand, content, commercial, and analytical design

- `brand-world-building` creates an ownable world across product, marketing, assets, motion, and 3D.
- `content-information-design` transforms complexity into message ladders, labels, diagrams, comparisons, tables, disclosures, and content models.
- `conversion-behavior-design` builds ethical promise/proof, objection, pricing, form, CTA, and human-handoff journeys.
- `data-visualization` maps analytical questions and metric truth to accurate, accessible charts and tables.

## 3. Production scale and quality

- `design-system-governance` controls ownership, sources, contribution, versioning, deprecation, migration, and regression.
- `asset-production-direction` turns approved worlds/layouts into consistent, rights-aware, optimized production assets.
- `performance-perceived-quality` designs useful-first loading, stability, responsiveness, media/3D budgets, progressive enhancement, and recovery.
- `experiment-optimization` creates ethical causal experiments with assignment/exposure integrity, guardrails, and decision thresholds.
- `trust-privacy-security-ux` designs sensitive permissions, consent, authentication, recovery, visibility, and high-risk actions.
- `localization-culturalization` handles language, script, formats, input, market rules, imagery, and market-specific journeys beyond RTL.

## 4. Advanced experience and inclusive delivery

- `creative-coding-lab` isolates and benchmarks uncertain generative, shader, Canvas, SVG, or particle ideas before production.
- `spatial-3d-world-building` directs production camera, scene continuity, environment, light, materials, assets, LOD, loading, inputs, and fallbacks.
- `inclusive-accessibility-design` creates inclusive requirements and test evidence before and during design—not only after implementation.
- `seo-discoverability-information` connects people-first content/IA with semantic public delivery, URLs, links, metadata, rendering, and truthful structured data.
- `design-ops-handoff` converts approved intent into owned production, acceptance, rollout, monitoring, and learning contracts.
- `product-metrics-instrumentation` defines exact metrics, events, identity, consent, exposure, validation, dashboards, and telemetry governance.

## Skill construction standard

Every v1.2 skill contains:

- A distinct trigger and explicit non-trigger.
- Required truth/evidence.
- Core principles.
- Seven-step decision workflow.
- Reusable output contracts.
- Hard approval gates.
- Explicit handoffs to neighboring skills.
- Anti-patterns.
- OpenAI interface metadata.
- Three project worksheets.
- Three eval modes: positive, boundary, and adversarial.

## Why the boundary eval matters

A large skill library can make an agent worse when every task activates everything. Boundary cases test whether the model can keep a small task small, route work correctly, and avoid producing fake evidence or unnecessary process.

## Why the adversarial eval matters

Design pressure often asks for shortcuts—fake proof, exact copying, dark patterns, misleading charts, unsafe analytics, blind mirroring, inaccessible canvas, or unbounded 3D. Adversarial cases test whether the skill protects quality while still offering a practical route to the legitimate goal.

## Optional workbooks

Run `python hdi.py init ... --extended` to create all 18 specialist project files. For smaller projects, rely on each skill's `references/` worksheets or create only the artifacts that a real decision needs.


---

<a id="source-docs-workflow-md"></a>

## Original source file: `docs/WORKFLOW.md`

Source SHA-256: `4c8219ace67094dbdde990cc172d2e235960597d05930d596a9608d679a2a9d3`  
Source bytes: `2644`

# HDI-OS Production Workflow — v1.2

## Phase 0 — Truth and intake

Define user, job/decision, product/commercial truth, content, surface, brand, languages/markets, devices, system maturity, risk, and unknowns.

## Phase 1 — Evidence

When evidence exists, `user-research-synthesis` converts it into traceable jobs, mental models, friction, trust, segments, and requirements. When current public evidence matters, the web/category/trend/reference pipeline creates provenance and non-copy boundaries.

## Phase 2 — Direction and world

`inspiration-synthesis` creates original territories; `design-director` locks one; `brand-world-building` defines visual verbs, grammar, imagery, materials, and cross-surface behavior when a distinct world is needed.

## Phase 3 — Experience architecture

Use `ux-architecture`, `content-information-design`, `conversion-behavior-design`, `data-visualization`, and `seo-discoverability-information` according to the surface and decision.

## Phase 4 — Visual and system contracts

Create composition, typography, color/imagery, component, design-system, asset, and motion contracts. Keep real product proof separate from decorative assets.

## Phase 5 — Inclusion, markets, trust, and performance

Define responsive/RTL, localization/culturalization, accessibility, permissions/consent/recovery, loading/stability/responsiveness, and progressive fallbacks before implementation.

## Phase 6 — Advanced proof when justified

`advanced-experience` gates the need. `creative-coding-lab` proves uncertain techniques in isolation. `spatial-3d-world-building` directs approved production worlds only after graybox, accessibility, and performance gates.

## Phase 7 — Prototype and usability

Test critical tasks with realistic content, states, devices, languages, and representative participants. Preserve observable evidence, severity, revisions, and retest closure.

## Phase 8 — Measurement and experiments

Define exact metrics/events/identity/privacy/exposure semantics. Use experiments only for causal uncertainty—not to postpone obvious truth, accessibility, or severe usability fixes.

## Phase 9 — Implementation and handoff

`design-to-code` implements approved contracts. `design-ops-handoff` packages sources, owners, dependencies, acceptance, change control, rollout, rollback, monitoring, and release learning.

## Phase 10 — Rendered QA and release

Capture real routes, states, roles, locales, viewports, inputs, and capability modes. Run deterministic and expert checks, close blocking/major findings, verify instrumentation, and record limitations and reusable learning.

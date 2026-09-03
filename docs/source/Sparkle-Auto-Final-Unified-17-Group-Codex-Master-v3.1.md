# Sparkle Auto Landing Page — Final Unified 17-Group Codex Execution + Web Visual Design & Asset Production Master Plan **v3.1**

**17-Group Execution Plan** — `GROUP 00 → GROUP 16`

Integrated Copywriting + Design Reference Reverse-Engineering + Creative Direction + Visual Asset Production + Build Execution Master Plan

---

| | |
|---|---|
| **Document type** | Copywriting + Creative Direction + Design System + Visual Asset Production + Product Proof + Motion + Responsive/Bilingual + Technical Build + QA + Release Plan |
| **Version** | 3.1 — Final Source-Preserving Codex Pack |
| **Source 01** | `Sparkle-Auto-Master-Plan-v2.md` — preserved in full |
| **Source 02** | `Sparkle-Auto-Web-Visual-Design-Asset-Production-Master-v1.md` — preserved in full |
| **Group count** | 17 groups: GROUP 00 through GROUP 16 |
| **Primary experience** | Arabic / RTL |
| **Secondary experience** | English / LTR |
| **Creative direction** | Premium Soft Stylized 3D × Egyptian Editorial Thinking × Fresh Blue Neo-Brutalism × Real Sparkle Auto Product Proof |
| **Primary conversion** | احجز مراجعة تشغيل لفروعك |
| **Page form** | One long landing page containing 15 sections, one sticky Header, and one Footer |
| **Status** | Unified proposal — GROUP 00 and GROUP 01 must be approved before section execution |

---

## V3 SOURCE-PRESERVATION GUARANTEE

1. **No section, rule, copy block, table, checklist, contract, QA item, asset requirement, commercial note, or release condition from either source document has been intentionally removed.**
2. The complete first source is distributed across GROUP 00 → GROUP 16 in its original execution order.
3. The complete second source is embedded inside GROUP 01 as the full creative and visual-production authority, then its section-specific requirements are repeated as execution addenda inside GROUP 02 → GROUP 16.
4. The ZIP package also contains untouched source copies and a merge-coverage ledger.
5. Repetition is intentional where it makes a group independently usable by Codex. Repeated text does not create a second authority; the unified rules below decide conflicts.

## V3 UNIFIED AUTHORITY ORDER

At any conflict, use this order:

```text
01. Product Truth
02. Approved Copy
03. Legal / Privacy / Commercial Rules
04. Business Goal
05. Accessibility — WCAG 2.2 AA
06. Responsive usability
07. RTL / LTR correctness
08. Performance Budget
09. V3 Unified Merge Decisions in this document
10. Approved exact production tokens and manifests after GROUP 01 calibration
11. Approved Creative North Star and Visual Boards B01–B12
12. Reference Image composition and relative proportions
13. Source-document exploration ranges and recommendations
```

The original `SINGLE PRIORITY LADDER` remains preserved in GROUP 00. This V3 layer only resolves overlaps created by combining the two complete source plans.

## V3 CONFLICT-RESOLUTION AND INTEGRATION DECISIONS

### M-01 — One canonical token system

- The production implementation keeps the original canonical names in `src/styles/tokens.css`: `--sparkle-blue`, `--blue-text`, `--dark-blue`, `--deep-navy`, `--soft-blue`, `--surface-cloud`, `--surface-ice`, `--surface-pale`, and the original spacing/type/motion tokens.
- The visual plan’s `--sa-*` names remain preserved as design-board terminology and may be implemented as aliases only when useful.
- There must never be two competing production token sources.

### M-02 — Exact values versus exploration ranges

- Exact values already specified by the execution plan are the **provisional production baseline**.
- Ranges in the visual-production plan are **exploration and visual-board targets**, not values to hardcode directly.
- GROUP 01 performs B01–B12 plus a Hero/Product-heavy calibration and Problem/Editorial-heavy calibration.
- After calibration, every production token is one exact value. The final approved `tokens.css` wins over all ranges.
- Any exact value changed from the provisional baseline follows Change Control and records affected groups.

### M-03 — Creative boards and `/styleguide` are both mandatory

- `/styleguide` validates implemented components, states, accessibility, language, and responsive behavior.
- B01–B12 validate creative direction, typography specimens, visual world, Owner consistency, motifs, product proof, bilingual composition, and motion.
- Neither replaces the other.

### M-04 — Unified GROUP 01 gate

GROUP 01 is approved only when **both** source gates pass:

- Original GROUP 01 deliverables and automated acceptance gate.
- Visual Boards B01–B12, Character/3D World approval, Product Proof board, Section Asset Map, eight-state comparison board, and motion prototype.

### M-05 — Eight designed states plus twelve automated QA states

- Human visual-design approval uses the visual plan’s eight states: Arabic/English × desktop/tablet/large-mobile/narrow-mobile.
- Automated visual and overflow QA uses the execution plan’s twelve combinations: six viewports × two languages.
- Both are required; neither replaces the other.

### M-06 — Placeholder protocol versus no-build blockers

- Missing approved assets may use the original same-aspect-ratio Placeholder Protocol for **structural implementation, responsive development, and motion prototyping**.
- A section cannot receive final visual approval, production approval, or release approval while a required real screenshot, directional asset, transparent Owner asset, or commercial fact is unresolved.
- `test:assets` must report zero placeholders in production.

### M-07 — One unified asset manifest

`content/assets.manifest.json` combines:

- Original technical IDs, paths, minimum dimensions, and placeholder behavior.
- Visual plan production class, source/reference, language applicability, RTL/LTR requirement, viewport exports, alt role, approval status, approver/date, product version/date, weight budget, and exceptions.

### M-08 — One unified Owner system

The Owner system combines:

- Original 12-render technical inventory and group mapping.
- Visual plan pose-purpose map, identity invariants, watch-hand rule, transparent master requirements, contact-shadow separation, foreground matte, responsive exports, approval metadata, and mobile crop proof.
- If two rows describe the same purpose, they become one asset record with aliases; no identity rule is discarded.

### M-09 — Repo structure plus design-source structure

- The original application repository structure remains the runtime/code authority.
- The visual plan’s `01_FOUNDATIONS` through `09_MANIFESTS_APPROVALS` structure lives under `design-source/` and stores source boards, character masters, props, motion prototypes, approvals, and exports.
- Only optimized production files referenced by the manifest enter `public/assets/`.

### M-10 — Reference review versus regression baseline

1. Build the static visual design.
2. Compare Reference and build at the same viewport using side-by-side and opacity overlay.
3. Complete the Reference Diff Sheet and human creative tests.
4. Approve the section visually.
5. Only then create/update Playwright visual-regression baselines.

Reference matching proves the first design is right. Regression testing proves it stays right.

### M-11 — Premium Scroll values are prototype targets until tested

- The preserved `450vh`, `700vh`, and `420vh` values remain initial technical targets.
- They are not immune to GROUP 01/GROUP 07–10 prototype testing, short-viewport behavior, reduced motion, scroll-fatigue review, or real-user usability findings.
- Any adjustment is documented in the Diff/Change Log and must preserve all story states and content.

### M-12 — Stricter accessibility and performance result wins

- Where two source budgets differ, use the stricter limit until measured evidence and an approved Change Request justify another value.
- Product readability cannot be sacrificed merely to hit a byte target; solve through responsive crops, AVIF/WebP, source sizing, conditional delivery, and lazy loading.

### M-13 — FAQ default state

- The original locked decision `D-18` wins: all FAQ items are closed on initial load.
- The visual plan’s “one default-open item unless approved otherwise” remains preserved as an explored option but is not the production default.

### M-14 — Section-specific one-focal-action rule

- Every section keeps exactly one dominant visual action from the visual plan.
- Reference-image similarity may enrich composition but may not add a second competing metaphor.

### M-15 — Creative visual language lock

All custom website visuals use one shared system:

```text
Premium Soft Stylized 3D execution
× Egyptian Editorial idea, acting, scale, and metaphor
× Fresh Blue tactile Neo-Brutalist web structure
× Real Sparkle Auto Product Proof
```

The Owner, cast, cars, wash world, props, water, and scene lighting must feel like one coherent Sparkle Auto operating world.

### M-16 — Scoped motion cleanup

- Every Premium Scroll section owns and cleans up only its own animation context and triggers.
- A section cleanup must never globally destroy another section’s triggers.
- Pinning implementation is validated in the actual layout rather than forced through a global one-size-fits-all override.

### M-17 — Conversion and human-use validation

Before final release, instrument at least the major CTA, pricing, product-story, story-skip, form-view/start/error/success, WhatsApp, and language-switch events. Run a small target-user usability pass to confirm comprehension, scroll comfort, product proof, pricing clarity, and form completion. This supplements rather than replaces all automated QA.

---

---

---

# GROUP 00 — REPO, STACK, GLOBAL EXECUTION CONTRACT & SOURCE-PRESERVATION RULES

> **Codex start rule:** Start here. Establish the repository, execution contracts, locked registries, blockers, global rules, tests, and source-of-truth files before any visual section work.

## ORIGINAL EXECUTION / TECHNICAL / GLOBAL-RULE SOURCE — PRESERVED IN FULL

### SOURCE PLAN PREAMBLE — PRESERVED IN FULL

### Sparkle Auto Landing Page — Codex Execution Master Plan **v2.0**

**17-Group Execution Plan** (GROUP 00 → GROUP 16)

Integrated Copywriting + Design Reference Reverse-Engineering + Build Execution Master Plan

---

| | |
|---|---|
| **Document type** | Copywriting + Design + Visual Reference Reverse-Engineering + Build Execution Plan |
| **Version** | 2.0 — Execution-Ready |
| **Supersedes** | v1.0 (16-Group Master Plan) |
| **Status** | Proposal — requires approval before it becomes the execution reference |
| **Project** | Sparkle Auto |
| **Primary direction** | Fresh Blue Neo-Brutalism + Premium Clean SaaS Marketing |
| **Primary language** | Arabic / RTL first |
| **Secondary language** | English / LTR |
| **Responsive target** | Large Desktop + Desktop + Tablet + Large Mobile + Narrow Mobile |
| **Reference execution principle** | Maximum practical similarity to the supplied Section Reference Images without breaking Product Truth, approved Copy, usability, responsive behavior, accessibility, performance, RTL/LTR correctness, or commercial rules. |

---

#### 0.0 ليه فيه v2 أصلًا — ملخص التعديلات

الخطة v1.0 كانت ممتازة في **الاستراتيجية والـCopy والـProduct Truth**، وأقوى جزء فيها هو الـReverse-Engineering بالأرقام.

لكنها كانت **غير قابلة للتنفيذ من Codex** لأسباب محددة. v2.0 بتحافظ على **100% من محتوى v1.0** وبتضيف اللي كان ناقص.

##### التعديلات الكبيرة في v2.0

| # | المشكلة في v1.0 | الحل في v2.0 |
|---|---|---|
| 01 | مفيش Tech Stack | `GROUP 00` — Stack مقفول + Folder structure + Commands |
| 02 | Codex ما يقدرش يولد صور، والقاعدة بتمنعه يرسم بالكود | `ASSET PLACEHOLDER PROTOCOL` + `assets.manifest.json` بأسماء ومقاسات محددة |
| 03 | مفيش Product Screenshots معرّفة | `PRODUCT SCREENSHOT MANIFEST` — 9 ملفات بأسماء ومسارات |
| 04 | النسخة الإنجليزية مالهاش Copy | `BILINGUAL CONTENT GATE` + `copy.en.json` + قرار Phase |
| 05 | الفورم مفيش Backend | `FORM CONTRACT` — endpoint، schema، validation، storage، states |
| 06 | كل الأرقام Ranges | `tokens.css` — كل Range اتحول لقيمة واحدة |
| 07 | تعارض: Reference ولا Base؟ | `SINGLE PRIORITY LADDER` — قائمة واحدة قاطعة |
| 08 | Layout معتمد + Copy غير معتمد | `UNAPPROVED SLOT REGISTRY` — قرار مكتوب لكل خانة |
| 09 | جدول الخلفيات مكرر بقيمتين | جدول واحد نهائي بـHex |
| 10 | Gradients ممنوعة ومسموحة | حد فاصل رقمي |
| 11 | Green success + ممنوع لون جديد | `SEMANTIC COLOR SET` معرّف |
| 12 | **Contrast فاشل في الـPrimary Button والـFinal CTA** | `CONTRAST LOCK` — نسب محسوبة + قرار اللون |
| 13 | Premium Scroll مفيش له عقد تنفيذ | `PREMIUM SCROLL TECHNICAL CONTRACT` — مكتبة + resize + fallback |
| 14 | `overflow:hidden` هيقتل كل الـsticky | `STICKY / OVERFLOW LAW` |
| 15 | مفيش Breakpoints من 1024→1672 | `PROPORTIONAL STAGE PATTERN` + 6 breakpoints محددة |
| 16 | مفيش CTA Registry ولا anchors | `CTA REGISTRY` + `ANCHOR MAP` |
| 17 | الفيديوهات مفيش لها مواصفات | `VIDEO CONTRACT` + captions |
| 18 | Accessibility في الـsticky ناقصة | `inert` + `aria-hidden` + focus rules |
| 19 | Performance بالكلام | `PERFORMANCE BUDGET` بأرقام |
| 20 | Gates زي "☐ Codex فاهم" | كل Gate بقى **مخرج ملموس** + أمر تحقق |
| 21 | Codex بينسى بين الـSessions | `AGENTS.md` + `PROJECT_STATE.md` في الريبو |
| 22 | "Maximum similarity" غير قابلة للقياس | `REFERENCE DIFF SHEET` رقمي + Playwright screenshots |
| 23 | الوثيقة كبيرة على context واحد | تقسيم لملفات `docs/group-XX.md` |
| 24 | RTL/LTR = ضعف الـAssets | `LAYERED SCENE RULE` — بيلغي معظم الـvariants |

---

#### 0.1 سجل القرارات المقفولة — DECISIONS LOG

القرارات دي **مقفولة** ومش محتاجة نقاش تاني. Codex بيلتزم بيها حرفيًا.

| ID | القرار | القيمة |
|---|---|---|
| D-01 | Framework | Next.js 15 (App Router) + TypeScript (strict) |
| D-02 | Styling | Tailwind CSS v4 (CSS-first `@theme`) + `tokens.css` كمصدر وحيد |
| D-03 | Premium Scroll library | GSAP 3 + ScrollTrigger |
| D-04 | Light motion | CSS transitions + IntersectionObserver (**بدون** Framer Motion) |
| D-05 | i18n | Route segment `/[lang]` → `/ar` (default) و `/en` |
| D-06 | Copy storage | `content/copy.ar.json` + `content/copy.en.json` — **ممنوع نص hardcoded في JSX** |
| D-07 | Form backend | Next.js Server Action → Supabase table `operations_review_requests` |
| D-08 | Deploy | Vercel |
| D-09 | Images | `next/image` + WebP/AVIF + `srcset` |
| D-10 | Fonts | Self-hosted WOFF2 subsets — Cairo (Arabic) + Nunito (Latin) |
| D-11 | Container max-width | `min(1500px, 100% - 2 × gutter)` |
| D-12 | Primary button label color | **Deep Navy `#03132E`** على Sparkle Blue (نسبة 6.70:1) — مش أبيض |
| D-13 | Blue text on white | `#0077CC` (4.66:1) — **مش** `#01A2FF` (2.76:1 = فاشلة) |
| D-14 | Soft Blue `#91B1D8` | **لون حدود وزخرفة فقط — ممنوع كنص** (2.21:1) |
| D-15 | Composite scene PNGs | **ممنوعة نهائيًا** — كل مشهد طبقات منفصلة |
| D-16 | Nav "السيستم" | `#what-is-sparkle` |
| D-17 | Nav "طريقة الشغل" | `#operation-flow` |
| D-18 | Default FAQ open state | كل العناصر **مقفولة** عند التحميل (مش زي الـReference) |
| D-19 | Pricing mobile order | نفس ترتيب Desktop (تشغيل → نمو → توسع)، والنمو بيفضل مرفوع بصريًا |
| D-20 | Copyright year | `new Date().getFullYear()` — ممنوع رقم ثابت |

---

#### 0.2 البنود الموقوفة — BLOCKER REGISTRY

دي حاجات **Codex ما يقدرش يكملها من غيرك**. كل واحدة ليها ID، وCodex بيحط `TODO(BLK-XX)` في الكود ويكمل بـPlaceholder معرّف.

| ID | البند | مين مسؤول | بيوقف إيه | Placeholder المؤقت |
|---|---|---|---|---|
| **BLK-01** | ملفات الـOwner Character (12 render) | التصميم / ChatGPT Image | Hero, Problem, WhatIs, WhoFor, Setup, Pricing, Trial, FinalCTA | `placeholder-owner.svg` رمادي عليه الاسم |
| **BLK-02** | 9 Product Screenshots حقيقية | المنتج | Hero, Product Explorer, Setup | `placeholder-screen.svg` بنفس الـaspect ratio |
| **BLK-03** | Custom artwork (Water/Blueprint/Car/Chaos props) | التصميم / ChatGPT Image | Hero, Problem, Strategy, OpFlow, Setup, FinalCTA | `placeholder-art.svg` |
| **BLK-04** | `copy.en.json` — النص الإنجليزي المعتمد | Copy / Business | كل النسخة الإنجليزية | `/en` بيرجع 404 لحد التسليم |
| **BLK-05** | سعر باقة التوسع | Business | نشر Pricing | «يُضاف السعر المعتمد قبل النشر» |
| **BLK-05b** | وحدة «حتى 600 عربية» (شهريًا؟ إجمالي؟) | Business | نشر Pricing | النص كما هو + `TODO` |
| **BLK-06** | رقم WhatsApp + نص الرسالة | Business | Final CTA secondary | الزرار `disabled` + `TODO(BLK-06)` |
| **BLK-07** | ملفا الفيديو + Poster + Captions | Marketing | Group 07, Group 08 | الـblock مخفي بالكامل (مش box فاضي) |
| **BLK-08** | نصوص الـUnapproved Slots (جدول 0.6) | Copy / Business | 7 مواضع | الـslot متشال من الـDOM |
| **BLK-09** | روابط Privacy / Terms / Social | Legal / Business | Footer | الروابط متشالة (مش `href="#"`) |
| **BLK-10** | Supabase project + keys | Infra | إرسال الفورم | Server Action بترجع خطأ واضح في الـdev |

**قاعدة الـBlocker:** ممنوع Codex يخترع بديل. الـPlaceholder بيبان بوضوح إنه Placeholder، وبيتسجل في `PROJECT_STATE.md`.

---

#### 0.3 القاعدة الحاكمة الوحيدة — SINGLE PRIORITY LADDER

> **دي القاعدة الوحيدة للأولوية في المشروع كله. أي قائمة أولويات تانية في أي مكان — مُلغاة.**

عند أي تعارض، الأعلى يكسب:

```
01. Product Truth
02. Approved Copy
03. Legal / Privacy / Commercial Rules
04. Business Goal
05. Accessibility (WCAG 2.2 AA)
06. Responsive usability
07. RTL / LTR correctness
08. Performance Budget
09. Approved Base System (tokens.css)     ← الـBase يكسب الـReference
10. Reference Image visual similarity
```

**تفسير قاطع للبند 09 ضد 10:**

* الـ**Reference Image** بتحكم في: **التكوين، النِسب، الترتيب، مواضع العناصر، الكثافة البصرية، الإحساس العام، حجم العنصر بالنسبة لجاره**.
* الـ**tokens.css** بتحكم في: **كل قيمة رقمية فعلية** — لون، خط، radius، shadow، spacing، ارتفاع زرار.

يعني: لو الـReference باين فيها زرار radius ≈ 7px والـtokens بتقول 7px → تمام.
ولو الـReference باين فيها radius 14px والـtokens بتقول 7px → **الـtokens تكسب**، والـComposition بيفضل زي الـReference.

**ملغي من v1.0:** قاعدة "REFERENCE IMAGE PRIORITY RULE" اللي كانت بتحط الـReference فوق الـBase. وقاعدة "الـReverse-Engineering = Primary Visual Implementation Specification" بقت: *الـReverse-Engineering مصدر لقيم الـtokens وقت بنائها في GROUP 00 — وبعد ما الـtokens تتقفل، هي المصدر.*

---

#### 0.4 الملفات المقفولة — LOCKED FILES

بعد اعتماد GROUP 00، الملفات دي **ما تتغيرش إلا بـChange Request مكتوب** (PART J):

```
tokens.css                    ← كل قيمة بصرية
content/copy.ar.json          ← كل نص عربي
content/copy.en.json          ← كل نص إنجليزي
content/assets.manifest.json  ← كل asset
content/cta.registry.json     ← كل CTA وسلوكه
AGENTS.md                     ← قواعد Codex الدائمة
PROJECT_STATE.md              ← حالة الجروبات
```

**قاعدة:** أي تعديل على ملف مقفول لازم يتسجل في `PROJECT_STATE.md` تحت `## Change Log` بتاريخ وسبب، وCodex بيراجع الجروبات المعتمدة المتأثرة.

---

#### 0.5 ONE LANDING PAGE RULE — CRITICAL

الـ15 Reference Images **لا تمثل 15 صفحة مستقلة**.

هما: **15 Sections داخل Landing Page واحدة طويلة.**

تكرار الـHeader في بعض الـReference Mockups سببه إن كل Section اتصمم لوحده كـStandalone Mockup.

في التنفيذ الحقيقي:

* Header واحد فقط.
* Sticky.
* بعده الأقسام بالترتيب.
* Footer واحد فقط في النهاية.

##### الـFinal Structure

```
/[lang]  →  LandingPage (صفحة واحدة)

01  Header            #site-header
02  Hero              #hero
03  Problem           #problem
04  WhatIsSparkle     #what-is-sparkle
05  WhoIsItFor        #who-is-it-for
06  StrategyBlueprint #strategy
07  ProductExplorer   #product-explorer
08  OperationFlow     #operation-flow
09  SetupPreparation  #setup
10  Pricing           #pricing
11  Trial             #trial
12  FAQ               #faq
13  ApplicationForm   #application-form
14  FinalCTA          #final-cta
15  Footer            #site-footer
```

ومع Execution Groups:

* `GROUP 00` = Repo + Contract (جديد في v2).
* `GROUP 01` = Project Understanding + Base System.
* `GROUP 02 → 16` = الـ15 Section.

**ممنوع:**

* 15 separate routes.
* 15 independent pages.
* Header متكرر داخل كل Section.
* Footer متكرر.
* إعادة تحميل الصفحة بين الأقسام.

**استثناء وحيد مسموح:** الـroute segment `/[lang]` — ده مش صفحات منفصلة، ده نسختين لغة لنفس الصفحة.

---

#### 0.6 UNAPPROVED SLOT REGISTRY — أخطر جدول في الخطة

المشكلة في v1.0: الـReverse-Engineering بيوصف **Layout بيعتمد هيكليًا على كلام مش معتمد**، وفي نفس الوقت فيه قاعدة "شيل أي كلام مش معتمد". النتيجة: خانات فاضية بتكسر التكوين، أو Codex بيخترع كلام.

**الحل:** قرار مكتوب لكل خانة. Codex بيقرا الجدول ده ومش بيجتهد.

| Slot ID | المكان | اللي في الـReference | القرار في v2.0 |
|---|---|---|---|
| SLOT-01 | Hero — mini benefit strip | Smart Bookings / Live Car Status / Team Management / Clear Reports | ✅ **مُعتمد** — النص العربي في §0.7 |
| SLOT-02 | Hero — كارت صغير | "Built for car wash owners in Egypt" | ❌ **يُحذف** — الـHero فيه Product Visual Copy بالفعل |
| SLOT-03 | What Is — 3 Mini Cards | Booking Experience / Operations Control / Retention & Loyalty | ✅ **مُعتمد** — دول الـ3 Business Pillars الموجودين في v1.0 |
| SLOT-04 | Who For — 4 Audience Tiles | Traditional / Detailing / Express / Multi-Branch | ✅ **مُعتمد** — النص العربي في §0.7 |
| SLOT-05 | Product Explorer — annotations | "Real-time insights at a glance" إلخ | ✅ **مُعتمد** — 7 annotations معتمدة في GROUP 08 |
| SLOT-06 | Product Explorer — 3 trust items تحت | Trust claims | ❌ **يُحذف** — بديله: Summary strip بأسماء الأقسام السبعة فقط |
| SLOT-07 | Setup — feature labels جانبية | "Measurable results from day one" / "No lock-in" / "Go live with confidence" | ❌ **تُحذف كلها** — Claims غير معتمدة |
| SLOT-08 | Trial — 4 نقاط تحت | Review first / Clear goal / Real operations / Real data | ✅ **مُعتمد** — النص العربي في §0.7 (مستخرج من Trial Copy المعتمد) |
| SLOT-09 | Form — 3 explainers | Focused review / Private & secure / Solutions that fit | ✅ **مُعتمد** — النص العربي في §0.7 |
| SLOT-10 | Footer — trust items | Local support / Your data is safe | ❌ **يُحذف** — Claims غير معتمدة |
| SLOT-11 | Setup — Review stamp | SUCCESS / GUARANTEED / 100% | ❌ **يُحذف** — بديله ختم نصه «تمت المراجعة» بدون Claim |
| SLOT-12 | Footer — Social icons | أيقونات سوشيال | ⏸ **موقوف (BLK-09)** — تظهر فقط لو فيه روابط حقيقية |

**قاعدة:** لو Slot اتكتب جنبه ❌، Codex **بيشيله من الـDOM بالكامل** ويعيد توزيع المساحة — **مش** بيسيب box فاضي، **ومش** بيخترع بديل.

---

#### 0.7 نصوص الـSlots المعتمدة الجديدة

دي النصوص العربية المعتمدة للخانات اللي اتعلّم عليها ✅ فوق. تنضاف لـ`copy.ar.json`.

##### SLOT-01 — Hero benefit strip

```
حجوزات منظمة
حالة كل عربية
إدارة الفريق
تقارير واضحة
```

##### SLOT-03 — What Is / 3 Business Pillars

```
تجربة حجز أسهل
عميلك يحجز من غير مكالمات ولا لغبطة مواعيد.

تحكّم في التشغيل
تعرف كل عربية فين ومين مسؤول عنها والحساب كام.

عملاء بيرجعوا
تاريخ العميل وعروضه ومكافآته في مكان واحد.
```

##### SLOT-04 — Who For / Audience Tiles

```
مغسلة تقليدية
مركز تلميع وحماية
خدمة سريعة
تشغيل بأكتر من فرع
```

##### SLOT-08 — Trial / 4 نقاط

```
المراجعة الأول
هدف واضح
تشغيل حقيقي
بيانات حقيقية
```

##### SLOT-09 — Form / 3 explainers

```
مراجعة مركّزة
بنركز على المشكلة اللي فعلًا بتعطلك.

بياناتك عندك
بنستخدمها لفهم احتياجك والتواصل بخصوص المراجعة بس.

حل على قد شغلك
لو مش مناسب لمرحلتك، هنقولك بصراحة.
```

##### SLOT-11 — Setup / الختم

```
تمت المراجعة
```

---

### ORIGINAL GROUP 00 CONTENT — PRESERVED IN FULL

> **جروب جديد في v2.0.**
> ده أول شغل يتعمل. من غيره Codex بيخترع Stack جديد كل Session.
> **مفيش أي Section بصري يتبني قبل ما GROUP 00 يخلص ويتعتمد.**

---

### 00.1 Tech Stack — مقفول

| الطبقة | القرار | السبب |
|---|---|---|
| Framework | **Next.js 15 — App Router** | i18n routing، SEO/hreflang، Server Actions للفورم، Image optimization |
| Language | **TypeScript** (`strict: true`) | يمنع Codex من أخطاء صامتة عبر الـSessions |
| Styling | **Tailwind CSS v4** + `tokens.css` | tokens مركزية، zero runtime CSS-in-JS |
| Premium Scroll | **GSAP 3 + ScrollTrigger** | أفضل تحكم في pinning + backward scroll + `refresh()` عند الـresize |
| Light motion | **CSS transitions + IntersectionObserver** | خفيف، بدون مكتبة إضافية |
| Icons | **SVG inline محلي** (`components/icons/`) | ممنوع icon library عشوائية |
| Forms | **Server Action + Zod** | validation مشتركة client/server |
| DB | **Supabase** (`operations_review_requests`) | متاح بالفعل في بيئة المشروع |
| Analytics | **Vercel Analytics + Speed Insights** | خفيف، بدون cookie banner إضافي |
| Deploy | **Vercel** | |
| Tests | **Playwright** (visual + overflow) + **axe-core** | التحقق الآلي بدل الـcheckboxes الذاتية |

#### ممنوعات على مستوى الـStack

* ❌ Framer Motion (بديله CSS + GSAP)
* ❌ أي UI library جاهزة (MUI / Chakra / shadcn full install) — الكومبوننتس بتتكتب يدوي حسب الـBase
* ❌ أي CSS framework تاني جنب Tailwind
* ❌ `styled-components` / `emotion`
* ❌ jQuery
* ❌ أي مكتبة illustration/particles
* ❌ Lottie (إلا بقرار مكتوب)

---

### 00.2 Folder Structure — مقفول

```
sparkle-landing/
├── AGENTS.md                      ← قواعد Codex الدائمة (يُقرأ كل session)
├── PROJECT_STATE.md               ← حالة كل جروب + Change Log
├── docs/
│   ├── 00-contract.md
│   ├── 01-base.md
│   ├── 02-header.md
│   ├── ... (ملف لكل جروب)
│   └── reference/                 ← الـReference Images
│       ├── 02-header.png
│       ├── 03-hero.png
│       └── ...
├── content/
│   ├── copy.ar.json               ← LOCKED
│   ├── copy.en.json               ← LOCKED (BLK-04)
│   ├── assets.manifest.json       ← LOCKED
│   └── cta.registry.json          ← LOCKED
├── public/
│   ├── assets/
│   │   ├── owner/                 ← owner-*.webp
│   │   ├── art/                   ← splash, blueprint, car, chaos-props
│   │   └── placeholders/          ← placeholder-*.svg
│   ├── product/                   ← Real Sparkle Auto screenshots
│   ├── video/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── [lang]/
│   │   │   ├── layout.tsx         ← lang + dir + fonts + metadata
│   │   │   └── page.tsx           ← بيركّب الـ15 section بالترتيب
│   │   ├── api/
│   │   └── globals.css            ← import tokens.css
│   ├── styles/
│   │   └── tokens.css             ← LOCKED — كل قيمة بصرية
│   ├── components/
│   │   ├── base/                  ← Button, Card, Badge, Field, ScreenFrame...
│   │   ├── layout/                ← Container, Section, Stage
│   │   ├── sections/              ← Header, Hero, Problem, ... Footer
│   │   └── icons/
│   ├── lib/
│   │   ├── i18n.ts
│   │   ├── copy.ts                ← t() typed accessor
│   │   ├── scroll/                ← GSAP setup + reduced-motion guard
│   │   └── validation/
│   └── types/
└── tests/
    ├── visual.spec.ts             ← screenshots 6 viewports × 2 langs
    ├── overflow.spec.ts           ← no horizontal scroll
    └── a11y.spec.ts               ← axe
```

---

### 00.3 `AGENTS.md` — النص الكامل اللي يتحط في الريبو

> Codex بينسى بين الـSessions. الملف ده هو ذاكرته.

```markdown
## AGENTS.md — Sparkle Auto Landing Page

### اقرا الأول، كل مرة
1. هذا الملف.
2. PROJECT_STATE.md  (إيه اللي خلص واتعتمد)
3. docs/<الجروب الحالي>.md فقط — مش كل الوثيقة.

### قوانين لا تُكسر
1. **ONE PAGE** — صفحة واحدة طويلة تحت /[lang]. ممنوع routes للأقسام.
2. **TOKENS ONLY** — ممنوع أي قيمة بصرية hardcoded. كل لون/مسافة/خط/radius/shadow
   من src/styles/tokens.css. لو محتاج قيمة مش موجودة → اوقف واسأل.
3. **COPY ONLY FROM JSON** — ممنوع أي نص مرئي مكتوب في JSX.
   كل نص من content/copy.<lang>.json. ممنوع تخترع نص. ممنوع تترجم من نفسك.
4. **NO CODE ART** — ممنوع ترسم شخصيات/عربيات/مشاهد/splash بـCSS أو SVG يدوي أو divs.
   لو الـasset مش موجود → استخدم الـplaceholder المسجل في assets.manifest.json
   وحط TODO(BLK-xx). ما تخترعش بديل.
5. **PRODUCT UI = REAL** — أي شاشة Sparkle Auto لازم تكون screenshot حقيقي من public/product/.
   ممنوع تولّدها، ممنوع تعيد بناءها بـHTML/CSS، ممنوع تعدّلها، ممنوع تعكسها أفقيًا.
6. **NO COMPOSITE SCENES** — كل مشهد = طبقات منفصلة شفافة، كل واحدة عنصر مستقل
   بموضع CSS. ممنوع PNG واحد فيه المشهد كله.
7. **STICKY LAW** — ممنوع overflow:hidden / auto / scroll على أي ancestor لعنصر sticky.
   لمنع الـhorizontal overflow استخدم overflow-x: clip على الـsection نفسه فقط.
8. **RTL/LTR** — العربي هو الأساس. الاتجاه عبر منطق logical properties
   (inline-start/end)، مش left/right. ممنوع transform: scaleX(-1) على أي عنصر
   فيه نص أو UI أو لوجو أو شخصية.
9. **A11Y** — كل عنصر تفاعلي له focus-visible ظاهر. الحالات المخفية في الـsticky
   stories لازم aria-hidden + inert. ممنوع معنى بلون لوحده.
10. **REDUCED MOTION** — prefers-reduced-motion: كل الـpinning يتلغي والمحتوى يظهر stacked
    من غير فقد أي معلومة.

### قبل ما تقول "خلصت" — شغّل الأوامر دي وكلها لازم تعدي
npm run lint
npm run typecheck
npm run build
npm run test:overflow
npm run test:a11y
npm run test:visual

### بعد ما تخلص جروب
حدّث PROJECT_STATE.md: الجروب، التاريخ، الملفات اللي اتعملت، الـTODO(BLK-xx) المفتوحة،
وأي انحراف عن الـReference بسبب البنود 01-10 فوق.

### ممنوع منعًا باتًا
- تعيد تصميم جروب معتمد وإنت شغال على جروب تاني.
- تضيف لون/ظل/radius/خط مش في tokens.css.
- تخترع feature أو metric أو claim أو سعر.
- تحط href="#" لرابط مش موجود — شيل الرابط.
- تستخدم Lorem Ipsum أو نص مؤقت مرئي.
- تشيل TODO(BLK-xx) من غير ما البند يتقفل فعلًا.
```

---

### 00.4 `PROJECT_STATE.md` — القالب

```markdown
## PROJECT STATE

### Current Group
GROUP 00 — in progress

### Group Status
| Group | Section | Status | Approved on | Notes |
|---|---|---|---|---|
| 00 | Contract | in progress | — | |
| 01 | Base System | not started | — | |
| 02 | Header | not started | — | |
| ... | | | | |

### Open Blockers
| ID | Blocker | Placeholder in use | Files touched |
|---|---|---|---|
| BLK-01 | Owner renders | placeholder-owner.svg | (يتحدث) |

### Deviations from Reference
| Group | العنصر | الانحراف | السبب (رقم البند في القاعدة الحاكمة) |
|---|---|---|---|

### Change Log
| التاريخ | الملف المقفول | التغيير | السبب | الجروبات المتأثرة |
|---|---|---|---|---|
```

---

### 00.5 `tokens.css` — كل Range اتحول لقيمة واحدة

> **ده الملف الوحيد اللي فيه قيم بصرية. أي رقم في باقي الوثيقة هو شرح، والملف ده هو المصدر.**

```css
:root {
  /* ============ COLOR — BRAND ============ */
  --sparkle-blue:      #01A2FF;   /* fill / graphic — NEVER text on white */
  --blue-text:         #0077CC;   /* 4.66:1 on white — blue words in headlines */
  --dark-blue:         #0C264B;   /* headings */
  --deep-navy:         #03132E;   /* borders, hard shadows, body ink */
  --soft-blue:         #91B1D8;   /* borders/dividers ONLY — 2.21:1, never text */
  --white:             #FFFFFF;

  /* ============ COLOR — SURFACES ============ */
  --surface-white:     #FFFFFF;
  --surface-cloud:     #F5FAFF;
  --surface-ice:       #E9F3FD;
  --surface-pale:      #DCEBFA;

  /* ============ COLOR — INK ============ */
  --ink-strong:        #03132E;   /* 18.5:1 on white */
  --ink-heading:       #0C264B;
  --ink-muted:         #3E5878;   /* 7.31:1 on white */
  --ink-on-blue:       #03132E;   /* 6.70:1 on --sparkle-blue */

  /* ============ COLOR — SEMANTIC (functional only) ============ */
  --success:           #0E9F6E;
  --success-surface:   #E8F7F1;
  --error:             #D64545;
  --error-surface:     #FCEEEE;
  --warning:           #E9A23B;
  --focus-on-light:    #01A2FF;
  --focus-on-blue:     #03132E;

  /* ============ LAYOUT ============ */
  --container-max:     1500px;
  --gutter:            64px;      /* ≥1024 */
  --gutter-md:         40px;      /* 768–1023 */
  --gutter-sm:         22px;      /* <768 */
  --section-py:        88px;      /* ≥1024 */
  --section-py-md:     72px;
  --section-py-sm:     56px;
  --header-h:          104px;
  --header-h-sm:       68px;

  /* ============ SPACING SCALE (8px base) ============ */
  --sp-1: 4px;   --sp-2: 8px;   --sp-3: 12px;  --sp-4: 16px;
  --sp-5: 20px;  --sp-6: 24px;  --sp-8: 32px;  --sp-10: 40px;
  --sp-12: 48px; --sp-16: 64px; --sp-20: 80px; --sp-22: 88px;
  --sp-30: 120px;

  /* ============ RADIUS ============ */
  --r-button:   7px;
  --r-sm:       12px;
  --r-md:       16px;
  --r-lg:       20px;
  --r-panel:    28px;
  --r-pill:     999px;   /* badges only */

  /* ============ BORDER ============ */
  --bw-hair:    1px;
  --bw-std:     2px;
  --bc-strong:  var(--deep-navy);
  --bc-soft:    var(--soft-blue);
  --bc-accent:  var(--sparkle-blue);

  /* ============ SHADOW ============ */
  --sh-hard-1:  0 3px 0 var(--deep-navy);
  --sh-hard-2:  0 5px 0 var(--deep-navy);
  --sh-hard-3:  0 8px 0 var(--deep-navy);
  --sh-press-1: 0 1px 0 var(--deep-navy);
  --sh-press-2: 0 2px 0 var(--deep-navy);
  --sh-press-3: 0 3px 0 var(--deep-navy);
  --sh-soft:    0 12px 30px rgba(3, 19, 46, .08);

  /* ============ TYPE — FAMILY ============ */
  --font-ar: "Cairo", "Noto Sans Arabic", system-ui, sans-serif;
  --font-en: "Nunito", system-ui, -apple-system, sans-serif;

  /* ============ TYPE — FLUID SCALE (768px → 1500px) ============ */
  --fs-display: clamp(2.875rem, 1.170rem + 3.552vw, 4.500rem); /* 46 → 72 */
  --fs-h2:      clamp(2.375rem, 1.064rem + 2.732vw, 3.625rem); /* 38 → 58 */
  --fs-h3:      clamp(1.500rem, 0.976rem + 1.093vw, 2.000rem); /* 24 → 32 */
  --fs-h4:      clamp(1.250rem, 1.053rem + 0.410vw, 1.500rem); /* 20 → 24 */
  --fs-body-lg: clamp(1.063rem, 0.866rem + 0.410vw, 1.250rem); /* 17 → 20 */
  --fs-body:    clamp(1.000rem, 0.869rem + 0.273vw, 1.125rem); /* 16 → 18 */
  --fs-label:   1rem;                                          /* 16 fixed */
  --fs-micro:   0.875rem;                                      /* 14 fixed */

  /* ============ TYPE — WEIGHT ============ */
  --fw-display: 900;
  --fw-bold:    800;
  --fw-semi:    600;
  --fw-body:    400;

  /* ============ TYPE — LINE HEIGHT (منفصل لكل لغة) ============ */
  --lh-display-ar: 1.28;   --lh-display-en: 1.00;
  --lh-h2-ar:      1.32;   --lh-h2-en:      1.08;
  --lh-body-ar:    1.85;   --lh-body-en:    1.62;

  /* ============ MEASURE ============ */
  --measure-ar: 62ch;
  --measure-en: 68ch;

  /* ============ MOTION ============ */
  --ease-out:      cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast:      180ms;
  --dur-normal:    360ms;
  --dur-slow:      520ms;
  --dur-settle:    900ms;   /* Premium Scroll settle */
  --travel-max:    28px;    /* أقصى مسافة حركة لعنصر كبير */

  /* ============ Z-INDEX SCALE (مركزي — ممنوع قيم محلية) ============ */
  --z-art-bg:    0;
  --z-content:   1;
  --z-device:    2;
  --z-phone:     3;
  --z-owner:     4;
  --z-sticker:   5;
  --z-sticky:    50;
  --z-header:    100;
  --z-drawer:    200;
  --z-modal:     300;
  --z-skiplink:  400;
}

/* ============ TABLET ============ */
@media (max-width: 1023px) {
  :root { --gutter: var(--gutter-md); --section-py: var(--section-py-md); }
}

/* ============ MOBILE ============ */
@media (max-width: 767px) {
  :root {
    --gutter: var(--gutter-sm);
    --section-py: var(--section-py-sm);
    --header-h: var(--header-h-sm);
  }
}

/* ============ LANGUAGE BINDING ============ */
html[lang="ar"] { --font: var(--font-ar); --lh-display: var(--lh-display-ar);
                  --lh-h2: var(--lh-h2-ar); --lh-body: var(--lh-body-ar);
                  --measure: var(--measure-ar); }
html[lang="en"] { --font: var(--font-en); --lh-display: var(--lh-display-en);
                  --lh-h2: var(--lh-h2-en); --lh-body: var(--lh-body-en);
                  --measure: var(--measure-en); }
```

#### CONTRAST LOCK — النسب المحسوبة (WCAG 2.2)

> **ده أهم إصلاح تقني في v2.0.** v1.0 كانت هتشحن صفحة **فاشلة في الـcontrast** على أهم عنصرين فيها.

| التركيبة | النسبة | الحكم | الاستخدام |
|---|---|---|---|
| `#03132E` على `#FFFFFF` | 18.5:1 | ✅ AAA | نص أساسي |
| `#3E5878` على `#FFFFFF` | 7.31:1 | ✅ AAA | نص ثانوي |
| `#0077CC` على `#FFFFFF` | 4.66:1 | ✅ AA | **كلمات زرقاء داخل العناوين** |
| **`#01A2FF` على `#FFFFFF`** | **2.76:1** | ❌ **فاشلة** | **ممنوع كنص نهائيًا** |
| **`#FFFFFF` على `#01A2FF`** | **2.76:1** | ❌ **فاشلة** | **ممنوع — ده كان زرار v1.0** |
| `#03132E` على `#01A2FF` | 6.70:1 | ✅ AA | **لون نص الزرار الأساسي** |
| `#91B1D8` على `#FFFFFF` | 2.21:1 | ❌ فاشلة | حدود وزخرفة فقط |

**القرارات الناتجة:**

1. **الزرار الأساسي** = خلفية `--sparkle-blue` + نص `--deep-navy`. (وده كمان أصح neo-brutalism.)
2. **الكلمات الزرقاء في العناوين** (اللي الخطة بتطلبها كتير: «آخر جزء Sparkle Blue») = `--blue-text: #0077CC`.
3. **بانل الـFinal CTA الأزرق** = كل النص عليه `--deep-navy`. الأبيض على البانل يستخدم **فقط** في: تعبئة الزرار الثانوي، الجرافيك الزخرفي، الـlogo lockup.
4. لو الـBusiness مصرّة على نص أبيض على أزرق: يتغير لون الزرار لـ`#0077CC` (أبيض عليه = 4.66:1). ده **بديل** مش الافتراضي.

---

### 00.6 `content/assets.manifest.json` — يقفل BLK-01 / BLK-02 / BLK-03

#### قواعد التسمية

```
owner-{pose}[-{dir}].webp        الشخصية
art-{subject}[-{dir}].webp/.svg  الرسومات
screen-{area}-{device}.webp      شاشات المنتج
```

`{dir}` = `rtl` أو `ltr` — **تُستخدم فقط** للـposes اللي فيها لمس/إشارة لجسم.

#### جدول الـOwner — 12 render (BLK-01)

| Asset | Pose | Groups | نسختين اتجاه؟ | مقاس التصدير |
|---|---|---|---|---|
| `owner-hero-hand-on-laptop-{dir}` | إيده مرتكزة على اللابتوب، واثق | 03 | ✅ نعم | 1400×2000 |
| `owner-stressed-arms-up` | رافع إيديه فوق راسه، مرهق | 04 | ❌ لأ | 1400×2000 |
| `owner-presenting-{dir}` | بيشير ناحية المحتوى | 05 | ✅ نعم | 1400×2000 |
| `owner-standing-confident` | واقف، ذراعين مرتاحين | 06 | ❌ لأ | 1400×2000 |
| `owner-beside-sheet-{dir}` | واقف جنب ورقة/كليب بورد | 10 | ✅ نعم | 1400×2000 |
| `owner-relaxed` | واقف مرتاح (بديل arms-crossed) | 11 | ❌ لأ | 1200×1800 |
| `owner-hand-on-card-{dir}` | إيده على كارت | 12 | ✅ نعم | 1200×1800 |
| `owner-closing-crop` | ¾ body، من منتصف الفخذ لفوق | 15 | ❌ لأ | 1600×1800 |

**Character Lock:** نفس الوجه، الشعر، اللحية، الملابس، الـrendering style، نسب الجسم في الـ12 render. أي pose جديدة تتولد بنفس الـcharacter brief.

**Format:** PNG شفاف للمصدر → WebP للإنتاج، خلفية شفافة، بدون ظل مدموج (الظل بالكود لو محتاج).

#### جدول الـArtwork — (BLK-03)

| Asset | الوصف | Groups | نوع | اتجاهي؟ |
|---|---|---|---|---|
| `art-splash-hero` | بقعة ماء باهتة كبيرة | 03 | WebP | ❌ |
| `art-splash-sm` | بقعة صغيرة قابلة لإعادة الاستخدام | 05,12,15 | WebP | ❌ |
| `art-spark` | علامة لمعة (3 أحجام) | كل الصفحة | SVG | ❌ |
| `art-halftone-dots` | نقط halftone خفيفة | خلفيات | SVG tile | ❌ |
| `art-blueprint-grid` | شبكة تقنية | 07 | SVG tile | ❌ |
| `art-washbay-wireframe` | مبنى مغسلة line-art | 07 | SVG | ✅ |
| `art-car-side-{dir}` | عربية جانبية مبسطة | 07,09 | WebP | ✅ |
| `art-route-lane` | مسار/حارة خدمة | 09 | SVG | ✅ |
| `art-chaos-papers` | 6 ورقات طايرة منفصلة | 04 | WebP ×6 | ❌ |
| `art-scribble` | خربشة فوضى | 04 | SVG | ❌ |
| `art-workorder-sheet` | ورقة أمر شغل فاضية | 10 | SVG | ✅ |
| `art-stamp-review` | ختم «تمت المراجعة» | 10 | SVG | ❌ |
| `art-waves-footer` | موجة الفوتر | 16 | SVG | ❌ |
| `art-waves-cta` | موجات خلف الـOwner | 15 | WebP | ✅ |

#### جدول الـProduct Screenshots — 9 ملفات (BLK-02)

| Asset | الشاشة | Group | الجهاز | مقاس أدنى |
|---|---|---|---|---|
| `screen-overview-desktop` | Overview | 03, 08 | Laptop | 1600×1000 |
| `screen-bookings-mobile` | الحجوزات — تطبيق العميل | 03 | Phone | 780×1600 |
| `screen-bookings-desktop` | Bookings & Schedule | 08 | Laptop | 1600×1000 |
| `screen-carstatus-desktop` | حالة العربيات / التشغيل | 08 | Laptop | 1600×1000 |
| `screen-finance-desktop` | المالية / قفلة اليوم | 08 | Laptop | 1600×1000 |
| `screen-team-desktop` | الموظفين والصلاحيات | 08 | Laptop | 1600×1000 |
| `screen-inventory-desktop` | المخزون | 08 | Laptop | 1600×1000 |
| `screen-customers-desktop` | العملاء والولاء | 08 | Laptop | 1600×1000 |
| `screen-setup-desktop` | الإعدادات / التجهيز | 10 | Laptop | 1600×1000 |

**قواعد الـScreenshots:**

* لقطة حقيقية من Sparkle Auto — **بدون** إعادة تصميم، بدون تعديل أرقام، بدون تركيب.
* لو فيه بيانات عميل حقيقية → تتغير لبيانات demo **داخل النظام نفسه** قبل اللقطة، مش بالفوتوشوب.
* نفس الـzoom ونفس الـbrowser chrome في كل اللقطات.
* لو المنتج عنده UI إنجليزي حقيقي → لقطة إنجليزية للنسخة الإنجليزية. مالوش → تُستخدم العربية كما هي **بدون ترجمة بالـAI**.

#### ASSET PLACEHOLDER PROTOCOL — الحل العملي لمشكلة v1.0

Codex **ما يقدرش يولّد صور**، والقاعدة بتمنعه يرسم بالكود. الحل:

```tsx
// كل asset في الـmanifest بيتقرا كده
<Asset id="owner-hero-hand-on-laptop-rtl" />
```

الكومبوننت `<Asset>`:

1. بيدور على الملف في `public/`.
2. لقاه → بيعرضه بمقاسه الصحيح.
3. ملقاهوش → بيعرض `placeholder-{type}.svg`:
   * **بنفس الـaspect ratio بالظبط** المسجل في الـmanifest (فالتكوين مايتكسرش).
   * رمادي `#E4E7EB` بحدود متقطعة.
   * مكتوب عليه اسم الـasset ورقم الـBlocker.
   * `data-placeholder="true"` عشان الـtest يعدّها.
4. `npm run test:assets` بيفشل لو فيه placeholder في build إنتاج.

**النتيجة:** Codex يقدر يبني **كل** التكوين والـresponsive والـmotion دلوقتي، وأول ما الصور تنزل مكانها، الصفحة تكمل من غير إعادة بناء.

---

### 00.7 `content/cta.registry.json` — كل CTA وسلوكه

المشكلة في v1.0: 8 صيغ CTA ومفيش تحديد كل واحد بيعمل إيه.

| CTA ID | النص العربي المعتمد | المكان | السلوك | الهدف |
|---|---|---|---|---|
| `cta-header` | احجز مراجعة تشغيل | Header | scroll ناعم | `#application-form` + `source=header` |
| `cta-hero-primary` | احجز مراجعة تشغيل لفروعك | Hero | scroll ناعم | `#application-form` + `source=hero` |
| `cta-hero-secondary` | شوف السيستم وهو شغال | Hero | scroll ناعم | `#product-explorer` |
| `cta-setup` | احجز مراجعة تشغيل لفروعك | Setup | scroll ناعم | `#application-form` + `source=setup` |
| `cta-plan-operations` | احجز مراجعة للباقة | Pricing / التشغيل | scroll + prefill | `#application-form` + `plan=operations` |
| `cta-plan-growth` | احجز مراجعة للباقة | Pricing / النمو | scroll + prefill | `#application-form` + `plan=growth` |
| `cta-plan-expansion` | اطلب مراجعة تشغيل لفروعك | Pricing / التوسع | scroll + prefill | `#application-form` + `plan=expansion` |
| `cta-trial` | احجز مراجعة الأول | Trial | scroll ناعم | `#application-form` + `source=trial` |
| `cta-final-primary` | احجز مراجعة تشغيل لفروعك | Final CTA | scroll ناعم | `#application-form` + `source=final` |
| `cta-final-whatsapp` | كلمنا على WhatsApp | Final CTA | فتح WhatsApp | `wa.me/{BLK-06}` — **disabled** لحد التسليم |
| `cta-footer` | احجز مراجعة تشغيل | Footer | scroll ناعم | `#application-form` + `source=footer` |
| `cta-faq-card` | احجز مراجعة تشغيل | FAQ side card | scroll ناعم | `#application-form` + `source=faq` |

**قواعد تنفيذية:**

* الـ`source` و`plan` بيتكتبوا في **hidden fields** في الفورم، وبيتبعتوا مع الطلب.
* الـscroll بيستخدم `scrollIntoView({ behavior: 'smooth', block: 'start' })` + `scroll-margin-top: calc(var(--header-h) + 16px)` على كل section.
* مع `prefers-reduced-motion` → `behavior: 'auto'`.
* كل CTA أساسي في الصفحة له **نفس المعنى**: احجز مراجعة تشغيل. ممنوع «ابدأ تجربة مجانية» كـCTA أساسي.
* الـ`cta-final-whatsapp` بيفضل `disabled` مع `aria-disabled="true"` وسبب واضح في الـdev لحد ما BLK-06 يتقفل. **ممنوع** `href="#"`.

---

### 00.8 ANCHOR MAP — روابط الـNavigation

| نص الرابط (عربي) | نص الرابط (إنجليزي — BLK-04) | الهدف | الجروب |
|---|---|---|---|
| السيستم | System | `#what-is-sparkle` | 05 |
| طريقة الشغل | How It Works | `#operation-flow` | 09 |
| التجهيز | Setup | `#setup` | 10 |
| الأسعار | Pricing | `#pricing` | 11 |
| الأسئلة الشائعة | FAQ | `#faq` | 13 |

* كل `<section>` عليه `id` + `scroll-margin-top`.
* الـactive state في الـnav بيتحسب بـIntersectionObserver — **مش** بلون لوحده (خط سفلي + `aria-current="true"`).
* الـSkip link أول عنصر في الـbody: «تخطَّ إلى المحتوى» → `#hero`.

---

### 00.9 FORM CONTRACT — يقفل BLK-10

#### الجدول في Supabase

```sql
create table operations_review_requests (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  full_name         text not null,
  phone             text not null,
  wash_name         text not null,
  governorate       text not null,
  branches_count    text not null,
  cars_per_day      text not null,
  role              text not null,
  current_tools     text,
  main_problem      text[] not null,
  best_contact_time text,
  lang              text not null default 'ar',
  source            text,
  plan              text,
  user_agent        text,
  status            text not null default 'new'
);
alter table operations_review_requests enable row level security;
-- إدخال عبر Server Action بـservice role فقط. ممنوع anon insert.
```

#### قواعد الـValidation (Zod — مشتركة client/server)

| الحقل | القاعدة | رسالة الخطأ العربية |
|---|---|---|
| `full_name` | 3–80 حرف | من فضلك اكتب اسمك |
| `phone` | `^(\+?20)?1[0125][0-9]{8}$` | اكتب رقم موبايل مصري صحيح |
| `wash_name` | 2–80 | اكتب اسم المغسلة |
| `governorate` | مطلوب — select | اختار المحافظة |
| `branches_count` | select: 1 / 2–3 / 4–6 / +7 | اختار عدد الفروع |
| `cars_per_day` | select: <20 / 20–50 / 51–100 / +100 | اختار متوسط العربيات |
| `role` | select: صاحب / مدير / استقبال / أخرى | اختار دورك |
| `current_tools` | اختياري، ≤300 | — |
| `main_problem` | مصفوفة، **1 على الأقل** | اختار مشكلة واحدة على الأقل |
| `best_contact_time` | اختياري select | — |

#### مكافحة السبام

* Honeypot field مخفي (`company_website`) — لو اتملى، الطلب يترفض بصمت.
* Rate limit: 3 طلبات / IP / ساعة.
* **بدون CAPTCHA** في النسخة الأولى (يقلل التحويل) — يتضاف لو ظهر سبام حقيقي.

#### الحالات المطلوبة

`Empty` · `Focus` · `Filled` · `Invalid (field)` · `Invalid (form summary)` · `Submitting` · `Success` · `Network failure` · `Server failure`

* الأخطاء تظهر **تحت الحقل** + `aria-describedby` + `aria-invalid`.
* ملخص أخطاء أعلى الفورم مع روابط للحقول، `role="alert"`، والفوكس بينتقل له عند الإرسال الفاشل.
* حالة النجاح تستبدل الفورم، `role="status"`، والفوكس بينتقل لعنوان النجاح.
* الفشل بيحافظ على كل القيم المكتوبة + زرار «حاول تاني».
* **ممنوع** أي وعد بوقت رد أو قناة تواصل مش معتمدة في نص النجاح.

---

### 00.10 VIDEO CONTRACT — يقفل BLK-07

| البند | القرار |
|---|---|
| الملفات | `public/video/strategy.mp4` (Group 07) · `public/video/system.mp4` (Group 08) |
| الصيغة | MP4 (H.264) + WebM (VP9) |
| الأبعاد | 16:9 |
| Poster | `video-{name}-poster.webp` — **مطلوب** |
| Autoplay | ❌ ممنوع |
| Audio | ❌ ممنوع يبدأ بصوت |
| Controls | ✅ native controls، keyboard accessible |
| **Captions** | ✅ **`.vtt` عربي مطلوب** — الفيديوهات محتوى معلوماتي |
| Transcript | ✅ نص قابل للطي تحت الفيديو |
| Loading | `preload="none"` + lazy — الفيديو ما يحملش قبل ما المستخدم يوصله |
| لو الملف مش موجود | الـblock كله **يتخفي من الـDOM** — مش box فاضي |
| Scroll | ممنوع الفيديو يتداخل مع الـpinning — بيتحط **قبل** أو **بعد** الـsticky area، مش جواها |

---

### 00.11 أوامر التحقق — بديل الـCheckboxes الذاتية

المشكلة في v1.0: gates زي `☐ Codex فاهم Product Truth` — دي أمنية مش فحص.

```json
{
  "scripts": {
    "dev":           "next dev",
    "build":         "next build",
    "lint":          "next lint --max-warnings=0",
    "typecheck":     "tsc --noEmit",
    "test:overflow": "playwright test tests/overflow.spec.ts",
    "test:a11y":     "playwright test tests/a11y.spec.ts",
    "test:visual":   "playwright test tests/visual.spec.ts",
    "test:assets":   "node scripts/check-placeholders.mjs",
    "test:copy":     "node scripts/check-hardcoded-copy.mjs",
    "test:tokens":   "node scripts/check-raw-values.mjs",
    "verify":        "npm run lint && npm run typecheck && npm run build && npm run test:overflow && npm run test:a11y && npm run test:tokens && npm run test:copy"
  }
}
```

#### مصفوفة الاختبار — 6 مقاسات × 2 لغة = 12 لقطة لكل Section

| Viewport | العرض × الارتفاع | الاسم |
|---|---|---|
| narrow-mobile | 360 × 740 | أضيق حالة |
| large-mobile | 430 × 932 | |
| tablet | 834 × 1194 | |
| small-desktop | 1280 × 800 | **المقاس اللي v1.0 كانت هتتكسر عليه** |
| desktop | 1440 × 900 | الأشهر فعليًا |
| large-desktop | 1672 × 941 | مقاس الـReference |

#### `overflow.spec.ts` — الفحص الحاسم

```ts
// على كل viewport × كل لغة
const overflow = await page.evaluate(() =>
  document.documentElement.scrollWidth - document.documentElement.clientWidth
);
expect(overflow).toBeLessThanOrEqual(0);

// وكمان: مفيش عنصر بيخرج بره الـviewport
const bad = await page.evaluate(() =>
  [...document.querySelectorAll('body *')]
    .filter(el => el.getBoundingClientRect().right > window.innerWidth + 1)
    .map(el => el.className)
);
expect(bad).toEqual([]);
```

#### `a11y.spec.ts`

```ts
const results = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
  .analyze();
expect(results.violations.filter(v =>
  ['serious','critical'].includes(v.impact!))).toEqual([]);
```

#### `check-raw-values.mjs` — بيمنع القيم الـhardcoded

بيفشل لو لقى في `src/components` أو `src/app`:
`#[0-9a-fA-F]{3,8}` · `rgba?\(` · `\d+px` (خارج tokens.css) · `font-family:`

#### `check-hardcoded-copy.mjs`

بيفشل لو لقى نص عربي أو نص إنجليزي طوله >3 كلمات مكتوب مباشرة في JSX بدل ما يجي من `t()`.

#### PERFORMANCE BUDGET — بالأرقام

| المقياس | الحد | القياس |
|---|---|---|
| LCP | ≤ 2.5s | Moto G Power / 4G مقيّد |
| CLS | ≤ 0.10 | |
| INP | ≤ 200ms | |
| Initial JS (gz) | ≤ 190 KB | GSAP+ScrollTrigger ≈ 70KB منهم |
| Initial images | ≤ 400 KB | الـHero بس |
| Total page weight | ≤ 2.5 MB | مع lazy loading |
| Lighthouse Perf (mobile) | ≥ 85 | |
| Lighthouse A11y | ≥ 95 | |

---

### 00.12 GROUP 00 — ACCEPTANCE GATE

> بدل «☐ Codex فاهم» — دي **مخرجات ملموسة** تتراجع.

الجروب يعتبر خلص لما الملفات دي تكون موجودة ومعتمدة:

```
☐ الريبو متعمل ومتظبط بالـfolder structure المذكورة
☐ AGENTS.md موجود بالنص الكامل
☐ PROJECT_STATE.md موجود بالقالب
☐ src/styles/tokens.css موجود بكل القيم — بدون أي range
☐ content/copy.ar.json موجود بكل نصوص الخطة (v2 §Copy)
☐ content/copy.en.json موجود — أو /en معطّل بـBLK-04
☐ content/assets.manifest.json موجود بالـ12 owner + الـartwork + الـ9 screens
☐ content/cta.registry.json موجود بالـ12 CTA
☐ public/assets/placeholders/*.svg موجودة
☐ components/base/Asset.tsx بيطبّق Placeholder Protocol
☐ tests/overflow.spec.ts + a11y.spec.ts + visual.spec.ts موجودين
☐ scripts/check-raw-values.mjs + check-hardcoded-copy.mjs موجودين
☐ npm run verify بيعدي على صفحة فاضية
☐ الخطوط self-hosted ومتحمّلة (Cairo AR subset + Nunito Latin subset)
☐ /ar و /en بيرجعوا lang + dir صح
☐ Supabase table متعمل + Server Action بترد صح في dev
```

**GROUP 00 GATE:** ممنوع أي شغل بصري قبل ما الـ16 بند دول يتأكدوا.

---
## PART 0 — القواعد العامة (تنطبق على GROUP 00 → GROUP 16)

---

### G1. CRITICAL MERGE PRINCIPLE — معدّلة

الخطة دي بتدمج مصدرين في Execution Source واحدة:

1. **Sparkle Auto Landing Page — Master Execution Plan** (الأصل)
2. **Reverse-Engineering للـ15 Reference Designs**

ولا واحد فيهم يلغي التاني.

#### الـMaster Plan هو المرجع الأساسي في:

Business Goal · Approved Copy · Product Truth · Commercial Rules · CTA meaning · Trial positioning · Pricing · Setup promises · Product Screens · Accessibility · Premium Scroll limits · QA · Approval Gates · Change Control · Definition of Done.

#### الـReverse-Engineering هو مصدر التكوين في:

Composition · Relative proportions · Spacing rhythm · Visual hierarchy · Device placement · Owner placement · Product-frame placement · Typography placement · White space distribution · Card proportions · Border feeling · Shadow feeling · Decorative treatment · Background rhythm · Section density · Responsive recomposition · Motion composition · Reference similarity.

#### 🔴 التعديل الجوهري في v2.0

في v1.0 كان فيه **قائمتين أولوية متعارضتين** + جملة «القيم دي تتضبط لو الـBase احتاج Fine-Tuning» (دائرية).

في v2.0:

* **مفيش غير قائمة أولوية واحدة** — §0.3 `SINGLE PRIORITY LADDER`.
* الـReverse-Engineering **بيدخل مرة واحدة** كمصدر لقيم `tokens.css` وقت بناء GROUP 01.
* **بعد ما الـtokens تتقفل**، هي المصدر لكل قيمة رقمية، والـReference بتحكم في التكوين بس.
* أي رقم في الـReverse-Engineering **مختلف عن الـtokens** = الـtokens تكسب، ويتسجل في `PROJECT_STATE.md → Deviations`.

---

### G2. GLOBAL BILINGUAL EXECUTION RULE

تنطبق من GROUP 00 → GROUP 16.

Sparkle Auto Landing Page لازم تتبني من البداية كـ**Bilingual Experience حقيقية**.

مش: Arabic Site وبعدين `direction: ltr`.
ومش: English Site وبعدين نعكسه للعربي.

النسختين لازم يتم تصميمهم واختبارهم فعليًا.

#### Arabic Version — Primary / Reference Content Version

تستخدم: RTL · Cairo · Arabic-approved Copy · RTL-aware layout · RTL-aware arrows · RTL-aware timelines · RTL-aware Product Story navigation · RTL-aware forms · RTL-aware annotations · RTL-aware motion direction · RTL-aware Owner/Product compositions عند الحاجة.

#### English Version — Secondary LTR Version

تستخدم: LTR · Nunito · Approved English translation · LTR-aware layout · LTR-aware arrows · LTR-aware route direction · LTR-aware visual flow · LTR-aware annotations · English typography scale testing · English line-break testing.

#### Translation Rule

الـArabic Approved Copy هو مصدر المعنى الأساسي. الـEnglish Translation:

* تحافظ على نفس المعنى.
* تحافظ على نفس Product Truth.
* تحافظ على نفس Commercial Rules.
* لا تضيف Claims جديدة.
* لا تختصر Business Message لمجرد إن الـEnglish أقصر.
* لا تستخدم English Reference Mockup wording تلقائيًا كـCommercial Copy.

أي English copy داخل Reference Design يعتبر **Layout / Typography / Visual Length Reference** إلا لو تم اعتماده كـFinal English Copy.

#### Line-Break Rule

ممنوع إجبار العربي والإنجليزي على نفس Line Breaks حرفيًا. المطلوب **نفس الـvisual hierarchy**، مش نفس الـwrapping.

Arabic Headline ممكن 3 سطور، والإنجليزي 2 أو 4 — طالما نفس الـVisual Weight ونفس الـHierarchy ونفس الـBalance ونفس الـFocal Priority.

**تنفيذيًا:** ممنوع `<br>` يدوي في العناوين. الكسر بيتحكم فيه `max-width` بالـ`ch` + `text-wrap: balance` على العناوين و`text-wrap: pretty` على الفقرات.

#### 🔴 BILINGUAL CONTENT GATE — إضافة v2.0

**المشكلة في v1.0:** الخطة بتطلب نسخة إنجليزية حقيقية، لكن **مفيش ولا كلمة إنجليزية معتمدة** في الوثيقة كلها. النصوص الإنجليزية اللي موجودة كلها متعلّم عليها "Reference only". يعني Codex عمليًا ما يقدرش يبني `/en` خالص.

**القرار في v2.0 — واحد من اتنين، لازم يتحدد قبل GROUP 02:**

| الخيار | الوصف | الأثر |
|---|---|---|
| **A — موصى به** | `/en` **مؤجل لمرحلة 2**. الصفحة تتبني كاملة بالعربي، مع بنية i18n جاهزة (`[lang]` + `copy.en.json` فاضي)، و`/en` بيعمل redirect لـ`/ar`. | الشحن أسرع بـ~35%، والـQA النص. الإنجليزي بيتضاف بعدين من غير إعادة بناء. |
| **B** | نسختين من اليوم الأول | لازم `copy.en.json` **كامل ومعتمد** يتسلّم قبل GROUP 02، وإلا Codex هيقف على أول Section. |

**لو مفيش قرار → Codex يمشي على A تلقائيًا** ويسجل BLK-04.

في كل الأحوال، البنية التحتية بتتبني من اليوم الأول:
`<html lang dir>` صح · `hreflang` · `copy.<lang>.json` · logical CSS properties · اختبار الـlayout بنص إنجليزي مؤقت **في الـdev فقط** (ممنوع في الإنتاج).

---

### G3. LAYERED SCENE RULE — 🔴 قاعدة جديدة في v2.0

> دي القاعدة اللي بتلغي معظم مشكلة الـRTL/LTR Asset Variants وبتوفر نص شغل الأصول.

**ممنوع منعًا باتًا:** أي PNG واحد فيه مشهد مركّب (Owner + Laptop + Phone + Splash في صورة واحدة).

**المطلوب:** كل مشهد = **طبقات شفافة منفصلة**، كل طبقة عنصر HTML مستقل، موضعها بالـCSS.

#### مثال — Hero

```
❌ غلط:  hero-scene.png  (فيه كل حاجة)

✅ صح:
  <div class="stage">
    <Asset id="art-splash-hero"   class="layer layer--bg"/>
    <ScreenFrame device="laptop"  src="screen-overview-desktop"/>
    <ScreenFrame device="phone"   src="screen-bookings-mobile"/>
    <Asset id="owner-hero-hand-on-laptop-rtl" class="layer layer--owner"/>
    <Asset id="art-spark"         class="layer layer--sticker"/>
  </div>
```

#### الفوايد

1. **تغيير الاتجاه = CSS بس.** الـstage بيستخدم `inset-inline-start` بدل `left` → التكوين بيتقلب من غير أي asset جديد.
2. **الشاشات الحقيقية عمرها ما تنعكس** — لأنها عنصر مستقل.
3. **الـAsset variants قلّت** من "كل مشهد ×2" لـ**4 poses بس** (اللي فيها لمس/إشارة).
4. **وزن الصفحة أقل** — الـsplash بيتعاد استخدامه، والـowner بيتـcache مرة واحدة.
5. **الـresponsive أسهل** — كل طبقة تتحرك أو تختفي لوحدها على الموبايل.

#### الاستثناء الوحيد

طبقة زخرفية معقدة **مالهاش علاقة باتجاه** (زي `art-halftone-dots` أو `art-splash-hero`) ممكن تكون صورة واحدة.

---

### G4. PROPORTIONAL STAGE PATTERN — 🔴 قاعدة جديدة في v2.0

> دي القاعدة اللي بتحل مشكلة «مفيش أي تحديد للسلوك من 1024 لـ1672».

**المشكلة في v1.0:** الـHero (وغيره) موصوف بـ`position:absolute` + `min-height:650px` + خليط `px` و`%`. ده مظبوط على viewport واحد بس. على 1280 و1440 (أشهر مقاسين فعليًا) بيتكسر.

**الحل:** أي مشهد مركّب بيتبني جوه **Stage بنسبة أبعاد ثابتة**، وكل الأطفال بالنسبة المئوية أو `cqw`.

```css
.stage {
  position: relative;
  container-type: inline-size;
  aspect-ratio: 1340 / 1000;   /* مأخوذة من الـReference */
  width: 100%;
}
.stage > .layer { position: absolute; }

/* كل قيمة نسبة مئوية أو cqw — ولا قيمة px واحدة */
.layer--laptop { inset-inline-start: 0;   bottom: 7%;  width: 72%;  z-index: var(--z-device); }
.layer--phone  { inset-inline-start: 62%; bottom: 4.5%; width: 18%; z-index: var(--z-phone);  }
.layer--owner  { inset-inline-end: -1%;   bottom: 0;   height: 95%; z-index: var(--z-owner);  }
.layer--bg     { inset: 0; object-fit: contain;        z-index: var(--z-art-bg); }
```

#### النتيجة

التكوين اللي في الـReference **بيتحافظ عليه بالنسب من 1024 لـ1920 تلقائيًا** — من غير media query واحدة، ومن غير حساب لكل breakpoint.

الـmedia queries بتستخدم بس عند نقطة **إعادة التكوين الحقيقية** (tablet / mobile)، مش لتصحيح المقاسات.

#### أي حاجة جوه الـStage محتاجة تكبر مع الـStage

تستخدم `cqw` مش `px`:

```css
.stage-label { font-size: clamp(0.875rem, 1.3cqw, 1.125rem); }
```

#### الأقسام اللي بتستخدم الـStage Pattern

Hero · Problem (chaos stage) · What Is (product pair) · Strategy (blueprint canvas) · Product Explorer (product stage) · Setup (work order) · Final CTA (blue panel).

---

### G5. STICKY / OVERFLOW LAW — 🔴 قاعدة جديدة في v2.0

> **ده أخطر لغم تقني في v1.0.**

الخطة v1.0 بتطلب في 6 مواضع مختلفة **"No horizontal page scroll"**، وبتطلب في نفس الوقت **3 أقسام Premium Scroll بـ`position: sticky`**.

أول حاجة أي مطور (أو Codex) بيعملها لمنع الـhorizontal scroll هي:

```css
body { overflow-x: hidden; }   /* ❌ ده بيقتل كل sticky في الصفحة */
```

`position: sticky` **بيتوقف تمامًا** لو أي عنصر أب فيه `overflow: hidden | auto | scroll`. وده بيحصل بصمت — من غير error.

#### القانون

1. ❌ **ممنوع** `overflow: hidden` أو `auto` أو `scroll` على `html` أو `body` أو أي حاوية بتلف قسم فيه sticky.
2. ✅ لمنع تسريب أفقي من قسم معيّن: `overflow-x: clip` **على القسم نفسه بس** (`clip` مش بيكسر الـsticky زي `hidden`).
3. ✅ الأفضل: **امنع التسريب من أصله** — الـstages بـ`%` (G4)، والطبقات اللي بتخرج بره تتحدد بـ`inset` سالبة داخل حاوية `overflow-x: clip` **مش** جد لأي sticky.
4. ✅ بانل الـFinal CTA فيه `overflow: hidden` — **مسموح** لأن مفيش sticky جواه. لازم يتأكد ده وقت البناء.
5. ✅ `tests/overflow.spec.ts` بيثبت إن مفيش تسريب أفقي **من غير** الحاجة لـ`overflow-x: hidden`.

#### لغم تاني: `100vh` على الموبايل

`height: 100vh` على sticky canvas بيقفز مع ظهور/اختفاء شريط عنوان المتصفح.

* ✅ استخدم `100svh` للـminimum و`100dvh` للـcanvas الفعلي.
* ✅ الـScrollTrigger لازم يعمل `ScrollTrigger.refresh()` على `resize` **debounced 150ms**، ومتجاهل تغيّر الارتفاع الناتج عن شريط المتصفح على iOS (`ScrollTrigger.config({ ignoreMobileResize: true })`).

#### لغم تالت: الـSticky Header وحساب الـScroll

* الـheader `position: sticky; top: 0` — ده **مش** بيأثر على sticky تاني لأنهم مش متداخلين.
* كل `<section>` عليه `scroll-margin-top: calc(var(--header-h) + 16px)` عشان الـanchor links.
* الـScrollTrigger بيستخدم `start: "top top+=var(--header-h)"` في الأقسام المثبتة.

---

### G6. GLOBAL DEVICE / RESPONSIVE EXECUTION RULE

التصميم Desktop اللي في الـReference Images هو **Composition Reference**، مش Layout لازم يتضغط حرفيًا على كل الأجهزة.

#### 🔴 Breakpoints محددة — إضافة v2.0

| اسم | المدى | السلوك |
|---|---|---|
| `xs` narrow-mobile | 0 – 479 | عمود واحد، أقل زخرفة، أصغر خط |
| `sm` large-mobile | 480 – 767 | عمود واحد، مساحة أوسع شوية |
| `md` tablet | 768 – 1023 | إعادة تكوين حقيقية — 2 أعمدة أو 1 |
| `lg` small-desktop | 1024 – 1279 | تكوين الـReference بنسب الـStage |
| `xl` desktop | 1280 – 1599 | تكوين الـReference بنسب الـStage |
| `2xl` large-desktop | 1600+ | تكوين الـReference عند مقاسه الطبيعي |

**قاعدة:** من `lg` لفوق مفيش media queries لتصحيح المقاسات — الـStage Pattern (G4) بيتكفّل. الـmedia queries الحقيقية بتبدأ عند `md` وتحت.

#### Large Desktop

Reference visual target ≈ **1672 × 941** (16:9).
Centered max content width: `min(1500px, 100% - 128px)`.
Horizontal gutters: **64px**.

#### Standard Desktop / Laptop (1024 → 1600)

يتم تقليل: Decorative overflow · Extreme overlap · Empty edge spacing.
مع الحفاظ على: Visual hierarchy · Focal scale · Product prominence.

#### Tablet (768 – 1023)

* Device overlaps تقل.
* Owner يقل حجمه.
* 3-column layouts تتحول 2-column أو 1-column.
* Product visuals تفضل كبيرة.
* Decorative artwork يقل.
* Sticky stories يتم تبسيطها عند الحاجة.
* Typography scales down intentionally.
* **لا يتم ضغط Desktop Composition بشكل آلي.**

#### Mobile (< 768)

* Single-column.
* Headline: `--fs-display` بيوصل 46px عند 768 ويقل تحتها.
* Body: `--fs-body-lg` = 17px.
* Horizontal gutter: 22px.
* Buttons: full-width أو قريب منه.
* Cards stacked · Pricing stacked · Operation Flow vertical · Form single column.
* No desktop overlap · No horizontal page scroll · No long desktop sticky scroll.
* Owner ينتقل لمكان مناسب أو يقل أو يختفي إذا كان Decorative فقط.
* Product visual يفضل مقروء وكبير.
* Decorations تقل بشدة.
* Motion أبسط.

> **Mobile Principle: Mobile is not desktop shrunk down. كل Section يعاد Compose بوعي.**

---

### G7. GLOBAL VISUAL REFERENCE WORKFLOW

في بداية تنفيذ كل Group بيتسلّم **Reference Image** خاصة بالـSection.

الصورة تعتبر **مرجع التكوين الأساسي** — مش مجرد Inspiration.

#### 🔴 تعديل v2.0 — Codex ممكن ما يشوفش الصورة

قبل ما تبدأ الجروب، **تأكد إن الأداة اللي بتشغّل بيها Codex بتقبل صور فعلًا**. لو لأ، الصورة عديمة القيمة والخطة كلها بتنهار على الافتراض ده.

**عشان كده في v2.0:** كل جروب فيه **Reference Spec مكتوب بالأرقام** (قسم الـReverse-Engineering)، وده بيخلي الجروب قابل للتنفيذ **حتى لو Codex ما شافش الصورة**. الصورة بقت **تأكيد** مش شرط.

#### التحليل المطلوب

Overall composition · Layout structure · Visual hierarchy · Relative scale · Element placement · Section proportions · Spacing · Whitespace · Typography scale · Typography placement · Card proportions · Device placement · Screenshot placement · Background treatment · Border treatment · Shadow treatment · Decorative density · Visual rhythm · Foreground/background relationship · Graphic direction · Visual balance · Mood · Energy · Interaction opportunities · Desktop composition · Mobile adaptation.

**الهدف:** أعلى تشابه بصري عملي — بدون كسر Approved Copy · Product Truth · tokens.css · Section scope · RTL/LTR rules · Responsive behavior · Accessibility · Performance · Premium Scroll rules · Commercial rules.

---

### G8. VISUAL ASSET CREATION RULE

أي Custom Visual Asset مطلوب للوصول لشكل الـReference يتم إنتاجه باستخدام **ChatGPT Image** — وليس برسمه بالكود.

يشمل: Illustrations · Characters · Cars · Car-wash scenes · Wash bays · Environmental artwork · Decorative artwork · Graphic motifs · Stickers · Custom badges (البصرية مش UI controls) · Background artwork · Editorial visual metaphors · Abstract wash graphics · Water/foam assets · Sparkle assets · Scene elements · Supporting objects · Visual storytelling artwork · Custom scene compositions · أي زخرفة معقدة في الـReference.

#### 🔴 تعديل v2.0 — القاعدة دي كانت بتوقّف Codex

**المشكلة في v1.0:** Codex **ما يقدرش يولّد صور**. والقاعدة في نفس الوقت بتمنعه يرسم بالكود. يعني على أول Section فيه artwork، Codex بيقف — أو بيكسر القاعدة.

**الحل في v2.0:** `ASSET PLACEHOLDER PROTOCOL` (§00.6).

* كل asset مسجّل في `assets.manifest.json` بمقاسه ونسبته.
* الـ`<Asset>` component بيعرض placeholder بنفس النسبة لو الملف مش موجود.
* Codex بيبني **التكوين كامل والـresponsive والـmotion** دلوقتي.
* أول ما الصور تنزل، الصفحة تكمل من غير إعادة بناء.
* `npm run test:assets` بيمنع نشر إنتاج فيه placeholders.

**قاعدة:** ممنوع Codex يخترع بديل، وممنوع يرسم، وممنوع يستنى.

---

### G9. OWNER CHARACTER ASSET RULE

الـOwner لازم يفضل **نفس Sparkle Auto Owner المعتمد**: نفس الشخصية · الوجه · الشعر · اللحية · الملابس · Rendering style · Body proportions · Character identity.

**ممنوع على Codex:**

* يرسم الشخصية.
* يعملها CSS.
* يستبدلها Generic 3D Character.

الـOwner يستخدم كـ: PNG · WebP · Transparent render · Approved generated asset.

لو الـReference فيها Pose مختلفة → تُنتج Pose جديدة بـChatGPT Image مع الحفاظ على Character Lock.

**v2.0:** قائمة الـ12 render محددة في §00.6، وأي pose خارجها تتضاف للـmanifest الأول.

---

### G10. NO CODE-GENERATED VISUAL ART RULE

ممنوع استخدام الكود كبديل عن الـVisual Asset creation.

**ممنوع:** CSS illustration · CSS-drawn characters · CSS-drawn cars · CSS-drawn wash bays · مجموعات divs بتتظاهر إنها رسمة · Programmatic decorative artwork · Canvas-generated illustrations · SVG artwork معاد رسمه يدويًا لتقليد الصورة · Complex pseudo-element art · Generic geometric approximations بدل الـReference.

**الكود يستخدم لبناء:** Layout · Structure · Typography · Cards · Buttons · Navigation · Forms · Device framing · Responsive behavior · RTL/LTR · Interaction · Motion · Scroll storytelling · Positioning of visual assets · Masking/reveal · Product screenshot presentation.

> **Code is not the illustration generator.**

#### 🔴 استثناء مسموح بيه في v2.0

عناصر هندسية بسيطة **مش رسمة**: خط، سهم بسيط، دائرة رقم، شبكة blueprint من `repeating-linear-gradient`، فاصل موجي بـSVG path واحد. دي **بنية**، مش artwork.

**الفاصل:** لو العنصر يحتاج أكتر من **6 أشكال** عشان يتعمل → ده artwork → `assets.manifest.json`.

---

### G11. PRODUCT TRUTH EXCEPTION — CRITICAL

قاعدة G10 **لا تنطبق** على Sparkle Auto Product UI.

أي: Dashboard · Overview · Bookings · Schedule · Operations · Finance · Staff · Permissions · Inventory · Customers · Loyalty · Offers · Branches · Setup/configuration UI · Customer app screen —

يجب أن يكون **Real Sparkle Auto Product Screenshot**.

**ممنوع:**

* AI-generating a fake Sparkle Auto dashboard.
* Recreating the dashboard using ChatGPT Image.
* Redesigning the product UI to match the reference.
* Rebuilding a fake dashboard with HTML/CSS.
* Inventing product screens / metrics / functionality.

> **القاعدة:**
> Marketing visual = ChatGPT Image
> Product UI = Real Sparkle Auto screenshot
> Layout / structure / interaction = Code

---

### G12. REVERSE-ENGINEERED DESIGN SYSTEM

قبل ما Codex يبني أي Section، يبني الـTokens والـComponents المشتركة.

#### Global Visual Direction

Fresh Blue Neo-Brutalism + Premium clean SaaS marketing.

#### Core Colors — القيم النهائية في `tokens.css`

| الدور | Hex |
|---|---|
| Primary / Sparkle Blue | `#01A2FF` |
| Blue Text (v2.0) | `#0077CC` |
| Dark Blue | `#0C264B` |
| Deep Navy | `#03132E` |
| Soft Blue (حدود فقط) | `#91B1D8` |
| White | `#FFFFFF` |
| Cloud (v2.0) | `#F5FAFF` |
| Ice (v2.0) | `#E9F3FD` |
| Pale (v2.0) | `#DCEBFA` |

#### Typography

English: **Nunito** · Arabic: **Cairo** · Display weight 800–900 · Body 400–600.

#### القيم — كانت ranges، بقت مفردة

| البند | v1.0 (range) | **v2.0 (مقفول)** |
|---|---|---|
| Content max-width | 1480–1540px | **1500px** |
| Horizontal gutter | 56–72px | **64px** (md 40 / sm 22) |
| Section vertical padding | 72–100px | **88px** (md 72 / sm 56) |
| Major card radius | 18–24px | **20px** |
| Small card radius | 12–18px | **12px** (md 16) |
| Button radius | 7px | **7px** |
| Panel radius | 28–30px | **28px** |
| Border width | 1–2px | **1px** hairline / **2px** standard |
| Primary button height | 56–60px | **56px** |
| Main headline | 64–82px | **72px** (fluid من 46) |
| Section headline | 52–68px | **58px** (fluid من 38) |
| Body | 18–22px | **18px** (fluid من 16) |
| Label / eyebrow | 15–18px | **16px** |
| Mobile headline | 42–52px | **46px** عند 768 |
| Mobile body | 17–19px | **17px** |
| Mobile gutter | 20–24px | **22px** |

#### Shadows

Button shadow: **hard offset navy** — مش blur قوي.
Card soft shadow: `0 12px 30px rgba(3,19,46,.08)`.

#### Motion Accents

Spark · Tiny star · Short hand-drawn strokes · Water splashes.

#### White Space

عالي جدًا. **ما تحاولش تملى كل المساحة.**

---

### G13. PRIMARY BUTTON — النسخة المصححة

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 56px;
  padding-inline: 28px;
  border: var(--bw-std) solid var(--deep-navy);
  border-radius: var(--r-button);
  font-family: var(--font);
  font-weight: var(--fw-bold);
  font-size: var(--fs-body);
  cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out);
}

/* PRIMARY — 🔴 النص Navy مش أبيض (6.70:1 بدل 2.76:1) */
.btn--primary {
  background: var(--sparkle-blue);
  color: var(--ink-on-blue);
  box-shadow: var(--sh-hard-2);
}
.btn--primary:hover  { box-shadow: var(--sh-hard-3); transform: translateY(-1px); }
.btn--primary:active { transform: translateY(3px); box-shadow: var(--sh-press-2); }

/* SECONDARY */
.btn--secondary {
  background: var(--white);
  color: var(--deep-navy);
  box-shadow: var(--sh-hard-1);
}
.btn--secondary:active { transform: translateY(2px); box-shadow: var(--sh-press-1); }

/* TERTIARY */
.btn--tertiary {
  background: transparent; border: 0; box-shadow: none;
  color: var(--blue-text);
  text-decoration: underline; text-underline-offset: 4px;
}

/* FOCUS — مطلوب على الكل */
.btn:focus-visible {
  outline: 3px solid var(--focus-on-light);
  outline-offset: 3px;
}
.on-blue .btn:focus-visible { outline-color: var(--focus-on-blue); }

/* DISABLED — مش بلون لوحده */
.btn:disabled, .btn[aria-disabled="true"] {
  opacity: .55; cursor: not-allowed; box-shadow: none;
  filter: grayscale(.4);
}

@media (prefers-reduced-motion: reduce) {
  .btn { transition: none; }
  .btn:active { transform: none; }
}

@media (max-width: 767px) {
  .btn--block-sm { width: 100%; }
}
```

**States مطلوبة على كل زرار:** Default · Hover · Pressed · Focus-visible · Disabled.
**No interaction should depend on hover only.**
**Touch target ≥ 44×44px** على الموبايل.

---

### G14. BACKGROUND DECORATION SYSTEM

الصور مش معمولة بـRandom Blobs. الـBackground Decoration عبارة عن:

* Pale-blue water splash.
* Halftone dots خفيفة.
* 1–3 Spark marks.
* أحيانًا blueprint grid.
* كلها Opacity منخفضة جدًا.
* ما تدخلش ورا النص بقوة.

الـWater Splash نفسه = **Asset** (SVG / PNG / WebP)، مش CSS blob عشوائي.

#### 🔴 حل تعارض الـGradients في v1.0

v1.0 كانت بتقول «ممنوع Generic SaaS gradients» وبعدها بأسطر بتقترح `radial-gradient() + linear-gradient()`. الحد الفاصل في v2.0 **رقمي**:

**مسموح:**

* حد أقصى **gradient واحد** لكل section.
* **لون واحد** (تدرج من `--surface-*` لـ`transparent`).
* `opacity ≤ 0.06`.
* radial بس، من حافة أو ركن — مش من النص.
* **الغرض:** جو (atmosphere) — مش تلوين.

**ممنوع:**

* Multi-stop gradients.
* أكتر من hue في نفس التدرج.
* Purple/pink/orange stops.
* Gradient على النصوص أو الأزرار أو الكروت.
* Gradient كخلفية section كاملة بلون قوي.

**قاعدة الكثافة:** أي section فيه بحد أقصى: 1 splash asset + 1 halftone tile + **3 spark marks** + gradient واحد. مفيش أكتر.

---

### G15. MOTION LANGUAGE

الـMotion الأساسي: **Physical · Quick · Playful** — مش Cinematic.

#### Approved Motion Categories

Button press · Card nudge · Sticker entrance · Short slide/wipe · Blueprint line reveal · Hotspot highlight · Product-screen transition · Section-number reveal · Small arrow draw.

#### Motion Rules

* Motion explains hierarchy or creates delight.
* ما يأخرش القراءة.
* Avoid long scroll-jacking sequences.
* Avoid continuous floating of every decorative object.
* **No animation may be necessary to understand content.**
* Reduced-motion mode must preserve all information.

#### Timing

| النوع | المدة | Easing |
|---|---|---|
| Micro (زرار، hover) | `--dur-fast` 180ms | `--ease-out` |
| Normal (دخول عنصر) | `--dur-normal` 360ms | `--ease-out` |
| Slow (دخول قسم) | `--dur-slow` 520ms | `--ease-out` |
| Premium settle | `--dur-settle` 900ms | `--ease-out` |

Easing: `cubic-bezier(0.22, 1, 0.36, 1)`

#### ممنوع

Generic `fadeInUp + spring` على كل حاجة · Bounce في كل مكان · Elastic overshoot · Floating cards في كل Section · Stagger على أكتر من 6 عناصر.

---

### G16. PREMIUM SCROLL STORYTELLING SYSTEM

الـPremium Scroll **مش Global Effect** على الصفحة كلها. بيستخدم في **3 أقسام بس**:

1. **Strategy Blueprint** (GROUP 07) — Blueprint بيتبني.
2. **Real System Product Explorer** (GROUP 08) — Laptop ثابت والشاشات بتتغير.
3. **Setup Work Order** (GROUP 10) — أمر شغل بيتجهز خطوة خطوة.

#### الإحساس المطلوب

Smooth · Heavy · Deliberate · Premium · Controlled · Confident · بطيء كفاية للتقدير.

**مش:** Fast · Snappy زيادة · Bouncy · Springy · TikTok-like · Gaming-like.

#### Scroll Timing Philosophy

```
Scroll input → smooth controlled progress → weighted visual transition → short settle → next story state
```

**مش:** `Scroll input → instant jump → next screen`

#### Scroll Weight

* العناصر الكبيرة تتحرك مسافات قليلة — **10 إلى 28px** (`--travel-max`)، مش 300px.
* الـTransforms الكبيرة بطيئة ومحسوبة.
* Device frames تفضل ثابتة بينما المحتوى الداخلي أو الـAnnotations تتغير.
* الدخول/الخروج يعتمد على Position + Mask + Scale بسيط.
* Rotation قليلة جدًا.
* Overshoot وElastic **شبه ممنوعة**.
* Ease curves تميل لـSmooth deceleration.
* Premium visual settle: **700–1200ms** حسب scroll progress.

#### Scroll Section Length

الطول لازم يكون له سبب. كل جزء بيقدّم معلومة جديدة. ممنوع Stretch لمجرد استعراض Animation. ممنوع إحساس إن المستخدم محبوس.

#### 🔴 PREMIUM SCROLL TECHNICAL CONTRACT — إضافة v2.0

**المشكلة في v1.0:** الوصف السلوكي ممتاز، لكن مفيش عقد تنفيذ. مفيش مكتبة، مفيش تعامل مع resize، مفيش حل للشاشات القصيرة، ومفيش رقم واحد للـpacing.

| البند | القرار |
|---|---|
| المكتبة | **GSAP 3 + ScrollTrigger** |
| Import | ديناميكي داخل `useEffect` — **مش** في الـinitial bundle |
| Pin type | `pinType: "transform"` |
| Scrub | `scrub: 0.6` (يدي الـinertia المطلوبة) |
| Canvas height | `min-height: 100svh` · `height: 100dvh` |
| Resize | `ScrollTrigger.refresh()` debounced 150ms + `ignoreMobileResize: true` |
| Short viewport | لو `window.innerHeight < 620` → **الـpinning يتلغي** ويتحول لـstacked |
| Reduced motion | `ScrollTrigger.getAll().forEach(t => t.kill())` + `.stacked` class |
| Mobile | `matchMedia("(min-width: 1024px)")` — الـpinning **بيتفعّل من 1024 وفوق بس** |
| Backward scroll | scrub بيتكفّل — بس لازم كل state تكون **idempotent** (مش بتعتمد على state قبلها) |
| Fast scroll | ممنوع `onEnter` callbacks بتعمل شغل تقيل — كل حاجة `progress`-based |
| Cleanup | `return () => ScrollTrigger.getAll().forEach(t => t.kill())` في كل useEffect |

#### Scroll Lengths — أرقام محددة

| القسم | ارتفاع الـwrapper | عدد الحالات | مسافة كل حالة |
|---|---|---|---|
| Strategy | `450vh` | 5 + intro | ~75vh |
| Product Explorer | `700vh` | 7 + intro | ~87vh |
| Setup | `420vh` | 5 | ~84vh |

> **ملاحظة v2.0:** v1.0 اقترحت 650vh لـ7 حالات في الـProduct Explorer = ~93vh للحالة **شاملة الـintro**، وده ضيّق. اترفع لـ**700vh** عشان كل حالة تاخد وقتها الفعلي.

#### Premium Scroll Technical Rule

الـPremium Scroll **Enhancement** — مش شرط لفهم الصفحة.

HTML content hierarchy لازم تفضل صحيحة حتى بدون JavaScript. كل Screen، Strategy، Step، Copy لازم يكون موجود في الـDocument Flow.

#### 🔴 Premium Scroll Accessibility Contract — إضافة v2.0

v1.0 قالت «المحتوى في الـDOM» — وده **مش كفاية**.

| المطلوب | التنفيذ |
|---|---|
| الحالات المخفية بصريًا | `aria-hidden="true"` + `inert` — عشان الـscreen reader والـkeyboard ما يدخلوش فيها |
| الحالة النشطة | بدون `inert`، وعندها `aria-current="step"` |
| التنقل بالكيبورد | الـstory rail (Strategy / Product) عبارة عن `<button>`s حقيقية — الضغط عليها بيـ`scrollTo` الحالة |
| قارئ الشاشة | نسخة `.sr-stacked` فيها كل الحالات كاملة، `class="sr-only"` على الديسكتوب، **ظاهرة** في reduced-motion |
| Live region | تغيّر الحالة بيعلن في `aria-live="polite"` بعنوان الحالة فقط |
| Focus | لو المستخدم عمل tab لعنصر جوه حالة مخفية → مستحيل بسبب `inert` |
| Skip | زرار «تخطَّ القصة» أول كل قسم Premium يودّي لآخره |

#### Mobile Scroll Rule

Desktop ممكن يستخدم Premium Sticky Scroll Story. **Mobile مايتنسخش عليها نفس التعقيد.**

على Mobile: نقلل الـPinning · نقلل مدة Sticky states · Vertical progression · transitions سلسة وتقيلة بدون Scroll Trap · المحتوى كله Accessible حتى لو الـAnimation اتوقفت · لو الـSticky Story تسبب Friction تتحول Stacked Sequence.

**v2.0:** الـpinning **متوقف تمامًا تحت 1024px** — مش مقلل، متوقف.

#### Reduced Motion

* إزالة الـPinning المعقد.
* إلغاء الـParallax.
* إلغاء التحولات الطويلة.
* كل Story State يظهر مباشرة في Sequence واضحة.
* **لا يتم فقد أي Copy أو Screenshot أو معنى.**

#### Premium Scroll Sections Only

ممنوع نفس الـHeavy Scroll Storytelling في: Header · Hero · Problem · What Is · Who For · Operation Flow · Pricing · Trial · FAQ · Form · Final CTA · Footer.

عشان Premium Scroll يفضل **Special Moment** بدل ما الصفحة كلها تبقى Animation Demo.

---

### G17. BASE ACCESSIBILITY REQUIREMENTS

قبل Approval لأي Section:

* Visible focus states.
* Readable color contrast (§00.5 CONTRAST LOCK).
* Logical heading hierarchy — **h1 واحد بس** (الـHero)، وكل section `h2`.
* Proper input labels — **ممنوع placeholder كـlabel وحيد**.
* Decorative images `alt=""` + `aria-hidden`.
* Informative images لها alt ذو معنى.
* Keyboard-accessible interactive elements.
* No information communicated only through color.
* Reduced-motion alternative.
* Touch targets ≥ 44×44px.

#### 🔴 إضافات v2.0

* **Skip link** أول عنصر في الـbody.
* **Focus ring** معرّف مرة واحدة في الـtokens — `--focus-on-light` / `--focus-on-blue`.
* **`lang` و `dir`** على `<html>` صح لكل نسخة.
* **الأرقام والأسعار والتليفونات والأكواد** جوه العربي: `dir="ltr"` + `unicode-bidi: isolate`.
* **الـMobile drawer:** focus trap · scroll lock على `body` (بـ`position:fixed` مش `overflow:hidden` — قانون G5) · `Esc` بيقفل · `aria-modal="true"` · الفوكس بيرجع لزرار الفتح.
* **الـFAQ:** `<button aria-expanded>` — **مش** `div` قابل للنقر.
* **الفيديو:** captions `.vtt` + transcript.
* **الـLanguage switch:** `<a hreflang>` حقيقي، مش JS toggle.
* **الحركة فوق النص:** ممنوع نص يتحرك أثناء القراءة.

---

### G18. PERFORMANCE RULES

الـVisual Style مايعتمدش على Heavy Assets.

* Product screenshots optimized.
* Decorative assets reusable.
* No unnecessary autoplay video.
* No heavy 3D scene by default.
* Motion limited to purposeful elements.
* Hero core message appears promptly.
* Mobile connection performance important.
* Premium Scroll لازم يتجنب layout thrashing.
* Scroll animations تفضّل `transform` / `opacity` / `clip-path`.
* Product screenshots للحالات القادمة تتحمّل بمسؤولية.
* Scroll listeners efficient.
* Animation smooth على mid-range mobile.
* Heavy scroll sections ما تعطّلش أول render.
* ChatGPT Image assets optimized قبل الإنتاج.
* Responsive image sizing مناسب.
* ممنوع شحن مخرجات توليد صور ضخمة.
* جودة كافية للتشابه البصري مع أداء واقعي.
* ممنوع preload لكل صورة ضخمة.
* RTL/LTR duplicate assets تتقدّم conditionally.
* Mobile ياخد أصول بمقاسه.
* Videos ما تشتغلش تلقائيًا بصوت.
* Product Explorer يعمل preload للشاشات القادمة بذكاء.

#### 🔴 إضافات v2.0 — بالأرقام

* الـbudget في §00.11.
* **Preload strategy للـProduct Explorer:** الشاشة الأولى `priority`، الشاشة **التالية بس** بتتحمّل مسبقًا (`n+1`)، الباقي `loading="lazy"` — مش الـ7 مرة واحدة.
* **`decode()` قبل الانتقال:** `await img.decode()` عشان مفيش وميض.
* **GSAP:** import ديناميكي، مش في الـinitial bundle.
* **الخطوط:** subset عربي لـCairo + Latin لـNunito، `font-display: swap`، preload لوزنين بس (900 display + 400 body).
* **الفيديوهات:** `preload="none"` + IntersectionObserver.

---

### G19. SHAPE LANGUAGE

#### Structural Shapes

Strong rectangles · Large content panels · Brutalist cards · Browser/dashboard frames · Ticket/work-order panels · Blueprint modules.

#### Playful Shapes

Water drops · Bubbles · Sparkles · Simple waves · Thick arrows · Highlight strokes · Stickers · Stamps · Number labels · Abstract wash-bay shapes.

#### Rules

* الـLayout Grid يفضل disciplined حتى لو Decorations playful.
* Rotation عادةً subtle (≤ 3°).
* Decorations ممنوع تغطي Copy عربي مهم.
* Decorations ممنوع تغطي English copy المهم.
* Mobile يستخدم Decorations أقل من Desktop.
* أي artwork معقد → ChatGPT Image (G8/G10).

---

### G20. BORDER & SHADOW HIERARCHY

| Level | الظل | الاستخدام |
|---|---|---|
| **0** | بدون | نص · عناصر زخرفية خفيفة |
| **1** | `--sh-hard-1` (3px) | Badges · Compact controls · Secondary button |
| **2** | `--sh-hard-2` (5px) | Standard cards · Primary button |
| **3** | `--sh-hard-3` (8px) | Hero product frame · Featured pricing · Primary CTA moments |
| **soft** | `--sh-soft` | كروت محتوى ناعمة عند الحاجة |

> **ممنوع كل Component ياخد أقوى Shadow.** الـLevel 3 بحد أقصى **عنصرين** في كل section.

---

### G21. WHAT WE DO NOT WANT

ممنوع الاتجاه ناحية:

Dark heavy brutalism كاتجاه أساسي · Black-dominant pages · Random rainbow colors · Generic SaaS gradients في كل مكان · Glassmorphism · Excessive rounded cards · Generic 3D SaaS illustrations · Stock car-wash photos كهوية بصرية · Fake dashboards · Fake business metrics · Tiny unreadable screenshots · Excessive rotation · Animation على كل عنصر · نسخ الـProduct Design System للموقع التسويقي · Cheap code-generated illustrations · CSS artwork كبديل عن المراجع · Generic SaaS floating cards · Random decorative blobs · Card Grid في كل Section · Desktop composition مضغوط للموبايل · Layout واحد متعكس للعربي من غير مراجعة توازن.

---

### G22. CORE REUSABLE COMPONENTS

تتعمل في GROUP 01 قبل تصميم الأقسام:

`Button` (primary/secondary/tertiary) · `SectionLabel` (eyebrow) · `SectionNumber` · `BrutalistCard` · `Sticker` / `Badge` · `StrategyCard` · `ScreenFrame` (browser/laptop/phone) · `Annotation` / `Hotspot` · `ThickArrow` · `StepItem` · `PricingCard` · `AccordionItem` · `Field` + `ValidationState` + `SuccessState` · `LanguageSwitch` · `DirectionalRoute` · `VideoBlock` · `OwnerLayer` · `Asset` · `Stage` · `Container` · `Section`.

**الهدف مش Giant Component Library. نعمل فقط Patterns فعلًا هتتكرر.**

---
## EXECUTION STRUCTURE

```
GROUP 00 — REPO, STACK & EXECUTION CONTRACT        ← جديد v2.0
GROUP 01 — PROJECT UNDERSTANDING + BASE SYSTEM
GROUP 02 — HEADER
GROUP 03 — HERO
GROUP 04 — THE PROBLEM
GROUP 05 — WHAT IS SPARKLE AUTO?
GROUP 06 — WHO IS SPARKLE AUTO FOR?
GROUP 07 — CAR-WASH OPERATIONS & GROWTH STRATEGY
GROUP 08 — STRATEGY → REAL SYSTEM + PRODUCT EXPLORER
GROUP 09 — COMPLETE OPERATION FLOW
GROUP 10 — SETUP & PREPARATION
GROUP 11 — PRICING
GROUP 12 — 14-DAY TRIAL
GROUP 13 — FAQ
GROUP 14 — APPLICATION FORM
GROUP 15 — FINAL CTA
GROUP 16 — FOOTER
```

SEO + Final Full-Page Polish + Release QA يتموا كـ**Global Release Layer** بعد اكتمال الـ17 Group.

---

---

# GROUP 01 — PROJECT UNDERSTANDING + CREATIVE DIRECTION + BASE VISUAL / INTERACTION / ASSET PRODUCTION SYSTEM

> **Mandatory prerequisite:** GROUP 00 must be completed and approved. This group locks the complete Base System, Creative North Star, B01–B12 boards, Owner/3D world, Product Proof, assets, bilingual/responsive rules, motion prototypes, calibration, and the final pre-section gate.

## ORIGINAL GROUP 01 SOURCE — PRESERVED IN FULL

**الهدف:** فهم المشروع بالكامل، وبناء الـBase Components، قبل أي Section.

لا يتم بناء Header أو Hero أو أي Section قبل إنهاء واعتماد هذا الجروب.

---

### 1.1 Purpose — هدف الخطة

الخطة دي هي المرجع الموحد لبناء Landing Page الخاصة بـSparkle Auto.

بدل ما يكون عندنا Copywriting Plan منفصلة + Design Plan منفصلة + Build Plan منفصلة — كل حاجة هنا متجمعة Section by Section.

#### كل Section لازم يتحدد له

1. Business Goal
2. السؤال اللي بيجاوب عليه عند العميل
3. الرسالة الأساسية
4. الـCopy النهائي
5. الـCTA
6. الـVisual Concept
7. الـDesktop Composition
8. الـMobile Composition
9. الـProduct Assets المطلوبة
10. الـIllustrations / Graphics المطلوبة
11. الـMotion
12. الـRTL / LTR behavior
13. الـBuild Requirements
14. الـQA
15. الـApproval Gate
16. Reference Image composition analysis
17. Reference-specific scale
18. Reference-specific visual hierarchy
19. Arabic desktop state
20. English desktop state
21. Arabic tablet state
22. English tablet state
23. Arabic mobile state
24. English mobile state
25. Required RTL / LTR visual asset variants

**🔴 إضافات v2.0:**

26. Asset IDs من `assets.manifest.json`
27. CTA IDs من `cta.registry.json`
28. Section `id` + `scroll-margin-top`
29. Slot decisions من `UNAPPROVED SLOT REGISTRY` (§0.6)
30. Blockers المفتوحة في الـSection

---

### 1.2 Landing Page Final Story

الرحلة الأساسية للصفحة:

1. Header
2. Hero
3. المشكلة اللي صاحب المغسلة عايشها
4. تعريف Sparkle Auto
5. Sparkle Auto مصمم لمين؟
6. استراتيجيات تشغيل مغسلة بمستوى احترافي
7. تطبيق الاستراتيجيات داخل Sparkle Auto + عرض شاشات السيستم الحقيقية
8. من أول الحجز لحد قفلة اليوم
9. تجهيز السيستم على مغسلة العميل
10. الأسعار
11. تجربة الـ14 يوم
12. الأسئلة الشائعة
13. نموذج التقديم
14. CTA نهائي
15. Footer

**الـNarrative المقصود:**

> المشكلة → الفكرة → النظام → طريقة التشغيل الصحيحة → إثبات التطبيق داخل السيستم → سهولة التجهيز → السعر → إزالة الاعتراضات → التقديم.

*(الـSEO مش section — هو Release Layer، اتشال من قائمة الأقسام في v2.0.)*

---

### PART A — BASE VISUAL & INTERACTION SYSTEM

#### 1.3 Base Goal

قبل تصميم الـHero أو أي Section نهائي، لازم يتم تأسيس النظام البصري المشترك.

الـBase Phase لازم تجاوب على:

* What should Sparkle Auto feel like visually?
* How will Neo-Brutalism be adapted to the Sparkle Auto identity?
* What colors, typography, borders, shadows, shapes, icons, and illustrations are allowed?
* How will real product screenshots be presented?
* How should Arabic RTL layouts behave?
* How should the visual system simplify on mobile?
* What motion language will be used?
* What patterns must not be used?
* How will supplied Reference Images be analyzed?
* Which elements must be generated with ChatGPT Image?
* Which elements belong to code?
* Which elements must remain real Sparkle Auto product assets?
* How will English LTR layouts be independently composed?
* Which visual elements can mirror?
* Which visual elements require separate RTL/LTR assets?
* How will Tablet differ from Desktop?
* How will Narrow Mobile differ from Large Mobile?
* How will the 1672×941 reference compositions translate to real browser widths?

**🔴 أسئلة v2.0 الإضافية:**

* أي stage محتاج `PROPORTIONAL STAGE PATTERN`؟
* أي section فيه sticky (وبالتالي ممنوع `overflow` على أجداده)؟
* أي asset محتاج نسخة RTL/LTR فعلًا بعد تطبيق `LAYERED SCENE RULE`؟
* أي نص أزرق محتاج `--blue-text` بدل `--sparkle-blue`؟

> **قاعدة أساسية:** No section should introduce its own unrelated visual language after the Base is approved.

---

#### 1.4 Design Direction

##### Core Style — Fresh Blue Neo-Brutalism

الصفحة لازم تحسسك إنها: Bright · Cheerful · Fresh · Clean · Energetic · Modern · Automotive · Organized · Distinctive without becoming chaotic.

الـDesign يجمع بين: Neo-brutalist structure · Sparkle Auto blue identity · Water/wash visual language · Operational/business-system graphics · Real Sparkle Auto product UI · Light playful details · Premium clean product-marketing composition · High whitespace · Controlled asymmetry · Reference-image-driven visual hierarchy.

##### Balance

* **70%** clean, structured, readable product marketing.
* **30%** playful Neo-Brutalist personality.

الـNeo-Brutalism هنا معمول عشان يدي شخصية للبراند، **مش** عشان يقلل الـUsability.

##### What We Do Not Want

→ القائمة الكاملة في **G21**.

---

#### 1.5 Source & Product Constraints

##### Product positioning to preserve

> Sparkle Auto is a browser-based booking and management platform designed for car-wash businesses in Egypt and the Arab market.

الصفحة توصل المنتج من خلال **3 Business Outcomes**:

1. Better customer booking experience.
2. Better operational control for owners and teams.
3. Better customer retention through loyalty, offers, and ongoing engagement.

##### Existing product design rules to preserve

* Arabic is first-class and RTL must be designed intentionally.
* English is supported as the secondary language.
* Cairo is the Arabic typeface used by the product.
* Nunito is the Latin/English typeface used by the product.
* Responsive design should start from a narrow mobile layout.
* Color cannot be the only way status or meaning is communicated.
* Motion must remain understandable when reduced motion is requested.

##### Important Separation

Sparkle Auto Product UI عنده Application Design System خاص بيه.
الـLanding Page ممكن تستخدم Neo-Brutalist Marketing Dialect أقوى.

> **Marketing frame = expressive. Product screenshot = real.**

**ممنوع إعادة تصميم الـDashboard نفسه عشان يناسب شكل الـLanding Page.**

---

#### 1.6 Base Visual System

##### Color Roles

| Role | Direction | Usage | Token |
|---|---|---|---|
| Primary Blue | Bright Sparkle blue | Main CTA fill, key highlights, large accent areas | `--sparkle-blue` |
| Blue Text | Darker readable blue | كلمات ملوّنة داخل العناوين | `--blue-text` |
| Fresh Blue | Lighter energetic blue | Stickers, secondary cards, visual emphasis | `--surface-pale` |
| Ice Blue | Very pale blue | Section backgrounds | `--surface-ice` |
| Cloud Blue | Near-white blue | Main page background / soft alternation | `--surface-cloud` |
| Aqua | Light water accent | Decorative wash/water graphics **only** | asset-level |
| Deep Navy | Dark blue | Headlines, outlines, borders, hard shadows | `--deep-navy` |
| White | Clean neutral | Cards, screenshots, breathing space | `--white` |

##### Color Rules

* Deep Navy replaces typical brutalist pure black where possible.
* الصفحة تفضل mostly light.
* Strong blue blocks تستخدم في intentional moments فقط.
* Aqua accent وليس second primary brand color.
* **ممنوع اعتبار لون جديد Official Brand Color بناءً على Landing Page Proposal فقط.**
* الـContrast لازم يفضل مقروء بالعربي والإنجليزي.
* **🔴 v2.0:** كل تركيبة لون/خلفية لازم تعدّي `CONTRAST LOCK` (§00.5) قبل الاستخدام.
* **🔴 v2.0:** الـSemantic colors (success/error/warning) **functional only** — عمرها ما تبقى brand accents.

---

#### 1.7 Typography System

##### Arabic — Cairo

| المستوى | الوزن |
|---|---|
| Display / Hero | 900 |
| Section titles | 800 |
| Body | 400 / 500 |
| Labels / badges | 800 |

##### English — Nunito

| المستوى | الوزن |
|---|---|
| Display | 800–900 |
| Body | 400–600 |

##### Typography Behavior

* Oversized headings جزء من الهوية البصرية.
* الـHeadlines تعتمد على الـScale بدل decorative effects.
* Paragraph width يفضل controlled (`--measure`).
* Brutalist labels ممكن تستخدم uppercase **English only** — العربي مالوش uppercase.
* العربي عمره ما يظهر كلغة Secondary.
* Arabic line-height يتعمله test منفصل عن English (`--lh-*-ar` / `--lh-*-en`).
* Headline wrapping لا يجب أن يتطابق حرفيًا بين اللغتين.
* Visual hierarchy لازم تتطابق حتى لو Line count مختلف.

##### 🔴 قواعد v2.0

* **ممنوع `<br>` يدوي** في العناوين — الكسر بـ`max-width` + `text-wrap: balance`.
* **Cairo محتاج line-height أعلى** من Nunito للـdisplay (1.28 مقابل 1.00) عشان التشكيل والنقط.
* **الخطوط self-hosted** — subset عربي + subset لاتيني، `font-display: swap`، preload لوزنين بس.
* **ممنوع `font-weight` قيمة مش في الـtokens.**

---

#### 1.8 Illustration & Decorative Art Direction

##### Potential Subjects

Car · Wash bay · Water/foam · Booking calendar · Customer · Owner · Staff · Revenue/analytics · Loyalty reward · Offer/promo · Location · Branch · Phone/browser.

##### Style

Flat or lightly dimensional · Chunky geometry · Deep Navy outlines · Blue-family fills · Limited detail · Easy to recognize at small sizes.

##### Avoid

Generic people illustrations · Random floating 3D blobs · Chrome-heavy futuristic cars · Illustrations that make the product feel like a game.

##### Production Rule

أي Illustration / Visual Artwork مخصص يتم إنتاجه باستخدام **ChatGPT Image**، ويتسجل في `assets.manifest.json`.

ممنوع استبداله بـ: CSS illustration · Programmatic drawing · Generic icon collage · Code-generated approximation.

---

#### 1.9 Real Product Screenshot System

Product UI واحد من أقوى Sales Assets في الصفحة.

##### Rules

* Use real Sparkle Auto screens.
* Do not redesign the dashboard inside the marketing mockup.
* Do not fabricate data to make a claim unless clearly marked as demo content.
* Keep important UI large enough to read.
* Crop intentionally to the feature being explained.
* Use annotations **outside or above** the real UI instead of altering it.
* Keep browser/device framing consistent.
* Prefer a few strong screens over a wall of tiny screenshots.
* Never use ChatGPT Image to fabricate Sparkle Auto UI.
* Never recreate Product UI from the Reference Image.
* **Never horizontally flip a product screenshot.**

##### Required Screenshot Inventory

→ الجدول الكامل بأسماء الملفات والمقاسات في **§00.6** (9 ملفات).

يغطي: Booking/schedule · Customer experience · Dashboard/overview · Financial visibility · Loyalty/offers · Staff/operations · Inventory · Branch management · Setup/configuration.

---

#### 1.10 Layout & Grid

##### Desktop

* Strong wide composition.
* Container: `min(1500px, 100% - 128px)`.
* Gutters: 64px.
* Large spacing between major sections (88px).
* Intentional asymmetry where it improves energy.
* Split-screen layouts where product UI needs prominence.
* Reference viewport ≈ 1672×941.
* **🔴 المشاهد المركّبة تستخدم `PROPORTIONAL STAGE PATTERN` (G4).**

##### Tablet

* Reduce overlapping decorations.
* Preserve hierarchy before preserving desktop composition.
* Convert 3-column compositions intelligently.
* Maintain product readability.
* Avoid compressed Owner/Product overlap.

##### Mobile

* Single-column first.
* Arabic-first RTL flow.
* English LTR flow separately tested.
* Large readable product visuals.
* No horizontal page scrolling.
* Keep primary CTA reachable.
* Reduce large rotations and offsets.
* Convert complex sticky stories to clear stacked sequences.
* Gutter 22px · Heading ~46px · Body 17px · Cards stacked · Buttons near full-width.

---

#### 1.11 RTL / LTR Rules

Arabic هو Reference Design Version. كل Section يتراجع في Arabic/RTL و English/LTR.

##### Direction-aware Elements

Arrows · Step flows · Screenshot + copy split layouts · Previous/next controls · Timeline direction · Form alignment · Product annotations · Blueprint movement · Operation lane · Decorative directional trails · Hero visual placement · Owner/device balance.

##### القاعدة

الأرقام والأسعار وأرقام التليفون والـCodes والـTechnical fragments تحافظ على **LTR ordering** لما يكون ده أوضح.

##### 🔴 تنفيذ v2.0

* كل CSS اتجاهي بيستخدم **logical properties**: `inline-start` / `inline-end` / `margin-inline` / `padding-inline` / `border-inline` — **مش** `left`/`right`.
* الاتجاه بيتقلب من `<html dir>` بس. **مفيش** stylesheet تاني للعربي.
* `transform: scaleX(-1)` **ممنوع** على أي عنصر فيه نص/UI/لوجو/شخصية.
* الأرقام في نص عربي: `<span dir="ltr" style="unicode-bidi:isolate">`.
* الأيقونات الاتجاهية (أسهم) بتستخدم `[dir="rtl"] & { transform: scaleX(-1) }` — **مسموح لأنها شكل هندسي بلا نص**.

---

#### 1.12 Base Deliverables — 🔴 بقت مخرجات ملموسة

الـBase Phase تعتبر خلصت لما الملفات دي تكون موجودة وشغالة:

```
☐ docs/01-base.md — بيان الاتجاه البصري
☐ src/styles/tokens.css — مكتمل ومتحقق منه بـtest:tokens
☐ components/base/Button.tsx — 3 أنواع × 5 حالات
☐ components/base/BrutalistCard.tsx — 3 مستويات ظل
☐ components/base/Badge.tsx / Sticker.tsx
☐ components/base/SectionLabel.tsx + SectionNumber.tsx
☐ components/base/ScreenFrame.tsx — browser / laptop / phone
☐ components/base/Annotation.tsx + Hotspot.tsx
☐ components/base/ThickArrow.tsx
☐ components/base/Field.tsx + ValidationState + SuccessState
☐ components/base/AccordionItem.tsx — بـbutton/aria-expanded
☐ components/base/PricingCard.tsx
☐ components/base/StepItem.tsx
☐ components/base/VideoBlock.tsx — بـcaptions + poster + preload=none
☐ components/base/LanguageSwitch.tsx — روابط hreflang حقيقية
☐ components/base/Asset.tsx — Placeholder Protocol
☐ components/layout/Container.tsx + Section.tsx + Stage.tsx
☐ lib/scroll/premium.ts — GSAP setup + reduced-motion + short-viewport guards
☐ lib/i18n.ts + lib/copy.ts
☐ صفحة /styleguide (dev only) بتعرض كل كومبوننت في كل حالة × لغتين
☐ npm run verify بيعدي
☐ axe scan على /styleguide = 0 serious/critical
```

**🔴 v2.0:** صفحة `/styleguide` دي **بديل الـmoodboard**. Codex بيبنيها، وإنت بتوافق عليها بصريًا. أسرع وأدق من مراجعة وثيقة.

---

#### 1.13 GROUP 01 — ACCEPTANCE GATE

> ملغي من v1.0: كل الـcheckboxes من نوع «☐ Codex فاهم …» — دي مش قابلة للقياس. اتحولت لمخرجات ملموسة.

```
☐ docs/01-base.md مكتوب ومراجَع
☐ /styleguide شغّالة وكل كومبوننت ظاهر في: default/hover/pressed/focus/disabled
☐ /styleguide معروضة في ar و en
☐ /styleguide معروضة في 6 مقاسات
☐ tokens.css فيه صفر ranges
☐ test:tokens بيعدي (مفيش قيمة hardcoded)
☐ test:a11y على /styleguide = 0 serious/critical
☐ CONTRAST LOCK متطبّق — الزرار الأساسي نصه navy
☐ الخطوط بتحمّل بدون FOIT، والـsubsets مظبوطة
☐ Stage.tsx بيطبّق PROPORTIONAL STAGE PATTERN وبيشتغل من 1024 لـ1920
☐ مفيش overflow:hidden على html/body — و test:overflow بيعدي
☐ premium.ts فيه: reduced-motion kill + short-viewport guard + matchMedia ≥1024 + refresh debounce
☐ Asset.tsx بيعرض placeholder بالنسبة الصحيحة
☐ PROJECT_STATE.md متحدّث
```

**FINAL GROUP 01 GATE:**

> Do not start Header, Hero, or any final Section visual design until GROUP 01 is reviewed and approved.
> **BASE FIRST. APPROVE GROUP 01. THEN MOVE TO GROUP 02.**

---

### PART B — STANDARD SECTION WORKFLOW

كل Section يمشي بنفس Mini-Cycle.

#### Step 0 — Reference Analysis

قبل الـBrief: يتم تحليل الـReference Image + قراءة الـReverse-Engineering Spec المكتوب.

يتحدد: Composition · Layout · Visual hierarchy · Relative scale · Spacing · Key visual assets · Typography placement · Background treatment · إيه CODE / إيه CHATGPT IMAGE / إيه REAL PRODUCT SCREEN · Arabic desktop · English desktop · Arabic tablet · English tablet · Arabic mobile · English mobile · إيه اللي بينعكس · إيه اللي محتاج asset منفصل.

**لا يبدأ الـWireframe قبل فهم الـReference.**

**🔴 v2.0 — مخرج الخطوة دي:** ملف `docs/XX-section.md` فيه:
جدول تصنيف كل عنصر (CODE / ASSET-ID / SCREEN-ID) + جدول النسب + قرارات الـSlots + الـCTA IDs.

#### Step 1 — Section Brief

Business goal · User question answered · Primary message · Primary CTA · Required content · Required real product assets · Visual role in the page.

#### Step 2 — Wireframe

Content hierarchy · Reading order · Desktop composition · Tablet composition · Mobile composition · Product/illustration placement · RTL composition · LTR composition.

**ممنوع Decorative Polish قبل قبول الـHierarchy.**
الـWireframe يحافظ قدر الإمكان على Composition الـReference.

#### Step 3 — Visual Design

تطبيق الـApproved Base: Color · Type · Border/shadow · Graphic shapes · Illustration · Screenshot treatment.

مع: Maximum practical similarity · ChatGPT Image للـartwork · Real screens للـProduct UI · Separate Arabic/English balancing · Responsive recomposition.

#### Step 4 — Interaction & Motion

نحدد بس الـInteractions اللي بتخدم الـSection.

في أقسام Premium Scroll يتحدد: Scroll start · Scroll end · Sticky duration · Story states · Transition order · العنصر المثبت · العناصر المتحولة · Copy synchronization · Mobile fallback · Reduced-motion fallback · RTL motion direction · LTR motion direction.

#### Step 5 — Responsive / RTL Review

Arabic × (desktop / tablet / large mobile / narrow mobile) + English × نفسهم + Long copy + Narrow width.

#### Step 6 — Build

يتبني فقط الـApproved Section Scope.
**ممنوع إعادة تصميم Sections معتمدة أثناء بناء Section جديد** إلا لو ظهر Shared-System Problem.

#### Step 7 — Section QA

Visual consistency · Content hierarchy · RTL/LTR · Responsive behavior · Keyboard interaction · Reduced motion · Image clarity · Loading/performance impact · CTA behavior · Scroll smoothness · No scroll trapping · Premium Scroll pacing · Story understandable without animation · Reference similarity · Correct ChatGPT Image assets · No code-generated replacement · Real screenshots truthful · Arabic composition · English composition · Tablet adaptation · Mobile recomposition · Asset cropping · No flipped Product UI · No horizontal overflow.

**🔴 v2.0 — `npm run verify` لازم يعدّي قبل الـGate.**

#### Step 8 — Approval Gate

الـSection يتعتمد قبل بدء الـSection اللي بعده. + تحديث `PROJECT_STATE.md`.

---

## FULL INTEGRATED WEB VISUAL DESIGN & ASSET PRODUCTION MASTER — SOURCE 02 PRESERVED IN FULL

## Sparkle Auto — Web Visual Design & Asset Production Master

Document type: Design-system specification + visual-asset production plan + section asset map
Version: 1.0
Status: Proposed lock for review
Integration: This document expands GROUP 01 — PROJECT UNDERSTANDING + BASE VISUAL & INTERACTION SYSTEM without changing the existing 16-group order, approved copy, commercial rules, Product Truth, or reference-image workflow.
Primary experience: Arabic / RTL
Secondary experience: English / LTR
Creative direction: Premium Soft Stylized 3D × Egyptian Editorial Thinking × Fresh Blue Neo‑Brutalism × Real Sparkle Auto Product Proof

### 0. Executive decision

The existing landing-page master plan is strong in narrative, conversion, product truth, responsive intent, and motion direction. What it still needs before section production is a locked, visible, reusable design layer covering:

Exact foundations and design tokens.
Exact component anatomy and all interaction states.
A complete visual-asset manifest.
A repeatable Owner/character asset system.
A controlled icon, motif, background, and illustration system.
Exact Product Screenshot presentation rules.
Arabic/English and desktop/mobile composition recipes.
Motion states and reduced-motion counterparts.
Performance budgets and export rules.
A board-by-board approval gate before GROUP 02.

This document supplies that missing layer.

The result should not feel like a template library with blue cards. It should feel like one coherent operating world: tactile Neo‑Brutalist structure, real product proof, and a recurring Egyptian 3D character whose acting explains operational pain and control.

### 1. Non-negotiable creative equation

LOCKED 3D OWNER + PURPOSEFUL 3D PROPS
                ×
EGYPTIAN EDITORIAL IDEA / ACTING / SCALE
                ×
TACTILE NEO-BRUTAL WEB COMPONENTS
                ×
REAL SPARKLE AUTO PRODUCT SCREENS
                =
SPARKLE AUTO WEB EXPERIENCE

#### 1.1 Visual balance

70% clean, readable, conversion-first product marketing.
20% expressive editorial 3D storytelling.
10% functional graphic accents and motion cues.

These percentages govern attention, not literal area.

#### 1.2 One focal rule

Every section gets one dominant visual action:

Hero: control through real product.
Problem: the Owner is overwhelmed by scattered questions.
What Is: the two product sides become clear.
Who For: qualification becomes easy to scan.
Strategy: one connected operating blueprint is built.
Product Explorer: one stable product frame answers changing questions.
Operation Flow: one route connects the full workday.
Setup: one professional work order is completed.
Pricing: one confident package comparison.
Trial: one compact risk-reversal moment.
FAQ: one calm objection-resolution panel.
Form: one clear qualified application.
Final CTA: one emotional closing promise.

No section may introduce a second competing metaphor.

### 2. Production architecture: what is built by what

Every visible element must be assigned to exactly one production class before visual design begins.

| Class | Used for | Production rule |
|---|---|---|
| CODE | Layout, type, cards, buttons, forms, navigation, device frames, responsive behavior, masks, scroll logic | Semantic HTML/CSS/JS; exact states; accessible |
| VECTOR ASSET | Functional icons, trails, arrows, underlines, wave dividers, route lines, simple spark states | Designed once as a controlled SVG set; never random inline decoration |
| CHATGPT IMAGE | Owner poses, 3D cars, wash bays, branches, chunky props, editorial metaphors, complex splash/foam art | Transparent, identity-locked, no embedded final copy or fake UI |
| REAL PRODUCT | Dashboard, Overview, Bookings, Schedule, Status, Finance, Team, Inventory, Customers, Setup | Real Sparkle Auto screenshots only |
| BRAND ASSET | Logo, official marks, approved wordmark | Official files only; never generated or retyped |
| DIRECTION VARIANT | Direction-sensitive Owner poses, car direction, asymmetrical scene art | Separate approved RTL and LTR exports where mirroring would be incorrect |

#### 2.1 Layering rule

Avoid flattened hero or section images that contain everything. Build final compositions from controlled layers:

Atmospheric background asset.
Structural layout and cards in code.
Real Product Screenshot.
Device frame or mask.
Owner/3D asset.
Functional trail or arrow SVG.
HTML copy and CTA.
Interaction/focus layer.

This keeps text accessible, screenshots truthful, responsive layouts flexible, and Arabic/English versions genuinely composed instead of mirrored.

### 3. GROUP 01 expansion — required visual boards

GROUP 01 is not approved until the following boards are designed and signed off.

| Board | Content | Required output |
|---|---|---|
| B01 — Creative North Star | Direction statement, do/don’t examples, 70/20/10 balance, page rhythm | Desktop reference board |
| B02 — Color & Contrast | Brand colors, derived surfaces, functional colors, permitted combinations | Swatch and contrast matrix |
| B03 — Typography | Arabic and English specimens, hierarchy, line breaks, numerals, prices, long FAQ/form samples | Arabic + English test sheet |
| B04 — Structure & Depth | Grid, spacing, radius, border, hard-shadow levels, background surfaces | Token board |
| B05 — Controls | Buttons, links, language switch, tabs, menu, pagination, focus, pressed, disabled | Full state board |
| B06 — Content Components | Badges, section labels, cards, checklist, steps, pricing, FAQ, form, video | Component board |
| B07 — Product Proof | Laptop/browser/phone frames, screenshot crops, annotations, hotspots, loading states | Product presentation board |
| B08 — Owner & 3D World | Identity lock, approved website poses, cast rules, cars, branches, props | Character/asset contact sheet |
| B09 — Motifs & Backgrounds | Splash, foam, wave, spark, trail, blueprint, halftone, strokes, density rules | Asset sheet with clean exports |
| B10 — Responsive & Bilingual | Arabic/English × desktop/tablet/large-mobile/narrow-mobile | Eight-state comparison board |
| B11 — Motion | Normal transitions, three premium stories, reduced motion, backward/fast scroll | Motion storyboard/prototype |
| B12 — Section Asset Map | Exact asset/component ownership for every section | Signed production manifest |

#### 3.1 Approval sequence

B01–B04 Foundations
        ↓
B05–B07 Components + Product Proof
        ↓
B08–B09 Visual Asset World
        ↓
B10–B11 Responsive + Motion
        ↓
B12 Full Section Asset Map
        ↓
GROUP 01 APPROVED
        ↓
GROUP 02 HEADER

### 4. Final foundation tokens

#### 4.1 Core brand colors

| Token | Value | Role |
|---|---|---|
| --sa-blue | #01A2FF | CTA surface, keyword, route, active node, primary accent |
| --sa-dark-blue | #0C264B | Secondary ink, Owner clothing, secondary controls |
| --sa-deep-navy | #03132E | Headlines, borders, shadows, highest contrast |
| --sa-soft-blue | #91B1D8 | Atmosphere, secondary graphics, muted accents |
| --sa-white | #FFFFFF | Page, cards, negative space |

#### 4.2 Derived interface surfaces — not new brand colors

Use brand-blue alpha over white so the system stays inside the approved palette.

| Token | Construction | Use |
|---|---|---|
| --sa-cloud | rgba(1,162,255,.035) over white | Subtle page atmosphere |
| --sa-ice | rgba(1,162,255,.075) over white | Alternate section surface |
| --sa-soft-panel | rgba(1,162,255,.12) over white | Answer boxes, selected rows, small panels |
| --sa-line-soft | rgba(3,19,46,.14) | Quiet dividers |
| --sa-ink-muted | rgba(3,19,46,.70) | Supporting copy |
| --sa-disabled | rgba(3,19,46,.35) | Disabled content only |

#### 4.3 Functional colors

Functional colors never become decorative brand accents.

Success green: used only in form success/valid states.
Error red: used only in errors and critical warnings.
No yellow, orange, coral, mint, purple, or rainbow gradient.
Every status also receives text, shape, or icon support.

#### 4.4 Mandatory contrast correction

#FFFFFF on #01A2FF has an approximate contrast ratio of 2.76:1, so it fails WCAG AA even for large essential text. Therefore:

Primary button label on Sparkle Blue should be #03132E.
Essential body copy on the Final CTA blue panel should be #03132E.
If white type is visually required, it must sit on a Deep Navy sub-surface or be non-essential decorative lettering only.
No approved visual reference may override this accessibility requirement.

#### 4.5 Approved color combinations

| Background | Primary text | Secondary text | Accent |
|---|---|---|---|
| White | Deep Navy | Dark Blue / muted navy | Sparkle Blue |
| Cloud / Ice | Deep Navy | Dark Blue | Sparkle Blue |
| Sparkle Blue | Deep Navy | Deep Navy at reduced emphasis | White only as controlled graphic accent |
| Deep Navy | White | Soft Blue | Sparkle Blue |

### 5. Typography system

#### 5.1 Typeface lock

Arabic production default: Cairo until the typography test sheet is approved.
English production default: Nunito.
The marketing site may use stronger display weights than the application, but it may not introduce an unrelated typographic personality.
Any move away from Cairo requires approval through B03, not a section-by-section change.

#### 5.2 Type presets

| Preset | Desktop | Mobile | Weight | Line-height | Use |
|---|---|---|---|---|---|
| Display XL | clamp(52px,5.2vw,82px) | 44–52px | 900 | 0.98–1.08 | Hero, Final CTA |
| Display L | clamp(44px,4vw,64px) | 38–46px | 800–900 | 1.02–1.12 | Section titles |
| Heading M | 30–36px | 26–30px | 800 | 1.15–1.25 | Major cards |
| Heading S | 22–26px | 20–24px | 700–800 | 1.25–1.35 | Card titles |
| Lead | 20–22px | 18–20px | 500–600 | 1.6–1.75 Arabic | Intro copy |
| Body | 18px | 17px | 400–600 | 1.65–1.8 Arabic | Main copy |
| Label | 15–17px | 14–16px | 700–800 | 1.35 | Eyebrows, chips |
| Caption | 14–15px | 13–14px | 500–700 | 1.5 | Privacy and support |

#### 5.3 Line-length rules

Arabic body: target 34–46 characters per line where practical.
English body: target 50–68ch.
Hero headline: maximum visual width about 570px in the reference desktop composition.
Do not force identical line breaks between Arabic and English.
Price numerals, phone numbers, plan codes, and technical fragments retain LTR ordering where clearer.

#### 5.4 Arabic quality rules

Final Arabic remains live HTML, never baked into generated art.
All hamzas, punctuation, numerals, currency wording, and question marks receive manual review.
No auto-justification that creates large Arabic word gaps.
Avoid thin weights and cramped line heights.
Highlight no more than one phrase or keyword per headline.

### 6. Layout, spacing, radius, and depth

#### 6.1 Responsive layout grid

| Range | Columns | Outer gutter | Grid gap | Notes |
|---|---:|---:|---:|---|
| ≥1440px | 12 | 64–72px | 24px | Max content width 1504px |
| 1200–1439px | 12 | 48px | 24px | Reduce decorative overflow |
| 1024–1199px | 8 | 36–40px | 20px | Reduce device overlap |
| 768–1023px | 8 | 28–32px | 20px | Two-column only where readable |
| 480–767px | 4 | 24px | 16px | Intentional single column |
| <480px | 4 | 20px | 16px | Narrow-mobile QA state |

#### 6.2 Spacing scale

Use only this base scale unless a reference comparison documents an exception:

4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 112 / 128

Standard desktop section padding: 96–112px.
Dense explanatory section: 80–96px.
Mobile section padding: 56–72px.
Major section-to-section breathing transition: up to 128px desktop.
Card internal padding: 24–32px desktop, 20–24px mobile.

#### 6.3 Radius scale

| Token | Value | Use |
|---|---|---|
| R1 | 7–8px | Buttons, compact controls |
| R2 | 12–14px | Inputs, FAQ rows, compact cards |
| R3 | 18–20px | Standard content/product cards |
| R4 | 22–24px | Major section panels |
| R5 | 28–30px | Final CTA and rare hero-level color blocks |

Do not use exaggerated pill shapes for main buttons or core cards.

#### 6.4 Border scale

1px rgba(3,19,46,.14): quiet structural divider.
1px #91B1D8: pale supporting frame.
2px #03132E: standard interactive/control outline.
2px #01A2FF: selected or recommended state with non-color support.
3px #03132E: rare display prop or section-number treatment only.

#### 6.5 Shadow hierarchy

| Level | Specification | Use |
|---|---|---|
| S0 | none | Text, quiet surfaces |
| S1 | 2px 3px 0 #03132E | Badge, chip, tiny control |
| S2 | 4px 5px 0 #03132E | Standard button, compact card |
| S3 | 6px 7px 0 #03132E | Major card, work order |
| S4 | 9px 11px 0 #03132E | Featured pricing or rare focal panel |
| Soft Product | 0 18px 50px rgba(3,19,46,.10) | Real product frame only |

Pressed controls translate toward their shadow; they do not bounce.

#### 6.6 Z-index architecture

0  section background
10 decorative atmosphere
20 structural cards / product frame
30 screenshot / device content
40 Owner / primary 3D prop
50 annotations / route / badges
60 local controls
100 sticky header
200 mobile drawer
300 modal/video lightbox if approved

### 7. Background and decoration system

#### 7.1 Background families

| Family | Visual construction | Approved use |
|---|---|---|
| White Field | White + optional 2–4% blue atmosphere | Header, Problem, What Is, Pricing |
| Cloud Field | White with controlled pale-blue falloff | Hero, FAQ |
| Ice Blueprint | Ice surface + subtle 48px technical grid + sparse marks | Strategy only |
| Pale Route | Pale-blue service lane or route surface | Operation Flow |
| Work Surface | Very pale blue + document shadow/contact plane | Setup |
| Sparkle Block | Solid Sparkle Blue with Deep Navy essential text | Final CTA |
| Deep Close | Deep Navy with white/soft-blue text | Footer |

#### 7.2 Density rule

Desktop maximum per section:

One major atmospheric asset.
Up to two minor accents.
Up to three small spark/impact marks.

Mobile maximum:

One cropped atmospheric accent.
One functional spark or trail.

Nothing is added merely to fill negative space.

#### 7.3 Decoration asset set

Required reusable assets:

Wide pale-blue water splash.
Compact splash.
Low foam cluster.
Bubble cluster in three densities.
Large footer/final-CTA wave.
Short underline strokes in three lengths.
Impact lines in calm, stress, and success states.
Halftone patch in two densities.
Blueprint edge marks.
Spark states: dot, spark, trail, check.

All assets must have a clean transparent master and must be tested at 200px.

### 8. Icon system

#### 8.1 Functional icons

One consistent family only.
Base box: 24×24.
Stroke: 2–2.25px, rounded caps/joins.
Default: Deep Navy.
Active accent: Sparkle Blue used with fill, background, label, or state text.
Sizes: 20, 24, 28, and 32px; no arbitrary values.
Icons never replace visible form labels.

#### 8.2 Marketing symbols

Marketing symbols may be chunkier than UI icons but must use the same silhouettes across sections.

Required symbol themes:

Overview.
Booking/calendar.
Car/status route.
Finance/closing.
Team/permissions.
Inventory.
Customer/loyalty.
Branch/location.
Review/setup.
Privacy.
Video/play.
WhatsApp only through the official/current brand icon asset.

#### 8.3 Prohibition

No mixed outline/fill icon packs.
No generic gear icon as the default symbol for “system.”
No floating feature-icon wall.
No invented product functionality encoded through icons.

### 9. Core control components

#### 9.1 Primary CTA

##### Anatomy

Minimum height: 56px desktop, 52px mobile.
Horizontal padding: 28px desktop, 22px mobile.
Border: 2px solid #03132E.
Radius: 7px.
Background: #01A2FF.
Label: #03132E, 800 weight.
Shadow: 0 5px 0 #03132E.
Icon gap: 10px.

##### States

Hover: translate -1px vertically; shadow increases by 1px; label remains readable.
Pressed: translate 3px; shadow becomes 0 2px 0 #03132E.
Focus-visible: 3px external focus ring with 3px offset; never remove outline without replacement.
Disabled: no shadow movement; visible disabled label; aria-disabled or native disabled state.
Loading: fixed width; spinner plus action text; no layout shift.

#### 9.2 Secondary CTA

White or Cloud surface.
Deep Navy label and border.
S2 shadow.
Same height as the paired primary CTA.
No visual competition with the primary CTA.

#### 9.3 Tertiary action

Text + direction-aware arrow.
Minimum interactive target 44×44px.
Underline or short trail appears on hover/focus.
Arrow direction is explicitly RTL/LTR-aware.

#### 9.4 Language switch

Two clear language labels; current language has both shape and type emphasis.
Not represented by a flag.
Minimum height 44px.
Arabic label remains Arabic; English label remains English.
In compact mode it may become a single language-change action inside the mobile drawer.

#### 9.5 Menu button

48×48px minimum.
2px Deep Navy border.
Open and close states use the same button footprint.
Correct accessible name and aria-expanded state.

### 10. Core content components

#### 10.1 Section eyebrow / label

Height: 40–44px.
Background: Ice/Cloud.
Border: 1–2px Sparkle Blue or Deep Navy according to hierarchy.
Radius: 8px.
Optional S1 hard shadow.
Label 15–17px, weight 800.
One small functional icon maximum.

#### 10.2 Section number

Used only where it clarifies sequence.
Displayed as 01 / 05 or a large single numeral.
Numerals stay LTR internally.
Deep Navy default; Sparkle Blue for active state.
Never used as random decoration.

#### 10.3 Brutalist card families

| Family | Treatment | Used for |
|---|---|---|
| Narrative | White, 2px Navy border, R3, S3 | Problem conclusion, strategy cards |
| Product | White, quiet border, R3, Soft Product shadow | Screenshots and product explanations |
| Utility | White/Cloud, 1px line, R2, S1/S2 | Audience tiles, mini benefits |
| Featured | White, Blue + Navy outline, R3/R4, S4 | Growth pricing only |
| Document | Warm-white/white, 2px Navy, R2/R3, S3 | Setup work order |
| Color Block | Sparkle Blue or Deep Navy, R4/R5 | Trial/final CTA only |

The page must never use one card family everywhere.

#### 10.4 Checklist row

Minimum height: 48px; grows naturally for Arabic wrap.
Check icon in a 24–28px fixed cell.
Text remains live HTML.
Quiet divider between rows.
Final highlight row gets a pale-blue background plus type emphasis, not color alone.

#### 10.5 Step / route node

Desktop strategy node: 136–152px only in the signature blueprint section.
Standard process node: 44–56px.
Active state: maximum scale 1.04.
Completed state: check + label; not color alone.
Route line is a dedicated vector/code layer behind nodes.

#### 10.6 Annotation / hotspot

Annotation sits outside the real screenshot whenever possible.
Connector: 2px Deep Navy or Sparkle Blue with clear endpoint.
Hotspot: 20–24px, with focus-visible and text alternative.
Tooltip/card: maximum width 260px, R2, white, border, S2.
No annotation may imply a feature the screenshot does not prove.

#### 10.7 Responsive video wrapper

Fixed aspect-ratio container with poster image.
2px Navy border, R3, S3.
Central play control at least 56×56px.
No autoplay with sound.
Controls remain keyboard accessible.
Poster cannot contain fake product UI.

### 11. Product proof system

#### 11.1 Screenshot inventory

Before GROUP 03 and GROUP 08, approve dated, real screenshots for:

Overview.
Bookings.
Schedule / Walk-ins.
Car status / operations.
Finance / day closing.
Team / permissions / workforce.
Inventory.
Customers / loyalty / offers.
Branch management if used.
Setup/configuration if used.
Customer mobile booking experience.

Each screenshot record must include:

Product route/screen name.
App language.
Capture date/version.
Demonstrated feature.
Allowed crops.
Sensitive/demo data review.
Sections where it may appear.

#### 11.2 Device/frame designs

##### Browser frame

Code-built, not generated.
R3 outer radius.
2px Navy outline for marketing stage or quiet 1px outline for dense explorer.
Optional 42px browser bar only when it improves recognition.
Screenshot always fills a precisely masked inner viewport.

##### Laptop frame

Use one approved shell style across Hero and Product Explorer.
The screen is a separate live image layer.
Do not bake the screenshot into the 3D render.
Hero may use stronger contact shadow; Explorer remains visually stable.

##### Phone frame

One approved bezel and corner radius.
Customer screenshot remains readable.
Phone stays secondary to the laptop except when the customer story is the active point.

#### 11.3 Crop rule

Full screen when the overall dashboard is the proof.
Intentional crop when a specific feature is the proof.
Never crop away the context needed to understand the claim.
Never enlarge a tiny crop until the UI becomes visually false.
Never translate, redraw, or horizontally flip screenshot content.

#### 11.4 Screenshot transition states

current screen: opacity 1 / translateY(0) / scale(1)
leaving screen: opacity 0 / translateY(-12px) / scale(.995)
entering screen: opacity 0→1 / translateY(12px→0) / scale(.995→1)

Transitions are masks over whole real screenshots. They do not animate fake UI elements inside the screenshot.

### 12. Owner character web asset system

#### 12.1 Audit of supplied files

The supplied set currently contains nine useful Owner pose references plus the logo:

Sitting with phone.
Pointing beside a blank panel.
Standing with phone.
Confident standing pose on a dark background.
Thinking pose.
OK-hand pose.
Arms-crossed pose.
Leaning with phone.
Facepalm pose.

These are useful identity and pose sources, but the JPG files contain baked backgrounds and are not yet production-ready transparent web assets. They also do not replace the required Character Master/turnaround gate.

#### 12.2 Website Owner pose map

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_HERO_RTL | New/edited pose interacting with device stack; no embedded UI | Hero Arabic | Required |
| OWNER_HERO_LTR | Separate direction-aware render, same real hand/watch | Hero English | Required |
| OWNER_PROBLEM | Facepalm or stronger overwhelmed full-body pose | Problem | Supplied source; transparent master needed |
| OWNER_EXPLAIN | Pointing beside an empty structural area | What Is | Supplied source; remove blank panel/background as separate layers |
| OWNER_THINKING | Thinking pose | Who For | Supplied source; transparent master needed |
| OWNER_SETUP | Hand physically interacting with work order | Setup | New pose required |
| OWNER_PRICING | Calm confident supporting pose, not sales-presenter behavior | Pricing | Supplied source or new relaxed variant |
| OWNER_TRIAL | Leaning/reassuring pose | Trial | Supplied source; transparent master needed |
| OWNER_FORM | Seated or phone-ready, attentive rather than decorative | Form | Supplied source can be adapted |
| OWNER_FINAL_RTL | Open confident three-quarter body | Final CTA Arabic | Required |
| OWNER_FINAL_LTR | Separate direction-aware render | Final CTA English | Required |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### 13. 3D world and prop library

#### 13.1 Essential website pack

| Pack | Assets | Primary sections |
|---|---|---|
| Water | Wide splash, compact splash, foam, bubbles, wave | Hero, What Is, Final CTA, Footer |
| Car | Simplified side car RTL, side car LTR, compact front/3-quarter car | Strategy, Operation Flow |
| Wash world | Single wash bay, branch module, multi-branch extension | Strategy |
| Chaos | Paper cluster, clipboard, call slip, supply/shampoo bottle, alert scribble | Problem |
| Operations | Calendar, work-order tag, route marker, assignee marker | Strategy, Flow, Setup |
| Finance | Receipt, cash drawer, calculator, balance/closing symbol | Strategy/Product annotations |
| Team | Owner/manager/cashier/worker role markers | Strategy, Setup |
| Customer | Customer marker, car-history marker, loyalty loop, offer/reward token | Strategy, Product Explorer |
| Setup | Work-order stamp, review check, configuration label set | Setup |

#### 13.2 Prop design rules

Premium soft stylized 3D.
Two to four colors per asset.
Chunky, readable silhouette.
Less detail than the Owner.
Same light direction and contact-shadow logic as the selected Owner scene.
No text unless it is a tiny non-semantic mark; all meaningful labels stay HTML.
No photoreal car badges, hyper-gloss reflections, or busy wash locations.

#### 13.3 Scene construction rule

Generate characters and complex props as separate transparent assets wherever possible. Do not generate one flat 5000px scene if the section needs responsive recomposition or scroll storytelling.

### 14. Component specifications by feature

#### 14.1 Header

Desktop height: 104px reference, allowed range 96–112px.
Grid: logo / centered nav / actions.
Logo target width: 240–280px only if the official lockup supports that scale; verify actual clear space.
Navigation gap: 40–48px.
Sticky state: opaque or 94–97% white, quiet bottom line; blur may be subtle but never glass-like.
Mobile height: 72–80px; logo + menu; primary CTA remains reachable through drawer or compact action.

#### 14.2 Mobile drawer

Full-height or substantial side sheet, not a cramped dropdown.
Direction-aware entrance.
Large nav rows, clear active state, language control, and CTA.
Focus trap, Escape close, body-scroll lock, and restored focus.

#### 14.3 Strategy card

One icon/symbol, number, title, principle, and “Inside Sparkle Auto” proof line.
Active card full opacity; inactive minimum 0.55, not unreadable 0.4 if text remains important.
Blueprint nodes and lines stay behind content.
Mobile converts to vertical numbered sequence.

#### 14.4 Pricing card

Price appears before long feature list.
Same anatomical order across all three plans.
Growth plan alone may use Featured treatment because its recommendation is approved.
Feature rows use check + text, not color alone.
CTA remains within each card’s final viewport without awkward equal-height padding on mobile.
Expansion price cannot be invented; reserve a visibly designed price slot for approved content.

#### 14.5 Trial panel

Compact panel, R4, 2px blue/navy outline.
Primary content + mini Growth reference + supporting Owner.
Never visually larger or louder than Pricing.
Bottom points may use 2×2 mobile arrangement or vertical sequence.

#### 14.6 FAQ item

Real <button> header.
Minimum collapsed height 60px; Arabic wrap may increase it.
Number fixed cell, question flexible, plus/minus fixed cell.
Open answer on pale-blue surface with body text and adequate padding.
Transition 180–250ms; instant in reduced motion.
Only one default-open item unless UX review approves otherwise.

#### 14.7 Form field

Label always visible above the control.
Input minimum height 58–60px.
Border 2px Navy at default or quiet Navy with clear focus escalation.
Focus: Blue/Navy ring + border + label emphasis.
Error: icon + Arabic/English error text + error border.
Phone and numeric entry remain LTR inside Arabic layout where appropriate.
Helper/error area reserves enough space to avoid large layout jumps.

#### 14.8 Choice chip

Minimum target 44px high.
R2, not exaggerated pill.
Default white/Cloud with Navy border.
Selected state uses Blue surface or border plus check icon and text-weight change.
Chips wrap naturally; never truncate core problem labels.

#### 14.9 Form success/failure

Success: functional green check, clear confirmation headline, truthful next step.
Failure: error icon, explanation, retry action, and preserved user entries.
No fake response-time or contact-channel promise.

#### 14.10 Footer

Deep Navy close with an approved SVG wave separator.
Official logo in a verified white/color variant.
Navigation, legal links, language switch, and CTA only when real.
Social icons only when approved destination links exist.
Dynamic year.
Mobile columns stack; no compressed horizontal nav row.

### 15. Section-by-section visual asset manifest

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 02 Header | Header, nav, language switch, CTA, drawer | None by default | Official logo | Drawer motion/layout RTL/LTR |
| 03 Hero | Split grid, buttons, device masks, layering | Owner hero pose, wide splash, small spark | Overview screenshot, Bookings/customer screenshot, logo | Owner RTL/LTR; separate composition manifests |
| 04 Problem | Three-zone grid, six HTML questions, conclusion | Overwhelmed Owner, paper cluster, supply prop, scribble | None | Chaos/trail direction RTL/LTR |
| 05 What Is | Product pair cards, pillar blocks, device frames | Explaining Owner, bubble/splash accent | Relevant owner dashboard + customer screen | Composition RTL/LTR; no screenshot flip |
| 06 Who For | Checklist, qualification card, audience tiles | Thinking Owner; optional audience symbols | None | Layout recomposition only unless artwork directional |
| 07 Strategy | Sticky canvas, five cards, nodes, progress, route masks, video | Car, wash bay, branches, role markers, customer loop, blueprint edge art | Approved strategy video/poster if available | Blueprint/car/route RTL/LTR |
| 08 Product Explorer | Sticky stage, story rail, laptop/phone frames, hotspots, video | Minimal surrounding splash/technical accents only | Seven real product screenshots + customer screen + video | Rail/annotation/reveal direction; screens never flip |
| 09 Operation Flow | Route, eight step cards, conclusion | Simplified car, endpoint spark/location prop | None | Car and route RTL/LTR |
| 10 Setup | Sticky work order, five steps, progress, CTA | Setup-interaction Owner, stamp/check assets, optional small car/work-order prop | Real setup/configuration screens | Work order/check placement RTL/LTR |
| 11 Pricing | Three pricing cards, badge, price, feature lists, CTA | Supporting confident Owner only | Approved plan copy/prices | Owner placement; plan order remains commercially correct |
| 12 Trial | Compact trial panel, mini plan reference, point strip | Reassuring/leaning Owner | Approved trial copy | Composition RTL/LTR |
| 13 FAQ | Intro, CTA card, semantic accordion | None by default; one quiet atmosphere asset maximum | None | Column order and controls RTL/LTR |
| 14 Form | Field grid, chips, states, success/failure | Supporting Owner if it improves balance | Privacy copy; real submission behavior | Field grid/Owner placement RTL/LTR |
| 15 Final CTA | Blue panel, copy, actions, brand lockup | Owner final pose, large wave/splash | Official logo; real WhatsApp link/icon | Owner/wave RTL/LTR |
| 16 Footer | Footer structure, links, CTA, dynamic year | Wave SVG only | Official logo, approved legal/social links | Column/link order RTL/LTR |

### 16. Section composition recipes

#### 16.1 Hero

##### Desktop reference

Copy 40%; product stage 60%.
Laptop is the product anchor.
Phone overlaps the laptop without hiding important UI.
Owner overlaps only the external device shell, never the screenshot’s proof area.
Water asset sits behind all devices.

##### Mobile

Eyebrow.
Headline.
Support copy.
Primary CTA.
Secondary CTA.
Product visual.
Microcopy/tagline.

Avoid desktop-style three-object overlap. The Owner may sit beneath or behind the device stage only if text and UI remain clear.

#### 16.2 Problem

Desktop: copy / Owner chaos / question flow.
Questions remain HTML speech bubbles.
Only papers and physical chaos props are images.
Spark trail performs one action: gathers scattered questions into one organized path.
Mobile: headline → Owner → vertical questions → conclusion.

#### 16.3 What Is / Who For pair

Alternate visual weight to avoid repeated split layouts.
What Is prioritizes product pair cards.
Who For prioritizes qualification copy.
Owner scale is supporting, never equal to the Hero.

#### 16.4 Strategy

Sticky visual stage may use approximately 450vh only after prototype testing.
Five state ranges; no hard snap.
Each state adds one meaningful part of the blueprint.
Final state shows one connected operating logic.
Mobile uses five vertical cards connected by one route.

#### 16.5 Product Explorer

Story rail 22%, stable product stage 58%, annotation/customer proof 20% as a reference ratio.
Laptop remains nearly stationary.
Only screenshot, active story, question, and annotation change.
Screens preload one state ahead.
Mobile uses stacked product stories or a short stable device stage, never a long desktop pin.

#### 16.6 Operation Flow

Desktop uses a horizontal route with alternating cards.
Arabic starts from the natural RTL side; English starts LTR.
Full information is visible without waiting for car animation.
Mobile becomes one vertical route with eight numbered steps.

#### 16.7 Setup

Copy 38%, work order 43%, Owner 19% as a reference starting point.
Work order stays stable while five steps complete.
Real setup screenshots appear only at the relevant stage.
Mobile becomes one vertical document; no long pin.

#### 16.8 Pricing / Trial / FAQ / Form

Pricing is the commercial peak.
Trial is a compact breathing panel after Pricing.
FAQ reduces energy and maximizes scan speed.
Form becomes the final functional conversion peak.
Their card anatomy must differ so the page does not become one repeated grid.

#### 16.9 Final CTA / Footer

Final CTA is the strongest blue moment.
Footer is the calm Deep Navy close.
Do not combine them into one visually undifferentiated block.

### 17. Arabic / English composition system

#### 17.1 Required states

Every section must be approved in eight states:

Arabic desktop.
English desktop.
Arabic tablet.
English tablet.
Arabic large mobile.
English large mobile.
Arabic narrow mobile.
English narrow mobile.

#### 17.2 Mirror-safe elements

May mirror/reverse through layout logic:

Grid columns.
Text alignment.
Simple route SVG with no text or lighting asymmetry.
Arrow direction.
Progress flow.
Drawer entrance.

#### 17.3 Never mirror blindly

Real product screenshots.
Official logo/wordmark.
Owner render when watch/acting would reverse.
Text-bearing imagery.
Device frame containing a real screen.
Car/scene asset with directional light or asymmetric detail.

#### 17.4 Composition manifests

For Hero, Strategy, Operation Flow, Setup, and Final CTA, maintain separate lightweight layout manifests for Arabic and English. These control placement and crop while referencing the same approved source assets wherever possible.

### 18. Motion system

#### 18.1 Normal interaction timing

| Motion | Duration | Distance | Character |
|---|---|---|---|
| Button press | 120–180ms | 2–3px | Physical |
| Hover/focus nudge | 160–220ms | 1–4px | Restrained |
| Card/label entrance | 300–500ms | 8–20px | Clear, no bounce |
| Accordion | 180–250ms | Height/opacity | Functional |
| Screenshot change | 500–800ms | 10–20px | Stable/weighted |
| Premium settle | 700–1200ms tied to progress | 10–40px | Heavy/deliberate |

Recommended primary easing: [0.22, 1, 0.36, 1].

#### 18.2 Motion grammar

Spark trail links or resolves.
Blueprint line reveals structure.
Check/stamp confirms one completed setup stage.
Device remains stable while evidence changes.
Owner does not float continuously.
No global fadeInUp + spring preset.

#### 18.3 Premium stories

Strategy: blueprint is built.
Product Explorer: real screens are explored.
Setup: professional work order is completed.

They share weight and restraint but use different metaphors.

#### 18.4 Reduced motion

Remove long pinning and parallax.
Render all story states as normal document-flow blocks.
Keep every copy block and screenshot.
Accordion may open instantly.
Product screenshots do not depend on animated transitions to become available.

### 19. Responsive rules

#### 19.1 Desktop

Preserve the supplied 16:9 composition hierarchy, not a fixed viewport.
Use large product proof and intentional overlap.
Keep decorative overflow inside safe clipping boundaries.

#### 19.2 Tablet

Reduce Owner scale and decorative layers first.
Reduce overlap second.
Only then convert multi-column compositions.
Product proof must remain readable.

#### 19.3 Mobile

Single-column by default.
No horizontal page scroll.
No three-card pricing squeeze.
No horizontal eight-step route.
No long desktop sticky story.
Buttons nearly full width where helpful.
Cards use natural height; no artificial equal-height system.
Main screenshot receives a dedicated readable block.

#### 19.4 Asset delivery by viewport

Desktop transparent character: up to 1600px long edge.
Tablet: up to 960px.
Mobile: up to 640px.
Use picture/srcset and conditional RTL/LTR sources.
Mobile must not download both directional hero assets.

### 20. Accessibility specification

Mandatory before approval:

Essential text combinations pass WCAG AA.
Visible keyboard focus on every control.
Minimum interactive target 44×44px.
Semantic landmarks and heading order.
Language and direction attributes update correctly.
FAQ headers are buttons with aria-expanded.
Mobile drawer handles focus correctly.
Form labels are persistent; errors are announced and described.
Informative visual assets receive meaningful alternatives.
Decorative assets use empty alternative text and do not clutter accessibility APIs.
All Premium Scroll content exists in accessible DOM order.
No meaning depends only on color, motion, hover, or scroll timing.
Videos have usable controls and captions/transcript when content requires them.

### 21. Performance and production budgets

#### 21.1 Experience targets

Target LCP: under 2.5s on realistic mobile conditions.
Target CLS: under 0.1.
Target INP: under 200ms.
Reserve image dimensions to prevent layout shift.

#### 21.2 Asset budgets

These are release budgets, not source-file limits:

Hero critical image payload: target ≤650KB desktop and ≤400KB mobile.
Individual decorative WebP/AVIF: target ≤120KB when practical.
Individual Owner responsive export: target ≤260KB desktop and ≤140KB mobile.
Product screenshot: target ≤250KB while preserving real UI readability.
Do not preload every Product Explorer screenshot; preload current and next state intelligently.
Videos use poster-first loading and no unnecessary autoplay.

#### 21.3 Format rules

Source master: transparent PNG or native layered source.
Delivery: AVIF/WebP with PNG fallback where transparency/quality requires it.
Vector: optimized SVG with viewBox and no embedded raster unless documented.
sRGB only.
No visible halo around hair, shoes, or semi-transparent splash edges.

### 22. Naming and folder structure

01_FOUNDATIONS
  colors
  typography
  grid-spacing
  border-shadow-radius
02_COMPONENTS
  controls
  cards
  product-frames
  pricing
  faq
  form
03_CHARACTER
  master
  website-poses
  directional-variants
  shadows-mattes
04_PROPS
  water
  cars
  wash-world
  operations
  finance
  customer
  setup
05_PRODUCT_PROOF
  overview
  bookings
  operations
  finance
  team
  inventory
  customers
  setup
06_MOTION
  normal
  strategy
  explorer
  setup
  reduced-motion
07_SECTIONS
  02_header
  03_hero
  ...
  16_footer
08_EXPORTS
09_MANIFESTS_APPROVALS

#### 22.1 File naming

SA_WEB_[SECTION]_[ASSET]_[LANG-DIR]_[VIEWPORT]_[VERSION].[ext]

Examples:

SA_WEB_HERO_OWNER_AR-RTL_DESKTOP_V01.webp
SA_WEB_HERO_SPLASH_NEUTRAL_DESKTOP_V01.svg
SA_WEB_FLOW_CAR_EN-LTR_MOBILE_V01.webp
SA_WEB_PRODUCT_OVERVIEW_AR_2026-09_V01.webp
SA_WEB_SETUP_STAMP_NEUTRAL_V01.svg

#### 22.2 Asset manifest fields

Asset ID.
Section.
Production class.
Source/reference.
Arabic/English applicability.
RTL/LTR requirement.
Desktop/tablet/mobile variants.
Source dimensions.
Export dimensions/format/weight.
Alt-text role.
Product version/date if screenshot.
Status: requested / draft / approved / implemented / deprecated.
Approver and approval date.
Known exceptions.

### 23. Build and approval workflow

#### 23.1 Before each group

Receive and inspect the section reference image.
Lock approved copy and commercial facts.
Classify every element by production class.
Map real Product Screens.
Identify direction-sensitive assets.
Create desktop Arabic and English compositions.
Create tablet and mobile recompositions.
Generate/approve custom visual assets.
Approve the static visual design.
Define motion and reduced-motion states.
Build only the approved group.
Run reference, responsive, accessibility, product-truth, and performance QA.

#### 23.2 Section visual-design approval packet

Each section must include:

Reference image.
Annotated reverse-engineering sheet.
Asset classification map.
Arabic desktop design.
English desktop design.
Arabic mobile design.
English mobile design.
Tablet behavior note.
Motion storyboard.
Reduced-motion design.
Asset list with filenames and status.
Product screenshot proof/version where applicable.
Reference comparison overlay or side-by-side review.

#### 23.3 No-build blockers

Do not build a section if any of the following is unresolved:

Missing section reference image.
Unapproved final copy.
Missing real Product Screenshot.
Missing directional asset decision.
Missing mobile recomposition.
Missing component state.
Missing accessibility treatment.
Unsupported commercial claim.
Character identity drift.
Visual asset is still a JPG with a baked background when transparency is required.

### 24. Final design QA

#### 24.1 One-second test

At a glance, the user should understand the section’s main problem, promise, or action.

#### 24.2 Silhouette test

Owner + prop relationship remains clear without facial detail or copy.

#### 24.3 Brand-without-logo test

The combination of Owner, palette, tactile structure, Spark trail, and product framing still feels unmistakably Sparkle Auto.

#### 24.4 200px test

The focal point and visual action survive at thumbnail size. Tiny UI detail is not used as the only proof.

#### 24.5 Product-truth test

Every visible product claim maps to a real, dated Sparkle Auto screen or approved behavior.

#### 24.6 Bilingual test

Arabic and English preserve the same hierarchy and meaning without forced identical wrapping or blind mirroring.

#### 24.7 Responsive test

Mobile is a recomposition, not a crop or shrunken desktop poster.

#### 24.8 Motion test

Every moving element can answer: “What information or relationship does this motion explain?”

#### 24.9 Contrast and keyboard test

All essential content remains readable and operable without mouse, hover, or animation.

### 25. Definition of Ready for GROUP 02

GROUP 02 — HEADER may start only when:

All twelve GROUP 01 visual boards are approved.
Primary CTA contrast correction is approved.
Arabic/English typography sheet is approved.
Exact button/card/form states are locked.
Official logo variants are available.
Owner website pose list is approved.
Transparent Owner production workflow is approved.
Motif/background asset set is approved.
Product Screenshot manifest structure is ready.
RTL/LTR composition rules are locked.
Responsive breakpoints and asset budgets are locked.
Motion and reduced-motion grammar are locked.
The full section asset map is signed off.

### 26. Immediate production order

#### Sprint 01 — Foundations

B01 Creative North Star.
B02 Color and contrast matrix.
B03 Arabic/English typography test.
B04 grid, spacing, radii, borders, and shadows.

#### Sprint 02 — UI kit

B05 control states.
B06 content components.
B07 Product Proof system.

#### Sprint 03 — Asset world

Lock Character Master comparison sheet.
Prepare transparent website Owner poses.
Produce car, wash-world, operations, water, and setup prop packs.
Produce SVG motif/background pack.

#### Sprint 04 — Responsive and motion

B10 eight-state bilingual/responsive board.
B11 normal + premium + reduced-motion prototypes.
B12 signed section asset map.

#### Sprint 05 — Section execution

Proceed with the original order from GROUP 02 through GROUP 16, one approved section at a time.

### 27. Final directive to Codex/design team

Build the structural design system first. Treat every complex editorial visual as an approved asset, every product view as a real Sparkle Auto screenshot, and every text block as accessible HTML. Lock exact components, character poses, motifs, responsive compositions, and motion states inside GROUP 01 before the Header begins. Arabic RTL and English LTR are two intentionally composed versions of the same experience. Mobile is a deliberate recomposition. The page must remain light, confident, blue, tactile, and unmistakably Sparkle Auto—without fake UI, repeated card grids, random decoration, or uncontrolled animation.

## V3 GROUP 01 CALIBRATION AND FINAL LOCK GATE

The following sequence is mandatory before GROUP 02:

```text
Original GROUP 00 verified
  → B01–B04 foundations
  → B05–B07 controls, components, and Product Proof
  → B08–B09 Owner / 3D World / motifs
  → B10 bilingual-responsive boards
  → B11 normal, premium, and reduced-motion prototype
  → B12 signed section asset map
  → /styleguide implementation and automated tests
  → Hero product-heavy calibration prototype
  → Problem editorial/character-heavy calibration prototype
  → resolve the V3 Conflict Ledger
  → lock exact tokens, manifests, and component states
  → creative overlay approval
  → GROUP 01 FINAL APPROVAL
  → GROUP 02
```

### Final GROUP 01 outputs added by V3

- `design-source/01_FOUNDATIONS/B01-creative-north-star.*`
- `design-source/01_FOUNDATIONS/B02-color-contrast.*`
- `design-source/01_FOUNDATIONS/B03-typography-ar-en.*`
- `design-source/01_FOUNDATIONS/B04-structure-depth.*`
- `design-source/02_COMPONENTS/B05-controls.*`
- `design-source/02_COMPONENTS/B06-content-components.*`
- `design-source/05_PRODUCT_PROOF/B07-product-proof.*`
- `design-source/03_CHARACTER/B08-owner-3d-world.*`
- `design-source/04_PROPS/B09-motifs-backgrounds.*`
- `design-source/07_SECTIONS/B10-responsive-bilingual.*`
- `design-source/06_MOTION/B11-motion-prototype.*`
- `design-source/09_MANIFESTS_APPROVALS/B12-section-asset-map.*`
- `docs/reference-diff/calibration-hero.json`
- `docs/reference-diff/calibration-problem.json`
- `docs/creative-review/group-01-overlay-review.md`
- One canonical locked `tokens.css`.
- One unified assets manifest.
- One unified Owner manifest/contact sheet.
- One approved icon/SVG motif family.
- One approved Product Screenshot inventory with dates and allowed crops.
- One written V3 Conflict Ledger marked resolved.

### Final GROUP 01 rule

> GROUP 02 must not start while any B01–B12 board, original Group 01 gate item, calibration prototype, or conflict-ledger decision remains unapproved.

---

# GROUP 02 — HEADER

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 01 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#site-header` · **الخلفية:** `--white` · **Sticky:** ✅

---

### Reference Image Rule

Codex يحاول مطابقة: Header composition · Logo scale · Navigation spacing · CTA placement · Header height · Whitespace · Border/shadow feeling · Overall proportions.

أي visual artwork مخصص في الـReference يحتاج Asset يتم إنتاجه بـChatGPT Image — لكن **الـHeader نفسه يفضل Functional وخفيف**.

---

### REFERENCE DESIGN REVERSE-ENGINEERING — HEADER

الـHeader نفسه خفيف جدًا ومش بيحاول يبقى Hero. خلفية: White.

**في الـEnglish Reference Composition:**

على الشمال: Sparkle Auto logo — حجمه واضح لكن مش ضخم. بعده مساحة كبيرة قبل الـNavigation.

في النص تقريبًا: `System · How It Works · Setup · Pricing · FAQ`
الـNavigation: Horizontal · Medium/Bold · Deep Navy.

يمين الـNavigation: `EN | AR` — بعده الـPrimary CTA: *Book an Operations Review* — وفي الآخر Hamburger icon.

في الصورة كان فيه pale-blue water decoration تحت الـHeader لأن الصورة نفسها Canvas مستقل.
**في الموقع الحقيقي: ما تحطش splash ضخم جوه الـHeader.**

#### Reference Measurements — 🔴 اتحولت لقيم مفردة

| البند | v1.0 (range) | **v2.0** |
|---|---|---|
| Header height | 96–112px | **104px** (`--header-h`) — mobile **68px** |
| Logo width | 240–280px | **256px** — mobile **176px** |
| Navigation gap | 38–50px | **44px** |
| CTA | ~250×58px | **auto × 56px** (`min-height` من الـtokens) |

> ملاحظة: ارتفاع الـCTA اتوحّد على **56px** زي كل الأزرار — الـ58 في الـReference فرق بصري صفر ومش يستاهل token جديد.

#### Codex Structure

```html
<header id="site-header">
  <a class="skip-link" href="#hero">تخطَّ إلى المحتوى</a>
  <a class="logo" href="/[lang]">…</a>
  <nav aria-label="التنقل الرئيسي">…</nav>
  <div class="lang-switch">…</div>
  <a class="btn btn--primary" data-cta="cta-header">…</a>
  <button class="menu-btn" aria-expanded="false" aria-controls="mobile-drawer">…</button>
</header>
```

```css
@media (min-width: 1024px) {
  .header-inner {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: var(--sp-6);
  }
  .menu-btn { display: none; }
}
```

الـ`nav` وسط فعليًا (العمود `1fr`).

#### Sticky Behavior

```css
#site-header {
  position: sticky;
  inset-block-start: 0;
  z-index: var(--z-header);
  background: var(--white);
  block-size: var(--header-h);
}
#site-header[data-scrolled="true"] {
  background: rgb(255 255 255 / .96);
  border-block-end: var(--bw-hair) solid var(--soft-blue);
}
```

* بعد Scroll: خلفية بيضا **96%** + حد سفلي خفيف.
* **backdrop-blur اختياري وبقيمة صغيرة جدًا (`4px`) — وممنوع يتحول Glassmorphism.**
* **🔴 v2.0:** الـ`data-scrolled` بيتحسب بـIntersectionObserver على sentinel، **مش** scroll listener.
* **🔴 v2.0:** ممنوع `overflow` على الـheader أو أي جد ليه (قانون G5).

#### Arabic / RTL

* Logo / navigation / CTA يتم إعادة توزيعهم بما يناسب RTL — عبر logical properties، من غير stylesheet تاني.
* ترتيب Links يطابق الـArabic Approved Navigation.
* Language switch يفضل واضح.
* **ما يتمش عمل CSS mirror أعمى** لو النتيجة تخلي الـCTA أو Logo في Position أضعف.

#### English / LTR

يحافظ قدر الإمكان على Reference Header composition.

#### Mobile

* Logo + Menu.
* الـCTA يفضل reachable.
* الـMenu يتحول **Drawer** — مش Dropdown ضيق.
* الـArabic Drawer: RTL intentionally designed.
* الـEnglish Drawer: LTR intentionally designed.

**🔴 مواصفات الـDrawer في v2.0:**

* `role="dialog"` + `aria-modal="true"` + `aria-label`.
* **Focus trap** كامل.
* `Esc` بيقفل + الفوكس بيرجع لزرار الفتح.
* Scroll lock بـ`position: fixed` على الـbody + حفظ `scrollY` — **مش** `overflow: hidden` (قانون G5).
* الـCTA الأساسي جوه الـDrawer + في الآخر Language switch.
* حركة الفتح: `--dur-normal` slide من الـinline-start حسب الاتجاه.
* Touch targets ≥ 44px.

---

### 2.1 Business Goal

تسهيل Navigation وتوجيه المستخدم لأهم أجزاء الصفحة بدون تشتيته.

#### Navigation (+ الـanchors من §00.8)

| النص | الهدف |
|---|---|
| السيستم | `#what-is-sparkle` |
| طريقة الشغل | `#operation-flow` |
| التجهيز | `#setup` |
| الأسعار | `#pricing` |
| الأسئلة الشائعة | `#faq` |

#### Primary CTA

`cta-header` → **احجز مراجعة تشغيل** → `#application-form?source=header`

#### Design Role

الـHeader لازم يكون: بسيط · واضح · خفيف بصريًا · متناسق مع Hero · الـCTA ظاهر بدون ما الـHeader يتحول Banner.

#### Desktop

Logo · Navigation · Primary CTA · Language control.

#### Mobile

Logo · Menu control · Primary CTA reachable · Menu Arabic RTL intentionally designed.

---

### Header Build Rules

* يستخدم GROUP 01 Approved Base.
* لا يتم تصميم Hero.
* لا يتم إدخال Premium Scroll.
* لا يتم تغيير Navigation Copy.
* لا يتم تغيير Primary CTA.
* لا يتم إضافة Links غير معتمدة.
* لا يتم إدخال Visual Language جديدة.
* Reference Image توجه الشكل العام فقط داخل القواعد المعتمدة.

---

### Header Motion

**مسموح:** CTA physical press · Short mobile menu transition · Subtle underline/active state · Lightweight sticky-state transition.

**ممنوع:** Premium Scroll · Parallax · Cinematic entrance · Continuous floating · Heavy storytelling motion.

---

### Header Accessibility

Semantic `<header>` · Semantic `<nav aria-label>` · Keyboard accessible links · Visible focus · Accessible menu control · Correct `aria-expanded` · Mobile touch targets ≥44px · No color-only state.

**🔴 v2.0:** Skip link أول عنصر · `aria-current="true"` على الرابط النشط + خط سفلي (مش لون لوحده) · الـLanguage switch روابط `hreflang` حقيقية.

---

### Header QA

```
☐ Reference composition reviewed
☐ Navigation واضح
☐ CTA ظاهر
☐ Logo واضح
☐ Desktop composition clean
☐ Header height = 104px (68 mobile)
☐ Logo width = 256px (176 mobile)
☐ Navigation gap = 44px
☐ Mobile Menu usable
☐ Primary CTA reachable on mobile
☐ RTL / LTR صحيح
☐ Arabic layout visually balanced
☐ English layout visually balanced
☐ Keyboard interaction صحيح
☐ Focus states واضحة
☐ Navigation destinations صحيحة (جدول الـanchors)
☐ scroll-margin-top مطبّق على كل الأقسام
☐ Header متناسق مع الـApproved Base
☐ الـHeader لا ينافس الـHero بصريًا
☐ No unrelated visual language introduced
☐ No Premium Scroll introduced
☐ No fake functionality
☐ No unapproved copy changes
☐ Responsive behavior approved
☐ Reduced-motion behavior approved
☐ No custom artwork replaced by code approximation
☐ No giant splash inside functional Header
☐ Sticky behavior does not become glassmorphism
☐ 🔴 مفيش overflow على الـheader أو أجداده
☐ 🔴 Drawer: focus trap + Esc + scroll lock بـposition:fixed
☐ 🔴 data-scrolled عبر IntersectionObserver مش scroll listener
☐ 🔴 npm run verify بيعدي
```

### Acceptance Gate

```
☐ Navigation واضح
☐ CTA ظاهر
☐ Mobile Menu usable
☐ RTL / LTR صحيح
☐ الـHeader لا ينافس الـHero بصريًا
```

### FINAL GROUP 02 RULE

> Build the Header only. Do not start the Hero. Do not redesign GROUP 01. Do not introduce a new design system. Do not add Premium Scroll. Do not change approved copy.
> **BASE APPROVED → HEADER DESIGNED → HEADER BUILT → HEADER QA → APPROVE GROUP 02 → GROUP 03.**

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Header: navigation and conversion remain clear; no competing decorative metaphor.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 02 Header | Header, nav, language switch, CTA, drawer | None by default | Official logo | Drawer motion/layout RTL/LTR |

### Imported component specifications

#### 14.1 Header

Desktop height: 104px reference, allowed range 96–112px.
Grid: logo / centered nav / actions.
Logo target width: 240–280px only if the official lockup supports that scale; verify actual clear space.
Navigation gap: 40–48px.
Sticky state: opaque or 94–97% white, quiet bottom line; blur may be subtle but never glass-like.
Mobile height: 72–80px; logo + menu; primary CTA remains reachable through drawer or compact action.

#### 14.2 Mobile drawer

Full-height or substantial side sheet, not a cramped dropdown.
Direction-aware entrance.
Large nav rows, clear active state, language control, and CTA.
Focus trap, Escape close, body-scroll lock, and restored focus.

#### 9.4 Language switch

Two clear language labels; current language has both shape and type emphasis.
Not represented by a flag.
Minimum height 44px.
Arabic label remains Arabic; English label remains English.
In compact mode it may become a single language-change action inside the mobile drawer.

#### 9.5 Menu button

48×48px minimum.
2px Deep Navy border.
Open and close states use the same button footprint.
Correct accessible name and aria-expanded state.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 03 — HERO

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 02 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#hero` · **الخلفية:** `--surface-cloud` · **Premium Scroll:** ❌

---

### Reference Image Rule

الصورة مرجع أساسي لتكوين الـHero. Codex يطابق بأقصى درجة ممكنة: Headline position · Product-device position · Laptop scale · Mobile scale · CTA position · Background composition · Whitespace · Decorative placement · Overall visual balance.

أي Custom Visual Artwork → ChatGPT Image. لكن:

* **Laptop screen = Real Sparkle Auto Overview** (`screen-overview-desktop`)
* **Mobile screen = Real Sparkle Auto Bookings** (`screen-bookings-mobile`)

**ممنوع توليد Product UI بـChatGPT Image.**

---

### REFERENCE DESIGN REVERSE-ENGINEERING — HERO

دي أهم صورة في المجموعة كلها.

#### Composition

Split Layout غير متمركز، فيه asymmetry واضحة:

* **Left ≈ 41%** — Copy + CTA
* **Right ≈ 59%** — Laptop + Mobile + Owner

---

#### الجزء الشمال

**Badge** — شكل: خلفية pale blue · حد أزرق · navy hard-shadow صغير · height **44px**.

* الـReference English: *Complete Management System for Car Washes*
* **النسخة النهائية العربية:** «نظام إدارة متكامل لمغاسل السيارات»

**Headline** ضخمة.

* الـReference English: *You don't have to / stay at the wash to / stay in control.* — آخر جزء بلون أزرق.
* المواصفات: **72px** (`--fs-display`) · `font-weight: 900` · `line-height: 1.28` عربي / `1.00` إنجليزي · `max-inline-size: 570px`.
* **🔴 v2.0:** الجزء الأزرق يستخدم `--blue-text: #0077CC` — **مش** `--sparkle-blue` (فاشل contrast).
* **النسخة النهائية العربية:** «مش لازم تفضل في المغسلة عشان تكون مسيطر عليها.»
* الـArabic line breaks تتظبط بصريًا بشكل مستقل — بـ`text-wrap: balance` مش `<br>`.

**Description** — 4–5 سطور · `--fs-body-lg` · `--ink-muted`.

**CTA row:**

* Primary — `cta-hero-primary` → «احجز مراجعة تشغيل لفروعك»
* Secondary — `cta-hero-secondary` → «شوف السيستم وهو شغال ←» · White + Navy border + hard shadow أصغر (`--sh-hard-1`)

**Microcopy** مع Shield icon صغيرة.

---

#### الجزء اليمين — الـStage

ده أهم جزء بصري. **بيتبني بـ`PROPORTIONAL STAGE PATTERN` (G4) وبـ`LAYERED SCENE RULE` (G3).**

* اللابتوب في المنتصف يمين — كبير جدًا.
* خلفه: Splash مائي Pale Blue.
* الـOwner واقف على أقصى اليمين ومتداخل مع اللابتوب، إيده مرتكزة فوقه.
* الموبايل واقف قدام اللابتوب ناحية اليمين.

#### ترتيب الـz-index

```
1. Background water graphic   → --z-art-bg   (0)
2. Laptop                     → --z-device   (2)
3. Phone                      → --z-phone    (3)
4. Owner                      → --z-owner    (4)
5. Small spark / sticker      → --z-sticker  (5)
```

**مش:** Owner → Laptop فوقه → Phone فوق وشه.

#### Product Truth

* Laptop: `screen-overview-desktop`
* Phone: `screen-bookings-mobile`

---

#### Hero Stage — الكود المرجعي (v2.0 — نسب بالكامل)

```css
.hero-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.3fr;   /* ≈ 41% / 59% */
  align-items: center;
  gap: var(--sp-12);
}

.hero-stage {
  position: relative;
  container-type: inline-size;
  aspect-ratio: 1340 / 1000;            /* بدل min-height: 650px */
  inline-size: 100%;
}
.hero-stage > * { position: absolute; }

.layer--splash { inset: 0;                    z-index: var(--z-art-bg); }
.layer--laptop { inset-inline-start: 0;   inset-block-end: 7%;   inline-size: 72%;  z-index: var(--z-device); }
.layer--phone  { inset-inline-start: 62%; inset-block-end: 4.5%; inline-size: 18%;  z-index: var(--z-phone);  }
.layer--owner  { inset-inline-end: -1%;   inset-block-end: 0;    block-size: 95%;   z-index: var(--z-owner);  }
.layer--spark  { inset-inline-start: 30%; inset-block-start: 8%; inline-size: 6%;   z-index: var(--z-sticker);}
```

> **🔴 التعديل الجوهري:** v1.0 كانت `left/bottom` بالـpx مع `min-height` ثابت — ده مظبوط على viewport واحد وبيتكسر على 1280/1440.
> v2.0 كله نِسب داخل stage بنسبة أبعاد ثابتة → **التكوين محفوظ من 1024 لـ1920 تلقائيًا** بدون media queries.

---

#### أسفل الـHero — SLOT-01 و SLOT-02

في الـReference فيه:

* **mini benefit strip:** Smart Bookings / Live Car Status / Team Management / Clear Reports
* **Card أصغر:** *Built for car wash owners in Egypt*

**القرار في v2.0 (من §0.6):**

| Slot | القرار | النص العربي المعتمد |
|---|---|---|
| SLOT-01 — benefit strip | ✅ **مُعتمد** | حجوزات منظمة · حالة كل عربية · إدارة الفريق · تقارير واضحة |
| SLOT-02 — كارت «Built for…» | ❌ **يُحذف** | — (الـHero فيه Product Visual Copy بالفعل) |

الـReference يحتفظ بـ: Placement rhythm · Whitespace rhythm · Visual density — مش بالضرورة الـwording.

---

### HERO BILINGUAL COMPOSITION RULE — CRITICAL

#### Arabic / RTL

* Product visual على اليمين، Copy على الشمال — أو التكوين الأنسب حسب الـApproved RTL Reference.
* Owner / Laptop / Mobile composition تستخدم **الطبقات** (G3) مع `inset-inline-*` — يعني نفس الملفات.
* **Product screenshots لا يتم قلبها.**
* Decorative arrows / trails تعكس اتجاهها.

#### English / LTR

Copy left · Product right — أو حسب الـReference المرفقة للإنجليزي.

#### Critical Rule

**ممنوع** استخدام composite PNG واحد ثم قلبه بـ`scaleX(-1)` لو فيه: Screens · UI · Text · Character-specific directional detail.

#### 🔴 كيف v2.0 بتحل ده

بـ`LAYERED SCENE RULE` (G3):

* الـsplash / laptop / phone / owner **طبقات منفصلة**.
* تغيير الاتجاه = `inset-inline-start` بيتقلب لوحده.
* **الـasset الوحيد المحتاج نسختين = `owner-hero-hand-on-laptop-{rtl|ltr}`** — لأن اليد بتلمس اللابتوب فعلًا.
* كل الباقي: **ملف واحد**.

> v1.0 كانت هتطلب "Hero Visual RTL Asset" و "Hero Visual LTR Asset" كاملين. v2.0 محتاجة **render واحد إضافي بس**.

---

### 3.1 Business Goal

من أول شاشة يفهم صاحب المغسلة: Sparkle Auto بيعمل إيه · أهم Outcome · إنه نظام حقيقي · الخطوة اللي بعد كده.

**User Question:** «هو النظام ده هيعمللي إيه؟»

**Primary Message:** Sparkle Auto يخليك تتابع وتدير مغسلتك من غير ما تكون واقف فيها طول الوقت.

---

### Final Copy — العربي المعتمد

#### Eyebrow

> نظام إدارة متكامل لمغاسل السيارات

#### Main Headline (h1 — الوحيد في الصفحة)

> مش لازم تفضل في المغسلة عشان تكون مسيطر عليها.

#### Description

> Sparkle Auto بيجمع تشغيل مغسلتك في مكان واحد: الحجوزات، حالة العربيات، الفريق، المخزون، الإيرادات والعملاء.
>
> بدل المكالمات والتقارير المتفرقة:
> افتح واعرف إيه اللي بيحصل في مغسلتك حتى لو إنت بعيد.

#### Primary CTA

> احجز مراجعة تشغيل لفروعك

#### Secondary CTA

> شوف السيستم وهو شغال

#### Microcopy

> مراجعة قصيرة نفهم فيها طريقة شغلك ونقولك بصراحة هل Sparkle Auto مناسب ليك ولا لأ.

#### Product Visual Copy

> مغسلتك في جيبك.
>
> * الموبايل: الحجوزات الحقيقية.
> * اللابتوب: الـOverview الحقيقي.

#### SLOT-01 — Benefit strip (جديد v2.0)

> حجوزات منظمة · حالة كل عربية · إدارة الفريق · تقارير واضحة

---

### Visual Concept — Modern Car-Wash Control Station

Large Arabic headline · Short supporting statement · Primary CTA · Secondary CTA · Large real Sparkle Auto dashboard frame · Supporting phone/customer-view mockup · Light-blue background · Oversized abstract Sparkle/water geometry · Small playful stickers/labels.

#### Visual Priority

1. Promise / outcome
2. Real product
3. CTA
4. Supporting visual details

---

### Product Assets Required

| العنصر | Asset ID | النوع |
|---|---|---|
| Laptop screen | `screen-overview-desktop` | REAL PRODUCT |
| Phone screen | `screen-bookings-mobile` | REAL PRODUCT |
| Owner | `owner-hero-hand-on-laptop-{dir}` | CHATGPT IMAGE (×2) |
| Water splash | `art-splash-hero` | CHATGPT IMAGE |
| Spark | `art-spark` | SVG asset |

#### Rules

* No fake dashboard · No redesigned UI · No fake metrics.
* Screens لازم تكون readable.
* Reference product UI must never replace the real Sparkle Auto UI.
* ChatGPT Image may generate surrounding visual artwork only.

---

### Motion

* Product frame short entrance (`--dur-slow`, translateY ≤ 20px).
* Sticker nudge / reveal.
* CTA physical press.
* Optional lightweight background line movement.

**❌ No Premium Scroll · No giant device travel · No bounce-heavy Hero entrance.**

**🔴 v2.0:** الـHero entrance **ما يأخّرش LCP**. العنوان والـCTA يظهروا فورًا؛ الحركة على الـStage بس، و`--z-content` مالوش animation مبدئي.

---

### Mobile

الترتيب:

1. Headline
2. Supporting copy
3. CTA
4. Secondary CTA
5. Product visual
6. Benefit strip (SLOT-01)
7. Supporting tagline

**ممنوع Complicated overlapping device stack.**

Mobile Reference Principle:

* Product visual يفضل واضح.
* Owner يقدر ينزل أسفل devices.
* Decorative elements تقل.
* Laptop / phone يعاد ترتيبهم بدل overlap Desktop.
* No text/device collisions.

**🔴 v2.0 — تنفيذ الموبايل:** الـstage بيتحول من `absolute layers` لـ`grid` عمودي عند `< 768px`. اللابتوب full-width بنسبته، الموبايل تحته بحجم 40%، والـOwner يختفي (دوره decorative هنا).

---

### Hero Acceptance Gate

```
☐ Value understandable without scrolling
☐ Real product clearly visible
☐ Arabic headline dominant
☐ CTA obvious
☐ Hero cheerful and light
☐ Mobile لا يبدو نسخة Desktop مضغوطة
☐ Screens حقيقية ومقروءة
☐ Hero composition follows supplied Reference closely
☐ Custom visual artwork uses ChatGPT Image where required
☐ No fake Product UI
☐ No code-generated substitute for complex visual artwork
☐ Laptop = 72% من الـstage
☐ Phone = 18% من الـstage
☐ Owner placement = inline-end −1%، height 95%
☐ Water artwork used as asset
☐ Arabic RTL variant correct
☐ English LTR variant correct
☐ Product screenshots are never horizontally flipped
☐ SLOT-02 محذوف (مش box فاضي)
☐ SLOT-01 موجود بالنص المعتمد
☐ Mobile has intentional recomposition
☐ 🔴 h1 واحد بس في الصفحة كلها
☐ 🔴 الكلمة الملوّنة في العنوان تستخدم --blue-text مش --sparkle-blue
☐ 🔴 الـstage aspect-ratio ثابت والتكوين محفوظ على 1280 و1440
☐ 🔴 مفيش composite PNG — طبقات منفصلة
☐ 🔴 LCP ≤ 2.5s والصورة الأساسية priority
☐ 🔴 npm run verify بيعدي
```

### GROUP 03 EXECUTION CHECKLIST

```
☐ Final Copy في copy.ar.json
☐ Select Overview screenshot          (BLK-02)
☐ Select phone screenshot             (BLK-02)
☐ Analyze supplied Hero Reference
☐ Identify ChatGPT Image visual assets
☐ Determine RTL Hero composition
☐ Determine LTR Hero composition
☐ Generate owner-hero-hand-on-laptop-rtl / -ltr   (BLK-01)
☐ Generate art-splash-hero                        (BLK-03)
☐ Brief
☐ Wireframe
☐ Build Stage بـaspect-ratio + layers
☐ Visual design
☐ Reference similarity pass (جدول النسب)
☐ Arabic Desktop
☐ English Desktop
☐ Tablet
☐ Arabic Mobile
☐ English Mobile
☐ Motion
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Hero: control through real product.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 03 Hero | Split grid, buttons, device masks, layering | Owner hero pose, wide splash, small spark | Overview screenshot, Bookings/customer screenshot, logo | Owner RTL/LTR; separate composition manifests |

### Imported composition recipe

#### 16.1 Hero

##### Desktop reference

Copy 40%; product stage 60%.
Laptop is the product anchor.
Phone overlaps the laptop without hiding important UI.
Owner overlaps only the external device shell, never the screenshot’s proof area.
Water asset sits behind all devices.

##### Mobile

Eyebrow.
Headline.
Support copy.
Primary CTA.
Secondary CTA.
Product visual.
Microcopy/tagline.

Avoid desktop-style three-object overlap. The Owner may sit beneath or behind the device stage only if text and UI remain clear.

### Imported component specifications

#### 11.2 Device/frame designs

##### Browser frame

Code-built, not generated.
R3 outer radius.
2px Navy outline for marketing stage or quiet 1px outline for dense explorer.
Optional 42px browser bar only when it improves recognition.
Screenshot always fills a precisely masked inner viewport.

##### Laptop frame

Use one approved shell style across Hero and Product Explorer.
The screen is a separate live image layer.
Do not bake the screenshot into the 3D render.
Hero may use stronger contact shadow; Explorer remains visually stable.

##### Phone frame

One approved bezel and corner radius.
Customer screenshot remains readable.
Phone stays secondary to the laptop except when the customer story is the active point.

#### 11.3 Crop rule

Full screen when the overall dashboard is the proof.
Intentional crop when a specific feature is the proof.
Never crop away the context needed to understand the claim.
Never enlarge a tiny crop until the UI becomes visually false.
Never translate, redraw, or horizontally flip screenshot content.

#### 11.4 Screenshot transition states

current screen: opacity 1 / translateY(0) / scale(1)
leaving screen: opacity 0 / translateY(-12px) / scale(.995)
entering screen: opacity 0→1 / translateY(12px→0) / scale(.995→1)

Transitions are masks over whole real screenshots. They do not animate fake UI elements inside the screenshot.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_HERO_RTL | New/edited pose interacting with device stack; no embedded UI | Hero Arabic | Required |
| OWNER_HERO_LTR | Separate direction-aware render, same real hand/watch | Hero English | Required |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 04 — THE PROBLEM

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 03 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#problem` · **الخلفية:** `--white` · **Premium Scroll:** ❌

---

### Reference Image Rule

Codex يحافظ قدر الإمكان على: Main metaphor composition · Owner placement · Question placement · Visual chaos level · Whitespace · Direction · Relative scale.

لو الـReference فيها Owner character / Car-wash scene / Speech-bubble composition / Editorial scene / Custom illustration → **ChatGPT Image**.

**ممنوع إعادة رسم الشخصيات أو المشهد باستخدام CSS.**

---

### REFERENCE DESIGN REVERSE-ENGINEERING — THE PROBLEM

واحدة من أقوى الصور بصريًا.

#### Composition — ثلاث مناطق

| المنطقة | النسبة | المحتوى |
|---|---|---|
| Left | ≈ 35% | Headline + explanation |
| Center | ≈ 28% | Owner stressed |
| Right | ≈ 37% | Operational questions |

#### Headline

**Badge:** `THE PROBLEM` / «المشكلة»

* الـReference English: *A car-wash owner / shouldn't be / the call center.* — آخر جملة بلون أزرق.
* المواصفات: **58px** (`--fs-h2`)
* **🔴 الجزء الأزرق:** `--blue-text`.
* **العربي المعتمد:** «صاحب المغسلة مش المفروض يبقى سنترال.»

تحتها Paragraph **18px** (`--fs-body`).

في النهاية خلاصة صغيرة مع shield/check icon.

* الـReference: *Sparkle Auto reduces the number of questions you have to ask.*
* **العربي المعتمد:** «Sparkle Auto مش بيزودلك شاشة جديدة… هو بيقلل عدد الأسئلة اللي محتاج تسألها.»

---

#### Owner

في النص تقريبًا · Full body · واقف ورافع إيديه فوق راسه · تعابير Overwhelmed.

حواليه أوراق طايرة. الـReference labels: `CALLS 23` · `EMPLOYEE NO SHOW` · `REPORTS` · `SUPPLIES LOW` + علامة تعجب + سكربِل Chaos فوق الرأس.

**دي مش UI cards. دي Editorial props.**

* Custom artwork / props → `art-chaos-papers` (6 ملفات) + `art-scribble` — ChatGPT Image.
* الأسئلة الأساسية → **DOM text حقيقي**.
* **🔴 v2.0:** نصوص الـprops (`CALLS 23` إلخ) **مرسومة جوه الـasset** — يعني هي جزء من الرسمة. عشان كده لازم يتولد **نسخة عربية للـprops** (`art-chaos-papers-ar`) ونسخة إنجليزية لو الـ`/en` اتفعّل. مسجّلة في الـmanifest.
* الـprops كلها `aria-hidden="true"` + `alt=""` — لأن المعنى موجود في الأسئلة الحقيقية.

---

#### Questions Side

ست Questions في Speech bubbles.

| الـReference English | **العربي المعتمد** |
|---|---|
| Has the car finished? | العربية خلصت؟ |
| Who booked 4:00 PM? | مين حاجز الساعة أربعة؟ |
| How much did we make today? | الحساب النهارده كام؟ |
| Did the employee show up? | العامل حضر؟ |
| Are we out of shampoo? | الشامبو خلص؟ |
| How is the other branch doing? | الفرع التاني عامل إيه؟ |

الـQuestions داخلة تدريجيًا في Sparkle route مائي بيبدأ يرتب الفوضى.

**Visual Principle:** Left/Center = Chaos · Right = Questions تبدأ تدخل في one organized flow.

---

#### Codex Structural Direction

Grid ثلاثي. الـQuestions **DOM حقيقية** — مش جزء من صورة واحدة.

```
#problem
 ├ .problem-copy
 ├ .chaos-stage            ← PROPORTIONAL STAGE (G4)
 │   ├ Asset owner-stressed-arms-up
 │   ├ Asset art-chaos-papers-1 … -6
 │   └ Asset art-scribble
 └ .problem-questions      ← <ul> حقيقية
```

**🔴 v2.0:** الـ`.chaos-stage` كمان `aspect-ratio` + طبقات نسبية (G3/G4).

#### Motion

On enter:

* papers float slight (≤ 8px، `--dur-slow`).
* bubbles enter واحدة واحدة (stagger ≤ 6 عناصر).
* Spark trail يرسم مسار واحد.

**ما تعملش 10 عناصر بتتنطط.**

**🔴 v2.0:** الحركة `IntersectionObserver` مرة واحدة (`once: true`)، ومش بتتكرر مع كل scroll.

---

#### Arabic / English Direction

الـReference قد تكون LTR. في Arabic:

* Reading order يراجع فعليًا.
* Chaos → system direction يتظبط حسب الـRTL composition.
* Owner ممكن يفضل Center.
* Questions تتجمع في الجهة اللي تخدم RTL story.
* Spark trail direction يعكس عند الحاجة.

English: LTR version تحافظ على الـReference composition قدر الإمكان.

Mobile: **No crowded three-zone composition.**

---

### 4.1 Business Goal

قبل ما نشرح Features، نخلي صاحب المغسلة يحس إننا فاهمين يومه ومشكلته.

**User Question:** «إنت فاهم المشكلة اللي عندي أصلًا؟»

**Primary Message:** المشكلة مش مجرد ضغط شغل؛ المشكلة إن التشغيل معتمد على صاحب المغسلة بدل نظام واضح.

---

### Final Copy — العربي المعتمد

#### Headline

> صاحب المغسلة مش المفروض يبقى سنترال.

#### النص

> لو كل سؤال وقرار وتقرير لازم يرجعلك، المشكلة مش إن الشغل كتير.
>
> المشكلة إن التشغيل معتمد عليك إنت، مش على نظام واضح.

#### أسئلة يومية

> * العربية خلصت؟
> * مين حاجز الساعة أربعة؟
> * الحساب النهارده كام؟
> * العامل حضر؟
> * الشامبو خلص؟
> * الفرع التاني عامل إيه؟

#### الخلاصة

> Sparkle Auto مش بيزودلك شاشة جديدة… هو بيقلل عدد الأسئلة اللي محتاج تسألها.

---

### Visual Role

دي أول Emotional / Relatable Section بعد Hero. المفروض تعمل Contrast بين:

> Chaos / Questions → Visibility / System

#### Possible Visual Direction

* Owner surrounded by repeated operational questions.
* Speech bubbles / work-order notes.
* Six questions visually coming من اتجاهات مختلفة.
* Sparkle visual motif يبدأ يرتب الفوضى.
* نهاية الـSection تتحول تدريجيًا من scattered questions إلى one organized system route.

#### Design Rules

* Avoid generic feature cards.
* التركيز على **Visual Metaphor واحدة**.
* النصوص جزء من المشهد مش مجرد Grid.
* السؤال الرئيسي لازم يبقى Hero-like داخل الـSection.
* Custom scene artwork uses ChatGPT Image.
* Do not approximate the supplied visual reference with CSS-drawn artwork.

---

### Mobile

* Headline
* Intro
* Questions in simple vertical visual sequence
* Conclusion

**بدون Crowded speech-bubble collage.**

Owner: يظهر بين Intro وQuestions أو أسفلها حسب أفضل Mobile balance.

**🔴 v2.0:** على الموبايل، الـchaos props تقل لـ**3 بس**، والـscribble يختفي.

---

### Acceptance Gate

```
☐ صاحب المغسلة يقدر يشوف نفسه في المواقف
☐ Section لا يتحول لقائمة Features
☐ المشكلة واضحة قبل تقديم الحل
☐ Conclusion تربط طبيعيًا بالقسم التالي
☐ Reference visual composition respected
☐ Custom visual artwork generated properly
☐ No cheap code-generated illustration
☐ Owner pose / scale قريب من Reference
☐ Questions remain real HTML
☐ Chaos props are editorial, not fake UI
☐ RTL storytelling direction reviewed
☐ LTR storytelling direction reviewed
☐ Mobile simplifies the collage intentionally
☐ 🔴 chaos props لها نسخة عربية (النص جواها مرسوم)
☐ 🔴 كل الـprops aria-hidden + alt=""
☐ 🔴 chaos-stage بـaspect-ratio ونِسب
☐ 🔴 الحركة once:true ومش بتتكرر
☐ 🔴 npm run verify بيعدي
```

### GROUP 04 EXECUTION CHECKLIST

```
☐ Lock visual metaphor
☐ Analyze supplied Reference Image
☐ Identify ChatGPT Image assets
☐ Generate owner-stressed-arms-up             (BLK-01)
☐ Generate art-chaos-papers-1…6 (عربي)        (BLK-03)
☐ Generate art-scribble                       (BLK-03)
☐ Wireframe
☐ Build chaos-stage بنسب
☐ Editorial visual design
☐ Reference similarity review
☐ Arabic Desktop
☐ English Desktop
☐ Tablet
☐ Mobile simplification (3 props بس)
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Problem: the Owner is overwhelmed by scattered questions.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 04 Problem | Three-zone grid, six HTML questions, conclusion | Overwhelmed Owner, paper cluster, supply prop, scribble | None | Chaos/trail direction RTL/LTR |

### Imported composition recipe

#### 16.2 Problem

Desktop: copy / Owner chaos / question flow.
Questions remain HTML speech bubbles.
Only papers and physical chaos props are images.
Spark trail performs one action: gathers scattered questions into one organized path.
Mobile: headline → Owner → vertical questions → conclusion.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_PROBLEM | Facepalm or stronger overwhelmed full-body pose | Problem | Supplied source; transparent master needed |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 05 — WHAT IS SPARKLE AUTO?

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 04 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#what-is-sparkle` · **الخلفية:** `--white` · **Premium Scroll:** ❌ · **هدف رابط «السيستم»**

---

### Reference Image Rule

المطلوب مطابقة: Overall section structure · Product/illustration placement · Scale · Whitespace · Business-pillar layout · Visual hierarchy.

Custom visual assets → ChatGPT Image. Real Sparkle Auto product screens → Real screenshots only.

---

### REFERENCE DESIGN REVERSE-ENGINEERING — WHAT IS SPARKLE AUTO?

Section explanatory أكتر.

#### Composition

* الجزء الرئيسي ≈ **70%** (يسار في الـReference LTR)
* الـOwner ≈ **30%** (يمين)

في Arabic RTL: يتم إعادة تكوين النِسب والمواضع حسب اتجاه القراءة — **مش Mirror أعمى**.

**🔴 v2.0:** التقليب بيحصل تلقائيًا عبر logical properties. اللي بيتراجع يدوي هو **التوازن البصري بس** — هل الـOwner على اليمين في العربي شكله كويس ولا لأ.

#### أعلى المحتوى

* الـReference English: *So, what is Sparkle Auto?* — "Sparkle Auto" بالـBright Blue.
* **🔴 v2.0:** الكلمة الملوّنة تستخدم `--blue-text`.
* **العربي المعتمد:** «خلّينا نقولها ببساطة… إيه هو Sparkle Auto؟»

تحتها Reference line: *A complete booking and management system built specifically for car-wash businesses.* → النسخة النهائية تستخدم الـApproved Copy.

---

#### Product Pair Cards

اتنين Large cards جنب بعض.

**Card 1 — لوحة الإدارة**

* Icon blue square.
* داخلها Laptop small visual → `screen-overview-desktop` (نفس اللقطة، crop مختلف).
* جنب اللابتوب List: التشغيل · العربيات · الموظفين · الإيرادات والمصروفات · المخزون · العملاء · الصلاحيات.

**Card 2 — تطبيق العميل**

* Icon phone.
* داخلها Phone mockup → `screen-bookings-mobile`.
* جنبها: يشوف الخدمات · يختار العربية والفرع · يحدد الميعاد · يحجز · يتابع العروض والمكافآت.

#### أسفلهم — SLOT-03

ثلاث Mini Cards = الـ3 Business Pillars.

**القرار في v2.0: ✅ مُعتمد** — النص العربي:

| العنوان | الشرح |
|---|---|
| تجربة حجز أسهل | عميلك يحجز من غير مكالمات ولا لغبطة مواعيد. |
| تحكّم في التشغيل | تعرف كل عربية فين ومين مسؤول عنها والحساب كام. |
| عملاء بيرجعوا | تاريخ العميل وعروضه ومكافآته في مكان واحد. |

---

#### Owner

واقف يمين في الـReference · حواليه water splash / bubbles · بيشير للمحتوى.

* Asset: `owner-presenting-{dir}` — **محتاج نسختين** (بيشير).
* Codex ما يرسمش Character.

---

#### Reference Grid — قيم v2.0

```css
.what-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) 0.8fr;   /* ≈ 71% / 29% */
  gap: var(--sp-12);
  align-items: center;
}

.product-pairs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-6);                              /* 24px */
}

.product-pairs > .card {
  border-radius: var(--r-lg);                    /* 20px */
  padding: var(--sp-8);                          /* 32px */
  border: var(--bw-std) solid var(--deep-navy);
  box-shadow: var(--sh-hard-2);
  background: var(--white);
}
```

> v1.0 قالت radius 20px و padding 28–32px → v2.0: **radius 20px** (من الـtokens) و **padding 32px** (`--sp-8`).

---

### 5.1 Business Goal

شرح: إيه هو Sparkle Auto؟ بيعمل إيه؟ النظام بيتكوّن من إيه؟

**User Question:** «طب هو إيه بالظبط؟»

---

### Final Copy — العربي المعتمد

#### Headline

> خلّينا نقولها ببساطة… إيه هو Sparkle Auto؟

#### Main Copy

> Sparkle Auto نظام تشغيل وإدارة متكامل معمول مخصوص لمغاسل السيارات.
>
> بينظم الرحلة من أول الحجز أو دخول العربية، لحد انتهاء الخدمة، الحساب ورجوع العميل.

#### بيتكوّن من:

**لوحة إدارة لصاحب المغسلة والفريق** — لمتابعة:

> * التشغيل
> * العربيات
> * الموظفين
> * الإيرادات والمصروفات
> * المخزون
> * العملاء
>
> وكل شخص يشوف حسب صلاحياته.

**تطبيق للعميل** — العميل يقدر:

> * يشوف الخدمات
> * يختار العربية والفرع
> * يحدد الميعاد
> * يحجز
> * يتابع العروض والمكافآت

#### الخلاصة

> إدارة المغسلة وتجربة العميل في نظام واحد.

---

### Visual Concept — Sparkle Auto in One View

التصميم يعرض المنتج من خلال **3 Business Pillars**:

1. Customer booking experience.
2. Owner / operations control.
3. Retention / loyalty.

لكن الـCopy الأساسي يفضل هو الـApproved Copy اللي فوق.

#### Design Approach

* Avoid grid of 12 feature cards.
* 3 larger storytelling blocks.
* Product-relevant icons / illustrations.
* Different blue surfaces مع الحفاظ على palette واحدة.
* Reference Image composition should guide final section structure.
* Any custom visual artwork uses ChatGPT Image.
* Real product screenshots remain real.

---

### Responsive

**Desktop:** Product pair cards side-by-side.

**Tablet:** 2 cards مع Owner أقل.

**Mobile:**

1. Headline
2. Main copy
3. Dashboard card
4. Customer App card
5. Business pillars (SLOT-03)
6. Owner optional / lower priority

**ممنوع تصغير Two-column card system لدرجة الشاشات تبقى غير مقروءة.**

**🔴 v2.0:** الشاشة جوه الكارت على الموبايل لازم تفضل **≥ 280px عرض**؛ لو أقل من كده، الكارت يتحول لـstack (شاشة فوق واللستة تحت).

---

### Acceptance Gate

```
☐ المستخدم يقدر يشرح Sparkle Auto بعد القسم
☐ واضح إنه Management + Booking + Customer system
☐ لا يوجد Feature-card overload
☐ لا يوجد تكرار بصري للـHero
☐ Reference visual hierarchy retained
☐ No fake Sparkle Auto screen
☐ Custom artwork is not recreated cheaply with code
☐ Product pair proportions قريبة من الـReference (71/29 و 1fr/1fr)
☐ Owner scale / placement intentionally adapted
☐ Arabic and English compositions reviewed separately
☐ Mobile product content remains readable (≥280px)
☐ 🔴 SLOT-03 بالنص المعتمد
☐ 🔴 owner-presenting له نسختين اتجاه
☐ 🔴 "Sparkle Auto" الملوّنة بـ--blue-text
☐ 🔴 npm run verify بيعدي
```

### GROUP 05 EXECUTION CHECKLIST

```
☐ Analyze Reference Image
☐ Final content hierarchy
☐ Identify visual assets
☐ Generate owner-presenting-rtl / -ltr    (BLK-01)
☐ Generate art-splash-sm                   (BLK-03)
☐ Wireframe
☐ Product explanation design
☐ Business pillars visual framing (SLOT-03)
☐ Reference similarity pass
☐ Arabic / English
☐ Desktop / Tablet / Mobile
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **What Is: the two product sides become clear.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 05 What Is | Product pair cards, pillar blocks, device frames | Explaining Owner, bubble/splash accent | Relevant owner dashboard + customer screen | Composition RTL/LTR; no screenshot flip |

### Imported composition recipe

#### 16.3 What Is / Who For pair

Alternate visual weight to avoid repeated split layouts.
What Is prioritizes product pair cards.
Who For prioritizes qualification copy.
Owner scale is supporting, never equal to the Hero.

### Imported component specifications

#### 11.2 Device/frame designs

##### Browser frame

Code-built, not generated.
R3 outer radius.
2px Navy outline for marketing stage or quiet 1px outline for dense explorer.
Optional 42px browser bar only when it improves recognition.
Screenshot always fills a precisely masked inner viewport.

##### Laptop frame

Use one approved shell style across Hero and Product Explorer.
The screen is a separate live image layer.
Do not bake the screenshot into the 3D render.
Hero may use stronger contact shadow; Explorer remains visually stable.

##### Phone frame

One approved bezel and corner radius.
Customer screenshot remains readable.
Phone stays secondary to the laptop except when the customer story is the active point.

#### 11.3 Crop rule

Full screen when the overall dashboard is the proof.
Intentional crop when a specific feature is the proof.
Never crop away the context needed to understand the claim.
Never enlarge a tiny crop until the UI becomes visually false.
Never translate, redraw, or horizontally flip screenshot content.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_EXPLAIN | Pointing beside an empty structural area | What Is | Supplied source; remove blank panel/background as separate layers |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 06 — WHO IS SPARKLE AUTO FOR?

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 05 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#who-is-it-for` · **الخلفية:** `--surface-cloud` · **Premium Scroll:** ❌

---

### Reference Image Rule

المطلوب الحفاظ بأقصى درجة على: Audience composition · Content grouping · Visual rhythm · Section scale · Whitespace · Any visual audience scene.

أي Custom Audience Illustration → ChatGPT Image.

---

### REFERENCE DESIGN REVERSE-ENGINEERING — WHO IS IT FOR?

التكوين معكوس تقريبًا عن الصورة السابقة.

**Reference LTR:**

* Left: Owner Full-body ≈ **36%**
* Right: Content ≈ **60%**

Arabic: يتم عكس أو إعادة Compose بناءً على الـRTL Reference.

#### Headline

**Label:** `WHO IS IT FOR?` / «لمين؟»

* الـReference English: *Built for owners who want to / run a business — not chase details.*
* **العربي المعتمد:** «معمول لصاحب مغسلة عايز يدير مشروع… مش يطارد تفاصيل.»

#### Checklist Card

Card White كبيرة.

* الـReference title: *A good fit if you…*
* **العربي:** «مناسب ليك لو:»
* بعدها **9 rows**، كل Row: check أزرق + text + divider رفيع.
* في النهاية Highlight pale-blue: *You don't have to be a tech expert.*
* **العربي:** «مش لازم تكون خبير تكنولوجيا.»

**🔴 v2.0:** الـcheck الأزرق **مش كافي لوحده** — كل row فيها أيقونة ✓ + نص. الأيقونة `aria-hidden`, والمعنى في النص. (قاعدة: مفيش معنى بلون/أيقونة لوحدها.)

#### Audience Tiles — SLOT-04

أربع Tiles تحت الـCard. كل واحدة: small blue icon + short label + white card + subtle shadow.

**القرار في v2.0: ✅ مُعتمد** — النص العربي:

> مغسلة تقليدية · مركز تلميع وحماية · خدمة سريعة · تشغيل بأكتر من فرع

#### Codex Reference Layout — قيم v2.0

```css
.who-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.4fr;    /* ≈ 35% / 65% */
  gap: var(--sp-12);
  align-items: center;
}

.checklist-card {
  max-inline-size: 650px;
  border-radius: var(--r-lg);
  border: var(--bw-std) solid var(--deep-navy);
  box-shadow: var(--sh-hard-2);
  background: var(--white);
}
.checklist-row { min-block-size: 44px; }   /* v1.0 قالت 42–48 → v2.0: 44 = touch target */

.audience-tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-4);
}
@media (max-width: 1023px) { .audience-tiles { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 479px)  { .audience-tiles { grid-template-columns: 1fr; } }
```

#### Owner

Asset: `owner-standing-confident` — **نسخة واحدة** (مش بيلمس ولا بيشير).

#### Mobile

Owner يقدر: يبقى بعد العنوان · أو أسفل الـChecklist · أو يختفي لو المساحة ضيقة وكان دوره Decorative.

**الـChecklist أهم.**

---

### 6.1 Business Goal

شرح: لمين؟ ومين هيستفيد منه أكتر؟

**User Question:** «هل مناسب لمغسلتي؟»

---

### Final Copy — العربي المعتمد

#### Headline

> معمول لصاحب مغسلة عايز يدير مشروع… مش يطارد تفاصيل.

#### مناسب ليك لو:

> * عندك فرع والتشغيل بقى صعب في المتابعة.
> * عندك أكتر من فرع.
> * حجوزاتك موزعة بين المكالمات وWhatsApp والدفتر.
> * محتاج تعرف حالة كل عربية والمسؤول عنها.
> * عايز تربط الإيراد بالخدمة والعربية والفرع.
> * بتكتشف نقص المخزون متأخر.
> * محتاج الفريق يشتغل حتى لو إنت مش موجود.
> * عايز تعرف تاريخ العميل وهل بيرجع.
> * ناوي تتوسع بطريقة منظمة.

#### الخلاصة

> مش لازم تكون خبير تكنولوجيا.
>
> كل شخص بيشوف الجزء اللي يخص دوره فقط.
>
> ولو المغسلة لسه مجرد فكرة، هتستفيد من طريقة التفكير، لكن أقوى قيمة تظهر مع تشغيل حقيقي.

#### SLOT-04 — Audience Strip (مُعتمد v2.0)

> مغسلة تقليدية · مركز تلميع وحماية · خدمة سريعة · تشغيل بأكتر من فرع

---

### Acceptance Gate

```
☐ Intended customers واضحين
☐ Qualification موجودة بدون طرد العميل
☐ لا يوجد Feature-card overload
☐ لا يوجد تكرار بصري للـHero
☐ Reference composition followed closely
☐ Custom audience artwork uses ChatGPT Image if required
☐ Checklist remains primary information block
☐ Audience tiles remain secondary
☐ Owner does not overpower content
☐ Arabic / English visual balance reviewed
☐ Mobile prioritizes qualification copy
☐ 🔴 SLOT-04 بالنص المعتمد
☐ 🔴 checklist row = 44px (touch target)
☐ 🔴 كل row معناها في النص مش في الأيقونة
☐ 🔴 owner-standing-confident نسخة واحدة (مش محتاج variants)
☐ 🔴 npm run verify بيعدي
```

### GROUP 06 EXECUTION CHECKLIST

```
☐ Final audience positioning
☐ Analyze Reference Image
☐ Generate owner-standing-confident          (BLK-01)
☐ Wireframe
☐ Audience qualification block (9 rows)
☐ Audience tiles (SLOT-04)
☐ Reference similarity pass
☐ Arabic / English
☐ Desktop / Tablet / Mobile
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Who For: qualification becomes easy to scan.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 06 Who For | Checklist, qualification card, audience tiles | Thinking Owner; optional audience symbols | None | Layout recomposition only unless artwork directional |

### Imported composition recipe

#### 16.3 What Is / Who For pair

Alternate visual weight to avoid repeated split layouts.
What Is prioritizes product pair cards.
Who For prioritizes qualification copy.
Owner scale is supporting, never equal to the Hero.

### Imported component specifications

#### 10.4 Checklist row

Minimum height: 48px; grows naturally for Arabic wrap.
Check icon in a 24–28px fixed cell.
Text remains live HTML.
Quiet divider between rows.
Final highlight row gets a pale-blue background plus type emphasis, not color alone.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_THINKING | Thinking pose | Who For | Supplied source; transparent master needed |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 07 — CAR-WASH OPERATIONS & GROWTH STRATEGY

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 06 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#strategy` · **الخلفية:** `--surface-ice` + blueprint grid · **Premium Scroll:** ✅ **PEAK 01**

---

### Reference Image Rule

الصورة مرجع أساسي للـBlueprint composition. Codex يحاول مطابقة: Sticky composition · Blueprint scale · Copy placement · Visual route · Layering · Whitespace · Progress placement · Overall visual weight.

أي Blueprint artwork / Car artwork / Wash-bay artwork / Editorial route scene / Decorative technical visual / Custom background artwork → **ChatGPT Image** لو static asset.

الـScroll mechanics، route progression، masks، transforms، positioning → **Code**.

**ممنوع استخدام CSS لرسم Car / Wash Bay / complex blueprint illustration كبديل رخيص.**

---

### REFERENCE DESIGN REVERSE-ENGINEERING — STRATEGY / BLUEPRINT

أول Signature Section. الصورة بتورّي **Final State** من الـScroll Story.

#### Background

Pale ice-blue (`--surface-ice`) · Technical grid خفيف جدًا · Blueprint marks في الحواف.

الـSection كلها تحس كأنها Technical Blueprint — **لكن Friendly، مش engineering dark**.

**🔴 v2.0:** الـgrid ممكن يتعمل `repeating-linear-gradient` (شكل هندسي بسيط، مسموح تحت استثناء G10) بـopacity ≤ 0.05. الـblueprint marks في الحواف = asset.

#### أعلى الشمال

Target icon داخل square · `OPERATIONS STRATEGY` / «استراتيجيات التشغيل» · Underline صغيرة.

* **Headline (Reference):** *A strong car wash is not just / more workers and more equipment.*
* **Subheadline:** *Sparkle Auto is built on 5 operating strategies.*
* **العربي المعتمد:**
  > المغسلة القوية مش معدات وعمال أكتر وبس.
  > Sparkle Auto مبني على 5 استراتيجيات:

#### أعلى اليمين

Wireframe car-wash building · Line-art فقط · Sparkle Blue · Opacity متوسط.

→ Asset: `art-washbay-wireframe` (اتجاهي) — **ChatGPT Image، مش CSS illustration.**

---

#### قلب القسم — Reference Final State

Timeline أفقية ضخمة · **5 Circular nodes**: `01/05` … `05/05`

بين كل Node والتاني: Thick Deep-Navy / blue line + arrow.

**قطر الدائرة:** v1.0 قالت 135–155px → **v2.0: 144px** (قيمة واحدة).

#### Strategy Cards

تحت كل Circle: Strategy card. خمس Cards متساوية.

| # | Reference English | **العربي المعتمد** |
|---|---|---|
| 01 | Every car follows a clear route | كل عربية ليها مسار واضح |
| 02 | Every number has a source | كل رقم معروف جاي منين |
| 03 | Everyone knows their role | كل شخص عارف دوره |
| 04 | The customer relationship doesn't end after the wash | العلاقة مع العميل ما تخلصش بعد الغسلة |
| 05 | Expand the system, not the chaos | الفرع الجديد يكرر النظام مش الفوضى |

كل Card: Icon أعلى · Title bold · Supporting paragraph · Blue underline صغير تحت.

---

#### Reference Scroll Architecture — قيم v2.0

```html
<section id="strategy" class="premium-scroll" style="--wrapper-h: 450vh">
  <div class="sticky-canvas">…</div>
</section>
```

```css
.premium-scroll { block-size: var(--wrapper-h); }
.sticky-canvas {
  position: sticky;
  inset-block-start: 0;
  min-block-size: 100svh;
  block-size: 100dvh;              /* 🔴 مش 100vh */
  display: grid;
  place-items: center;
  overflow: visible;               /* 🔴 قانون G5 */
}
```

**Progression:**

| المدى | الحالة |
|---|---|
| 0 – 20% | intro |
| 20 – 36% | strategy 01 |
| 36 – 52% | strategy 02 |
| 52 – 68% | strategy 03 |
| 68 – 84% | strategy 04 |
| 84 – 100% | strategy 05 |

**مفيش Snap. كل الانتقالات Interpolation.**

**Active State:**

* Circle active: `scale(1) → scale(1.04)` — **مش** 1.3.
* Inactive cards opacity: **0.4** · Active: **1**.
* **🔴 v2.0:** الـinactive cards كمان `inert` + `aria-hidden` (contract G16).

**Mobile:** خمس Strategies vertical. **No long pinning** — الـpinning متوقف تحت 1024px.

---

### 7.1 Business Goal

نثبت إن Sparkle Auto مش Software Features فقط — هو مبني على فهم لطريقة تشغيل مغسلة قوية وقابلة للتوسع.

**User Question:** «إيه أصلًا طريقة التشغيل الصح؟»

**Visual Concept:** *The Wash Business Blueprint* — واحد من Signature Sections.

كل Strategy توصل: **Problem → Principle → Business Outcome → Inside Sparkle Auto**

---

### Section Intro Copy

> المغسلة القوية مش معدات وعمال أكتر وبس.
>
> Sparkle Auto مبني على 5 استراتيجيات:

---

### STRATEGY VIDEO

**Video:** فيديو استراتيجيات المغسلة الناجحة

**Placement:** داخل جزء شرح الاستراتيجيات في GROUP 07.

**Video Role:** Supporting Explanation Asset يساعد المستخدم يفهم طريقة التفكير والاستراتيجيات الخمسة.

**الفيديو لا يستبدل:** الـApproved Strategy Copy · الـ5 Strategies · الـBlueprint Visual · الـPremium Scroll Storytelling · الـStrategy → System connection.

#### Video Rules

* لا يتم تغيير أي Strategy بسبب الفيديو.
* لا يتم تغيير ترتيب الاستراتيجيات.
* لا يتم اختصار الـCopy بسبب وجود الفيديو.
* لا يتحول الـSection إلى Video-only Section.
* الفيديو جزء من الـStrategy Section وليس Section مستقل.
* Responsive على Desktop وMobile.
* لا يبدأ بصوت تلقائي.
* Controls واضحة وقابلة للاستخدام.
* لا يمنع المستخدم من متابعة الـScroll Story.
* لا يغير الـPremium Scroll behavior المعتمد.
* لا يسبب Scroll Trap.
* المحتوى الأساسي يظل مفهومًا بدون تشغيل الفيديو.

#### 🔴 مواصفات v2.0 (VIDEO CONTRACT §00.10)

| البند | القرار |
|---|---|
| الملف | `public/video/strategy.mp4` + `.webm` |
| الموضع | **بعد** نهاية الـsticky wrapper — **مش جواها** (يمنع تعارض الـpinning) |
| Poster | `video-strategy-poster.webp` — مطلوب |
| Captions | `.vtt` عربي — **مطلوب** (محتوى معلوماتي) |
| Transcript | قابل للطي تحت الفيديو |
| Preload | `none` + IntersectionObserver |
| لو الملف مش موجود | الـblock **يتخفي بالكامل** — مش box فاضي (BLK-07) |

---

### STRATEGY 01

**Title:** كل عربية ليها مسار واضح

**Principle:** من الحجز أو Walk-in → الوصول → إسناد العامل → تنفيذ الخدمة → المراجعة → الدفع → التسليم.

**Inside Sparkle Auto:** كل عربية ليها حالة، خدمة، مسؤول وسجل حركة.

### STRATEGY 02

**Title:** كل رقم معروف جاي منين

**Principle:** كل خدمة وخصم ومصروف وطريقة دفع لازم تكون واضحة.

**Inside Sparkle Auto:** الإيراد مرتبط بالعربية والخدمة والفرع، مع مراجعة المتوقع والفعلي وقفلة اليوم.

### STRATEGY 03

**Title:** كل شخص عارف دوره

**Principle:** صاحب المغسلة يشوف الصورة الكاملة، المدير التشغيل، الكاشير الحساب، والعامل المهمة.

**Inside Sparkle Auto:** أدوار وصلاحيات + حضور + شيفتات + مسؤوليات.

### STRATEGY 04

**Title:** العلاقة مع العميل ما تخلصش بعد الغسلة

**Principle:** كل زيارة تساعدك تعرف العميل وعربيته وسلوكه.

**Inside Sparkle Auto:** تاريخ العميل + عربياته + زياراته + المحفظة + العروض + الولاء.

### STRATEGY 05

**Title:** الفرع الجديد يكرر النظام مش الفوضى

**Principle:** التوسع مش مضاعفة المكالمات والتقارير.

**Inside Sparkle Auto:** تابع كل الفروع من مكان واحد مع فصل البيانات والصلاحيات والتقارير.

---

### Blueprint Visual Language

Blueprint route · Wash bays / lanes · Connected strategy blocks · Large section numbers · Thick arrows · Notes / labels · Work-order graphics · Light-blue technical grid carefully.

**Desktop Interaction:** الاستراتيجيات تظهر progressively على Route — لكن القراءة نفسها لازم تفضل متاحة بدون Animation.

---

### Premium Scroll Storytelling — Strategy Blueprint

أول Premium Scroll Moment أساسي.

على Desktop يتحول لـLong-form Scroll Blueprint. الهدف إن صاحب المغسلة يحس إنه بيمشي داخل Blueprint حقيقي.

#### Scroll Composition

* Sticky central blueprint canvas
* أو Sticky large visual area + changing strategy copy
* أو Large vertical blueprint route يتحرك ببطء

الـVisual الأساسي يفضل ثابت نسبيًا، بينما كل Strategy تدخل في وقتها.

#### Opening State

يبدأ بالعنوان مع Blueprint مبسط وغير مكتمل.

مع بداية الـScroll: Blueprint lines تبدأ تظهر ببطء — **مش Draw سريع**. الخطوط تتحرك وكأن Blueprint بيتبني أمام المستخدم.

#### Scroll Stage 01

Strategy 01 تدخل. Route العربية يبدأ يتحدد. Visual Car / Work Order Marker يتحرك حركة قصيرة وثقيلة من نقطة الحجز إلى مراحل التشغيل. العناصر الثانوية تقل في Opacity بدل ما تختفي بعنف.

#### Scroll Stage 02

Strategy 02. الـBlueprint يتحرك أو يتوسع لمنطقة Finance / Closing. الأرقام والـWork Order relations تظهر تدريجيًا.

**ممنوع استخدام Fake Metrics.** الهدف بصريًا توضيح Connection بين التشغيل والرقم.

#### Scroll Stage 03

Strategy 03. الـVisual ينتقل لمنطقة Team Roles. Roles تظهر كطبقات مرتبطة بالـBlueprint: Owner → Manager → Cashier → Worker. الحركة Slow Layer Reveal.

#### Scroll Stage 04

Strategy 04. الـRoute يكمل خارج مرحلة التسليم ويرجع ناحية Customer loop. Loyalty / Customer History / Offers تظهر كامتداد طبيعي للـJourney.

#### Scroll Stage 05

Strategy 05. الـBlueprint الأساسي يتكرر أو يمتد إلى Branch 02.

**ما يحصلش Explosion Animation.** الفرع الجديد يظهر كامتداد منظم لنفس الـSystem.

> Visual message: *Repeat the system, not the chaos.*

#### Final Strategy Scroll State

الخمس Strategies متصلة داخل Blueprint واحد كامل. المستخدم يشوف إنهم مش نصايح منفصلة — دي **Operating System Logic واحدة**.

والـFinal Visual State يجهّز Transition طبيعي للقسم التالي: **Strategy → Real Sparkle Auto System.**

#### Strategy Scroll Motion Feel

**المطلوب:** Slow · Heavy · Blueprint-like · Deliberate · Layered · Controlled.

**مش:** Cards popping · Fast snapping · Elements flying · Rapid parallax.

العناصر الكبيرة تتحرك قليل (≤ `--travel-max` 28px). **الـStory نفسها هي اللي تتغير.**

#### Strategy Scroll Progress

Progress Indicator بسيط: `01/05` … `05/05` — أو Strategy Number كبير يتغير.

**بدون تحويل الـSection لـSlideshow.**

**🔴 v2.0:** الـprogress عبارة عن `<ol>` من `<button>`s حقيقية — الضغط عليها بيـscroll للحالة. ده بيدي وصول كامل بالكيبورد للقصة.

#### Strategy Scroll RTL

* Direction of blueprint logic لازم يبقى RTL aware.
* بداية الـRoute تتوافق مع اتجاه القراءة.
* الأسهم واتجاه حركة العربية أو الـTrail يتم عكسهم عند الحاجة.
* Progress numbers تفضل واضحة بدون قلب ترتيب الأرقام نفسها (`dir="ltr"` على `01/05`).

#### Strategy Scroll LTR

* Route moves naturally LTR.
* Progress copy aligns LTR.
* Blueprint asset variant يتم استخدامه إذا الـArtwork directional.
* Cars / arrows تتحرك بالاتجاه المناسب.

#### Mobile

Desktop Blueprint مايتضغطش. يتحول لـclean vertical sequence: `01 → 02 → 03 → 04 → 05`

كل Strategy مستقلة وقابلة للقراءة بسهولة.

Premium Motion على Mobile أخف في Structure لكن بنفس الإحساس: Slow reveals · Short sticky moments لو مفيدة · Route line تكمل نزولًا · **لا يوجد Long Pinning · لا يوجد Scroll Trap.**

**🔴 v2.0:** `matchMedia("(min-width: 1024px)")` — الـpinning **متوقف تمامًا** تحت 1024، والـwrapper بيرجع `height: auto`.

---

### Strategy Acceptance Gate

```
☐ Feels like business guidance rather than feature list
☐ Reading sequence obvious in RTL
☐ Reading sequence obvious in LTR
☐ كل Strategy مفهومة منفردة
☐ Section playful مش technical/dark
☐ Mobile simpler than desktop
☐ Strategy → System connection موجودة في كل وحدة
☐ Premium Scroll feels heavy and controlled
☐ No fast / lightweight transitions
☐ Blueprint Story remains readable without animation
☐ No scroll trapping
☐ Final state transitions naturally to the real product section
☐ Supplied Reference Image composition respected
☐ Custom blueprint visual artwork uses ChatGPT Image where required
☐ No code-generated substitute for complex car / scene artwork
☐ Strategy Video موجود داخل الـSection بدون استبدال الـBlueprint أو الـCopy
☐ Node قطر = 144px · active scale 1.04 · inactive opacity 0.4
☐ Final-state visual feels like one connected blueprint
☐ Mobile does not preserve 450vh behavior
☐ 🔴 الـcanvas بـ100dvh مش 100vh
☐ 🔴 مفيش overflow على الـcanvas أو أجدادها
☐ 🔴 inactive states عليها inert + aria-hidden
☐ 🔴 الـprogress عبارة عن buttons حقيقية
☐ 🔴 نسخة .sr-stacked موجودة لقارئ الشاشة
☐ 🔴 زرار «تخطَّ القصة» موجود
☐ 🔴 short-viewport guard (<620px) بيلغي الـpinning
☐ 🔴 الفيديو بره الـsticky wrapper + captions
☐ 🔴 ScrollTrigger.refresh() debounced على resize
☐ 🔴 backward + fast scroll متختبرين
☐ 🔴 npm run verify بيعدي
```

### GROUP 07 EXECUTION CHECKLIST

```
☐ Lock five strategies
☐ Analyze supplied Reference Image
☐ Classify Code / ChatGPT Image / Product assets
☐ Generate art-washbay-wireframe            (BLK-03)
☐ Generate art-car-side-rtl / -ltr           (BLK-03)
☐ Generate art-blueprint-grid                (BLK-03)
☐ Information structure
☐ Desktop blueprint
☐ Reference similarity pass
☐ Mobile vertical alternative
☐ Motion
☐ Define Premium Scroll story states (الجدول)
☐ Define sticky blueprint composition
☐ Define Strategy 01 → 05 transition pacing
☐ Define RTL blueprint movement
☐ Define LTR blueprint movement
☐ Define slow / heavy easing behavior
☐ Define reduced-motion alternative
☐ Build .sr-stacked version
☐ Test backward / fast scrolling
☐ Test resize during scroll story
☐ Test short viewport (<620px)
☐ Add Strategy Video + captions + transcript   (BLK-07)
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Strategy: one connected operating blueprint is built.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 07 Strategy | Sticky canvas, five cards, nodes, progress, route masks, video | Car, wash bay, branches, role markers, customer loop, blueprint edge art | Approved strategy video/poster if available | Blueprint/car/route RTL/LTR |

### Imported composition recipe

#### 16.4 Strategy

Sticky visual stage may use approximately 450vh only after prototype testing.
Five state ranges; no hard snap.
Each state adds one meaningful part of the blueprint.
Final state shows one connected operating logic.
Mobile uses five vertical cards connected by one route.

### Imported component specifications

#### 14.3 Strategy card

One icon/symbol, number, title, principle, and “Inside Sparkle Auto” proof line.
Active card full opacity; inactive minimum 0.55, not unreadable 0.4 if text remains important.
Blueprint nodes and lines stay behind content.
Mobile converts to vertical numbered sequence.

#### 10.5 Step / route node

Desktop strategy node: 136–152px only in the signature blueprint section.
Standard process node: 44–56px.
Active state: maximum scale 1.04.
Completed state: check + label; not color alone.
Route line is a dedicated vector/code layer behind nodes.

#### 10.7 Responsive video wrapper

Fixed aspect-ratio container with poster image.
2px Navy border, R3, S3.
Central play control at least 56×56px.
No autoplay with sound.
Controls remain keyboard accessible.
Poster cannot contain fake product UI.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 08 — STRATEGY → REAL SYSTEM + PRODUCT EXPLORER

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 07 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#product-explorer` · **الخلفية:** `--white` · **Premium Scroll:** ✅ **PEAK 02**

---

### Reference Image Rule

أهم صورة Reference مرتبطة بعرض المنتج. يتم مطابقة: Large Product Stage · Laptop/browser framing · Product scale · Copy position · Sticky balance · Annotations · Whitespace · Screen-transition composition · Secondary visual assets.

> **قاعدة مطلقة:** أي UI ظاهر داخل الـReference **لا يتم نسخه** لو مش Sparkle Auto UI حقيقي.

Device / decorative artwork → ChatGPT Image عند الحاجة.
Sparkle Auto UI → **Real Screens فقط**.

---

### REVERSE-ENGINEERING — REAL SYSTEM / PRODUCT EXPLORER

أقوى Product Section.

#### أعلى القسم

Small badge: `REAL SYSTEM / PRODUCT EXPLORER` / «السيستم الحقيقي»

* الـReference Headline (centered): *Don't just take our word for it — / see the system answer your questions.*
* **العربي المعتمد:** «مش هنقولك إن السيستم قوي وخلاص… شوفه وهو بيجاوب أسئلتك.»

#### Main Reference Layout — ثلاث مناطق

| المنطقة | النسبة | المحتوى |
|---|---|---|
| Left | ≈ 22% | Product story navigation |
| Center | ≈ 58% | Big Laptop |
| Right | ≈ 20% | Phone + external annotations |

في Arabic: يتم إعادة Compose حسب RTL. **مش شرط** الـrail تفضل Left لو ده يضر القراءة — لكن النِسب والـProduct dominance تفضل قريبة من الـReference.

**🔴 v2.0:** التقليب تلقائي عبر logical properties. اللي بيتراجع يدوي = هل الـrail على اليمين في العربي بيقرا صح.

---

#### Story Rail

Vertical line مع Nodes. الأقسام:

| # | Reference | **العربي** | Screen Asset |
|---|---|---|---|
| 01 | Overview | نظرة عامة | `screen-overview-desktop` |
| 02 | Bookings & Schedule | الحجوزات والجدول | `screen-bookings-desktop` |
| 03 | Car Status | حالة العربيات | `screen-carstatus-desktop` |
| 04 | Finance & Closing | المالية والقفلة | `screen-finance-desktop` |
| 05 | Team & Permissions | الفريق والصلاحيات | `screen-team-desktop` |
| 06 | Inventory | المخزون | `screen-inventory-desktop` |
| 07 | Customers & Loyalty | العملاء والولاء | `screen-customers-desktop` |

كل واحد: Icon + Title + question. Active one أقوى.

**🔴 v2.0:** الـrail عبارة عن `<ol>` من `<button>`s حقيقية بـ`aria-current="step"` على النشط. الضغط بيـ`scrollTo` الحالة. ده بيدي وصول كامل بالكيبورد.

---

#### Laptop — بطل القسم

* **عرض اللابتوب:** v1.0 قالت 850–920px → **v2.0: 100% من عمود الـcenter** (اللي هو 58% من 1500 = 870px عند مقاس الـReference). **نسبة مش رقم ثابت** — يبقى صح على كل المقاسات.
* الـDevice نفسه **ثابت**. الـScreenshot داخله هو اللي بيتغير.

**External annotations** حوالي اللابتوب.

الـReference examples: *Real-time insights at a glance* · *All branches, one unified view* · *Actionable KPIs* · *Drill down or export.*

**🔴 SLOT-05 — القرار في v2.0: ✅ مُعتمد** — لكن بنص عربي يعكس وظيفة حقيقية بس. الـ7 annotations المعتمدة:

| Story | Annotation عربي معتمد |
|---|---|
| 01 Overview | صورة سريعة عن اليوم في شاشة واحدة |
| 02 Bookings | الحجوزات والـWalk-ins في نفس الجدول |
| 03 Car Status | كل عربية ليها حالة ومسؤول |
| 04 Finance | الإيراد مربوط بالخدمة والعربية والفرع |
| 05 Team | كل دور بيشوف الجزء بتاعه بس |
| 06 Inventory | تعرف اللي قرب يخلص قبل ما يخلص |
| 07 Customers | تاريخ العميل وعربياته وعروضه في مكان واحد |

**ممنوع Unapproved Claims.** أي annotation جديدة تعدّي على Product Truth الأول.

---

#### Phone

صغير نسبيًا · يمين اللابتوب في الـReference · Customer experience proof.
**مش Main anchor.**

#### Bottom Strip — SLOT-06

ثلاث Benefits / Trust items في الـReference.

**القرار في v2.0: ❌ يُحذف.** بديله: **Summary strip** بأسماء الأقسام السبعة بس (الحجوزات · التشغيل · المالية · الفريق · المخزون · العملاء · الفروع) — بدون claims.

---

#### Reference Scroll Architecture — قيم v2.0

```html
<section id="product-explorer" class="premium-scroll" style="--wrapper-h: 700vh">
  <div class="sticky-canvas product-stage">
    <ol class="story-rail">…</ol>
    <div class="laptop-frame">…</div>
    <div class="phone">…</div>
    <div class="annotations">…</div>
  </div>
  <div class="sr-stacked">…7 stories كاملة…</div>
</section>
```

> **🔴 التعديل:** v1.0 اقترحت 650vh لـ7 حالات + intro = ~81vh للحالة — ضيق جدًا لقراءة سؤال + استيعاب شاشة + رؤية annotation.
> **v2.0: 700vh** → intro 8% + 7 حالات × 13% ≈ 91vh للحالة.

**Progression:**

| المدى | الحالة |
|---|---|
| 0 – 8% | intro + استقرار Overview |
| 8 – 21% | Story 01 Overview |
| 21 – 34% | Story 02 Bookings |
| 34 – 47% | Story 03 Car Status |
| 47 – 60% | Story 04 Finance |
| 60 – 73% | Story 05 Team |
| 73 – 86% | Story 06 Inventory |
| 86 – 100% | Story 07 Customers |

#### الجهاز نفسه ما يتحركش تقريبًا

اللي يتغير: screenshot · active story · annotation · question.

**Transition order:**

```
old annotation fades
→ old screen moves 10–20px / mask
→ new screen enters
→ settle
→ new copy appears
→ hotspot appears
```

**ممنوع كل حاجة تطير مرة واحدة.**

#### Screenshot Transition Reference

**أفضل:** `clip-path` · `opacity` · `translateY(12px)` · `scale(.995)`
**مش:** Carousel swipe سريع.

**🔴 v2.0:** `await img.decode()` قبل الانتقال — يمنع الوميض.

---

### 8.1 Business Goal

بعد ما قلنا «دي طريقة التشغيل الصح»، لازم نثبت: **Sparkle Auto فعلًا بيطبق الكلام ده.**

**User Question:** «ورّيني ده جوه السيستم.»

**Primary Message:** مش هنقولك إن السيستم قوي وخلاص… شوفه وهو بيجاوب أسئلتك.

### Section Intro Copy

> مش هنقولك إن السيستم قوي وخلاص… شوفه وهو بيجاوب أسئلتك.

---

### SYSTEM EXPLANATION VIDEO

**Video:** فيديو شرح السيستم

**Placement:** داخل جزء عرض السيستم في GROUP 08.

**Video Role:** Supporting Product Explanation Asset يساعد المستخدم يشوف ويفهم Sparkle Auto قبل أو أثناء استكشاف الشاشات.

**الفيديو لا يستبدل:** الـInteractive Product Explorer · الـ7 Product Stories · الـReal Screenshots · الـSticky Product Stage · الـPremium Scroll · الـHotspots/Annotations.

**الـReal Sparkle Auto Product Screens تظل الدليل الأساسي.**

#### Video Rules

* داخل GROUP 08 وليس Section مستقل.
* لا يتم تغيير أي Product Story بسببه.
* لا يتم حذف أو اختصار أي Product Screen بسببه.
* لا يستخدم كبديل عن الشاشات الحقيقية.
* أي Product UI داخل الفيديو يجب أن يظل Sparkle Auto الحقيقي.
* **ممنوع** إنشاء Fake Product UI للفيديو.
* **ممنوع** استخدام ChatGPT Image لإنشاء Dashboard أو Screens داخل الفيديو.
* Responsive · لا يبدأ بصوت · Controls واضحة.
* لا يعطّل الـSticky Product Stage · لا يسبب Scroll Trap.
* الـProduct Explorer يظل مفهومًا بالكامل بدون تشغيله.
* Product Truth Rules مطبقة عليه بالكامل.

#### 🔴 مواصفات v2.0

| البند | القرار |
|---|---|
| الملف | `public/video/system.mp4` + `.webm` |
| الموضع | **قبل** بداية الـsticky wrapper (بعد الـheadline مباشرة) |
| Poster | `video-system-poster.webp` |
| Captions | `.vtt` عربي — مطلوب |
| Preload | `none` |
| لو مش موجود | الـblock يتخفي بالكامل (BLK-07) |

---

### Visual Concept — Interactive Product Explorer

**Desktop:** Large real product screen as primary visual · Strategy explanation beside it · Hotspots/annotations · Product stays visually dominant · Story advances between selected Screens.

---

### PRODUCT STORY 01 — OVERVIEW

**Question:** إيه اللي بيحصل في المغسلة دلوقتي؟

**Explanation:** صورة سريعة عن التشغيل والحجوزات والعربيات والإيرادات والتنبيهات.

**Asset:** `screen-overview-desktop`

**Annotation:** صورة سريعة عن اليوم في شاشة واحدة

### PRODUCT STORY 02 — BOOKINGS & SCHEDULE

**Question:** مين حاجز؟ إمتى؟ وفي أي فرع؟

**Explanation:** الحجوزات والـWalk-ins في مكان واحد بحالة وميعاد واضح.

**Asset:** `screen-bookings-desktop`

**Annotation:** الحجوزات والـWalk-ins في نفس الجدول

### PRODUCT STORY 03 — CAR STATUS

**Question:** العربية وصلت لفين ومين مسؤول عنها؟

**Explanation:** تابع العربية من الوصول للتسليم.

**Asset:** `screen-carstatus-desktop`

**Annotation:** كل عربية ليها حالة ومسؤول

### PRODUCT STORY 04 — FINANCE & CLOSING

**Question:** دخل كام؟ اتسجل كام؟ والفرق جاي منين؟

**Explanation:** إيرادات + مصروفات + طرق دفع + خدمات + قفلة اليوم.

**Asset:** `screen-finance-desktop`

**Annotation:** الإيراد مربوط بالخدمة والعربية والفرع

### PRODUCT STORY 05 — TEAM & PERMISSIONS

**Question:** مين حضر؟ مين مسؤول؟ وكل شخص يقدر يعمل إيه؟

**Explanation:** موظفين + شيفتات + صلاحيات.

**Asset:** `screen-team-desktop`

**Annotation:** كل دور بيشوف الجزء بتاعه بس

### PRODUCT STORY 06 — INVENTORY

**Question:** إيه اللي قرب يخلص؟

**Explanation:** تابع الأصناف والاستهلاك والرصيد وإعادة الطلب.

**Asset:** `screen-inventory-desktop`

**Annotation:** تعرف اللي قرب يخلص قبل ما يخلص

### PRODUCT STORY 07 — CUSTOMERS & LOYALTY

**Question:** مين بيرجع؟ ومين مبقاش بيجيلنا؟

**Explanation:** تاريخ العميل وزياراته وعربياته والعروض والمكافآت.

**Asset:** `screen-customers-desktop`

**Annotation:** تاريخ العميل وعربياته وعروضه في مكان واحد

---

### Important Product Rules

> **Never alter screenshots to imply functionality that is not genuinely present.**

* Screens real · UI readable · No fake functionality · No fake business metrics · No screenshot wall.
* Annotations outside UI where possible.
* Never AI-generate Sparkle Auto screens.
* Never recreate reference dashboard UI with code.
* Reference Image guides frame / composition, **not Product Truth**.

---

### Motion

**مناسب:** Hotspot highlight · Product screen transition · Annotation entrance · Small arrow draw.

**غير مناسب:** Long cinematic transformations · Over-animated dashboards · Scroll-jacking.

---

### Premium Scroll Product Explorer

أقوى Premium Scroll Moment في الصفحة.

**الهدف:** المستخدم مايشوفش Screenshots منفصلة — يحس إنه واقف قدام Sparkle Auto نفسه، والـScroll بيكشفله سؤال وراء سؤال وإجابة وراء إجابة.

#### Core Desktop Composition — Large Sticky Product Stage

* Laptop / browser frame كبير يفضل ثابت أثناء جزء كبير من الـSection.
* الـCopy يتغير تدريجيًا مع الـScroll.
* الشاشة الحقيقية داخل الـFrame تتغير من Story للتانية.
* Hotspots تظهر فوق أو خارج الـUI.
* Device frame نفسه يفضل مستقر عشان المنتج يحس ثابت وحقيقي.
* الانتقالات تحصل داخل الـProduct Story بدل ما Device كامل يطير ويظهر من جديد.

#### Product Scroll Opening

يبدأ بالـOverview الحقيقي. العنوان والسؤال الأول يظهروا. الجهاز يثبت في مكانه.

بداية الـScroll **لا تغيّر الشاشة فورًا** — فيه Moment قصير (0–8%) يسمح للمستخدم يفهم الـOverview.

#### Product Scroll Transition Rule

بين كل Product Story والتانية:

1. السؤال الحالي يبدأ يهدأ.
2. الـAnnotation الحالية تختفي بهدوء.
3. الشاشة الجديدة تدخل داخل نفس الـFrame.
4. الحركة تستقر.
5. السؤال الجديد يظهر.
6. Hotspot أو Annotation يحدد المنطقة المهمة.

**ممنوع:** Screen + copy + device + background كلهم يتحركوا في نفس اللحظة.

#### Screen Transition Feel

Premium وتقيل. ممكن: Masked vertical slide · Controlled horizontal reveal · Soft depth shift · Gentle scale correction · Browser-content move while frame remains fixed.

السرعة محسوبة. **مش Swipe سريع زي Mobile Carousel.**

#### Story 01 → 02 — Overview → Bookings

الـOverview يبدأ يتراجع بصريًا. Bookings screen تظهر داخل نفس الجهاز. السؤال «مين حاجز؟ إمتى؟ وفي أي فرع؟» يظهر بعد استقرار الشاشة. Hotspot بسيط يحدد منطقة الجدول.

#### Story 02 → 03 — Bookings → Car Status

Transition يوضح إن الحجز مش نهاية العملية. Booking item أو Visual Trail صغير يتحول إلى حالة عربية.

**من غير تغيير الـReal UI.** الـMetaphor يتم خارج الـScreenshot أو في الـMarketing Layer.

#### Story 03 → 04 — Car Status → Finance

الحركة تربط Operation → Financial Record. الـAnnotation تتحرك من الـCar status info إلى Finance label خارجي، وبعدها الشاشة تتغير.

**بدون Fake number animation.**

#### Story 04 → 05 — Finance → Team

التحول يوضح إن الأرقام والتشغيل وراهم People + Roles. الشاشة تتغير. Roles annotations تظهر واحدة واحدة بوزن بصري هادي.

#### Story 05 → 06 — Team → Inventory

Visual handoff بسيط: Responsibility → Inventory responsibility.

الـVisual relation يحصل في **Marketing Layer فقط**. الـProduct UI لا يتغير.

#### Story 06 → 07 — Inventory → Customers

القصة تتحول من Inside Operations إلى Customer Relationship. Background decorative trail يتحرك من المغسلة إلى Customer icon / mobile element.

الجهاز الأساسي يظل Hero.

#### Final Product Scroll State

الشاشة تستقر. يظهر حولها Summary بسيط جدًا (SLOT-06 البديل): الحجوزات · التشغيل · المالية · الفريق · المخزون · العملاء · الفروع.

**بدون Screenshot Wall.**

الرسالة النهائية: **كل ده System واحد.** وده يمهد للـComplete Operation Flow.

#### Optional Dual-Device Moment

في Stories مرتبطة بتجربة العميل يظهر Mobile Device بجانب الـLaptop.

لكن: Laptop يفضل Main Anchor · الموبايل يدخل تدريجيًا · ما نعملش Device Stack مزدحم · الـCustomer App screen لازم تكون حقيقية.

#### Product Scroll Pacing

كل Story لها Scroll Distance كافي (≈91vh) يسمح: قراءة السؤال · فهم الشاشة · رؤية الـAnnotation · استيعاب الانتقال.

**ممنوع مسافة Scroll ضخمة بدون محتوى.**

#### Product Scroll Weight

* الـFrame الكبير: يتحرك أقل ما يمكن.
* الـScreen: يتغير بهدوء.
* الـAnnotations: أسرع قليلًا من الجهاز، لكن Smooth.
* الـBackground: حركة طفيفة جدًا.

ده يخلي المنتج يحس **Solid مش Floating**.

#### Sticky Rules

* Pinning مسموح.
* الـSticky area لازم تنتهي بوضوح.
* المستخدم يقدر يScroll بسرعة بدون Broken States.
* Scroll سريع → الـStory state يوصل للحالة الصحيحة بدون Flicker.
* Backward scrolling لازم يرجّع الـStory بشكل صحيح.
* Resize لازم يعيد حساب الـScroll positions بدون Breaking.

**🔴 v2.0 — كيف نضمن ده:**

* كل حالة **idempotent** — بتتحسب من `progress` بس، مش من الحالة اللي قبلها.
* **ممنوع** `onEnter` / `onLeave` callbacks فيها شغل تقيل.
* `ScrollTrigger.refresh()` debounced 150ms على resize.
* `ignoreMobileResize: true`.

#### Screenshot Loading Rule

* Screens التالية تتعملها preload قبل ما تظهر.
* **ممنوع شاشة فاضية أثناء الانتقال.**
* الصور optimized مع الحفاظ على readability.
* لو Screen كبيرة جدًا، responsive asset مناسب.

**🔴 استراتيجية v2.0 — بتحل تعارض الـperformance:**

* Story 01 → `priority` (تتحمّل مع الصفحة).
* Story `n+1` بس → `preload` عند الوصول لـStory `n`.
* Stories `n+2` وما بعدها → `loading="lazy"`.
* `await img.decode()` قبل بداية الانتقال.

> v1.0 قالت "preload الشاشات القادمة" وفي نفس الوقت "ممنوع preload لكل صورة ضخمة". v2.0 بتحسمها: **واحدة قدام بس.**

#### Arabic / RTL Product Explorer

* Story navigation direction يتراجع للـRTL.
* Annotation side يتغير حسب أفضل مساحة.
* **Screen نفسها لا يتم قلبها.**
* Product frame يظل Stable.
* Directional arrows / reveals تتوافق مع RTL.
* Horizontal masked reveal يتحول للاتجاه الأنسب.

#### English / LTR Product Explorer

* Reference left rail / center laptop / right phone يمكن الحفاظ عليه.
* LTR reading order واضح.
* Product frame لا يتغير لمجرد اللغة إلا لو Balance يحتاج.

#### Mobile

* Stacked product-story cards.
* أو controlled snap sequence.

**ما نستخدمش Desktop Sticky Interaction لو هيضر القراءة.**

Premium Motion يفضل موجود: Device visual enters once · Screens transition smoothly · كل Story لها Block واضح · short sticky device area بدل long pinned desktop · لا يوجد horizontal trapping · النص قبل أو بعد الشاشة حسب أفضل قراءة RTL.

**🔴 v2.0:** الـpinning **متوقف تحت 1024px**. البديل: 7 كروت، كل كارت = سؤال + شرح + شاشة حقيقية + annotation. كلهم في الـDOM من الأول.

#### Reduced Motion

كل Product Stories تظهر Stacked. كل Screenshot مع: Question · Explanation · Real screen.

بدون Sticky transitions · **بدون loss of information**.

---

### Acceptance Gate

```
☐ Product screens real and readable
☐ كل Principle مرتبط Feature حقيقي
☐ No fake functionality
☐ No screenshot wall
☐ Product هو بطل الـSection
☐ Mobile straightforward
☐ Sticky Product Stage smooth and stable
☐ Product frame feels heavy, not floaty
☐ Screen transitions are deliberate, not fast
☐ Backward scroll works correctly
☐ Fast user scrolling does not break story states
☐ Screens preloaded before transition
☐ Reduced-motion version contains all product stories
☐ Supplied Reference composition respected
☐ Any custom surrounding artwork uses ChatGPT Image
☐ Product UI never generated by AI
☐ Product UI never recreated with code
☐ System Explanation Video موجود بدون استبدال الشاشات
☐ Laptop remains dominant (58% column, 100% منه)
☐ Phone remains secondary
☐ Arabic navigation/annotations are intentional
☐ English navigation/annotations are intentional
☐ Real screenshots never flipped
☐ External annotations do not claim fake functionality
☐ 🔴 wrapper = 700vh (مش 650) و 7 حالات × ~13%
☐ 🔴 preload لواحدة قدام بس + img.decode()
☐ 🔴 الـrail عبارة عن buttons حقيقية بـaria-current
☐ 🔴 inactive stories عليها inert + aria-hidden
☐ 🔴 .sr-stacked فيها الـ7 stories كاملة
☐ 🔴 SLOT-05 بالـ7 annotations المعتمدة
☐ 🔴 SLOT-06 محذوف وبديله summary strip بدون claims
☐ 🔴 الفيديو قبل الـsticky wrapper + captions
☐ 🔴 الحالات idempotent (progress-based مش callback-based)
☐ 🔴 مفيش overflow على الـcanvas أو أجدادها
☐ 🔴 100dvh مش 100vh
☐ 🔴 short-viewport guard شغّال
☐ 🔴 npm run verify بيعدي
```

### GROUP 08 EXECUTION CHECKLIST

```
☐ Select 7 real screenshots               (BLK-02)
☐ Analyze supplied Reference Image
☐ Map strategy to product areas
☐ Classify assets
☐ Approve الـ7 annotations (SLOT-05)
☐ Confirm SLOT-06 removal + summary strip
☐ Product explorer wireframe
☐ Visual design
☐ Reference similarity review
☐ Hotspots / annotations
☐ Arabic Product Explorer layout
☐ English Product Explorer layout
☐ Mobile alternative (7 stacked cards)
☐ Motion
☐ Define Sticky Product Stage
☐ Define seven Product Story scroll states (الجدول)
☐ Define screen transition method
☐ Define screenshot preload behavior (n+1)
☐ Define copy / screen synchronization
☐ Define backward-scroll transitions
☐ Define RTL screen-transition direction
☐ Define LTR screen-transition direction
☐ Define mobile simplified Scroll Story
☐ Define reduced-motion stacked version
☐ Build .sr-stacked version
☐ Performance test product transitions
☐ Test backward / fast / resize / short viewport
☐ Verify all screens are real
☐ Add System Explanation Video + captions   (BLK-07)
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Product Explorer: one stable product frame answers changing questions.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 08 Product Explorer | Sticky stage, story rail, laptop/phone frames, hotspots, video | Minimal surrounding splash/technical accents only | Seven real product screenshots + customer screen + video | Rail/annotation/reveal direction; screens never flip |

### Imported composition recipe

#### 16.5 Product Explorer

Story rail 22%, stable product stage 58%, annotation/customer proof 20% as a reference ratio.
Laptop remains nearly stationary.
Only screenshot, active story, question, and annotation change.
Screens preload one state ahead.
Mobile uses stacked product stories or a short stable device stage, never a long desktop pin.

### Imported component specifications

#### 10.6 Annotation / hotspot

Annotation sits outside the real screenshot whenever possible.
Connector: 2px Deep Navy or Sparkle Blue with clear endpoint.
Hotspot: 20–24px, with focus-visible and text alternative.
Tooltip/card: maximum width 260px, R2, white, border, S2.
No annotation may imply a feature the screenshot does not prove.

#### 10.7 Responsive video wrapper

Fixed aspect-ratio container with poster image.
2px Navy border, R3, S3.
Central play control at least 56×56px.
No autoplay with sound.
Controls remain keyboard accessible.
Poster cannot contain fake product UI.

### 11. Product proof system

#### 11.1 Screenshot inventory

Before GROUP 03 and GROUP 08, approve dated, real screenshots for:

Overview.
Bookings.
Schedule / Walk-ins.
Car status / operations.
Finance / day closing.
Team / permissions / workforce.
Inventory.
Customers / loyalty / offers.
Branch management if used.
Setup/configuration if used.
Customer mobile booking experience.

Each screenshot record must include:

Product route/screen name.
App language.
Capture date/version.
Demonstrated feature.
Allowed crops.
Sensitive/demo data review.
Sections where it may appear.

#### 11.2 Device/frame designs

##### Browser frame

Code-built, not generated.
R3 outer radius.
2px Navy outline for marketing stage or quiet 1px outline for dense explorer.
Optional 42px browser bar only when it improves recognition.
Screenshot always fills a precisely masked inner viewport.

##### Laptop frame

Use one approved shell style across Hero and Product Explorer.
The screen is a separate live image layer.
Do not bake the screenshot into the 3D render.
Hero may use stronger contact shadow; Explorer remains visually stable.

##### Phone frame

One approved bezel and corner radius.
Customer screenshot remains readable.
Phone stays secondary to the laptop except when the customer story is the active point.

#### 11.3 Crop rule

Full screen when the overall dashboard is the proof.
Intentional crop when a specific feature is the proof.
Never crop away the context needed to understand the claim.
Never enlarge a tiny crop until the UI becomes visually false.
Never translate, redraw, or horizontally flip screenshot content.

#### 11.4 Screenshot transition states

current screen: opacity 1 / translateY(0) / scale(1)
leaving screen: opacity 0 / translateY(-12px) / scale(.995)
entering screen: opacity 0→1 / translateY(12px→0) / scale(.995→1)

Transitions are masks over whole real screenshots. They do not animate fake UI elements inside the screenshot.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 09 — COMPLETE OPERATION FLOW

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 08 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#operation-flow` · **الخلفية:** `--surface-cloud` · **Premium Scroll:** ❌ · **هدف رابط «طريقة الشغل»**

---

### Reference Image Rule

يتم مطابقة: Operational route composition · Car/route placement · Step positioning · Scale · Visual rhythm · Whitespace.

Custom Car / Wash Lane / scene artwork → ChatGPT Image.
Route structure / progression / motion → Code.

---

### REVERSE-ENGINEERING — COMPLETE OPERATION FLOW

Section process. **مش Premium Sticky Section.**

#### أعلى المحتوى

Badge: `COMPLETE OPERATION FLOW` / «رحلة التشغيل»

* الـReference Headline: *Connected steps — / not disconnected tools.*
* **العربي المعتمد:** «خطوات مترابطة… مش برامج منفصلة.»

Subtitle تحتها.

#### Main Visual

Road / service lane طويلة عبر الصفحة · لون Pale Blue · داخلها dashed white center line.

* البداية: Small stylized blue car → `art-car-side-{dir}`
* النهاية: Location pin + spark

Car artwork → ChatGPT Image. Route → Code (`art-route-lane` كـSVG + مسار).

#### 8 Steps

Cards alternating فوق وتحت الـroute.

| # | Reference | **العربي المعتمد** |
|---|---|---|
| 1 | Customer books or walks in | العميل يحجز أو يدخل Walk-in |
| 2 | Reception receives the booking | الحجز يظهر عند الاستقبال |
| 3 | Car starts the service journey | العربية تبدأ رحلة الخدمة |
| 4 | Task and assignee are set | المهمة والمسؤول يتحددوا |
| 5 | Services and add-ons are recorded | الخدمات والإضافات تتسجل |
| 6 | Payment is closed | الحساب يتقفل |
| 7 | Visit is saved to the customer | الزيارة تتحفظ للعميل |
| 8 | Owner sees the full picture | صاحب المغسلة يشوف الصورة كاملة |

كل Card: Circle number فوقها · Icon · Short text · White background · Soft shadow (`--sh-soft`).

#### End

Bottom centered box + Shield/Spark icon.

* الـReference: *The whole work journey stays connected in one place.*
* **العربي:** «رحلة الشغل كلها متصلة في مكان واحد.»

#### Motion

عند دخول القسم: Route Draw · Car تتحرك مسافة قصيرة بين Stage 1 و2.

**ما تستناش Car تلف الـ8 مراحل عشان المستخدم يفهم القسم. المعلومة كلها ظاهرة.**

**🔴 v2.0:** الـroute draw عبر `stroke-dashoffset` على SVG path — أداء ممتاز. الـcar بتتحرك `offset-path` مسافة قصيرة (≤ 15% من المسار) ثم تقف.

#### Arabic / RTL

Route واضح RTL. المرحلة 1 تبدأ من اتجاه القراءة الطبيعي للعربي. Cards alternating تتكيف. Car direction يتجه حسب الـRoute.

لو الـCar artwork directional → RTL variant (`art-car-side-rtl`).

#### English / LTR

Step 1 يبدأ من جهة القراءة LTR.

#### Mobile

Vertical route. **No attempt to compress 8 stages horizontally.**

---

### 9.1 Business Goal

نوضح إن كل Parts السيستم متصلة مع بعض، مش Modules منفصلة.

**User Question:** «طب اليوم نفسه ماشي إزاي جوه السيستم؟»

---

### Final Copy — العربي المعتمد

#### Headline

> خطوات مترابطة… مش برامج منفصلة.

#### Flow

> 1. العميل يحجز أو يدخل Walk-in.
> 2. الحجز يظهر عند الاستقبال.
> 3. العربية تبدأ رحلة الخدمة.
> 4. المهمة والمسؤول يتحددوا.
> 5. الخدمات والإضافات تتسجل.
> 6. الحساب يتقفل.
> 7. الزيارة تتحفظ للعميل.
> 8. صاحب المغسلة يشوف الصورة كاملة.

#### الخلاصة

> رحلة الشغل كلها متصلة في مكان واحد.

---

### Visual Direction — Operational Pipeline

* Horizontal wash lane desktop.
* Work-order route.
* Car moving through eight stages.
* Spark/Dot/Trail يربط كل المراحل.

### Desktop

Route واضح RTL. المرحلة 1 من اتجاه القراءة الطبيعي للعربي. English version: LTR-aware.

### Mobile

Vertical numbered flow. **ممنوع محاولة ضغط 8 Steps أفقيًا.**

### Motion

Step reveal · Route draw · Car / dot short transition.
**لا تعتمد المعلومة على الحركة.**

---

### Acceptance Gate

```
☐ الرحلة مفهومة بسرعة
☐ العلاقة بين Modules واضحة
☐ RTL Flow صحيح
☐ LTR Flow صحيح
☐ Mobile لا يوجد horizontal overflow
☐ Reference Image composition respected
☐ Custom car / scene artwork uses ChatGPT Image when required
☐ No complex illustration recreated using CSS
☐ Route is informative without animation
☐ Car does not need to traverse all 8 steps to reveal content
☐ Mobile route is vertical and readable
☐ 🔴 الـ8 steps <ol> حقيقية بترتيب منطقي
☐ 🔴 route draw بـstroke-dashoffset مش JS كل frame
☐ 🔴 art-car-side له نسختين اتجاه
☐ 🔴 على الموبايل الـroute عمودي والـcar تختفي أو تتصغر
☐ 🔴 npm run verify بيعدي
```

### GROUP 09 EXECUTION CHECKLIST

```
☐ Confirm 8-step journey
☐ Analyze Reference Image
☐ Generate art-route-lane                  (BLK-03)
☐ Reuse art-car-side-rtl / -ltr من GROUP 07
☐ RTL route design
☐ LTR route design
☐ Reference similarity pass
☐ Mobile vertical route
☐ Motion
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Operation Flow: one route connects the full workday.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 09 Operation Flow | Route, eight step cards, conclusion | Simplified car, endpoint spark/location prop | None | Car and route RTL/LTR |

### Imported composition recipe

#### 16.6 Operation Flow

Desktop uses a horizontal route with alternating cards.
Arabic starts from the natural RTL side; English starts LTR.
Full information is visible without waiting for car animation.
Mobile becomes one vertical route with eight numbered steps.

### Imported component specifications

#### 10.5 Step / route node

Desktop strategy node: 136–152px only in the signature blueprint section.
Standard process node: 44–56px.
Active state: maximum scale 1.04.
Completed state: check + label; not color alone.
Route line is a dedicated vector/code layer behind nodes.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 10 — SETUP & PREPARATION

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 09 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#setup` · **الخلفية:** `--surface-ice` · **Premium Scroll:** ✅ **PEAK 03** · **هدف رابط «التجهيز»**

---

### Reference Image Rule

المطلوب مطابقة: Work Order composition · Sticky sheet placement · Progress rail · Check/Stamp positions · Configuration screenshot placement · Whitespace · Scale · Overall professional setup feeling.

أي Work-order artwork / Stamp artwork / Supporting car-wash visual / Decorative installation imagery → ChatGPT Image.

لكن **Real Setup Screens → Real Sparkle Auto screenshots** (`screen-setup-desktop`).

---

### REVERSE-ENGINEERING — SETUP & PREPARATION

#### Composition

| المنطقة | النسبة |
|---|---|
| Left copy | ≈ 38% |
| Work order | ≈ 43% |
| Owner | ≈ 19% |

في Arabic / English: إعادة توزيع الاتجاه مع الحفاظ على نِسب الـVisual Weight.

#### Left Copy

**Badge:** `SETUP & PREPARATION` / «التجهيز»

* الـReference Headline: *We don't just send / you a link and leave / you on your own.*
* **العربي المعتمد:** «السيستم مش لينك بنبعتهولك ونسيبك تتصرف.»

Description · CTA (`cta-setup`).

**SLOT-07 — feature labels صغيرة في الصورة:**
*Measurable results from day one* · *No lock-in. Cancel anytime.* · *Go live with confidence*

**القرار في v2.0: ❌ تُحذف كلها** — Claims غير معتمدة. المساحة تتعاد توزيعها على الـdescription والـCTA.

---

#### Center — Work Order

Large vertical Work Order · شكل Document / implementation sheet.

في الأعلى: `Sparkle Auto` + **Setup Plan** stamp.

بعدها 5 rows:

| # | Reference | **العربي المعتمد** |
|---|---|---|
| 01 | Understand your operation | نفهم تشغيلك |
| 02 | Configure the system | نجهّز السيستم |
| 03 | Train each role | ندرّب كل شخص |
| 04 | Start with real operations | نبدأ تشغيل حقيقي |
| 05 | Review the result | نراجع النتيجة |

كل Step: number circle · title · support copy · check على الجهة الـ`inline-end`.

---

#### Right — Owner

Owner full body واقف جنب الورقة.

Asset: `owner-beside-sheet-{dir}` — **نسختين** (بيقف جنب جسم محدد).

---

#### Unapproved Reference Copy Rule

في الصورة المتولدة ظهر: *Measurable results from day one* · *No lock-in. Cancel anytime.* · *Go live with confidence*

دي **مش جزء من الـApproved Plan**. Codex يشيلها إلا لو تم اعتمادها تجاريًا.

**نفس التصميم يفضل — لكن بالمحتوى المعتمد فقط.**

---

#### Scroll Implementation Reference — قيم v2.0

```html
<section id="setup" class="premium-scroll" style="--wrapper-h: 420vh">
  <div class="sticky-canvas">…work order + owner + copy…</div>
  <div class="sr-stacked">…5 steps كاملة…</div>
</section>
```

**Progression:**

| المدى | الحالة |
|---|---|
| 0 – 10% | intro — الورقة شبه فاضية |
| 10 – 28% | Step 01 — reviewed |
| 28 – 46% | Step 02 — configured |
| 46 – 64% | Step 03 — roles |
| 64 – 82% | Step 04 — real operation |
| 82 – 100% | Step 05 — review + CTA |

Check mark: Short weighted stamp. **No bounce.**

Mobile: Vertical steps. **No long pinning** (متوقف تحت 1024).

---

### 10.1 Business Goal

إزالة خوف: «هشتري سيستم وبعد كده أتصرف أنا؟»

**User Question:** «هتجهزوهولي إزاي؟»

**Primary Message:** Sparkle Auto مش مجرد Account بنبعته للعميل؛ التجهيز بيتم على طريقة تشغيل المغسلة.

---

### Final Copy — العربي المعتمد

#### Headline

> السيستم مش لينك بنبعتهولك ونسيبك تتصرف.

#### Description

> إحنا بنجهزه حسب طريقة شغلك.

#### SETUP STEP 01 — نفهم تشغيلك

> * الفروع
> * الخدمات
> * الفريق
> * الحجوزات
> * القفلة
> * المشكلة الأساسية

#### SETUP STEP 02 — نجهّز السيستم

> نضيف:
> * الفروع
> * الخدمات والأسعار
> * المستخدمين
> * الصلاحيات
> * الإعدادات

#### SETUP STEP 03 — ندرّب كل شخص

> صاحب المغسلة، المدير، الاستقبال، الكاشير والعامل.
> كل واحد يتعلم الجزء اللي هيستخدمه.

#### SETUP STEP 04 — نبدأ تشغيل حقيقي

> عربيات وحجوزات وبيانات حقيقية، مش Demo بعيد عن الواقع.

#### SETUP STEP 05 — نراجع النتيجة

> إيه اللي اشتغل؟ إيه اللي محتاج يتظبط؟ وهل السيستم عمل قيمة فعلية؟

#### الخاتمة

> هدفنا مش إنك تفتح حساب… هدفنا إن التشغيل يبقى أوضح فعلًا.

#### CTA

> احجز مراجعة تشغيل لفروعك

---

### Visual Concept — Setup Work Order

Treat setup like a professional service order / installation sheet.

**Visual Elements:** Large step numbers · Check stamps · Work-order card · Progress path · Setup labels · Relevant real setup screens where useful.

---

### Premium Scroll Setup Story

ثالث Premium Scroll Moment. الإحساس هنا **مختلف**:

| القسم | الإحساس |
|---|---|
| Strategy Scroll | Blueprint being built |
| Product Scroll | Product being explored |
| **Setup Scroll** | **Professional onboarding / installation being completed** |

#### Core Visual Metaphor

Professional Setup Work Order. المستخدم يحس إن Sparkle Auto بيتجهز على مغسلته Step by Step — مش إنه اشترى Software وفتح Account وخلاص.

#### Desktop Scroll Composition

Sticky large Work Order sheet · Progress rail · Setup checklist · Real configuration screens تدخل عند الحاجة · Stamps / check marks تظهر مع اكتمال كل مرحلة.

الـMain Work Order يفضل ثابت أو يتحرك حركة محدودة. المحتوى يكتمل أثناء الـScroll.

#### Opening State

Work Order sheet لسه فاضية جزئيًا. عنوان القسم ظاهر.

مع بداية الـScroll: أول بيانات تشغيل تبدأ تظهر — **بدون Fake Client Data**.

Labels عامة مسموحة كـMarketing labels فقط: الفروع · الخدمات · الفريق · الحجوزات · القفلة.

#### Setup Scroll Stage 01 — نفهم تشغيلك

الـWork Order يبدأ يتملّى بالمعلومات: الفروع · الخدمات · الفريق · الحجوزات · القفلة · المشكلة الأساسية.

Check / note marks تظهر ببطء.

#### Setup Scroll Stage 02 — نجهّز السيستم

الـStory تتحول من Discovery إلى Configuration.

Real Sparkle Auto setup/configuration screens (`screen-setup-desktop`) داخل Side frame أو Browser frame. **فقط Screens حقيقية.**

الـWork Order يتحول من `Reviewed` إلى `Configured`.

#### Setup Scroll Stage 03 — ندرّب كل شخص

Roles تظهر كـStructured list: Owner · Manager · Reception · Cashier · Worker.

كل Role يرتبط بالجزء اللي يخصه. Permissions / workforce screen حقيقية تظهر عند الحاجة.

#### Setup Scroll Stage 04 — نبدأ تشغيل حقيقي

نقطة مهمة بصريًا. الـStatic Setup sheet يبدأ يتصل بActual Operation Flow.

Car / booking work order يدخل Route صغير — وده يوضح إن التجهيز اتحول لاستخدام حقيقي.

**بدون Fake Results.**

#### Setup Scroll Stage 05 — نراجع النتيجة

الـWork Order يوصل للحالة النهائية. Review stamp يظهر.

**SLOT-11 — ممنوع Stamp زي:** `SUCCESS` · `GUARANTEED` · `100%`

**القرار في v2.0:** الختم نصه **«تمت المراجعة»** — بدون Claim تجاري.

#### Final Setup Scroll State

الخمس مراحل تظهر كعملية واحدة مكتملة. Closing Copy يظهر:

> هدفنا مش إنك تفتح حساب… هدفنا إن التشغيل يبقى أوضح فعلًا.

بعد استقرار الـVisual: الـCTA يظهر كخطوة طبيعية.

#### Setup Scroll Feel

**المطلوب:** Professional · Methodical · Heavy · Reassuring · Controlled.

**مش:** Fun animation overload · Confetti · Fast checkbox spam · SaaS onboarding celebration.

#### Check / Stamp Motion

الـCheck marks والـStamps أكتر عناصر عندها Personality — لكن:

* يدخلوا **مرة واحدة**.
* حركة قصيرة.
* Weight واضح.
* بدون Bounce قوي.
* Stamp ينزل كأنه اتحط فعلًا على ورقة — بحركة محسوبة وبطيئة نسبيًا.

**🔴 v2.0:** الـstamp = `scale(1.06) → scale(1)` + `opacity 0→1` على `--dur-settle` بـ`--ease-out`. **مفيش rotation عشوائي ومفيش bounce.**

#### Important Rule

> **Do not promise a setup timeline or support process that is not currently approved for marketing use.**

#### Arabic / English Work Order Rule

**Arabic:** Work-order reading order RTL · الأرقام تفضل طبيعية (`dir="ltr"` على `01`) · Check position يتكيف · Owner/document balance يتراجع.

**English:** LTR layout · English step titles قد تحتاج ارتفاعات كروت مختلفة · Owner/document position يتبع الـReference LTR.

#### Mobile

Vertical work order. كل Step: Number · Title · Description · Optional visual.

Premium Motion على Mobile: Progress rail vertical · Work-order line تكتمل تدريجيًا · كل Step يدخل بإيقاع هادي · Screenshot صغير تحت الـStep المناسب · **لا يوجد Long Sticky Pinning** · CTA يظهر طبيعي بعد Step 05.

#### Reduced Motion

كل Steps تظهر Vertical. كل Visual final state يظهر مباشرة. **مفيش معلومة تعتمد على اكتمال Animation.**

---

### Acceptance Gate

```
☐ Process easy and controlled
☐ Steps concrete
☐ No unsupported promises
☐ Reading order obvious
☐ CTA appears naturally after process
☐ Premium Scroll reinforces setup-as-service idea
☐ Motion feels methodical and heavy
☐ No fast checklist animation
☐ Setup screenshots remain real
☐ No unsupported success claims
☐ Mobile remains easy to scroll
☐ Reference Work Order composition respected
☐ Custom Work Order artwork uses ChatGPT Image where required
☐ Product configuration UI remains real
☐ Unapproved Reference copy removed
☐ Owner / Work Order proportions قريبة من الـReference (38/43/19)
☐ RTL Work Order correct
☐ LTR Work Order correct
☐ 🔴 SLOT-07 محذوف بالكامل (3 claims)
☐ 🔴 SLOT-11 = «تمت المراجعة» بدون claim
☐ 🔴 wrapper = 420vh و 5 حالات × 18%
☐ 🔴 stamp motion بدون bounce أو rotation عشوائي
☐ 🔴 inactive steps عليها inert + aria-hidden
☐ 🔴 .sr-stacked فيها الـ5 steps
☐ 🔴 100dvh + مفيش overflow على الأجداد
☐ 🔴 short-viewport guard شغّال
☐ 🔴 owner-beside-sheet له نسختين اتجاه
☐ 🔴 npm run verify بيعدي
```

### GROUP 10 EXECUTION CHECKLIST

```
☐ Confirm actual setup process
☐ Analyze supplied Reference Image
☐ Classify Code / ChatGPT Image / real product assets
☐ Generate art-workorder-sheet              (BLK-03)
☐ Generate art-stamp-review («تمت المراجعة») (BLK-03)
☐ Generate owner-beside-sheet-rtl / -ltr    (BLK-01)
☐ Select screen-setup-desktop               (BLK-02)
☐ Confirm SLOT-07 removal
☐ Wireframe
☐ Work-order visual design
☐ Reference similarity pass
☐ Mobile / RTL
☐ English / LTR
☐ Define Premium Setup Scroll Story (الجدول)
☐ Define Work Order sticky composition
☐ Define Step 01 → 05 progress behavior
☐ Define real setup-screen usage
☐ Define Check / Stamp motion
☐ Define mobile vertical fallback
☐ Define reduced-motion alternative
☐ Build .sr-stacked version
☐ Test backward / fast / resize / short viewport
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Setup: one professional work order is completed.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 10 Setup | Sticky work order, five steps, progress, CTA | Setup-interaction Owner, stamp/check assets, optional small car/work-order prop | Real setup/configuration screens | Work order/check placement RTL/LTR |

### Imported composition recipe

#### 16.7 Setup

Copy 38%, work order 43%, Owner 19% as a reference starting point.
Work order stays stable while five steps complete.
Real setup screenshots appear only at the relevant stage.
Mobile becomes one vertical document; no long pin.

### Imported component specifications

#### 10.3 Brutalist card families

| Family | Treatment | Used for |
|---|---|---|
| Narrative | White, 2px Navy border, R3, S3 | Problem conclusion, strategy cards |
| Product | White, quiet border, R3, Soft Product shadow | Screenshots and product explanations |
| Utility | White/Cloud, 1px line, R2, S1/S2 | Audience tiles, mini benefits |
| Featured | White, Blue + Navy outline, R3/R4, S4 | Growth pricing only |
| Document | Warm-white/white, 2px Navy, R2/R3, S3 | Setup work order |
| Color Block | Sparkle Blue or Deep Navy, R4/R5 | Trial/final CTA only |

The page must never use one card family everywhere.

#### 10.5 Step / route node

Desktop strategy node: 136–152px only in the signature blueprint section.
Standard process node: 44–56px.
Active state: maximum scale 1.04.
Completed state: check + label; not color alone.
Route line is a dedicated vector/code layer behind nodes.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_SETUP | Hand physically interacting with work order | Setup | New pose required |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 11 — PRICING

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 10 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#pricing` · **الخلفية:** `--white` · **Premium Scroll:** ❌ · **هدف رابط «الأسعار»**

---

### Reference Image Rule

المطلوب مطابقة: Card composition · Price scale · Plan proportions · Spacing · Featured plan elevation · CTA placement · Background balance.

الكروت والـButtons والـTypography → Code.
أي decorative artwork معقد → ChatGPT Image عند الحاجة.

> **ممنوع تغيير Commercial Copy أو الأسعار لتقليد الـReference.**

---

### REVERSE-ENGINEERING — PRICING

#### Layout

Headline فوق · تحتها 3 Pricing cards · Owner واقف أقصى الجهة.

* Pricing ≈ **77%**
* Owner ≈ **23%**

في Arabic / English: الـOwner يروح للجانب الأنسب **بدون كسر ترتيب الخطط**.

#### Headline

**Label:** `PRICING` / «الأسعار»

* الـReference: *Choose the plan / that fits your operation.*
* **العربي المعتمد:** «اختار الباقة على قد تشغيل مغسلتك.»

#### Cards

كل Card تقريبًا نفس العرض.

**باقة التشغيل** — White · Normal border · Price كبير أزرق · Benefits list · Button Blue.

**باقة النمو** — أهم واحدة · Card أعلى بصريًا · Bright blue border · Badge · CTA Blue · Harder shadow.

* الـReference badge: *Best for Growth*
* **العربي المعتمد:** «الأنسب للنمو وتجربة العميل»

**باقة التوسع** — White · السعر: «يُضاف السعر المعتمد قبل النشر» (BLK-05) · Button Secondary outlined.

#### Bottom Note

Calendar icon.

* الـReference: *Annual = pay for 10 months and use 12 months.*
* **العربي المعتمد:** «السنوي = ادفع قيمة 10 شهور واستخدم 12 شهر.»

#### Owner

* Asset: `owner-relaxed` — **نسخة واحدة**.
* في الصورة كان Arms Crossed. **v2.0 يستخدم relaxed confident pose** بدل presenter/arms-crossed — أقرب لهوية Sparkle.
* Owner يفضل **Supporting مش Focal**.

#### Reference Codex Layout — قيم v2.0

```css
.pricing-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 23%;   /* 🔴 نسبة مش 270px ثابتة */
  gap: var(--sp-10);
  align-items: center;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-5);                            /* 20px */
  align-items: start;
}

.plan--growth {
  transform: translateY(-14px);
  border: var(--bw-std) solid var(--sparkle-blue);
  box-shadow: var(--sh-hard-3);
}

@media (max-width: 1023px) {
  .pricing-layout { grid-template-columns: 1fr; }
  .pricing-cards  { grid-template-columns: 1fr; }
  .plan--growth   { transform: none; }         /* 🔴 الرفع يتلغي على الموبايل */
}
```

> v1.0 قالت `270px` ثابتة للـowner — ده 18% عند 1500 لكن 26% عند 1024. v2.0 بيستخدم **نسبة** فالتوازن ثابت.

#### Mobile

Cards stacked. **ترتيب v2.0 (D-19):** نفس ترتيب Desktop (تشغيل → نمو → توسع)، والنمو بيفضل مميز بالـborder والـbadge — **بس من غير `translateY`** (على الموبايل الرفع بيبان غلط).

---

### 11.1 Business Goal

تخلي اختيار الباقة: واضح · بسيط · Confident · مرتبط بحجم التشغيل والاحتياج.

**User Question:** «هتكلفني كام وإيه الفرق بين الباقات؟»

### Section Intro

> اختار الباقة على قد تشغيل مغسلتك.

---

### PLAN 01 — باقة التشغيل

**Price**

> 1,290 جنيه شهريًا
> أو
> 12,900 جنيه سنويًا

**Description**

> مناسبة لفرع واحد وتنظيم التشغيل اليومي.

**تشمل:**

> * فرع واحد
> * حتى 600 عربية
> * الحجوزات والـWalk-ins
> * الجدول وحالة العربيات
> * الخدمات والباقات
> * الموظفين والصلاحيات
> * متابعة الفريق والتشغيل
> * أدوات الإدارة اليومية

**CTA:** `cta-plan-operations` → احجز مراجعة للباقة

> **🔴 ملاحظة v2.0:** «حتى 600 عربية» — **الوحدة غير محددة** (شهريًا؟ في المجمل؟). دي هتطلع على الصفحة زي ما هي وهتسبب سؤال. **لازم تتحدد قبل النشر** — مسجّلة كـ`TODO(BLK-05b)`.

---

### PLAN 02 — باقة النمو

**Price**

> 1,990 جنيه شهريًا
> أو
> 19,900 جنيه سنويًا

**Description**

> مناسبة لتنظيم التشغيل وتحسين تجربة العميل وزيادة رجوعه.

**تشمل:**

> * كل مميزات التشغيل
> * تجربة حجز أفضل
> * تاريخ العملاء والعربيات
> * العروض والخصومات
> * الولاء والمكافآت
> * متابعة رجوع العملاء

**شارة:** الأنسب للنمو وتجربة العميل

**CTA:** `cta-plan-growth` → احجز مراجعة للباقة

---

### PLAN 03 — باقة التوسع

**Label:** لأصحاب الفروع والتشغيل الأكبر

**تشمل:**

> * إدارة عدة فروع
> * رؤية مركزية
> * صلاحيات حسب الفرع والدور
> * مقارنة الفروع
> * إعداد يناسب هيكل الإدارة
> * تجهيز وتطبيق موجه

**السعر:** يُضاف السعر المعتمد قبل النشر. *(BLK-05)*

**CTA:** `cta-plan-expansion` → اطلب مراجعة تشغيل لفروعك

---

### ملاحظة

> السنوي = ادفع قيمة 10 شهور واستخدم 12 شهر.

---

### Visual Concept — Service Packages / Work Orders

Premium service-package feel · White / light-blue cards · Deep Navy border · Hard shadow · Strong price hierarchy · Bright blue CTA · Badge only where commercially valid.

#### Recommended Plan Rule

باقة النمو ممكن تتعمل Visually Elevated **فقط** لأن الـCommercial Copy أصلًا محدد: «الأنسب للنمو وتجربة العميل».

**ممنوع Elevate Plan مختلف بدون قرار Commercial.**

#### 🔴 قواعد الأسعار في v2.0

* الأرقام دايمًا `dir="ltr"` + `unicode-bidi: isolate` جوه النص العربي.
* الفاصلة العشرية / فاصل الآلاف: **الشكل الغربي** `1,290` زي ما هو في الـCopy المعتمد — **مش** أرقام هندية.
* السعر السنوي **مش** بيتحسب بالكود من الشهري — بيتقرا من `copy.ar.json` كما هو معتمد.
* «يُضاف السعر المعتمد قبل النشر» بتظهر **بنفس الـtypography scale** بتاعة السعر عشان الكارت ما يبقاش ناقص بصريًا.

---

### Mobile

* Full-width stacked cards.
* Price يظهر قبل التفاصيل الطويلة.
* CTA واضح.
* **ممنوع Horizontal table** لو مش ضروري.
* Owner أسفل الـCards أو يتم تقليله/حذفه لو Decorative.
* **لا يتم ضغط 3 Cards أفقيًا.**

---

### Pricing Acceptance Gate

```
☐ Price hierarchy immediate
☐ Differences clear
☐ No misleading recommendation
☐ Arabic pricing readable
☐ English pricing readable
☐ CTA clear
☐ Expansion price غير مخترع
☐ Reference card composition followed closely
☐ No commercial information altered for visual matching
☐ Growth elevation matches approved recommendation only
☐ Owner does not distract from pricing
☐ Mobile stacking clear
☐ 🔴 عمود الـowner نسبة (23%) مش 270px ثابتة
☐ 🔴 translateY على النمو ملغي تحت 1024
☐ 🔴 الأسعار dir="ltr" داخل النص العربي
☐ 🔴 السعر السنوي من الـJSON مش محسوب بالكود
☐ 🔴 «حتى 600 عربية» الوحدة اتحددت (BLK-05b)
☐ 🔴 كل CTA مربوط بـplan prefill صح
☐ 🔴 npm run verify بيعدي
```

### GROUP 11 EXECUTION CHECKLIST

```
☐ Confirm packages
☐ Confirm commercial rules
☐ Confirm expansion package price before publishing   (BLK-05)
☐ Confirm «600 عربية» unit                             (BLK-05b)
☐ Analyze Reference Image
☐ Generate owner-relaxed                               (BLK-01)
☐ Wireframe
☐ Pricing visual design
☐ Reference similarity pass
☐ Arabic / English
☐ Desktop / Tablet / Mobile
☐ CTA prefill wiring
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Pricing: one confident package comparison.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 11 Pricing | Three pricing cards, badge, price, feature lists, CTA | Supporting confident Owner only | Approved plan copy/prices | Owner placement; plan order remains commercially correct |

### Imported composition recipe

#### 16.8 Pricing / Trial / FAQ / Form

Pricing is the commercial peak.
Trial is a compact breathing panel after Pricing.
FAQ reduces energy and maximizes scan speed.
Form becomes the final functional conversion peak.
Their card anatomy must differ so the page does not become one repeated grid.

### Imported component specifications

#### 14.4 Pricing card

Price appears before long feature list.
Same anatomical order across all three plans.
Growth plan alone may use Featured treatment because its recommendation is approved.
Feature rows use check + text, not color alone.
CTA remains within each card’s final viewport without awkward equal-height padding on mobile.
Expansion price cannot be invented; reserve a visibly designed price slot for approved content.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_PRICING | Calm confident supporting pose, not sales-presenter behavior | Pricing | Supplied source or new relaxed variant |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 12 — 14-DAY TRIAL

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 11 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#trial` · **الخلفية:** `--white` + بانل `--surface-pale` · **Premium Scroll:** ❌

---

### Reference Image Rule

المطلوب مطابقة: Strip composition · Scale · CTA placement · Highlight treatment · Whitespace.

لكن يظل **Compact Risk-Reversal Strip** — **ولا يتحول لـHero Offer** حتى لو الصورة المرجعية قوية بصريًا.

---

### REVERSE-ENGINEERING — 14-DAY TRIAL

Section compact مقارنة بالباقي.

#### Overall

Large bordered panel · White / pale blue · Blue outline · **Radius 22px** *(v1.0 قالت ~22 → v2.0 يستخدم `--r-lg` 20px عشان يفضل داخل النظام)*.

#### Left

**Badge:** `14-DAY TRIAL` / «تجربة 14 يوم»

* الـReference Headline: *Not sure the system / is the right fit?*
* **العربي المعتمد:** «مش متأكد إن السيستم مناسب؟»

Supporting paragraph — كلمات *free 14-day* و *Growth Plan* بلون أزرق.
**🔴 v2.0:** الكلمات الملوّنة تستخدم `--blue-text`.

**Primary CTA:** `cta-trial` → «احجز مراجعة الأول»

#### Center-right

Small Growth Plan card — **مش Pricing card كاملة**. مجرد reference:

> باقة النمو · تجربة 14 يوم مجانية

أي wording نهائي يلتزم بالـCommercial Rule.

#### Right

Owner واقف relaxed، إيده على الـGrowth card.

Asset: `owner-hand-on-card-{dir}` — **نسختين** (بيلمس جسم).

#### Bottom Mini Strip — SLOT-08

أربع نقاط بـicon + text.

**القرار في v2.0: ✅ مُعتمد** — النص العربي (مستخرج من Trial Copy المعتمد):

> المراجعة الأول · هدف واضح · تشغيل حقيقي · بيانات حقيقية

#### Height Reference

**ما تاخدش 100vh.** v1.0 قالت 620–720px → **v2.0: 660px** كـ`min-block-size` على الديسكتوب، و`auto` على الموبايل.

**هدفها:** Breathing moment بعد Pricing.

---

### 12.1 Business Goal

تقليل Risk بعد ما العميل يكون فهم القيمة. **مش بيع الصفحة الأساسي.**

---

### Final Copy — العربي المعتمد

#### Headline

> مش متأكد إن السيستم مناسب؟

#### Copy

> بعد مراجعة طريقة شغلك، تقدر تبدأ تجربة مجانية 14 يوم على باقة النمو.
>
> بنحدد هدف واضح ونستخدم تشغيل وبيانات حقيقية عشان تعرف في النهاية هل Sparkle Auto عمل فرق ولا لأ.

#### CTA

> احجز مراجعة الأول

#### SLOT-08 — النقاط الأربعة (مُعتمد v2.0)

> المراجعة الأول · هدف واضح · تشغيل حقيقي · بيانات حقيقية

---

### Strategic Rule

التجربة المجانية تظهر كـ**Risk Reversal بعد فهم القيمة** — مش **Main Hero Offer**.

### Visual Direction

Compact highlighted strip between Pricing and FAQ. **مش Section ضخمة تنافس Pricing.**

### Mobile

* Panel full-width داخل gutter.
* Owner ينزل تحت المحتوى أو يختفي لو Decorative.
* Growth Plan mini card لا تزاحم CTA.
* Bottom points stack 2×2 أو vertical.
* **No offer-banner feeling.**

---

### Acceptance Gate

```
☐ Trial مرتبطة بالمراجعة
☐ لا تظهر كعرض Free-first
☐ الهدف من الـ14 يوم واضح
☐ لا يوجد وعد غير معتمد
☐ Reference composition respected without changing strategic role
☐ Section remains compact (≤ 660px desktop)
☐ Arabic / English copy hierarchy reviewed
☐ Mobile remains breathing moment, not giant Hero
☐ 🔴 SLOT-08 بالنص المعتمد
☐ 🔴 الكلمات الملوّنة بـ--blue-text
☐ 🔴 radius من الـtokens (--r-lg) مش 22px مخصص
☐ 🔴 CTA بيروح للفورم بـsource=trial
☐ 🔴 owner-hand-on-card له نسختين
☐ 🔴 npm run verify بيعدي
```

### GROUP 12 EXECUTION CHECKLIST

```
☐ Confirm commercial rules
☐ Analyze Reference Image
☐ Generate owner-hand-on-card-rtl / -ltr   (BLK-01)
☐ Trial strip
☐ Growth mini card
☐ SLOT-08 points
☐ Reference similarity pass
☐ Arabic / English
☐ Desktop / Tablet / Mobile
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Trial: one compact risk-reversal moment.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 12 Trial | Compact trial panel, mini plan reference, point strip | Reassuring/leaning Owner | Approved trial copy | Composition RTL/LTR |

### Imported composition recipe

#### 16.8 Pricing / Trial / FAQ / Form

Pricing is the commercial peak.
Trial is a compact breathing panel after Pricing.
FAQ reduces energy and maximizes scan speed.
Form becomes the final functional conversion peak.
Their card anatomy must differ so the page does not become one repeated grid.

### Imported component specifications

#### 14.5 Trial panel

Compact panel, R4, 2px blue/navy outline.
Primary content + mini Growth reference + supporting Owner.
Never visually larger or louder than Pricing.
Bottom points may use 2×2 mobile arrangement or vertical sequence.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_TRIAL | Leaning/reassuring pose | Trial | Supplied source; transparent master needed |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 13 — FAQ

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 12 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#faq` · **الخلفية:** `--surface-cloud` · **Premium Scroll:** ❌ · **هدف رابط «الأسئلة الشائعة»**

---

### Reference Image Rule

المطلوب مطابقة: Accordion composition · Question scale · Row height · Spacing · Controls · Background treatment.

الـAccordion نفسه → Code. أي custom background artwork → ChatGPT Image عند الحاجة.

---

### REVERSE-ENGINEERING — FAQ

#### Layout

* Left column ≈ **33%**
* Right Accordion ≈ **62%**

Arabic: يعاد التوزيع حسب RTL composition. English: يمكن الحفاظ على Reference LTR.

#### Left

**Badge:** `FAQ` / «الأسئلة الشائعة»

* الـReference Headline: *Answers to the / questions owners / usually ask.*
* **العربي المعتمد:** «إجابات على الأسئلة اللي بتتسأل كتير.»

Description. ثم Card:

* *Still have a question?* → **«لسه عندك سؤال؟»**
* CTA: `cta-faq-card` → «احجز مراجعة تشغيل»

**SLOT-10 (نسخة FAQ) — trust items في الصورة:** *Local support* · *Your data is safe*

**القرار في v2.0: ❌ يُحذف** — Claims غير معتمدة. المساحة تروح للـCTA card.

#### Right — Accordion

**11 Accordion items** · Panel كبير.

كل Row: Number بالـSparkle Blue · Question بالـDeep Navy · `+` أو `−` على الجهة الـ`inline-end`.

**🔴 v2.0:** رقم الـitem بلون `--blue-text` مش `--sparkle-blue` (contrast).

**Collapsed State:**
* Height: v1.0 قالت 52–60px → **v2.0: 56px** (= touch target + متسق مع الأزرار)
* Background: white · Soft shadow (`--sh-soft`) · **Radius 12px** (`--r-sm`)

**Open State:**
* Header row + تحتها pale-blue answer box
* Height إجمالي ≈ 125–150px حسب المحتوى — **`height: auto` مش قيمة ثابتة**

**🔴 Default open state:** v1.0 قالت الـReference فيها item 01 و04 مفتوحين.
**قرار v2.0 (D-18): كل العناصر مقفولة عند التحميل.** السبب: 11 عنصر مفتوح منهم اتنين بيطوّل الصفحة ويشوّش المسح البصري، والـReference مجرد mockup لعرض الحالتين.

#### Codex Accessibility Rule

```html
<h3>
  <button aria-expanded="false" aria-controls="faq-panel-01" id="faq-btn-01">
    <span class="faq-num" dir="ltr">01</span>
    <span class="faq-q">…</span>
    <span class="faq-icon" aria-hidden="true">+</span>
  </button>
</h3>
<div id="faq-panel-01" role="region" aria-labelledby="faq-btn-01" hidden>…</div>
```

**استخدم `<button aria-expanded>` — مش `div` قابل للنقر.**

**Animation:** height / opacity قصيرة — **180–250ms** → v2.0 يستخدم `--dur-fast` (180ms).
**Reduced motion:** Instant.

**🔴 v2.0:**
* الأيقونة `+`/`−` `aria-hidden` — المعنى في `aria-expanded`.
* الـfocus ring واضح على الـbutton كله.
* `Home` / `End` بينقلوا لأول/آخر سؤال (اختياري لكن مفيد).
* الـheading level: القسم `h2`، وكل سؤال `h3` جوّه.

#### Mobile

كل Column يبقى واحد تحت التاني.

---

### 13.1 Business Goal

إزالة أهم الاعتراضات قبل التقديم.

### Visual Concept — Diagnostic Panel

Large full-width questions · Strong `+`/`−` control · Minimal card clutter · Clear separation · Light-blue surfaces.

---

### الأسئلة والإجابات — العربي المعتمد

#### FAQ 01
**س:** هل Sparkle Auto برنامج حجوزات بس؟
**ج:** لأ. هو نظام تشغيل كامل يشمل العربيات والفريق والخدمات والمخزون والمالية والعملاء والفروع.

#### FAQ 02
**س:** لازم يكون عندي أكتر من فرع؟
**ج:** لأ. مناسب لفرع واحد، وقيمته بتزيد مع زيادة حجم التشغيل والفروع.

#### FAQ 03
**س:** العمال هيعرفوا يستخدموه؟
**ج:** كل موظف بيشوف ويتعلم الجزء الخاص بدوره فقط.

#### FAQ 04
**س:** هل هو بديل لمدير الفرع؟
**ج:** لأ. هو أداة تساعد المدير ينظم التشغيل ويحوّل خبرته لطريقة شغل واضحة.

#### FAQ 05
**س:** أنا شغال WhatsApp ودفتر، ليه أغيّر؟
**ج:** لأنك محتاج مصدر واحد تعرف منه الحالة والمسؤول والتاريخ والإيرادات.

#### FAQ 06
**س:** هل هو برنامج حسابات؟
**ج:** بينظم المالية المرتبطة بتشغيل المغسلة، لكنه مش بديل كامل للمحاسب أو برامج المحاسبة العامة.

#### FAQ 07
**س:** التجهيز بياخد قد إيه؟
**ج:** حسب الفروع والخدمات والبيانات والفريق، وبعد مراجعة التشغيل بنحدد خطة واقعية.

#### FAQ 08
**س:** إيه اللي بيحصل في تجربة الـ14 يوم؟
**ج:** هدف واضح + تجهيز البيانات + تشغيل حقيقي + مراجعات للنتيجة.

#### FAQ 09
**س:** لو محتاج ميزة مش موجودة؟
**ج:** بنراجع المشكلة الأول ونحدد هل الحل موجود بالفعل أو ضمن التطوير أو يحتاج شغل مخصص.

#### FAQ 10
**س:** أقدر أتابع المغسلة وأنا بعيد؟
**ج:** آه، تتابع الحالات والمعلومات والتقارير حسب صلاحياتك من غير مكالمات مستمرة.

#### FAQ 11
**س:** أعرف منين إنه مناسب لمغسلتي؟
**ج:** احجز مراجعة تشغيل. لو مش مناسب لمرحلتك الحالية، هنقولك بصراحة.

---

### Interaction

* Physical button feel.
* Short accordion transition.
* Full keyboard support.
* **Open state not communicated by color only.**

### Mobile

* Larger touch targets (≥44px).
* Multiline Arabic questions clean.
* `+` / `−` control واضح.
* English multiline independently reviewed.

---

### FAQ Acceptance Gate

```
☐ Questions easy to scan
☐ Accordion keyboard accessible
☐ Arabic multiline clean
☐ English multiline clean
☐ No unnecessary animation
☐ Copy unchanged unless commercially reviewed
☐ Reference visual structure followed closely
☐ Row height remains usable with longer Arabic copy
☐ Trust claims not added from Reference unless approved
☐ Reduced motion works
☐ 🔴 <button aria-expanded> مش div
☐ 🔴 كل الـitems مقفولة عند التحميل (D-18)
☐ 🔴 collapsed row = 56px
☐ 🔴 open panel height:auto مش قيمة ثابتة
☐ 🔴 الأرقام بـ--blue-text و dir="ltr"
☐ 🔴 heading levels صح (h2 قسم / h3 سؤال)
☐ 🔴 SLOT-10 trust items محذوفة
☐ 🔴 npm run verify بيعدي
```

### GROUP 13 EXECUTION CHECKLIST

```
☐ Confirm final questions / answers (11)
☐ Analyze Reference Image
☐ Accordion design
☐ Reference similarity pass
☐ Arabic state
☐ English state
☐ Mobile state
☐ Keyboard state (Tab / Enter / Space / Home / End)
☐ Reduced motion
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **FAQ: one calm objection-resolution panel.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 13 FAQ | Intro, CTA card, semantic accordion | None by default; one quiet atmosphere asset maximum | None | Column order and controls RTL/LTR |

### Imported composition recipe

#### 16.8 Pricing / Trial / FAQ / Form

Pricing is the commercial peak.
Trial is a compact breathing panel after Pricing.
FAQ reduces energy and maximizes scan speed.
Form becomes the final functional conversion peak.
Their card anatomy must differ so the page does not become one repeated grid.

### Imported component specifications

#### 14.6 FAQ item

Real <button> header.
Minimum collapsed height 60px; Arabic wrap may increase it.
Number fixed cell, question flexible, plus/minus fixed cell.
Open answer on pale-blue surface with body text and adequate padding.
Transition 180–250ms; instant in reduced motion.
Only one default-open item unless UX review approves otherwise.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 14 — APPLICATION FORM

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 13 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#application-form` · **الخلفية:** `--white` · **Premium Scroll:** ❌ · **هدف كل الـCTAs**

---

### Reference Image Rule

المطلوب مطابقة: Overall conversion composition · Form width · Input scale · Grouping · CTA placement · Supporting visual placement · Whitespace · Background treatment.

Form controls → Code. Any custom supporting scene / illustration → ChatGPT Image.

---

### REVERSE-ENGINEERING — APPLICATION FORM

من أكبر الأقسام.

#### Reference Grid

| المنطقة | النسبة |
|---|---|
| Left — Headline + benefits | ≈ 30% |
| Center — Form card | ≈ 47% |
| Right — Owner + success preview | ≈ 23% |

Arabic / English: يتم إعادة Compose حسب الاتجاه. **الـForm يظل Main Anchor.**

#### Left

**Badge:** `APPLICATION FORM` / «طلب مراجعة»

* الـReference Headline: *Tell us how / your car wash / runs today.*
* **العربي المعتمد:** «قولنا مغسلتك ماشية إزاي دلوقتي.»

Description. وتحتها **SLOT-09** — 3 small explainers.

الـReference: *Focused review* · *Private & secure* · *Solutions that fit*

**القرار في v2.0: ✅ مُعتمد** بنص عربي معتمد:

| العنوان | الشرح |
|---|---|
| مراجعة مركّزة | بنركز على المشكلة اللي فعلًا بتعطلك. |
| بياناتك عندك | بنستخدمها لفهم احتياجك والتواصل بخصوص المراجعة بس. |
| حل على قد شغلك | لو مش مناسب لمرحلتك، هنقولك بصراحة. |

#### Center — Form Card

Card White كبيرة · **Radius 20px** (`--r-lg`) · **Padding 32px** (`--sp-8`).

* الـReference Headline: *Let's get to know your operation*
* **العربي المعتمد:** «خلينا نعرف تشغيلك.»

#### Rows Reference

| Row | الحقول |
|---|---|
| 1 | الاسم · الموبايل / WhatsApp |
| 2 | اسم المغسلة · المحافظة / المنطقة |
| 3 | عدد الفروع · متوسط العربيات يوميًا · دورك في المغسلة |
| 4 | *(full width)* بتدير التشغيل بإيه؟ |
| 5 | أكتر مشكلة محتاج تحلها — chips |
| 6 | أنسب وقت للتواصل |

**Chips (Row 5):**

> متابعة الفروع · الحجوزات · حالة العربيات · قفلة اليوم · الفريق والصلاحيات · المخزون · رجوع العملاء والولاء · مشكلة أخرى

**🔴 v2.0:** الـchips = `<fieldset>` + `<legend>` + `<input type="checkbox">` مخفي بصريًا + `<label>` كـchip.
**مش** `<button>`s بـstate في JS — عشان تشتغل بدون JS وتبقى accessible.

#### CTA

Full-width blue.

* الـReference: *Book an Operations Review →*
* **العربي المعتمد:** «احجز مراجعة تشغيل»

وتحته Privacy line.

#### Right

Owner حوالي نص الارتفاع العلوي. تحته Success Card بـgreen check.

* الـReference: *We received your request.*
* **العربي:** «تمام، استلمنا طلبك.»

> **🔴 الـGreen هنا: Functional Success State only — مش Brand Accent جديد.**
> اللون من `--success: #0E9F6E` والخلفية `--success-surface`. ومعاه **أيقونة ونص** — مش لون لوحده.

**🔴 ملاحظة v2.0 مهمة:** الـSuccess Card في الـReference **preview** — يعني معروضة جنب الفورم قبل الإرسال. **ده مضلل.** في التنفيذ الحقيقي:

* حالة النجاح **تستبدل الفورم** بعد الإرسال، مش معروضة جنبه.
* الجهة اليمنى فيها الـOwner بس.
* أي «preview» للنجاح = وعد كاذب بالنجاح قبل ما يحصل.

#### Mobile

* كل field: Full width.
* Chips: 2 columns أو 1.
* Phone field: **LTR داخل Arabic page**.
* **No 3-column field row on narrow mobile.**

---

### 14.1 Business Goal

تحويل الاهتمام المؤهل إلى طلب مراجعة تشغيل — بدون Form تحس العميل إنه داخل على إجراءات طويلة.

**User Question:** «لو مهتم، الخطوة اللي بعدها إيه؟»

---

### Final Copy — العربي المعتمد

#### Headline

> قولنا مغسلتك ماشية إزاي دلوقتي.

#### Description

> جاوب على كام سؤال، وهنركز المراجعة على المشكلة اللي فعلًا بتعطلك.

#### Fields

> * الاسم
> * الموبايل / WhatsApp
> * اسم المغسلة
> * المحافظة / المنطقة
> * عدد الفروع
> * متوسط العربيات يوميًا
> * دورك في المغسلة
> * بتدير التشغيل بإيه؟
> * أكتر مشكلة محتاج تحلها
> * أنسب وقت للتواصل

#### المشاكل

> * متابعة الفروع
> * الحجوزات
> * حالة العربيات
> * قفلة اليوم
> * الفريق والصلاحيات
> * المخزون
> * رجوع العملاء والولاء
> * مشكلة أخرى

#### CTA

> احجز مراجعة تشغيل

#### خصوصية

> بياناتك تستخدم لفهم احتياج مغسلتك والتواصل بخصوص المراجعة فقط.

#### رسالة النجاح

> تمام، استلمنا طلبك.
>
> هنراجع المعلومات ونتواصل معاك لتحديد مراجعة تشغيل مناسبة.

#### 🔴 رسائل الأخطاء — جديدة v2.0

الفورم فيه validation ومفيش رسائل خطأ معتمدة في v1.0. دي المعتمدة:

| الحقل | الرسالة |
|---|---|
| الاسم | من فضلك اكتب اسمك |
| الموبايل | اكتب رقم موبايل مصري صحيح |
| اسم المغسلة | اكتب اسم المغسلة |
| المحافظة | اختار المحافظة |
| عدد الفروع | اختار عدد الفروع |
| متوسط العربيات | اختار متوسط العربيات |
| دورك | اختار دورك في المغسلة |
| المشكلة | اختار مشكلة واحدة على الأقل |
| ملخص الأخطاء | فيه حاجات ناقصة — راجعها وابعت تاني |
| فشل الشبكة | مفيش اتصال دلوقتي. جرّب تاني. |
| فشل السيرفر | حصلت مشكلة عندنا. جرّب تاني بعد شوية. |
| زرار المحاولة | حاول تاني |
| أثناء الإرسال | بنبعت… |

---

### Visual Concept — Sparkle Setup Request / Digital Work Order

Strong final headline · Clear explanation · Large form card · Visible labels · Simple field grouping · Optional approved "What Happens Next" side panel **فقط لو الـProcess Approved**.

#### Form Design

* Large Neo-Brutalist inputs (**min-height 56px** — متسق مع الأزرار).
* Strong focus state.
* Clear validation text.
* **Never use placeholder as only label.**
* **Preserve LTR for phone numbers.**
* Fields limited to real sales qualification needs.

#### Required States

`Empty` · `Focus` · `Filled` · `Validation error` · `Submitting` · `Success` · `Failure / retry`

#### Important Rule

> Success message لازم يعكس الـReal Follow-up Process.
> **ممنوع:** Fake response-time promise · Fake contact-channel promise.

#### Arabic / English Field Behavior

**Arabic:** Labels RTL · Phone number LTR · Numerical entries LTR where appropriate · Chips wrap naturally · Error messages Arabic clear.

**English:** Full LTR form · Field widths retested · Chip lengths may differ · Validation copy not translated mechanically if UX clarity requires better wording.

#### 🔴 Backend & A11y — v2.0 (تفصيل كامل في §00.9)

| البند | التنفيذ |
|---|---|
| الإرسال | Next Server Action → Supabase `operations_review_requests` |
| Validation | Zod schema مشتركة client + server |
| Hidden fields | `source` · `plan` · `lang` |
| Honeypot | `company_website` مخفي |
| Rate limit | 3 / IP / ساعة |
| الأخطاء | تحت الحقل + `aria-describedby` + `aria-invalid="true"` |
| ملخص الأخطاء | أعلى الفورم + `role="alert"` + الفوكس بينتقل له |
| النجاح | يستبدل الفورم + `role="status"` + الفوكس على عنوان النجاح |
| الفشل | يحافظ على كل القيم + زرار «حاول تاني» |
| الـautocomplete | `name` · `tel` · `organization` على الحقول المناسبة |
| الـinputmode | `tel` على الموبايل |
| الـchips | checkboxes حقيقية جوه fieldset/legend |

---

### Form Acceptance Gate

```
☐ Form simple
☐ Every field has a reason
☐ Arabic validation understandable
☐ English validation understandable
☐ Mobile keyboard entry usable
☐ Success state designed
☐ Failure state designed
☐ Phone field direction correct
☐ Reference composition followed closely
☐ Supporting artwork uses ChatGPT Image if required
☐ Green used functionally only
☐ Form remains primary focal point
☐ No unapproved trust claims from Reference
☐ 🔴 SLOT-09 بالنص المعتمد
☐ 🔴 Success card مش معروضة كـpreview جنب الفورم
☐ 🔴 كل حقل له <label> ظاهر (مش placeholder بس)
☐ 🔴 الأخطاء بـaria-describedby + aria-invalid
☐ 🔴 ملخص الأخطاء role="alert" + focus
☐ 🔴 النجاح role="status" + focus
☐ 🔴 chips = checkboxes حقيقية في fieldset
☐ 🔴 honeypot + rate limit شغالين
☐ 🔴 source / plan بيوصلوا للـDB
☐ 🔴 الفورم بيشتغل من غير JS (progressive enhancement)
☐ 🔴 inputs min-height 56px
☐ 🔴 npm run verify بيعدي
```

### GROUP 14 EXECUTION CHECKLIST

```
☐ Confirm qualification fields
☐ Confirm real follow-up process
☐ Analyze Reference Image
☐ Supabase table + Server Action           (BLK-10)
☐ Zod schema + error copy
☐ Reuse owner-standing-confident أو owner-relaxed
☐ Wireframe
☐ Visual design
☐ Reference similarity pass
☐ Validation states
☐ Success state
☐ Failure state
☐ Arabic / RTL
☐ English / LTR
☐ Tablet
☐ Mobile
☐ Test بدون JS
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Form: one clear qualified application.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 14 Form | Field grid, chips, states, success/failure | Supporting Owner if it improves balance | Privacy copy; real submission behavior | Field grid/Owner placement RTL/LTR |

### Imported composition recipe

#### 16.8 Pricing / Trial / FAQ / Form

Pricing is the commercial peak.
Trial is a compact breathing panel after Pricing.
FAQ reduces energy and maximizes scan speed.
Form becomes the final functional conversion peak.
Their card anatomy must differ so the page does not become one repeated grid.

### Imported component specifications

#### 14.7 Form field

Label always visible above the control.
Input minimum height 58–60px.
Border 2px Navy at default or quiet Navy with clear focus escalation.
Focus: Blue/Navy ring + border + label emphasis.
Error: icon + Arabic/English error text + error border.
Phone and numeric entry remain LTR inside Arabic layout where appropriate.
Helper/error area reserves enough space to avoid large layout jumps.

#### 14.8 Choice chip

Minimum target 44px high.
R2, not exaggerated pill.
Default white/Cloud with Navy border.
Selected state uses Blue surface or border plus check icon and text-weight change.
Chips wrap naturally; never truncate core problem labels.

#### 14.9 Form success/failure

Success: functional green check, clear confirmation headline, truthful next step.
Failure: error icon, explanation, retry action, and preserved user entries.
No fake response-time or contact-channel promise.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_FORM | Seated or phone-ready, attentive rather than decorative | Form | Supplied source can be adapted |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 15 — FINAL CTA

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 14 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#final-cta` · **الخلفية:** `--white` + بانل `--sparkle-blue` · **Premium Scroll:** ❌

---

### Reference Image Rule

المطلوب مطابقة: Closing composition · Headline scale · CTA position · Product/visual placement · Background treatment · Whitespace · Final visual energy.

أي custom closing artwork → ChatGPT Image. أي Sparkle Auto screen → Real screenshot.

---

### REVERSE-ENGINEERING — FINAL CTA

أقوى Color Block في الصفحة.

#### Outer

White page · Margin ≈ **60px** Desktop → **v2.0: `--sp-16` (64px)** عشان يفضل داخل الـscale.

#### Inner

Huge Sparkle Blue rectangle · Rounded corners ≈ 30px → **v2.0: `--r-panel` (28px)**.

#### Copy Area

Reference Left ≈ **60%**.

**Huge Headline:**

* الـReference: *Control is not / about standing in / the branch all day.*
* في الصورة فيه Mix من **White + Deep Navy** داخل نفس الـheadline — وده بيدي hierarchy قوية جدًا.
* **العربي المعتمد:** «التحكم مش إنك تفضل واقف في الفرع طول اليوم.»

> **🔴 CONTRAST FIX — أهم تعديل في القسم ده:**
> أبيض على `#01A2FF` = **2.76:1 → فاشلة**.
> **القرار:** كل النص على البانل الأزرق بلون `--deep-navy` (6.70:1).
> الـhierarchy اللي كانت بـ«أبيض + navy» تتحقق بـ**الوزن والحجم** (900 مقابل 400) — مش باللون.
> الأبيض على البانل يستخدم **فقط** في: تعبئة الزرار الثانوي · الجرافيك الزخرفي · الـlogo lockup.

#### Body

* v1.0: أبيض، 18–21px → **v2.0: `--ink-on-blue` (navy)، `--fs-body-lg` (20px)**
* فقرتين.

#### Buttons

* **Primary:** `cta-final-primary` → «احجز مراجعة تشغيل لفروعك»
* **Secondary (White):** `cta-final-whatsapp` → WhatsApp icon + «كلمنا على WhatsApp»
  * **🔴 موقوف — BLK-06.** الزرار `aria-disabled="true"` لحد ما الرقم يتسلّم. **ممنوع `href="#"`.**

#### Bottom Left

Brand lockup: `Sparkle Auto`

* الـReference: *Your car wash in your pocket.*
* **العربي:** «مغسلتك في جيبك.»

#### Right

Owner ضخم · Crop كبير (من منتصف الفخذ لفوق / ¾ body) · Water waves وSplash وراه.

* Asset: `owner-closing-crop` — **نسخة واحدة** (واقف، مش بيلمس حاجة).
* Waves: `art-waves-cta` — اتجاهي.

#### Reference Codex Panel — قيم v2.0

```css
.final-cta-panel {
  background: var(--sparkle-blue);
  border-radius: var(--r-panel);          /* 28px */
  min-block-size: 720px;
  position: relative;
  overflow: hidden;                        /* ✅ مسموح — مفيش sticky جوه */
  color: var(--ink-on-blue);               /* 🔴 navy مش أبيض */
  container-type: inline-size;
}

.final-cta-panel .art-waves { z-index: var(--z-art-bg); }
.final-cta-panel .owner     { z-index: var(--z-owner); inset-inline-end: 0; inset-block-end: 0; }
.final-cta-panel .copy      { z-index: var(--z-content); }
```

**🔴 تنبيه إلزامي:** الـ`overflow: hidden` هنا **مسموح فقط** لأن مفيش عنصر `sticky` جوه البانل ولا تحته. لازم يتأكد ده وقت البناء (قانون G5).

Arabic may place Owner on opposite side حسب RTL reference — بيحصل تلقائيًا عبر `inset-inline-end`.

#### Mobile

* الـOwner ينزل تحت النص.
* Blue panel يبقى طبيعي في الطول (`min-block-size: auto`).
* **No overlapping copy.**
* Outer margin يقل بشكل واضح (`--sp-5` = 20px).

---

### 15.1 Business Goal

إغلاق الصفحة برسالة Emotional / Strategic تلخص الوعد كله.

---

### Final Copy — العربي المعتمد

#### Headline

> التحكم مش إنك تفضل واقف في الفرع طول اليوم.

#### النص

> التحكم إنك تعرف:
>
> * إيه اللي بيحصل
> * مين المسؤول
> * الأرقام بتقول إيه
>
> من غير ما تلف وتسأل كل مرة.
>
> لو مغسلتك كبرت لكن إدارتها لسه معتمدة عليك في كل تفصيلة:
> خلّينا نراجع التشغيل مع بعض.

#### CTA الأساسي

> احجز مراجعة تشغيل لفروعك

#### CTA الثانوي

> كلمنا على WhatsApp

#### الخاتمة

> Sparkle Auto
>
> مغسلتك في جيبك.

---

### Visual Direction

Strong closing composition: Strong Sparkle Blue block · Product device / Spark motif · Big closing tagline · CTA واضح.

**ما يتحولش لـFeature Section جديدة.**

### Arabic / English Asset Rule

لو الـOwner / water composition directional → RTL / LTR variant.
**ممنوع قلب Logo أو Text.**

---

### Acceptance Gate

```
☐ Main promise gets reinforced
☐ Primary CTA consistent
☐ Secondary CTA does not compete
☐ Final tagline memorable
☐ Reference composition followed closely
☐ Custom closing artwork uses ChatGPT Image if required
☐ No fake Product UI
☐ Blue panel remains strongest color moment
☐ Owner crop close to Reference (¾ body)
☐ Arabic and English closing compositions reviewed separately
☐ Mobile has no text/Owner overlap
☐ 🔴 كل النص على البانل بلون navy — مفيش أبيض على أزرق
☐ 🔴 الـhierarchy بالوزن والحجم مش باللون
☐ 🔴 overflow:hidden على البانل متأكد إنه مالوش sticky جوه
☐ 🔴 WhatsApp CTA disabled بـaria-disabled — مش href="#"
☐ 🔴 radius من --r-panel · margin من --sp-16
☐ 🔴 على الموبايل min-block-size: auto
☐ 🔴 npm run verify بيعدي
```

### GROUP 15 EXECUTION CHECKLIST

```
☐ Analyze Reference Image
☐ Generate owner-closing-crop             (BLK-01)
☐ Generate art-waves-cta                  (BLK-03)
☐ Final CTA design
☐ Apply CONTRAST LOCK (navy on blue)
☐ Reference similarity pass
☐ WhatsApp action                          (BLK-06)
☐ Arabic / English
☐ Desktop / Tablet / Mobile
☐ Build
☐ QA + npm run verify
☐ Approve
```

---

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Final CTA: one emotional closing promise.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 15 Final CTA | Blue panel, copy, actions, brand lockup | Owner final pose, large wave/splash | Official logo; real WhatsApp link/icon | Owner/wave RTL/LTR |

### Imported composition recipe

#### 16.9 Final CTA / Footer

Final CTA is the strongest blue moment.
Footer is the calm Deep Navy close.
Do not combine them into one visually undifferentiated block.

### Imported Owner pose requirements

| Web pose | Recommended source/direction | Section | Status |
|---|---|---|---|
| OWNER_FINAL_RTL | Open confident three-quarter body | Final CTA Arabic | Required |
| OWNER_FINAL_LTR | Separate direction-aware render | Final CTA English | Required |

#### 12.3 Character invariants

Same face, age, skin tone, hairline, hair mass, brow shape, eye scale, nose, and neat light beard.
Navy open overshirt, white crew-neck T-shirt, beige cuffed chinos, navy sneakers with white laces/sole.
Dark smartwatch remains on the same real hand in every asset.
Natural slim body; no child proportions or bodybuilder anatomy.
Acting comes from torso, hands, feet, balance, and prop interaction.
No generic presenter pose as the default.
No text, logo, fake phone screen, or dashboard baked into the Owner render.

#### 12.4 Character export package

For every approved pose:

3000px+ transparent PNG master.
Transparent WebP at 1600px, 960px, and 640px long edge.
Clean contact shadow as a separate asset if the pose requires floor contact.
No-shadow cutout.
Optional foreground hand/arm matte where the hand must overlap a device frame.
Identity-reference metadata and approval version.
Mobile crop proof.

#### 12.5 Direction rule

Never mirror a whole Owner render when it would move the watch to the wrong hand, reverse asymmetrical clothing detail, or distort the intended acting. Produce a separate pose/render for the opposite composition.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

---

# GROUP 16 — FOOTER + GLOBAL POLISH / SEO / RELEASE / DEFINITION OF DONE

> **Mandatory prerequisites:** GROUP 00 and GROUP 01 are approved; every previous group through GROUP 15 is closed; `AGENTS.md`, `PROJECT_STATE.md`, locked copy/tokens/manifests, the V3 merge decisions, and the supplied Section Reference Image remain binding.

## ORIGINAL GROUP SOURCE — PRESERVED IN FULL

**Section id:** `#site-footer` · **الخلفية:** `--deep-navy` · **Premium Scroll:** ❌

---

### Reference Image Rule

المطلوب مطابقة: Overall footer structure · Link grouping · Logo scale · Background treatment · Whitespace · Closing rhythm.

أي custom decorative artwork → ChatGPT Image عند الحاجة. لكن **Footer يفضل بسيط ومش Feature Section**.

---

### REVERSE-ENGINEERING — FOOTER

#### Overall

فوق ≈ 30% White · تحتها Deep Navy Footer · الفاصل بينهم **Wave curve كبير**.

#### Left

Official logo · `Sparkle Auto` · Tagline:

* الـReference: *Your car wash in your pocket.*
* **العربي:** «مغسلتك في جيبك.»

**Description (الـReference):** *A booking and management system built for car wash owners in Egypt.*
→ أي Description نهائي يتوافق مع Approved Positioning.
**العربي المعتمد:** «نظام حجز وإدارة معمول لأصحاب مغاسل السيارات في مصر.»

Social icons تحته — **لكن ما تظهرش غير لو الروابط موجودة ومعتمدة (SLOT-12 / BLK-09).**

#### Center — Links

`System · How It Works · Setup · Pricing · FAQ`
→ **العربي:** السيستم · طريقة الشغل · التجهيز · الأسعار · الأسئلة الشائعة

بينهم Vertical separators رفيعة.

#### Right

Outlined CTA: `cta-footer` → «احجز مراجعة تشغيل»

#### Bottom

Horizontal line.

* Bottom-start: Copyright — **في الصورة `© 2024 Sparkle Auto`**
  > **🔴 ممنوع كتابة 2024 Static.** يستخدم `new Date().getFullYear()` (D-20).
* Bottom-end: `EN | AR`

#### Wave

**الأفضل: SVG** — مش `border-radius` عملاق.

```html
<footer id="site-footer">
  <svg class="footer-wave" aria-hidden="true" focusable="false" preserveAspectRatio="none">…</svg>
  <div class="footer-content">…</div>
</footer>
```

**🔴 v2.0:**
* الـwave `aria-hidden` + `focusable="false"`.
* `preserveAspectRatio="none"` عشان تتمدد بعرض الصفحة من غير overflow.
* لو الملف مش موجود → الفوتر يبدأ بحافة مستقيمة (degradation مقبول).

#### Contrast على الـFooter

الفوتر Deep Navy `#03132E`. النصوص عليه:

| اللون | النسبة | الحكم |
|---|---|---|
| `#FFFFFF` على `#03132E` | 18.5:1 | ✅ AAA |
| `#91B1D8` على `#03132E` | 8.4:1 | ✅ AAA — **هنا Soft Blue مسموح كنص** |
| `#01A2FF` على `#03132E` | 6.7:1 | ✅ AA — مسموح للروابط والتأكيدات |

> ملاحظة: Soft Blue فاشل على الأبيض (2.21:1) لكن ممتاز على الـNavy. **ده المكان الوحيد اللي يستخدم فيه كنص.**

---

### 16.1 Goal

إغلاق الصفحة Clean بدون منافسة الـApplication / Final CTA.

#### Content

فقط المعلومات المطلوبة فعليًا:

* Sparkle Auto identity.
* Relevant navigation.
* Legal / privacy links **when available** (BLK-09).
* Language control.
* Contact / social links **only when approved** (BLK-09).

#### Visual Direction

Strong Sparkle Blue أو Deep Blue Ending — لكن **Hierarchy بسيطة**.

**ممنوع Footer تتحول Section Features ضخمة.**

#### Arabic / English Footer Rule

**Arabic:** Link order RTL aware · Footer columns align RTL · Language switch visible · Dynamic copyright LTR fragment readable.

**English:** LTR layout · Same visual rhythm · No need to preserve exact column positions if Arabic balancing needs different layout.

#### Mobile

* Footer columns stack.
* CTA full أو near-full width.
* Wave simplified if needed.
* Social links only if real.
* **No overcrowded nav row.**

---

### Footer Acceptance Gate

```
☐ Required links present
☐ لا ينافس CTA
☐ Arabic / English direction correct
☐ Legal links only when available
☐ Reference composition respected
☐ No unnecessary artwork or visual complexity
☐ Dynamic year used
☐ Social icons only if approved links exist
☐ Wave implemented as proper asset / SVG
☐ Mobile footer stacks cleanly
☐ 🔴 مفيش href="#" — الروابط الغائبة متشالة
☐ 🔴 Soft Blue كنص مسموح هنا بس (8.4:1 على navy)
☐ 🔴 السنة ديناميكية
☐ 🔴 الـwave aria-hidden + preserveAspectRatio="none"
☐ 🔴 Language switch = <a hreflang> حقيقي
☐ 🔴 npm run verify بيعدي
```

### GROUP 16 EXECUTION CHECKLIST

```
☐ Analyze Reference Image
☐ Generate art-waves-footer                (BLK-03)
☐ Footer links (نفس anchor map)
☐ Legal/privacy links when available       (BLK-09)
☐ Language behavior
☐ Dynamic year
☐ Social-link validation                   (BLK-09)
☐ Reference similarity pass
☐ Arabic / English
☐ Desktop / Tablet / Mobile
☐ Build
☐ QA + npm run verify
☐ Approve
```

---
## PART C — GLOBAL PAGE BACKGROUND RHYTHM

> **🔴 تعديل v2.0:** v1.0 كان فيها **جدولين متعارضين** للخلفيات (`GLOBAL PAGE BACKGROUND RHYTHM` ضد `Background Rhythm` في PART D). التعارضات كانت في: Problem · Who For · Pricing · Form · Footer.
> **v2.0 فيها جدول واحد نهائي بالـHex.**

| # | Section | الخلفية | Token | Hex |
|---|---|---|---|---|
| 01 | Header | White | `--white` | `#FFFFFF` |
| 02 | Hero | Cloud Blue | `--surface-cloud` | `#F5FAFF` |
| 03 | Problem | White | `--white` | `#FFFFFF` |
| 04 | What Is Sparkle | White | `--white` | `#FFFFFF` |
| 05 | Who Is It For | Cloud Blue | `--surface-cloud` | `#F5FAFF` |
| 06 | Strategy Blueprint | Ice Blue + grid | `--surface-ice` | `#E9F3FD` |
| 07 | Product Explorer | White | `--white` | `#FFFFFF` |
| 08 | Operation Flow | Cloud Blue | `--surface-cloud` | `#F5FAFF` |
| 09 | Setup & Preparation | Ice Blue | `--surface-ice` | `#E9F3FD` |
| 10 | Pricing | White | `--white` | `#FFFFFF` |
| 11 | 14-Day Trial | White page + Pale panel | `--white` / `--surface-pale` | `#FFFFFF` / `#DCEBFA` |
| 12 | FAQ | Cloud Blue | `--surface-cloud` | `#F5FAFF` |
| 13 | Application Form | White | `--white` | `#FFFFFF` |
| 14 | Final CTA | White page + Blue panel | `--white` / `--sparkle-blue` | `#FFFFFF` / `#01A2FF` |
| 15 | Footer | Deep Navy | `--deep-navy` | `#03132E` |

#### قواعد الإيقاع

* **ما تعملش** `White → Blue → White → Blue` بشكل ميكانيكي.
* لازم يبقى فيه **breathing space** — لاحظ إن أقسام 03/04 أبيض ورا بعض عن قصد، و10 أبيض قبل الـTrial.
* اللحظات الملونة القوية **اتنين بس** في الصفحة كلها: **Final CTA** (أزرق) و **Footer** (navy).
* الـReference Image الخاصة بكل Group بتوجّه تفاصيل الخلفية **داخل** الإيقاع العام — **ومش** بتلغيه.
* أي تغيير على الجدول ده = **Base Change** بيتراجع على كل الأقسام المعتمدة (PART J).

---

## PART D — PAGE VISUAL RHYTHM

### D.1 Visual Energy by Section

| Section | Primary Visual Energy |
|---|---|
| Hero | Product-led / High impact |
| Problem | Editorial / relatable chaos |
| What is Sparkle | Simple / explanatory |
| Who Is It For | Qualification / checklist |
| Strategy | Graphic / blueprint |
| Product Explorer | Product-heavy / interactive |
| Operation Flow | Process / connected route |
| Setup | Work-order / process |
| Pricing | Structured / commercial |
| Trial | Compact / confidence-building |
| FAQ | Calm / readable |
| Form | Strong conversion moment |
| Final CTA | Emotional / confident close |
| Footer | Quiet close |

> **ممنوع كل Sections تبقى نفس Card Grid.**
> الـReference Image بتوجّه الـComposition، لكن الـFull Page Visual Rhythm لازم يفضل متنوع.

### D.2 Premium Scroll Rhythm

Premium Scroll Storytelling بيظهر في **ثلاث Peaks بس**:

| Peak | Section | القصة |
|---|---|---|
| **01** | Strategy | Blueprint / business-thinking story |
| **02** | Real System | Product exploration / proof |
| **03** | Setup | Professional implementation / reassurance |

#### الإيقاع المطلوب

```
Normal reading
  → Signature Scroll Story (Strategy)
    → breathing space (Operation Flow)
      → Signature Scroll Story (Product Explorer)   ← ملاحظة: الترتيب الفعلي 07→08 متتاليين
        → normal process
          → Signature Scroll Story (Setup)
            → calm commercial sections
```

> **🔴 تنبيه v2.0:** الـPeak 01 (Strategy = GROUP 07) والـPeak 02 (Product Explorer = GROUP 08) **متتاليين مباشرة**، ومجموعهم `450vh + 700vh = 1150vh` من الـscroll المثبّت ورا بعض.
> ده **خطر إرهاق حقيقي**. الحل المطلوب:
>
> 1. فاصل بصري واضح بينهم — عنوان GROUP 08 بيظهر كـ**normal scroll** قبل ما الـpinning يبدأ (أول 8% intro).
> 2. الفيديو (`system.mp4`) بيتحط **بين نهاية Strategy وبداية pinning الـProduct Explorer** — بيعمل استراحة طبيعية.
> 3. الـProduct Explorer فيه Skip button واضح.
> 4. **يتقاس فعليًا في PHASE 12:** لو الـscroll الكلي حسّ محبوس، الـStrategy تنزل من 450vh لـ380vh.

ده بيمنع إن المستخدم يتعب من Continuous Heavy Motion.

---

## PART E — RESPONSIVE MASTER LOGIC

### Desktop design

الـReference Images تمثل الـDesktop visual composition — لكن **لا يتم ربط التنفيذ بدقة شاشة واحدة**.

**🔴 v2.0:** من 1024 لفوق، الـ`PROPORTIONAL STAGE PATTERN` (G4) بيحافظ على التكوين **بدون media queries**.

### أقل من 1024px (Tablet)

* Device overlaps تقل.
* Owner يقل حجمه أو يتحرك أسفل المحتوى.
* 3-column sections تتحول 2 أو 1.
* Product visuals تفضل كبيرة.
* Decorations تقل.
* Horizontal timeline تتحول condensed layout.
* Sticky durations تقل → **v2.0: الـpinning يتوقف تمامًا**.
* Typography scale يتراجع.
* Form layouts simplify.
* Pricing remains readable.

### أقل من 768px (Mobile)

* Single-column.
* Headline ≈ **46px** عند 768 وأقل تحتها.
* Body **17px**.
* Gutter **22px**.
* Buttons Full-width أو قريب منه.
* Cards stacked.
* Operation Flow vertical.
* Pricing stacked.
* Form single column.
* No desktop overlap.
* **No long sticky scroll.**
* **No horizontal page scroll.**
* No tiny Product Screens (≥ 280px عرض).
* No crowding from Owner visual.
* Decorative layers reduced.

> **Reference is recomposed, not shrunk.**

---

## PART F — RESPONSIVE & RTL MATRIX

### F.1 مصفوفة الاختبار الإلزامية

| Mode | Viewport | Arabic RTL | English LTR |
|---|---|---|---|
| Narrow mobile | 360 × 740 | ☐ | ☐ |
| Large mobile | 430 × 932 | ☐ | ☐ |
| Tablet | 834 × 1194 | ☐ | ☐ |
| Small desktop | 1280 × 800 | ☐ | ☐ |
| Desktop | 1440 × 900 | ☐ | ☐ |
| Large desktop | 1672 × 941 | ☐ | ☐ |

**🔴 v2.0:** ده مش review يدوي — ده `tests/visual.spec.ts` بيطلع **12 لقطة لكل section** ويقارنها بالـbaseline.

### F.2 حالات إضافية لازم تتراجع

```
☐ Long headings
☐ Long FAQ questions
☐ Large pricing labels
☐ Form errors (كل الحقول غلط في نفس الوقت)
☐ Product screenshot crops
☐ Reduced motion
☐ Keyboard-only navigation (كل الصفحة بالـTab)
☐ Premium Scroll start / end positions
☐ Sticky behavior
☐ Backward scroll behavior
☐ Fast-scroll behavior (scroll لآخر الصفحة فجأة)
☐ Resize during Scroll Story
☐ RTL direction inside pinned stories
☐ LTR direction inside pinned stories
☐ Mobile fallback for all Premium Scroll Sections
☐ Reference-derived visual assets on mobile
☐ ChatGPT Image assets crop correctly
☐ No generated visual introduces horizontal overflow
☐ No Product UI is mirrored accidentally
☐ Hero RTL visual variant
☐ Hero LTR visual variant
☐ Problem direction
☐ Strategy direction
☐ Product annotation direction
☐ Operation Flow direction
☐ Setup Work Order direction
☐ Final CTA composition
☐ Footer direction
```

**🔴 حالات v2.0 الإضافية:**

```
☐ Short viewport (1280 × 620) — الـpinning لازم يتلغي
☐ Zoom 200% — مفيش horizontal scroll ومفيش نص مقصوص
☐ الصفحة بدون JavaScript — كل المحتوى مقروء والفورم شغّال
☐ الصفحة بدون صور — الـalt texts منطقية
☐ prefers-reduced-motion على الـ3 أقسام Premium
☐ Screen reader pass على الـ3 أقسام Premium (.sr-stacked)
☐ Slow 3G — مفيش layout shift كبير
☐ الخطوط لسه بتحمّل — الـfallback مقروء
☐ كل الـplaceholders مسجّلة ومفيش واحد في build إنتاج
```

---

## PART G — PERFORMANCE REVIEW

→ الميزانية بالأرقام في **§00.11**. القواعد الكاملة في **G18**.

### G.1 نقاط الأداء الحرجة في المشروع ده

| الخطر | السبب | الحل في v2.0 |
|---|---|---|
| **الأصول الثقيلة** | 12 owner render + 9 screenshots + ~14 artwork + فيديوهين | WebP/AVIF · srcset · lazy · `next/image` |
| **GSAP في الـbundle الأولي** | مكتبة الـscroll ~70KB gz | Dynamic import داخل `useEffect` — مش في الـinitial |
| **preload الـ7 شاشات** | v1.0 قالت preload القادمة + ممنوع preload الضخم = تعارض | **n+1 بس** + `img.decode()` |
| **1150vh من الـpinned scroll** | Strategy + Product متتاليين | قياس فعلي في PHASE 12 + skip buttons |
| **الفيديوهين** | حجم كبير | `preload="none"` + poster + IntersectionObserver |
| **الخطوط العربية** | Cairo كامل ثقيل | Subset عربي بس · woff2 · preload لوزنين |
| **Layout thrashing في الـscroll** | قراءة/كتابة DOM في نفس الـframe | `transform`/`opacity`/`clip-path` بس · GSAP بيتكفّل بالـbatching |

### G.2 قائمة التحقق

```
☐ Product screenshots optimized
☐ Decorative assets reusable
☐ No unnecessary autoplay video
☐ No heavy 3D scene
☐ Motion limited to purposeful elements
☐ Hero core message appears promptly (LCP)
☐ Mobile connection performance verified
☐ Premium Scroll avoids layout thrashing
☐ Scroll animations use transform / opacity / clip
☐ Upcoming screenshots preload responsibly (n+1)
☐ Scroll listeners efficient
☐ Smooth on realistic mid-range mobile
☐ Heavy scroll sections don't block initial render
☐ ChatGPT Image assets optimized
☐ Responsive image sizing
☐ No huge raw generation outputs shipped
☐ Enough quality for similarity, realistic performance
☐ No unnecessary preload of giant images
☐ RTL/LTR duplicate assets served conditionally
☐ Mobile receives appropriately sized assets
☐ Videos don't autoplay with audio
☐ 🔴 GSAP dynamic import مش initial bundle
☐ 🔴 Lighthouse mobile ≥ 85
☐ 🔴 LCP ≤ 2.5s على 4G مقيّد
☐ 🔴 CLS ≤ 0.10
☐ 🔴 INP ≤ 200ms
☐ 🔴 Initial JS ≤ 190KB gz
☐ 🔴 Total page ≤ 2.5MB
```

---

## PART H — FINAL DESIGN ACCEPTANCE CHECKLIST

### H.1 Brand / Direction

```
☐ Fresh Blue Neo-Brutalism visually consistent
☐ Sparkle blue family dominates
☐ Page cheerful and light
☐ Deep Navy used instead of heavy black where suitable
☐ No unapproved color declared official
☐ Premium clean product-marketing character preserved
☐ White space remains generous
☐ Random blobs avoided
☐ No generic floating SaaS cards
☐ 🔴 كل لون من tokens.css — test:tokens بيعدي
☐ 🔴 Gradients داخل الحد الرقمي (واحد/section، opacity ≤0.06، hue واحد)
☐ 🔴 كثافة الزخرفة داخل الحد (1 splash + 1 halftone + 3 sparks)
```

### H.2 Product Truth

```
☐ Product claims follow approved content
☐ Screenshots real
☐ No fake feature implied
☐ No unsupported metric displayed
☐ No unsupported setup promise
☐ No unsupported response promise
☐ No Product UI generated by ChatGPT Image
☐ No Product UI reconstructed from the Reference Image
☐ No Fake Dashboard created in code
☐ Product screenshots not mirrored for RTL
☐ Real UI remains untouched by decorative transitions
☐ 🔴 كل الـSlots المحذوفة (❌ في §0.6) اتشالت فعلًا من الـDOM
☐ 🔴 مفيش نص مرئي hardcoded — test:copy بيعدي
☐ 🔴 كل annotation في Product Explorer معتمدة
```

### H.3 UX

```
☐ Arabic feels designed, not mirrored afterward
☐ English feels intentionally designed
☐ Mobile intentionally composed
☐ Tablet intentionally composed
☐ CTA hierarchy consistent
☐ No horizontal overflow
☐ Interactive elements have complete states
☐ Premium Scroll never traps the user
☐ Heavy motion remains easy to control
☐ User can scroll backward naturally
☐ Story states remain understandable during fast scrolling
☐ Reference desktop composition does not damage smaller screens
☐ 🔴 كل CTA بيروح للمكان الصح بالـsource/plan الصح
☐ 🔴 كل رابط nav بيروح للـanchor الصح مع scroll-margin
☐ 🔴 مفيش href="#" في الصفحة كلها
☐ 🔴 Skip buttons موجودة في الـ3 أقسام Premium
```

### H.4 Accessibility

```
☐ Keyboard navigation works
☐ Focus states visible
☐ Text contrast readable
☐ Form labels clear
☐ Errors understandable
☐ Reduced-motion behavior defined
☐ Meaning not conveyed by color alone
☐ Premium Scroll Sections have non-motion reading alternatives
☐ Sticky storytelling does not prevent accessing content
☐ Informative generated assets have meaningful alternatives
☐ Decorative generated visuals treated as decorative
☐ Language switch accessible
☐ Video controls accessible
☐ FAQ uses semantic buttons
☐ 🔴 axe = 0 serious/critical على الصفحة كاملة × لغتين
☐ 🔴 CONTRAST LOCK متطبّق — مفيش أبيض على #01A2FF
☐ 🔴 h1 واحد بس · heading hierarchy منطقية
☐ 🔴 Skip link أول عنصر
☐ 🔴 الحالات المخفية في الـsticky عليها inert + aria-hidden
☐ 🔴 .sr-stacked موجودة في الـ3 أقسام Premium
☐ 🔴 الفيديوهات لها captions + transcript
☐ 🔴 Drawer: focus trap + Esc + return focus
☐ 🔴 Touch targets ≥ 44×44 على الموبايل
☐ 🔴 Zoom 200% بدون كسر
☐ 🔴 الصفحة مقروءة ومستخدَمة بدون JS
```

### H.5 Visual Quality

```
☐ Every section has its own visual role
☐ No repeated identical card grids
☐ Decorations support story
☐ Product UI readable
☐ Motion controlled
☐ Visual rhythm deliberate
☐ Premium Scroll feels smooth, heavy and premium
☐ No cheap fast pop animations inside Premium Scroll
☐ Strategy, Product and Setup scroll stories feel related but not identical
☐ Every Group compared directly against its Reference Image
☐ Overall composition as close as practical to the Reference
☐ Custom visual artwork uses ChatGPT Image where appropriate
☐ No complex visual asset replaced with cheap code approximation
☐ Reference similarity never compromises Product Truth or usability
☐ Desktop proportions close to Reference
☐ Tablet recomposition intentional
☐ Mobile recomposition intentional
☐ RTL / LTR visual composition intentional
☐ Owner remains same approved Character (12 renders، character lock)
☐ Water / Spark assets look intentional, not CSS filler
☐ 🔴 مفيش composite scene PNG — كله طبقات
☐ 🔴 مفيش placeholder في build الإنتاج — test:assets بيعدي
```

### H.6 🔴 REFERENCE DIFF SHEET — بديل «Maximum practical similarity»

المشكلة في v1.0: «أقصى تشابه عملي» **مش قابلة للقياس**، فمفيش طريقة نعرف بيها إن الجروب خلص.

**v2.0:** لكل جروب، Codex بيملّى الجدول ده بأرقام مقيسة من الـDOM:

| العنصر | المستهدف (من الـReference) | المقيس (من الـbuild) | الفرق | مقبول؟ |
|---|---|---|---|---|
| ارتفاع الهيدر | 104px | | | ±4px |
| عرض اللوجو | 256px | | | ±8px |
| عرض الحاوية | 1500px | | | ±0 |
| Gutter | 64px | | | ±0 |
| Hero — نسبة العمود الشمال | 41% | | | ±2% |
| Hero — عرض اللابتوب داخل الـstage | 72% | | | ±2% |
| Hero — عرض الموبايل | 18% | | | ±2% |
| Hero — ارتفاع الـOwner | 95% | | | ±3% |
| Problem — نسب المناطق | 35/28/37 | | | ±3% |
| What Is — نسب الأعمدة | 71/29 | | | ±3% |
| Who For — نسب الأعمدة | 35/65 | | | ±3% |
| Strategy — قطر الـnode | 144px | | | ±6px |
| Product — نسب المناطق | 22/58/20 | | | ±3% |
| Setup — نسب المناطق | 38/43/19 | | | ±3% |
| Pricing — عمود الـOwner | 23% | | | ±3% |
| FAQ — نسب الأعمدة | 33/62 | | | ±3% |
| FAQ — ارتفاع الصف المقفول | 56px | | | ±4px |
| Form — نسب المناطق | 30/47/23 | | | ±3% |
| Final CTA — margin خارجي | 64px | | | ±4px |
| ارتفاع الأزرار | 56px | | | ±0 |
| حجم الـh1 عند 1500 | 72px | | | ±2px |
| حجم الـh2 عند 1500 | 58px | | | ±2px |

**سكريبت القياس:**

```js
// scripts/measure-reference.mjs
// بيفتح الصفحة على 1672×941 ويطبع القيم الفعلية من getBoundingClientRect
// النتيجة بتتحفظ في docs/reference-diff/<group>.json
```

> ده بيحول «التشابه البصري» من رأي لـ**رقم**. وCodex يقدر يصحح نفسه من غير ما تراجع بعينك كل مرة.

---

## PART I — EXECUTION ORDER

### PHASE −1 — GROUP 00 (جديد v2.0)

```
☐ إنشاء الريبو + folder structure
☐ Next.js 15 + TS + Tailwind v4 setup
☐ AGENTS.md
☐ PROJECT_STATE.md
☐ tokens.css (بدون ranges)
☐ content/copy.ar.json
☐ content/copy.en.json أو تفعيل BLK-04
☐ content/assets.manifest.json
☐ content/cta.registry.json
☐ Asset.tsx + placeholders
☐ Playwright + axe + scripts
☐ Supabase table + Server Action
☐ Fonts self-hosted
☐ npm run verify يعدّي على صفحة فاضية
☐ Approve GROUP 00
```

### PHASE 0 — BASE / GROUP 01

```
☐ Confirm visual direction
☐ Lock marketing color roles
☐ Lock typography scale
☐ Lock borders / shadows
☐ Lock buttons / cards / stickers
☐ Lock illustration direction
☐ Lock screenshot treatment
☐ Lock grid / spacing / responsive rules
☐ Lock RTL behavior
☐ Lock LTR behavior
☐ Lock bilingual translation behavior
☐ Lock Desktop / Tablet / Mobile behavior
☐ Lock directional asset behavior
☐ Lock motion language
☐ Lock Premium Scroll language
☐ Lock scroll weight / easing behavior
☐ Lock sticky / pinned interaction rules
☐ Lock mobile Premium Scroll fallback
☐ Lock reduced-motion Scroll fallback
☐ Lock Reference Image workflow
☐ Lock ChatGPT Image asset-production rule
☐ Lock Code / AI Visual / Product Screenshot classification
☐ Lock Reference similarity QA (Diff Sheet)
☐ Lock reverse-engineered design measurements
☐ Lock Owner asset system (12 renders)
☐ Build /styleguide
☐ Approve Base
```

### PHASE 1 — HEADER + HERO

#### GROUP 02 — HEADER
```
☐ Reference Image analysis
☐ Header structure
☐ Navigation + anchor map
☐ CTA (cta-header)
☐ Language switch
☐ Mobile drawer (focus trap / Esc / scroll lock)
☐ Sticky behavior (IntersectionObserver)
☐ RTL / LTR
☐ Desktop / Tablet / Mobile
☐ Build · QA · verify · Approve
```

#### GROUP 03 — HERO
```
☐ Final Copy
☐ Select Overview screenshot
☐ Select phone screenshot
☐ Analyze Reference Image
☐ Generate ChatGPT Image assets
☐ Create owner-hero RTL / LTR variants
☐ Brief · Wireframe
☐ Build proportional Stage + layers
☐ Visual design
☐ Reference Diff Sheet
☐ SLOT-01 in / SLOT-02 out
☐ Mobile / RTL · Mobile / LTR
☐ Motion (LCP-safe)
☐ Build · QA · verify · Approve
```

### PHASE 2 — PROBLEM / GROUP 04

```
☐ Lock visual metaphor
☐ Analyze Reference Image
☐ Generate ChatGPT Image artwork (owner + 6 props عربي + scribble)
☐ Wireframe
☐ Build chaos-stage بنسب
☐ Editorial visual design
☐ Reference Diff Sheet
☐ Mobile simplification (3 props)
☐ RTL / LTR
☐ Build · QA · verify · Approve
```

### PHASE 3 — WHAT IS + WHO IS IT FOR / GROUPS 05–06

```
☐ Final audience positioning
☐ Analyze References
☐ Generate owner-presenting RTL/LTR + owner-standing-confident
☐ Wireframe
☐ 2-side product explanation
☐ Business pillars (SLOT-03)
☐ Audience qualification block (9 rows)
☐ Audience tiles (SLOT-04)
☐ Reference Diff Sheet
☐ Mobile / RTL · Mobile / LTR · Tablet
☐ Build · QA · verify · Approve
```

### PHASE 4 — STRATEGY BLUEPRINT / GROUP 07

```
☐ Lock five strategies
☐ Analyze Reference Image
☐ Classify visual assets
☐ Generate blueprint / washbay / car assets
☐ Information structure
☐ Desktop blueprint
☐ Reference Diff Sheet
☐ Mobile vertical alternative
☐ Motion
☐ Define Premium Scroll story states (450vh / 6 states)
☐ Define sticky blueprint composition
☐ Define Strategy 01 → 05 transition pacing
☐ Define RTL / LTR blueprint movement
☐ Define slow / heavy easing behavior
☐ Define reduced-motion alternative
☐ Build .sr-stacked + skip button
☐ Test backward / fast / resize / short viewport
☐ Add Strategy Video + captions
☐ Build · QA · verify · Approve
```

### PHASE 5 — REAL SYSTEM / GROUP 08

```
☐ Select 7 real screenshots
☐ Analyze Reference Image
☐ Map strategy to product areas
☐ Approve 7 annotations (SLOT-05)
☐ SLOT-06 out → summary strip
☐ Product explorer wireframe
☐ Visual design
☐ Reference Diff Sheet
☐ Hotspots / annotations
☐ Arabic / English Product Explorer
☐ Mobile alternative (7 stacked cards)
☐ Motion
☐ Define Sticky Product Stage
☐ Define 7 scroll states (700vh)
☐ Define screen transition method
☐ Define preload behavior (n+1 + decode)
☐ Define copy / screen synchronization
☐ Define backward-scroll transitions
☐ Define RTL / LTR transition direction
☐ Define mobile simplified Scroll Story
☐ Define reduced-motion stacked version
☐ Build .sr-stacked + skip button
☐ Performance test product transitions
☐ Verify all screens are real
☐ Add System Explanation Video + captions
☐ Build · QA · verify · Approve
```

### PHASE 6 — OPERATION FLOW / GROUP 09

```
☐ Confirm 8-step journey
☐ Analyze Reference Image
☐ Generate route + car assets
☐ RTL / LTR route design
☐ Reference Diff Sheet
☐ Mobile vertical route
☐ Motion (stroke-dashoffset)
☐ Build · QA · verify · Approve
```

### PHASE 7 — SETUP / GROUP 10

```
☐ Confirm actual setup process
☐ Analyze Reference Image
☐ Generate work-order + stamp + owner assets
☐ Select screen-setup-desktop
☐ SLOT-07 out · SLOT-11 = «تمت المراجعة»
☐ Wireframe
☐ Work-order visual design
☐ Reference Diff Sheet
☐ Mobile / RTL · English / LTR
☐ Define Premium Setup Scroll Story (420vh / 6 states)
☐ Define Work Order sticky composition
☐ Define Step 01 → 05 progress behavior
☐ Define real setup-screen usage
☐ Define Check / Stamp motion (no bounce)
☐ Define mobile vertical fallback
☐ Define reduced-motion alternative
☐ Build .sr-stacked + skip button
☐ Test backward / fast / resize / short viewport
☐ Build · QA · verify · Approve
```

### PHASE 8 — PRICING + TRIAL / GROUPS 11–12

```
☐ Confirm packages
☐ Confirm commercial rules
☐ Confirm expansion price (BLK-05)
☐ Confirm «600 عربية» unit (BLK-05b)
☐ Analyze References
☐ Generate owner-relaxed + owner-hand-on-card
☐ Wireframe
☐ Pricing visual design (نسب مش px)
☐ CTA prefill wiring
☐ Trial strip (SLOT-08)
☐ Reference Diff Sheet
☐ Mobile / RTL · Mobile / LTR
☐ Build · QA · verify · Approve
```

### PHASE 9 — FAQ / GROUP 13

```
☐ Confirm final questions / answers (11)
☐ Analyze Reference Image
☐ Accordion design (button/aria-expanded)
☐ All closed by default (D-18)
☐ SLOT-10 out
☐ Reference Diff Sheet
☐ Arabic / English / Mobile / Keyboard / Reduced motion
☐ Build · QA · verify · Approve
```

### PHASE 10 — APPLICATION FORM / GROUP 14

```
☐ Confirm qualification fields
☐ Confirm real follow-up process
☐ Analyze Reference Image
☐ Supabase + Server Action + Zod (BLK-10)
☐ Error copy approved
☐ SLOT-09 in · Success preview out
☐ Wireframe
☐ Visual design
☐ Reference Diff Sheet
☐ Validation / Success / Failure states
☐ Mobile / RTL · Mobile / LTR
☐ Phone direction
☐ Test without JS
☐ Build · QA · verify · Approve
```

### PHASE 11 — FINAL CTA + FOOTER / GROUPS 15–16

```
☐ Analyze References
☐ Generate closing artwork + waves + owner crop
☐ Final CTA design
☐ Apply CONTRAST LOCK (navy on blue)
☐ Verify no sticky under overflow:hidden panel
☐ WhatsApp action (BLK-06 — disabled لحد التسليم)
☐ Footer links (anchor map)
☐ Legal/privacy links (BLK-09)
☐ Language behavior
☐ Dynamic year
☐ Social-link validation
☐ Reference Diff Sheet
☐ Build · QA · verify · Approve
```

### PHASE 12 — FULL PAGE POLISH & RELEASE

```
☐ Section transitions
☐ Global spacing review
☐ Visual rhythm review
☐ Full responsive pass (12 combos)
☐ Narrow-mobile pass
☐ Large-mobile pass
☐ Tablet pass
☐ Desktop pass
☐ RTL pass
☐ LTR pass
☐ Bilingual line-break review
☐ Accessibility pass (axe + keyboard + SR)
☐ Performance review (Lighthouse + budget)
☐ Content review
☐ Product-truth review
☐ SEO metadata + hreflang + OG
☐ Premium Scroll pacing review
☐ Premium Scroll continuity review
☐ Sticky section release-point review
☐ Backward-scroll review
☐ Fast-scroll review
☐ Mid-range mobile performance test
☐ Reduced-motion full-page review
☐ Reference Diff Sheet لكل الجروبات
☐ Asset-quality review
☐ RTL/LTR asset-variant review
☐ Asset optimization review
☐ Confirm no complex visual art substituted by code
☐ Confirm every Product Screen remains real
☐ Confirm no Product Screen flipped for RTL
☐ 🔴 قياس إرهاق الـscroll الكلي (Strategy+Product متتاليين)
☐ 🔴 كل الـBlockers مقفولة أو موثّقة
☐ 🔴 مفيش placeholder في الإنتاج
☐ 🔴 404 page + favicon + OG image + robots + sitemap
☐ 🔴 Privacy policy page لو الفورم بيجمع بيانات شخصية
☐ 🔴 Analytics شغّالة
☐ Final approval
```

---

## PART J — CHANGE CONTROL

### J.1 Once a Section Is Approved

* Do not redesign it casually while working on later sections.
* Shared Base changes must be evaluated across all approved sections.
* لو ظهر Base Problem → نصلح Shared Rule الأول → بعدها نراجع Sections المتأثرة.
* **ممنوع** إدخال Color / Shadow / Border / Card / Illustration language جديدة لقسم واحد بدون سبب واضح.
* **ممنوع** إدخال Scroll Interaction جديدة خارج الـPremium Scroll Sections المحددة بدون مراجعة Base.
* أي تغيير في Scroll Weight / Easing / Sticky behavior = **Shared Motion-System Change** ويتراجع على الأقسام الثلاثة.
* Reference Image الخاصة بجروب لاحق **لا تستخدم** كسبب لإعادة تصميم جروب معتمد.
* لو Reference جديدة تتطلب تغيير Shared Base → يُقيَّم كـ**Base Change** أولًا.
* **ممنوع** استبدال Custom Asset معتمد برسمة CSS لسهولة التنفيذ.
* أي تغيير في RTL/LTR asset strategy = **Shared Layout Change**.
* أي تغيير في global responsive breakpoints يتراجع على كل Approved Groups.
* أي تعديل عشان Mobile لازم مايكسرش Desktop أو العكس.
* English adaptation لا يسمح بتغيير Product / Commercial meaning.

### J.2 🔴 آلية Change Request — v2.0

v1.0 كانت بتقول «ممنوع» لكن مفيش آلية. في v2.0:

**أي تعديل على ملف مقفول (§0.4) لازم يمر بالخطوات دي:**

1. Codex بيكتب الطلب في `PROJECT_STATE.md → ## Pending Changes`:
   ```
   | التاريخ | الملف | التغيير المطلوب | السبب | الجروبات المتأثرة |
   ```
2. **بيقف** — ما ينفذش.
3. بعد الموافقة، ينفذ + يسجل في `## Change Log`.
4. يعيد تشغيل `npm run verify` **وvisual tests على كل الجروبات المتأثرة**.
5. يحدّث الـbaseline screenshots لو التغيير مقصود.

**استثناء:** إصلاح bug مالوش أثر بصري (typo في aria-label مثلًا) ما يحتاجش Change Request — بيتسجل في الـChange Log بس.

### J.3 Content vs Design Ownership

الـCopy الموجود هنا هو **Source of Truth** للرسائل التسويقية الحالية.

**Design مهمته:** Organize · Prioritize · Visualize · Support.

**مش مهمته يغير:** Product claims · Pricing · Onboarding promises · Trial rules · Commercial terms.

أي تعديل Copy جوه Design لازم يرجع للمراجعة قبل الاعتماد.

> **Reference Image لا تملك صلاحية تغيير الـCopy.**
> **English Mockup Copy لا يملك صلاحية تغيير Approved Arabic meaning.**

---

## PART K — DECISION MATRIX

| Decision | Must Be Locked Before |
|---|---|
| **🔴 Tech stack** | **GROUP 00** |
| **🔴 tokens.css كامل** | **GROUP 01** |
| **🔴 قرار البايلنجوال (A أو B)** | **GROUP 02** |
| **🔴 assets.manifest.json** | **GROUP 02** |
| **🔴 cta.registry.json** | **GROUP 02** |
| **🔴 UNAPPROVED SLOT REGISTRY** | **GROUP 03** |
| Final landing palette | Hero visual design |
| Hero message / CTA | Hero |
| Real Hero screenshots | Hero |
| Hero RTL / LTR composition | Hero |
| Problem visual metaphor | Problem |
| Audience positioning | What is Sparkle |
| Strategy framework | Strategy Blueprint |
| Premium Strategy Scroll behavior | Strategy Blueprint |
| RTL / LTR Blueprint behavior | Strategy Blueprint |
| Real product screenshots (7) | Product Explorer |
| Premium Product Explorer Scroll behavior | Product Explorer |
| Product Explorer RTL / LTR composition | Product Explorer |
| **🔴 الـ7 annotations المعتمدة** | **Product Explorer** |
| Real onboarding / setup flow | Setup |
| Premium Setup Scroll behavior | Setup |
| Packages / pricing | Pricing |
| Expansion price | Pricing publication |
| **🔴 وحدة «600 عربية»** | **Pricing publication** |
| Recommended plan | Pricing |
| FAQ content | FAQ |
| Form fields | Application Form |
| **🔴 Form backend + error copy** | **Application Form** |
| Follow-up behavior | Application Form |
| **🔴 رقم WhatsApp** | **Final CTA publication** |
| Legal / privacy / contact links | Footer |
| Reference Image for each Group | Before that Group visual design |
| Asset list per group | Before that Group visual polish |
| Directional asset requirements | Before that Group visual polish |
| Real Product Screen mapping | Before Product-based Group build |
| **🔴 Video files + captions** | **Groups 07 / 08 publication** |

---

## PART L — DEFINITION OF DONE

الـLanding Page تعتبر مكتملة **فقط** لما:

### L.1 النظام

* The Base system is consistent across the full page.
* Each section passes its individual Approval Gate.
* The end-to-end story feels intentional.
* No section is turned into a generic Card Grid.
* The page exists as one long Landing Page, not 15 separate pages.
* الـpage remains cheerful, light, blue, and distinctive.
* Neo-Brutalist expression does not compromise conversion.

### L.2 اللغة والاتجاه

* Arabic RTL is fully reviewed.
* English LTR remains coherent — **أو** `/en` معطّل رسميًا بقرار BLK-04 موثّق.
* English is not merely a mirrored Arabic DOM.
* Product Screens are never horizontally flipped for RTL.
* Directional artwork uses RTL / LTR variants when required.

### L.3 الأجهزة

* Mobile is intentionally designed.
* Tablet is intentionally designed.
* Desktop composition remains close to the Reference (Diff Sheet).
* Mobile is a deliberate recomposition.
* Mobile versions remain easy to use without depending on desktop pinning.

### L.4 المنتج والتجارة

* Product screenshots are real.
* Product claims are truthful.
* Pricing is approved.
* Setup claims are approved.
* Product UI is never generated with AI.
* Product UI is never faked using code.
* Final application journey is clear.

### L.5 الحركة

* Premium Scroll is limited to the approved storytelling sections.
* Strategy Scroll feels like a Blueprint being built.
* Product Scroll feels like a real system being explored.
* Setup Scroll feels like a professional implementation process.
* Scroll motion feels smooth, heavy and controlled.
* No Premium Scroll animation feels fast, floaty or lightweight.
* Reduced-motion mode preserves the full narrative.

### L.6 الأصول

* Every Group implemented using its Reference Image as primary visual reference.
* Each Group reaches maximum practical visual similarity without breaking product truth or UX.
* Custom artwork created with ChatGPT Image.
* Complex illustrations not replaced by code-generated approximations.
* Generated assets optimized for production.
* Code used for structure, layout, responsive behavior, interaction and motion.

### L.7 🔴 معايير v2.0 القابلة للقياس

```
☐ npm run verify بيعدي على الصفحة الكاملة
☐ 12 لقطة visual لكل section مطابقة للـbaseline
☐ axe = 0 serious/critical × لغتين
☐ Reference Diff Sheet كل القيم داخل التسامح
☐ test:tokens بيعدي — صفر قيم hardcoded
☐ test:copy بيعدي — صفر نصوص hardcoded
☐ test:assets بيعدي — صفر placeholders
☐ test:overflow بيعدي — صفر تسريب أفقي × 12 combo
☐ Lighthouse mobile: Perf ≥85 · A11y ≥95
☐ LCP ≤2.5s · CLS ≤0.10 · INP ≤200ms
☐ Initial JS ≤190KB gz
☐ الصفحة شغالة ومقروءة بدون JavaScript
☐ الصفحة شغالة على zoom 200%
☐ كل الـBlockers مقفولة أو موثّقة كقرار
☐ PROJECT_STATE.md محدّث بكل الجروبات والانحرافات
```

---
## PART M — COMMERCIAL / COPY NOTES THAT MUST NOT BE LOST

### M.1 Main CTA Rule

أقوى CTA أساسي للصفحة:

> **احجز مراجعة تشغيل لفروعك**

أو في الأماكن الأقصر:

> **احجز مراجعة تشغيل**

**ما نخليش «ابدأ تجربة مجانية» هو الـMain Selling CTA.**

**🔴 v2.0:** كل صيغ الـCTA وسلوكها في `cta.registry.json` (§00.7). ممنوع صيغة خارج الجدول.

---

### M.2 Trial Positioning Rule

التجربة المجانية لمدة 14 يوم تظهر **بعد شرح القيمة**.

**وظيفتها:** تقليل المخاطرة.

**مش:** تعريف Sparkle Auto أو جذب Free Users من أول الصفحة.

---

### M.3 Expansion Pricing Rule

**ممنوع اختراع سعر لباقة التوسع.**

يظهر: «يُضاف السعر المعتمد قبل النشر» لحد ما السعر التجاري النهائي يتعتمد. *(BLK-05)*

**🔴 v2.0:** النص ده بيظهر بنفس الـtypography scale بتاعة السعر عشان الكارت ما يبقاش ناقص بصريًا.

---

### M.4 Product Screenshot Rule

الموبايل واللابتوب وكل Product Mockup: Marketing Frame ممكن يكون expressive — **لكن الـUI نفسه Real Sparkle Auto UI**.

وبالتحديد في الـHero:

* الموبايل يعرض **الحجوزات**.
* اللابتوب يعرض **الـOverview**.

---

### M.5 Premium Scroll Product Truth Rule

حتى أثناء الـScroll Animation:

* **ممنوع** تغيير محتوى الـReal UI لعمل Transition أجمل.
* **ممنوع** تحريك عناصر داخل Screenshot كأنها Interactive لو المنتج الحقيقي لا يعمل كده.
* **ممنوع** تحويل Screenshot ثابتة إلى Fake Live Dashboard.
* أي Animation فوق الـProduct UI تكون **Marketing Annotation واضحة ومفصولة بصريًا** عن المنتج الحقيقي.
* **تبديل Screens مسموح.**
* **تغيير أو اختراع الوظائف داخل Screen غير مسموح.**

**🔴 v2.0:** الـannotations بتتحط في طبقة `--z-sticker` **خارج** إطار الـScreenFrame، وبخلفية بيضا بحد navy — عشان تبان إنها marketing layer مش جزء من الـUI.

---

### M.6 Reference Image Product Truth Rule

حتى لو الـReference Image فيها Dashboard شكله أجمل أو مختلف:

* لا يتم نسخه.
* لا يتم توليده بـChatGPT Image.
* لا يتم إعادة بنائه بـHTML/CSS.
* لا يتم تغيير Sparkle Auto UI عشان يطابقه.

**اللي يتنقل من الـReference:** Device placement · Frame style · Overall composition · Scale · Crop philosophy · Surrounding visual treatment · Spacing · Marketing annotations.

**لكن: Product Screen = Real Sparkle Auto.**

---

### M.7 ChatGPT Image Production Rule

**يستخدم لإنتاج:** Custom visual assets · Marketing illustrations · Characters · Cars · Scene art · Decorative compositions · Background artwork · Visual metaphors.

**ولا يستخدم لإنتاج:** Sparkle Auto dashboard · Fake product metrics · Fake customer app UI · Fake system screens · Commercial claims embedded visually بشكل غير معتمد.

---

### M.8 Bilingual Product Truth Rule

تغيير اللغة **لا يسمح بتغيير المنتج**.

Arabic وEnglish يستخدموا نفس Real Product Screens المناسبة للسياق.

لو الـProduct نفسه لديه Language-specific UI → يستخدم Screenshot الحقيقي للغة الفعلية لو متوفر.

**ممنوع:** ترجمة Screenshot بالـAI · تعديل نص UI داخل الصورة يدويًا · قلب Screenshot · تزوير English Product UI لو المنتج لا يحتويه.

---

## PART N — SEO & RELEASE LAYER

### N.1 Arabic SEO — الأساسي

**SEO Title**

> Sparkle Auto | نظام إدارة مغاسل السيارات في مصر

**Meta Description**

> نظّم حجوزات وتشغيل وفريق ومالية ومخزون وعملاء مغسلتك من مكان واحد. تابع فروعك واعرف اللي بيحصل من غير مكالمات وتقارير متفرقة.

### N.2 Bilingual SEO Rule

**Arabic:** هو الـPrimary SEO version للسوق المصري.

**English:** يتم تجهيز English title · English meta description · `hreflang` / language routing · Correct `lang` و `dir` attributes.

> **No automatic machine-generated metadata published without review.**

### N.3 🔴 قائمة الإصدار التقنية — v2.0

v1.0 كانت بتذكر الـSEO بس. القائمة الكاملة المطلوبة قبل النشر:

```
☐ <title> + <meta description> عربي معتمد
☐ <html lang="ar" dir="rtl"> صح
☐ hreflang: ar / en / x-default  (لو /en مفعّل)
☐ canonical URL
☐ Open Graph: og:title / og:description / og:image / og:locale
☐ Twitter card
☐ og-image.png — 1200×630، عليه الـheadline والـlogo
☐ favicon (ico + svg + apple-touch-icon)
☐ manifest.json + theme-color
☐ robots.txt
☐ sitemap.xml
☐ 404 page — بنفس الـBase
☐ JSON-LD: Organization + SoftwareApplication + FAQPage (من الـ11 سؤال)
☐ Privacy Policy page — إلزامية لأن الفورم بيجمع بيانات شخصية (BLK-09)
☐ Terms page لو مطلوبة تجاريًا
☐ Analytics (Vercel Analytics + Speed Insights)
☐ Error monitoring
☐ Custom domain + HTTPS
☐ Security headers (CSP / X-Frame-Options / Referrer-Policy)
```

> **🔴 ملاحظة قانونية:** الفورم بيجمع اسم + موبايل + بيانات نشاط تجاري. الـcopy فيه سطر خصوصية، لكن **مفيش صفحة سياسة خصوصية**. ده مطلوب قبل النشر ومسجّل في BLK-09.

---

## PART O — أهم القواعد اللي لازم Codex يفهمها

### O.1 العشرة الأصلية (من v1.0)

1. النص لازم يبقى **HTML حقيقي**، مش مكتوب جوه الصور.
2. الـOwner يبقى **PNG / WebP / transparent render asset** — Codex ما يرسموش.
3. اللابتوب والموبايل يستخدموا **real Sparkle Auto screenshots**. بعض الـUI في الصور المتولدة مجرد visual placeholder وليس Product Truth.
4. الـwater splashes والـsparks **Assets** — مش random CSS blobs.
5. **ما يستخدمش Card Grid في كل Section.** Strategy ≠ Pricing ≠ FAQ ≠ Setup.
6. **ما يستخدمش gradients كـSaaS cliché.** اللون الأساسي White + Sparkle Blue + Navy.
7. **ما يعملش animation لكل عنصر.** الحركة لازم تخدم القصة.
8. **Arabic وEnglish مش مجرد Mirror لبعض.**
9. **Mobile مش Desktop صغير.**
10. **Directional artwork ممكن يحتاج نسختين RTL / LTR.**

### O.2 🔴 العشرة الجديدة (v2.0)

11. **كل قيمة بصرية من `tokens.css`.** مفيش hex ولا px في الكومبوننتس.
12. **كل نص من `copy.<lang>.json`.** مفيش نص مرئي في JSX.
13. **مفيش composite scene PNG.** كل مشهد طبقات منفصلة (G3).
14. **المشاهد المركّبة داخل Stage بنسبة أبعاد ثابتة** ونِسب مئوية (G4).
15. **ممنوع `overflow: hidden` على أي جد لعنصر sticky** — استخدم `overflow-x: clip` على القسم (G5).
16. **`100dvh` مش `100vh`** في الـsticky canvases.
17. **الحالات المخفية في الـsticky عليها `inert` + `aria-hidden`** + نسخة `.sr-stacked`.
18. **ممنوع أبيض على `#01A2FF`.** النص على الأزرق = navy (CONTRAST LOCK).
19. **الـasset الناقص = placeholder مسجّل، مش رسمة CSS ومش توقف.**
20. **قبل ما تقول خلصت: `npm run verify` لازم يعدّي.**

---

## PART P — MASTER CODEX BUILD INSTRUCTION

> النص ده يتحط في أول `docs/00-contract.md`.

```
Build Sparkle Auto as ONE long responsive landing page, not separate pages.

The supplied 15 reference designs represent individual sections of the same page.

STACK (locked):
Next.js 15 App Router · TypeScript strict · Tailwind v4 · GSAP ScrollTrigger
Route: /[lang] with ar (default) and en. No routes for sections.

TARGET STYLE:
Fresh Blue Neo-Brutalism + premium clean product marketing.

COLORS (from tokens.css only):
#01A2FF Sparkle Blue   — fill and graphics, NEVER text on white
#0077CC Blue Text      — blue words inside headings (4.66:1)
#0C264B Dark Blue      — headings
#03132E Deep Navy      — borders, hard shadows, ink, AND text on blue (6.70:1)
#91B1D8 Soft Blue      — borders and dividers only, NEVER text on white (2.21:1)
#FFFFFF White
#F5FAFF Cloud · #E9F3FD Ice · #DCEBFA Pale

The site stays mostly white and light, with two strong blue moments only:
Final CTA panel and Footer.

CORE VISUAL RULES:
- large bold typography            - disciplined grid
- generous whitespace              - strong rectangular cards
- 20px card radius, 7px buttons    - deep navy borders
- hard offset shadows              - restrained water/splash graphics
- small functional Spark motifs
- no glassmorphism                 - no rainbow gradients
- no generic SaaS floating cards   - no random decorative blobs

MEASUREMENTS (single values, no ranges — see tokens.css):
container min(1500px, 100% - 128px) · gutter 64/40/22 · section padding 88/72/56
header 104/68 · buttons 56px · h1 72px (fluid from 46) · h2 58px (from 38)
body 18px (from 16) · label 16px

ASSETS:
- Owner: 12 approved renders in assets.manifest.json. Never draw the character.
- Custom artwork: ChatGPT Image only. Never CSS/SVG recreations.
- Missing asset → <Asset> placeholder with the same aspect ratio + TODO(BLK-xx).
  Never invent, never draw, never stop.
- All product screenshots must be real Sparkle Auto screenshots.
  Do not invent dashboards, metrics, notifications, or functionality.
- No composite scene PNGs. Every scene is separate transparent layers
  positioned with CSS logical properties.

LAYOUT:
- Composed scenes live inside a Stage with a fixed aspect-ratio and
  percentage/cqw-positioned layers. This preserves the reference composition
  from 1024px to 1920px with no media queries.
- Real breakpoints start at tablet (1023) and mobile (767).

SECTION ORDER:
Header · Hero · Problem · What Is Sparkle Auto · Who Is It For ·
Operations Strategy · Real System Product Explorer · Complete Operation Flow ·
Setup & Preparation · Pricing · 14-Day Trial · FAQ · Application Form ·
Final CTA · Footer

PREMIUM SCROLL — three sections only:
Operations Strategy (450vh) · Product Explorer (700vh) · Setup (420vh)
Everything else: normal scrolling with restrained entrance motion.

Premium scroll motion must feel: slow · weighted · deliberate · stable · controlled
Never: fast · bouncy · springy · floaty · scroll-trapping
Big elements move 10–28px, not 300px. Settle 700–1200ms. Ease [0.22,1,0.36,1].

STICKY LAW:
Never put overflow hidden/auto/scroll on any ancestor of a sticky element.
Use overflow-x: clip on the section itself. Use 100dvh, not 100vh.
Pinning is disabled below 1024px and when viewport height < 620px.
Hidden story states get aria-hidden + inert, plus an .sr-stacked version.

MOBILE:
Intentionally recomposed into a single-column experience.
Do not simply shrink desktop overlaps.

LANGUAGE:
Arabic / RTL is the primary design language.
English / LTR is a real secondary composition, not a direction flip.
Use CSS logical properties everywhere. Never scaleX(-1) anything with text,
UI, a logo, or the character. Never flip a real product screenshot.

TEXT:
All visible text is real HTML read from content/copy.<lang>.json.
Images are visual assets only. No hardcoded strings in JSX.

MANDATORY:
Accessibility (WCAG 2.2 AA) and prefers-reduced-motion.
Run `npm run verify` before declaring any group complete.
```

---

## PART Q — FULL PAGE STORY CHECK

### Q.1 End-to-End Narrative

الصفحة لازم تحس إنها **قصة واحدة**:

| # | Section | الرسالة |
|---|---|---|
| 1 | Hero | Sparkle Auto يديك سيطرة على مغسلتك حتى لو بعيد. |
| 2 | Problem | سبب المشكلة إن التشغيل معتمد عليك بدل System. |
| 3 | Definition | ده Sparkle Auto ودي مكوناته. |
| 4 | Audience | ده معمول لمين وإمتى قيمته تبقى أكبر. |
| 5 | Strategy | دي طريقة تشغيل مغسلة قوية. |
| 6 | System | وده إزاي الاستراتيجيات موجودة فعلًا داخل Sparkle Auto. |
| 7 | Daily Flow | وده إزاي اليوم كله يبقى Connected. |
| 8 | Setup | وده إزاي بنجهزه على مغسلتك. |
| 9 | Pricing | وده اختيار الباقة المناسب. |
| 10 | Trial | لو محتاج تقلل المخاطرة، دي تجربة حقيقية بعد مراجعة التشغيل. |
| 11 | FAQ | دي إجابات اعتراضاتك. |
| 12 | Application | قولنا تشغيلك عامل إزاي. |
| 13 | Final CTA | خلينا نراجع التشغيل سوا. |

> **لو Section مش بتحرك القصة لقدام: تتبسط، تتدمج، أو تتشال.**

### Q.2 Scroll Narrative Continuity

الـPremium Scroll Sections لازم يكون بينهم **Narrative Connection**:

* **Strategy Scroll ينتهي بفكرة:** دي طريقة التشغيل.
* **Product Scroll يبدأ بفكرة:** وده مكانها الحقيقي جوه Sparkle Auto.
* **Product Scroll ينتهي بفكرة:** كل الأجزاء دي متصلة.
* **Setup Scroll يأتي لاحقًا بفكرة:** وإحنا مش هنسيبك تركب الكلام ده لوحدك؛ هنجهزه معاك.

بالتالي الـScroll نفسه يخدم **رحلة الإقناع** — مش مجرد Visual Effect.

---

## PART R — القرارات الأساسية

* الـCTA الرئيسي: **احجز مراجعة تشغيل لفروعك**.
* الـ14 يوم تجربة تظهر **بعد شرح القيمة**، مش كعنوان البيع الأساسي.
* عدم اختراع سعر باقة التوسع؛ يوضع السعر المعتمد فقط قبل النشر.
* استخدام **شاشات Sparkle Auto الحقيقية**.
* الموبايل يعرض **الحجوزات** · اللابتوب يعرض **الـOverview**.
* كل Group يتم إرفاق Reference Image خاصة به.
* Codex يحاول تنفيذ الـSection بأعلى تشابه بصري عملي مع الصورة.
* أي Custom Visual Artwork يتم إنشاؤه باستخدام **ChatGPT Image**.
* **ممنوع** استخدام الكود كبديل رخيص لرسم الـVisual Artwork.
* الكود مسؤول عن Layout / Structure / Responsive / Interaction / Motion.
* شاشات Sparkle Auto **لا تُولّد** بـChatGPT Image · **لا تُخترع** · **لا يُعاد تصميمها**.
* **Product Screenshot = Real Product Screenshot.**
* الـ15 Reference Images تمثل Sections لنفس Landing Page.
* **Arabic / RTL هو Primary Design Version.**
* English / LTR يتم تصميمه ومراجعته بشكل مستقل.
* **Mobile لا يكون Desktop مصغر.**
* Tablet له Composition Review خاص.
* Directional artwork قد يحتاج RTL / LTR variants.
* **Product UI لا يتم قلبه** عند تغيير اتجاه اللغة.
* الـOwner يظل نفس Approved Character Asset.

#### الرسالة الأساسية للصفحة كلها

> **مش لازم تفضل في المغسلة عشان تكون مسيطر عليها.**
>
> **مغسلتك في جيبك.**

#### 🔴 قرارات v2.0 الإضافية

* **Stack مقفول:** Next.js 15 + TS + Tailwind v4 + GSAP.
* **كل قيمة بصرية من `tokens.css`** — صفر ranges.
* **كل نص من `copy.<lang>.json`** — صفر hardcoded.
* **أبيض على `#01A2FF` ممنوع** — النص على الأزرق navy.
* **مفيش composite scenes** — طبقات بس.
* **الـStages بنسبة أبعاد ثابتة** — التكوين محفوظ من 1024 لـ1920.
* **`overflow` ممنوع فوق أي sticky.**
* **الـpinning متوقف تحت 1024px** وتحت ارتفاع 620px.
* **`npm run verify` هو بوابة كل جروب** — مش «Codex فاهم».
* **الـBlockers مسجّلة بأرقام** والـplaceholders بتبان.

---

## PART S — FINAL CODEX EXECUTION ORDER

```
GROUP 00 — Repo, Stack & Execution Contract
              ↓
GROUP 01 — Project Understanding + Base Visual & Interaction System
              ↓
GROUP 02 — Header — التنقل + CTA
              ↓
GROUP 03 — Hero — الوعد الأساسي + شاشات السيستم
              ↓
GROUP 04 — المشكلة — مشاكل صاحب المغسلة اليومية
              ↓
GROUP 05 — إيه هو Sparkle Auto؟ — تعريف النظام
              ↓
GROUP 06 — مصمم لمين؟ — مين العميل المناسب
              ↓
GROUP 07 — استراتيجيات التشغيل — 5 مبادئ  [PREMIUM SCROLL 01]
              ↓
GROUP 08 — عرض السيستم الحقيقي — الشاشات  [PREMIUM SCROLL 02]
              ↓
GROUP 09 — رحلة التشغيل — من الحجز لحد قفلة اليوم
              ↓
GROUP 10 — التجهيز — إزاي بنجهز Sparkle Auto  [PREMIUM SCROLL 03]
              ↓
GROUP 11 — الأسعار — 3 باقات
              ↓
GROUP 12 — تجربة 14 يوم — بعد مراجعة التشغيل
              ↓
GROUP 13 — FAQ — الأسئلة والاعتراضات
              ↓
GROUP 14 — Form — تقديم طلب مراجعة تشغيل
              ↓
GROUP 15 — Final CTA — الإغلاق والدعوة للتواصل
              ↓
GROUP 16 — Footer — الروابط والمعلومات النهائية
              ↓
FINAL FULL-PAGE QA + SEO + RELEASE
```

---

## PART T — FINAL GLOBAL RULE

في بداية كل Group:

1. **اقرا `AGENTS.md` و `PROJECT_STATE.md` و `docs/<الجروب>.md` — بس.**
2. استلم الـReference Image واقرا الـReverse-Engineering Spec المكتوب.
3. ادرسها بدقة.
4. صنّف كل عنصر إلى:
   * **CODE**
   * **ASSET-ID** (من `assets.manifest.json`)
   * **REAL PRODUCT SCREEN** (من `assets.manifest.json`)
   * **RTL / LTR DIRECTIONAL VARIANT** عند الحاجة
5. راجع `UNAPPROVED SLOT REGISTRY` — إيه اللي يتبني وإيه اللي يتشال.
6. راجع `cta.registry.json` — كل CTA وسلوكه.
7. **لا تبدأ Visual Build قبل فهم الـReference.**
8. حاول الوصول لأقصى تشابه بصري عملي.
9. **لا تغير الـCopy.** كل نص من `copy.<lang>.json`.
10. **لا تغير Product Truth.**
11. لا تخترع Features · Metrics · Screens · Claims · أسعار.
12. **لا تستخدم CSS كبديل عن Custom Visual Artwork.**
13. الـasset الناقص = placeholder مسجّل + `TODO(BLK-xx)` — **مش رسمة ومش توقف**.
14. استخدم Screens Sparkle Auto الحقيقية لأي Product UI.
15. استخدم الكود للـLayout والـResponsive والـInteraction والـMotion.
16. **املأ Reference Diff Sheet** بالأرقام المقيسة.
17. راجع Arabic / RTL.
18. راجع English / LTR.
19. راجع Desktop · Tablet · Large Mobile · Narrow Mobile.
20. **لا تقلب Product Screens** عند تغيير اتجاه اللغة.
21. لو الـVisual composition directional، جهز النسخة المناسبة لكل لغة.
22. لا تعتبر الـReference desktop composition Layout ثابت لكل الأجهزة.
23. **شغّل `npm run verify`.**
24. **حدّث `PROJECT_STATE.md`.**

---

## القاعدة التنفيذية النهائية

```
CONTRACT FIRST.               ← GROUP 00
BASE SECOND.                  ← GROUP 01
ONE SECTION AT A TIME.

REFERENCE IMAGE + WRITTEN SPEC FIRST.
ANALYZE BEFORE BUILDING.

COPY LOCKED — from copy.<lang>.json.
TOKENS LOCKED — from tokens.css.
SLOTS DECIDED — from the Unapproved Slot Registry.

CUSTOM VISUAL ART       = CHATGPT IMAGE
MISSING ASSET           = REGISTERED PLACEHOLDER + TODO(BLK-xx)
PRODUCT UI              = REAL SPARKLE AUTO
LAYOUT + INTERACTION + MOTION = CODE

NO COMPOSITE SCENES     — LAYERS ONLY
NO OVERFLOW ABOVE STICKY
NO WHITE TEXT ON #01A2FF
NO HARDCODED VALUES OR STRINGS

ARABIC RTL   = INTENTIONALLY DESIGNED.
ENGLISH LTR  = INTENTIONALLY DESIGNED.
MOBILE       = RECOMPOSED, NOT SHRUNK.
PRODUCT SCREENS = NEVER MIRRORED.

DESIGN APPROVED.
BUILD.
REFERENCE DIFF SHEET.
RESPONSIVE QA.
RTL / LTR QA.
ACCESSIBILITY QA.
npm run verify.
UPDATE PROJECT_STATE.md.
APPROVE.
THEN MOVE TO THE NEXT SECTION.
```

---

## FINAL VISUAL RULE

> The reference image is not a loose moodboard.
> It is the primary **composition** reference for that Group — while `tokens.css` is the authority on every numeric value.
>
> Reproduce its composition, hierarchy, proportions, spacing and overall visual feeling as closely as practical, and prove it with the Reference Diff Sheet.
>
> Do not recreate complex visual artwork cheaply with code. Use ChatGPT Image for custom visual assets. When an asset is missing, use its registered placeholder — never a drawing, never a stop.
>
> Keep Sparkle Auto product screens real. The product stays truthful. The layout stays usable.
>
> Arabic RTL and English LTR must both feel intentionally designed. Desktop, tablet and mobile must preserve the same hierarchy through intentional recomposition.
>
> The visual result should feel extremely close to the supplied reference — **and it should pass `npm run verify`.**

---

## One-Line Creative Directions

**Overall**

> Sparkle Auto Landing Page = a bright, cheerful, blue Neo-Brutalist business journey that visually transforms car-wash strategy into a real operating system.

**Premium Scroll**

> Premium Scroll = slow, weighted, deliberate storytelling that lets the user watch the business strategy become a real Sparkle Auto system and then see how that system gets prepared for their own car wash.

**Reference Execution**

> Each section should visually follow its supplied reference image as closely as practical, using ChatGPT Image for custom visual artwork, real Sparkle Auto screenshots for product truth, and code only for structure, interaction, responsive layout and motion.

**Responsive / Bilingual**

> Arabic RTL and English LTR should feel like two intentionally composed versions of the same Sparkle Auto experience, while desktop, tablet and mobile preserve the same visual hierarchy without blindly mirroring or shrinking the reference layout.

**🔴 Execution Discipline (v2.0)**

> Every visual value comes from one tokens file, every string from one copy file, every asset from one manifest, and every group ships only when the verification script passes — so that a fresh Codex session, months later, builds exactly the same page.

---

## Final Build Philosophy

الموقع مايتبنيش كـ10 Screens منفصلة جنب بعض.

كل Section لازم يؤدي وظيفة محددة في رحلة الإقناع:

> **أفهم مشكلتي → أفهم الحل → أقتنع بطريقة التفكير → أشوف الدليل → أعرف التطبيق → أعرف السعر → أزيل اعتراضاتي → أقدم.**

### Final Premium Scroll Philosophy

الـPremium Scroll في Sparkle Auto **مش Decoration** — هو جزء من طريقة شرح المنتج. ويستخدم في **ثلاث لحظات فقط**:

1. **Strategy Blueprint** — عشان المستخدم يشوف طريقة تشغيل المغسلة وهي بتتبني قدامه خطوة بخطوة.
2. **Real System Product Explorer** — عشان يشوف الاستراتيجيات وهي متطبقة فعلًا داخل شاشات Sparkle Auto الحقيقية.
3. **Setup Work Order** — عشان يفهم إن Sparkle Auto مش Account بنبعتهوله؛ لكنه System بنساعده يتجهز على طريقة تشغيل مغسلته.

**القاعدة البصرية:**

> The user scrolls naturally.
> The story moves slowly.
> The visuals feel heavy.
> The product stays clear.
> **The motion never becomes the message.**

**والإحساس النهائي المطلوب:**

مش موقع سريع مليان Animations — لكن موقع **Premium**، فيه Moments محسوبة، كل Scroll فيها يحرك القصة للأمام بثقل وثقة وسلاسة.

---

## ملحق — ملخص الفروق بين v1.0 و v2.0

| المحور | v1.0 | v2.0 |
|---|---|---|
| عدد الجروبات | 16 | **17** (+ GROUP 00) |
| Tech stack | غير محدد | **مقفول** |
| القيم البصرية | ranges | **قيم مفردة في `tokens.css`** |
| النصوص | متفرقة في الوثيقة | **`copy.<lang>.json`** |
| الأصول | «تُنتج بـChatGPT Image» | **manifest + placeholder protocol** |
| النسخة الإنجليزية | مطلوبة بدون نصوص | **قرار A/B + BLK-04** |
| الفورم | حقول بدون backend | **عقد كامل: DB + Zod + states + errors** |
| قائمة الأولوية | **اتنين متعارضتين** | **واحدة قاطعة** |
| الخلفيات | **جدولين متعارضين** | **جدول واحد بالـHex** |
| Copy غير معتمد | «شيله» | **12 قرار مكتوب (Slot Registry)** |
| Contrast | غير محسوب — **فاشل في الزرار والـCTA** | **محسوب ومصحّح (CONTRAST LOCK)** |
| Premium Scroll | وصف سلوكي | **عقد تقني: مكتبة + resize + guards** |
| `overflow` ضد `sticky` | **لغم غير مكتشف** | **قانون صريح (G5)** |
| Breakpoints 1024→1672 | **غير محددة** | **Proportional Stage Pattern** |
| RTL/LTR assets | كل مشهد ×2 | **4 poses بس (Layered Scene Rule)** |
| CTAs | 8 صيغ بدون سلوك | **registry بـ12 CTA وسلوك كل واحد** |
| Nav anchors | غير محددة | **جدول كامل** |
| الفيديوهات | مذكورة | **عقد + captions + fallback** |
| الأداء | كلام | **budget بأرقام** |
| الـGates | «Codex فاهم» | **مخرجات + `npm run verify`** |
| التشابه البصري | «maximum practical» | **Reference Diff Sheet بأرقام** |
| ذاكرة Codex | مفترضة | **`AGENTS.md` + `PROJECT_STATE.md`** |
| Change control | «ممنوع» | **آلية Change Request** |
| Release | SEO بس | **قائمة إصدار كاملة + Privacy** |

---

**نهاية الوثيقة — Sparkle Auto Landing Page Master Plan v2.0**

## V3 SECTION-SPECIFIC VISUAL INTEGRATION ADDENDUM

### Dominant visual action — mandatory

> **Footer: one calm Deep Navy close after the strongest blue CTA moment.**

No second competing metaphor may be introduced.

### Imported section asset ownership

| Group / Section | Code components | ChatGPT Image / custom assets | Real/brand assets | Direction variants |
|---|---|---|---|---|
| 16 Footer | Footer structure, links, CTA, dynamic year | Wave SVG only | Official logo, approved legal/social links | Column/link order RTL/LTR |

### Imported composition recipe

#### 16.9 Final CTA / Footer

Final CTA is the strongest blue moment.
Footer is the calm Deep Navy close.
Do not combine them into one visually undifferentiated block.

### Imported component specifications

#### 14.10 Footer

Deep Navy close with an approved SVG wave separator.
Official logo in a verified white/color variant.
Navigation, legal links, language switch, and CTA only when real.
Social icons only when approved destination links exist.
Dynamic year.
Mobile columns stack; no compressed horizontal nav row.

### Required visual approval packet for this group

This group cannot receive final design approval until its packet contains every applicable item from GROUP 01 §23.2:

- Reference image.
- Annotated reverse-engineering sheet.
- Asset classification map.
- Arabic desktop design.
- English desktop design.
- Arabic mobile design.
- English mobile design.
- Tablet behavior note.
- Motion storyboard.
- Reduced-motion design.
- Asset list with filenames and status.
- Product screenshot proof/version where applicable.
- Reference comparison overlay or side-by-side review.

### Mandatory human creative QA

- One-second test.
- Silhouette test where Owner/props are used.
- Brand-without-logo test.
- 200px test.
- Product-truth test.
- Bilingual hierarchy test.
- Responsive recomposition test.
- Motion-purpose test.
- Contrast and keyboard test.

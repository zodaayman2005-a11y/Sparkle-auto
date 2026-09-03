# PROJECT STATE — Sparkle Auto Landing Page

> هذا ملف الحالة الحي للمشروع. بنيته وقواعد تسجيله مقفولة، لكن محتواه يُحدّث بعد كل Group أو Change Request. المرجع الحاكم: `AGENTS.md` ثم `docs/00-contract.md` وفق ترتيب السلطة المدوّن داخلهما.

## Current Group

`GROUP 00 — technical implementation complete; awaiting explicit user approval`

## Group Status

| Group | الوحدة | الحالة | Approved on | ملاحظات |
|---:|---|---|---|---|
| 00 | Repo / Stack / Contract | **technical implementation complete — awaiting user approval** | Technical gate: 2026-09-02 | Development gate ناجح؛ موافقة المستخدم الصريحة تغلق الجروب، بينما Production/Release يظل محجوبًا بالـblockers المسجلة |
| 01 | Project Understanding + Base System | **blocked by G00 approval** | — | يبدأ فقط بعد اعتماد المستخدم لـ`GROUP 00`؛ يتضمن `/styleguide` وB01–B12 والمعايرة والقفل النهائي للـtokens |
| 02 | Header | blocked by G00/G01 approvals + BLK-04 | — | ممنوع بدء أي Section بصري قبل اعتماد `GROUP 01` واعتماد النص الإنجليزي |
| 03 | Hero | not started | — | |
| 04 | Problem | not started | — | |
| 05 | What Is Sparkle Auto | not started | — | |
| 06 | Who Is It For | not started | — | |
| 07 | Strategy Blueprint | not started | — | Premium Scroll |
| 08 | Product Explorer | not started | — | Premium Scroll |
| 09 | Operation Flow | not started | — | |
| 10 | Setup & Preparation | not started | — | Premium Scroll |
| 11 | Pricing | not started | — | |
| 12 | 14-Day Trial | not started | — | |
| 13 | FAQ | not started | — | closed by default |
| 14 | Application Form | not started | — | |
| 15 | Final CTA | not started | — | |
| 16 | Footer | not started | — | |
| Release | SEO / full-page polish / production QA | not started | — | يبدأ بعد اكتمال واعتماد 00–16 |

## Locked Decisions in Force

| ID | القرار | الحالة |
|---|---|---|
| V3-AUTH | ترتيب السلطة ذو الـ13 مستوى في `docs/00-contract.md` هو الفيصل فوق القوائم المحفوظة من v2 | locked |
| V3-TOKENS | قيم `GROUP 00` provisional؛ القفل النهائي بعد معايرة واعتماد `GROUP 01` | locked |
| V3-EN | `/ar` و`/en` يُبنيان الآن؛ لا Phase-2 redirect للإنجليزية | locked |
| V3-GSAP | cleanup محلي لكل Section؛ ممنوع قتل كل ScrollTriggers عالميًا | locked |
| V3-SOURCE | masters/boards في `design-source/`، والإنتاج المحسن المعتمد فقط في `public/` | locked |
| V3-ASSETS | placeholders هيكلية فقط ولا تمنح Final Visual/Production/Release approval | locked |
| V3-BASELINE | Reference Diff والاعتماد البشري يسبقان visual-regression baseline | locked |
| V3-VERIFY | development `verify` ليس Release Gate؛ release يضيف assets/visual/performance/SEO/human QA | locked |
| V3-SLOTS | `BLK-08` محلول بالكامل عبر Slot Registry | locked |

## Open Blockers

| ID | Blocker | الحالة | Placeholder / fallback | يمنع | Files touched |
|---|---|---|---|---|---|
| BLK-01 | 12 Owner production renders وفق Character Lock والاتجاهات | open | owner placeholders مسجلة وتعمل | Final approval للأقسام 03/04/05/06/10/11/12/15 وRelease | `content/assets.manifest.json`, `public/assets/placeholders/` |
| BLK-02 | 9 Product screenshots حقيقية بالمقاسات والنسخ المعتمدة | open | screen placeholders مسجلة وتعمل | Product proof/final approval للأقسام 03/08/10 وRelease | `content/assets.manifest.json`, `public/assets/placeholders/` |
| BLK-03 | Custom artwork production assets | open | art placeholders مسجلة وتعمل | Final visual approval للأقسام المرتبطة وRelease | `content/assets.manifest.json`, `public/assets/placeholders/` |
| BLK-04 | اعتماد النسخة الإنجليزية تجاريًا | draft complete؛ explicit approval pending | `/en` يعمل ويُختبر بالنص الحالي؛ لا redirect | بدء `GROUP 02` واعتماد `/en` النهائي | `content/copy.en.json`, `docs/00-contract.md` |
| BLK-05 | سعر باقة التوسع | open | approved “price before launch” copy only | نشر Pricing | `docs/00-contract.md` |
| BLK-05b | تحديد وحدة «حتى 600 عربية» | open | النص كما هو + TODO | نشر Pricing | `docs/00-contract.md` |
| BLK-06 | رقم WhatsApp ونص الرسالة | open | CTA disabled + `aria-disabled` | WhatsApp CTA/release | `docs/00-contract.md` |
| BLK-07 | strategy/system videos + WebM + posters + Arabic VTT | open | video block خارج DOM | فيديوهات 07 و08/final approval | `docs/00-contract.md` |
| BLK-09 | Privacy / Terms / Social URLs الحقيقية | open | الرابط غير المتاح خارج DOM | Footer/release | `docs/00-contract.md` |
| BLK-10-runtime | Vercel deployment service-role secret و`SPARKLE_RATE_LIMIT_SECRET` الإنتاجي | external open | dev/runtime error واضح عند غياب secrets؛ لا نجاح وهمي | Production form وRelease فقط؛ لا يمنع `GROUP 01` | `.env.example`, `src/app/[lang]/actions/submit-operations-review.ts` |

## Resolved Blockers

| ID | القرار | Resolution date | الدليل |
|---|---|---|---|
| BLK-08 | كل Unapproved Slot حُسم بالموافقة أو الحذف أو ربطه بـBLK-09؛ ممنوع إنشاء TODO جديد له | 2026-09-02 | `docs/00-contract.md#10-slot-registry--blk-08-محلول` |
| BLK-10-foundation | Supabase testing foundation: project `iomwmbtnvhpegngouonw`، الجدول، rate-limit table/RPC، RLS/grants وقيود E.164 مطبقة ومختبرة | 2026-09-02 | أربع migrations؛ RPC result `true,true,true,false,false`، counter capped at `4`، stale rows `0`؛ canonical phone accepted/raw domestic rejected داخل transaction rolled back |

## Contract Conflicts and Resolutions

| ID | التعارض | قرار v3.1 الحاكم | الحالة |
|---|---|---|---|
| CF-01 | v2 يصف Priority Ladder بأنه الوحيد بينما v3.1 يضيف Merge Authority | ترتيب v3.1 أعلى، ويحفظ Ladder v2 داخله دون أن ينافسه | resolved |
| CF-02 | `tokens.css` مقفول في G00 لكن المعايرة البصرية في G01 | baseline دقيق provisional في G00؛ final lock وChange Log في G01 | resolved |
| CF-03 | عقد v2 يقترح global `ScrollTrigger.getAll().kill()` | استخدام refs/context scoped لكل Section فقط؛ لا global cleanup | resolved |
| CF-04 | v2 يسمح بتأجيل `/en` بينما قرار المشروع الحالي يطلب اللغتين الآن | Option B مقفول؛ `copy.en.json` مطلوب قبل G02 | resolved |
| CF-05 | `PROJECT_STATE.md` “locked” لكنه يجب أن يتغير بعد كل Group | schema/rules locked؛ status/log rows mutable | resolved |
| CF-06 | `verify` لا يشمل كل شروط النشر | Development gate منفصل عن Release Gate؛ release يشغّل visual/assets/performance/SEO/human QA | resolved |
| CF-07 | visual test مطلوب مبكرًا لكن M-10 يمنع baseline قبل اعتماد التصميم | بناء harness في G00؛ baselines تُنشأ لكل Section بعد Reference approval فقط | resolved |
| CF-08 | metadata تقول 15 Sections + Header + Footer بينما execution map يعرض 15 وحدة إجمالًا | التنفيذ يعتمد 15 وحدة: Header + 13 content sections + Footer | resolved |
| CF-09 | BLK-08 ما زال في Registry رغم حسم كل slots | BLK-08 resolved ولا يوقف التنفيذ | resolved |
| CF-10 | fixed `pinType:"transform"` في v2 مقابل شرط v3.1 لاختبار الـlayout | لا يفرض global؛ يُختبر ويحدد محليًا لكل Premium Section | resolved |

## Known Risks / Decisions Still Needed

| ID | البند | الحالة/الأثر | الإجراء أو الدليل |
|---|---|---|---|
| R-01 | Application/package scaffold | **resolved** | Next.js 15.5.25 + TS strict + Tailwind 4 موجودة و`npm run verify` ناجح |
| R-02 | Runtime/package reproducibility | **resolved** | `.nvmrc` = Node 22.20.0، `engines` = 22.x، npm 11.13.0، exact dependency pins و`package-lock.json` |
| R-03 | صور Owner الحالية JPEG بخلفية وليست transparent masters | لا تصلح كـproduction assets | إنتاج/اعتماد الملفات المدرجة في manifest |
| R-04 | screenshots المرجعية الحالية أقل من minimum وبعض الشاشات التسع ناقصة | لا تحقق Product Proof gate | التقاط screenshots حقيقية جديدة وفق العقد |
| R-05 | Cairo/Nunito self-hosted subsets | **resolved** | `next/font/local` يضم variable Arabic/Latin WOFF2 بكل الأوزان المطلوبة 400/600/800/900، ملف واحد لكل لغة، preload و`display:swap` |
| R-06 | Durable rate limiting | **resolved technically** | Supabase table + atomic security-definer RPC؛ الحد أعاد `true,true,true,false,false`، العداد capped at `4`، وcleanup مفهرس يحتفظ بالنافذة الحالية والسابقة فقط |
| R-07 | governorates/contact-time canonical values | registry مقفولة ولا تقبل أي إرسال حتى اعتماد القيم في `GROUP 14`؛ لا تمنع G00 التقني | لا قائمة مخترعة؛ Zod يرفض arbitrary values ويعيد configuration error قبل الإرسال |
| R-08 | Unified asset manifest schema | **resolved** | schema v3.1.0 صار عقد Zod صارمًا يضم 52 asset record ويغطي metadata واللغة/الاتجاه والـlifecycle والـbudgets والـplaceholder contract |
| R-09 | Production runtime secrets | يمنع form production وRelease | إغلاق `BLK-10-runtime` في Vercel دون تسجيل قيم الأسرار في الريبو |
| R-10 | Language switch المرئي | خارج نطاق shell الفارغ لـG00؛ لا يمنع gate | hreflang/canonical يعملان الآن؛ المكوّن يُبنى في G01 ويُركب في Header ضمن G02 كما تنص الخطة |

## Deviations from Reference

لا توجد Sections مبنية حتى الآن، ولذلك لا توجد انحرافات بصرية مسجلة.

| Group | العنصر | الانحراف | السبب/Authority | Approved by |
|---|---|---|---|---|
| — | — | — | — | — |

## `GROUP 00` Acceptance Checklist

الحالة هنا دليل ملموس، وليست تقييمًا ذاتيًا:

| ID | المخرج | الحالة | Evidence / blocker |
|---|---|---|---|
| G00-01 | `AGENTS.md` يحفظ عقد v2 ويضيف سلطة v3.1 | **done** | `AGENTS.md` |
| G00-02 | `PROJECT_STATE.md` بالقالب الحي والجداول | **done** | هذا الملف |
| G00-03 | `docs/00-contract.md` عقد مستقل شامل | **done** | `docs/00-contract.md` |
| G00-04 | Next.js 15 + TS strict + Tailwind v4 scaffold والبنية المقفولة | **done** | Next 15.5.25، TS 5.9.3 strict، Tailwind 4.3.3، Node 22.20.0/npm 11.13.0، lockfile |
| G00-05 | `tokens.css` بكل القيم الدقيقة وموسوم provisional | **done** | `src/styles/tokens.css`; القفل النهائي فقط في G01 |
| G00-06 | `copy.ar.json` كامل بلا hardcoded visible copy | **done** | `content/copy.ar.json`; `test:copy` pass؛ canonical `+7`/`+100` |
| G00-07 | `copy.en.json` كامل و`/en` فعلي | **implemented; approval pending** | schema parity وE2E pass؛ موافقة المستخدم/Business الصريحة مطلوبة لإغلاق BLK-04 قبل G02 |
| G00-08 | manifest موحّد يغطي Owner/art/product وmetadata v3.1 | **done structurally** | 52 records + typed strict Zod schema 3.1.0؛ production files تظل BLK-01/02/03 |
| G00-09 | CTA registry يضم الـ12 CTA والـsource/plan behavior | **done** | `content/cta.registry.json`: 12 records؛ WhatsApp runtime يبقى BLK-06 |
| G00-10 | placeholder assets + `Asset` component بنفس aspect ratio وtest marker | **done** | production لا يظهر إلا مع implemented+approved+كل exports؛ responsive `srcset`؛ geometry-only placeholder و`alt=""`؛ الـlabel من copy overlay؛ release test يفشل متوقعًا |
| G00-11 | `/ar` و`/en` يعيدان `lang/dir` وmetadata/hreflang صحيحة | **done** | routes/layout/middleware + 39/39 E2E |
| G00-12 | Cairo/Nunito WOFF2 subsets self-hosted، swap، وتحميل مقتصد | **done** | `src/app/fonts.ts`; ملف variable واحد لكل route يغطي أوزان 400/600/800/900 بلا synthesis |
| G00-13 | Playwright overflow/a11y/visual harness موجود | **done** | 39/39 E2E من production build جديد؛ Axe يرفض كل violation داخل WCAG tags؛ لا section baselines قبل M-10 approval |
| G00-14 | token/copy/placeholder static check scripts موجودة | **done** | token/content/source checks pass؛ typed CTA/asset schemas؛ local-alias/function/import regression coverage؛ Tailwind/inline-style boundary؛ release asset gate يفحص lifecycle وMIME والأبعاد والنسبة والحجم وhash وSVG active content |
| G00-15 | Supabase table + secure Server Action + Zod/honeypot/rate limit | **done technically** | project `iomwmbtnvhpegngouonw` + 4 migrations + RLS/grants/RPC؛ E.164 normalization؛ approved-options gate؛ no shared-IP fallback؛ bounded/capped limiter؛ production secrets ضمن BLK-10-runtime |
| G00-16 | `design-source/01…09` structure موجودة | **done** | مسارات v3.1 الحاكمة حرفيًا من `01_FOUNDATIONS` إلى `09_MANIFESTS_APPROVALS` مع `.gitkeep` |
| G00-17 | `npm run verify` ينجح على shell ثنائي اللغة | **done** | PASS 2026-09-02 بعد آخر hardening؛ 17/17 Unit + 39/39 E2E؛ First Load JS 103kB؛ source-integrity pass |
| G00-18 | كل blocker، placeholder، conflict وتغيير موثق | **done for technical handoff** | الجداول أعلاه؛ يعاد التحقق في G01 وRelease |
| G00-19 | مراجع المستخدم البصرية محفوظة بعيدًا عن production assets | **done** | 27 JPEG أصلية في `assets/references/` و`docs/reference/`؛ SHA-256 manifest وفحص آلي |

### GROUP 00 Gate Result

**TECHNICAL IMPLEMENTATION COMPLETE — 2026-09-02; EXPLICIT USER APPROVAL PENDING.** يبدأ `GROUP 01` فقط بعد اعتماد المستخدم لهذا الجروب. هذا ليس Production/Release approval: `BLK-01/02/03/04/05/05b/06/07/09/10-runtime` تظل مفتوحة حسب أثرها. ممنوع بدء أي Section بصري من `GROUP 02` فما بعده قبل اكتمال واعتماد `GROUP 01` وإغلاق `BLK-04`.

## Validation Log

| التاريخ | النطاق | الأمر/الفحص | النتيجة | ملاحظات |
|---|---|---|---|---|
| 2026-09-02 | Contract subtask | Read-only inspection of repository + v3.1 lines 1–2003 | pass | أسّس العقد الأولي قبل scaffold |
| 2026-09-02 | Files in this subtask | Scope check | pass | الملفات المقصودة فقط: `AGENTS.md`, `PROJECT_STATE.md`, `docs/00-contract.md` |
| 2026-09-02 | Full development gate | `npm run verify` | **PASS** | final snapshot: format + lint + typecheck + 17/17 Unit + production build + token/content/source checks + 39/39 Playwright E2E؛ First Load JS 103kB |
| 2026-09-02 | Locked runtime build | Node `22.20.0` + Next production build | **PASS** | `/ar` و`/en` prerendered؛ First Load JS 103kB |
| 2026-09-02 | Dependency security | `npm run audit:prod` | **PASS** | 0 vulnerabilities |
| 2026-09-02 | Supabase migrations | project `iomwmbtnvhpegngouonw` | **PASS** | أربع migrations مطبقة: request/rate tables، constraints، canonical phone، capped counter، indexed bounded retention، RLS/grants |
| 2026-09-02 | Rate-limit behavior | RPC smoke test | **PASS** | sequential results: `true, true, true, false, false`؛ stored count `4`؛ stale rows after cleanup `0` |
| 2026-09-02 | Supabase cleanup | dummy request removal | **PASS** | test row deleted after verification |
| 2026-09-02 | Foundation unit tests | `npm run test:unit` | **PASS** | 17/17: phone normalization، option registry/arbitrary-value rejection، SVG active-content rejection، ومنع تجاوز copy/tokens/motion عبر local/imported aliases/functions أو raw CSS |
| 2026-09-02 | Supplied visual sources | `npm run test:source` | **PASS** | 27/27 صورة أصلية محفوظة byte-for-byte مع SHA-256، بالإضافة إلى نسختي v2 وv3.1 |
| 2026-09-02 | Canonical phone DB constraint | transaction smoke test | **PASS** | canonical E.164 accepted، domestic raw rejected، transaction rolled back |
| 2026-09-02 | Production asset gate | `npm run test:assets` | **EXPECTED FAIL** | كل الـ52 record ما زال requested/placeholder وexports الإنتاجية غير موردة تحت BLK-01/02/03؛ لا يمنع G01 ويمنع Release كما ينبغي |
| 2026-09-02 | Release readiness gate | `npm run test:release-readiness` | **EXPECTED FAIL** | التسعة approvals/evidence ما زالت false تحت مرحلة Release؛ يمنع نجاحًا زائفًا بعد توريد الأصول فقط |
| 2026-09-02 | Supabase advisors | security + performance scoped to `operations_review*` | **PASS WITH EXPECTED INFO** | لا warning/error للجداول الجديدة؛ RLS-without-policy مقصود مع grants revoked، وunused-index INFO متوقع قبل traffic |

## Change Log

| التاريخ | الملف المقفول/العقد | التغيير | السبب | الجروبات المتأثرة |
|---|---|---|---|---|
| 2026-09-02 | `AGENTS.md` | إنشاء عقد الوكلاء مع حفظ قواعد v2 وإضافة قرارات v3.1 | بدء `GROUP 00` | 00–16 + Release |
| 2026-09-02 | `docs/00-contract.md` | إنشاء المرجع التنفيذي العام وتوحيد التعارضات والـgates | Master v3.1 | 00–16 + Release |
| 2026-09-02 | `PROJECT_STATE.md` | إنشاء سجل الحالة والـblockers والقرارات والـacceptance | استمرارية العمل بين الجلسات | 00–16 + Release |
| 2026-09-02 | Runtime/package files | إنشاء Next.js 15.5.25/React/TS/Tailwind scaffold، Node 22/npm 11 pins وpackage lock | تنفيذ G00 reproducible | 00–16 + Release |
| 2026-09-02 | `src/styles/tokens.css` | إضافة baseline الدقيقة بحالة provisional | عقد v3.1 M-02 | 01–16 |
| 2026-09-02 | `content/copy.ar.json`, `content/copy.en.json` | إضافة النسختين وتوحيد enum values إلى `+7` و`+100` | English-now + canonical form contract | 02–16 |
| 2026-09-02 | `content/assets.manifest.json` | إنشاء schema 3.1.0 بعدد 52 Asset record | M-07/M-08 + Placeholder Protocol | 01–16 + Release |
| 2026-09-02 | `content/cta.registry.json` | تسجيل 12 CTA وسلوك source/plan | CTA contract | 02–16 |
| 2026-09-02 | Asset/runtime foundation | إضافة `Asset` والـplaceholders والـmanifest validation | السماح بالبناء الهيكلي دون اعتماد placeholders | 01–16 + Release |
| 2026-09-02 | i18n/fonts/routes | إضافة `/ar` و`/en` وlang/dir/metadata/hreflang وCairo/Nunito variable WOFF2 بكل أوزان الـtokens | Bilingual gate | 01–16 + Release |
| 2026-09-02 | Tests/scripts/design-source | إضافة Playwright/axe/static checks وتسعة مجلدات design-source | G00 verification + M-09/M-10 | 00–16 + Release |
| 2026-09-02 | Supabase migrations | إنشاء request/rate tables، atomic RPC، constraints، RLS/grants؛ تطبيقها واختبارها على testing project | Form/security contract | 14 + Release |
| 2026-09-02 | `PROJECT_STATE.md` | ترقية الحالة إلى G00 technical complete مع إبقاء الاعتماد الصريح وBLK-04 مفتوحين، وإغلاق BLK-10-foundation فقط | فصل الإنجاز التقني عن موافقة المستخدم وحقائق الإنتاج الخارجية | 00–16 + Release |
| 2026-09-02 | `design-source/`, `docs/00-contract.md` | تصحيح أسماء المجلدات التسعة لتطابق بنية v3.1 الحاكمة حرفيًا | نتيجة المراجعة المستقلة قبل إقفال G00 | 01 + Release |
| 2026-09-02 | `Asset.tsx`, typed manifest، asset/content/release checks | اشتراط implemented+approved+وجود كل exports قبل العرض؛ responsive `srcset`؛ منع تعارض اللغة/الاتجاه؛ placeholder صامت؛ فحص MIME/الأبعاد/الحجم/hash؛ وتصحيح مصادر Product Proof | منع تسريب ملف غير معتمد أو مزيف، وإزالة تعارضات manifest ولقطة Customers/Offers | 01–16 + Release |
| 2026-09-02 | `src/styles/tokens.css` | تغيير `--focus-on-light` من Sparkle Blue إلى `--blue-text` المكافئ `#0077CC` | WCAG 2.2 non-text contrast أعلى سلطة من baseline v2؛ 2.76:1 لمؤشر التركيز لا تكفي | 01–16 + Release |
| 2026-09-02 | `src/app/fonts.ts`, package lock | استبدال ملفات 400/900 المنفصلة بملف variable subset واحد لكل لغة يغطي 400/600/800/900 | منع synthesized weights مع الحفاظ على تحميل ملف خط واحد لكل route | 01–16 + Release |
| 2026-09-02 | `src/app/[lang]/layout.tsx` | اشتقاق canonical origin من env المعتمد أو Vercel system URL مع فشل صريح إن غاب كلاهما على Vercel | منع نشر canonical يشير إلى localhost | 00–16 + Release |
| 2026-09-02 | Static boundary checks | تشديد copy scan للنص القصير/template/direct non-copy imports، وتوسيع token scan لكل `src` وللقيم الخام وTailwind built-ins والـinline numeric style | سد مسارات تجاوز العقود قبل بدء المكونات البصرية | 00–16 + Release |
| 2026-09-02 | `docs/source/` | حفظ نسختي v2 وv3.1 الأصليتين بدون تعديل مع SHA-256 | تنفيذ Source Preservation داخل الريبو بدل الاعتماد على مرفقات الجلسة | 00–16 + Release |
| 2026-09-02 | `.editorconfig`, `.gitattributes` | تثبيت UTF-8/LF ومعاملة الأصول الثنائية بوضوح | حماية النص العربي والمصادر من اختلافات الأنظمة | 00–16 + Release |
| 2026-09-02 | Form validation/action + migration `20260902002000` | E.164 normalization، approved-options fail-closed registry، trusted-IP requirement، وقيد DB canonical | إغلاق فجوات canonical input والـshared fallback دون اختراع option values | 14 + Release |
| 2026-09-02 | migration `20260902003000` + Server Action | cap للعداد، cleanup retention مفهرس، secret عشوائي ≥32 byte، ورسائل validation من copy locale | إغلاق نمو ledger/overflow وحماية fingerprint ومنع تسريب رسائل Zod غير الموطنة | 14 + Release |
| 2026-09-02 | SVG delivery boundary + `next.config.ts` | منع SVG active/external content آليًا وإضافة CSP sandbox دفاعي لمسار assets | منع تشغيل محتوى same-origin داخل production SVG | 01–16 + Release |
| 2026-09-02 | `src/types/cta-registry.ts` + content checker | عقد Zod strict للـ12 CTA وفحص السلوك/target/context/availability/analytics بالكامل | حماية الـCTA registry المقفول من schema drift | 02–16 + Release |
| 2026-09-02 | `content/copy.ar.json`, `content/copy.en.json` | إضافة قالب diagnostic ثنائي اللغة لوسم asset placeholder | إبقاء كل النص المرئي Registry-driven مع `lang` إلزامي للأصول | 01–16 |
| 2026-09-02 | Release scripts/registry | جعل `verify:release` يطلب assets + تسعة approvals موثقة + audit بدل أن ينجح بالأصول وحدها | فصل Development Gate عن Release Gate الحقيقي | Release |
| 2026-09-02 | Formatting + static-boundary regression tests | إضافة `format:check` إلى development gate واختبارات فعلية تمنع تمرير copy أو Tailwind/inline values عبر aliases/functions/imports | جعل الـgate قابلًا لإعادة الإنتاج وسد آخر مسارات تجاوز العقود المقفولة | 00–16 + Release |
| 2026-09-02 | `tokens.css` + motion boundary | نقل scroll/transform/reduced-motion values إلى tokens وإضافة regression يرفض القيم الخام، بما فيها `0s` | إغلاق false-green أخير في تطبيق TOKENS ONLY | 00–16 + Release |
| 2026-09-02 | Visual source integrity | ربط 27 صورة موردة المحفوظة سابقًا في الريبو بـhashes ثابتة وفحص آلي دون تكرار الـblobs | منع فقد المراجع أو الاعتماد على مسارات المرفقات المؤقتة | 01–16 + Release |
| 2026-09-02 | Placeholder SVGs + static-boundary tests | إزالة كل النصوص المدمجة من SVG والاعتماد على copy overlay؛ وتغطية imported constants/functions آليًا | فرض COPY/TOKENS ONLY حتى عبر حدود الملفات ومنع English placeholder copy داخل `/ar` | 00–16 + Release |

## Next Authorized Work

بعد موافقة المستخدم الصريحة على `GROUP 00`، يبدأ `GROUP 01` فقط: Project Understanding، `/styleguide`، Creative Boards B01–B12، اختبار الثماني حالات البشرية، معايرة Hero/Product وProblem/Editorial، ثم القفل النهائي للـtokens والـmanifest. لا يبدأ `GROUP 02` أو أي Section بصري قبل اعتماد `GROUP 01` وإغلاق `BLK-04`. بالتوازي خارج التنفيذ البصري يمكن جمع الأصول والحقائق والروابط والأسرار الخارجية لإغلاق Release blockers دون معاملتها كأصول معتمدة قبل مراجعتها.

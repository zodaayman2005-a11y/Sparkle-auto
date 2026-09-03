# GROUP 00 — Repository, Stack and Global Execution Contract

**Authority:** Sparkle Auto Final Unified 17-Group Codex Master v3.1

**Status:** technical implementation complete — awaiting user approval
**Applies to:** `GROUP 00 → GROUP 16` and the Global Release Layer

هذا الملف يلخّص العقد التنفيذي الذي يجب أن يكون متاحًا داخل الريبو في كل Session. يحافظ على عقد v2، وتعلو عليه قرارات دمج v3.1 الواردة هنا عند التعارض. لا يبدأ أي Section بصري قبل اعتماد `GROUP 00` و`GROUP 01`.

## 1. ترتيب السلطة النهائي

عند التعارض، الترتيب الحاكم هو:

1. Product Truth.
2. Approved Copy.
3. Legal / Privacy / Commercial Rules.
4. Business Goal.
5. WCAG 2.2 AA.
6. Responsive usability.
7. RTL / LTR correctness.
8. Performance Budget.
9. V3.1 Unified Merge Decisions.
10. Exact production tokens and manifests المعتمدة بعد `GROUP 01`.
11. Creative North Star وVisual Boards B01–B12 المعتمدة.
12. Reference Image composition and relative proportions.
13. Exploration ranges and source-document recommendations.

الـReference يحكم التكوين، النسب، الترتيب، الكثافة والإيقاع البصري. `tokens.css` يحكم القيم الرقمية الفعلية بعد اعتماده. لا يحق للـReference أن يكسر Product Truth أو Copy أو الوصول أو الأداء.

## 2. قرارات دمج v3.1 الحاكمة

| ID | القرار التنفيذي |
|---|---|
| M-01 | مصدر tokens إنتاجي واحد بأسماء v2 الأصلية. أسماء `--sa-*` مصطلحات boards أو aliases بلا مصدر منافس. |
| M-02 | القيم الدقيقة في `GROUP 00` baseline مؤقت. `GROUP 01` يعايرها على B01–B12 وHero/Product وProblem/Editorial، ثم تعتمد قيم مفردة نهائية عبر Change Control. |
| M-03 | `/styleguide` وCreative Boards B01–B12 مطلوبان معًا. |
| M-04 | `GROUP 01` لا يعتمد إلا بعد اجتياز البوابتين التقنية والبصرية كاملتين. |
| M-05 | الاعتماد البشري: 8 حالات؛ الاختبارات الآلية: 12 حالة. كلاهما مطلوب. |
| M-06 | Placeholders للبناء الهيكلي والـresponsive والـmotion prototype فقط؛ لا Final Visual/Production/Release approval بوجود Asset مطلوب غير معتمد. |
| M-07 | Manifest موحّد يضم المتطلبات التقنية وبيانات الإنتاج والاعتماد واللغة والاتجاه والوزن. |
| M-08 | Owner system موحّد يحافظ على الهوية، اتجاه الـpose، watch-hand، transparent masters، contact-shadow separation وmobile crop proof. |
| M-09 | Runtime/code حسب بنية التطبيق، ومصادر التصميم داخل `design-source/`. لا يدخل `public/` إلا export معتمد ومحسن. |
| M-10 | Reference comparison والـDiff والاعتماد البشري تسبق إنشاء visual-regression baseline. |
| M-11 | `450vh` و`700vh` و`420vh` أهداف prototype وليست أرقامًا مقدسة؛ أي تعديل موثق ويحفظ كل الحالات. |
| M-12 | عند اختلاف حدود الوصول أو الأداء، يُطبق الأكثر تشددًا إلا بدليل قياس وChange Request معتمد. |
| M-13 | كل FAQ مغلقة عند التحميل. |
| M-14 | لكل Section فعل بصري مهيمن واحد فقط. |
| M-15 | لغة العالم: Premium Soft Stylized 3D × Egyptian Editorial × Fresh Blue tactile Neo-Brutalism × Real Product Proof. |
| M-16 | GSAP contexts/triggers مملوكة لكل Section وتُنظف محليًا فقط؛ ممنوع cleanup عالمي. |
| M-17 | قبل الإطلاق: analytics للأفعال الرئيسية + usability pass مع مستخدمين مستهدفين. |

## 3. القرارات المقفولة والـStack

| الطبقة | القرار |
|---|---|
| Framework | Next.js 15، App Router |
| Language | TypeScript، `strict: true` |
| Styling | Tailwind CSS v4 CSS-first + `src/styles/tokens.css` كمصدر وحيد |
| Premium Scroll | GSAP 3 + ScrollTrigger، تحميل ديناميكي |
| Light motion | CSS transitions + IntersectionObserver |
| Icons | SVG inline محلي تحت `components/icons/` |
| Forms | Next.js Server Action + Zod |
| Database | Supabase، جدول `operations_review_requests` |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |
| Images | `next/image` + AVIF/WebP + responsive sources |
| Fonts | Cairo Arabic subset + Nunito Latin subset، WOFF2 self-hosted |
| Tests | Playwright visual/overflow + axe-core |

ممنوع Framer Motion، UI kits، CSS framework إضافي، CSS-in-JS، jQuery، illustration/particle libraries أو Lottie بلا Change Request مكتوب.

### Reproducible runtime lock

- Node.js `22.x` عبر `.nvmrc` (`22.20.0`)؛ ده يحقق شرط Supabase الحالي بإيقاف دعم Node 20.
- npm `11.13.0`، و`package-lock.json` إلزامي.
- Next.js `15.5.25` هو آخر إصدار مثبت داخل القرار المقفول Next 15.
- PostCSS مثبت بـoverride على `8.5.26` داخل نفس الـmajor لمعالجة advisories الحالية بدون كسر قرار Next 15.
- كل dependency مباشرة مثبتة بإصدار كامل، وليس range.

## 4. One Landing Page Contract

الـ15 وحدات التنفيذ التالية تعيش في صفحة واحدة تحت `/[lang]`:

| Group | الوحدة | Anchor |
|---|---|---|
| 02 | Header | `#site-header` |
| 03 | Hero | `#hero` |
| 04 | Problem | `#problem` |
| 05 | What Is Sparkle | `#what-is-sparkle` |
| 06 | Who Is It For | `#who-is-it-for` |
| 07 | Strategy Blueprint | `#strategy` |
| 08 | Product Explorer | `#product-explorer` |
| 09 | Operation Flow | `#operation-flow` |
| 10 | Setup & Preparation | `#setup` |
| 11 | Pricing | `#pricing` |
| 12 | Trial | `#trial` |
| 13 | FAQ | `#faq` |
| 14 | Application Form | `#application-form` |
| 15 | Final CTA | `#final-cta` |
| 16 | Footer | `#site-footer` |

يوجد Header واحد sticky وFooter واحد. ممنوع routes للأقسام، إعادة تحميل بينها أو تكرار Header/Footer. `/ar` و`/en` نسختان لغويتان لنفس الصفحة، والإنجليزية تُبنى الآن وليست Phase لاحقة.

## 5. بنية المصادر والإنتاج

```text
AGENTS.md
PROJECT_STATE.md
docs/
  00-contract.md
  source/                      # immutable user-supplied master plans + hashes
  01-base.md ... 16-footer.md
  reference/                   # immutable section references + visual-source hashes
content/
  copy.ar.json
  copy.en.json
  assets.manifest.json
  cta.registry.json
design-source/
  01_FOUNDATIONS/
  02_COMPONENTS/
  03_CHARACTER/
  04_PROPS/
  05_PRODUCT_PROOF/
  06_MOTION/
  07_SECTIONS/
  08_EXPORTS/
  09_MANIFESTS_APPROVALS/
public/
  assets/{owner,art,placeholders}/
  product/
  video/
  fonts/
src/
  app/[lang]/{layout.tsx,page.tsx}
  styles/tokens.css
  components/{base,layout,sections,icons}/
  lib/{i18n.ts,copy.ts,scroll,validation}/
  types/
tests/{visual.spec.ts,overflow.spec.ts,a11y.spec.ts}
scripts/{check-placeholders.mjs,check-hardcoded-copy.mjs,check-raw-values.mjs}
```

مصدر التصميم editable/master في `design-source/`. لا يُستخدم منه مباشرة في runtime؛ export الإنتاجي وحده يُربط عبر manifest. النسخ الأصلية للـ27 صورة الموردة محفوظة byte-for-byte في `assets/references/` و`docs/reference/` كمرجع فقط، ويثبت `npm run test:source` سلامتها؛ وجودها لا يحولها إلى أصول إنتاجية معتمدة.

## 6. الملفات المقفولة وChange Control

- `tokens.css`: provisional خلال `GROUP 00`، final lock بعد اعتماد `GROUP 01`.
- `copy.ar.json` و`copy.en.json`: يقفلان بعد اعتماد الـcopy.
- `assets.manifest.json` و`cta.registry.json`: يقفلان بعد اعتماد `GROUP 00`، وأي إضافة لاحقة مسجلة.
- `AGENTS.md` و`docs/00-contract.md`: عقدان مقفولان بعد اعتماد `GROUP 00`.
- `PROJECT_STATE.md`: بنيته مقفولة، لكنه سجل حي يُحدّث بعد كل Group.

أي تعديل على عقد مقفول يحتاج سجلًا بتاريخ، سبب، صاحب قرار، والقروبات المعتمدة المتأثرة. لا يعاد تصميم Group معتمد ضمن Group آخر.

## 7. Baseline Design Tokens

هذه قيم v2 الدقيقة المبدئية. تصبح نهائية فقط بعد معايرة `GROUP 01`:

### اللون والـcontrast

| Token | القيمة | الاستخدام |
|---|---|---|
| `--sparkle-blue` | `#01A2FF` | fills/graphics؛ ممنوع كنص على الأبيض |
| `--blue-text` | `#0077CC` | الكلمات الزرقاء على الأبيض، 4.66:1 |
| `--dark-blue` | `#0C264B` | العناوين |
| `--deep-navy` | `#03132E` | النص والحدود والظلال |
| `--soft-blue` | `#91B1D8` | حدود وزخرفة فقط؛ ممنوع كنص |
| `--surface-cloud` | `#F5FAFF` | surface |
| `--surface-ice` | `#E9F3FD` | surface |
| `--surface-pale` | `#DCEBFA` | surface |
| `--ink-muted` | `#3E5878` | نص ثانوي، 7.31:1 |
| `--focus-on-light` | `#0077CC` | مؤشر تركيز على الأسطح الفاتحة؛ يحقق ≥3:1 المطلوب للمكوّنات |
| `--success` / surface | `#0E9F6E` / `#E8F7F1` | نجاح حقيقي فقط |
| `--error` / surface | `#D64545` / `#FCEEEE` | خطأ حقيقي فقط |
| `--warning` | `#E9A23B` | تحذير وظيفي فقط |

الأبيض على Sparkle Blue يفشل 2.76:1؛ لذلك الزر الأساسي Sparkle Blue بنص Deep Navy بنسبة 6.70:1. إذا فُرض نص أبيض تجاريًا، يتغير fill إلى `#0077CC` عبر Change Request.

### المقاسات الأساسية

- Container: `min(1500px, 100% - 2 × gutter)`.
- Gutters: 64px desktop، 40px tablet، 22px mobile.
- Section padding: 88px desktop، 72px tablet، 56px mobile.
- Header: 104px desktop، 68px mobile.
- Radius: button 7px، small 12px، medium 16px، major card 20px، panel 28px، pill 999px للـbadges فقط.
- Borders: 1px hairline و2px standard.
- Shadows: hard 3/5/8px وsoft `0 12px 30px rgba(3,19,46,.08)`؛ Level 3 بحد أقصى عنصرين في Section.
- Type: Cairo للعربي وNunito للإنجليزي؛ display 72px fluid from 46، H2 58px fluid from 38، body 18px fluid from 16، body-large 20px fluid from 17.
- Motion: 180ms micro، 360ms normal، 520ms slow، 900ms premium settle، easing `cubic-bezier(0.22,1,0.36,1)`، travel كبير بحد أقصى 28px.
- Z-index مركزي فقط: art 0، content 1، device 2، phone 3، owner 4، sticker 5، sticky 50، header 100، drawer 200، modal 300، skip link 400.

لا تُكتب هذه الأرقام مرة ثانية داخل components؛ تُستهلك كـtokens. Tailwind `@theme` يربط بالمصدر نفسه ولا ينشئ قيمًا منافسة.

## 8. اللغة والتكوين ثنائي الاتجاه

- `/ar`: `lang="ar"`، `dir="rtl"`، Cairo، Copy عربي معتمد وتكوين RTL حقيقي.
- `/en`: `lang="en"`، `dir="ltr"`، Nunito، Copy إنجليزي معتمد وتكوين LTR حقيقي.
- العربية مصدر المعنى. الإنجليزية transcreation لا تضيف claims ولا تختصر Business Message لمجرد اختلاف طولها.
- Reference الإنجليزي مرجع composition/length فقط ما لم يُعتمد نصه صراحة.
- ممنوع `<br>` يدوي؛ استخدم measure مناسبًا و`text-wrap: balance/pretty`.
- arrows، timelines، gaze، annotations، routes وmotion direction تُراجع لكل لغة، ولا يتم blind mirroring.
- `<a hreflang>` حقيقي للتبديل، وmetadata/canonical/hreflang صحيحان.

قرار v3.1 للمشروع: **English built now**. `BLK-04` لا يسمح بتعطيل `/en`؛ يظل blocker محتوى حتى إنشاء واعتماد `copy.en.json` قبل `GROUP 02`.

## 9. Asset and Product Truth Contract

### Manifest record الإلزامي

كل record يتضمن: `id`، production path/type، source/reference، aspect ratio، minimum dimensions، production class، groups، language applicability، RTL/LTR variant، viewport exports/crops، alt role، placeholder behavior، approval status/approver/date، product version/date عند اللزوم، weight budget وexceptions.

### Owner inventory — 8 أغراض / 12 ملفات اتجاهية فعلية

| ID | Group | Directional | Minimum export |
|---|---:|---|---|
| `owner-hero-hand-on-laptop-{dir}` | 03 | RTL + LTR | 1400×2000 |
| `owner-stressed-arms-up` | 04 | لا | 1400×2000 |
| `owner-presenting-{dir}` | 05 | RTL + LTR | 1400×2000 |
| `owner-standing-confident` | 06 | لا | 1400×2000 |
| `owner-beside-sheet-{dir}` | 10 | RTL + LTR | 1400×2000 |
| `owner-relaxed` | 11 | لا | 1200×1800 |
| `owner-hand-on-card-{dir}` | 12 | RTL + LTR | 1200×1800 |
| `owner-closing-crop` | 15 | لا | 1600×1800 |

المصدر PNG شفاف master؛ الإنتاج WebP شفاف. لا shadow مدمج؛ contact shadow وforeground matte عند الحاجة طبقات منفصلة. الوجه والشعر والملابس ونسب الجسم والرندر والساعة ثوابت Character Lock.

### Product screenshots — 9 حقائق منتج

`screen-overview-desktop`، `screen-bookings-mobile`، `screen-bookings-desktop`، `screen-carstatus-desktop`، `screen-finance-desktop`، `screen-team-desktop`، `screen-inventory-desktop`، `screen-customers-desktop`، `screen-setup-desktop`.

- Desktop minimum 1600×1000؛ mobile minimum 780×1600.
- البيانات الحساسة تتحول demo داخل المنتج قبل الالتقاط، لا بالفوتوشوب.
- نفس zoom وbrowser chrome.
- استخدم UI إنجليزي حقيقي للنسخة الإنجليزية إن وُجد؛ وإلا تبقى اللقطة العربية دون AI translation.

### Artwork inventory

يشمل splash hero/small، sparks، halftone، blueprint grid، wash-bay wireframe directional، car side directional، route lane directional، ست chaos papers مستقلة، scribble، work-order sheet directional، review stamp، footer waves وCTA waves directional.

الهندسة البسيطة فقط يجوز بناؤها بالكود: خط، سهم بسيط، دائرة رقم، grid بسيط أو path فاصل واحد. ما يحتاج أكثر من ستة أشكال يُعامل Artwork.

### Placeholder protocol

`Asset` يبحث عن ملف manifest؛ إن غاب يعرض placeholder بنفس aspect ratio، باسم الـAsset و`BLK-xx` و`data-placeholder="true"`. لا box فارغ ولا بديل مخترع. `test:assets` يفشل في production عند وجود أي placeholder.

## 10. Slot Registry — `BLK-08` محلول

| Slot | القرار |
|---|---|
| Hero benefit strip | معتمد: حجوزات منظمة · حالة كل عربية · إدارة الفريق · تقارير واضحة |
| Hero “Built for…” card | يُحذف من DOM ويعاد توزيع المساحة |
| What Is pillars | معتمدة: تجربة حجز أسهل · تحكّم في التشغيل · عملاء بيرجعوا، بالنصوص المساندة المعتمدة في الـcopy |
| Who For tiles | معتمدة: مغسلة تقليدية · مركز تلميع وحماية · خدمة سريعة · تشغيل بأكتر من فرع |
| Product annotations | سبع annotations المعتمدة في `GROUP 08` |
| Product trust items | تُحذف؛ البديل Summary strip بأسماء الأقسام السبعة فقط |
| Setup side claims | تُحذف كلها |
| Trial strip | معتمد: المراجعة الأول · هدف واضح · تشغيل حقيقي · بيانات حقيقية |
| Form explainers | معتمد: مراجعة مركّزة · بياناتك عندك · حل على قد شغلك، بالنصوص المساندة المعتمدة |
| Footer trust items | تُحذف |
| Setup stamp | «تمت المراجعة» فقط |
| Footer social icons | تظهر فقط عند تسليم روابط حقيقية ضمن `BLK-09` |

لا يوجد Slot ينتظر Copy مجهولة، لذلك `BLK-08` **Resolved** ولا يُنشأ له TODO جديد.

## 11. CTA and Anchor Contract

| CTA ID | السلوك |
|---|---|
| `cta-header` | scroll إلى `#application-form` ثم ضبط hidden field: `source=header` |
| `cta-hero-primary` | scroll إلى `#application-form` ثم ضبط `source=hero` |
| `cta-hero-secondary` | `#product-explorer` |
| `cta-setup` | scroll إلى `#application-form` ثم ضبط `source=setup` |
| `cta-plan-operations` | form prefill `plan=operations` |
| `cta-plan-growth` | form prefill `plan=growth` |
| `cta-plan-expansion` | form prefill `plan=expansion` |
| `cta-trial` | scroll إلى `#application-form` ثم ضبط `source=trial` |
| `cta-final-primary` | scroll إلى `#application-form` ثم ضبط `source=final` |
| `cta-final-whatsapp` | `wa.me/{BLK-06}`؛ disabled حتى الاعتماد |
| `cta-footer` | scroll إلى `#application-form` ثم ضبط `source=footer` |
| `cta-faq-card` | scroll إلى `#application-form` ثم ضبط `source=faq` |

القيم `source` و`plan` تحفظ hidden fields. Smooth scroll يتحول `auto` مع reduced motion، وكل Section يأخذ `scroll-margin-top` بحسب الـheader. Navigation: System → What Is، How It Works → Operation Flow، Setup، Pricing، FAQ. الـactive state underline + `aria-current` وليس لونًا وحده. Skip link أول عنصر في body إلى `#hero`.

## 12. Form Contract

### Storage

جدول Supabase `operations_review_requests` يحتوي:

`id uuid`، `created_at timestamptz`، `full_name`، `phone`، `wash_name`، `governorate`، `branches_count`، `cars_per_day`، `role`، `current_tools?`، `main_problem text[]`، `best_contact_time?`، `lang` default `ar`، `source?`، `plan?`، `user_agent?`، `status` default `new`.

- RLS مفعّل.
- الإدخال Server Action باستخدام service role على السيرفر فقط؛ ممنوع anon insert أو كشف المفتاح للعميل.
- Honeypot `company_website`؛ إذا امتلأ يرفض الطلب بصمت.
- Rate limit: ثلاثة طلبات لكل IP في الساعة؛ آليته الدائمة يجب أن تعمل في بيئة Vercel. الـIP يُخزّن كبصمة HMAC بمفتاح عشوائي لا يقل عن 32 byte، والعداد الذري يتوقف عند `4`، والسجل يحتفظ بالنافذة الحالية والسابقة فقط عبر cleanup مفهرس حتى لا ينمو بلا حد.
- لا CAPTCHA في الإصدار الأول إلا بدليل spam فعلي وChange Request.

### Validation

- الاسم 3–80، اسم المغسلة 2–80.
- الهاتف المصري يقبل الصيغ المحلية/الدولية المنسقة ثم يُخزّن دائمًا بصيغة E.164: `^\+201[0125][0-9]{8}$`؛ normalization تدعم الأرقام العربية والفارسية والمسافات والشرطات والأقواس فقط.
- المحافظة مطلوبة ومن approved option registry فقط. حتى اعتماد القائمة تحت `R-07` يظل الإرسال fail-closed ولا تُقبل قيمة عشوائية.
- الفروع: `1 | 2–3 | 4–6 | +7`.
- العربيات يوميًا: `<20 | 20–50 | 51–100 | +100`.
- الدور: صاحب | مدير | استقبال | أخرى.
- أدوات التشغيل اختيارية حتى 300 حرف.
- مشكلة رئيسية واحدة على الأقل.
- وقت التواصل اختياري؛ وإذا أُرسل فلا يُقبل إلا من نفس approved option registry.

الحالات: Empty، Focus، Filled، Field invalid، Form summary invalid، Submitting، Success، Network failure، Server failure. الأخطاء مرتبطة بـ`aria-describedby/aria-invalid`، والـsummary `role="alert"` يستقبل focus. النجاح يستبدل الفورم ويستقبل عنوانه focus. الفشل يحفظ المدخلات. ممنوع وعد بوقت رد أو قناة غير معتمدة.

## 13. Video Contract

- `strategy.mp4/webm` لـ`GROUP 07` و`system.mp4/webm` لـ`GROUP 08`، 16:9.
- Poster WebP، controls أصلية، keyboard، Arabic VTT وtranscript مطلوبان.
- لا autoplay ولا صوت تلقائي؛ `preload="none"` وlazy via IntersectionObserver.
- الفيديو خارج sticky canvas. إذا لم يكتمل ملفه وملحقاته يُحذف block كله من DOM مع `BLK-07`؛ لا placeholder فارغ.

## 14. Layout, Responsive and Motion Contract

### Proportional Stage

كل مشهد مركب يستخدم Stage ثابت aspect ratio وcontainer queries؛ مواضع وأحجام طبقاته `%` أو `cqw`. لا تستخدم media queries لتصحيح desktop بين 1024 و1920؛ تستخدم فقط عند إعادة تركيب tablet/mobile الحقيقية.

### Breakpoints

| الحالة | المدى | القاعدة |
|---|---:|---|
| `xs` | 0–479 | عمود واحد، أقل زخرفة |
| `sm` | 480–767 | عمود واحد بمساحة أكبر |
| `md` | 768–1023 | إعادة تركيب 1–2 عمود؛ لا desktop compressed |
| `lg` | 1024–1279 | Reference proportions عبر Stage |
| `xl` | 1280–1599 | Reference proportions عبر Stage |
| `2xl` | 1600+ | Reference target الطبيعي |

Mobile: cards/pricing stacked، flow رأسي، form عمود واحد، لا overlap مكتبي ولا horizontal scroll، والأصول والزخارف أخف مع بقاء Product proof مقروءًا.

### Sticky and Premium Scroll

- الأقسام الوحيدة: Strategy، Product Explorer، Setup.
- GSAP ديناميكي؛ scrub baseline `0.6`، canvas `min-height:100svh; height:100dvh`.
- Pinning من 1024px فأعلى، ويلغى إذا الارتفاع أقل من 620px أو عند reduced motion.
- Resize refresh debounced 150ms و`ignoreMobileResize:true`.
- الحالات idempotent وprogress-based لدعم backward/fast scroll.
- كل Section يسجل trigger references الخاصة به ويقتلها أو يعمل `context.revert()` محليًا فقط.
- wrapper prototype targets: Strategy 450vh، Product 700vh، Setup 420vh؛ تعدّل بالقياس لا بالذوق.
- كل المحتوى موجود في document flow دون JS. الحالات غير النشطة `inert` و`aria-hidden`، النشطة `aria-current="step"`، rail أزرار حقيقية، `.sr-stacked`، live region و“تخطَّ القصة”.

الحركة Physical/Quick/Playful في UI، وWeighted/Controlled في القصص. لا generic fade-up لكل شيء، bounce/elastic، float دائم، scroll trap أو stagger لأكثر من ستة عناصر.

## 15. Accessibility and Performance

### Accessibility

- WCAG 2.2 AA، وكل Axe violations داخل tags `wcag2a/wcag2aa/wcag22aa` = صفر، بغض النظر عن مستوى impact.
- `h1` واحد في Hero؛ كل Section له `h2`.
- focus-visible واضح، labels حقيقية، touch target ≥44×44px.
- decorative images `alt=""` و`aria-hidden`; informative images لها alt وظيفي.
- drawer: focus trap، Escape، `aria-modal`, استعادة focus، وbody lock بـ`position:fixed` لا overflow hack.
- FAQ أزرار `aria-expanded` وكلها مغلقة مبدئيًا.
- الأرقام والأسعار والهواتف والأكواد داخل العربي `dir="ltr"` مع bidi isolation.
- لا نص يتحرك أثناء القراءة، ولا معلومة تعتمد على اللون أو الحركة فقط.

### Performance budget

| Metric | الحد |
|---|---:|
| LCP | ≤2.5s على Moto G Power / constrained 4G |
| CLS | ≤0.10 |
| INP | ≤200ms |
| Initial JS gzip | ≤190KB |
| Initial Hero images | ≤400KB |
| Total lazy-loaded page | ≤2.5MB |
| Lighthouse mobile performance | ≥85 |
| Lighthouse accessibility | ≥95 |

Product Explorer يحمل أول شاشة priority، يسبق التالية فقط `n+1`، والباقي lazy؛ ينتظر `img.decode()` قبل transition. GSAP ليس في initial bundle. يتم preload لوزني font فقط. اتجاهات assets تُرسل conditionally، والموبايل يأخذ exports مناسبة.

## 16. Background and Shape Limits

- لكل Section بحد أقصى: splash واحد، halftone tile واحد، ثلاث spark marks وgradient واحد.
- الـgradient المسموح radial من edge/corner، hue واحد من surface إلى transparent وبـopacity لا تتجاوز 0.06.
- ممنوع gradients على text/buttons/cards، multi-hue، blobs عشوائية أو ألوان خارج Sparkle palette إلا semantic state حقيقية.
- Rotations عادة ≤3°. لا تغطي الزخارف Copy، وتقل على mobile.
- Level-3 hard shadow بحد أقصى عنصرين في Section؛ لا تجعل كل شيء brutalist بنفس القوة.

## 17. QA, Reference Review and Gates

### مصفوفة الاختبار الآلية — 12 حالة

كل من `/ar` و`/en` على: 360×740، 430×932، 834×1194، 1280×800، 1440×900، 1672×941.

الاعتماد البصري البشري يستخدم: Arabic/English × desktop/tablet/large-mobile/narrow-mobile = 8 حالات.

### تسلسل M-10 الإلزامي

1. بناء static visual design.
2. Reference والبناء في viewport متطابق، side-by-side وopacity overlay.
3. Reference Diff Sheet + human creative tests.
4. اعتماد بصري صريح.
5. إنشاء/تحديث Playwright baseline بعد الاعتماد فقط.

### Development verify

`format:check → lint → typecheck → unit → build → token scan → copy scan → source integrity → overflow → a11y → visual shell`. `test:visual` للأقسام يُشغّل على baselines المعتمدة فقط. أثناء التطوير تُقبل placeholders المعلنة ولا يُعامل فشل `test:assets` كفشل غير متوقع.

### Release Gate

بالإضافة إلى development verify: visual tests لكل الحالات المعتمدة، `test:assets` بصفر placeholders، Lighthouse/performance budget، SEO/canonical/hreflang، legal links، Supabase production test، analytics events، واختبار بشري للتكوين ثنائي اللغة والـscroll comfort والـpricing/form comprehension. أمر `verify:release` لا ينجح بمجرد اكتمال الأصول؛ يطلب أيضًا سجل `content/release-approvals.json` بحالة `ready` ودليل واسم معتمد وتاريخ لكل بند، ثم production dependency audit.

الأحداث الدنيا: primary CTA، pricing، product-story state، story-skip، form view/start/error/success، WhatsApp، language switch.

## 18. Blocker Registry

| ID | الحالة | يمنع | السلوك المؤقت |
|---|---|---|---|
| BLK-01 Owner renders | Open | final approval للأقسام المعتمدة على Owner | manifest placeholder مطابق للنسبة |
| BLK-02 Product screenshots | Open | Product proof/final approval | screen placeholder مطابق للنسبة |
| BLK-03 Custom artwork | Open | final visual approval | art placeholder مطابق للنسبة |
| BLK-04 Approved English copy | Draft complete؛ user/business approval pending | بدء `GROUP 02` واعتماد `/en` | لا redirect؛ النسخة موجودة وتُختبر لكن لا تُسمى معتمدة قبل موافقة صريحة |
| BLK-05 Expansion price | Open | نشر Pricing | النص المعتمد “يضاف قبل النشر” فقط |
| BLK-05b “600 cars” unit | Open | نشر Pricing | النص كما هو مع TODO، بلا تفسير مخترع |
| BLK-06 WhatsApp | Open | CTA ثانوي نهائي | disabled + `aria-disabled`; لا `href="#"` |
| BLK-07 Videos/posters/captions | Open | video blocks | إزالة block من DOM |
| BLK-08 Unapproved slots | **Resolved by Slot Registry** | لا شيء | لا TODO جديد |
| BLK-09 Legal/social links | Open | Footer links/release | إزالة الروابط غير الحقيقية من DOM |
| BLK-10-foundation Supabase schema/security | **Resolved on testing project** | لا شيء داخل `GROUP 00` | migrations + RLS/grants + atomic rate-limit RPC مطبقة ومختبرة |
| BLK-10-runtime Production Supabase/secrets | External open | Production form وRelease فقط | fail-closed عند غياب service role أو rate-limit secret قوي؛ لا إرسال وهمي |

لا يحق لأي Blocker أن ينتج عنه claim أو سعر أو رابط مخترع. كل placeholder/TODO مسجل في `PROJECT_STATE.md`.

## 19. `GROUP 00` Acceptance Gate

لا يُعتمد الجروب قبل إثبات الآتي:

1. تطبيق Next.js والبنية المتفق عليها موجودان.
2. `AGENTS.md` و`PROJECT_STATE.md` و`docs/00-contract.md` موجودة ومتسقة.
3. `tokens.css` يحتوي baseline دقيقة بلا ranges وموسوم provisional حتى `GROUP 01`.
4. `copy.ar.json` و`copy.en.json` كاملان؛ `/ar` و`/en` فعليان. اعتماد النسخة الإنجليزية الصريح يغلق `BLK-04` قبل `GROUP 02`.
5. Manifest موحّد يغطي Owner/art/product ومتطلبات v3.1.
6. CTA registry يغطي الـ12 CTA وسلوكها.
7. placeholders الثلاثة ونظام `Asset` يعملان بنفس aspect ratio وبوسم testable.
8. test suites والـstatic check scripts موجودة وقابلة للتشغيل.
9. الخطوط self-hosted ومربوطة بـlanguage subsets و`font-display:swap`.
10. `html lang/dir` وmetadata وcanonical/hreflang صحيحة. مكوّن التبديل المرئي نفسه يُبنى في `GROUP 01` ويُركب داخل Header في `GROUP 02` حسب خريطة التنفيذ الأصلية.
11. Supabase table وServer Action وZod/honeypot/rate limit يعملون في dev دون كشف service role.
12. `npm run verify` ينجح على shell ثنائي اللغة.
13. `design-source/` به البنية التسع ومكان واضح للـapprovals/exports.
14. لا visual baseline لقسم غير معتمد، ولا placeholder مُعامل كـfinal asset.
15. كل blocker والقرار والانحراف موثق في `PROJECT_STATE.md`.

بعد اعتماد المستخدم الصريح لـ`GROUP 00`، يبني `GROUP 01` `/styleguide` وB01–B12، يعاير tokens، ويغلق القفل النهائي. لا يبدأ `GROUP 02` قبل اعتماد البوابتين وإغلاق `BLK-04`.

# AGENTS.md — Sparkle Auto Landing Page

هذا الملف هو عقد العمل الدائم لكل وكيل يعمل على المشروع. اقرأه كاملًا في بداية كل جلسة، ولا تعتبر النصوص المحفوظة من v2 أعلى من قرارات الدمج الحاكمة في v3.1.

## اقرأ أولًا، كل مرة

1. `AGENTS.md`.
2. `PROJECT_STATE.md` لمعرفة الجروب الحالي، الاعتمادات، الـblockers والتغييرات.
3. `docs/00-contract.md` للقواعد العامة وسلطة v3.1.
4. ملف الجروب الحالي فقط، ثم الـReference والـcopy والـmanifest المرتبطين به. النسخ الأصلية غير المعدلة محفوظة تحت `docs/source/` للرجوع عند تعارض أو تدقيق تغطية فقط.

لا تبدأ Section جديدًا قبل اعتماد الجروب السابق. لا يبدأ أي عمل بصري للأقسام قبل اعتماد `GROUP 00` و`GROUP 01` معًا.

## ترتيب السلطة الحاكم — v3.1

عند أي تعارض، الأعلى في القائمة يكسب:

1. Product Truth.
2. Approved Copy.
3. Legal / Privacy / Commercial Rules.
4. Business Goal.
5. Accessibility — WCAG 2.2 AA.
6. Responsive usability.
7. RTL / LTR correctness.
8. Performance Budget.
9. V3.1 Unified Merge Decisions في `docs/00-contract.md`.
10. Approved exact production tokens and manifests بعد معايرة `GROUP 01`.
11. Approved Creative North Star وVisual Boards B01–B12.
12. Reference Image composition and relative proportions.
13. Source-document exploration ranges and recommendations.

التكرار داخل خطة v3.1 لا يصنع سلطة جديدة. هذا الترتيب وقرارات الدمج هما الفيصل.

## Stack مقفول

- Next.js 15 App Router وTypeScript مع `strict: true`.
- Tailwind CSS v4 بنمط CSS-first، و`src/styles/tokens.css` هو مصدر القيم البصرية الوحيد.
- GSAP 3 + ScrollTrigger للأقسام الثلاثة المحددة للـPremium Scroll فقط.
- CSS transitions + IntersectionObserver للحركة الخفيفة؛ ممنوع Framer Motion.
- SVG محلي للأيقونات؛ ممنوع تثبيت UI أو icon library عشوائية.
- Server Actions + Zod + Supabase للفورم.
- Vercel Analytics + Speed Insights، والنشر على Vercel.
- Playwright للاختبارات المرئية والـoverflow، وaxe-core للوصول.

ممنوع إضافة CSS framework آخر، `styled-components`، Emotion، jQuery، مكتبة particles/illustrations أو Lottie إلا عبر Change Request معتمد.

## قوانين لا تُكسر

1. **ONE PAGE** — صفحة Landing واحدة طويلة تحت `/[lang]` بنسختي `/ar` و`/en`. الأقسام ليست routes مستقلة، ويوجد Header واحد وFooter واحد فقط.
2. **TOKENS ONLY** — ممنوع hardcode لأي لون أو مسافة أو حجم خط أو radius أو border أو shadow أو motion value داخل التطبيق. قيم `tokens.css` في `GROUP 00` provisional baseline؛ تصبح مقفولة نهائيًا بعد معايرة واعتماد `GROUP 01`. أي تعديل بعدها يحتاج Change Request وسجل تأثير.
3. **COPY ONLY FROM JSON** — كل نص مرئي من `content/copy.ar.json` أو `content/copy.en.json` عبر accessor typed. ممنوع نص مرئي hardcoded في JSX، وممنوع اختراع أو ترجمة claims من النفس.
4. **ENGLISH NOW** — النسختان تُبنيان وتُختبران من البداية. `/en` لا تُعطّل ولا تتحول إلى `/ar`. الإنجليزية transcreation المُعدّة تحفظ Product Truth والمعنى التجاري، لكنها لا تُسمى معتمدة قبل موافقة المستخدم/Business الصريحة؛ Mockup الإنجليزي مرجع للطول والتكوين فقط.
5. **NO CODE ART** — ممنوع رسم الشخصيات والعربيات والمشاهد والـsplash المعقد بالكود. الهندسة البسيطة المسموحة لا تتجاوز ستة أشكال؛ غير ذلك Asset مسجل.
6. **PRODUCT UI = REAL** — كل واجهة Sparkle Auto Screenshot حقيقية من `public/product/`. ممنوع توليدها أو إعادة بنائها أو تعديل بياناتها بعد الالتقاط أو عكسها أفقيًا.
7. **NO COMPOSITE SCENES** — المشهد طبقات شفافة مستقلة؛ Owner وProduct UI والـprops والـart عناصر منفصلة. ممنوع صورة واحدة مركبة للمشهد.
8. **ASSET MANIFEST** — كل Asset له record في `content/assets.manifest.json`. يدخل `public/assets/` فقط export إنتاجي محسن ومعتمد؛ المصادر والboards والـmasters في `design-source/`. كل استدعاء لـ`Asset` يمرر `lang` صراحة؛ لا fallback عربي صامت.
9. **PLACEHOLDERS ARE STRUCTURAL ONLY** — الـplaceholder بنفس aspect ratio وموسوم `data-placeholder="true"` يصلح للبناء والresponsive والmotion prototype فقط. وجود Asset مطلوب غير معتمد يمنع final visual approval وproduction approval وrelease.
10. **RTL/LTR** — العربي Primary RTL والإنجليزي LTR مستقل بصريًا. استخدم logical properties. ممنوع `scaleX(-1)` لأي نص أو UI أو logo أو Owner. الأرقام والأسعار والهواتف والأكواد داخل العربي تُعزل LTR.
11. **STICKY LAW** — ممنوع `overflow: hidden|auto|scroll` على `html` أو `body` أو أي ancestor لقسم sticky. استخدم `overflow-x: clip` محليًا عند الحاجة، وامنع التسريب من المصدر.
12. **SCOPED GSAP** — كل Premium Scroll Section يمتلك triggers/context الخاصة به وينظفها فقط. ممنوع `ScrollTrigger.getAll().forEach(kill)` أو أي cleanup عالمي قد يقتل Sections أخرى. `pinType` يُختبر داخل الـlayout الفعلي ولا يُفرض عالميًا.
13. **A11Y** — focus-visible واضح، semantic HTML، heading hierarchy صحيحة، labels حقيقية، touch targets لا تقل عن 44×44px، وعدم الاعتماد على اللون وحده. الحالات غير النشطة داخل القصص تستخدم `aria-hidden` و`inert`، مع skip control وkeyboard rail.
14. **REDUCED MOTION / NO-JS** — يتوقف pinning وتظهر كل المعلومات stacked وبترتيب صحيح. لا تعتمد أي معلومة على الحركة أو JavaScript وحدهما.
15. **ONE FOCAL ACTION** — لكل Section فعل بصري مهيمن واحد. لا تضف metaphor ثانية لمجرد الاقتراب من الـReference.
16. **REFERENCE BEFORE BASELINE** — ابنِ static composition، قارن Reference والبناء في نفس viewport، أكمل Reference Diff Sheet والاختبار البشري، احصل على الاعتماد، ثم فقط أنشئ أو حدّث Playwright visual baseline.
17. **LOCKED CHARACTER WORLD** — Owner يحافظ على الوجه والشعر والملابس والنسب والرندر المعتمد. لا outline brutalist ولا baked hard shadow حوله؛ contact shadow طبقة منفصلة.

## صفحة واحدة — الترتيب النهائي

`Header → Hero → Problem → What Is Sparkle → Who Is It For → Strategy Blueprint → Product Explorer → Operation Flow → Setup → Pricing → Trial → FAQ → Application Form → Final CTA → Footer`

## الملفات المقفولة وChange Control

بعد اعتماد مرحلتها لا تتغير الملفات التالية دون Change Request مسجل في `PROJECT_STATE.md`:

- `src/styles/tokens.css` — القفل النهائي بعد `GROUP 01`.
- `content/copy.ar.json` و`content/copy.en.json`.
- `content/assets.manifest.json`.
- `content/cta.registry.json`.
- `AGENTS.md` و`docs/00-contract.md`.

`PROJECT_STATE.md` سجل حيّ: بنيته وقواعده مقفولة، لكن حالاته وجداوله تُحدّث بعد كل جروب ولا تحتاج Change Request مستقلًا؛ أي تغيير في عقد مقفول يُوثّق داخله.

## قبل إعلان اكتمال أي Group

شغّل، حسب ما أصبح موجودًا في الجروب الحالي:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run test:overflow
npm run test:a11y
npm run test:visual
npm run test:tokens
npm run test:copy
npm run verify
```

- `npm run verify` هو gate التطوير الأساسي، وليس Release Gate كاملًا.
- لا تنشئ baseline لقسم قبل اعتماده بصريًا.
- أثناء البناء قد يفشل `npm run test:assets` فقط بسبب placeholders مسجلة ومعلنة. قبل production/release يجب أن ينجح ويبلغ عن صفر placeholders.
- Release Gate يضيف: visual baselines المعتمدة، `test:assets`، ميزانية الأداء، SEO/hreflang، legal/production Supabase/analytics، وفحص بشري ثنائي اللغة. `npm run verify:release` يطلب evidence وapprover/date لكل بند في `content/release-approvals.json`؛ ممنوع تحويل أي قيمة إلى `true` دون دليل حقيقي.

## بعد كل Group

حدّث `PROJECT_STATE.md` بالتاريخ، الحالة، الملفات، نتائج الأوامر، الـblockers، الـplaceholders، الانحرافات عن الـReference وطلبات التغيير. لا تغيّر Group معتمد أثناء Group آخر.

## ممنوع منعًا باتًا

- اختراع feature أو metric أو claim أو سعر أو رابط.
- حذف `TODO(BLK-xx)` قبل إغلاق سببه فعليًا.
- `href="#"` أو عنصر تفاعلي مزيف؛ احذف الرابط غير المتاح أو عطّله حسب العقد.
- Lorem Ipsum أو copy مؤقت ظاهر في production.
- fake dashboards أو tiny unreadable screenshots.
- composite scenes، code-generated artwork، generic 3D replacements أو stock car-wash imagery كهوية.
- global overflow hacks أو global ScrollTrigger cleanup.
- إنشاء visual-regression baseline لإخفاء فرق غير معتمد عن الـReference.
- نشر أي placeholder أو رابط/سعر/بيان تجاري غير معتمد.

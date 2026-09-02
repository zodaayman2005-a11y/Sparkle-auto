# Visual Reference

The original reference images are stored in `assets/references/`.

The locked landing-page design direction, tokens, composition rules, motion,
responsive behavior, forbidden patterns, and QA checklist are defined in
`landing-page-design-system.md`.

The section-level composition references are stored in `docs/reference/` and
their approved interpretation and known Master Plan overrides are documented in
`section-reference-notes.md`.

## Product direction

Sparkle Auto is a clean, friendly car-care booking and business-management
product. The visual language is bright, approachable, and modern, with a white
base, soft blue ambient backgrounds, vivid blue actions, rounded surfaces,
subtle shadows, and dark navy typography.

## Interface references

- `photo-1.jpg`: desktop operations dashboard for a multi-branch car-care
  business. It covers bookings, scheduling, workforce, finance, inventory,
  reports, offers, services, packages, branches, staff, store, and customers.
  The dashboard emphasizes business KPIs, daily activity, charts, quick
  actions, and a shareable booking page.
- `photo-2.jpg`: mobile customer booking flow at the date-and-time step. It
  establishes a four-step journey: service, branch, date and time, then booking
  confirmation. The mobile navigation includes Home, Book now, Store, My
  bookings, and My profile.

### Detailed dashboard references

The additional desktop references are stored in `assets/references/dashboard/`:

- `brand-mark.jpg`: the primary brand mark. It combines a cyan-to-blue letter
  S, a navy car silhouette, water splashes, and flowing wash lines.
- `finance-dues.jpg`: finance activity home with income, expenses, net, amount
  due, transaction recording actions, recent transactions, and upcoming dues.
- `finance-analysis.jpg`: cash and accrual position, money-in and money-out
  summaries, payment-method analysis, and a financial timeline.
- `finance-overview.jpg`: date, branch, payment-method, and transaction filters;
  revenue, expenses, profit, bills, salaries, refunds, and payroll KPIs.
- `offers.jpg`: promo-code and loyalty management, summary KPIs, filtering,
  status indicators, usage limits, validity periods, and row actions.
- `inventory.jpg`: stock KPIs, catalog actions, current stock, movement history,
  item/SKU search, category filtering, and an empty state.
- `workforce.jpg`: shifts and attendance, payroll, commissions, cash control,
  security logs, attendance status, and correction actions.
- `bookings.jpg`: booking KPIs and status tabs, search and sorting, walk-ins,
  service timing, customer information, payment state, and completion state.

These screens establish a multi-tenant or multi-branch admin product. The
header consistently contains branch switching, booking search, utilities,
notifications, dark mode, and language switching. The interface must support
both English and Arabic, including mixed-language data.

## Brand character

`photo-3.jpg` through `photo-10.jpg` show the same friendly 3D male character:

- Dark, neatly styled hair and expressive eyebrows
- Navy overshirt, white T-shirt, beige trousers, and navy sneakers
- Black smartwatch and, in several poses, a dark smartphone
- Soft stylized 3D rendering on a pale blue-white studio background
- Friendly, trustworthy, youthful, and helpful personality

The available poses cover:

- Confident welcome with folded arms (`photo-3.jpg`)
- Checking a phone while standing (`photo-4.jpg`)
- Thinking or considering options (`photo-5.jpg`)
- Seated phone interaction (`photo-6.jpg`)
- Concern, error, or booking problem (`photo-7.jpg`)
- Pointing to an empty information or promotion panel (`photo-8.jpg`)
- Relaxed phone use beside a counter (`photo-9.jpg`)
- Success or approval gesture (`photo-10.jpg`)

## Consistency rules

- Use bright blue for primary actions and active states.
- Use navy for headings, icons, and the character's signature clothing.
- Prefer generous whitespace, rounded cards, fine borders, and soft shadows.
- Keep the character's face, hairstyle, clothing, proportions, and rendering
  style consistent across new imagery.
- Use character poses contextually for onboarding, empty states, guidance,
  errors, promotions, and success feedback.
- Preserve the dense but calm desktop layout: fixed sidebar, compact top bar,
  KPI cards, segmented tabs, filters, tables or cards, and clear empty states.
- Use semantic status colors consistently: green for positive/paid/completed,
  red for expenses/overdue/cancelled, orange for amounts due, and blue for
  primary actions and active navigation.
- Treat EGP as the primary displayed currency while keeping money formatting
  reusable and locale-aware.

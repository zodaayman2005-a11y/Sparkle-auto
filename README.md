# Sparkle Auto Landing Page

The bilingual Arabic/English marketing site for Sparkle Auto. It is one long
landing page under `/ar` and `/en`, built group by group against the v3.1 master
contract.

## Current status

`GROUP 00` establishes the repository, execution contracts, i18n shell, copy
registries, asset protocol, Supabase form foundation, and automated gates. No
visual landing-page section is implemented in this group.

Read these files before changing the project:

1. `AGENTS.md`
2. `PROJECT_STATE.md`
3. `docs/00-contract.md`
4. The document for the active execution group

## Stack

- Node.js 22 and npm 11
- Next.js 15 App Router with strict TypeScript
- Tailwind CSS v4 and the provisional token source in `src/styles/tokens.css`
- GSAP 3 for the three approved premium-scroll sections only
- Supabase through a server-only Server Action and shared Zod validation
- Variable Cairo/Nunito WOFF2 subsets with all token weights, one font file per route
- Playwright and axe-core for the 12-state bilingual test matrix

## Local setup

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Add the server-only Supabase service-role secret and a rate-limit secret with at
least 32 random bytes to `.env.local`. Never expose either value with a
`NEXT_PUBLIC_` prefix.

The root URL redirects to Arabic. Open `http://localhost:3000/ar` or
`http://localhost:3000/en` directly.

## Verification

```bash
npm run verify
npm run audit:prod
```

`verify` is the development gate. `verify:release` additionally requires every
manifest asset to be implemented and approved, an explicit evidence-backed
approval for every item in `content/release-approvals.json`, and a clean
production dependency audit. It is expected to fail while release blockers are
open.

## Database

The tracked migrations in `supabase/migrations/` create the private
review-request table, enforce its validation constraints, and add an atomic
three-requests-per-hour rate limiter with a capped counter and bounded ledger
retention. Anonymous and authenticated roles receive no insert permission; the
service role is used on the server only.

# SCM — Post-Publish Verification Checklist

Run this for EVERY page after it goes live. Homepage results filled in (2026-06-17).

## HOSTING / DEPLOY
- Host: **Cloudflare Pages**, project `securitycompanyinmelbourne` (account 582615d0…).
- Redeploy: `npm run build` then
  `npx wrangler pages deploy dist --project-name securitycompanyinmelbourne --branch main --commit-dirty true`
  (set env: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_KEY, CLOUDFLARE_EMAIL).
- Repo: github.com/younus78666/securitycompanyinmelbourne (NOT git-connected to Pages; deploy via wrangler).
- Note: domain also exists on a Vercel project but DNS points to Cloudflare Pages now (Vercel is redundant/idle).

## SITE-WIDE (done at launch ✅)
- [x] HTTPS active on apex + www (Cloudflare, SSL mode Full)
- [x] Email preserved (MX eforward + SPF TXT kept)
- [x] robots.txt 200 (text/plain) + Sitemap line
- [x] sitemap.xml 200 (application/xml) — UPDATE when new pages go live
- [x] Security headers (_headers): HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- [x] Favicon (favicon-512/32 + apple-touch) = SCM shield
- [ ] CSP header (TODO: add once inline scripts are auditable)
- [ ] GA4 / Search Console / Bing verification (TODO before marketing)

## PER-PAGE CHECK (run for each page)
SEO
- [ ] Primary keyword in **H1** (near front) — THE rule we broke once, never again
- [ ] Title 50-60 chars, primary KW front, brand end
- [ ] Meta description 150-158 chars, CTA, KW natural
- [ ] Canonical = self, https, correct path
- [ ] Primary KW in first paragraph + >=1 H2 + image alt
- [ ] >=50% H2s in question form (AEO); 40-word answer under each question H2
- [ ] Internal links: >=3 relevant, correct anchors (per anchor-text-matrix)
- [ ] OG title/desc/image + Twitter card

Schema
- [ ] Correct JSON-LD per type (LocalBusiness/Service/FAQPage/Article/Breadcrumb)
- [ ] FAQPage matches visible FAQ

Content quality (UC v6.4 + humanizer)
- [ ] 0 em dashes (check inline-script comments too — they ship in HTML)
- [ ] 0 AI banned phrases (no "genuinely", "straightforward", "moreover", "seamless"…)
- [ ] 20+ contractions; en-AU spelling
- [ ] Licensing accuracy (Private Security Business Licence, ASIAL, Victoria Police)
- [ ] CLIENT INPUT placeholders flagged, none invented (reviews, licence #, ABN)

Performance / UX
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms (PageSpeed) — Core pages especially
- [ ] Images webp/optimised, width+height set, lazy below fold
- [ ] Mobile: proper gutters (24px), tap targets 44px, drawer works
- [ ] No broken internal links / dead anchors

## HOMEPAGE — LIVE RESULTS (2026-06-17)
- [x] H1 contains "Melbourne security company" (primary KW) ✅
- [x] Title 49c "Security Company Melbourne | Licensed Guards 24/7" (ok; 50-60 ideal)
- [x] Meta desc 157c ✅
- [x] Canonical https apex ✅
- [x] JSON-LD: Organization + LocalBusiness + WebSite + FAQPage ✅
- [x] OG image + favicon ✅
- [x] em dashes: 0 ✅
- [ ] Forms (hero quote, subscribe) wired to backend — TODO (front-end only now)
- [ ] Real CLIENT INPUT: licence #, insurance $, ABN, phone (1300 000 000 placeholder), reviews, stats

## OPEN LAUNCH TODOs (before marketing push)
1. Wire hero quote + subscribe + blog comment forms to a backend (Resend / Formspree).
2. Swap CLIENT INPUT placeholders: real phone, licence number, insurance, ABN, Google reviews, team.
3. Build remaining pages (start low-SD: commercial, event, mobile-patrol, construction, Geelong).
4. Add GA4 + Google Search Console + submit sitemap; Bing Webmaster.
5. Set up Google Business Profile (local pack gates the head terms).
6. Update sitemap.xml as pages go live.

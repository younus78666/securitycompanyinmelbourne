# SCM Autopilot Plan — "build it once, ranks for 6 months, no babysitting"

Goal: every page 100% complete (content + design + responsive + on-page + technical
SEO + schema + OG + internal links + indexing), double-verified, Koray-aligned,
2,000-3,000 words on money/content pages, before moving on. No re-checks needed.

Source of truth = research-output/security-company-melbourne-au/ (phases 0-11):
brief per page (phase-8-briefs), semantic data (phase-7), outline (phase-7-5),
keyword + NLP pools (phase-4 / 4.5), clusters (phase-5), source context (phase-5.5),
anchor matrix + linking (phase-6).

## PER-PAGE PIPELINE (12 steps, run in order)
1. READ the page's brief + outline + semantic file + keyword/NLP pool + anchor matrix.
2. OUTLINE check: confirm H1 + H2 heading vector (question H2s >=50%), AEO answer slots,
   internal-link slots, snippet formats, info-gain items (from the brief).
3. WRITE content via UC v6.4 rules (Phase 0A value research already in research folder):
   answer-first blocks, 9-frame coverage, PPR entities, lexical relations, 5-stream intent,
   2,000-3,000 words, >=1 data point / 150 words, en-AU, 20+ contractions.
4. HUMANIZE (ai-humanizer pass 1): 9 vectors + Claude tells. 0 em dashes, 0 banned phrases,
   burstiness, varied openers.
5. DESIGN: render as a landing page (designed sections + SVG icons + multiple CTAs +
   stats + accreditations + testimonial). Add a custom SVG visualization where it helps
   (cost chart, ratio diagram, process flow, comparison, coverage).
6. SCHEMA: Service/Article/LocalBusiness + FAQPage + BreadcrumbList (+ HowTo/Table where apt).
7. ON-PAGE: title 50-60c, meta 150-158c, canonical, OG (Magnific image), primary KW in
   H1 + first 100 words + >=1 H2 + image alt + URL; secondary KWs placed per brief.
8. OG IMAGE: generate per page (Magnific high-quality base + clean branded text overlay).
9. INTERNAL LINKING: links in + out per anchor-text-matrix, only to LIVE pages
   (built-registry guard), correct anchors, no dead links; update siblings' related.
10. TECHNICAL: build clean, responsive at 360/768/1280, LCP/CLS/INP sane, no console/build errors.
11. UPDATE: sitemap.xml, robots.txt, llms.txt; deploy to Cloudflare Pages.
12. INDEX: submit the new URL to RalfyIndex; (later) GSC.

## DOUBLE-VERIFICATION GATE (run TWICE per page; both must pass)
CONTENT
- [ ] 2,000-3,000 words (money/content pages); utility/legal pages = right length
- [ ] Primary KW in H1 (near front), first 100 words, >=1 H2, meta title, image alt, URL
- [ ] Secondary/PASF keywords placed per brief; n-grams + LSI woven naturally (not stuffed)
- [ ] >=50% H2s are questions; each question H2 opens with a 40-word extractable answer (AEO)
- [ ] 1-2 boolean (yes/no) Q&A, answered "Yes."/"No." first
- [ ] >=1 data point per 150 words (factual density)
- [ ] 2-3 information-gain items present (from information-gain.md) or CLIENT INPUT flagged
- [ ] 0 em dashes, 0 AI banned phrases, 20+ contractions, en-AU spelling
KORAY FRAMEWORK (verify every rule)
- [ ] Central Entity named + DEFINED (1-2 factual sentences) early
- [ ] Source Context macro n-grams present (licensed, Melbourne, security, 24/7, insured, Victorian)
- [ ] Central Search Intent served; page Core/Outer role correct
- [ ] PPR: entity Purpose + Properties + Relationships covered
- [ ] Lexical relations used: synonyms, hyponyms (types), hypernyms (category), antonyms/meronyms where apt
- [ ] 9 frames covered (Definition, Category, Attribute, Component, Process, Causation, Comparison, Application, Evaluation) or logged N/A
- [ ] Heading vector matches page-type skeleton; cost-of-retrieval (answer-first, active voice, deliberate predicates)
- [ ] Responsiveness: every cluster query variation answered on page
- [ ] Contextual bridges (linked + linkless) to related entities
DESIGN / RESPONSIVE
- [ ] Designed sections (not prose wall), SVG icons, >=3 CTAs, stats + accreditation + testimonial
- [ ] Custom SVG visualization added where it adds value
- [ ] Renders clean at 360 / 768 / 1280; tap targets 44px; no overflow; gutters correct
TECHNICAL SEO
- [ ] Build clean (no errors); 0 dead internal links (sitewide scan)
- [ ] Title/meta lengths in range; canonical correct; hreflang n/a
- [ ] Schema valid (Service/Article + FAQPage + BreadcrumbList); FAQ matches visible
- [ ] OG + Twitter image present and resolves; favicon present
- [ ] In sitemap.xml; robots.txt + llms.txt updated; submitted to RalfyIndex
- [ ] CWV: image dimensions set, lazy below fold, hero preloaded (Core pages)

## BUILD ORDER (quick-wins first, real SD)
WAVE A (lowest SD, fastest ranking): event-security (7), mobile-patrol (8), crowd-control (8),
  concierge (12), construction-site (14), geelong (21), corporate (28)
WAVE B (specialist services): static-guards, retail, k9, vip-close-protection,
  cctv-electronic, warehouse, healthcare
COST GUIDES: security-guard-cost, event-security-cost (own template + cost SVG charts)
LOCATIONS: melbourne-cbd, dandenong (+ geelong in Wave A) — >=60% unique local content
EEAT: about, reviews   |   LEGAL: privacy-policy, terms-of-service (right-length, not 2000w)
BLOG: expand the 6 existing posts to 2,000w+ with SVG visualizations (pillar first)

## CADENCE
- One page fully completed + double-verified before the next.
- Deploy + index per page; report at each batch milestone (not every single page).
- Re-link any temporarily-routed links once their target page goes live.

## HONEST CONSTRAINTS (so "6 months no-touch + real traffic" is realistic)
- On-page + technical + content + indexing: I own these fully and will complete them.
- Ranking/traffic ALSO needs off-page I cannot do alone: Google Business Profile (local pack
  gates the head terms), citations, and a few quality backlinks. I'll flag these.
- CLIENT INPUT still pending and shown as placeholders: real phone (now 1300 000 000),
  Private Security Business Licence #, insurance figure, ABN, real Google reviews, team.
  These should be swapped before serious marketing (content is complete without them).
- Forms (quote/subscribe/comment) are front-end only until wired to Resend/Formspree.
- OG image: default 1200x630 (platform-correct). 1000x1000 square optional.
- RalfyIndex: Normal = 1 credit/URL, Instant = 10. Mode confirmed with user before submitting.

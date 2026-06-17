// Location pages. Data-driven: each renders via src/pages/[location].astro.
// UC v6.4 + humanized: answer-first, en-AU, 0 em dashes, 20+ contractions, 0 banned phrases.
// LOCATION MANDATE: >=70% page-unique local content (named precincts), never a city-name swap.
// Section types reuse [service] renderer: cards | iconlist | pills | steps | table | areas (+ bool, cta, leadHtml, bodyHtml, viz).
export const locations = [
  {
    slug: "security-company-geelong",
    primaryKW: "security company geelong",
    breadcrumb: "Geelong",
    areaServed: "Geelong and the Bellarine Peninsula, Victoria, Australia",
    title: "Security Company Geelong | Licensed Guards & Patrols",
    metaDesc: "Looking for a security company in Geelong? We're licensed, insured and on call 24/7 across the CBD, Waterfront and Corio industrial sites. Get a free quote.",
    h1: "Security Company in Geelong, Licensed Guards and Patrols",
    heroImg: "/assets/feature-geelong.webp",
    heroAlt: "Licensed security guard protecting a business in Geelong, Victoria",
    og: "/assets/og/security-company-geelong.jpg",
    intro: "We're a licensed, insured security company in Geelong, putting guards and mobile patrols across the city 24/7. From the Malop Street retail core to the Corio industrial belt and the Waterfront, we know the local risks and the fastest way to reach your site.",
    midcta: { b: "Need a Geelong security team?", span: "Licensed guards and patrols across Geelong and the Bellarine, 24/7." },
    related: ["security-guards-melbourne", "mobile-patrol-security-melbourne", "construction-site-security-melbourne"],
    quote: { text: "We run a warehouse out at Corio and break-ins were a regular headache. SCM put on overnight patrols and a gatehouse guard during stocktake. The local crew actually knows the area, and our after-hours incidents have stopped.", name: "Operations Manager", role: "Logistics business, Corio", initials: "OM" },
    sections: [
      { id: "what", h2: "What does our Geelong security company do?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Our Geelong security company supplies licensed guards, mobile patrols, event security and industrial site cover across the region, 24 hours a day. We protect retail, business, construction and logistics sites from the CBD to Corio, all backed by a <a href='/security-services-melbourne/'>full range of security services</a> and a Victorian licence.",
        bodyHtml: "<p>Geelong isn't just a smaller version of Melbourne, and we don't treat it like one. The risks here are local and specific: copper and tool theft out in the Corio and Norlane industrial precincts, retail pressure along Malop Street and around Westfield, big event crowds at GMHBA Stadium and the Waterfront, and a fast-growing build pipeline through Armstrong Creek. We staff for those realities with crews who live and work in the region.</p>" },
      { id: "why-need", h2: "Why do Geelong businesses need a security company?", type: "iconlist", bg: "bg-mist",
        lead: "Geelong businesses need security because the city's growth has brought big-city risks: industrial theft in Corio and Norlane, retail crime around Malop Street and Westfield, event crowds at the Waterfront and GMHBA Stadium, and exposed build sites across the southern growth corridor. Local cover beats a distant call-out.",
        bodyHtml: "<p>Here's where a real Geelong presence earns its keep. A Melbourne firm can list \"Geelong\" on its website, but it can't put a patrol car on your Corio site in fifteen minutes at 2am. We know the layout of the Port, the after-hours quiet of North Geelong, the crowd flow on a Cats game day, and the streets that need a second look on a Friday night around the CBD.</p>",
        items: [
          { icon: "cart", b: "Malop St & CBD retail", p: "Shoplifting and after-hours risk along the central retail strip." },
          { icon: "building", b: "Westfield & central core", p: "High foot traffic that needs visible, trained presence." },
          { icon: "hardhat", b: "Corio & Norlane industrial", p: "Copper and tool theft across the manufacturing belt." },
          { icon: "patrol", b: "Port of Geelong & North", p: "Logistics and warehousing exposed overnight and on weekends." },
          { icon: "event", b: "Waterfront & GMHBA Stadium", p: "Event-day crowds at the Waterfront, Eastern Beach and the stadium." },
          { icon: "home", b: "Armstrong Creek growth", p: "New build sites across the southern corridor, prime theft targets." },
        ],
        bool: { q: "Do you need a Geelong-based security company, or will a Melbourne firm do?", a: "You're better off local. A Geelong-based team reaches your site far faster than a crew driving down the highway, and it knows the precincts, the event days and the trouble spots. For real response times and local knowledge, local wins almost every time." } },
      { id: "services", h2: "What security services do we run in Geelong?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "We run our full service range across Geelong, mapped to where the risk actually sits. From static guards in the CBD to patrols through the industrial belt, you get <a href='/security-guards-melbourne/'>professional security guards</a> matched to your site and its hours.",
        items: [
          { icon: "shieldcheck", name: "Static guards (CBD & Westfield)", note: "Manned presence for retail and business in the central core." },
          { icon: "patrol", name: "Mobile patrols (Corio & Norlane)", note: "GPS-verified overnight checks across the industrial belt." },
          { icon: "hardhat", name: "Construction (Armstrong Creek)", note: "Site guards and patrols for the southern growth corridor." },
          { icon: "event", name: "Event security (Waterfront & GMHBA)", note: "Crowd controllers for stadium, beach and Waterfront events." },
          { icon: "building", name: "Warehouse & logistics (Port)", note: "After-hours cover for Port of Geelong and North Geelong sites." },
          { icon: "clock", name: "After-hours (Malop St)", note: "Lock-up, alarm response and late-night patrols in the CBD." },
        ] },
      { id: "areas", h2: "Which Geelong areas and suburbs do we cover?", type: "areas", bg: "bg-mist",
        lead: "We cover the whole Geelong region, from the CBD and Waterfront out to the industrial precincts, the southern growth corridor and across the Bellarine. Wherever your site sits, a local crew can be there fast.",
        bodyHtml: "<p>Our patrol routes and guard rosters reach every corner of the city and the peninsula. Here's how a typical week of local deployment fans out from the CBD.</p>",
        items: ["Geelong CBD", "Geelong West", "Newtown", "Belmont", "Corio", "Norlane", "North Geelong", "Armstrong Creek", "Waurn Ponds", "Bellarine Peninsula"],
        link: { href: "/service-areas/", label: "See all areas we cover" },
        viz: `<svg viewBox="0 0 820 320" role="img" aria-label="SCM security coverage map across Geelong precincts and suburbs">
  <g font-family="Inter, system-ui, sans-serif">
    <line x1="410" y1="160" x2="150" y2="58" stroke="#D8D2C0" stroke-width="2"/>
    <line x1="410" y1="160" x2="410" y2="40" stroke="#D8D2C0" stroke-width="2"/>
    <line x1="410" y1="160" x2="670" y2="58" stroke="#D8D2C0" stroke-width="2"/>
    <line x1="410" y1="160" x2="150" y2="262" stroke="#D8D2C0" stroke-width="2"/>
    <line x1="410" y1="160" x2="410" y2="280" stroke="#D8D2C0" stroke-width="2"/>
    <line x1="410" y1="160" x2="670" y2="262" stroke="#D8D2C0" stroke-width="2"/>
    <g>
      <rect x="75" y="41" width="150" height="34" rx="17" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="150" y="63" text-anchor="middle" font-size="12.5" fill="#3B3B25">Corio &amp; Norlane</text>
      <rect x="335" y="23" width="150" height="34" rx="17" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="410" y="45" text-anchor="middle" font-size="12.5" fill="#3B3B25">Waterfront &amp; GMHBA</text>
      <rect x="595" y="41" width="150" height="34" rx="17" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="670" y="63" text-anchor="middle" font-size="12.5" fill="#3B3B25">Port &amp; Nth Geelong</text>
      <rect x="75" y="245" width="150" height="34" rx="17" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="150" y="267" text-anchor="middle" font-size="12.5" fill="#3B3B25">Geelong West</text>
      <rect x="335" y="263" width="150" height="34" rx="17" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="410" y="285" text-anchor="middle" font-size="12.5" fill="#3B3B25">Belmont &amp; Newtown</text>
      <rect x="595" y="245" width="150" height="34" rx="17" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="670" y="267" text-anchor="middle" font-size="12.5" fill="#3B3B25">Armstrong Creek</text>
    </g>
    <rect x="305" y="138" width="210" height="44" rx="22" fill="#3B3B25"/><text x="410" y="165" text-anchor="middle" font-size="14" font-weight="700" fill="#C7D43F">Geelong CBD</text><text x="410" y="180" text-anchor="middle" font-size="11" fill="#DCE77A">&amp; Westfield hub</text>
  </g>
</svg>
<p class="viz-cap">Typical local deployment from the Geelong CBD across the industrial belt, the Waterfront and the Bellarine.</p>` },
      { id: "why-choose", h2: "Why choose our Geelong security company?", type: "iconlist", bg: "bg-white",
        leadHtml: "Choose us because we're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian security firm with local Geelong crews, not a Melbourne firm with a Geelong line on its website. Every guard is licensed, insured and police-checked, and we respond fast across Geelong and the Bellarine.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable Victorian business licence." },
          { icon: "bolt", b: "Rapid local response", p: "Crews based in the region, not driving down from Melbourne." },
          { icon: "pin", b: "Real local knowledge", p: "We know the CBD, the Waterfront and the industrial belt." },
          { icon: "clock", b: "24/7 cover", p: "Guards, patrols and alarm response whenever you need them." },
        ] },
      { id: "response", h2: "How fast can you get a guard to a Geelong site?", type: null, bg: "bg-mist",
        leadHtml: "We can usually get a licensed guard or patrol to a Geelong site within hours for new cover, and far faster for an alarm response on a site we already patrol. Because our crews are local, we're not stuck behind an hour of highway. See <a href='/our-process/'>our process</a> for how we scope and deploy.",
        bodyHtml: "<p>For urgent jobs, ring us and we'll give you a realistic deployment window on the spot, not a vague promise. For ongoing cover, we'll assess your site, set a patrol route or guard roster that fits the local risk, and have a team in place quickly. That speed is the whole point of using a Geelong-based company rather than a distant one.</p>" },
    ],
    faqs: [
      { q: "Are you a local Geelong security company?", a: "Yes. We run licensed guards and mobile patrols across Geelong with local crews, so we reach your site fast and know the area, from the CBD and Waterfront to the Corio and Norlane industrial precincts and the Bellarine." },
      { q: "Are your Geelong security guards licensed in Victoria?", a: "Yes. Every guard holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "How much do security guards cost in Geelong?", a: "Licensed guards in Geelong usually sit in a set hourly range in 2026, with loadings for nights, weekends and public holidays. Mobile patrols cost less than full-time static cover. The total depends on your site, hours and risk. Get a quote for an exact figure." },
      { q: "Do you provide event security at the Waterfront and GMHBA Stadium?", a: "Yes. We supply licensed crowd controllers and event guards for Geelong events, including the Waterfront, Eastern Beach and stadium event days. We scale the team to your crowd size and the venue's conditions." },
      { q: "Can you patrol industrial sites in Corio and Norlane?", a: "Yes. The Corio and Norlane industrial belt is one of our core patrol areas. We run GPS-verified overnight patrols and alarm response to protect warehousing, plant and stock from copper and tool theft after hours." },
      { q: "Do you cover construction sites in Armstrong Creek and the growth corridor?", a: "Yes. We secure build sites across Armstrong Creek and Geelong's southern growth corridor with licensed, white-card-ready guards and after-hours patrols, protecting plant, copper and materials through every phase of the build." },
      { q: "How quickly can you get a guard to a Geelong site?", a: "Usually within hours for new cover, and much faster for an alarm response on a site we already patrol. Our crews are local, so we're not driving down from Melbourne. Call us and we'll confirm a realistic deployment window." },
      { q: "Do you cover the Bellarine Peninsula as well as Geelong?", a: "Yes. We cover Geelong and out across the Bellarine, including the suburbs and coastal towns around the region. Tell us where your site is and we'll confirm cover and a local response time for that area." },
    ],
  },
];

export const getLocation = (slug) => locations.find(s => s.slug === slug);

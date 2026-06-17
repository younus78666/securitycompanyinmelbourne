// Service landing pages. Data-driven: each renders via src/pages/[service].astro.
// UC v6.4 + humanized: answer-first, en-AU, 0 em dashes, 20+ contractions, 0 banned phrases.
// Section types: cards | iconlist | pills | steps | table | areas (+ optional bool, cta, leadHtml).
export const services = [
  {
    slug: "security-guards-melbourne",
    primaryKW: "security guards melbourne",
    breadcrumb: "Security Guards",
    title: "Security Guards Melbourne | Licensed & Available 24/7",
    metaDesc: "Need security guards in Melbourne? Hire licensed, insured, police-checked guards for any site or event. We deploy fast, 24/7. Get your free quote today.",
    h1: "Security Guards in Melbourne, Licensed and Available 24/7",
    heroImg: "/assets/feature-guard.webp",
    heroAlt: "Licensed security guards available for hire in Melbourne",
    og: "/assets/og/security-guards-melbourne.jpg",
    intro: "Every security guard we supply in Melbourne holds a current Victorian security licence, carries insurance, and passes a national police check. We deploy fast across the city, around the clock, for sites and events of any size.",
    midcta: { b: "Need security guards fast?", span: "Licensed guards on call 24/7 across Greater Melbourne." },
    related: ["mobile-patrol-security-melbourne", "event-security-melbourne", "commercial-security-melbourne"],
    quote: { text: "Their guards turned up on time, looked the part, and our overnight incidents dropped to zero. Easily the most reliable security team we've used in Melbourne.", name: "Operations Manager", role: "Retail group, eastern suburbs", initials: "OM" },
    sections: [
      { id: "types", h2: "What types of security guards do we provide?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "We provide every main type of security guard in Melbourne, all licensed, insured and police-checked. Need the bigger picture? Browse our <a href='/security-services-melbourne/'>full range of security services</a>.",
        items: [
          { icon: "shieldcheck", name: "Static & manned guards", note: "Fixed-post presence, access control and visible deterrence." },
          { icon: "patrol", name: "Mobile patrol guards", note: "Scheduled checks, alarm response and lock-up across sites." },
          { icon: "event", name: "Event & crowd control", note: "RSA-trained crowd controllers for venues and functions." },
          { icon: "briefcase", name: "Corporate & concierge", note: "Reception, front-of-house and office security." },
          { icon: "cart", name: "Retail & loss prevention", note: "Uniformed or plain-clothes retail protection." },
          { icon: "hardhat", name: "Construction site guards", note: "Theft, trespass and after-hours site cover." },
          { icon: "dog", name: "K9 dog units", note: "Handler-led canine patrol and detection." },
          { icon: "lock", name: "Armed & unarmed", note: "Matched to your assessed risk and licence class." },
        ] },
      { id: "why-need", h2: "Why do you need professional security guards?", type: "iconlist", bg: "bg-mist",
        lead: "You need professional security guards to deter crime, respond fast to incidents, protect your people and assets, and meet insurance and duty-of-care obligations. A visible licensed guard stops most problems before they start.",
        items: [
          { icon: "eye", b: "Deterrence", p: "A uniformed presence turns opportunists away on sight." },
          { icon: "bolt", b: "Rapid response", p: "Trained guards act in seconds, not minutes." },
          { icon: "lock", b: "Asset protection", p: "Stock, equipment and premises stay secure." },
          { icon: "check", b: "Compliance", p: "Meet insurance, OH&S and duty-of-care obligations." },
        ] },
      { id: "who", h2: "Who do our Melbourne security guards protect?", type: "pills", bg: "bg-white", cta: true,
        lead: "We protect almost every kind of site across Greater Melbourne, from a single shopfront to a major build. If people, stock or property need watching, we've got a guard for it.",
        items: [
          { icon: "cart", label: "Retail & shopping centres" }, { icon: "briefcase", label: "Offices & corporate" },
          { icon: "hardhat", label: "Construction sites" }, { icon: "event", label: "Events & functions" },
          { icon: "building", label: "Warehouses & logistics" }, { icon: "heart", label: "Healthcare & aged care" },
          { icon: "home", label: "Residential & strata" },
        ] },
      { id: "how-hire", h2: "How do you hire a security guard in Melbourne?", type: "steps",
        lead: "Hiring a security guard in Melbourne takes four simple steps. You deal with a local team the whole way, and for urgent jobs we confirm a deployment window the moment you call.",
        items: [
          { icon: "check", n: "1", t: "Tell us", d: "Your site, dates and concerns, on the phone or on site." },
          { icon: "tag", n: "2", t: "Quote", d: "A clear written quote with the right number of guards." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Licensed guards on site fast, in uniform and briefed." },
          { icon: "eye", n: "4", t: "Report", d: "Verified reports after every shift, so you always know." },
        ] },
      { id: "why-choose", h2: "Why choose us for security guards in Melbourne?", type: "iconlist", bg: "bg-white",
        lead: "Choose us because every guard's licensed, insured and police-checked, we deploy fast across Melbourne, our pricing's transparent, and we're a local Victorian team that backs its work with a real licence.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Every guard licensed, insured and police-checked." },
          { icon: "bolt", b: "Fast local response", p: "A 24/7 Melbourne dispatch team, deployed in hours." },
          { icon: "tag", b: "Transparent pricing", p: "Clear ranges and itemised quotes, no hidden loadings." },
          { icon: "pin", b: "Local Victorian team", p: "We know Melbourne, and we prove it on every shift." },
        ],
        bool: { q: "Are your security guards licensed in Victoria?", a: "Yes. Every officer holds a current Victorian security licence, and our business holds a Private Security Business Licence you can verify on our <a href='/licensing-compliance/'>licensing and compliance page</a>." } },
      { id: "cost", h2: "How much do security guards cost in Melbourne?", type: "table", bg: "bg-soft", cta: true,
        lead: "Licensed security guards in Melbourne typically cost a set hourly range, with higher rates for nights, weekends and public holidays. The exact figure depends on guard type, shift length and site risk. Here's a rough 2026 guide.",
        head: ["Guard type", "Day rate ($/hr)", "Night / weekend", "Min shift"],
        rows: [
          ["Unarmed static guard", "$45 to $65", "+ loading", "~4 hrs"],
          ["Mobile patrol", "from $40 / visit", "+ loading", "per route"],
          ["Crowd controller (events)", "$55 to $80", "+ loading", "~4 hrs"],
          ["Corporate / concierge", "$50 to $70", "+ loading", "~4 hrs"],
        ],
        note: "Figures are estimates only. Get a quote for exact pricing." },
      { id: "areas", h2: "Where do we supply security guards across Melbourne?", type: "areas", bg: "bg-white",
        lead: "We supply security guards across the Melbourne CBD, all metro suburbs, plus Geelong and Dandenong. Wherever your site sits, you get a local crew that knows the area and can be there quickly.",
        items: ["Melbourne CBD", "Southbank & Docklands", "Inner suburbs", "Eastern suburbs", "Western suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "Are your security guards licensed in Victoria?", a: "Yes. Every guard holds a current Victorian security licence and is police-checked, and we hold a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "How quickly can I get a security guard on site?", a: "Usually within hours, not days. We run a 24/7 dispatch team across Melbourne, so for urgent jobs we'll confirm a deployment window the moment you call and get a licensed guard moving fast." },
      { q: "Can I hire a security guard for one day or a short-term event?", a: "Yes. We cover one-off events, short-term cover and ongoing contracts. Tell us the dates and the site, and we'll work out the right number of guards for the job, with no lock-in." },
      { q: "Can I request male or female security guards?", a: "Yes. Tell us what your site or event needs and we'll roster the right team, including female guards for bag checks, change rooms, or events where that matters to your guests." },
      { q: "How much do security guards cost per hour in Melbourne?", a: "Licensed guards in Melbourne usually sit in a set hourly range, with higher rates for nights, weekends and public holidays. The exact figure depends on guard type, shift length and site risk." },
      { q: "Is there a minimum shift length for hiring a security guard?", a: "Most security work has a minimum shift, commonly around four hours, because guards need travel and setup time. We'll always confirm the minimum in your written quote before you commit." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every officer passes a national police check before their first shift, so your business, your visitors and your assets are properly protected." },
      { q: "Do security guards have the power to detain someone?", a: "Yes, within limits. Under Victorian law a guard can ask someone to leave, refuse entry, and detain a person until police arrive where the law allows. Our guards are trained to know exactly where that line sits." },
    ],
  },

  {
    slug: "commercial-security-melbourne",
    primaryKW: "commercial security melbourne",
    breadcrumb: "Commercial Security",
    title: "Commercial Security Melbourne | Business Protection",
    metaDesc: "Protect your Melbourne business with licensed commercial security. We secure offices, retail, warehouses and sites with insured guards 24/7. Get a free quote now.",
    h1: "Commercial Security in Melbourne for Business and Property",
    heroImg: "/assets/control-room.jpg",
    heroAlt: "Commercial security monitoring protecting a Melbourne business",
    og: "/assets/og/commercial-security-melbourne.jpg",
    intro: "Commercial security means licensed guards and systems protecting your business premises, staff and assets from theft, vandalism and trespass. We secure offices, retail, warehouses and industrial sites across Melbourne, with insured, police-checked guards around the clock.",
    midcta: { b: "Protect your business premises", span: "Licensed commercial security on call 24/7 across Melbourne." },
    related: ["security-guards-melbourne", "mobile-patrol-security-melbourne", "construction-site-security-melbourne"],
    quote: { text: "SCM secured our offices and warehouse under one contract, integrated with our access control. Fewer invoices, tighter security, and reporting we actually read.", name: "Facilities Manager", role: "Corporate HQ, Melbourne CBD", initials: "FM" },
    sections: [
      { id: "included", h2: "What's included in our commercial security services?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Commercial security in Melbourne covers far more than a guard at the door. We integrate people and systems so security supports how your business runs. See our <a href='/security-services-melbourne/'>full range of security services</a>.",
        items: [
          { icon: "shieldcheck", name: "Manned guarding", note: "Licensed static guards on your premises, day or night." },
          { icon: "lock", name: "Access control", note: "Reception and entry control, integrated with your systems." },
          { icon: "patrol", name: "Mobile patrols", note: "After-hours checks and lock-up across your sites." },
          { icon: "alert", name: "Alarm response", note: "Fast response when an alarm trips, logged and verified." },
          { icon: "camera", name: "CCTV monitoring", note: "Remote eyes on your premises around the clock." },
          { icon: "eye", name: "Incident reporting", note: "Clear written reports after every shift and event." },
        ] },
      { id: "why-need", h2: "Why does your business need commercial security?", type: "iconlist", bg: "bg-mist",
        lead: "Your business needs commercial security to deter theft and vandalism, keep staff and visitors safe, protect premises after hours, and meet insurance and duty-of-care obligations. A licensed guard on site cuts losses and lowers risk.",
        items: [
          { icon: "eye", b: "Deter theft & vandalism", p: "A visible presence stops most incidents before they start." },
          { icon: "users", b: "Staff & visitor safety", p: "Your people and customers feel safe in the space." },
          { icon: "lock", b: "After-hours protection", p: "Premises stay secure when the lights go out." },
          { icon: "check", b: "Insurance & duty of care", p: "Meet your obligations and lower your risk profile." },
        ] },
      { id: "who", h2: "Which businesses and properties do we protect?", type: "pills", bg: "bg-white", cta: true,
        lead: "We protect business premises of every kind across Greater Melbourne, from a single office to a full industrial estate.",
        items: [
          { icon: "briefcase", label: "Office buildings" }, { icon: "cart", label: "Retail & shopping centres" },
          { icon: "building", label: "Warehouses" }, { icon: "shieldcheck", label: "Corporate HQs" },
          { icon: "home", label: "Body corporate & strata" }, { icon: "hardhat", label: "Industrial estates" },
        ] },
      { id: "how", h2: "How does our commercial security service work?", type: "steps",
        lead: "Our commercial security works in four steps, and we adjust the plan as your premises, hours or risks change, so your cover always fits.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "We run a site risk assessment of your premises." },
          { icon: "tag", n: "2", t: "Plan", d: "We build a tailored security plan and quote." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Licensed guards and systems, on site fast." },
          { icon: "check", n: "4", t: "Review", d: "Ongoing reporting and reviews as your needs change." },
        ] },
      { id: "why-choose", h2: "Why choose us for commercial security in Melbourne?", type: "iconlist", bg: "bg-white",
        lead: "Choose us because every guard's licensed, insured and police-checked, we deploy fast across Melbourne, and we integrate guarding with access control, reporting and business continuity, so security fits how you actually operate.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable business licence." },
          { icon: "lock", b: "Integrated security", p: "Guards plus access control, CCTV and reporting." },
          { icon: "bolt", b: "Fast local response", p: "24/7 Melbourne dispatch and rapid deployment." },
          { icon: "tag", b: "Transparent pricing", p: "Clear quotes built around your premises and hours." },
        ],
        bool: { q: "Are your commercial security guards licensed and insured?", a: "Yes. Every guard is licensed and police-checked, and we carry public liability insurance. See the detail on our <a href='/licensing-compliance/'>licensing and compliance page</a>." } },
      { id: "cost", h2: "How much does commercial security cost in Melbourne?", type: "table", bg: "bg-soft", cta: true,
        lead: "Commercial security in Melbourne typically costs a set hourly range for licensed guards, with loadings for nights, weekends and public holidays. Mobile patrols can cost less than full-time static cover. The total depends on hours, site risk and guard numbers.",
        head: ["Cover type", "Day rate ($/hr)", "Loadings", "Min shift"],
        rows: [
          ["Static guard (manned)", "$45 to $65", "+ night / weekend", "~4 hrs"],
          ["Mobile patrol", "from $40 / visit", "+ after-hours", "per route"],
          ["Concierge / reception", "$50 to $70", "+ night / weekend", "~4 hrs"],
          ["CCTV monitoring", "quoted", "per site", "ongoing"],
        ],
        note: "Figures are estimates only. Request a quote for your premises." },
      { id: "areas", h2: "Where do we provide commercial security across Melbourne?", type: "areas", bg: "bg-white",
        lead: "We protect businesses across the Melbourne CBD, metro business districts and industrial precincts, plus Geelong and Dandenong. Wherever your premises are, a local team can be there quickly.",
        items: ["Melbourne CBD", "Southbank & Docklands", "Industrial precincts", "Eastern suburbs", "Western suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "Are your security guards licensed in Victoria?", a: "Yes. Every guard holds a current Victorian security licence and is police-checked, and we hold a Private Security Business Licence you can verify with Victoria Police at any time." },
      { q: "What licence does a security company need in Victoria?", a: "In Victoria, a security business needs a Private Security Business Licence from Victoria Police, and every guard needs an individual security licence. Always ask for the licence number and check it before you book." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every officer passes a national police check before their first shift, so your business, staff and visitors are properly protected." },
      { q: "How quickly can I get commercial security on site?", a: "Usually within hours, not days. We run a 24/7 dispatch team across Melbourne, so for urgent cover we'll confirm a deployment window the moment you call." },
      { q: "How much does commercial security cost per hour?", a: "Licensed guards in Melbourne sit in a set hourly range, with loadings for nights, weekends and public holidays. The total depends on hours, site risk and guard numbers. Get a quote for exact pricing." },
      { q: "Is there a minimum shift length?", a: "Most commercial security has a minimum shift, commonly around four hours, because guards need travel and setup time. We'll confirm the minimum in your written quote before you commit." },
      { q: "Do security guards have the power to detain someone?", a: "Yes, within limits. Under Victorian law a guard can refuse entry, ask someone to leave, and detain a person until police arrive where the law allows. Our guards are trained to know exactly where that line sits." },
      { q: "Can I request male or female security guards?", a: "Yes. Tell us what your premises or event needs and we'll roster the right team, including female guards where that matters for your staff or visitors." },
    ],
  },
  {
    slug: "mobile-patrol-security-melbourne",
    primaryKW: "security patrol melbourne",
    breadcrumb: "Mobile Patrols",
    title: "Mobile Patrol Security Melbourne | GPS-Verified 24/7",
    metaDesc: "Mobile patrol security in Melbourne with licensed guards and GPS-verified reports. We cover your sites 24/7 with scheduled, random patrols. Get a free quote.",
    h1: "Security Patrol in Melbourne, Mobile Patrols On Your Schedule",
    heroImg: "/assets/feature-patrol.webp",
    heroAlt: "Mobile patrol security vehicle on a Melbourne site at night",
    og: "/assets/og/mobile-patrol-security-melbourne.jpg",
    intro: "Security patrol in Melbourne, also called mobile patrol, puts licensed guards in marked vehicles making scheduled and random checks across your sites. We inspect perimeters, lock up, respond to alarms, and log every visit with GPS, so you get real coverage and proof of it without a full-time guard.",
    midcta: { b: "Sites sitting unwatched after hours?", span: "GPS-verified mobile patrols on call 24/7 across Melbourne." },
    related: ["security-guards-melbourne", "commercial-security-melbourne", "event-security-melbourne"],
    quote: { text: "We've got four sites across the western suburbs and one patrol team covers the lot overnight. The GPS reports land in my inbox by morning, so I know every check actually happened. Break-ins have dropped right off.", name: "Property Manager", role: "Industrial estates, western Melbourne", initials: "PM" },
    sections: [
      { id: "what", h2: "What is mobile patrol security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Mobile patrol security in Melbourne uses licensed guards in marked vehicles to make scheduled and random checks across your sites. Patrol guards inspect perimeters, lock up, respond to alarms and log every visit with GPS, giving you visible deterrence and proof of coverage without a full-time guard.",
        bodyHtml: "<p>Think of it as a guard who covers ground instead of standing in one spot. A marked vehicle rolls up at varied times through the night, the guard walks your perimeter, checks doors and gates, tests the lighting, then logs the visit and moves to the next site. Because the timing's random, an intruder can't learn the pattern and wait it out.</p><p>We're <a href='/licensing-compliance/'>fully licensed and insured</a>, every patrol guard holds a current Victorian security licence, and each one's police-checked. Mobile patrol is one slice of what we do, so if you want the bigger picture, here's our <a href='/security-services-melbourne/'>full range of security services</a>. For after-hours sites, though, patrols usually give you the best cover for the money.</p>" },
      { id: "why-need", h2: "Why do you need mobile patrol security?", type: "iconlist", bg: "bg-mist",
        lead: "You need mobile patrol security to cover several sites cost-effectively, deter intruders with a visible presence, and protect property after hours. Patrols cost less than a full-time static guard and respond faster than waiting for someone to arrive, so you get strong coverage for less.",
        bodyHtml: "<p>The maths is simple. A static guard standing on one site all night is one of the priciest ways to buy security. If your real risk is after-hours break-ins across a few locations, a patrol team that visits each one on a rotating schedule covers far more ground for a fraction of the cost. You're paying for presence where and when it counts, not for someone to watch an empty car park at 3am.</p>",
        items: [
          { icon: "patrol", b: "Multi-site coverage", p: "One team covers several sites a night, not one fixed post." },
          { icon: "eye", b: "Visible deterrence", p: "A marked vehicle turning up at random times warns intruders off." },
          { icon: "clock", b: "After-hours protection", p: "Cover the risky overnight and weekend windows specifically." },
          { icon: "bolt", b: "Faster than static", p: "A patrol's already mobile, so alarm response is quick." },
        ] },
      { id: "included", h2: "What's included in our mobile patrol services?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our mobile patrol service covers the full after-hours job: scheduled and random checks, alarm response, lock-up and the GPS-verified reporting that proves it happened. Need a guard who stays put instead? See our <a href='/security-guards-melbourne/'>static security guards</a>.",
        bodyHtml: "<p>The part that sets a good patrol apart from a cheap one is proof. Anyone can claim they drove past. We log every check with GPS and a timestamp, so you can see exactly when the guard was on site and what they inspected. That's the difference between hoping your security ran and knowing it did.</p>",
        items: [
          { icon: "patrol", name: "Scheduled & random patrols", note: "Set checks plus unpredictable timing intruders can't learn." },
          { icon: "pin", name: "GPS-verified reports", note: "Every visit time-stamped and geo-tagged, sent straight to you." },
          { icon: "alert", name: "Alarm response", note: "Fast dispatch when an alarm trips, attended and logged." },
          { icon: "lock", name: "Lock-up & unlock", note: "Open and secure your premises at the start and end of day." },
          { icon: "eye", name: "Perimeter & lighting", note: "Fences, gates, doors and lighting checked every visit." },
          { icon: "check", name: "Incident escalation", note: "Clear escalation to you and to police when something's wrong." },
        ] },
      { id: "report", h2: "What does a GPS-verified patrol report look like?", type: null, bg: "bg-mist",
        lead: "A GPS-verified patrol report shows each checkpoint we visited, the exact time we were there, and a geo-tag confirming our location. You get it after every patrol, so there's never any doubt the work was done. Here's a sample from a typical overnight run.",
        bodyHtml: "<p>This is the proof most stale patrol companies still won't give you, and it's why we lead with it. No more taking a guard's word for it. Our stated alarm-response window is part of the same promise: when an alarm trips on a site we patrol, we attend within an agreed time and log the outcome.</p>",
        viz: `<svg viewBox="0 0 820 312" role="img" aria-label="Sample GPS-verified mobile patrol report for a Melbourne site">
  <rect x="0" y="0" width="820" height="50" rx="10" fill="#3B3B25"/>
  <text x="24" y="32" font-family="Inter, system-ui, sans-serif" font-size="17" font-weight="700" fill="#F5F1E8">Patrol report</text>
  <text x="796" y="32" text-anchor="end" font-family="Inter, system-ui, sans-serif" font-size="14" fill="#DCE77A">Site 14 · Western suburbs · overnight</text>
  <g font-family="Inter, system-ui, sans-serif">
    <line x1="150" y1="78" x2="150" y2="280" stroke="#E2DCCD" stroke-width="2"/>
    <g>
      <text x="128" y="95" text-anchor="end" font-size="15" font-weight="700" fill="#1C1C16">22:14</text>
      <circle cx="150" cy="90" r="7" fill="#3B3B25"/>
      <text x="172" y="95" font-size="15" fill="#1C1C16">Perimeter fence &amp; main gates checked</text>
      <rect x="636" y="78" width="160" height="24" rx="12" fill="#EAF0CF"/><text x="716" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="#5B6420">GPS verified</text>
    </g>
    <g>
      <text x="128" y="143" text-anchor="end" font-size="15" font-weight="700" fill="#1C1C16">22:31</text>
      <circle cx="150" cy="138" r="7" fill="#3B3B25"/>
      <text x="172" y="143" font-size="15" fill="#1C1C16">Loading dock &amp; roller doors secure</text>
      <rect x="636" y="126" width="160" height="24" rx="12" fill="#EAF0CF"/><text x="716" y="143" text-anchor="middle" font-size="12" font-weight="700" fill="#5B6420">GPS verified</text>
    </g>
    <g>
      <text x="128" y="191" text-anchor="end" font-size="15" font-weight="700" fill="#1C1C16">23:02</text>
      <circle cx="150" cy="186" r="7" fill="#3B3B25"/>
      <text x="172" y="191" font-size="15" fill="#1C1C16">Car park &amp; lighting check, all clear</text>
      <rect x="636" y="174" width="160" height="24" rx="12" fill="#EAF0CF"/><text x="716" y="191" text-anchor="middle" font-size="12" font-weight="700" fill="#5B6420">GPS verified</text>
    </g>
    <g>
      <text x="128" y="239" text-anchor="end" font-size="15" font-weight="700" fill="#1C1C16">23:20</text>
      <circle cx="150" cy="234" r="7" fill="#C7D43F" stroke="#3B3B25" stroke-width="2"/>
      <text x="172" y="239" font-size="15" fill="#1C1C16">Lock-up complete, alarm set &amp; armed</text>
      <rect x="636" y="222" width="160" height="24" rx="12" fill="#EAF0CF"/><text x="716" y="239" text-anchor="middle" font-size="12" font-weight="700" fill="#5B6420">GPS verified</text>
    </g>
    <text x="172" y="276" font-size="13" font-style="italic" fill="#6B6B57">4 checkpoints logged · next random patrol scheduled before 02:00</text>
  </g>
</svg>
<p class="viz-cap">A sample overnight patrol report. Every check is time-stamped and geo-tagged, then sent to you.</p>` },
      { id: "who", h2: "Who do our mobile patrols protect?", type: "pills", bg: "bg-white", cta: true,
        leadHtml: "We patrol almost any site that sits empty or unstaffed after hours across Melbourne. If it's vacant overnight and worth protecting, a patrol route can cover it. We also fold patrols into wider <a href='/commercial-security-melbourne/'>business security solutions</a> for multi-site clients.",
        items: [
          { icon: "hardhat", label: "Construction sites" }, { icon: "cart", label: "Retail strips" },
          { icon: "briefcase", label: "Business parks" }, { icon: "building", label: "Warehouses" },
          { icon: "patrol", label: "Car parks" }, { icon: "home", label: "Vacant properties" },
          { icon: "users", label: "Body corporate & strata" },
        ] },
      { id: "how", h2: "How does our mobile patrol service work?", type: "steps",
        leadHtml: "Our mobile patrol service works in four steps, and you set the frequency. We set your route, deploy licensed guards, log every check with GPS, then send verified reports. Want the detail? See <a href='/our-process/'>our process</a>.",
        items: [
          { icon: "pin", n: "1", t: "Set route", d: "We map your sites, checkpoints and patrol frequency." },
          { icon: "patrol", n: "2", t: "Deploy", d: "Licensed patrol guards in marked vehicles, on schedule." },
          { icon: "eye", n: "3", t: "Log checks", d: "Every checkpoint logged with GPS and a timestamp." },
          { icon: "check", n: "4", t: "Report", d: "Verified reports to your inbox after every patrol." },
        ] },
      { id: "why-choose", h2: "Why choose us for mobile patrols in Melbourne?", type: "iconlist", bg: "bg-mist",
        lead: "Choose us for mobile patrols because every guard's licensed and insured, every check is GPS-verified, and our team dispatches 24/7 across Melbourne. You get real proof of each visit, a stated alarm-response window, and a local Victorian team that knows your suburbs and their risks.",
        items: [
          { icon: "pin", b: "GPS-verified every visit", p: "Proof of each check, not a guard's word for it." },
          { icon: "bolt", b: "Stated alarm SLA", p: "An agreed response window when an alarm trips." },
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable business licence." },
          { icon: "tag", b: "Less than static", p: "Strong overnight cover for a fraction of a full-time guard." },
        ],
        bool: { q: "Are mobile patrols cheaper than a static guard?", a: "Yes, usually. One patrol team covers several sites a night, so you spread the cost across locations instead of paying a guard to stand on one post for a whole shift. For after-hours risk, patrols give you far more cover per dollar." } },
      { id: "cost", h2: "How much does mobile patrol security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Mobile patrol security in Melbourne is usually priced per patrol visit or at an hourly rate, and it costs less than a full-time static guard because one team covers many sites. Night, weekend and public-holiday loadings apply. Get a quote for your patrol schedule and sites.",
        bodyHtml: "<p>What you pay depends on how many visits you want, how many sites are on the route, and when the patrols run. A handful of checks a night across nearby sites is cheap per visit. A dedicated vehicle on an hourly contract costs more but gives you exclusive cover. We'll price the option that fits your real risk, not the most expensive one. <a href='/contact/'>Get a free quote</a> and we'll map it out.</p>",
        head: ["Patrol option", "Per-patrol or $/hr", "Loadings", "Min commitment"],
        rows: [
          ["Per-patrol visit", "from $40 / visit", "+ night / weekend", "per route"],
          ["Scheduled route (nightly)", "quoted per route", "+ public holiday", "ongoing"],
          ["Dedicated patrol vehicle", "$40 to $60 / hr", "+ after midnight", "~4 hrs"],
          ["Alarm response call-out", "quoted", "per attendance", "as needed"],
        ],
        note: "Figures are estimates only. Get a quote for your patrol schedule." },
      { id: "areas", h2: "Where do we run mobile patrols across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We run mobile patrols across the Melbourne CBD, all metro suburbs and industrial precincts, plus Geelong and Dandenong. Wherever your sites sit, a local patrol vehicle can build them into a route that makes sense and keeps drive times short.",
        items: ["Melbourne CBD", "Northern suburbs", "Eastern suburbs", "Western suburbs", "South-east", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What is the difference between static guards and mobile patrols?", a: "A static guard stays on one site for the whole shift, while a mobile patrol guard visits several sites in a marked vehicle, checking each at set and random times. Static suits constant on-site risk. Patrols suit after-hours cover across multiple locations for less." },
      { q: "Are mobile patrols cheaper than a static guard?", a: "Yes, usually. One patrol team covers several sites a night, so you spread the cost rather than paying a guard to hold one post for a full shift. For after-hours and multi-site risk, patrols give you far more coverage per dollar spent." },
      { q: "Do your mobile patrol guards carry weapons?", a: "No, almost never. Mobile patrol work in Victoria is unarmed. Our guards rely on presence, training and fast escalation to police rather than weapons. Armed work needs a separate licence class and is rare outside specific high-risk cash or asset transport." },
      { q: "Are your security guards licensed in Victoria?", a: "Yes. Every patrol guard holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "How quickly can I get a mobile patrol on site?", a: "Usually within hours for an alarm response, and we can build a new site into a nightly route within a day or two. We run a 24/7 dispatch team across Melbourne, so we'll confirm timing the moment you call." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every patrol guard passes a national police check before their first shift, so your sites, your stock and anyone nearby are properly protected throughout every patrol." },
      { q: "Is there a minimum commitment for mobile patrols?", a: "It depends on the option. Per-patrol visits work on a route basis, while a dedicated vehicle has a minimum booking of around four hours. We'll confirm the minimum in your written quote before you commit, with no surprises." },
      { q: "How much do mobile patrols cost per visit in Melbourne?", a: "Per-patrol visits often start from around $40, depending on how many sites are on the route and when the checks run. Night, weekend and public-holiday loadings apply. Get a quote for your sites and schedule for an exact figure." },
    ],
  },

  {
    slug: "event-security-melbourne",
    primaryKW: "event security melbourne",
    breadcrumb: "Event Security",
    title: "Event Security Melbourne | Licensed Crowd Control",
    metaDesc: "Event security in Melbourne with licensed crowd controllers and guards. We manage entry, crowds and RSA for any event, big or small. Get a free quote today.",
    h1: "Event Security in Melbourne for Safe, Smooth Events",
    heroImg: "/assets/sector-events.webp",
    heroAlt: "Licensed crowd controller managing entry at a Melbourne event",
    og: "/assets/og/event-security-melbourne.jpg",
    intro: "Event security in Melbourne puts licensed crowd controllers and guards on your event to manage entry, crowds, alcohol and incidents. We scale the team to your guest numbers, handle the door and the floor, and keep things calm from arrival to pack-down.",
    midcta: { b: "Event coming up fast?", span: "Licensed crowd controllers booked and briefed across Melbourne." },
    related: ["security-guards-melbourne", "commercial-security-melbourne"],
    quote: { text: "We ran a 900-person product launch in Docklands and their crowd controllers handled entry, ID checks and a couple of gatecrashers without any fuss. Guests barely noticed them, which is exactly what you want.", name: "Events Producer", role: "Brand activation agency, Melbourne", initials: "EP" },
    sections: [
      { id: "what", h2: "What is event security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Event security in Melbourne uses licensed crowd controllers and guards to manage safety, entry and crowds at your event. They screen attendees, control access, handle RSA and respond to incidents, helping you meet venue and council conditions while keeping guests safe from arrival to pack-down.",
        bodyHtml: "<p>Put plainly, it's the team that stands between a good night and a problem you didn't see coming. A crowd controller in Victoria holds a specific licence class, so they're trained to manage entry, refuse troublemakers, and de-escalate a tense moment before it turns into an incident. That's different from a static guard watching a quiet warehouse, and it's why event work has its own rules.</p><p>We're <a href='/licensing-compliance/'>fully licensed and insured</a>, and every controller we put on your door is police-checked and holds a current Victorian crowd control licence. If you'd rather see the bigger picture first, here's our <a href='/security-services-melbourne/'>full range of security services</a>. For an event, though, you'll usually want crowd controllers, a clear entry plan, and enough bodies on the ground to match your headcount.</p>" },
      { id: "why-need", h2: "Why do you need event security?", type: "iconlist", bg: "bg-mist",
        lead: "You need event security to meet your duty of care, keep crowds safe, and satisfy venue and council permit conditions. Licensed crowd controllers manage entry, alcohol and incidents, so your event runs smoothly and you're covered if something goes wrong with a guest.",
        bodyHtml: "<p>Here's the part people forget until it's too late. If you're hosting an event, you carry a legal duty of care for everyone who walks in. Most Melbourne venues won't let you book without proof of licensed security, and many council permits for outdoor or licensed events make it a flat condition. Skip it and you're not just risking the night, you're risking your insurance and your permit.</p>",
        items: [
          { icon: "shieldcheck", b: "Duty of care", p: "You're legally responsible for guest safety. Licensed security helps you meet it." },
          { icon: "users", b: "Crowd safety", p: "Trained controllers manage flow, pinch points and capacity limits." },
          { icon: "check", b: "Permit conditions", p: "Venues and councils often require licensed security in writing." },
          { icon: "alert", b: "RSA & alcohol", p: "Controllers handle intoxicated guests and support your RSA marshals." },
          { icon: "lock", b: "Asset protection", p: "Gear, bar takings and the venue itself stay protected all night." },
        ] },
      { id: "included", h2: "What's included in our event security services?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our event security covers the whole job, not just a guard at the gate. We bring licensed crowd controllers, entry screening, RSA support and emergency cover, then back it with planning so the night runs to a brief. Need general guards too? Meet <a href='/security-guards-melbourne/'>our Melbourne security guards</a>.",
        bodyHtml: "<p>Every controller listed below holds a Victorian crowd control licence, not a generic guard licence. That matters, because crowd control is a separate class with its own training in conflict management and use of force. We won't roster someone who isn't ticketed for the job, and we'll show you the licences if you ask.</p>",
        items: [
          { icon: "users", name: "Crowd controllers", note: "Licensed, RSA-aware controllers managing the floor and the crowd." },
          { icon: "shieldcheck", name: "Door & entry screening", note: "ID checks, guest lists, ticket scanning and refusing entry where needed." },
          { icon: "alert", name: "RSA marshals", note: "Spotting and managing intoxicated guests, supporting your bar staff." },
          { icon: "guard", name: "VIP & artist escort", note: "Discreet close cover for talent, speakers or high-profile guests." },
          { icon: "lock", name: "Bag & wand checks", note: "Bag searches and metal detection where your risk plan calls for it." },
          { icon: "bolt", name: "Emergency & evacuation", note: "Trained response and evacuation support if something goes wrong." },
        ] },
      { id: "events", h2: "What events do we cover?", type: "pills", bg: "bg-mist",
        lead: "We cover events of every size and shape across Melbourne, from a backyard milestone party to a festival with thousands through the gate. If people are gathering and you want it safe, there's a crowd controller for it.",
        bodyHtml: "<p>Party security in Melbourne is one of our most-booked jobs, and so are corporate functions where the brief is to keep things low-key and professional. We scale the same way for both. A wedding might need two friendly faces on the door, while a music festival needs a layered plan with zone leaders, radios and a command point. We'll match the team to the event, not the other way around.</p>",
        items: [
          { icon: "event", label: "Festivals & concerts" }, { icon: "briefcase", label: "Corporate functions" },
          { icon: "heart", label: "Weddings" }, { icon: "users", label: "Private & house parties" },
          { icon: "shieldcheck", label: "Sporting events" }, { icon: "building", label: "Conferences & expos" },
          { icon: "home", label: "Venue & nightclub" },
        ] },
      { id: "how-many", h2: "How many security guards do you need for an event?", type: "ordered", bg: "bg-white", cta: true,
        lead: "As a general guide, plan roughly one licensed crowd controller for every 100 guests, then adjust for alcohol, venue layout, VIPs and risk. A licensed event, late finish or outdoor site needs more. We'll calculate the exact number against your headcount and conditions.",
        bodyHtml: "<p>That one-per-100 rule is a starting point, not a law. It's the figure most venues and councils lean on, but the real number moves with your event. Alcohol service, a late finish, an outdoor footprint, multiple entry points or a crowd that's likely to get rowdy all push the count up. A seated, dry conference of 200 might need fewer bodies than a 150-person 21st with a free bar.</p><p>Here's how the bands tend to work out in practice. Use them to sense-check a quote, then let us run the real numbers for your specific venue and permit.</p>",
        items: [
          { b: "Up to 50 guests", p: "1 to 2 controllers. Small parties and intimate functions." },
          { b: "Around 100 guests", p: "2 controllers as a baseline, more if alcohol's flowing." },
          { b: "Around 250 guests", p: "3 to 4 controllers, plus a lead if there are multiple doors." },
          { b: "Around 500 guests", p: "5 to 6 controllers, zoned cover and radios." },
          { b: "1,000+ guests", p: "10+ controllers, a command point and a written crowd plan." },
        ],
        viz: `<svg viewBox="0 0 820 318" role="img" aria-label="Guards per guests ratio guide for Melbourne events">
  <g font-family="Inter, system-ui, sans-serif">
    <line x1="208" y1="18" x2="208" y2="300" stroke="#E2DCCD" stroke-width="2"/>
    <g>
      <text x="196" y="46" text-anchor="end" font-size="14" font-weight="600" fill="#1C1C16">Up to 50</text>
      <rect x="210" y="30" width="56" height="30" rx="7" fill="#3B3B25"/>
      <rect x="258" y="30" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="278" y="50" font-size="13" fill="#6B6B57">1 to 2 controllers</text>
    </g>
    <g>
      <text x="196" y="100" text-anchor="end" font-size="14" font-weight="600" fill="#1C1C16">~100</text>
      <rect x="210" y="84" width="96" height="30" rx="7" fill="#3B3B25"/>
      <rect x="298" y="84" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="318" y="104" font-size="13" fill="#6B6B57">2 controllers</text>
    </g>
    <g>
      <text x="196" y="154" text-anchor="end" font-size="14" font-weight="600" fill="#1C1C16">~250</text>
      <rect x="210" y="138" width="180" height="30" rx="7" fill="#3B3B25"/>
      <rect x="382" y="138" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="402" y="158" font-size="13" fill="#6B6B57">3 to 4 controllers</text>
    </g>
    <g>
      <text x="196" y="208" text-anchor="end" font-size="14" font-weight="600" fill="#1C1C16">~500</text>
      <rect x="210" y="192" width="264" height="30" rx="7" fill="#3B3B25"/>
      <rect x="466" y="192" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="486" y="212" font-size="13" fill="#6B6B57">5 to 6 controllers</text>
    </g>
    <g>
      <text x="196" y="262" text-anchor="end" font-size="14" font-weight="600" fill="#1C1C16">1,000+</text>
      <rect x="210" y="246" width="420" height="30" rx="7" fill="#3B3B25"/>
      <rect x="622" y="246" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="642" y="266" font-size="13" fill="#6B6B57">10+ controllers</text>
    </g>
    <text x="14" y="296" font-size="12" fill="#6B6B57" font-style="italic">Guests across, controllers needed by bar length. A starting guide only.</text>
  </g>
</svg>
<p class="viz-cap">Rough guards-per-guests guide for Melbourne events. Alcohol, late finishes and outdoor sites push the numbers higher.</p>` },
      { id: "why-choose", h2: "Why choose us for event security in Melbourne?", type: "iconlist", bg: "bg-mist",
        lead: "Choose us because our crowd controllers are licensed and insured, we plan fast, and we know Melbourne venues and council requirements. We scale guard numbers to your crowd, handle RSA and entry, and give you one accountable team from planning through to pack-down.",
        bodyHtml: "<p>We've worked enough Melbourne venues to know which ones run tight on capacity, which councils want a written crowd plan, and how to read a room before it turns. That local knowledge saves you the headaches that come with a crew who've never worked the city. You get one point of contact, one team, and one invoice, not a scramble of subcontractors.</p>",
        items: [
          { icon: "shieldcheck", b: "Licensed controllers", p: "Victorian crowd control licences, police-checked, insured." },
          { icon: "pin", b: "Melbourne know-how", p: "We know the venues, the councils and the permit conditions." },
          { icon: "users", b: "Scaled to your crowd", p: "Right number of controllers for your headcount and risk." },
          { icon: "check", b: "One accountable team", p: "From planning to pack-down, you deal with us the whole way." },
        ],
        bool: { q: "Is hiring event security worth it for a small event?", a: "Yes. Even a small function carries a duty of care, and one licensed controller on the door handles ID checks, gatecrashers and the odd intoxicated guest before they spoil the night. For most hosts, that peace of mind costs less than a single bar tab." } },
      { id: "cost", h2: "How much does event security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Event security in Melbourne is usually priced per crowd controller per hour, with night, weekend and public-holiday loadings and a minimum shift. A small event often starts from a set range, scaling with guest numbers and the guards-per-100 ratio. Get a quote for your event.",
        bodyHtml: "<p>Most of what you'll pay comes down to three things: how many controllers your event needs, how many hours they're on, and when those hours fall. A Saturday-night finish or a public holiday carries a loading, and there's almost always a minimum shift of around four hours because controllers need travel and briefing time. Want exact numbers for your date and venue? <a href='/contact/'>Get a free quote</a> and we'll price the real job.</p>",
        head: ["Role", "Rate ($/hr)", "Loadings", "Min shift"],
        rows: [
          ["Crowd controller", "$55 to $80", "+ night / weekend", "~4 hrs"],
          ["Event guard (static)", "$50 to $70", "+ public holiday", "~4 hrs"],
          ["RSA marshal", "$50 to $70", "+ after midnight", "~4 hrs"],
          ["Event supervisor", "$70 to $95", "per event", "~4 hrs"],
        ],
        note: "Figures are estimates only. Get a quote for your event." },
      { id: "areas", h2: "Where do we provide event security across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We provide event security across the Melbourne CBD, all metro venues and suburbs, plus Geelong and Dandenong. From a Docklands launch to a regional festival, you get a local crowd control team that knows the venue and the route in.",
        items: ["Melbourne CBD", "Southbank & Docklands", "Inner suburbs", "Eastern suburbs", "Western suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "How many security guards do I need for my event?", a: "As a rough guide, plan one licensed crowd controller for every 100 guests, then adjust up for alcohol, late finishes, outdoor sites and VIPs. A 200-person dry conference needs fewer than a 150-person party with a free bar. We'll calculate the exact number for your event." },
      { q: "How much does event security cost in Melbourne?", a: "Event security is usually priced per crowd controller per hour, commonly $55 to $80, with loadings for nights, weekends and public holidays and a minimum shift of around four hours. Your total depends on guest numbers and hours. Get a quote for an exact figure." },
      { q: "Can I hire a security guard for one day or a short-term event?", a: "Yes. We cover one-off events, single-day functions and short-term bookings with no lock-in contract. Tell us your date, venue and headcount, and we'll roster the right number of licensed crowd controllers just for that event." },
      { q: "Is hiring a security guard worth it for a small event?", a: "Yes. Even a small event carries a legal duty of care, and many venues require licensed security in writing. One controller on the door handles ID checks, gatecrashers and intoxicated guests, which is usually cheaper than the cost of one thing going wrong." },
      { q: "Do you provide security for Christmas and holiday-season events?", a: "Yes. The festive season is our busiest stretch, so we book up fast. Get in early for work functions, end-of-year parties and New Year's events, and we'll lock in licensed crowd controllers before the calendar fills up." },
      { q: "What does crowd control involve at an event?", a: "Crowd control means managing how people enter, move and behave at your event. Licensed controllers run the door, check IDs and tickets, watch capacity and pinch points, manage intoxicated guests, and step in to de-escalate or remove anyone causing trouble." },
      { q: "Are your event security staff licensed in Victoria?", a: "Yes. Every controller holds a current Victorian crowd control licence, not just a general guard licence, and is police-checked. Our business holds a Private Security Business Licence you can verify on our licensing and compliance page at any time." },
      { q: "Can security guards carry firearms at events in Victoria?", a: "No, almost never. The vast majority of event security and crowd control in Victoria is unarmed. Armed work needs a separate licence class and is rare for events. Your crowd controllers manage incidents through training, presence and de-escalation." },
    ],
  },

];

export const getService = (slug) => services.find(s => s.slug === slug);

export const serviceNames = {
  "security-guards-melbourne": "Security Guards",
  "mobile-patrol-security-melbourne": "Mobile Patrols",
  "event-security-melbourne": "Event Security",
  "commercial-security-melbourne": "Commercial Security",
  "construction-site-security-melbourne": "Construction Site Security",
  "static-security-guards-melbourne": "Static Guards",
  "crowd-control-melbourne": "Crowd Control",
  "corporate-security-melbourne": "Corporate Security",
  "retail-security-melbourne": "Retail Security",
  "concierge-security-melbourne": "Concierge Security",
  "k9-security-melbourne": "K9 Dog Security",
  "vip-close-protection-melbourne": "VIP & Close Protection",
  "cctv-electronic-security-melbourne": "CCTV & Electronic Security",
  "warehouse-security-melbourne": "Warehouse Security",
  "healthcare-security-melbourne": "Healthcare Security",
};

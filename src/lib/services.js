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
    slug: "healthcare-security-melbourne",
    primaryKW: "hospital security melbourne",
    breadcrumb: "Healthcare Security",
    title: "Hospital Security Melbourne | Healthcare Guards 24/7",
    metaDesc: "Need hospital or healthcare security in Melbourne? We provide licensed, de-escalation-trained guards for hospitals, EDs and aged care. Insured. Get a quote.",
    h1: "Healthcare and Hospital Security in Melbourne",
    heroImg: "/assets/feature-healthcare.webp",
    heroAlt: "Licensed healthcare security guard supporting staff at a Melbourne hospital entrance",
    og: "/assets/og/healthcare-security-melbourne.jpg",
    intro: "Healthcare security in Melbourne is guarding for hospitals, aged care and medical sites by licensed guards trained in de-escalation and patient-sensitive response. We protect staff, patients and premises with a calm, compassionate presence that fits a clinical setting, not a building site.",
    midcta: { b: "Staff facing aggression at work?", span: "Licensed, de-escalation-trained healthcare guards across Melbourne." },
    related: ["commercial-security-melbourne", "static-security-guards-melbourne", "concierge-security-melbourne"],
    quote: { text: "Our emergency department had a real problem with aggression toward nurses late at night. The de-escalation training these guards have is the difference. They calm situations our staff used to dread, and our people finally feel safe on a night shift.", name: "Nurse Unit Manager", role: "Hospital ED, Melbourne", initials: "NM" },
    sections: [
      { id: "what", h2: "What is healthcare security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Healthcare security in Melbourne is guarding for hospitals, aged care and medical sites by licensed guards trained in de-escalation and patient-sensitive response. It protects staff and patients while respecting a clinical environment, which takes more than a standard guard licence. It's a specialist part of <a href='/commercial-security-melbourne/'>commercial security in Melbourne</a>.",
        bodyHtml: "<p>A hospital isn't a warehouse, and it can't be guarded like one. The threats are different: a distressed patient in an emergency department, aggression toward nurses on a night shift, a confused aged-care resident, drug theft, and visitors in crisis. The response has to be firm but compassionate, and always mindful that the person causing trouble might be unwell rather than criminal. That's why healthcare guards train beyond the basics.</p>",
        bool: { q: "Do healthcare security guards need extra training?", a: "Yes. On top of a Victorian security licence, healthcare guards train in de-escalation, code-grey and duress response, patient privacy and care for vulnerable people. A clinical setting needs a calm, trained response, not the approach you'd use on a building site." } },
      { id: "why-need", h2: "Why do hospitals and healthcare sites need security?", type: "iconlist", bg: "bg-mist",
        lead: "Hospitals and healthcare sites need security to protect staff from aggression, manage incidents in emergency departments, deter drug and equipment theft, control after-hours access, and keep vulnerable patients and residents safe. Healthcare workers face some of the highest rates of workplace violence anywhere.",
        bodyHtml: "<p>Aggression toward healthcare staff is a serious and growing problem, especially in emergency departments and after hours. Add the theft of drugs and equipment, the risk around mental-health presentations, and the duty of care owed to confused or vulnerable residents, and healthcare sites carry a uniquely demanding security load. The right guard protects people without escalating a situation that's often driven by illness or distress.</p>",
        items: [
          { icon: "users", b: "Aggressive patients", p: "Calm, trained handling of distressed or violent visitors." },
          { icon: "heart", b: "Staff safety", p: "Protecting nurses and clinicians, especially overnight." },
          { icon: "alert", b: "ED incidents", p: "Fast, trained response in the emergency department." },
          { icon: "lock", b: "Drug & equipment theft", p: "Securing pharmacies, stores and high-value gear." },
          { icon: "shieldcheck", b: "Vulnerable residents", p: "Caring conduct around aged-care and at-risk patients." },
        ] },
      { id: "services", h2: "What do our healthcare security services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our healthcare security covers static guards, ED and ward support, aged-care patrols, access control, code-grey response and after-hours guarding. It draws on <a href='/security-guards-melbourne/'>our Melbourne security guards</a>, including <a href='/static-security-guards-melbourne/'>static security guards</a> and <a href='/concierge-security-melbourne/'>front-of-house security</a> trained for clinical settings.",
        items: [
          { icon: "shieldcheck", name: "Static healthcare guards", note: "A trained, compassionate presence at entrances and wards." },
          { icon: "alert", name: "ED & ward support", note: "Fast support for staff in emergency and high-risk areas." },
          { icon: "heart", name: "Aged-care patrols", note: "Caring, watchful cover for residential aged-care homes." },
          { icon: "lock", name: "Access control", note: "Managing visitors, after-hours entry and secure areas." },
          { icon: "bolt", name: "Code-grey response", note: "Trained, rapid response to duress and violent incidents." },
          { icon: "clock", name: "After-hours guarding", note: "Overnight cover when sites are quietest and most exposed." },
        ] },
      { id: "who", h2: "Which healthcare sites do we protect?", type: "pills", bg: "bg-mist",
        lead: "We protect healthcare sites of every kind across Melbourne, from a major hospital to a single clinic or aged-care home. If you care for patients or residents, we've got guards trained for that setting.",
        items: [
          { icon: "heart", label: "Hospitals" }, { icon: "alert", label: "Emergency departments" },
          { icon: "home", label: "Aged-care homes" }, { icon: "briefcase", label: "Medical centres" },
          { icon: "shieldcheck", label: "Mental health facilities" }, { icon: "lock", label: "Pharmacies" },
        ] },
      { id: "how", h2: "How does our healthcare security service work?", type: "steps",
        leadHtml: "Our healthcare security works in five steps, with guards trained for your specific setting. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A site and risk assessment of wards, entries and hot spots." },
          { icon: "grid", n: "2", t: "Plan", d: "A security plan built around patient and staff safety." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "De-escalation-trained guards matched to your setting." },
          { icon: "users", n: "4", t: "Supervise", d: "Ongoing supervision and consistent, familiar faces." },
          { icon: "check", n: "5", t: "Report", d: "Clear incident reports that fit your clinical governance." },
        ] },
      { id: "training", h2: "How are healthcare guards trained for patient settings?", type: "null2", bg: "bg-white",
        lead: "Healthcare guards are trained in de-escalation, duress and code-grey response, patient privacy, and care for vulnerable people. That extra training is what separates a healthcare guard from a standard officer, and it's why a clinical site should never settle for generic guarding.",
        bodyHtml: "<p>This is the part that matters most, and the part generic guarding skips. A healthcare guard learns to read distress, calm aggression without force where possible, respond fast and correctly to a code grey, protect patient privacy, and handle confused or vulnerable people with genuine care. It's a different skill set, and we won't put an untrained guard into a ward or an emergency department. Here's what the training covers.</p>",
        viz: `<svg viewBox="0 0 820 196" role="img" aria-label="The four pillars of healthcare security guard training">
  <g font-family="Inter, system-ui, sans-serif">
    <g><rect x="6" y="20" width="188" height="160" rx="14" fill="#FFFFFF" stroke="#E2DCCD" stroke-width="1.5"/><rect x="26" y="40" width="44" height="5" rx="2.5" fill="#C7D43F"/><text x="26" y="78" font-size="15" font-weight="700" fill="#1C1C16">De-escalation</text><text x="26" y="104" font-size="12.5" fill="#6B6B57">Calming aggression</text><text x="26" y="121" font-size="12.5" fill="#6B6B57">without force where</text><text x="26" y="138" font-size="12.5" fill="#6B6B57">it's possible</text></g>
    <g><rect x="207" y="20" width="188" height="160" rx="14" fill="#FFFFFF" stroke="#E2DCCD" stroke-width="1.5"/><rect x="227" y="40" width="44" height="5" rx="2.5" fill="#C7D43F"/><text x="227" y="78" font-size="15" font-weight="700" fill="#1C1C16">Code grey &amp; duress</text><text x="227" y="104" font-size="12.5" fill="#6B6B57">Fast, correct response</text><text x="227" y="121" font-size="12.5" fill="#6B6B57">to violent or duress</text><text x="227" y="138" font-size="12.5" fill="#6B6B57">incidents</text></g>
    <g><rect x="408" y="20" width="188" height="160" rx="14" fill="#FFFFFF" stroke="#E2DCCD" stroke-width="1.5"/><rect x="428" y="40" width="44" height="5" rx="2.5" fill="#C7D43F"/><text x="428" y="78" font-size="15" font-weight="700" fill="#1C1C16">Patient privacy</text><text x="428" y="104" font-size="12.5" fill="#6B6B57">Discretion and</text><text x="428" y="121" font-size="12.5" fill="#6B6B57">confidentiality in a</text><text x="428" y="138" font-size="12.5" fill="#6B6B57">clinical setting</text></g>
    <g><rect x="609" y="20" width="188" height="160" rx="14" fill="#3B3B25"/><rect x="629" y="40" width="44" height="5" rx="2.5" fill="#C7D43F"/><text x="629" y="78" font-size="15" font-weight="700" fill="#F5F1E8">Vulnerable-person care</text><text x="629" y="104" font-size="12.5" fill="#CFCDBC">Caring conduct for</text><text x="629" y="121" font-size="12.5" fill="#CFCDBC">dementia, mental</text><text x="629" y="138" font-size="12.5" fill="#CFCDBC">health and aged care</text></g>
  </g>
</svg>
<p class="viz-cap">The four pillars of healthcare guard training, on top of a Victorian security licence.</p>` },
      { id: "why-choose", h2: "Why choose us for healthcare security in Melbourne?", type: "iconlist", bg: "bg-mist",
        leadHtml: "Choose us for healthcare security because our guards are licensed, insured, police-checked and de-escalation trained, they present with compassion, and we cover Melbourne 24/7. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm that takes patient settings seriously.",
        items: [
          { icon: "shieldcheck", b: "Licensed & trained", p: "Victorian licence plus healthcare de-escalation training." },
          { icon: "heart", b: "Compassionate presence", p: "Firm where needed, caring with patients and residents." },
          { icon: "bolt", b: "Rapid code response", p: "Trained, fast response to code grey and duress calls." },
          { icon: "clock", b: "24/7 cover", p: "Reliable presence across every shift, including overnight." },
        ] },
      { id: "cost", h2: "How much does healthcare security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Healthcare security in Melbourne usually costs $50 to $72 per hour in 2026, depending on the setting, with higher rates at night and loadings for weekends and public holidays. ED support sits at the higher end given the risk. Most sites book a minimum shift of around four hours.",
        bodyHtml: "<p>Healthcare cover is priced a little higher than standard guarding because of the extra de-escalation and code-grey training the role demands, and most facilities run set shifts that match their highest-risk hours, often evenings and overnight in an ED. Aged-care patrols and reception-style posts sit lower. <a href='/contact/'>Get a free quote</a> and we'll match cover to your setting and risk.</p>",
        head: ["Setting", "Day ($/hr)", "Night ($/hr)", "Min shift"],
        rows: [
          ["Static healthcare guard", "$50 to $65", "$60 to $75", "~4 hrs"],
          ["ED support guard", "$58 to $72", "$68 to $85", "~4 hrs"],
          ["Aged-care patrol", "$50 to $66", "$60 to $76", "~4 hrs"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your site." },
      { id: "areas", h2: "Where do we provide healthcare security across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We provide healthcare security across the Melbourne CBD hospital precincts, suburban medical centres and aged-care homes, plus Geelong and Dandenong. Wherever you care for patients, a local team of trained healthcare guards can cover it.",
        items: ["Melbourne CBD", "Parkville hospital precinct", "Eastern suburbs", "Northern suburbs", "South-east", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What does a hospital security guard do?", a: "A hospital security guard protects staff, patients and premises. They manage aggression and incidents, support emergency department and ward staff, control visitor and after-hours access, respond to code-grey calls, and care for vulnerable people, all with de-escalation training for clinical settings." },
      { q: "Are healthcare security guards trained in de-escalation?", a: "Yes. On top of a Victorian security licence, our healthcare guards train in de-escalation, code-grey and duress response, patient privacy and vulnerable-person care. It's the training that lets them calm a situation rather than escalate one that's often driven by illness or distress." },
      { q: "Do you provide security for aged-care homes?", a: "Yes. We provide caring, watchful security for residential aged-care homes, with guards trained for dementia, mental health and vulnerable-resident care. We protect residents and staff while keeping the environment calm, respectful and homely, not institutional." },
      { q: "Are your healthcare security guards licensed in Victoria?", a: "Yes. Every healthcare guard holds a current Victorian security licence and is police-checked, with additional de-escalation training. Our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every guard passes a national police check before their first shift, so your staff, your patients and your premises are protected by properly vetted, accountable professionals." },
      { q: "How quickly can I get a guard on site?", a: "Usually within hours, not days. We run a 24/7 dispatch team across Melbourne, so for urgent cover, including a sudden staffing or safety issue in an ED, we'll confirm a deployment window the moment you call." },
      { q: "Is there a minimum shift length for healthcare security?", a: "Most healthcare security has a minimum shift, commonly around four hours, because guards need travel and handover time. We'll confirm the minimum in your written quote before you commit, and we can roster cover for your highest-risk hours." },
      { q: "Are there extra charges for night, weekend or public holiday cover?", a: "Yes. Like most security work, healthcare cover carries loadings for nights, weekends and public holidays, which is exactly when many sites most need it. We'll set out every rate and the minimum clearly in your written quote before you commit." },
    ],
  },

  {
    slug: "warehouse-security-melbourne",
    primaryKW: "warehouse security melbourne",
    breadcrumb: "Warehouse Security",
    title: "Warehouse Security Melbourne | Industrial Guards 24/7",
    metaDesc: "Need warehouse security in Melbourne? We protect distribution centres and industrial sites with licensed guards, patrols and CCTV. Insured. Get a quote.",
    h1: "Warehouse Security in Melbourne for Industrial Sites",
    heroImg: "/assets/feature-warehouse.webp",
    heroAlt: "Licensed warehouse security guard controlling a Melbourne distribution centre gate",
    og: "/assets/og/warehouse-security-melbourne.jpg",
    intro: "Warehouse security in Melbourne protects industrial and logistics sites from theft, trespass and stock loss using gatehouse guards, mobile patrols and CCTV, across operating and after hours. We layer people and technology so your stock, your vehicles and your loading docks all stay covered.",
    midcta: { b: "Stock walking out the back dock?", span: "Licensed industrial guards, patrols and CCTV across Melbourne." },
    related: ["commercial-security-melbourne", "mobile-patrol-security-melbourne", "construction-site-security-melbourne"],
    quote: { text: "Our distribution centre runs three shifts and a busy dock. A gatehouse guard on the vehicle entry plus overnight patrols stopped the stock shrinkage we couldn't explain. The guards control every truck in and out, and our cargo losses have basically vanished.", name: "Logistics Manager", role: "Distribution centre, west Melbourne", initials: "LM" },
    sections: [
      { id: "what", h2: "What is warehouse security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Warehouse security in Melbourne protects industrial and logistics sites from theft, trespass and stock loss using gatehouse guards, patrols and CCTV across operating and after hours. It controls who and what comes through the gate, watches the dock, and covers the site when it's empty. It's a specialist part of <a href='/commercial-security-melbourne/'>commercial security in Melbourne</a>.",
        bodyHtml: "<p>Warehouses carry a unique mix of risk. There's high-value stock in volume, a constant flow of trucks and contractors, busy loading docks where cargo goes missing, and long quiet stretches overnight. Generic guarding misses the industrial-specific stuff. Real warehouse security controls the gate, supervises the dock, and layers patrols and cameras so nothing slips through during a shift change or after dark.</p>",
        bool: { q: "Is warehouse security only needed after hours?", a: "No. High-value sites need cover during operating hours too. A lot of stock loss happens in plain sight during shifts, through the dock, the gate and contractor access. The best warehouse security covers both the busy day and the quiet, exposed night." } },
      { id: "why-need", h2: "Why do warehouses need security?", type: "iconlist", bg: "bg-mist",
        lead: "Warehouses need security because they're high-value targets for stock theft and cargo loss, exposed to trespass and vandalism after hours, and reliant on tight vehicle and gate control. A licensed presence cuts shrinkage, controls access, and helps you meet WHS obligations on a busy site.",
        bodyHtml: "<p>The losses add up fast and quietly. Pallets go missing from the dock, stock disappears during a shift change, trucks leave with more than the manifest says, and an unsecured site overnight is an open invitation. Add the WHS risk of uncontrolled access on a forklift-busy floor, and the case for proper warehouse security writes itself.</p>",
        items: [
          { icon: "grid", b: "Stock theft", p: "High-value goods in volume are a constant target." },
          { icon: "patrol", b: "Cargo loss", p: "Goods go missing through the dock and in transit." },
          { icon: "eye", b: "Trespass & vandalism", p: "Large, quiet sites attract intruders after hours." },
          { icon: "lock", b: "Vehicle & gate control", p: "Every truck and visitor checked in and out." },
          { icon: "check", b: "WHS obligations", p: "Controlled access on a busy industrial floor." },
        ] },
      { id: "services", h2: "What do our warehouse security services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our warehouse security layers static gatehouse guards, mobile patrols, K9 units, CCTV and dock supervision. It draws on <a href='/security-guards-melbourne/'>our Melbourne security guards</a> and integrates with <a href='/cctv-electronic-security-melbourne/'>CCTV monitoring</a> so people and cameras cover each other.",
        items: [
          { icon: "shieldcheck", name: "Static gatehouse guards", note: "Controlling vehicle and contractor access at the gate." },
          { icon: "patrol", name: "Mobile patrols", note: "GPS-verified overnight and weekend checks across the site." },
          { icon: "dog", name: "K9 units", note: "Dog handler patrols for large yards and high-risk sites." },
          { icon: "camera", name: "CCTV monitoring", note: "Live eyes on docks, gates and high-value zones." },
          { icon: "lock", name: "Access & vehicle control", note: "Trucks, contractors and visitors logged in and out." },
          { icon: "grid", name: "Loading-dock supervision", note: "Eyes on the dock where cargo loss happens most." },
        ] },
      { id: "layers", h2: "How do the layers of warehouse security work together?", type: "null2", bg: "bg-mist",
        lead: "Warehouse security works best in layers: gate and vehicle control at the front, CCTV across the perimeter, patrols through the site, and dock supervision where cargo moves. Each layer covers the others' blind spots, so a gap in one doesn't become a loss.",
        bodyHtml: "<p>No single measure protects a warehouse on its own. A gate guard can't watch the back fence, a camera can't stop a truck, and a patrol can't be everywhere at once. Layered properly, they reinforce each other: the gate controls access, cameras watch the boundary, patrols cover the gaps, and dock supervision guards the point where most cargo actually goes missing. Here's the model.</p>",
        viz: `<svg viewBox="0 0 820 252" role="img" aria-label="The layers of warehouse security working together">
  <g font-family="Inter, system-ui, sans-serif">
    <g><rect x="16" y="14" width="788" height="50" rx="12" fill="#3B3B25"/><circle cx="46" cy="39" r="15" fill="#C7D43F"/><text x="46" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#2D2D1C">1</text><text x="74" y="35" font-size="14" font-weight="700" fill="#F5F1E8">Gate &amp; vehicle control</text><text x="74" y="52" font-size="12" fill="#CFCDBC">Every truck, contractor and visitor checked in and out</text></g>
    <g><rect x="16" y="72" width="788" height="50" rx="12" fill="#45452c"/><circle cx="46" cy="97" r="15" fill="#C7D43F"/><text x="46" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="#2D2D1C">2</text><text x="74" y="93" font-size="14" font-weight="700" fill="#F5F1E8">Perimeter &amp; CCTV</text><text x="74" y="110" font-size="12" fill="#CFCDBC">Live eyes on the boundary and high-value zones, 24/7</text></g>
    <g><rect x="16" y="130" width="788" height="50" rx="12" fill="#3B3B25"/><circle cx="46" cy="155" r="15" fill="#C7D43F"/><text x="46" y="160" text-anchor="middle" font-size="14" font-weight="700" fill="#2D2D1C">3</text><text x="74" y="151" font-size="14" font-weight="700" fill="#F5F1E8">Internal &amp; dock patrols</text><text x="74" y="168" font-size="12" fill="#CFCDBC">Stock, aisles and loading bays watched through the shift</text></g>
    <g><rect x="16" y="188" width="788" height="50" rx="12" fill="#45452c"/><circle cx="46" cy="213" r="15" fill="#C7D43F"/><text x="46" y="218" text-anchor="middle" font-size="14" font-weight="700" fill="#2D2D1C">4</text><text x="74" y="209" font-size="14" font-weight="700" fill="#F5F1E8">After-hours response</text><text x="74" y="226" font-size="12" fill="#CFCDBC">Alarm response and patrols when the site sits empty</text></g>
  </g>
</svg>
<p class="viz-cap">Layered warehouse security: each layer covers the others' blind spots, so a gap never becomes a loss.</p>` },
      { id: "who", h2: "Which industrial sites do we protect?", type: "pills", bg: "bg-white",
        lead: "We protect industrial and logistics sites of every kind across Melbourne, from a single warehouse to a multi-building distribution hub. If you store, move or handle goods in volume, we've got a security model for it.",
        items: [
          { icon: "grid", label: "Distribution centres" }, { icon: "patrol", label: "Logistics hubs" },
          { icon: "building", label: "Cold storage" }, { icon: "hardhat", label: "Manufacturing plants" },
          { icon: "home", label: "Industrial estates" }, { icon: "lock", label: "Freight yards" },
        ] },
      { id: "how", h2: "How does our warehouse security service work?", type: "steps",
        leadHtml: "Our warehouse security works in five steps, layering the right cover for your site. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A site risk assessment of gates, docks and stock zones." },
          { icon: "grid", n: "2", t: "Plan", d: "A layered security plan: guards, patrols and CCTV." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Licensed guards and systems matched to your operation." },
          { icon: "users", n: "4", t: "Supervise", d: "Ongoing supervision across every shift and the dock." },
          { icon: "check", n: "5", t: "Report", d: "Clear access and incident reports you can act on." },
        ] },
      { id: "vs", h2: "Static guards or mobile patrols for a warehouse?", type: "null2", bg: "bg-white",
        leadHtml: "Static guards suit single-entry, high-value or always-staffed warehouses that need constant gate and dock control, while <a href='/mobile-patrol-security-melbourne/'>after-hours mobile patrols</a> suit lower-risk or after-hours-only sites at lower cost. Many warehouses use both.",
        bodyHtml: "<p>The right mix comes down to how your site runs. If trucks and contractors flow through one gate all day, a <a href='/static-security-guards-melbourne/'>static guard</a> controlling that entry is the call. If the site mostly needs covering once everyone's gone home, patrols visiting through the night cost far less than a guard standing on a locked gate. Plenty of warehouses run a daytime gatehouse guard and overnight patrols, with CCTV tying it together.</p>" },
      { id: "why-choose", h2: "Why choose us for warehouse security in Melbourne?", type: "iconlist", bg: "bg-mist",
        leadHtml: "Choose us for warehouse security because our guards are licensed, insured and police-checked, we cover Melbourne 24/7, and we integrate guarding with CCTV for layered protection. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm that understands industrial sites.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable business licence." },
          { icon: "grid", b: "Integrated layers", p: "Guards, patrols and CCTV working as one system." },
          { icon: "bolt", b: "Fast response", p: "24/7 Melbourne dispatch and rapid on-site cover." },
          { icon: "pin", b: "Industrial savvy", p: "We know docks, gates, forklifts and how sites run." },
        ] },
      { id: "cost", h2: "How much does warehouse security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Warehouse security in Melbourne is priced by model in 2026: a static gatehouse guard runs an hourly rate, mobile patrols cost per visit, and CCTV monitoring is tiered. Patrols and CCTV cost less than full-time static cover. The total depends on site size, hours and risk.",
        bodyHtml: "<p>Most warehouses blend the models to match the risk to the cost. A gatehouse guard during operating hours, overnight patrols once the site clears, and CCTV watching the docks and perimeter all the time. That layered approach protects the whole site without paying for a guard to stand on a locked gate all night. <a href='/contact/'>Get a free quote</a> and we'll build the right mix.</p>",
        head: ["Security model", "Day ($/hr)", "Night ($/hr)", "Notes"],
        rows: [
          ["Static gatehouse guard", "$45 to $65", "$55 to $72", "Per site, operating hours"],
          ["Mobile patrol", "from $40 / visit", "+ after-hours", "Per route, overnight"],
          ["CCTV monitoring", "tiered", "tiered", "Monthly, by cameras"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your site." },
      { id: "areas", h2: "Where do we provide warehouse security across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We provide warehouse security across Melbourne's industrial heartlands, the western and northern logistics belts, the south-east, plus Geelong and Dandenong. Wherever your site sits, a local crew can cover the gate, the dock and the perimeter.",
        items: ["Western logistics belt", "Northern industrial", "South-east", "Dandenong South", "Truganina & Laverton", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What is the difference between static guards and mobile patrols for a warehouse?", a: "A static guard holds your gate or dock for the whole shift, ideal for high-value or always-staffed sites. A mobile patrol visits at set and random times overnight, which costs less. Many warehouses use a daytime gatehouse guard plus after-hours patrols." },
      { q: "Do you provide after-hours warehouse patrols?", a: "Yes. After-hours mobile patrols are one of our most-booked warehouse services. We run GPS-verified overnight and weekend checks across your site, with alarm response, so your stock and premises stay protected when the site sits empty." },
      { q: "Can you combine guards with CCTV monitoring?", a: "Yes. Combining guards with CCTV monitoring is the most effective warehouse setup. A gate guard controls access, live CCTV watches the perimeter and docks, and patrols cover the gaps, so each layer backs up the others and nothing slips through." },
      { q: "Are your warehouse security guards licensed in Victoria?", a: "Yes. Every warehouse guard holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every guard passes a national police check before their first shift, so your site, your stock and your staff are properly protected throughout every shift and patrol." },
      { q: "How quickly can I get a guard on site?", a: "Usually within hours, not days. We run a 24/7 dispatch team across Melbourne's industrial areas, so for urgent cover we'll confirm a deployment window the moment you call and get a licensed guard moving to your site fast." },
      { q: "Is there a minimum shift length for warehouse security?", a: "Most static guarding has a minimum shift, commonly around four hours, because guards need travel and handover time. Patrols work on a per-route basis. We'll confirm the minimum in your written quote before you commit, with no surprises." },
      { q: "Are there extra charges for night, weekend or public holiday cover?", a: "Yes. Like most security work, warehouse cover carries loadings for nights, weekends and public holidays, which matter for round-the-clock logistics sites. We'll set out every rate and the minimum clearly in your written quote before you commit." },
    ],
  },

  {
    slug: "cctv-electronic-security-melbourne",
    primaryKW: "cctv monitoring melbourne",
    breadcrumb: "CCTV & Electronic Security",
    title: "CCTV Monitoring Melbourne | Remote & AI Guarding 24/7",
    metaDesc: "Need CCTV monitoring in Melbourne? Our 24/7 control room runs live monitoring, remote guarding and AI CCTV with rapid response. Insured. Get a fast quote.",
    h1: "CCTV Monitoring and Electronic Security in Melbourne",
    heroImg: "/assets/feature-cctv.webp",
    heroAlt: "Licensed CCTV monitoring operator in a Melbourne 24/7 control room",
    og: "/assets/og/cctv-electronic-security-melbourne.jpg",
    intro: "CCTV monitoring in Melbourne is live oversight of your camera feeds by a control-room operator who watches in real time and responds the moment something happens. We run live monitoring, alarm monitoring, remote guarding and AI-assisted CCTV from a 24/7 control room, with rapid response.",
    midcta: { b: "Cameras recording but no one watching?", span: "24/7 live CCTV monitoring and remote guarding across Melbourne." },
    related: ["commercial-security-melbourne", "mobile-patrol-security-melbourne", "security-guards-melbourne"],
    quote: { text: "We switched our vacant sites from a nightly guard to remote guarding with live CCTV. The control room challenges intruders over speakers before they get near anything, and our costs dropped by more than half. Same protection, fraction of the price.", name: "Asset Manager", role: "Property portfolio, Melbourne", initials: "AM" },
    sections: [
      { id: "what", h2: "What is CCTV monitoring in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "CCTV monitoring is live oversight of camera feeds by a control-room operator who watches in real time and responds to incidents as they happen. It's the difference between cameras that just record and cameras that actually protect. It's a core part of our <a href='/security-services-melbourne/'>full range of security services</a>.",
        bodyHtml: "<p>Most cameras are a recording you watch after the fact, once the damage is done. Live monitoring flips that. A licensed operator in our control room watches your feeds as events unfold, challenges intruders, calls in a patrol or police, and logs it all. The camera stops being a witness and becomes a guard who never blinks.</p>",
        bool: { q: "Is CCTV monitoring the same as just recording footage?", a: "No. Recording captures footage you review later, after something's already happened. CCTV monitoring means a live operator watches your feeds in real time and responds as events unfold, so a problem gets stopped, not just filmed for the insurance claim." } },
      { id: "why-need", h2: "Why do you need CCTV and electronic security?", type: "iconlist", bg: "bg-mist",
        lead: "You need CCTV and electronic security for round-the-clock oversight, faster response, lower guarding cost, court-ready evidence, strong deterrence, and cover across multiple sites at once. One control room can watch many sites that on-site guards could never staff affordably.",
        bodyHtml: "<p>The big shift is cost-efficiency. A single control room operator can watch dozens of cameras across many sites at once, which on-site guarding could never match on price. You get eyes on everything overnight, an instant response when something trips, and clean recorded evidence if you ever need it. For multi-site portfolios and vacant property, it's hard to beat.</p>",
        items: [
          { icon: "clock", b: "24/7 oversight", p: "A live operator watching your sites around the clock." },
          { icon: "bolt", b: "Faster response", p: "Action the moment an alert fires, not minutes later." },
          { icon: "tag", b: "Lower guarding cost", p: "One control room covers what many guards never could." },
          { icon: "eye", b: "Court-ready evidence", p: "Clear, logged footage if an incident goes further." },
          { icon: "grid", b: "Multi-site coverage", p: "Watch a whole portfolio from one place at once." },
        ] },
      { id: "services", h2: "What do our CCTV and electronic security services include?", type: "cards", bg: "bg-white", cta: true,
        lead: "Our electronic security spans live CCTV monitoring, alarm monitoring, remote guarding, access control and AI-assisted analytics, all run from a 24/7 control room. We blend technology with real guards so each covers the other's blind spots.",
        items: [
          { icon: "camera", name: "Live CCTV monitoring", note: "Operators watching your feeds in real time, all night." },
          { icon: "alert", name: "Alarm monitoring", note: "Verified alarm response, with eyes on before we act." },
          { icon: "eye", name: "Remote guarding", note: "Monitored cameras plus rapid response, fewer on-site guards." },
          { icon: "lock", name: "Access control", note: "Remote management of entry points and credentials." },
          { icon: "grid", name: "AI CCTV analytics", note: "Smart detection that flags real activity, cuts false alarms." },
          { icon: "patrol", name: "Patrol dispatch", note: "A mobile patrol sent to verify and respond on the ground." },
        ] },
      { id: "who", h2: "Who do we protect with CCTV monitoring?", type: "pills", bg: "bg-mist",
        leadHtml: "We monitor almost any Melbourne site with cameras worth watching, and it folds neatly into wider <a href='/commercial-security-melbourne/'>commercial security in Melbourne</a> for multi-site clients.",
        items: [
          { icon: "building", label: "Commercial buildings" }, { icon: "grid", label: "Warehouses" },
          { icon: "hardhat", label: "Construction sites" }, { icon: "cart", label: "Retail" },
          { icon: "home", label: "Vacant property" }, { icon: "briefcase", label: "Multi-site portfolios" },
        ] },
      { id: "remote", h2: "What is remote (virtual) guarding?", type: "null2", bg: "bg-white",
        leadHtml: "Remote guarding uses monitored cameras and a rapid-response team to deter and respond, replacing or supplementing on-site guards at lower cost. When the system detects an intruder, an operator can challenge them live over speakers, then dispatch a patrol or police. It pairs well with <a href='/security-guards-melbourne/'>our Melbourne security guards</a> and <a href='/mobile-patrol-security-melbourne/'>after-hours mobile patrols</a>.",
        bodyHtml: "<p>This is the model that's quietly reshaping after-hours security. Instead of paying a guard to sit on a quiet site all night, you put smart cameras on the risk areas and a control room watches them. The moment someone shouldn't be there, an operator speaks to them directly through on-site speakers, which sends most intruders running, then escalates to a patrol or police if needed. You get presence and response for a fraction of a full-time guard.</p>" },
      { id: "ai", h2: "How does AI CCTV monitoring work?", type: "null2", bg: "bg-mist",
        lead: "AI CCTV monitoring works in four steps: the analytics detect activity, the system alerts an operator, the operator verifies whether it's a real threat, then a response is triggered. The AI does the watching, a human makes the call, which cuts false alarms and speeds up real ones.",
        bodyHtml: "<p>Plain cameras flag every cat, branch and shadow, which buries real threats in noise. AI analytics filter that down to activity that actually matters, a person climbing a fence rather than wind in a tree, then hand it to a human operator to confirm before anyone responds. The result is fewer false alarms and a faster, surer response when it counts. Here's the flow.</p>",
        viz: `<svg viewBox="0 0 820 150" role="img" aria-label="AI CCTV monitoring workflow from detection to response">
  <g font-family="Inter, system-ui, sans-serif">
    <g><rect x="6" y="28" width="185" height="86" rx="12" fill="#3B3B25"/><text x="98" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">1</text><text x="98" y="78" text-anchor="middle" font-size="13" fill="#F5F1E8">AI detects activity</text><text x="98" y="96" text-anchor="middle" font-size="11" fill="#B9C26B">person, not a shadow</text></g>
    <g><rect x="207" y="28" width="185" height="86" rx="12" fill="#3B3B25"/><text x="299" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">2</text><text x="299" y="78" text-anchor="middle" font-size="13" fill="#F5F1E8">Operator alerted</text><text x="299" y="96" text-anchor="middle" font-size="11" fill="#B9C26B">control room, live</text></g>
    <g><rect x="408" y="28" width="185" height="86" rx="12" fill="#3B3B25"/><text x="500" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">3</text><text x="500" y="78" text-anchor="middle" font-size="13" fill="#F5F1E8">Operator verifies</text><text x="500" y="96" text-anchor="middle" font-size="11" fill="#B9C26B">real threat or not</text></g>
    <g><rect x="609" y="28" width="185" height="86" rx="12" fill="#C7D43F"/><text x="701" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#2D2D1C">4</text><text x="701" y="78" text-anchor="middle" font-size="13" font-weight="600" fill="#2D2D1C">Respond / escalate</text><text x="701" y="96" text-anchor="middle" font-size="11" fill="#3B3B25">audio, patrol, police</text></g>
    <path d="M193 71 l10 0 M198 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M394 71 l10 0 M399 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M595 71 l10 0 M600 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
<p class="viz-cap">AI does the watching, a licensed operator makes the call. Fewer false alarms, faster real response.</p>` },
      { id: "why-choose", h2: "Why choose us for CCTV monitoring in Melbourne?", type: "iconlist", bg: "bg-white",
        leadHtml: "Choose us for CCTV monitoring because our operators are licensed, insured and police-checked, our control room runs 24/7, and we back screens with real guards and patrols for rapid response. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm, not a camera installer.",
        items: [
          { icon: "shieldcheck", b: "Licensed operators", p: "Victorian-licensed monitoring staff, police-checked." },
          { icon: "clock", b: "24/7 control room", p: "Live eyes on your sites every hour of every day." },
          { icon: "bolt", b: "Real response", p: "Guards and patrols ready to act on what we see." },
          { icon: "grid", b: "Guarding + tech", p: "We blend people and technology, not just sell cameras." },
        ] },
      { id: "cost", h2: "How much does CCTV monitoring cost in Melbourne?", type: "table", bg: "bg-mist", cta: true,
        lead: "CCTV monitoring in Melbourne is usually priced monthly by tier in 2026: alarm-only monitoring is cheapest, live CCTV monitoring sits in the middle, and full remote guarding costs more but still far less than a full-time on-site guard. The total depends on cameras, sites and hours.",
        bodyHtml: "<p>The right tier depends on how much you want the system to do. Alarm-only watches for triggers, live monitoring puts eyes on your feeds, and full remote guarding adds audio challenge and patrol dispatch so it can replace a guard on many sites. <a href='/contact/'>Get a free quote</a> and we'll size the tier to your sites and risk.</p>",
        head: ["Monitoring tier", "What it covers", "Response", "Cost basis"],
        rows: [
          ["Alarm-only monitoring", "Triggered alerts", "Verify & escalate", "Lowest, monthly"],
          ["Live CCTV monitoring", "Operator watching feeds", "Real-time response", "Mid, monthly"],
          ["Remote guarding (full)", "Monitoring + audio + patrol", "Challenge & dispatch", "Higher, still under static"],
        ],
        note: "Estimate only for 2026. Priced by cameras, sites and hours. Get a quote for your sites." },
      { id: "areas", h2: "Where do we provide CCTV monitoring across Melbourne?", type: "areas", bg: "bg-white",
        lead: "We monitor sites across Greater Melbourne and beyond from our control room, since CCTV monitoring isn't limited by distance. We back it with local guards and patrols across the metro area, plus Geelong and Dandenong, for on-the-ground response.",
        items: ["Greater Melbourne", "Melbourne CBD", "Industrial precincts", "Eastern suburbs", "Western suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What is the difference between CCTV recording and live monitoring?", a: "Recording captures footage you review after an incident has already happened. Live monitoring means a licensed operator watches your feeds in real time and responds as events unfold, challenging intruders and dispatching help, so problems get stopped rather than just filmed." },
      { q: "What is remote or virtual guarding?", a: "Remote guarding uses monitored cameras and a rapid-response team to deter and respond, replacing or supplementing on-site guards at lower cost. When the system detects an intruder, an operator can challenge them live over speakers, then dispatch a patrol or police." },
      { q: "Can CCTV monitoring replace on-site guards?", a: "Yes, on many sites. For vacant property, warehouses and after-hours cover, remote guarding with live monitoring and audio challenge often replaces an on-site guard at a fraction of the cost. Higher-risk or public-facing sites may still need a guard on site." },
      { q: "Does AI CCTV reduce false alarms?", a: "Yes. AI analytics filter out harmless movement like shadows, animals and weather, flagging genuine activity such as a person climbing a fence. A human operator then verifies before responding, which cuts false alarms and speeds up the response to real threats." },
      { q: "Are your CCTV monitoring operators licensed in Victoria?", a: "Yes. Every monitoring operator holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with Victoria Police at any time, working from a 24/7 control room." },
      { q: "Are your operators insured and police-checked?", a: "Yes. We carry public liability insurance and every control-room operator passes a national police check before their first shift, so your sites and footage are handled by properly vetted, accountable professionals." },
      { q: "How quickly do you respond to a CCTV alert?", a: "Within seconds in the control room. An operator verifies the alert in real time and acts immediately, whether that's an audio challenge, a dispatched patrol or a call to police. We'll agree your response protocol and any patrol response times up front." },
      { q: "Is there a minimum contract for CCTV monitoring?", a: "Monitoring is usually a monthly service with a minimum term we'll set out clearly in your quote. We keep it flexible where we can, and we'll match the tier and term to your sites, cameras and risk rather than locking you into more than you need." },
    ],
  },

  {
    slug: "vip-close-protection-melbourne",
    primaryKW: "vip security melbourne",
    breadcrumb: "VIP & Close Protection",
    title: "VIP Security Melbourne | Close Protection & Bodyguards",
    metaDesc: "Need VIP security in Melbourne? We provide licensed, discreet close protection officers and bodyguards for executives and events. Insured. Get a quote.",
    h1: "VIP Security and Close Protection in Melbourne",
    heroImg: "/assets/feature-vip.webp",
    heroAlt: "Licensed close protection officer escorting a client in Melbourne",
    og: "/assets/og/vip-close-protection-melbourne.jpg",
    intro: "VIP close protection in Melbourne is personal security from a licensed close protection officer who safeguards an individual through travel, events and daily movements. Discreet, planned and confidential, it's the quiet, professional cover that keeps executives, public figures and families safe.",
    midcta: { b: "Need discreet personal protection?", span: "Licensed, confidential close protection officers across Melbourne." },
    related: ["event-security-melbourne", "corporate-security-melbourne", "security-guards-melbourne"],
    quote: { text: "We brought in close protection for a visiting executive with a packed three-day schedule. The advance work was meticulous, the officers were invisible to everyone but us, and every movement ran on time and without a hitch. Exactly the discretion we needed.", name: "Executive Assistant", role: "Multinational, Melbourne visit", initials: "EA" },
    sections: [
      { id: "what", h2: "What is VIP close protection in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "VIP close protection is personal security provided by a licensed close protection officer who safeguards an individual from threats during travel, events and daily movements. It blends planning, discretion and trained response, keeping the client safe without turning their day into a spectacle. It's a specialist part of our <a href='/security-services-melbourne/'>full range of security services</a>.",
        bodyHtml: "<p>Good close protection is mostly invisible. The work happens before the client even arrives: routes checked, venues scoped, risks weighed. On the day, the officer stays close enough to act and far enough back to let the client live their life. Done right, the only people who notice the protection are the ones who'd think twice because of it.</p>",
        bool: { q: "Is a bodyguard the same as a close protection officer?", a: "Yes, more or less. Close protection officer is the professional term for what people call a bodyguard. The difference is training and licensing. A licensed close protection officer plans, assesses risk and works to a protocol, rather than just standing beside someone." } },
      { id: "why-need", h2: "Why do you need VIP close protection?", type: "iconlist", bg: "bg-mist",
        lead: "You need VIP close protection for executive travel, public appearances, specific threats, high-net-worth lifestyles, or simply discreet escort through a busy event. A trained officer manages risk you can't see and lets you focus on why you're there, not on who's around you.",
        bodyHtml: "<p>Protection isn't only for the famous. Executives carrying sensitive deals, public figures facing online threats, visiting dignitaries on tight schedules, and high-net-worth families all have reasons to want a trained professional nearby. The point isn't to look important. It's to make sure a known risk, or an unknown one, never gets the chance to become a problem.</p>",
        items: [
          { icon: "briefcase", b: "Executive travel", p: "Safe, smooth movement for business leaders on the move." },
          { icon: "users", b: "Public figures", p: "Discreet cover at appearances, events and in public." },
          { icon: "shieldcheck", b: "Specific threats", p: "A trained response when there's a real, named risk." },
          { icon: "heart", b: "High-net-worth families", p: "Quiet, ongoing protection that fits family life." },
          { icon: "event", b: "Event escort", p: "Calm, low-profile escort through busy functions." },
        ] },
      { id: "services", h2: "What do our VIP and close protection services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our close protection covers personal protection officers, secure transport, advance route planning, event protection and residential details. It draws on the same licensed team behind <a href='/security-guards-melbourne/'>our Melbourne security guards</a> and <a href='/event-security-melbourne/'>event security guards</a>.",
        items: [
          { icon: "shieldcheck", name: "Personal protection officers", note: "Trained close protection officers assigned to the client." },
          { icon: "patrol", name: "Secure transport", note: "Security-trained drivers and planned, checked routes." },
          { icon: "pin", name: "Advance route planning", note: "Venues and routes scoped and risk-assessed beforehand." },
          { icon: "event", name: "Event protection", note: "Low-profile cover through functions and public events." },
          { icon: "home", name: "Residential details", note: "Ongoing protection at home for clients who need it." },
          { icon: "lock", name: "Confidential service", note: "Every arrangement handled with strict discretion." },
        ] },
      { id: "who", h2: "Who do we protect?", type: "pills", bg: "bg-mist",
        leadHtml: "We protect anyone who needs discreet personal security in Melbourne, often alongside the <a href='/corporate-security-melbourne/'>corporate security services</a> we run for their organisation.",
        items: [
          { icon: "briefcase", label: "Executives" }, { icon: "users", label: "Public figures" },
          { icon: "shieldcheck", label: "Dignitaries" }, { icon: "heart", label: "High-net-worth families" },
          { icon: "event", label: "Visiting delegations" }, { icon: "home", label: "Private clients" },
        ] },
      { id: "how", h2: "How does our close protection service work?", type: null, bg: "bg-white",
        lead: "Our close protection works to a clear protocol: threat assessment, a protection plan, officer assignment, advance work, the ongoing detail and a debrief. Most of the safety is built in before the client moves, which is exactly why it looks so effortless on the day.",
        bodyHtml: "<p>This is the part that separates a professional detail from someone just standing around. Every assignment starts with assessment and planning, then advance work checks the ground before the client ever sets foot on it. Here's the path a protection detail follows.</p>",
        viz: `<svg viewBox="0 0 820 150" role="img" aria-label="VIP close protection detail workflow, step by step">
  <g font-family="Inter, system-ui, sans-serif">
    <g><rect x="6" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="68" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">1</text><text x="68" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Threat</text><text x="68" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">assessment</text></g>
    <g><rect x="142" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="204" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">2</text><text x="204" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Protection</text><text x="204" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">plan</text></g>
    <g><rect x="278" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="340" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">3</text><text x="340" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Advance</text><text x="340" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">work</text></g>
    <g><rect x="414" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="476" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">4</text><text x="476" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Secure</text><text x="476" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">transport</text></g>
    <g><rect x="550" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="612" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">5</text><text x="612" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Close</text><text x="612" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">escort</text></g>
    <g><rect x="686" y="28" width="124" height="86" rx="11" fill="#C7D43F"/><text x="748" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#2D2D1C">6</text><text x="748" y="74" text-anchor="middle" font-size="12.5" font-weight="600" fill="#2D2D1C">Debrief</text><text x="748" y="91" text-anchor="middle" font-size="12.5" font-weight="600" fill="#2D2D1C">&amp; report</text></g>
    <path d="M132 71 l8 0 M137 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M268 71 l8 0 M273 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M404 71 l8 0 M409 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M540 71 l8 0 M545 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M676 71 l8 0 M681 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
<p class="viz-cap">How a protection detail is planned and run. Most of the safety is built in before the client moves.</p>` },
      { id: "why-choose", h2: "Why choose us for VIP security in Melbourne?", type: "iconlist", bg: "bg-mist",
        leadHtml: "Choose us for VIP security because our close protection officers are licensed, discreet and experienced, we keep every arrangement confidential, and we're insured, police-checked and available 24/7. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm built for discretion.",
        items: [
          { icon: "shieldcheck", b: "Licensed officers", p: "Bodyguard-endorsed Victorian licences, police-checked." },
          { icon: "lock", b: "Strict confidentiality", p: "Your arrangements stay private, always." },
          { icon: "users", b: "Discreet & experienced", p: "Low-profile officers who blend in and stay sharp." },
          { icon: "clock", b: "24/7 availability", p: "Rapid, on-demand cover whenever you need it." },
        ] },
      { id: "licence", h2: "What licence does a close protection officer need in Victoria?", type: "table", bg: "bg-white",
        leadHtml: "A close protection officer in Victoria needs a Private Security Individual Operator Licence with a bodyguard category, endorsed by Victoria Police under the Private Security Act. Carrying a firearm needs a separate endorsement and is rare. You can always ask to see the licence. See our <a href='/licensing-compliance/'>licensing and compliance</a> page.",
        bodyHtml: "<p>This is worth knowing before you hire anyone. A bodyguard category is a specific endorsement, not a general guard licence, and it signals the officer has trained for one-on-one protection work. Firearms are a separate matter again, tightly controlled and uncommon in Australian close protection. Here's how the credentials stack up.</p>",
        head: ["Credential", "What it covers", "VIC status"],
        rows: [
          ["Bodyguard / CPO category", "One-on-one personal protection", "Required, endorsed by Victoria Police"],
          ["Unarmed close protection", "Almost all CP work in Victoria", "Standard"],
          ["Firearms endorsement", "Carrying a firearm on a detail", "Rare, tightly controlled, role-justified"],
        ],
        note: "All our close protection officers hold the bodyguard category and are police-checked.",
        bool: { q: "Can a close protection officer carry a firearm in Victoria?", a: "No, not unless they hold a specific firearms endorsement justified by the role. Almost all close protection in Victoria is unarmed, relying on planning, awareness and trained response. Armed details are rare and tightly controlled under Victorian law." } },
      { id: "cost", h2: "How much does close protection cost in Melbourne?", type: "table", bg: "bg-mist", cta: true,
        lead: "Close protection in Melbourne is usually priced as a day rate per officer in 2026, with multi-day rates, after-hours loadings and team pricing for higher-risk work. A single officer costs less than a two-officer team or a detail with secure transport. Get a confidential quote for your needs.",
        bodyHtml: "<p>Because every assignment is different, close protection is quoted to the job rather than a flat hourly rate. A few hours of discreet event escort is a world away from a multi-day detail with advance work and secure transport. We'll scope the risk, recommend the right level, and give you a clear day-rate quote with no surprises. <a href='/contact/'>Get a confidential quote</a> to start.</p>",
        head: ["Service level", "Day rate", "Multi-day", "Notes"],
        rows: [
          ["Single officer", "from a set day rate", "discounted", "Discreet personal escort"],
          ["Two-officer team", "higher day rate", "discounted", "Higher-risk or busy schedules"],
          ["Secure transport + driver", "quoted", "quoted", "Security-trained driver included"],
        ],
        note: "Estimate only for 2026. Priced to the assignment. Get a confidential quote for exact rates." },
      { id: "areas", h2: "Where do we provide close protection across Melbourne?", type: "areas", bg: "bg-white",
        lead: "We provide VIP close protection across Melbourne and Victoria, from the CBD and airport to events, venues and private residences, plus Geelong and Dandenong. We travel with the client wherever the schedule takes them.",
        items: ["Melbourne CBD", "Melbourne Airport", "Events & venues", "Private residences", "Statewide travel", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What does a close protection officer do?", a: "A close protection officer safeguards a client through travel, events and daily movements. They assess threats, plan routes, do advance work on venues, stay close during the day, and respond to any risk, all while staying discreet and keeping the client's schedule on track." },
      { q: "What licence does a bodyguard need in Victoria?", a: "A bodyguard, or close protection officer, needs a Private Security Individual Operator Licence with a bodyguard category, endorsed by Victoria Police under the Private Security Act. It's a specific endorsement, not a general guard licence, and you can ask to see it." },
      { q: "Can a close protection officer carry a firearm in Victoria?", a: "No, not unless they hold a specific firearms endorsement justified by the role. Almost all close protection in Victoria is unarmed, relying on planning, awareness and trained response. Armed details are rare and tightly controlled under Victorian law." },
      { q: "Can I hire close protection for a single day or event?", a: "Yes. We provide close protection for single days, events and short engagements, as well as ongoing details. Tell us the schedule and the risk, and we'll assign the right officer or team just for that period, with no lock-in." },
      { q: "Are your close protection officers licensed in Victoria?", a: "Yes. Every officer holds a current Victorian Private Security Individual Operator Licence with a bodyguard category and is police-checked. Our business holds a Private Security Business Licence you can verify with Victoria Police at any time." },
      { q: "Are your officers insured and police-checked?", a: "Yes. We carry public liability insurance and every close protection officer passes a national police check before any assignment, so you get experienced, properly vetted protection you can trust with your safety." },
      { q: "How quickly can I arrange close protection?", a: "Often within hours for urgent needs, though more notice lets us do proper advance work, which is where much of the value sits. We run a 24/7 team across Melbourne, so call us and we'll move as fast as your situation requires." },
      { q: "Do you keep VIP arrangements confidential?", a: "Yes, always. Confidentiality is central to close protection. We keep every arrangement, schedule and client detail strictly private, and our officers are experienced in discreet, low-profile work that never draws attention to you." },
    ],
  },

  {
    slug: "k9-security-melbourne",
    primaryKW: "k9 security melbourne",
    breadcrumb: "K9 Dog Security",
    title: "K9 Security Melbourne | Licensed Dog Handler Units",
    metaDesc: "Need K9 security in Melbourne? We deploy licensed dog handler units for sites, events and patrols, with trained, welfare-managed dogs. Insured. Get a quote.",
    h1: "K9 Security in Melbourne, Licensed Dog Handler Units",
    heroImg: "/assets/feature-k9.webp",
    heroAlt: "Licensed K9 security dog handler unit patrolling a Melbourne site",
    og: "/assets/og/k9-security-melbourne.jpg",
    intro: "K9 security in Melbourne is guarding by a licensed dog handler working with a trained security dog to deter intruders, sweep areas fast and detect threats. One handler-and-dog unit covers more ground than several guards, making it ideal for large or high-risk sites.",
    midcta: { b: "Large site needing real deterrence?", span: "Licensed K9 dog handler units across Melbourne, 24/7." },
    related: ["construction-site-security-melbourne", "mobile-patrol-security-melbourne", "static-security-guards-melbourne"],
    quote: { text: "We had repeat trespassers on a big industrial yard that static guards couldn't cover end to end. One K9 unit changed everything. The dog's presence alone cleared the problem within two weeks, and the handler's reports are spot on.", name: "Yard Supervisor", role: "Industrial site, western Melbourne", initials: "YS" },
    sections: [
      { id: "what", h2: "What is K9 security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "K9 security in Melbourne is guarding by a licensed dog handler working with a trained security dog to deter intruders, sweep areas fast and detect threats. The dog's presence is a powerful deterrent, and a single handler-and-dog unit can cover ground that would take several guards. It's part of our <a href='/security-services-melbourne/'>full range of security services</a>.",
        bodyHtml: "<p>There's a reason a security dog stops trouble before it starts. Most intruders will chance a fence or a camera, but very few will take on a trained dog and handler. The unit works as a team: the handler reads the site and makes the calls, the dog covers ground fast, picks up what a person would miss, and turns a large dark yard into somewhere nobody wants to test.</p>",
        bool: { q: "Are K9 security dogs trained and licensed?", a: "Yes. The handler holds a current Victorian security licence and dog-handling qualifications, and the dog is professionally trained for security work. Both are assessed as a team. The dogs are also welfare-managed, with proper rest, handling and care between and during shifts." } },
      { id: "why-need", h2: "Why do you need K9 security?", type: "iconlist", bg: "bg-mist",
        lead: "You need K9 security when you want a strong deterrent, fast area sweeps, threat detection, and large-site coverage with fewer guards. A handler-and-dog unit patrols ground that would take several officers, which makes it both effective and cost-efficient after hours.",
        bodyHtml: "<p>The maths works in your favour on a big site. Posting enough static guards to cover a sprawling yard or a multi-hectare build gets expensive fast. One K9 unit patrols the whole perimeter, responds to anything that moves, and deters intruders who'd happily risk a camera but not a dog. For large, dark or high-risk sites, it's often the smartest cover you can buy.</p>",
        items: [
          { icon: "dog", b: "Powerful deterrent", p: "Few intruders will take on a trained security dog." },
          { icon: "bolt", b: "Fast area sweeps", p: "A dog covers a large site far quicker than a guard on foot." },
          { icon: "eye", b: "Threat detection", p: "Dogs pick up what people and cameras miss in the dark." },
          { icon: "grid", b: "Large-site coverage", p: "One unit covers ground that would take several guards." },
          { icon: "clock", b: "After-hours cover", p: "Strong overnight protection for empty, high-risk sites." },
        ] },
      { id: "services", h2: "What do our K9 security services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our K9 services cover handler patrols, perimeter sweeps, detection units, event support and after-hours guarding. Each unit works alongside <a href='/security-guards-melbourne/'>our Melbourne security guards</a> when a site needs both dogs and fixed posts.",
        items: [
          { icon: "dog", name: "Dog handler patrols", note: "A handler-and-dog team patrolling your site on schedule." },
          { icon: "shieldcheck", name: "Perimeter sweeps", note: "Fast, thorough sweeps of large yards and boundaries." },
          { icon: "eye", name: "Detection units", note: "Trained dogs for detection tasks where the risk calls for it." },
          { icon: "event", name: "Event K9 support", note: "Dog units adding deterrence and reach at larger events." },
          { icon: "clock", name: "After-hours guarding", note: "Overnight K9 cover for vacant and high-risk sites." },
          { icon: "check", name: "Incident reporting", note: "Clear handler reports after every patrol and event." },
        ] },
      { id: "who", h2: "Who do we protect with K9 units?", type: "pills", bg: "bg-mist",
        leadHtml: "We deploy K9 units across large and high-risk Melbourne sites where ground to cover and deterrence both matter. They're a strong fit for the <a href='/construction-site-security-melbourne/'>business security solutions</a> we run on big build and industrial sites.",
        items: [
          { icon: "hardhat", label: "Construction sites" }, { icon: "building", label: "Warehouses" },
          { icon: "patrol", label: "Industrial yards" }, { icon: "event", label: "Events" },
          { icon: "home", label: "Vacant property" }, { icon: "grid", label: "Logistics & depots" },
        ] },
      { id: "how", h2: "How does our K9 security service work?", type: "steps",
        leadHtml: "Our K9 service works in five steps, matching the right handler-and-dog unit to your site. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A site risk assessment of size, access and hot spots." },
          { icon: "dog", n: "2", t: "Match unit", d: "The right handler-and-dog unit for your site and risk." },
          { icon: "grid", n: "3", t: "Schedule", d: "Patrol scheduling that keeps timing unpredictable." },
          { icon: "shieldcheck", n: "4", t: "Patrol", d: "Handler-led sweeps and response across the shift." },
          { icon: "check", n: "5", t: "Report", d: "Verified handler reports after every patrol." },
        ] },
      { id: "why-choose", h2: "Why choose us for K9 security in Melbourne?", type: "iconlist", bg: "bg-white",
        leadHtml: "Choose us for K9 security because our handlers are licensed, our dogs are trained and welfare-managed, and we're insured, police-checked and on call 24/7. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm that treats its dogs as the professionals they are.",
        items: [
          { icon: "shieldcheck", b: "Licensed handlers", p: "Victorian security licence plus dog-handling qualifications." },
          { icon: "heart", b: "Welfare-managed dogs", p: "Trained, cared-for dogs with proper rest and handling." },
          { icon: "bolt", b: "Rapid deployment", p: "K9 units on site fast across Melbourne, 24/7." },
          { icon: "pin", b: "Local Victorian team", p: "We know the big sites where K9 earns its keep." },
        ] },
      { id: "vs", h2: "K9 patrol vs static guard: which suits your site?", type: null, bg: "bg-mist",
        leadHtml: "A K9 patrol suits large or high-risk sites where fast deterrence and area sweeps matter, while a static guard suits fixed entry points needing constant presence. Many big sites use both: a static guard on the gate and a <a href='/mobile-patrol-security-melbourne/'>K9 patrol</a> covering the perimeter.",
        bodyHtml: "<p>The right answer comes down to your site's shape and risk. If you've got one busy entrance to control, a <a href='/static-security-guards-melbourne/'>static guard</a> is the call. If you've got a large, dark perimeter where intruders could come from anywhere, a K9 unit covers far more ground and deters far harder than a guard on foot. Here's the quick comparison.</p>",
        viz: `<svg viewBox="0 0 820 268" role="img" aria-label="K9 patrol unit versus static guard comparison for Melbourne sites">
  <g font-family="Inter, system-ui, sans-serif">
    <rect x="16" y="20" width="384" height="232" rx="16" fill="#3B3B25"/>
    <text x="40" y="58" font-size="17" font-weight="700" fill="#F5F1E8">K9 patrol unit</text>
    <rect x="40" y="70" width="60" height="5" rx="2.5" fill="#C7D43F"/>
    <g fill="#EDEBDD" font-size="14">
      <circle cx="48" cy="104" r="4" fill="#C7D43F"/><text x="64" y="109">Covers large areas fast</text>
      <circle cx="48" cy="140" r="4" fill="#C7D43F"/><text x="64" y="145">Strongest visual deterrent</text>
      <circle cx="48" cy="176" r="4" fill="#C7D43F"/><text x="64" y="181">Sweeps and detects threats</text>
      <circle cx="48" cy="212" r="4" fill="#C7D43F"/><text x="64" y="217">Best for big or high-risk sites</text>
    </g>
    <rect x="420" y="20" width="384" height="232" rx="16" fill="#FFFFFF" stroke="#E2DCCD" stroke-width="1.5"/>
    <text x="444" y="58" font-size="17" font-weight="700" fill="#1C1C16">Static guard</text>
    <rect x="444" y="70" width="60" height="5" rx="2.5" fill="#C7D43F"/>
    <g fill="#3B3B25" font-size="14">
      <circle cx="452" cy="104" r="4" fill="#C7D43F"/><text x="468" y="109">Holds one fixed post</text>
      <circle cx="452" cy="140" r="4" fill="#C7D43F"/><text x="468" y="145">Constant on-site presence</text>
      <circle cx="452" cy="176" r="4" fill="#C7D43F"/><text x="468" y="181">Controls a single entry point</text>
      <circle cx="452" cy="212" r="4" fill="#C7D43F"/><text x="468" y="217">Best for busy entrances</text>
    </g>
  </g>
</svg>
<p class="viz-cap">K9 patrol or static guard? Big, open sites favour K9 reach. Busy fixed entrances favour a static post.</p>` },
      { id: "cost", h2: "How much does K9 security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "K9 security in Melbourne usually costs $60 to $95 per hour for a handler-plus-dog unit in 2026, with higher rates at night and loadings for weekends and public holidays. A unit costs more per hour than a single guard but covers far more ground. Most bookings have a minimum shift.",
        bodyHtml: "<p>A handler-and-dog unit is priced as one unit, not two people, and on a large site it often works out cheaper than the three or four static guards you'd need to cover the same ground. Detection and event units sit a little higher. <a href='/contact/'>Get a free quote</a> and we'll work out whether K9, static or a mix gives you the best value.</p>",
        head: ["Unit type", "Day ($/hr)", "Night ($/hr)", "Min shift"],
        rows: [
          ["Handler + patrol dog", "$60 to $80", "$70 to $95", "~4 hrs"],
          ["Handler + detection dog", "$70 to $95", "$80 to $110", "~4 hrs"],
          ["Event K9 unit", "quoted", "+ loadings", "~4 hrs"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your site." },
      { id: "areas", h2: "Where do we provide K9 security across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We provide K9 security across the Melbourne metro area, the industrial precincts and growth corridors, plus Geelong and Dandenong. Wherever you've got a large or high-risk site, a local handler-and-dog unit can cover it.",
        items: ["Melbourne metro", "Northern corridor", "Western suburbs", "South-east", "Industrial precincts", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "Are K9 security dogs and handlers licensed in Victoria?", a: "Yes. The handler holds a current Victorian security licence and dog-handling qualifications, and the dog is professionally trained for security work. They're assessed as a team, and the dogs are welfare-managed with proper rest, handling and care." },
      { q: "What is the difference between K9 patrol and a static guard?", a: "A K9 patrol unit covers large areas fast and gives a powerful deterrent, ideal for big or high-risk sites. A static guard holds one fixed post with constant presence, ideal for a busy entrance. Many large sites use both together." },
      { q: "Do your dog handlers carry weapons?", a: "No. Our K9 handlers are unarmed, like almost all security work in Victoria. The deterrent is the trained dog and the handler's presence, not a weapon. Armed work needs a separate licence class and is rare outside specialist roles." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every handler passes a national police check before their first shift, so your site, your staff and anyone nearby are properly protected throughout every K9 patrol." },
      { q: "How quickly can I get a K9 unit on site?", a: "Usually within hours for urgent cover, depending on unit availability. We run a 24/7 dispatch team across Melbourne, so we'll confirm a deployment window the moment you call and get a licensed handler-and-dog unit moving." },
      { q: "Can I hire K9 security for a one-day event?", a: "Yes. We supply K9 units for one-off events and short-term bookings with no lock-in. Tell us the site, date and expected numbers, and we'll roster the right handler-and-dog unit just for that event." },
      { q: "Is there a minimum shift length for a K9 unit?", a: "Most K9 bookings have a minimum shift, commonly around four hours, because the unit needs travel and setup time and the dog needs managed working periods. We'll confirm the minimum in your written quote before you commit." },
      { q: "Are there extra charges for night, weekend or public holiday work?", a: "Yes. Like most security work, K9 units carry loadings for nights, weekends and public holidays, which is when many large sites most need them. We'll set out every rate and the minimum in your written quote before you commit." },
    ],
  },

  {
    slug: "static-security-guards-melbourne",
    primaryKW: "static guards melbourne",
    breadcrumb: "Static Guards",
    title: "Static Security Guards Melbourne | Licensed & 24/7",
    metaDesc: "Need static security guards in Melbourne? We deploy licensed, insured, police-checked manned guards 24/7 for offices, sites and buildings. Get a fast quote.",
    h1: "Static Security Guards in Melbourne, Licensed and Manned",
    heroImg: "/assets/feature-static.webp",
    heroAlt: "Licensed static security guard on a fixed post at a Melbourne building entrance",
    og: "/assets/og/static-security-guards-melbourne.jpg",
    intro: "A static security guard is a licensed officer posted to a fixed location to deter trouble, monitor the site and control who comes and goes. We supply manned, static guards across Melbourne 24/7 for offices, building sites, warehouses and retail, on call and on post.",
    midcta: { b: "Need a guard on a fixed post?", span: "Licensed, manned static guards across Melbourne, 24/7." },
    related: ["security-guards-melbourne", "mobile-patrol-security-melbourne", "commercial-security-melbourne"],
    quote: { text: "We needed a manned post on our building entrance during a long fit-out. Same guard each week, knew our staff, logged every visitor and contractor. Having one reliable face on the door made the whole project run smoother.", name: "Building Manager", role: "Commercial property, Melbourne CBD", initials: "BM" },
    sections: [
      { id: "what", h2: "What are static security guards in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "A static security guard is a licensed officer posted to a fixed location to deter, monitor and control access. Also called manned guarding, it puts a trained, visible presence on one site for the whole shift. Static guards are part of <a href='/security-guards-melbourne/'>our Melbourne security guards</a> range.",
        bodyHtml: "<p>Static means the guard stays put. Rather than driving between sites like a patrol, a static guard holds one post, a gatehouse, a reception, a building entrance, and owns it for the shift. They learn your people, spot what's out of place, and become the reliable point of contact for staff, visitors and contractors. For a site with constant on-site risk, that fixed presence is hard to beat.</p>",
        bool: { q: "Is a static guard the same as a manned guard?", a: "Yes. Static guarding and manned guarding mean the same thing: a licensed guard posted to a fixed location for the shift. The terms are used interchangeably in the industry. It's the opposite of a mobile patrol, which moves between several sites." } },
      { id: "why-need", h2: "Why do you need static security guards?", type: "iconlist", bg: "bg-mist",
        lead: "You need static security guards to put a visible deterrent on site, control who enters, cover the premises after hours, respond first to any incident, and keep a clear log of everything that happens. One fixed post often does more than cameras alone ever will.",
        bodyHtml: "<p>Cameras record a problem. A static guard prevents it. When there's a trained officer on the door, opportunists move on, visitors get screened, and any incident gets a fast human response instead of a recording you review later. For busy entrances, high-value sites and anywhere people and access need managing all day, a fixed post earns its keep.</p>",
        items: [
          { icon: "eye", b: "Visible deterrence", p: "A guard on post turns most trouble away on sight." },
          { icon: "lock", b: "Controlled entry", p: "Only the right people get in, signed and accounted for." },
          { icon: "clock", b: "After-hours cover", p: "The site stays watched when everyone else has left." },
          { icon: "bolt", b: "Rapid first response", p: "A trained officer acts in seconds, not minutes." },
          { icon: "check", b: "Incident logging", p: "Clear written records of everything that happens on site." },
        ] },
      { id: "services", h2: "What do our static security guard services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our static guarding covers every kind of fixed post: gatehouse, reception, concierge-style desks, access control and patrol-on-post. It's one part of our <a href='/security-services-melbourne/'>full range of security services</a> across Melbourne.",
        items: [
          { icon: "shieldcheck", name: "Gatehouse guards", note: "Controlling vehicle and contractor access at the gate." },
          { icon: "briefcase", name: "Reception & front desk", note: "A manned desk that screens and directs every arrival." },
          { icon: "lock", name: "Access control posts", note: "Managing fobs, passes and entry points on site." },
          { icon: "eye", name: "Patrol-on-post", note: "Fixed presence with regular internal walk-throughs." },
          { icon: "users", name: "Concierge-style posts", note: "Front-of-house guards for buildings and lobbies." },
          { icon: "check", name: "Incident reporting", note: "Clear written reports after every shift and event." },
        ] },
      { id: "who", h2: "Who do we protect with static guards?", type: "pills", bg: "bg-mist",
        leadHtml: "We post static guards across almost any Melbourne site with constant on-site risk or a busy entrance. They also fold into wider <a href='/commercial-security-melbourne/'>commercial security in Melbourne</a> for multi-site clients.",
        items: [
          { icon: "building", label: "Commercial buildings" }, { icon: "hardhat", label: "Construction sites" },
          { icon: "grid", label: "Warehouses" }, { icon: "cart", label: "Retail" },
          { icon: "briefcase", label: "Corporate offices" }, { icon: "home", label: "Body corporate" },
        ] },
      { id: "armed", h2: "Armed vs unarmed static guards in Victoria", type: "table", bg: "bg-white",
        leadHtml: "Most static guards in Victoria are unarmed. Armed guarding is rare and needs a specific firearms endorsement on top of a security licence, justified by the role. For the vast majority of sites, a licensed unarmed guard is the right and lawful choice. Here's how the options compare.",
        bodyHtml: "<p>It's a question we get a lot, so here's the straight answer. Carrying a firearm as a guard in Victoria isn't a default, it's a tightly controlled exception that has to be justified by the risk of the specific role, like cash-in-transit. Our guards are unarmed unless your situation really calls for more, and we'll tell you honestly if it doesn't. For the background, read our guide on <a href='/blog/armed-vs-unarmed-security-victoria/'>armed vs unarmed security</a> in Victoria.</p>",
        head: ["Type", "Typical use", "Licence needed", "VIC legality"],
        rows: [
          ["Unarmed static guard", "Offices, sites, retail, buildings", "Security licence (unarmed)", "Standard, common"],
          ["Armed static guard", "High-risk cash or asset roles", "Security licence + firearms endorsement", "Rare, tightly controlled"],
          ["Cash-in-transit", "Moving cash or valuables", "Specialist armed licence", "Specialist only"],
        ],
        note: "Most sites are best served by a licensed unarmed guard. We'll advise honestly if your risk calls for more.",
        bool: { q: "Can security guards carry firearms in Victoria?", a: "No, not unless they hold a specific firearms endorsement justified by the role. The vast majority of static guarding in Victoria is unarmed. Armed work is rare, tightly controlled, and limited to high-risk roles like cash-in-transit." } },
      { id: "how", h2: "How does our static security service work?", type: "steps",
        leadHtml: "Our static guarding works in five steps, and we'll pair a fixed post with <a href='/mobile-patrol-security-melbourne/'>after-hours mobile patrols</a> where that makes more sense. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A site risk assessment of the post, access and hours." },
          { icon: "grid", n: "2", t: "Post orders", d: "Clear written post orders so every shift runs the same." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Licensed guards placed on post, briefed and in uniform." },
          { icon: "users", n: "4", t: "Supervise", d: "Consistent guards and supervision, not a revolving door." },
          { icon: "check", n: "5", t: "Report", d: "Verified reports after every shift, so you always know." },
        ] },
      { id: "why-choose", h2: "Why choose us for static guards in Melbourne?", type: "iconlist", bg: "bg-mist",
        leadHtml: "Choose us for static guards because every officer's licensed, insured and police-checked, we deploy fast across Melbourne, and we keep the same guards on your post for consistency. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm that backs its work.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable business licence." },
          { icon: "users", b: "Consistent guards", p: "The same faces on your post, not a rotating roster." },
          { icon: "bolt", b: "Fast deployment", p: "A guard on site fast across Melbourne, 24/7 dispatch." },
          { icon: "pin", b: "Local Victorian team", p: "We know Melbourne sites and how they really run." },
        ] },
      { id: "cost", h2: "How much do static security guards cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Static security guards in Melbourne usually cost $45 to $68 per hour for an unarmed guard in 2026, with higher rates at night and loadings for weekends and public holidays. Armed and concierge posts cost more. Most posts have a minimum shift of around four hours.",
        bodyHtml: "<p>A fixed post is priced by the hours you need it covered and when those hours fall. Round-the-clock cover means rostering several guards across shifts, while a daytime reception post is simpler and cheaper. Night, weekend and public-holiday loadings apply across the board. <a href='/contact/'>Get a free quote</a> and we'll price your post properly.</p>",
        head: ["Guard type", "Day ($/hr)", "Night ($/hr)", "Min shift"],
        rows: [
          ["Unarmed static guard", "$45 to $60", "$55 to $70", "~4 hrs"],
          ["Concierge static post", "$50 to $70", "$60 to $80", "~4 hrs"],
          ["Armed static guard", "quoted", "quoted", "by role"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your post." },
      { id: "areas", h2: "Where do we supply static guards across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We supply static security guards across the Melbourne CBD, all metro suburbs and industrial precincts, plus Geelong and Dandenong. Wherever your post is, you get a local guard who knows the area and turns up reliably.",
        items: ["Melbourne CBD", "Southbank & Docklands", "Inner suburbs", "Eastern suburbs", "Western suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What is the difference between static guards and mobile patrols?", a: "A static guard stays on one site for the whole shift, giving constant presence and access control. A mobile patrol visits several sites at set and random times in a marked vehicle. Static suits constant on-site risk; patrols suit after-hours cover across multiple locations." },
      { q: "What is the difference between armed and unarmed security?", a: "An unarmed guard relies on presence, training and de-escalation, and covers almost all work in Victoria. An armed guard carries a firearm under a specific endorsement, justified by a high-risk role like cash-in-transit. Armed work is rare and tightly controlled." },
      { q: "Are mobile patrols cheaper than a static guard?", a: "Yes, usually. One patrol team covers several sites a night, so you spread the cost rather than paying a guard to hold one post for a full shift. For after-hours and multi-site risk, patrols give more coverage per dollar than a static post." },
      { q: "Can security guards carry firearms in Victoria?", a: "No, not unless they hold a specific firearms endorsement justified by the role. The vast majority of static guarding in Victoria is unarmed. Armed work is rare, tightly controlled, and limited to high-risk roles such as cash-in-transit." },
      { q: "Are your static security guards licensed in Victoria?", a: "Yes. Every static guard holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every guard passes a national police check before their first shift, so your premises, your staff and your visitors are properly protected throughout every shift on post." },
      { q: "Is there a minimum shift length for a static guard?", a: "Most static guarding has a minimum shift, commonly around four hours, because guards need travel and briefing time. We'll confirm the minimum in your written quote before you commit, with no hidden conditions or surprises." },
      { q: "How quickly can I get a static guard on site?", a: "Usually within hours, not days. We run a 24/7 dispatch team across Melbourne, so for urgent cover we'll confirm a deployment window the moment you call and get a licensed guard on your post fast." },
    ],
  },

  {
    slug: "retail-security-melbourne",
    primaryKW: "retail security melbourne",
    breadcrumb: "Retail Security",
    title: "Retail Security Melbourne | Loss Prevention Guards",
    metaDesc: "Need retail security in Melbourne? We supply uniformed and plain-clothes loss prevention guards for stores and shopping centres. Insured. Get a fast quote.",
    h1: "Retail Security in Melbourne for Stores and Shopping Centres",
    heroImg: "/assets/feature-retail.webp",
    heroAlt: "Licensed retail security guard monitoring a Melbourne store entrance",
    og: "/assets/og/retail-security-melbourne.jpg",
    intro: "Retail security in Melbourne protects stores and shopping centres from theft and aggression using uniformed guards, plain-clothes loss prevention officers and CCTV support. We cut shrinkage, keep staff and shoppers safe, and handle offenders by the book, from a single boutique to a busy centre.",
    midcta: { b: "Shrinkage eating your margin?", span: "Uniformed and plain-clothes retail guards across Melbourne." },
    related: ["commercial-security-melbourne", "security-guards-melbourne", "corporate-security-melbourne"],
    quote: { text: "We added a plain-clothes officer on our two busiest days and stock loss dropped noticeably within a month. They catch the repeat offenders our cameras only recorded, and they handle it calmly without scaring off genuine customers.", name: "Store Manager", role: "Fashion retailer, Melbourne CBD", initials: "SR" },
    sections: [
      { id: "what", h2: "What is retail security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Retail security in Melbourne protects stores and shopping centres from theft and aggression using uniformed guards, plain-clothes loss prevention officers and CCTV support. It cuts shrinkage, keeps staff and shoppers safe, and handles offenders within the law. It's a focused part of our <a href='/commercial-security-melbourne/'>commercial security in Melbourne</a>.",
        bodyHtml: "<p>Retail is its own beast. The threat isn't a break-in at 3am, it's a steady leak during trading hours: concealed theft, grab-and-runs, aggressive returns, and organised crews working stores in a strip. Good retail security reads that environment and matches the response, sometimes a visible uniform on the door, sometimes a plain-clothes officer quietly watching the aisles.</p>",
        bool: { q: "Is a loss prevention officer the same as a retail security guard?", a: "No. A loss prevention officer works covertly to detect and intercept theft, often in plain clothes. A retail security guard usually works in uniform for visible deterrence and access control. Most stores use a mix of both, depending on the day and the risk." } },
      { id: "why-need", h2: "Why do retailers need security?", type: "iconlist", bg: "bg-mist",
        lead: "Retailers need security to cut shoplifting and organised retail crime, keep staff safe from aggression, protect stock and takings, and cover after-hours break-ins. A trained presence both deters opportunists and catches the repeat offenders who cost you the most.",
        bodyHtml: "<p>Shrinkage is the quiet killer of retail margin, and a big chunk of it is preventable. Beyond the lost stock, retail staff increasingly face aggression and threats, especially around refunds, alcohol and closing time. Security protects your people first, then your product, and a uniformed or plain-clothes presence changes the behaviour of anyone weighing up whether to chance it.</p>",
        items: [
          { icon: "cart", b: "Shoplifting", p: "Deter and intercept the everyday theft that erodes margin." },
          { icon: "users", b: "Organised retail crime", p: "Spot and disrupt the crews who target stores in waves." },
          { icon: "heart", b: "Staff safety", p: "Protect your team from aggression and threats on the floor." },
          { icon: "shieldcheck", b: "Stock & takings", p: "Guard product, registers and the back-of-house too." },
          { icon: "clock", b: "After-hours break-ins", p: "Patrols and alarm response when the shutters are down." },
        ] },
      { id: "services", h2: "What do our retail security services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our retail security spans uniformed guards, plain-clothes loss prevention officers, CCTV monitoring support, entry and exit checks and shopping-centre patrols. It's staffed by the same licensed <a href='/security-guards-melbourne/'>Melbourne security guards</a> we run citywide, with retail-specific training on top, backed by <a href='/cctv-electronic-security-melbourne/'>CCTV monitoring</a> when you want eyes on the store after hours.",
        items: [
          { icon: "shieldcheck", name: "Uniformed retail guards", note: "Visible deterrence on the door and across the shop floor." },
          { icon: "eye", name: "Plain-clothes officers", note: "Covert loss prevention that catches concealed theft." },
          { icon: "tag", name: "Loss prevention officers", note: "Trained to observe, intercept and gather evidence lawfully." },
          { icon: "camera", name: "CCTV monitoring support", note: "Guards working alongside your cameras and control room." },
          { icon: "lock", name: "Entry & exit checks", note: "Bag checks and door control where your policy allows." },
          { icon: "patrol", name: "Shopping-centre patrols", note: "Roving cover across centres, car parks and common areas." },
        ] },
      { id: "who", h2: "Which retail businesses do we protect?", type: "pills", bg: "bg-mist",
        lead: "We protect retail of every size and format across Melbourne, from a single boutique to a full shopping centre. If you sell to the public and lose stock to theft, we've got a retail guard or loss prevention officer for it.",
        items: [
          { icon: "building", label: "Shopping centres" }, { icon: "cart", label: "Supermarkets" },
          { icon: "grid", label: "Department stores" }, { icon: "tag", label: "Boutiques" },
          { icon: "lock", label: "Liquor retail" }, { icon: "home", label: "Strip-mall traders" },
        ] },
      { id: "lpo", h2: "What does a loss prevention officer do?", type: null, bg: "bg-white",
        lead: "A loss prevention officer covertly observes a store, intercepts theft within legal limits, gathers evidence and works with police. Often in plain clothes, they target concealed theft and organised retail crime that a uniformed guard or a camera alone won't catch. Choosing uniformed or plain-clothes depends on your store.",
        bodyHtml: "<p>Here's the call most retailers get wrong. A uniform deters the casual opportunist but tells the determined thief exactly where the guard is. A plain-clothes officer blends in, watches the known hot spots, and steps in only when they've seen enough. Most stores get the best result from a mix: a uniform for presence, plain clothes for the offenders who've learned to work around it.</p>",
        viz: `<svg viewBox="0 0 820 268" role="img" aria-label="Uniformed retail guard versus plain-clothes loss prevention officer">
  <g font-family="Inter, system-ui, sans-serif">
    <rect x="16" y="20" width="384" height="232" rx="16" fill="#FFFFFF" stroke="#E2DCCD" stroke-width="1.5"/>
    <text x="40" y="58" font-size="17" font-weight="700" fill="#1C1C16">Uniformed guard</text>
    <rect x="40" y="70" width="60" height="5" rx="2.5" fill="#C7D43F"/>
    <g fill="#3B3B25" font-size="14">
      <circle cx="48" cy="104" r="4" fill="#C7D43F"/><text x="64" y="109">Visible deterrence at the door</text>
      <circle cx="48" cy="140" r="4" fill="#C7D43F"/><text x="64" y="145">Access control and bag checks</text>
      <circle cx="48" cy="176" r="4" fill="#C7D43F"/><text x="64" y="181">Reassures staff and shoppers</text>
      <circle cx="48" cy="212" r="4" fill="#C7D43F"/><text x="64" y="217">Best for open theft and aggression</text>
    </g>
    <rect x="420" y="20" width="384" height="232" rx="16" fill="#3B3B25"/>
    <text x="444" y="58" font-size="17" font-weight="700" fill="#F5F1E8">Plain-clothes LP officer</text>
    <rect x="444" y="70" width="60" height="5" rx="2.5" fill="#C7D43F"/>
    <g fill="#EDEBDD" font-size="14">
      <circle cx="452" cy="104" r="4" fill="#C7D43F"/><text x="468" y="109">Covert observation in the aisles</text>
      <circle cx="452" cy="140" r="4" fill="#C7D43F"/><text x="468" y="145">Catches concealed theft</text>
      <circle cx="452" cy="176" r="4" fill="#C7D43F"/><text x="468" y="181">Gathers evidence for police</text>
      <circle cx="452" cy="212" r="4" fill="#C7D43F"/><text x="468" y="217">Best for organised retail crime</text>
    </g>
  </g>
</svg>
<p class="viz-cap">Uniformed guard or plain-clothes loss prevention officer? Most Melbourne stores get the best result from a mix.</p>`,
        bool: { q: "Do retail security guards have the power to detain a shoplifter?", a: "Yes, within limits. Under Victoria's citizen's-arrest provisions a guard or loss prevention officer can detain someone they've seen steal, using only reasonable force, until police arrive. They're trained to act on clear evidence, not suspicion, and to stay inside the law." } },
      { id: "how", h2: "How does our retail security service work?", type: "steps",
        leadHtml: "Our retail security works in five steps, built around your store and its risk pattern. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A store risk assessment of layout, hot spots and hours." },
          { icon: "grid", n: "2", t: "Plan", d: "A deployment plan: uniformed, plain-clothes or both." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Licensed, retail-trained guards and LP officers on site." },
          { icon: "users", n: "4", t: "Supervise", d: "Ongoing supervision and consistent shift cover." },
          { icon: "check", n: "5", t: "Report", d: "Incident and loss reports you can act on and use." },
        ] },
      { id: "why-choose", h2: "Why choose us for retail security in Melbourne?", type: "iconlist", bg: "bg-mist",
        leadHtml: "Choose us for retail security because our guards and loss prevention officers are licensed, insured and police-checked, we offer uniformed and plain-clothes options, and we cover Melbourne 24/7. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm that handles offenders lawfully and calmly.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable business licence." },
          { icon: "eye", b: "Uniformed or plain-clothes", p: "The right approach for your store and its risk." },
          { icon: "tag", b: "Lawful handling", p: "Trained on detain powers and evidence, not guesswork." },
          { icon: "bolt", b: "Fast local response", p: "24/7 Melbourne dispatch and rapid cover." },
        ] },
      { id: "cost", h2: "How much does retail security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Retail security in Melbourne usually costs $48 to $75 per hour in 2026, depending on whether you need a uniformed guard, a plain-clothes guard or a loss prevention officer. Night rates and weekend or public-holiday loadings apply, and most stores book a minimum shift of around four hours.",
        bodyHtml: "<p>Many retailers run guards only on their highest-risk days and trading peaks rather than every hour they're open, which keeps the cost proportional to the risk. Plain-clothes and loss prevention officers sit a little higher than a standard uniformed guard because of the extra training. <a href='/contact/'>Get a free quote</a> and we'll build cover around your store's real pattern.</p>",
        head: ["Guard type", "Day ($/hr)", "Night ($/hr)", "Min shift"],
        rows: [
          ["Uniformed retail guard", "$48 to $62", "$58 to $72", "~4 hrs"],
          ["Plain-clothes guard", "$52 to $70", "$62 to $80", "~4 hrs"],
          ["Loss prevention officer", "$55 to $75", "$65 to $85", "~4 hrs"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your store." },
      { id: "areas", h2: "Where do we provide retail security across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We provide retail security across the Melbourne CBD retail core, the major shopping centres, suburban strips and supermarkets, plus Geelong and Dandenong. Wherever you trade, a local retail-trained team can cover it.",
        items: ["Melbourne CBD", "Bourke St Mall", "Major shopping centres", "Suburban strips", "Eastern suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What does a loss prevention officer do?", a: "A loss prevention officer covertly observes a store, often in plain clothes, to detect and intercept theft. They gather evidence, target organised retail crime and repeat offenders, work with police, and act within legal limits, focusing on clear evidence rather than suspicion." },
      { q: "Do retail security guards have the power to detain a shoplifter?", a: "Yes, within limits. Under Victoria's citizen's-arrest provisions a guard can detain someone they've seen steal, using only reasonable force, until police arrive. Our guards act on clear evidence, not suspicion, and stay inside the law at all times." },
      { q: "Do your retail guards wear plain clothes or uniform?", a: "Both, depending on your needs. Uniformed guards give visible deterrence and access control, while plain-clothes officers catch concealed theft and organised crime. Most stores use a mix, and we'll recommend the right balance for your store and its risk pattern." },
      { q: "Are your retail security guards licensed in Victoria?", a: "Yes. Every retail guard and loss prevention officer holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with Victoria Police at any time." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every guard and officer passes a national police check before their first shift, so your store, your staff and your customers are properly protected throughout every shift." },
      { q: "How quickly can I get a retail guard on site?", a: "Usually within hours for urgent cover, and within a day or two for an ongoing roster. We run a 24/7 dispatch team across Melbourne, so we'll confirm a deployment window the moment you call, including plain-clothes cover for busy trading days." },
      { q: "Is there a minimum shift length for retail security?", a: "Most retail security has a minimum shift, commonly around four hours, because guards need travel and briefing time. We'll confirm the minimum in your written quote before you commit, and many stores book cover only on their highest-risk days." },
      { q: "Are there extra charges for night, weekend or public holiday cover?", a: "Yes. Like most security work, retail cover carries loadings for nights, weekends and public holidays, which matter for late-night trading and festive periods. We'll set out every rate and the minimum shift clearly in your written quote before you commit." },
    ],
  },

  {
    slug: "corporate-security-melbourne",
    primaryKW: "corporate security melbourne",
    breadcrumb: "Corporate Security",
    title: "Corporate Security Melbourne | Office & HQ Guards 24/7",
    metaDesc: "Need corporate security in Melbourne? We protect offices, HQ buildings and executive floors with licensed, insured, police-checked guards. Get a fast quote.",
    h1: "Corporate Security in Melbourne for Offices and HQ Buildings",
    heroImg: "/assets/feature-corporate.webp",
    heroAlt: "Licensed corporate security guard at a Melbourne office reception",
    og: "/assets/og/corporate-security-melbourne.jpg",
    intro: "Corporate security in Melbourne protects offices, HQ buildings and executive floors with licensed, well-presented guards. We handle reception, access control, visitor management and after-hours cover, so your workplace runs smoothly and your people, data and premises stay safe. It's the office-focused side of business security.",
    midcta: { b: "Office or HQ needs proper cover?", span: "Discreet, licensed corporate security across Melbourne, 24/7." },
    related: ["commercial-security-melbourne", "concierge-security-melbourne", "security-guards-melbourne"],
    quote: { text: "Our head office has a busy reception and three executive floors. SCM's guards present like part of our team, manage every visitor, and the after-hours access logs give our risk committee exactly what they want. Discreet and professional throughout.", name: "Head of Workplace", role: "Professional services firm, Melbourne CBD", initials: "HW" },
    sections: [
      { id: "what", h2: "What is corporate security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Corporate security in Melbourne is guarding and access control for offices and corporate workplaces, a focused subset of broader commercial security. It covers reception, visitor management, executive floor protection and after-hours cover, keeping your staff, premises and information safe. It sits under our wider <a href='/commercial-security-melbourne/'>commercial security services</a>.",
        bodyHtml: "<p>Where a building site needs muscle and a venue needs crowd control, an office needs something different: a calm, well-presented guard who fits the workplace and still locks it down properly. Corporate security is about discretion and control at once. Your visitors feel looked after, your staff feel safe, and the wrong people never get past reception or onto the executive floor.</p>",
        bool: { q: "Is corporate security the same as commercial security?", a: "No. Corporate security is the office and workplace part of the picture, while commercial security is the broad umbrella covering all business types, including retail, warehouse and construction. Corporate is a focused vertical under that wider commercial banner." } },
      { id: "why-need", h2: "Why does your office need corporate security?", type: "iconlist", bg: "bg-mist",
        lead: "Your office needs corporate security to stop unauthorised access, close visitor-management gaps, deter theft and workplace conflict, cover after-hours breaches, and meet your duty of care to staff. A licensed guard at reception controls the building without making it feel like a fortress.",
        bodyHtml: "<p>Modern offices are surprisingly soft targets. Tailgating through the front doors, contractors wandering unescorted, laptops walking out at lunch, and the occasional difficult visitor or former staff member. Add after-hours risk when the floor's empty but full of equipment and data, and the case for a trained presence at the door is clear. Corporate security closes those gaps quietly.</p>",
        items: [
          { icon: "lock", b: "Unauthorised access", p: "Stop tailgating and keep the wrong people out of the building." },
          { icon: "eye", b: "Visitor management", p: "Every guest signed in, escorted and accounted for." },
          { icon: "shieldcheck", b: "Theft deterrence", p: "Protect laptops, devices and company property on site." },
          { icon: "users", b: "Workplace conflict", p: "Calm handling of difficult visitors or staff situations." },
          { icon: "clock", b: "After-hours breaches", p: "Cover the empty office when the data and gear sit unguarded." },
          { icon: "heart", b: "Duty of care", p: "Meet your legal obligation to keep staff safe at work." },
        ] },
      { id: "services", h2: "What do our corporate security services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our corporate security covers the whole workplace: front-desk reception, access control, visitor management, executive floor protection, after-hours guarding and alarm response. It draws on the same <a href='/security-guards-melbourne/'>Melbourne security guards</a> and <a href='/concierge-security-melbourne/'>corporate concierge security</a> we run across the city.",
        items: [
          { icon: "briefcase", name: "Reception security", note: "A professional front-desk presence that manages every arrival." },
          { icon: "lock", name: "Access control", note: "Passes, turnstiles and entry points managed and logged." },
          { icon: "eye", name: "Visitor management", note: "Guests signed in, badged, escorted and signed out." },
          { icon: "shieldcheck", name: "Executive floor protection", note: "Discreet cover for boardrooms and senior leadership areas." },
          { icon: "clock", name: "After-hours guarding", note: "The building stays watched once the team goes home." },
          { icon: "alert", name: "Alarm & incident response", note: "Fast response and clear reporting into your risk processes." },
        ] },
      { id: "who", h2: "Which corporate workplaces do we protect?", type: "pills", bg: "bg-mist",
        lead: "We protect corporate workplaces of every kind across Melbourne, from a single professional office to a multi-floor head office. If staff, visitors and information need managing at the door, we've got the right guard for it.",
        items: [
          { icon: "building", label: "Corporate HQs" }, { icon: "briefcase", label: "Professional firms" },
          { icon: "grid", label: "Tech offices" }, { icon: "users", label: "Coworking spaces" },
          { icon: "shieldcheck", label: "Government tenancies" }, { icon: "home", label: "Multi-tenant towers" },
        ] },
      { id: "how", h2: "How does our corporate security service work?", type: "steps",
        leadHtml: "Our corporate security works in five steps, shaped around your workplace and its risk profile. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A workplace risk assessment of entries, floors and flow." },
          { icon: "grid", n: "2", t: "Plan", d: "A security plan that plugs into your access and BCP." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Well-presented, licensed guards matched to your workplace." },
          { icon: "users", n: "4", t: "Supervise", d: "Consistent shift cover and a single point of contact." },
          { icon: "check", n: "5", t: "Report", d: "Access logs and incident reports your risk team can use." },
        ] },
      { id: "why-choose", h2: "Why choose us for corporate security in Melbourne?", type: "iconlist", bg: "bg-white",
        leadHtml: "Choose us for corporate security because our guards are licensed, insured and police-checked, present discreetly, and we cover Melbourne 24/7 with rapid response. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm, so you get workplace-appropriate guards backed by real accountability.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable business licence." },
          { icon: "briefcase", b: "Discreet presentation", p: "Guards who fit a corporate workplace, not just a worksite." },
          { icon: "clock", b: "24/7 cover", p: "Reception hours, after-hours and everything between." },
          { icon: "bolt", b: "Rapid response", p: "A Melbourne dispatch team that reaches your office fast." },
        ] },
      { id: "diff", h2: "Corporate security vs commercial security: what's the difference?", type: null, bg: "bg-mist",
        lead: "Corporate security covers offices and workplaces specifically, while commercial security is the umbrella covering all business types, including retail, warehouse and construction. Corporate is one focused vertical inside that wider commercial picture, with its own tone, tasks and presentation standard.",
        bodyHtml: "<p>The distinction matters when you're buying. If you run an office or an HQ, you want corporate security: discreet guards, reception polish, access control and floor protection. If you run a mix of sites, a retail chain, a warehouse and a build, you want the broader <a href='/commercial-security-melbourne/'>commercial security services</a> umbrella that spans all of them. Here's how the two relate.</p>",
        viz: `<svg viewBox="0 0 820 252" role="img" aria-label="How corporate security sits as an office vertical under the wider commercial security umbrella">
  <g font-family="Inter, system-ui, sans-serif">
    <text x="30" y="32" font-size="14" font-weight="700" fill="#1C1C16">Commercial security, the broad business umbrella</text>
    <rect x="16" y="44" width="788" height="138" rx="18" fill="#EEF1E0" stroke="#3B3B25" stroke-width="2"/>
    <g>
      <rect x="34" y="92" width="138" height="64" rx="12" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="103" y="129" text-anchor="middle" font-size="13.5" fill="#3B3B25">Retail</text>
      <rect x="186" y="92" width="138" height="64" rx="12" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="255" y="129" text-anchor="middle" font-size="13.5" fill="#3B3B25">Warehouse</text>
      <rect x="338" y="92" width="138" height="64" rx="12" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="407" y="129" text-anchor="middle" font-size="13.5" fill="#3B3B25">Construction</text>
      <rect x="490" y="92" width="138" height="64" rx="12" fill="#FFFFFF" stroke="#3B3B25" stroke-width="1.5"/><text x="559" y="129" text-anchor="middle" font-size="13.5" fill="#3B3B25">Healthcare</text>
      <rect x="642" y="92" width="146" height="64" rx="12" fill="#C7D43F" stroke="#2D2D1C" stroke-width="2"/><text x="715" y="122" text-anchor="middle" font-size="13.5" font-weight="700" fill="#2D2D1C">Corporate</text><text x="715" y="140" text-anchor="middle" font-size="11" fill="#2D2D1C">offices, this page</text>
    </g>
    <text x="30" y="214" font-size="13" fill="#6B6B57">Corporate security is the office and workplace vertical inside the wider commercial umbrella.</text>
    <text x="30" y="236" font-size="13" fill="#6B6B57">Run a mix of sites? Start at commercial. Run an office or HQ? You're in the right place.</text>
  </g>
</svg>
<p class="viz-cap">Corporate security is the office-focused vertical inside our broader commercial security umbrella.</p>` },
      { id: "cost", h2: "How much does corporate security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Corporate security in Melbourne usually costs $48 to $75 per hour in 2026, depending on whether you need reception security, a static office guard or a corporate concierge. Night rates and weekend or public-holiday loadings apply, and most workplaces book a minimum shift of around four hours.",
        bodyHtml: "<p>Because corporate cover is usually an ongoing presence during business hours, most clients run set daily shifts rather than one-off bookings. Reception security sits at the lower end, executive-floor and concierge cover a little higher. The total depends on hours, the number of guards and how late the cover runs. <a href='/contact/'>Get a free quote</a> and we'll price your workplace.</p>",
        head: ["Service type", "Day ($/hr)", "Night ($/hr)", "Min shift"],
        rows: [
          ["Reception / front-desk security", "$48 to $62", "$58 to $72", "~4 hrs"],
          ["Static office guard", "$50 to $68", "$60 to $78", "~4 hrs"],
          ["Corporate concierge", "$52 to $75", "$62 to $82", "~4 hrs"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your office." },
      { id: "areas", h2: "Where do we provide corporate security across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We provide corporate security across the Melbourne CBD office towers, Southbank and Docklands, the inner-city business districts and suburban office parks, plus Geelong and Dandenong. Wherever your workplace sits, a local team can cover it.",
        items: ["Melbourne CBD", "Southbank & Docklands", "East Melbourne", "Inner suburbs", "Suburban office parks", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What is the difference between corporate and commercial security?", a: "Corporate security covers offices and workplaces specifically, with reception, access control and discreet guards. Commercial security is the broader umbrella covering all business types, including retail, warehouse and construction. Corporate is one focused vertical inside that wider commercial picture." },
      { q: "How do I hire corporate security in Melbourne?", a: "Tell us about your office, your hours and your access setup. We'll run a workplace risk assessment, recommend the right cover, and give you a clear written quote. Once you approve it, we place and brief well-presented licensed guards on your schedule." },
      { q: "Can I request male or female security guards?", a: "Yes. Tell us what your workplace needs and we'll roster the right team, including female guards where that suits your staff, visitors or reception. We match the guard to your office's tone and presentation standard." },
      { q: "Are your corporate security guards licensed in Victoria?", a: "Yes. Every corporate guard holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every guard passes a national police check before their first shift, so your office, your staff and your visitors are properly protected throughout every shift." },
      { q: "How quickly can I get a corporate guard on site?", a: "Usually within hours for urgent cover, and within a day or two for an ongoing reception or office roster. We run a 24/7 dispatch team across Melbourne, so we'll confirm a start time the moment you're ready to go." },
      { q: "Is there a minimum shift length for corporate security?", a: "Most corporate security has a minimum shift, commonly around four hours, because guards need travel and briefing time. We'll confirm the minimum in your written quote before you commit, with no hidden conditions." },
      { q: "Are there extra charges for night, weekend or public holiday cover?", a: "Yes. Like most security work, corporate security carries loadings for nights, weekends and public holidays. We'll set out every rate and the minimum shift clearly in your written quote before you commit, so there are no surprises." },
    ],
  },

  {
    slug: "construction-site-security-melbourne",
    primaryKW: "construction site security melbourne",
    breadcrumb: "Construction Site Security",
    title: "Construction Site Security Melbourne | Day & Night",
    metaDesc: "Construction site security in Melbourne stops theft and trespass. We protect builds with licensed guards, patrols and CCTV, day and night. Get a free quote.",
    h1: "Construction Site Security in Melbourne, Day and Night",
    heroImg: "/assets/feature-construction.webp",
    heroAlt: "Construction site security guard protecting a Melbourne build site",
    og: "/assets/og/construction-site-security-melbourne.jpg",
    intro: "Construction site security in Melbourne uses licensed guards, mobile patrols and systems to protect your build, plant and materials from theft and trespass. We cover gatehouse guarding, after-hours patrols, access control, CCTV and lock-up, keeping copper, tools and gear safe on site around the clock.",
    midcta: { b: "Build site exposed after hours?", span: "Licensed guards and GPS-verified patrols across Melbourne." },
    related: ["mobile-patrol-security-melbourne", "commercial-security-melbourne", "security-guards-melbourne"],
    quote: { text: "We lost thousands in copper and tools on two sites before SCM took over. Static guard on the big build, overnight patrols on the rest. Six months in, our theft losses are basically zero and the program's stayed on track.", name: "Site Manager", role: "Commercial builder, northern suburbs", initials: "SM" },
    sections: [
      { id: "what", h2: "What is construction site security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Construction site security in Melbourne uses licensed guards, mobile patrols and systems to protect build sites, plant and materials from theft and trespass. It covers gatehouse guarding, after-hours patrols, access control, CCTV and lock-up, keeping copper, tools and equipment safe on site around the clock. See our <a href='/security-services-melbourne/'>full range of security services</a>.",
        bodyHtml: "<p>A build site is a soft target by design. It's full of valuable, portable, resaleable gear, it changes shape every week, and for most of the day it's open to dozens of trades coming and going. Then everyone goes home and it sits there, fenced but unwatched. That's when most of the damage happens. Construction security closes that window with people, patrols and proof.</p><p>We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian team, and every guard we put on a site is police-checked and ready for induction. We'll scale cover up and down as your build moves through each phase, so you're not paying for a gatehouse guard when an overnight patrol would do the job.</p>" },
      { id: "why-need", h2: "Why do construction sites in Melbourne need security?", type: "iconlist", bg: "bg-mist",
        lead: "Construction sites in Melbourne need security because they're prime targets for copper and tool theft, plant damage, trespass and squatting, especially after hours. A licensed guard or patrol cuts these losses, protects your program and budget, and helps you meet insurance and WHS obligations on site.",
        bodyHtml: "<p>Site theft isn't petty crime anymore. Copper cable gets stripped and sold by weight, power tools vanish in minutes, and organised crews target unattended builds across Melbourne's growth corridors. Beyond the replacement cost, a single break-in can stall your program, blow your insurance excess, and create a WHS mess if intruders hurt themselves on your site. Security pays for itself the first time it stops one of those.</p>",
        items: [
          { icon: "bolt", b: "Copper & tool theft", p: "The top target on Melbourne builds, stripped and resold fast." },
          { icon: "hardhat", b: "Plant & equipment damage", p: "Machinery vandalised or stolen costs days and dollars." },
          { icon: "eye", b: "Trespass & squatting", p: "Unattended sites attract trespassers and illegal dumping." },
          { icon: "clock", b: "After-hours exposure", p: "Most incidents happen overnight and over long weekends." },
          { icon: "check", b: "Insurance & WHS", p: "Cover helps meet your obligations and lower your risk." },
        ] },
      { id: "targets", h2: "What do thieves target on a build site?", type: null, bg: "bg-white",
        lead: "Thieves target whatever's valuable, portable and easy to resell. On Melbourne build sites that means copper cable and wiring first, then power tools, fuel, plant and building materials. Knowing the order of risk is how we plan where guards stand, where cameras point and when patrols run.",
        bodyHtml: "<p>Copper sits at the top of nearly every site-theft report in Victoria, because it's everywhere on a build and trades by weight on a ready market. Tools come next, then diesel siphoned from machinery. We use this risk profile to shape your cover, focusing the gatehouse, CCTV and patrol timing on what's actually most likely to walk off your site.</p>",
        viz: `<svg viewBox="0 0 820 300" role="img" aria-label="Most-targeted items stolen from Melbourne construction sites">
  <g font-family="Inter, system-ui, sans-serif">
    <line x1="204" y1="14" x2="204" y2="282" stroke="#E2DCCD" stroke-width="2"/>
    <g>
      <text x="194" y="42" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Copper &amp; wiring</text>
      <rect x="206" y="26" width="440" height="30" rx="7" fill="#3B3B25"/><rect x="638" y="26" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="658" y="46" font-size="12.5" fill="#6B6B57">Very high</text>
    </g>
    <g>
      <text x="194" y="94" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Power tools</text>
      <rect x="206" y="78" width="360" height="30" rx="7" fill="#3B3B25"/><rect x="558" y="78" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="578" y="98" font-size="12.5" fill="#6B6B57">High</text>
    </g>
    <g>
      <text x="194" y="146" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Fuel &amp; diesel</text>
      <rect x="206" y="130" width="270" height="30" rx="7" fill="#3B3B25"/><rect x="468" y="130" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="488" y="150" font-size="12.5" fill="#6B6B57">Medium-high</text>
    </g>
    <g>
      <text x="194" y="198" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Plant &amp; machinery</text>
      <rect x="206" y="182" width="210" height="30" rx="7" fill="#3B3B25"/><rect x="408" y="182" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="428" y="202" font-size="12.5" fill="#6B6B57">Medium</text>
    </g>
    <g>
      <text x="194" y="250" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Materials &amp; fixtures</text>
      <rect x="206" y="234" width="170" height="30" rx="7" fill="#3B3B25"/><rect x="368" y="234" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="388" y="254" font-size="12.5" fill="#6B6B57">Medium</text>
    </g>
    <text x="14" y="294" font-size="12" font-style="italic" fill="#6B6B57">Illustrative risk profile for Melbourne build sites. Copper and tools top the list.</text>
  </g>
</svg>
<p class="viz-cap">What thieves target on Melbourne build sites. We plan guards, cameras and patrol timing around this risk order.</p>` },
      { id: "included", h2: "What's included in our construction site security?", type: "cards", bg: "bg-mist", cta: true,
        leadHtml: "Our construction security covers the site day and night: static gatehouse guards, after-hours patrols, access control, CCTV, lock-up and alarm response. Many builders pair a daytime gatehouse with <a href='/mobile-patrol-security-melbourne/'>after-hours mobile patrols</a> to cut cost without leaving a gap.",
        items: [
          { icon: "shieldcheck", name: "Static gatehouse guards", note: "A licensed presence on the gate, controlling who comes on site." },
          { icon: "patrol", name: "After-hours patrols", note: "GPS-verified overnight and weekend checks across the site." },
          { icon: "lock", name: "Access control & sign-in", note: "Site sign-in, inductions checked and entry points managed." },
          { icon: "camera", name: "CCTV monitoring", note: "Cameras on the high-risk zones, watched and recorded." },
          { icon: "clock", name: "After-hours lock-up", note: "Securing gates, sheds and compounds at the end of each day." },
          { icon: "alert", name: "Alarm response", note: "Fast attendance and escalation when an alarm trips on site." },
        ] },
      { id: "who", h2: "Which construction sites do we protect?", type: "pills", bg: "bg-white",
        lead: "We protect build sites of every kind across Melbourne, from a single residential block to a multi-stage commercial project or a civil works program. If there's plant, copper or gear on site, we can cover it.",
        items: [
          { icon: "building", label: "Commercial builds" }, { icon: "home", label: "Residential developments" },
          { icon: "hardhat", label: "Civil & infrastructure" }, { icon: "bolt", label: "Demolition sites" },
          { icon: "grid", label: "Fit-outs" }, { icon: "patrol", label: "Plant & equipment yards" },
        ] },
      { id: "how", h2: "How does our construction site security work?", type: "steps",
        leadHtml: "Our construction security works in four steps, and our guards meet site induction and white-card requirements before they start. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A site risk assessment of access, plant and high-value zones." },
          { icon: "check", n: "2", t: "Induct", d: "Guards meet induction and white-card requirements for your site." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Licensed guards and GPS-verified patrols, matched to the phase." },
          { icon: "lock", n: "4", t: "Lock-up & report", d: "After-hours lock-up plus clear reporting on every shift." },
        ] },
      { id: "why-choose", h2: "Why choose us for construction site security in Melbourne?", type: "iconlist", bg: "bg-mist",
        lead: "Choose us for construction site security because our guards are licensed, insured and white-card-ready, our patrols are GPS-verified, and we deploy fast across Melbourne. We're a local Victorian team that understands build-site risks and WHS, so your site, plant and program stay protected.",
        items: [
          { icon: "shieldcheck", b: "Licensed & white-card-ready", p: "Victorian licence plus white card for site access." },
          { icon: "pin", b: "GPS-verified patrols", p: "Proof of every after-hours check, not just a claim." },
          { icon: "bolt", b: "Fast deployment", p: "Cover on site fast across Melbourne, 24/7 dispatch." },
          { icon: "hardhat", b: "Build-site savvy", p: "We know WHS, inductions and how a site really runs." },
        ],
        bool: { q: "Are your construction site guards licensed and insured?", a: "Yes. Every construction guard holds a current Victorian security licence, is police-checked, and is ready to meet your site induction and white-card requirements. We carry public liability insurance, and you can verify our business licence on our licensing page." } },
      { id: "cost", h2: "How much does construction site security cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Construction site security in Melbourne is priced by static guarding or after-hours mobile patrols, usually at an hourly or per-patrol rate with night and weekend loadings. Patrols cost less than full-time static cover. The total depends on site size, hours and risk. Get a quote for your site.",
        bodyHtml: "<p>Most builders mix the two. A static guard on the gate during the busy build hours, then overnight patrols once the trades leave. That blend gives you presence when the site's open and proof of coverage when it's empty, without paying for a guard to stand on a locked gate all night. <a href='/contact/'>Get a free quote</a> and we'll work out the right mix for your build.</p>",
        head: ["Cover type", "$/hr or per patrol", "Loadings", "Min shift"],
        rows: [
          ["Static gatehouse guard", "$45 to $65 / hr", "+ night / weekend", "~4 hrs"],
          ["After-hours mobile patrol", "from $40 / visit", "+ public holiday", "per route"],
          ["Dedicated overnight guard", "$48 to $68 / hr", "+ after midnight", "~8 hrs"],
          ["CCTV & alarm response", "quoted", "per site", "ongoing"],
        ],
        note: "Figures are estimates only. Get a quote for your site." },
      { id: "areas", h2: "Where do we secure construction sites across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We secure construction sites across the Melbourne CBD, the growth corridors and metro suburbs, plus Geelong and Dandenong. From an inner-city tower to a fringe estate, you get a local crew that knows the area and can reach your site fast.",
        items: ["Melbourne CBD", "Northern growth corridor", "Western suburbs", "Eastern suburbs", "South-east", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "Are your security guards licensed in Victoria?", a: "Yes. Every construction guard holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "Do your guards hold a white card for construction sites?", a: "Yes. Our construction guards are white-card-ready, which is the standard construction-industry induction card required to work on a build site in Victoria. We make sure they meet your specific site induction requirements before they start a shift." },
      { q: "How quickly can I get a security guard on site?", a: "Usually within hours, not days. We run a 24/7 dispatch team across Melbourne, so for urgent site cover we'll confirm a deployment window the moment you call and get a licensed, induction-ready guard moving fast." },
      { q: "What is the difference between static guards and mobile patrols on a build site?", a: "A static guard stays on your site for the whole shift, ideal during busy build hours. A mobile patrol visits at set and random times overnight, which costs less. Many builders use a static guard by day and patrols after hours." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every guard passes a national police check before their first shift, so your site, your plant and anyone on or near the build are properly protected throughout every shift." },
      { q: "Is there a minimum shift length for construction security?", a: "Most construction security has a minimum shift, commonly around four hours for static guards, because guards need travel and induction time. Patrols work on a per-route basis. We'll confirm the minimum in your written quote before you commit." },
      { q: "How much do construction security guards cost per hour?", a: "Licensed construction guards in Melbourne usually sit around $45 to $68 per hour in 2026, with loadings for nights, weekends and public holidays. After-hours patrols cost less. The total depends on site size, hours and risk. Get a quote for an exact figure." },
      { q: "Do construction site guards have the power to detain someone?", a: "Yes, within limits. Under Victorian law a guard can refuse entry, ask a trespasser to leave, and detain a person until police arrive where the law allows. Our guards are trained to know exactly where that legal line sits on a build site." },
    ],
  },

  {
    slug: "concierge-security-melbourne",
    primaryKW: "concierge security melbourne",
    breadcrumb: "Concierge Security",
    title: "Concierge Security Melbourne | Front-of-House Guards",
    metaDesc: "Need concierge security in Melbourne? We provide licensed, well-presented front-of-house guards for apartments, lobbies and hotels. Insured. Get a quote.",
    h1: "Concierge Security in Melbourne, Front-of-House Guards",
    heroImg: "/assets/feature-concierge.webp",
    heroAlt: "Licensed concierge security guard at a Melbourne apartment lobby desk",
    og: "/assets/og/concierge-security-melbourne.jpg",
    intro: "Concierge security in Melbourne blends front-of-house reception with licensed security. One well-presented guard welcomes visitors, controls who comes and goes, manages parcels and helps residents, all while keeping your building safe. It's the friendly face on the door and the trained eye behind it.",
    midcta: { b: "Apartment or lobby needs a front desk?", span: "Licensed, well-presented concierge guards across Melbourne." },
    related: ["commercial-security-melbourne", "security-guards-melbourne", "mobile-patrol-security-melbourne"],
    quote: { text: "Our residents wanted a friendly front desk, our committee wanted real security. SCM's concierge team gave us both. They know every resident by name, sign in every visitor, and the lobby's never felt safer.", name: "Owners Corporation Chair", role: "Residential tower, Southbank", initials: "OC" },
    sections: [
      { id: "what", h2: "What is concierge security in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Concierge security in Melbourne combines front-of-house reception with licensed security duties, so one guard welcomes visitors while controlling access and keeping a building safe. They sign in guests, manage deliveries, help residents and watch the lobby, blending customer service with real security in a single role. See our <a href='/security-services-melbourne/'>full range of security services</a>.",
        bodyHtml: "<p>It's the role that makes a building feel both welcoming and secure at the same time. A concierge security guard greets you like a hotel front desk would, then quietly does the work of access control, visitor screening and incident response in the background. Residents get a familiar, helpful face. Anyone who shouldn't be there gets noticed straight away.</p>",
        bool: { q: "Is a concierge security guard the same as a receptionist?", a: "No. A receptionist answers phones and greets visitors, but a concierge security guard does that and holds a Victorian security licence. They're trained to control access, screen visitors, respond to incidents and protect the building, not just staff the desk." } },
      { id: "why-need", h2: "Why do you need concierge security?", type: "iconlist", bg: "bg-mist",
        lead: "You need concierge security to control who enters your building, manage visitors properly, deter trouble with a visible presence, and give residents or staff a helpful first point of contact. One guard covers reception and security at once, which is tidy and cost-effective.",
        bodyHtml: "<p>For an apartment tower or a corporate lobby, the front door is your biggest weak point. Tailgating, unannounced visitors and parcel theft all happen right there. A concierge security guard closes that gap without turning your foyer into a checkpoint. People feel looked after, not policed, and you still get a proper record of everyone who came through.</p>",
        items: [
          { icon: "users", b: "Welcoming presence", p: "A friendly first point of contact for residents and guests." },
          { icon: "lock", b: "Access control", p: "Only the right people get past the lobby, every time." },
          { icon: "eye", b: "Visitor management", p: "Every guest signed in, verified and accounted for." },
          { icon: "shieldcheck", b: "Visible deterrence", p: "A uniformed guard at the door warns off opportunists." },
          { icon: "clock", b: "After-hours cover", p: "The building stays staffed and safe overnight." },
          { icon: "heart", b: "Resident assistance", p: "Parcels, directions and a helping hand when it's needed." },
        ] },
      { id: "services", h2: "What do our concierge security services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our concierge security runs the whole front of house: reception, visitor sign-in, access control, parcel handling, resident assistance and incident response. For roving cover beyond the desk, pair it with <a href='/security-guards-melbourne/'>our Melbourne security guards</a>.",
        items: [
          { icon: "briefcase", name: "Front-desk reception", note: "A professional, well-presented presence at your entrance." },
          { icon: "eye", name: "Visitor sign-in", note: "Guests verified, logged and directed to the right place." },
          { icon: "lock", name: "Access control", note: "Fobs, intercoms and entry points managed properly." },
          { icon: "grid", name: "Parcel & mail handling", note: "Deliveries received, logged and held securely for residents." },
          { icon: "heart", name: "Resident assistance", note: "Everyday help that keeps residents and tenants happy." },
          { icon: "alert", name: "Incident response", note: "Trained, calm response and clear escalation when needed." },
        ] },
      { id: "who", h2: "Who do we provide concierge security for?", type: "pills", bg: "bg-mist",
        leadHtml: "We provide concierge security for any Melbourne building where people arrive and access matters. It works alongside wider <a href='/commercial-security-melbourne/'>commercial security in Melbourne</a> for larger sites and mixed-use developments.",
        items: [
          { icon: "home", label: "Residential apartments" }, { icon: "briefcase", label: "Corporate lobbies" },
          { icon: "building", label: "Hotels" }, { icon: "grid", label: "Mixed-use developments" },
          { icon: "users", label: "Owners corporations" }, { icon: "shieldcheck", label: "Student & co-living" },
        ] },
      { id: "workflow", h2: "How do you manage visitors at the front desk?", type: null, bg: "bg-white",
        lead: "We manage visitors with a clear, repeatable workflow at the front desk. Our concierge guard greets each visitor, verifies who they are and why they're there, signs them in, notifies the resident or host, then grants or denies access and logs it. Nothing slips through unnoticed.",
        bodyHtml: "<p>This is the part that turns a friendly hello into real security. Most buildings either wave people through or run a cold, awkward checkpoint. Our workflow does neither. It's warm at the front and tight underneath, so residents trust it and intruders can't talk their way past it. Here's the path every visitor follows.</p>",
        viz: `<svg viewBox="0 0 820 150" role="img" aria-label="Concierge security visitor management workflow at a Melbourne front desk">
  <g font-family="Inter, system-ui, sans-serif">
    <g><rect x="6" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="68" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">1</text><text x="68" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Greet &amp;</text><text x="68" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">welcome</text></g>
    <g><rect x="142" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="204" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">2</text><text x="204" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Verify ID</text><text x="204" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">&amp; purpose</text></g>
    <g><rect x="278" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="340" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">3</text><text x="340" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Sign in</text><text x="340" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">&amp; log</text></g>
    <g><rect x="414" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="476" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">4</text><text x="476" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Notify</text><text x="476" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">resident</text></g>
    <g><rect x="550" y="28" width="124" height="86" rx="11" fill="#3B3B25"/><text x="612" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">5</text><text x="612" y="74" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Grant or</text><text x="612" y="91" text-anchor="middle" font-size="12.5" fill="#F5F1E8">deny entry</text></g>
    <g><rect x="686" y="28" width="124" height="86" rx="11" fill="#C7D43F"/><text x="748" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#2D2D1C">6</text><text x="748" y="74" text-anchor="middle" font-size="12.5" font-weight="600" fill="#2D2D1C">Monitor</text><text x="748" y="91" text-anchor="middle" font-size="12.5" font-weight="600" fill="#2D2D1C">&amp; report</text></g>
    <path d="M132 71 l8 0 M137 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M268 71 l8 0 M273 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M404 71 l8 0 M409 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M540 71 l8 0 M545 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M676 71 l8 0 M681 67 l5 4 -5 4" fill="none" stroke="#3B3B25" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
<p class="viz-cap">Our front-desk visitor management workflow. Warm at the front, tight underneath, every visitor logged.</p>` },
      { id: "how", h2: "How does our concierge security service work?", type: "steps",
        leadHtml: "Setting up concierge security takes five steps, and we train guards to your building's tone and rules. See <a href='/our-process/'>our process</a> for the full method.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A site assessment of your lobby, access points and flow." },
          { icon: "grid", n: "2", t: "Plan", d: "A front-of-house plan and clear desk procedures." },
          { icon: "users", n: "3", t: "Place & train", d: "Well-presented guards, trained to your building's tone." },
          { icon: "shieldcheck", n: "4", t: "Supervise", d: "Ongoing supervision and consistent shift cover." },
          { icon: "check", n: "5", t: "Report", d: "Clear logs and reports your committee can actually read." },
        ] },
      { id: "why-choose", h2: "Why choose us for concierge security in Melbourne?", type: "iconlist", bg: "bg-mist",
        leadHtml: "Choose us for concierge security because our guards are licensed, insured and police-checked, well-presented and customer-service trained, and we cover Melbourne 24/7. We're a <a href='/licensing-compliance/'>fully licensed and insured</a> Victorian firm, so you get warmth at the desk and real security behind it.",
        items: [
          { icon: "shieldcheck", b: "Licensed & insured", p: "Police-checked guards and a verifiable business licence." },
          { icon: "heart", b: "Well-presented", p: "Customer-service trained, the right face for your front desk." },
          { icon: "clock", b: "24/7 cover", p: "Consistent shifts and reliable overnight presence." },
          { icon: "pin", b: "Local Victorian team", p: "We know Melbourne buildings and the people in them." },
        ] },
      { id: "diff", h2: "Residential vs corporate concierge security: what's the difference?", type: null, bg: "bg-white",
        lead: "Residential concierge security serves apartment buildings and owners corporations, focusing on residents, visitors and parcels. Corporate concierge serves office lobbies and reception areas, focusing on staff, clients and access control. Both blend reception with licensed security, but the tone and tasks differ.",
        bodyHtml: "<p>In a residential tower, the job leans toward service. Your concierge guard knows the residents, takes their parcels, lets in their guests and keeps the building calm around the clock. In a corporate lobby, it leans toward control. The guard manages a steady flow of staff and visitors, issues passes, and keeps the reception professional and on-brand. We match the guard and the procedures to whichever building you run, and you can fold either into our wider <a href='/corporate-security-melbourne/'>corporate security</a> plan when you need executive-floor cover, roving guards or patrols as well.</p>" },
      { id: "cost", h2: "How much does concierge security cost in Melbourne?", type: "table", bg: "bg-mist", cta: true,
        lead: "Concierge security in Melbourne usually costs $45 to $70 per hour in 2026, with higher rates overnight and loadings for weekends and public holidays. Residential concierge often sits at the lower end, corporate at the higher. Most buildings book a minimum shift of around four hours.",
        bodyHtml: "<p>Because concierge is usually an ongoing daily presence rather than a one-off, most clients run set shifts that cover their busiest hours or a full 24-hour roster. The more hours and the later they run, the more it costs, but a single concierge guard doing reception and security together is cheaper than paying for both separately. <a href='/contact/'>Get a free quote</a> and we'll price your roster.</p>",
        head: ["Concierge type", "Day ($/hr)", "Night ($/hr)", "Min shift"],
        rows: [
          ["Residential concierge", "$45 to $60", "$55 to $70", "~4 hrs"],
          ["Corporate concierge", "$50 to $70", "$60 to $80", "~4 hrs"],
          ["Overnight concierge", "$50 to $65", "$60 to $75", "~8 hrs"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your building." },
      { id: "areas", h2: "Where do we provide concierge security across Melbourne?", type: "areas", bg: "bg-white",
        lead: "We provide concierge security across the Melbourne CBD, Southbank and Docklands towers, inner-city apartments and corporate lobbies, plus Geelong and Dandenong. Wherever your building stands, you get a local, licensed front-of-house team that fits in.",
        items: ["Melbourne CBD", "Southbank & Docklands", "Inner suburbs", "Eastern suburbs", "Western suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What does a concierge security guard do?", a: "A concierge security guard runs your front desk and your security at once. They welcome visitors, sign guests in, control access, handle parcels, help residents and respond to incidents, all while holding a Victorian security licence and keeping the building safe." },
      { q: "Is a concierge security guard the same as a receptionist?", a: "No. A receptionist greets visitors and handles admin, but a concierge security guard does that plus licensed security work. They're trained and licensed to control access, screen visitors and respond to incidents, so you get reception and protection in one role." },
      { q: "Can I request male or female concierge guards?", a: "Yes. Tell us what your building or front desk needs and we'll roster the right team, including female guards where that suits your residents, staff or visitors. We match the guard to your building's tone and requirements." },
      { q: "How do I hire concierge security in Melbourne?", a: "Tell us about your building, your hours and your front-desk needs. We'll assess the site, recommend the right cover, and give you a clear written quote. Once you approve it, we place and train well-presented licensed guards on your schedule." },
      { q: "Are your concierge guards licensed in Victoria?", a: "Yes. Every concierge guard holds a current Victorian security licence and is police-checked, and our business holds a Private Security Business Licence you can verify with the Victoria Police Licensing and Regulation Division at any time." },
      { q: "Are your guards insured and police-checked?", a: "Yes. We carry public liability insurance and every guard passes a national police check before their first shift, so your building, your residents and your visitors are properly protected throughout every shift." },
      { q: "How quickly can I get a concierge guard on site?", a: "Usually within days for an ongoing roster, and faster for urgent cover. We run a 24/7 team across Melbourne, so we'll assess your building and confirm a start date and shift pattern as soon as you're ready to go." },
      { q: "Are there extra charges for night, weekend or public holiday cover?", a: "Yes. Like most security work, concierge carries loadings for nights, weekends and public holidays, and there's usually a minimum shift. We'll set every rate and the minimum out clearly in your written quote before you commit." },
    ],
  },

  {
    slug: "crowd-control-melbourne",
    primaryKW: "crowd control melbourne",
    breadcrumb: "Crowd Control",
    title: "Crowd Control Melbourne | Licensed Crowd Controllers",
    metaDesc: "Need crowd control in Melbourne? We supply licensed, RSA-certified crowd controllers for venues, festivals and events. Insured, police-checked. Get a quote.",
    h1: "Crowd Control in Melbourne, Licensed Crowd Controllers",
    heroImg: "/assets/feature-crowd.webp",
    heroAlt: "Licensed crowd controllers managing entry at a Melbourne venue",
    og: "/assets/og/crowd-control-melbourne.jpg",
    intro: "Crowd control in Melbourne is the licensed management of people at venues and events. Our crowd controllers screen entry, check IDs, watch capacity, support RSA and de-escalate trouble before it spreads, keeping your venue safe and compliant from doors open to last drinks.",
    midcta: { b: "Venue or event need crowd control?", span: "Licensed, RSA-certified crowd controllers across Melbourne." },
    related: ["event-security-melbourne", "security-guards-melbourne", "commercial-security-melbourne"],
    quote: { text: "Our Friday and Saturday door is run by their crowd controllers now. They're firm but calm, they know the RSA rules cold, and we've had zero serious incidents since they started. Patrons actually respect them.", name: "Licensee", role: "Live-music venue, inner Melbourne", initials: "LV" },
    sections: [
      { id: "what", h2: "What is crowd control in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Crowd control in Melbourne is the licensed management of people at venues and events by trained crowd controllers. They screen entry, manage capacity and de-escalate conflict, working under a Victorian licence to keep crowds safe at pubs, clubs, festivals and functions across the city.",
        bodyHtml: "<p>It's a specific, licensed job, not just a big person on a door. A crowd controller in Victoria is trained in conflict management, capacity awareness and the law around refusing entry and removing patrons. They read a room, spot trouble early, and step in before a tense moment turns into a fight. Done well, you barely notice them. Done badly, the whole night unravels.</p><p>Crowd control sits under the wider <a href='/event-security-melbourne/'>event security</a> umbrella, and our controllers hold the same Victorian licensing you'll find across our <a href='/security-services-melbourne/'>full range of security services</a>.</p>",
        bool: { q: "Is a crowd controller the same as a bouncer?", a: "Yes, more or less. Crowd controller is the licensed Victorian term for what people casually call a bouncer. The difference is the licence. A real crowd controller is trained, ticketed and accountable, not just someone big standing at the door." } },
      { id: "why-need", h2: "Why do you need crowd control?", type: "iconlist", bg: "bg-mist",
        lead: "You need crowd control to screen who comes in, keep your venue within its capacity limits, de-escalate conflict, and meet your duty of care, especially where alcohol's served. Licensed controllers handle the door and the floor so your staff can run the event.",
        bodyHtml: "<p>For any licensed venue serving alcohol, crowd control isn't optional. Your liquor licence and your insurance both assume trained people are managing the crowd, and a single capacity breach or a mishandled ejection can put both at risk. The right controllers protect your patrons, your staff and your licence all at once.</p>",
        items: [
          { icon: "shieldcheck", b: "Entry screening", p: "ID and ticket checks, refusing anyone who shouldn't come in." },
          { icon: "users", b: "Capacity limits", p: "Counting in and out so you never breach your venue cap." },
          { icon: "bolt", b: "Conflict de-escalation", p: "Reading tension early and calming it before it escalates." },
          { icon: "alert", b: "Evacuation safety", p: "Clear, calm crowd movement if the venue has to empty fast." },
          { icon: "check", b: "RSA & alcohol", p: "Backing your bar staff on intoxicated or aggressive patrons." },
          { icon: "lock", b: "Duty of care", p: "Meeting the legal obligation you carry for everyone inside." },
        ] },
      { id: "services", h2: "What do our crowd control services include?", type: "cards", bg: "bg-white", cta: true,
        leadHtml: "Our crowd control covers the door and the floor: supervision, entry and exit screening, ID checks, RSA support, queue and capacity management, and ejections handled by the book. It folds neatly into our <a href='/security-services-melbourne/'>full range of security services</a> for bigger jobs.",
        items: [
          { icon: "shieldcheck", name: "Door supervision", note: "A controlled, professional presence on every entry point." },
          { icon: "eye", name: "Entry & exit screening", note: "ID checks, ticket scanning and refusing entry where needed." },
          { icon: "users", name: "Queue & capacity", note: "Managing lines and counting heads to hold your cap." },
          { icon: "alert", name: "RSA support", note: "Backing bar staff on intoxicated and disorderly patrons." },
          { icon: "guard", name: "Ejections by the book", note: "Removing patrons calmly and within the law when it's needed." },
          { icon: "bolt", name: "Incident response", note: "Fast, trained response and clear escalation to police." },
        ] },
      { id: "who", h2: "Who do we provide crowd control for?", type: "pills", bg: "bg-mist",
        leadHtml: "We provide crowd control for any Melbourne venue or event where people gather and alcohol or numbers raise the risk. Need a full team for a larger function? See our <a href='/event-security-melbourne/'>event security guards</a>.",
        items: [
          { icon: "event", label: "Nightclubs" }, { icon: "home", label: "Pubs & bars" },
          { icon: "users", label: "Festivals" }, { icon: "event", label: "Concerts" },
          { icon: "shieldcheck", label: "Sporting events" }, { icon: "heart", label: "Private functions" },
        ] },
      { id: "licence", h2: "What licence do crowd controllers need in Victoria?", type: null, bg: "bg-white",
        leadHtml: "Crowd controllers in Victoria need a Private Security Individual Operator Licence with a crowd control registration, plus an RSA certificate to work at licensed venues that serve alcohol. The licence is issued by Victoria Police under the Private Security Act, and you can ask to see it.",
        bodyHtml: "<p>This is the detail most security pages skip, and it's exactly what you should check before you book anyone. A crowd control registration is a separate category from a general security guard licence. It means the person has done conflict-management training and passed the police suitability checks for working face-to-face with crowds. If a company can't produce current licences on request, that's your answer right there.</p><p>Every controller we roster is licensed for crowd control, RSA-certified where the venue serves alcohol, police-checked and insured. You can see how we verify all of it on our <a href='/licensing-compliance/'>licensing and compliance</a> page.</p>",
        bool: { q: "Do crowd controllers need an RSA certificate?", a: "Yes, for licensed venues. Any crowd controller working where alcohol's served needs a current Responsible Service of Alcohol certificate on top of their crowd control licence. It's how they lawfully support your bar staff with intoxicated patrons." } },
      { id: "legal", h2: "What can a crowd controller legally do?", type: null, bg: "bg-mist",
        lead: "A crowd controller can refuse entry, ask a patron to leave, remove someone who won't, and detain a person until police arrive where the law allows. They follow a clear escalation path, using the least force needed, and they're trained to know exactly where the legal line sits.",
        bodyHtml: "<p>Here's the part that protects both you and your patrons. Crowd controllers don't get to do whatever they like. Their powers run on a ladder, and they're trained to climb it one rung at a time, never skipping straight to force. Detaining someone is a last resort under Victoria's citizen's-arrest provisions, used only when a serious offence has happened and police are on the way.</p>",
        viz: `<svg viewBox="0 0 820 300" role="img" aria-label="Crowd controller de-escalation and ejection protocol, step by step">
  <g font-family="Inter, system-ui, sans-serif">
    <g>
      <rect x="14" y="232" width="118" height="52" rx="10" fill="#3B3B25"/>
      <text x="73" y="256" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">1</text>
      <text x="73" y="274" text-anchor="middle" font-size="13" fill="#F5F1E8">Observe</text>
    </g>
    <g>
      <rect x="146" y="196" width="118" height="52" rx="10" fill="#3B3B25"/>
      <text x="205" y="220" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">2</text>
      <text x="205" y="238" text-anchor="middle" font-size="13" fill="#F5F1E8">Engage calmly</text>
    </g>
    <g>
      <rect x="278" y="160" width="118" height="52" rx="10" fill="#3B3B25"/>
      <text x="337" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">3</text>
      <text x="337" y="202" text-anchor="middle" font-size="13" fill="#F5F1E8">Verbal warning</text>
    </g>
    <g>
      <rect x="410" y="124" width="118" height="52" rx="10" fill="#3B3B25"/>
      <text x="469" y="148" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">4</text>
      <text x="469" y="166" text-anchor="middle" font-size="13" fill="#F5F1E8">Refuse / remove</text>
    </g>
    <g>
      <rect x="542" y="88" width="118" height="52" rx="10" fill="#3B3B25"/>
      <text x="601" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#DCE77A">5</text>
      <text x="601" y="130" text-anchor="middle" font-size="12.5" fill="#F5F1E8">Detain in limits</text>
    </g>
    <g>
      <rect x="674" y="52" width="118" height="52" rx="10" fill="#C7D43F"/>
      <text x="733" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#2D2D1C">6</text>
      <text x="733" y="94" text-anchor="middle" font-size="13" font-weight="600" fill="#2D2D1C">Hand to police</text>
    </g>
    <path d="M132 250 L150 224" stroke="#C7D43F" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M264 214 L282 188" stroke="#C7D43F" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M396 178 L414 152" stroke="#C7D43F" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M528 142 L546 116" stroke="#C7D43F" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M660 106 L678 80" stroke="#C7D43F" stroke-width="2.4" stroke-linecap="round"/>
    <text x="14" y="24" font-size="13" font-weight="700" fill="#1C1C16">Least force first</text>
    <text x="792" y="24" text-anchor="end" font-size="12" font-style="italic" fill="#6B6B57">Controllers climb one rung at a time, never skipping to force</text>
  </g>
</svg>
<p class="viz-cap">Our de-escalation and ejection protocol. Controllers use the least force needed and only detain within Victorian legal limits.</p>`,
        bool: { q: "Do crowd controllers have the power to detain someone?", a: "Yes, within strict limits. Under Victoria's citizen's-arrest provisions a controller can detain a person who's committed a serious offence until police arrive, using only reasonable force. They can't punish, search at will, or hold someone for a minor issue." } },
      { id: "how", h2: "How does our crowd control service work?", type: "steps",
        leadHtml: "Our crowd control works in five steps, and we shape it around your venue and event. Want the full method? See <a href='/our-process/'>our process</a>.",
        items: [
          { icon: "eye", n: "1", t: "Assess", d: "A venue risk assessment of entries, capacity and flow." },
          { icon: "grid", n: "2", t: "Plan", d: "A crowd plan with controller numbers and positions." },
          { icon: "shieldcheck", n: "3", t: "Deploy", d: "Licensed, RSA-certified controllers on the door and floor." },
          { icon: "users", n: "4", t: "Supervise", d: "A head controller running the team through the night." },
          { icon: "check", n: "5", t: "Report", d: "Incident reports after the event, clear and verified." },
        ] },
      { id: "why-choose", h2: "Why choose us for crowd control in Melbourne?", type: "iconlist", bg: "bg-mist",
        lead: "Choose us for crowd control because every controller's licensed and RSA-certified, insured and police-checked, and we dispatch 24/7 across Melbourne. You get a Victorian-licensed firm that knows the venues, runs a clear protocol, and backs its crew with real accountability.",
        items: [
          { icon: "shieldcheck", b: "Licensed & RSA-certified", p: "Crowd control registration plus RSA where alcohol's served." },
          { icon: "bolt", b: "Clear protocol", p: "A trained de-escalation and ejection path, used every time." },
          { icon: "pin", b: "Melbourne venues", p: "We know the rooms, the rules and the local crowds." },
          { icon: "clock", b: "24/7 dispatch", p: "Rapid response and cover whenever your doors are open." },
        ] },
      { id: "cost", h2: "How much does crowd control cost in Melbourne?", type: "table", bg: "bg-white", cta: true,
        lead: "Crowd control in Melbourne usually costs $55 to $80 per controller per hour in 2026, with higher rates at night and loadings for weekends and public holidays. A head controller or supervisor costs more. Most venues book a minimum shift of around four hours.",
        bodyHtml: "<p>Your total comes down to how many controllers your venue needs, the hours they work, and when those hours fall. A quiet weeknight needs fewer than a Saturday headline show, and late finishes carry a loading. We'll match the team to your real risk and your capacity, not pad it out. <a href='/contact/'>Get a free quote</a> for your venue and we'll price it properly.</p>",
        head: ["Controller type", "Day ($/hr)", "Night ($/hr)", "Min shift"],
        rows: [
          ["Crowd controller", "$55 to $70", "$65 to $80", "~4 hrs"],
          ["Head controller / supervisor", "$70 to $90", "$80 to $95", "~4 hrs"],
          ["Event team (per controller)", "quoted", "+ loadings", "~4 hrs"],
        ],
        note: "Estimate only for 2026. Weekend and public-holiday loadings apply. Get a quote for your venue." },
      { id: "areas", h2: "Where do we provide crowd control across Melbourne?", type: "areas", bg: "bg-mist",
        lead: "We provide crowd control across the Melbourne CBD, inner-city venues, the suburbs, plus Geelong and Dandenong. From a laneway bar to a festival main stage, you get a local, licensed crew that knows the venue and the crowd it draws.",
        items: ["Melbourne CBD", "Inner-city venues", "Northern suburbs", "Eastern suburbs", "Western suburbs", "Geelong", "Dandenong"],
        link: { href: "/service-areas/", label: "See all areas we cover" } },
    ],
    faqs: [
      { q: "What does crowd control involve at an event?", a: "Crowd control involves managing how people enter, move and behave. Licensed controllers run the door, check IDs and tickets, watch capacity and pinch points, support RSA, and step in to de-escalate or remove anyone causing trouble, all within the law." },
      { q: "What licence does a crowd controller need in Victoria?", a: "A crowd controller in Victoria needs a Private Security Individual Operator Licence with a crowd control registration, issued by Victoria Police under the Private Security Act. For licensed venues they also need a current RSA certificate. Always ask to see both." },
      { q: "Do crowd controllers need an RSA certificate?", a: "Yes, for licensed venues. Any controller working where alcohol's served needs a current Responsible Service of Alcohol certificate on top of their crowd control licence, so they can lawfully support bar staff in managing intoxicated patrons." },
      { q: "Do crowd controllers have the power to detain someone?", a: "Yes, within strict limits. Under Victoria's citizen's-arrest provisions a controller can detain someone who's committed a serious offence until police arrive, using only reasonable force. They can't punish, search freely or hold someone over a minor issue." },
      { q: "How many crowd controllers do I need for my event?", a: "As a rough guide, plan one licensed controller for every 100 guests, then adjust up for alcohol, late finishes and higher-risk crowds. A licensed venue or festival needs more. We'll calculate the exact number for your venue and capacity." },
      { q: "Are your crowd controllers licensed in Victoria?", a: "Yes. Every controller holds a current Victorian crowd control registration and is police-checked, RSA-certified where required, and insured. Our business holds a Private Security Business Licence you can verify with Victoria Police at any time." },
      { q: "Can I hire crowd control for a one-day event?", a: "Yes. We cover one-off events, single nights and short-term bookings with no lock-in. Tell us the venue, date and expected numbers, and we'll roster the right team of licensed controllers just for that event." },
      { q: "Are there extra charges for night, weekend or public holiday work?", a: "Yes. Like most security work, crowd control carries loadings for nights, weekends and public holidays, and there's usually a minimum shift of around four hours. We'll set it all out clearly in your written quote before you commit." },
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
        bodyHtml: "<p>Most of what you'll pay comes down to three things: how many controllers your event needs, how many hours they're on, and when those hours fall. A Saturday-night finish or a public holiday carries a loading, and there's almost always a minimum shift of around four hours because controllers need travel and briefing time. Want the full breakdown? See our <a href='/event-security-cost-melbourne/'>event security pricing</a> guide, or <a href='/contact/'>get a free quote</a> for your date and venue.</p>",
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

// ONE-FILE BRAND SWAP — edit this and the whole site updates.
// Placeholders flagged CLIENT INPUT come straight from the SEO research
// (web-entity.md). Swap them when the real business details are confirmed.

export const site = {
  // Brand
  brand: "Security Company Melbourne",
  brandShort: "SCM",
  tagline: "Security Company · Melbourne",
  domain: "securitycompanyinmelbourne.com",
  url: "https://securitycompanyinmelbourne.com",

  // Contact — CLIENT INPUT
  phone: "1300 000 000",            // CLIENT INPUT
  phoneHref: "tel:1300000000",      // CLIENT INPUT
  email: "info@securitycompanyinmelbourne.com",
  address: "Melbourne, Victoria",   // CLIENT INPUT (full NAP for LocalBusiness schema)

  // Trust / EEAT — CLIENT INPUT (do not invent; shown as placeholders)
  licenceNo: "Private Security Business Licence #______",  // CLIENT INPUT
  insurance: "$20M public liability",                       // CLIENT INPUT (confirm)
  abn: "ABN __ ___ ___ ___",                                // CLIENT INPUT
  founded: "20XX",                                          // CLIENT INPUT
  guardCount: "100+",                                       // CLIENT INPUT
  reviewRating: "5.0",                                      // CLIENT INPUT
  reviewCount: "",                                          // CLIENT INPUT
  responseWindow: "within hours",                           // CLIENT INPUT (confirm exact)

  // Palette (Kindsight-inspired, olive + cream + lime)
  colors: {
    cream: "#F5F1E8",
    creamSoft: "#EFEADD",
    olive: "#3B3B25",
    oliveDeep: "#2D2D1C",
    lime: "#C7D43F",
    limeSoft: "#DCE77A",
    ink: "#1C1C16",
    muted: "#6B6B57",
    line: "#E2DCCD",
    blush: "#F3CFC6",
  },

  // Simple fallback nav (mobile drawer + footer use the richer structures below)
  nav: [
    { label: "Services", href: "/security-services-melbourne/" },
    { label: "Sectors", href: "#sectors" },
    { label: "Pricing", href: "/security-guard-cost-melbourne/" },
    { label: "Resources", href: "/blog/" },
    { label: "Company", href: "/about/" },
  ],

  // MEGA MENU (desktop) + MOBILE DRAWER source of truth
  mega: {
    services: {
      hubHref: "/security-services-melbourne/",
      columns: [
        { heading: "Guarding", items: [
          { name: "Security Guards", href: "/security-guards-melbourne/", note: "Static & manned" },
          { name: "Mobile Patrols", href: "/mobile-patrol-security-melbourne/", note: "+ alarm response" },
          { name: "Concierge Security", href: "/concierge-security-melbourne/", note: "Front of house" },
          { name: "K9 Dog Security", href: "/k9-security-melbourne/", note: "Handler units" },
        ]},
        { heading: "Specialist", items: [
          { name: "Event Security", href: "/event-security-melbourne/", note: "Crowds & venues" },
          { name: "Crowd Control", href: "/crowd-control-melbourne/", note: "RSA-trained" },
          { name: "VIP & Close Protection", href: "/vip-close-protection-melbourne/", note: "Bodyguards" },
          { name: "CCTV & Electronic", href: "/cctv-electronic-security-melbourne/", note: "Remote guarding" },
        ]},
        { heading: "By industry", items: [
          { name: "Commercial Security", href: "/commercial-security-melbourne/", note: "Business sites" },
          { name: "Construction Sites", href: "/construction-site-security-melbourne/", note: "Theft & trespass" },
          { name: "Retail & Loss Prevention", href: "/retail-security-melbourne/", note: "Shrinkage" },
          { name: "Healthcare & Warehouse", href: "/healthcare-security-melbourne/", note: "Specialised" },
        ]},
      ],
      featured: {
        title: "Not sure what you need?",
        text: "Tell us about your site and we'll scope the right cover, fast.",
        href: "/contact/", cta: "Get a free quote",
      },
    },
    menus: [
      { label: "Pricing", items: [
        { name: "Security guard cost", href: "/security-guard-cost-melbourne/" },
        { name: "Event security cost", href: "/event-security-cost-melbourne/" },
      ]},
      { label: "Resources", items: [
        { name: "All guides", href: "/blog/" },
        { name: "How to hire a security guard", href: "/blog/how-to-hire-a-security-guard-melbourne/" },
        { name: "Static guards vs mobile patrol", href: "/blog/static-guards-vs-mobile-patrol/" },
        { name: "VIC licence changes 2026", href: "/blog/victoria-security-licence-changes-2026/" },
      ]},
      { label: "Company", items: [
        { name: "About us", href: "/about/" },
        { name: "Licensing & compliance", href: "/licensing-compliance/" },
        { name: "Reviews", href: "/reviews/" },
        { name: "Our process", href: "/our-process/" },
        { name: "Service areas", href: "/service-areas/" },
        { name: "Contact", href: "/contact/" },
      ]},
    ],
  },

  // Proof stats (CLIENT INPUT — confirm real numbers)
  stats: [
    { n: "100+", label: "Licensed guards on the ground" },
    { n: "24/7", label: "Control room & dispatch" },
    { n: "<2 hrs", label: "Typical deployment window" },
    { n: "100%", label: "Police-checked & insured" },
  ],

  services: [
    { name: "Security Guards", href: "/security-guards-melbourne/", icon: "guard",
      blurb: "Licensed, police-checked guards for retail, offices, building sites and more. They deter trouble, control who comes and goes, and log every incident." },
    { name: "Mobile Patrols", href: "/mobile-patrol-security-melbourne/", icon: "patrol",
      blurb: "Marked patrol vehicles and rapid alarm response on a random schedule. We lock up, unlock, and reach your site fast. Every visit is GPS-stamped." },
    { name: "Event Security", href: "/event-security-melbourne/", icon: "event",
      blurb: "Crowd controllers, bag checks and event guards for any size function. Our RSA-trained team keeps guests safe and the night moving." },
    { name: "Commercial Security", href: "/commercial-security-melbourne/", icon: "building",
      blurb: "One local provider for the whole site, from front-desk concierge to construction and warehouse cover. Less juggling, tighter security." },
  ],

  sectors: [
    { name: "Construction", href: "/construction-site-security-melbourne/", img: "/assets/sector-construction.webp",
      alt: "Security guard at a Melbourne construction site" },
    { name: "Commercial & retail", href: "/commercial-security-melbourne/", img: "/assets/sector-commercial.webp",
      alt: "Concierge security officer in a Melbourne corporate lobby" },
    { name: "Events", href: "/event-security-melbourne/", img: "/assets/sector-events.webp",
      alt: "Event security staff managing a Melbourne event entrance" },
  ],
};

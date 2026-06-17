// Cost guide pages. Data-driven: each renders via src/pages/[costguide].astro (Article schema).
// UC v6.4 + humanized: answer-first (lead with the number), en-AU, 0 em dashes, 20+ contractions.
// Figures are 2026 estimates, kept aligned with the service-page snapshots (linkless fact-align).
// Section types reuse [service] renderer: cards | iconlist | pills | steps | table | ordered (+ bool, cta, leadHtml, bodyHtml, viz).
export const costguides = [
  {
    slug: "security-guard-cost-melbourne",
    primaryKW: "how much do security guards cost",
    breadcrumb: "Security Guard Cost",
    title: "Security Guard Cost Melbourne 2026 | Hourly Rates",
    metaDesc: "How much do security guards cost in Melbourne? See 2026 rates by guard type, plus night and weekend loadings. Estimates only, get a quote for your site.",
    h1: "How Much Do Security Guards Cost in Melbourne?",
    heroImg: "/assets/feature-cost.webp",
    heroAlt: "Security guard cost guide for Melbourne with 2026 hourly rates",
    og: "/assets/og/security-guard-cost-melbourne.jpg",
    updated: "Updated June 2026 by the SCM Security team",
    intro: "Licensed security guards in Melbourne typically cost between about $45 and $80 an hour in 2026 for an unarmed guard, before loadings. Nights, weekends and public holidays cost more, and a minimum shift usually applies. Your exact rate depends on the guard type and your site's risk.",
    midcta: { b: "Want a real number for your site?", span: "Get an itemised security quote with every rate spelled out." },
    related: ["security-guards-melbourne", "mobile-patrol-security-melbourne", "event-security-melbourne"],
    sections: [
      { id: "answer", h2: "How much do security guards cost in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Licensed security guards in Melbourne typically cost between about $45 and $65 an hour in 2026 for an unarmed weekday guard, before loadings. Crowd controllers and specialist roles run higher. Nights, weekends and public holidays add penalty rates, and a minimum shift usually applies. Hire <a href='/security-guards-melbourne/'>professional security guards</a> from a licensed Victorian team.",
        bodyHtml: "<p>That's the short answer. The longer one's that no two jobs price the same, because a guard's rate moves with the licence class, the time of day, the length of the booking and how risky the site is. The tables below give you real 2026 Melbourne ranges so you can sense-check any quote you're handed, then we'll show you how the final number actually gets built.</p><p class='cost-note' style='text-align:left'>Figures on this page are 2026 estimates only. Get a quote for exact pricing.</p>" },
      { id: "rates", h2: "Security guard hourly rates in Melbourne (2026)", type: "table", bg: "bg-mist",
        lead: "Here are indicative 2026 Melbourne hourly rates by guard type. Weekday day rates are the baseline; nights, Saturdays, Sundays and public holidays carry penalty loadings on top.",
        bodyHtml: "<p>Here's your reference point. If a quote comes in well under the weekday range, ask what licensing and insurance you're actually getting. If it's well over, ask what the premium buys. The midpoints below give you a feel for where each guard type sits before loadings.</p>",
        viz: `<svg viewBox="0 0 820 252" role="img" aria-label="Typical Melbourne security guard hourly rates by guard type, 2026">
  <g font-family="Inter, system-ui, sans-serif">
    <line x1="208" y1="14" x2="208" y2="214" stroke="#E2DCCD" stroke-width="2"/>
    <g>
      <text x="196" y="42" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Crowd controller</text>
      <rect x="210" y="26" width="402" height="30" rx="7" fill="#3B3B25"/><rect x="604" y="26" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="624" y="46" font-size="12.5" fill="#6B6B57">$55 to $80/hr</text>
    </g>
    <g>
      <text x="196" y="92" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Corporate / concierge</text>
      <rect x="210" y="76" width="360" height="30" rx="7" fill="#3B3B25"/><rect x="562" y="76" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="582" y="96" font-size="12.5" fill="#6B6B57">$50 to $70/hr</text>
    </g>
    <g>
      <text x="196" y="142" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Unarmed static guard</text>
      <rect x="210" y="126" width="330" height="30" rx="7" fill="#3B3B25"/><rect x="532" y="126" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="552" y="146" font-size="12.5" fill="#6B6B57">$45 to $65/hr</text>
    </g>
    <g>
      <text x="196" y="192" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Mobile patrol</text>
      <rect x="210" y="176" width="276" height="30" rx="7" fill="#3B3B25"/><rect x="478" y="176" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="498" y="196" font-size="12.5" fill="#6B6B57">from $40/visit</text>
    </g>
    <text x="14" y="236" font-size="12" font-style="italic" fill="#6B6B57">Indicative weekday day rates, Melbourne 2026. Night, weekend and public-holiday loadings apply on top.</text>
  </g>
</svg>`,
        head: ["Guard type", "Weekday", "Night", "Saturday", "Sunday / public hol", "Min shift"],
        rows: [
          ["Unarmed static guard", "$45 to $65", "+ loading", "+ loading", "+ higher loading", "~4 hrs"],
          ["Mobile patrol", "from $40 / visit", "+ after-hours", "+ loading", "+ higher loading", "per route"],
          ["Crowd controller", "$55 to $80", "+ loading", "+ loading", "+ higher loading", "~4 hrs"],
          ["Corporate / concierge", "$50 to $70", "+ loading", "+ loading", "+ higher loading", "~4 hrs"],
        ],
        note: "Estimate only, 2026 figures. GST and a minimum shift may apply. Get a quote for your site." },
      { id: "factors", h2: "What affects the price of a security guard?", type: "iconlist", bg: "bg-white",
        lead: "A security guard's price depends on the guard type and licence class, armed versus unarmed, the shift time and length, your site's risk level, how many guards you need, and the contract length. Longer or ongoing bookings usually lower the hourly rate per guard.",
        bodyHtml: "<p>It helps to know which levers move the number, because some of them are yours to pull. A longer or ongoing contract almost always brings the per-hour rate down. Booking daytime hours avoids penalty loadings. And being clear about your real risk means you're not paying for armed cover when an unarmed guard would do the job.</p>",
        items: [
          { icon: "shieldcheck", b: "Guard type & licence", p: "A crowd controller or armed role costs more than a static guard." },
          { icon: "clock", b: "Shift time & length", p: "Nights, weekends and short shifts all push the rate up." },
          { icon: "eye", b: "Site risk level", p: "Higher-risk sites need more guards or more experience." },
          { icon: "users", b: "Number of guards", p: "Crowd size and venue layout set how many you need." },
          { icon: "tag", b: "Contract length", p: "Ongoing bookings usually lower the per-hour rate." },
        ] },
      { id: "scenarios", h2: "Security guard cost by scenario", type: "table", bg: "bg-mist",
        lead: "Here's how the hourly rates add up across a few common Melbourne jobs. These are worked examples to give you a feel for total cost, not fixed quotes.",
        head: ["Scenario", "Guards", "Hours", "Indicative total", "Notes"],
        rows: [
          ["One-off event night", "2 crowd controllers", "5 hrs", "$650 to $900", "Sat night, min shift applies"],
          ["Ongoing retail cover", "1 guard, busy days", "8 hrs x 2 days", "$750 to $1,050 / wk", "Lower rate on a contract"],
          ["Construction after-hours patrol", "1 patrol vehicle", "nightly route", "from $40 / visit", "Per visit, several sites"],
          ["Corporate reception", "1 concierge guard", "9 hrs weekday", "$470 to $640 / day", "Ongoing daily roster"],
        ],
        note: "Estimate only, actual quotes vary by site, dates and risk. Get a quote for exact pricing." },
      { id: "loadings", h2: "Are there extra charges for night, weekend or public holiday security?", type: "iconlist", bg: "bg-white",
        lead: "Yes. Security guards cost more at night, on weekends and on public holidays because penalty rates apply, and a minimum shift length usually applies too. Watch for callout fees, travel charges and equipment costs as well, so always check what's included before you book.",
        bodyHtml: "<p>The headline hourly rate is rarely the whole story, so it pays to ask what sits on top. A reputable company spells these out in the quote rather than springing them on the invoice. Here's what to look for.</p>",
        items: [
          { icon: "clock", b: "Penalty rates", p: "Nights, weekends and public holidays cost more per hour." },
          { icon: "check", b: "Minimum shift", p: "Usually around four hours, even for a short job." },
          { icon: "bolt", b: "Callout fees", p: "Some one-off or alarm-response jobs carry a callout charge." },
          { icon: "pin", b: "Travel", p: "Distant or regional sites may add a travel component." },
          { icon: "grid", b: "Equipment", p: "Radios, vehicles or special gear can add to the cost." },
        ],
        bool: { q: "Is there a minimum shift length for hiring a security guard?", a: "Yes. Most security work has a minimum shift, commonly around four hours, because guards need travel and setup time. A reputable company confirms the minimum in your written quote before you book, so there's no surprise on the invoice." } },
      { id: "quote", h2: "How do you get an accurate security guard quote?", type: "steps",
        leadHtml: "Getting an accurate quote takes four quick steps. Share your details, we assess the job, you get an itemised quote, then licensed guards deploy. Start with <a href='/contact/'>a free quote</a>.",
        items: [
          { icon: "eye", n: "1", t: "Share details", d: "Your site, dates, hours and risk level." },
          { icon: "grid", n: "2", t: "We assess", d: "We work out the right guard type and numbers." },
          { icon: "tag", n: "3", t: "Itemised quote", d: "Hourly rate, loadings and minimum shift, spelled out." },
          { icon: "shieldcheck", n: "4", t: "Deploy", d: "Approve it and licensed guards are on site fast." },
        ] },
    ],
    faqs: [
      { q: "How much does it cost to hire a security guard in Melbourne?", a: "Hiring a licensed security guard in Melbourne usually costs about $45 to $80 an hour in 2026, depending on the guard type, before night, weekend and public-holiday loadings. A minimum shift of around four hours applies. Get a quote for an exact figure for your site." },
      { q: "How much do security guards cost per hour in Australia?", a: "Across Australia, licensed security guards generally cost between about $40 and $80 an hour in 2026, varying by state, guard type and time of day. Melbourne sits within that range. Penalty rates apply at night and on weekends, and a minimum shift usually applies." },
      { q: "What is the hourly rate for a security guard in Victoria?", a: "In Victoria, an unarmed security guard usually costs about $45 to $65 an hour on a weekday in 2026, with crowd controllers and specialist roles higher. Nights, weekends and public holidays carry penalty loadings on top of the base rate." },
      { q: "Are there extra charges for night, weekend or public holiday security?", a: "Yes. Penalty rates apply at night, on weekends and on public holidays, so the hourly cost rises. A minimum shift usually applies too, and some jobs add callout, travel or equipment charges. Always check what's included in the quote before you book." },
      { q: "Is there a minimum shift length for hiring a security guard?", a: "Yes. Most security work has a minimum shift, commonly around four hours, because guards need travel and setup time. We confirm the minimum in your written quote before you book, so you know exactly what you're paying for upfront." },
      { q: "Are mobile patrols cheaper than a static guard?", a: "Yes, usually. One patrol team covers several sites a night, so you spread the cost rather than paying a guard to hold one post for a full shift. For after-hours and multi-site risk, patrols give you far more coverage per dollar spent." },
      { q: "Can I hire a security guard for one day or a short-term event?", a: "Yes. We cover one-off events, single days and short-term bookings with no lock-in, subject to the minimum shift. Tell us the date and the site, and we'll quote the right number of licensed guards just for that job." },
      { q: "Why do security guard prices vary between companies?", a: "Prices vary with licensing, insurance, guard experience and overheads. A very cheap quote can mean unlicensed or uninsured guards, which is a real risk. Always check the company holds a Private Security Business Licence and carries public liability insurance before you book." },
    ],
  },
  {
    slug: "event-security-cost-melbourne",
    primaryKW: "how much does event security cost",
    breadcrumb: "Event Security Cost",
    title: "Event Security Cost in Melbourne 2026 | Real Prices",
    metaDesc: "How much does event security cost in Melbourne? See 2026 prices per crowd controller, guards-per-100 ratios and event totals. Estimates only, get a quote.",
    h1: "How Much Does Event Security Cost in Melbourne?",
    heroImg: "/assets/sector-events.webp",
    heroAlt: "Event security cost guide for Melbourne with 2026 crowd controller prices",
    og: "/assets/og/event-security-cost-melbourne.jpg",
    updated: "Updated June 2026 by the SCM Security team",
    intro: "Event security in Melbourne typically costs about $55 to $80 an hour per licensed crowd controller in 2026, before loadings. A small private event often starts from around $550 to $900 for a few hours. The total rises with guest numbers, alcohol, and night or public-holiday timing.",
    midcta: { b: "Pricing up your event?", span: "Get an itemised event security quote against your guest count." },
    related: ["event-security-melbourne", "crowd-control-melbourne", "security-guards-melbourne"],
    sections: [
      { id: "answer", h2: "How much does event security cost in Melbourne?", type: null, bg: "bg-white", cta: true,
        leadHtml: "Event security in Melbourne typically costs about $55 to $80 an hour per licensed crowd controller in 2026, before loadings. A small private event often starts from around $550 to $900 for a few hours. The total rises with guest numbers, alcohol, and night or public-holiday timing. Plan your cover on the <a href='/event-security-melbourne/'>event security in Melbourne</a> page.",
        bodyHtml: "<p>That's the working number, and here's why it's a range not a flat fee: the guard count comes from your crowd. We'll start from a guards-per-100-guests ratio, then adjust for alcohol, venue layout, VIPs and how late it runs. The tables below show the per-role rates and how they're built up across real event types.</p><p class='cost-note' style='text-align:left'>Figures on this page are 2026 estimates only. Get a quote for your event.</p>" },
      { id: "rates", h2: "Event security cost table Melbourne (2026)", type: "table", bg: "bg-mist",
        lead: "Here are indicative 2026 Melbourne hourly rates by event security role. Weekday rates are the baseline; nights, weekends and public holidays carry penalty loadings on top, and a minimum shift applies.",
        bodyHtml: "<p>Crowd controllers are the core of most bookings, and they're joined by door guards, RSA marshals and a supervisor as the event scales. The midpoints below give you a feel for each per-role rate before loadings.</p>",
        viz: `<svg viewBox="0 0 820 252" role="img" aria-label="Typical Melbourne event security hourly rates by role, 2026">
  <g font-family="Inter, system-ui, sans-serif">
    <line x1="208" y1="14" x2="208" y2="214" stroke="#E2DCCD" stroke-width="2"/>
    <g>
      <text x="196" y="42" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Event supervisor</text>
      <rect x="210" y="26" width="410" height="30" rx="7" fill="#3B3B25"/><rect x="612" y="26" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="632" y="46" font-size="12.5" fill="#6B6B57">$70 to $95/hr</text>
    </g>
    <g>
      <text x="196" y="92" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Crowd controller</text>
      <rect x="210" y="76" width="335" height="30" rx="7" fill="#3B3B25"/><rect x="537" y="76" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="557" y="96" font-size="12.5" fill="#6B6B57">$55 to $80/hr</text>
    </g>
    <g>
      <text x="196" y="142" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">Door / entry guard</text>
      <rect x="210" y="126" width="300" height="30" rx="7" fill="#3B3B25"/><rect x="502" y="126" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="522" y="146" font-size="12.5" fill="#6B6B57">$50 to $70/hr</text>
    </g>
    <g>
      <text x="196" y="192" text-anchor="end" font-size="13.5" font-weight="600" fill="#1C1C16">RSA marshal</text>
      <rect x="210" y="176" width="300" height="30" rx="7" fill="#3B3B25"/><rect x="502" y="176" width="8" height="30" rx="4" fill="#C7D43F"/>
      <text x="522" y="196" font-size="12.5" fill="#6B6B57">$50 to $70/hr</text>
    </g>
    <text x="14" y="236" font-size="12" font-style="italic" fill="#6B6B57">Indicative weekday rates, Melbourne 2026. Night, weekend and public-holiday loadings apply on top.</text>
  </g>
</svg>`,
        head: ["Role", "Weekday", "Night", "Weekend", "Public holiday", "Min shift"],
        rows: [
          ["Crowd controller", "$55 to $80", "+ loading", "+ loading", "+ higher loading", "~4 hrs"],
          ["Door / entry guard", "$50 to $70", "+ loading", "+ loading", "+ higher loading", "~4 hrs"],
          ["RSA marshal", "$50 to $70", "+ loading", "+ loading", "+ higher loading", "~4 hrs"],
          ["Event supervisor", "$70 to $95", "+ loading", "+ loading", "+ higher loading", "~4 hrs"],
        ],
        note: "Estimate only, 2026 figures. GST and a minimum shift may apply. Get a quote for your event." },
      { id: "factors", h2: "What affects the cost of event security?", type: "iconlist", bg: "bg-white",
        lead: "Event security cost depends on attendee numbers, whether the event is licensed for alcohol, your venue and council conditions, the time and duration, any VIP needs, and whether it's indoor or outdoor. More guests and a licensed late-night event both push the total up.",
        bodyHtml: "<p>The single biggest lever's your headcount, because it sets the guard count through the guards-per-100 ratio. After that, alcohol and a late finish are the next biggest, since both raise the risk and the penalty rates. Knowing these upfront helps you budget realistically, so you're not surprised when the quote lands.</p>",
        items: [
          { icon: "users", b: "Attendee numbers", p: "Guard count comes from the guards-per-100 ratio." },
          { icon: "alert", b: "Alcohol / licensed", p: "Licensed events need RSA support and more cover." },
          { icon: "pin", b: "Venue & council", p: "Permit conditions can set minimum guard numbers." },
          { icon: "clock", b: "Time & duration", p: "Late finishes and long events carry penalty loadings." },
          { icon: "shieldcheck", b: "VIP & risk", p: "VIPs or higher-risk crowds add specialist cover." },
        ] },
      { id: "byevent", h2: "Event security cost by event type", type: "table", bg: "bg-mist",
        lead: "Here's how the rates add up across common Melbourne events, with the guard count derived from the guards-per-100-guests ratio. These are worked examples to guide your budget, not fixed quotes.",
        head: ["Event type", "Attendees", "Guards (ratio)", "Hours", "Indicative total"],
        rows: [
          ["Private party", "50 to 80", "1 to 2", "5 hrs", "$550 to $900"],
          ["Wedding", "~100", "2", "6 hrs", "$700 to $1,150"],
          ["Corporate function", "~200", "2 to 3", "5 hrs", "$750 to $1,350"],
          ["Concert", "~500", "5 to 6", "6 hrs", "$2,000 to $3,500"],
          ["Festival", "1,000+", "10+", "8 hrs", "from $5,000"],
        ],
        note: "Estimate only, actual quotes vary by event, venue and council conditions. Get a quote for exact pricing." },
      { id: "loadings", h2: "Are there extra charges for night, weekend or public holiday events?", type: "iconlist", bg: "bg-white",
        lead: "Yes. Event security costs more for night, weekend and public-holiday events because penalty rates apply, and there's usually a minimum call-out. Watch for permit and council conditions, equipment hire and travel charges too, so confirm exactly what's included before you lock in your booking.",
        bodyHtml: "<p>Most events run at night and on weekends, which is exactly when penalty rates bite, so the headline weekday rate won't tell the whole story. A good quote spells out the loadings and any extras upfront, and we'll always do exactly that. Here's what to check.</p>",
        items: [
          { icon: "clock", b: "Penalty rates", p: "Nights, weekends and public holidays cost more per hour." },
          { icon: "check", b: "Minimum call-out", p: "Usually around four hours, even for a short event." },
          { icon: "pin", b: "Permit & council", p: "Some events must meet council-set minimum guard numbers." },
          { icon: "grid", b: "Equipment", p: "Radios, barriers or special gear can add to the cost." },
          { icon: "bolt", b: "Travel", p: "Regional or distant venues may add a travel component." },
        ],
        bool: { q: "Is hiring event security worth it for a small event?", a: "Yes. Even a small event carries a legal duty of care, and many venues require licensed security in writing. One controller on the door handles ID checks, gatecrashers and intoxicated guests, which usually costs less than the price of one thing going wrong." } },
      { id: "quote", h2: "How do you get an accurate event security quote?", type: "steps",
        leadHtml: "Getting an accurate event quote takes four quick steps. Share the details, we assess against the ratio, you get an itemised quote, then crowd controllers deploy. Plan it on the <a href='/event-security-melbourne/'>event security in Melbourne</a> page or start with <a href='/contact/'>a free quote</a>.",
        items: [
          { icon: "eye", n: "1", t: "Share details", d: "Date, venue, attendee count and whether alcohol's served." },
          { icon: "users", n: "2", t: "Assess vs ratio", d: "We size the team against guards-per-100 and council rules." },
          { icon: "tag", n: "3", t: "Itemised quote", d: "Per-role rates, loadings and minimum shift, spelled out." },
          { icon: "shieldcheck", n: "4", t: "Deploy", d: "Approve it and licensed crowd controllers run your event." },
        ] },
    ],
    faqs: [
      { q: "How much does event security cost in Melbourne?", a: "Event security in Melbourne usually costs about $55 to $80 an hour per licensed crowd controller in 2026, before loadings. A small event often starts from around $550 to $900 for a few hours. The total rises with guest numbers, alcohol and late timing." },
      { q: "How many security guards do I need for my event?", a: "As a rough guide, plan one licensed crowd controller for every 100 guests, then adjust up for alcohol, late finishes and higher-risk crowds. A 200-person dry conference needs fewer than a 150-person party with a free bar. We'll calculate the exact number." },
      { q: "Is hiring event security worth it for a small event?", a: "Yes. Even a small event carries a legal duty of care, and many venues require licensed security in writing. One controller handles ID checks, gatecrashers and intoxicated guests, which usually costs less than the price of one thing going wrong on the night." },
      { q: "Are there extra charges for night, weekend or public holiday events?", a: "Yes. Penalty rates apply at night, on weekends and on public holidays, when most events run, so the hourly cost rises. A minimum call-out applies too, and permit, equipment or travel charges may be added. Confirm what's included before you book." },
      { q: "Is there a minimum shift length for event security?", a: "Yes. Event security has a minimum call-out, commonly around four hours, because crowd controllers need travel, briefing and setup time. We confirm the minimum in your written quote before you book, so the cost is clear from the start." },
      { q: "Can I hire event security for one day or a short-term event?", a: "Yes. We cover one-off events, single nights and short-term bookings with no lock-in, subject to the minimum call-out. Tell us the date, venue and guest count, and we'll quote the right number of licensed crowd controllers just for that event." },
      { q: "Do you provide security for Christmas and holiday-season events?", a: "Yes. The festive season is our busiest stretch, so we book up fast and prices reflect public-holiday loadings. Get in early for work functions, end-of-year parties and New Year's events to lock in licensed crowd controllers before the calendar fills." },
      { q: "What does crowd control involve at an event?", a: "Crowd control means managing how people enter, move and behave. Licensed controllers run the door, check IDs and tickets, watch capacity, support RSA, and step in to de-escalate or remove anyone causing trouble, all within Victorian law." },
    ],
  },
];

export const getCostGuide = (slug) => costguides.find(s => s.slug === slug);

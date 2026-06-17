import { site } from "../site.js";

// Brand lockup: crest shield + double-chevron + SCM monogram + 2-line descriptor
export const logoSvg = (main, accent, tag) => `
  <svg class="logo" viewBox="0 0 232 54" role="img" aria-label="${site.brand}">
    <path d="M24 3L43 9.7v14.8C43 36.4 34.3 46 24 49.6 13.7 46 5 36.4 5 24.5V9.7z" fill="${main}"/>
    <path d="M14.5 25.5l9.5-7 9.5 7M14.5 34l9.5-7 9.5 7" fill="none" stroke="${accent}" stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="58" y="36" font-family="Fraunces, Georgia, serif" font-size="30" font-weight="600" fill="${main}" letter-spacing="0">SCM</text>
    <rect x="123" y="15" width="1.6" height="24" rx="0.8" fill="${accent}"/>
    <text x="133" y="27" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="${main}" letter-spacing="1.2">SECURITY COMPANY</text>
    <text x="133" y="38.5" font-family="Inter, sans-serif" font-size="8" font-weight="600" fill="${tag}" letter-spacing="4.55">MELBOURNE</text>
  </svg>`;

// Animated brand mark (pulsing ring + scanning chevrons)
export const animMark = (shield, chev, ring) => `
  <svg class="amark" viewBox="0 0 46 50" aria-hidden="true">
    <circle class="ring" cx="23" cy="24" r="20" fill="none" stroke="${ring}" stroke-width="1"/>
    <path d="M23 2.5L41.5 9v14.5C41.5 35 33 44.5 23 48 13 44.5 4.5 35 4.5 23.5V9z" fill="${shield}"/>
    <path class="c1" d="M13 22l10-7 10 7" fill="none" stroke="${chev}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path class="c2" d="M13 30l10-7 10 7" fill="none" stroke="${chev}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path class="dia" d="M23 35.5l4.6 4.6L23 44.7l-4.6-4.6z" fill="none" stroke="${chev}" stroke-width="2.4" stroke-linejoin="round"/>
  </svg>`;

export const icons = {
  guard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5l7-3z"/><circle cx="12" cy="10" r="2.2"/><path d="M8.5 16c.6-2 2-3 3.5-3s2.9 1 3.5 3"/></svg>',
  patrol: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 13l2-5h11l3 4h2v3h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H4v-1m11 1H9"/></svg>',
  event: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="2.4"/><circle cx="16" cy="9" r="2"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14.5 19c0-2 1-3.4 2.5-3.9"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3" width="10" height="18" rx="1"/><path d="M14 9h6v12h-6M7 7h2M7 11h2M7 15h2"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  shieldcheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 17H6a2 2 0 0 0-2 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 0 1 0 5.5M17 14c2.5.5 4 2.6 4 5"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3l9 16H3z"/><path d="M12 9v5M12 17h.01"/></svg>',
  dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2v20M16 6.5C16 4.5 14.2 3.5 12 3.5S8 4.7 8 6.8s2 2.7 4 3.2 4 1.2 4 3.3-1.8 3.2-4 3.2-4-1-4-3"/></svg>',
  hardhat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 18a9 9 0 0 1 18 0M10 5.5A2.5 2.5 0 0 1 14 5.5M9 6.5V10M15 6.5V10"/><path d="M2 18h20v2H2z"/></svg>',
  dog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M10 5l-2 2H5L3 9v3l3 1 1 7h4l1-4 1 4h4l1-7 3-1V9l-2-2h-3l-2-2z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12.5h11L21 7H6"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21C5 16 3 12 3 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9 2.5C21 12 19 16 12 21z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>',
};
export const drawerIcon = { Pricing: "tag", Resources: "book", Company: "building" };

// Registry of LIVE routes. Nav/footer render a real link only when the target is built,
// otherwise plain text (no dead links). Auto-grows from services.js + posts.js.
// When you create a new static .astro page, add its path to staticPages.
import { services } from "./services.js";
import { posts } from "./posts.js";
import { locations } from "./locations.js";
import { costguides } from "./costguides.js";

const staticPages = [
  "/",
  "/contact/",
  "/security-services-melbourne/",
  "/service-areas/",
  "/licensing-compliance/",
  "/our-process/",
  "/about/",
  "/blog/",
];

export const built = new Set([
  ...staticPages,
  ...services.map(s => "/" + s.slug + "/"),
  ...locations.map(s => "/" + s.slug + "/"),
  ...costguides.map(s => "/" + s.slug + "/"),
  ...posts.map(p => "/blog/" + p.slug + "/"),
]);

export const isBuilt = (href) => built.has(href) || built.has(href + "/") || built.has(href.replace(/\/$/, "") + "/");

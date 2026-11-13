import type { BlogBlock, BlogPost } from "./types";

import { post as gtmForAnAiStartup } from "./posts/gtm-for-an-ai-startup";
import { post as isOpenRateStillARelevantColdEmailMetric } from "./posts/is-open-rate-still-a-relevant-cold-email-metric";
import { post as whatToTrackInsteadOfOpenRateInColdEmail } from "./posts/what-to-track-instead-of-open-rate-in-cold-email";
import { post as whatIsGeoAndHowIsItDifferentFromSeo } from "./posts/what-is-geo-and-how-is-it-different-from-seo";
// REGISTRY-IMPORTS (publish script inserts one import per post above this line)
// Newest-first ordering is handled below.
const registry: BlogPost[] = [
  gtmForAnAiStartup,
  isOpenRateStillARelevantColdEmailMetric,
  whatToTrackInsteadOfOpenRateInColdEmail,
  whatIsGeoAndHowIsItDifferentFromSeo,
  // REGISTRY-ENTRIES
];

export const posts: BlogPost[] = [...registry].sort((a, b) =>
  a.publishedAt < b.publishedAt ? 1 : -1,
);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelated(post: BlogPost, limit = 3): BlogPost[] {
  const explicit = (post.related ?? [])
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => Boolean(p));
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const rest = posts
    .filter((p) => p.slug !== post.slug && !explicit.includes(p))
    .map((p) => ({ p, score: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .map((x) => x.p);
  return [...explicit, ...rest].slice(0, limit);
}

function stripInline(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");
}

export function readingMinutes(post: BlogPost): number {
  const words = [post.tldr, ...post.body.flatMap(blockText)]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function blockText(b: BlogBlock): string[] {
  switch (b.type) {
    case "h2":
    case "h3":
    case "p":
    case "quote":
    case "callout":
      return [stripInline(b.text)];
    case "ul":
    case "ol":
      return b.items.map(stripInline);
    case "table":
      return [...b.headers, ...b.rows.flat()].map(stripInline);
    default:
      return [];
  }
}

export function slugify(text: string): string {
  return stripInline(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export type { BlogBlock, BlogPost };

import type { FaqItem } from "../services";

/** Inline text supports **bold**, *italic* and [link text](/path or https://url). */
export type BlogBlock =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogSource = { title: string; url: string };

export type BlogPost = {
  slug: string;
  /** On-page H1. */
  title: string;
  /** <title> tag, 50-60 chars, ends with " | Alias AI" when it fits. */
  metaTitle: string;
  /** 140-160 chars. */
  metaDescription: string;
  /** Answer-first summary shown at the top of the post (40-60 words). Also the AI-citable snippet. */
  tldr: string;
  /** ISO dates, YYYY-MM-DD. */
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; role?: string; url?: string };
  category: string;
  tags: string[];
  primaryKeyword: string;
  cover?: { src: string; alt: string };
  body: BlogBlock[];
  faqs: FaqItem[];
  /** Cited sources, rendered as a References list and into schema `citation`. */
  sources: BlogSource[];
  /** Slugs of related posts. */
  related?: string[];
};

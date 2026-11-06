import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { caseStudies } from "@/lib/caseStudies";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudies.map((c) => ({
      url: `${SITE_URL}/case-studies/${c.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...(posts.length
      ? [
          { url: `${SITE_URL}/blog`, lastModified, changeFrequency: "daily" as const, priority: 0.8 },
          ...posts.map((p) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: new Date(`${p.updatedAt ?? p.publishedAt}T00:00:00Z`),
            changeFrequency: "monthly" as const,
            priority: 0.7,
          })),
        ]
      : []),
  ];
}

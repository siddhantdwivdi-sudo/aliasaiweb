import type { CaseStudy } from "./caseStudies";
import type { FaqItem, Service } from "./services";
import { SITE_NAME, SITE_URL } from "./site";

const orgRef = { "@id": `${SITE_URL}/#organization` };

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle.replace(/\s*[·|]\s*Alias AI$/, ""),
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    serviceType: service.metaTitle.replace(/\s*[·|]\s*Alias AI$/, ""),
    provider: orgRef,
    areaServed: "Worldwide",
    audience: { "@type": "BusinessAudience", name: "B2B founders and service companies" },
  };
}

export function caseStudyJsonLd(study: CaseStudy) {
  const url = `${SITE_URL}/case-studies/${study.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.summary,
    description: study.about,
    url,
    mainEntityOfPage: url,
    articleSection: study.industry,
    author: orgRef,
    publisher: { ...orgRef, name: SITE_NAME },
  };
}

export function blogPostJsonLd(post: import("./blog/types").BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        url,
        mainEntityOfPage: url,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        inLanguage: "en",
        articleSection: post.category,
        keywords: [post.primaryKeyword, ...post.tags].join(", "),
        ...(post.cover ? { image: `${SITE_URL}${post.cover.src}` } : {}),
        author: {
          "@type": "Person",
          name: post.author.name,
          ...(post.author.url ? { url: post.author.url } : {}),
        },
        publisher: { ...orgRef, name: SITE_NAME },
        ...(post.sources.length
          ? { citation: post.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url })) }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

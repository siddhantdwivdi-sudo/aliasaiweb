import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { formatDate, posts, readingMinutes } from "@/lib/blog";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Blog | Alias AI";
const description =
  "Practical guides on B2B outbound, LinkedIn, SEO and GEO, and email, from the team that builds predictable pipelines for B2B companies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", url: "/blog", title, description, images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="bg-white px-5 py-16 text-center md:px-12 md:py-[100px]">
        <Reveal className="mx-auto max-w-[880px]">
          <span className="eyebrow mb-5">Blog</span>
          <h1 className="mb-6 font-hero text-[34px] font-bold leading-[1.1] tracking-[-0.01em] text-navy md:text-[60px]">
            Ideas for a pipeline that <span className="emph-accent">compounds</span>
          </h1>
          <p className="mx-auto max-w-[620px] text-lg leading-[1.65] text-navy/70 md:text-xl">
            Straight answers on outbound, LinkedIn, SEO and GEO for B2B teams.
          </p>
        </Reveal>
      </section>

      <section className="bg-offwhite px-5 py-16 md:px-12 md:py-[100px]">
        <RevealGroup className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-[0_8px_24px_-12px_rgba(29,50,77,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
                  {post.category}
                </span>
                <h2 className="mb-3 font-sans text-xl font-semibold leading-[1.35] tracking-[-0.01em] text-navy">
                  {post.title}
                </h2>
                <p className="mb-6 font-sans text-base leading-[1.65] text-navy/70">{post.metaDescription}</p>
                <div className="mt-auto flex items-center justify-between font-sans text-sm text-navy/70">
                  <span>
                    {formatDate(post.publishedAt)} · {readingMinutes(post)} min read
                  </span>
                  <span className="border-b-2 border-transparent font-semibold text-navy group-hover:border-lime">
                    Read →
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <FinalCTA id="contact" large headline="Want this done for you?" buttonLabel="Book a Strategy Call" />
    </>
  );
}

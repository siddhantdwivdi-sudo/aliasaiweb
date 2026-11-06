import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogBody from "@/components/blog/BlogBody";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { formatDate, getPost, getRelated, posts, readingMinutes, slugify } from "@/lib/blog";
import { blogPostJsonLd, faqJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const image = post.cover?.src ?? OG_IMAGE;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    authors: [{ name: post.author.name }],
    keywords: [post.primaryKeyword, ...post.tags],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelated(post);
  const toc = post.body.flatMap((b) => (b.type === "h2" ? [b] : []));

  return (
    <>
      <JsonLd data={blogPostJsonLd(post)} />
      {post.faqs.length > 0 && <JsonLd data={faqJsonLd(post.faqs)} />}

      <article>
        <header className="bg-white px-5 pb-10 pt-16 md:px-12 md:pb-14 md:pt-[90px]">
          <Reveal className="mx-auto max-w-[800px]">
            <nav aria-label="Breadcrumb" className="mb-6 font-sans text-sm text-navy/70">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </nav>
            <span className="eyebrow mb-4">{post.category}</span>
            <h1 className="mb-6 font-hero text-[32px] font-bold leading-[1.15] tracking-[-0.01em] text-navy md:text-[50px]">
              {post.title}
            </h1>
            <p className="font-sans text-sm text-navy/70">
              By <span className="font-semibold text-navy">{post.author.name}</span>
              {post.author.role ? `, ${post.author.role}` : ""} · Published{" "}
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <>
                  {" "}
                  · Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                </>
              )}{" "}
              · {readingMinutes(post)} min read
            </p>
          </Reveal>
        </header>

        <div className="px-5 pb-16 md:px-12 md:pb-[90px]">
          <div className="mx-auto flex max-w-[800px] flex-col gap-8">
            <aside className="rounded-2xl border-l-4 border-lime bg-offwhite p-6">
              <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
                Key takeaway
              </p>
              <p className="font-sans text-lg font-medium leading-[1.7] text-navy">{post.tldr}</p>
            </aside>

            {toc.length > 2 && (
              <nav aria-label="Table of contents" className="rounded-2xl border border-line p-6">
                <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
                  In this article
                </p>
                <ol className="list-decimal space-y-1.5 pl-5 font-sans text-base text-navy">
                  {toc.map((h) => (
                    <li key={h.text}>
                      <a href={`#${h.id ?? slugify(h.text)}`} className="hover:underline">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <BlogBody blocks={post.body} />

            {post.faqs.length > 0 && (
              <section aria-labelledby="faq-heading" className="flex flex-col gap-4">
                <h2 id="faq-heading" className="font-hero text-[26px] font-bold text-navy md:text-[34px]">
                  Frequently asked questions
                </h2>
                {post.faqs.map((f) => (
                  <details key={f.q} className="rounded-2xl border border-line bg-white p-5" open>
                    <summary className="cursor-pointer font-sans text-lg font-semibold text-navy">
                      {f.q}
                    </summary>
                    <p className="mt-3 font-sans text-base leading-[1.75] text-navy/80">{f.a}</p>
                  </details>
                ))}
              </section>
            )}

            {post.sources.length > 0 && (
              <section aria-labelledby="refs-heading">
                <h2 id="refs-heading" className="mb-3 font-sans text-lg font-semibold text-navy">
                  References
                </h2>
                <ul className="list-disc space-y-1.5 pl-6 font-sans text-sm text-navy/80">
                  {post.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener"
                        className="underline underline-offset-2 hover:text-navy"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-offwhite px-5 py-14 md:px-12 md:py-[70px]">
          <h2 className="mb-8 text-center font-hero text-[26px] font-bold text-navy md:text-[34px]">
            Keep reading
          </h2>
          <ul className="mx-auto grid max-w-[1000px] gap-5 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="block h-full rounded-2xl border border-line bg-white p-6 transition-colors hover:border-lime"
                >
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
                    {r.category}
                  </span>
                  <p className="mt-2 font-sans text-lg font-semibold leading-[1.35] text-navy">{r.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <FinalCTA id="contact" large headline="Want this done for you?" buttonLabel="Book a Strategy Call" />

      <div className="py-14 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy px-8 py-3.5 font-sans text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          ← Back to the blog
        </Link>
      </div>
    </>
  );
}

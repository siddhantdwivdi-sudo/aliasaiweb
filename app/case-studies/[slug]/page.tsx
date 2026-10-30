import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FinalCTA from "@/components/FinalCTA";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { caseStudyJsonLd } from "@/lib/schema";
import { OG_IMAGE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.summary} | Alias AI`,
    description: study.about,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: "article",
      url: `/case-studies/${study.slug}`,
      title: study.summary,
      description: study.about,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: study.summary, description: study.about, images: [OG_IMAGE] },
  };
}

const stepLabelClass =
  "font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy/70";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd data={caseStudyJsonLd(study)} />
      <section className="bg-white px-5 py-16 text-center md:px-12 md:py-[100px]">
        <Reveal className="mx-auto max-w-[960px]">
          <span className="eyebrow mb-5">{study.industry}</span>
          <h1 className="mb-6 font-hero text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy md:text-[48px]">
            {study.summary}
          </h1>
          <ul className="flex flex-wrap justify-center gap-2">
            {study.services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-line px-3 py-1 font-sans text-xs font-medium text-navy/80"
              >
                {service}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="dark-band bg-ink px-5 py-14 md:px-12 md:py-[70px]">
        <RevealGroup className="mx-auto flex max-w-[1000px] flex-wrap justify-center gap-x-16 gap-y-10 text-center">
          {study.metrics.map((metric) => (
            <RevealItem key={metric.label}>
              <div className="font-hero text-[40px] font-bold leading-none lining-nums tabular-nums text-lime md:text-[56px]">
                {metric.value}
              </div>
              <div className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                {metric.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-[90px]">
        <SectionHeading>
          About the <span className="emph-accent">client</span>
        </SectionHeading>
        <Reveal className="mx-auto max-w-[800px]">
          <p className="text-lg leading-[1.8] text-navy">{study.about}</p>
        </Reveal>
      </section>

      <section className="bg-offwhite px-5 py-16 md:px-12 md:py-[90px]">
        <SectionHeading>
          The <span className="emph-accent">challenges</span>
        </SectionHeading>
        <RevealGroup className="mx-auto grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-2">
          {study.challenges.map((challenge) => (
            <RevealItem key={challenge.title} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <h3 className="mb-2.5 font-sans text-xl font-semibold leading-[1.35] tracking-[-0.01em] text-navy">
                  {challenge.title}
                </h3>
                <p className="font-sans text-base leading-[1.7] text-navy/70">{challenge.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-[90px]">
        <SectionHeading>
          What we <span className="emph-accent">did</span>
        </SectionHeading>
        <Reveal className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="text-lg leading-[1.7] text-navy/70">{study.solutionsIntro}</p>
        </Reveal>

        <ol className="mx-auto flex max-w-[900px] flex-col gap-6">
          {study.solutions.map((solution, i) => (
            <li key={solution.title}>
              <Reveal>
                <div className="rounded-2xl border border-line bg-white p-7 md:p-9">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lime font-sans text-[15px] font-bold tabular-nums text-ink">
                      {i + 1}
                    </span>
                    <h3 className="font-sans text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-navy md:text-2xl">
                      {solution.title}
                    </h3>
                  </div>
                  <dl className="grid gap-5">
                    <div>
                      <dt className={stepLabelClass}>Strategy</dt>
                      <dd className="mt-1.5 font-sans text-base leading-[1.7] text-navy">
                        {solution.strategy}
                      </dd>
                    </div>
                    <div>
                      <dt className={stepLabelClass}>Execution</dt>
                      <dd className="mt-1.5 font-sans text-base leading-[1.7] text-navy/80">
                        {solution.execution}
                      </dd>
                    </div>
                    <div>
                      <dt className={stepLabelClass}>Outcome</dt>
                      <dd className="mt-1.5 font-sans text-base leading-[1.7] text-navy/80">
                        {solution.outcome}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="dark-band bg-ink px-5 py-16 md:px-12 md:py-[90px]">
        <SectionHeading light>
          The <span className="emph-accent">results</span>
        </SectionHeading>
        <RevealGroup className="mx-auto flex max-w-[800px] flex-col gap-4">
          {study.results.map((result) => (
            <RevealItem key={result} className="flex items-start gap-3.5">
              <div
                aria-hidden="true"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-lime text-[13px] font-extrabold text-ink"
              >
                ✓
              </div>
              <p className="font-sans text-lg font-medium leading-[1.6] text-white">{result}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        {study.resultsNote && (
          <Reveal className="mx-auto mt-10 max-w-[800px]">
            <p className="font-sans text-base leading-[1.7] text-white/70">{study.resultsNote}</p>
          </Reveal>
        )}
      </section>

      <FinalCTA
        id="contact"
        large
        headline="Want results like these?"
        buttonLabel="Book a Strategy Call"
      />

      <div className="py-14 text-center">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy px-8 py-3.5 font-sans text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          ← Back to case studies
        </Link>
      </div>
    </>
  );
}

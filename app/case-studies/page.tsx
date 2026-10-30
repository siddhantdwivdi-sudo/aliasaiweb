import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { caseStudies } from "@/lib/caseStudies";
import { OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies | Alias AI",
  description:
    "See how Alias AI builds predictable B2B pipelines through outbound, LinkedIn, SEO and GEO, and newsletters.",
  alternates: { canonical: "/case-studies" },
  openGraph: { type: "website", url: "/case-studies", title: "Case Studies | Alias AI", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white px-5 py-16 text-center md:px-12 md:py-[100px]">
        <Reveal className="mx-auto max-w-[880px]">
          <span className="eyebrow mb-5">Case Studies</span>
          <h1 className="mb-6 font-hero text-[34px] font-bold leading-[1.1] tracking-[-0.01em] text-navy md:text-[60px]">
            Proof the pipeline <span className="emph-accent">works</span>
          </h1>
          <p className="mx-auto max-w-[620px] text-lg leading-[1.65] text-navy/70 md:text-xl">
            How we help B2B businesses reach the right buyers and turn conversations into
            meetings.
          </p>
        </Reveal>
      </section>

      <section className="bg-offwhite px-5 py-16 md:px-12 md:py-[100px]">
        <RevealGroup className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <RevealItem key={study.slug} className="h-full">
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-[0_8px_24px_-12px_rgba(29,50,77,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
                    {study.industry}
                  </span>
                  {study.isSample && (
                    <span className="rounded-full bg-offwhite px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-navy/70 ring-1 ring-line">
                      Sample
                    </span>
                  )}
                </div>

                <h2 className="mb-4 font-sans text-xl font-semibold leading-[1.35] tracking-[-0.01em] text-navy">
                  {study.summary}
                </h2>

                <ul className="mb-6 flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-line px-3 py-1 font-sans text-xs font-medium text-navy/80"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <dl className="mb-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="font-hero text-[28px] font-bold leading-none lining-nums tabular-nums text-navy">
                        {metric.value}
                      </dd>
                      <dt className="mt-1.5 font-sans text-xs font-medium text-navy/70">
                        {metric.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                <span className="mt-auto w-fit border-b-2 border-transparent font-sans text-[15px] font-semibold text-navy transition-colors group-hover:border-lime">
                  Read case study →
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <FinalCTA
        id="contact"
        large
        headline="Want results like these?"
        buttonLabel="Book a Strategy Call"
      />
    </>
  );
}

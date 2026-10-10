import Link from "next/link";
import type { Service } from "@/lib/services";
import CtaBanner from "./CtaBanner";
import FAQ from "./FAQ";
import OpenModalButton from "./OpenModalButton";
import ProcessSteps from "./ProcessSteps";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <div className="dark-band ambient-glow overflow-hidden bg-ink px-5 py-16 text-center md:px-12 md:py-[100px] md:pb-[90px]">
        <Reveal>
          <h1 className="mx-auto mb-6 max-w-[880px] font-hero text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] text-white md:text-[56px]">
            {service.heroHeading.map((part, i) =>
              "br" in part ? (
                <br key={i} />
              ) : part.italic ? (
                <em key={i} className="emph-accent mr-[0.15em]">
                  {part.text}
                </em>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </h1>
          <p className="mx-auto mb-10 max-w-[620px] text-lg font-medium leading-[1.65] text-white/72 md:text-xl">
            {service.heroSub}
          </p>
          <OpenModalButton className="inline-flex min-h-12 items-center gap-1.5 rounded-full bg-lime px-7 py-3.5 font-sans text-[15px] font-semibold text-ink transition-opacity hover:opacity-80 md:px-9">
            Build Your Alias →
          </OpenModalButton>
        </Reveal>
      </div>

      <section id="overview" className="scroll-mt-20 px-5 py-16 md:px-12 md:py-[100px]">
        <SectionHeading>
          <span className="emph-accent">Overview</span>
        </SectionHeading>
        <RevealGroup className="mx-auto max-w-[800px] space-y-6">
          {service.overview.map((paragraph) => (
            <RevealItem key={paragraph}>
              <p className="text-lg leading-[1.8] text-navy">{paragraph}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="included"
        className="scroll-mt-20 bg-offwhite px-5 py-16 md:px-12 md:py-[100px]"
      >
        <SectionHeading>
          What’s <span className="emph-accent">included</span>
        </SectionHeading>
        <RevealGroup className="mx-auto grid max-w-[920px] grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-x-11 md:gap-y-[22px]">
          {service.included.map((item) => (
            <RevealItem key={item} className="flex items-start gap-3.5">
              <div
                aria-hidden="true"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-lime text-[13px] font-extrabold text-ink"
              >
                ✓
              </div>
              <div className="text-base font-medium leading-[1.6] text-navy">
                {item.includes(": ") ? (
                  <>
                    <strong className="font-bold">{item.slice(0, item.indexOf(": ") + 1)}</strong>
                    {item.slice(item.indexOf(": ") + 1)}
                  </>
                ) : (
                  item
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <ProcessSteps steps={service.process} />

      <section className="px-5 py-16 text-center md:px-12 md:py-[90px]">
        <SectionHeading>
          Who this is <span className="emph-accent">for</span>
        </SectionHeading>
        <Reveal className="mx-auto max-w-[760px]">
          <p className="font-sans text-xl font-semibold leading-[1.55] text-navy md:text-[26px]">
            {service.whoFor}
          </p>
        </Reveal>
      </section>

      <FAQ items={service.faqs} id="faq" />

      <CtaBanner headline={service.cta} />

      <div className="py-14 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full bg-lime px-9 py-3.5 font-sans text-[15px] font-semibold text-ink no-underline transition-opacity hover:opacity-80"
        >
          ← Back to home
        </Link>
      </div>
    </>
  );
}

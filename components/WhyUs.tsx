import { ArrowUpRight } from "lucide-react";
import { whyUsCards } from "@/lib/home-content";
import { RevealGroup, RevealItem } from "./Reveal";

function ProblemCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="group relative h-full transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Soft lime glow behind the card. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-3xl bg-lime/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-6 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_8px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-300 group-hover:border-lime md:p-7">
        <h3 className="mb-2.5 font-hero text-[23px] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
          {title}
        </h3>
        <p className="font-sans text-[17px] leading-[1.6] text-white/65">
          {body}
        </p>

        <ArrowUpRight
          aria-hidden="true"
          size={20}
          className="absolute bottom-5 right-5 translate-y-1 text-lime opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
        />
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why" className="dark-band scroll-mt-20 bg-ink">
      <RevealGroup className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-5 py-16 sm:grid-cols-2 md:px-10 md:py-28 lg:grid-cols-3">
        {/* First slot of the 3x2 grid: the heading and CTA, not a card. */}
        <RevealItem className="mb-6 flex flex-col items-start justify-center sm:col-span-2 lg:col-span-1 lg:mb-0 lg:pr-6">
          <h2 className="font-hero text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-white md:text-[41px]">
            What’s holding you{" "}
            <span className="whitespace-nowrap">
              <span className="emph-accent">back</span>?
            </span>
          </h2>
          <span className="mt-7 hidden h-0.5 w-10 bg-lime lg:block" />
          <a
            href="#contact"
            className="mt-6 inline-block rounded-full bg-lime px-[26px] py-[13px] font-sans text-[15px] font-semibold text-ink transition-transform hover:scale-105 md:px-[34px] md:py-3.5"
          >
            Let’s Build Your Pipeline
          </a>
        </RevealItem>

        {whyUsCards.map((card) => (
          <RevealItem key={card.title}>
            <ProblemCard title={card.title} body={card.body} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

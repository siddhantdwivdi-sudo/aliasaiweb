import Link from "next/link";
import { serviceCards } from "@/lib/home-content";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-navy/8 bg-white px-5 py-10 md:px-12 md:py-[100px]"
    >
      <SectionHeading>
        What we <span className="emph-accent">do</span>
      </SectionHeading>

      <RevealGroup className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-7">
        {serviceCards.map((card) => (
          <RevealItem key={card.href + card.title[0]}>
            <Link
              href={card.href}
              className="group relative block h-[280px] text-inherit no-underline [perspective:1200px] min-[391px]:h-[300px] md:h-[315px]"
            >
              <div className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0.2,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-ink shadow-[0_6px_18px_rgba(0,0,0,0.10)] [backface-visibility:hidden]">
                  <div className="px-4 text-center font-hero text-[22px] font-bold text-white md:text-2xl">
                    {card.title.map((line, n) => (
                      <span key={line}>
                        {n > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-[18px] right-5 text-[34px] font-black leading-none text-lime">
                    ↗
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-[3px] border-lime bg-white p-7 shadow-[0_6px_18px_rgba(0,0,0,0.10)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="text-center text-sm font-semibold leading-[1.55] text-navy md:text-[19px] md:leading-normal">
                    {card.body}
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

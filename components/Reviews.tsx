import Link from "next/link";
import { reviews, stats } from "@/lib/home-content";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

function ReviewCard({ quote, name, role }: { quote: string; name: string; role?: string }) {
  return (
    <figure className="flex w-[280px] shrink-0 flex-col rounded-[20px] border-2 border-lime bg-white px-[22px] py-[26px] md:w-[360px] md:px-[30px] md:py-8">
      <blockquote className="mb-5 text-base italic leading-[1.6] text-navy/80">{quote}</blockquote>
      <figcaption className="mt-auto">
        <div className="font-sans text-xl font-bold text-navy">{name}</div>
        {role && (
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">
            {role}
          </div>
        )}
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 overflow-hidden bg-offwhite py-16 md:py-[90px]"
    >
      <Reveal>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
          <div className="flex w-max animate-reviews gap-6 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {reviews.map((review, i) => (
              <ReviewCard key={`a-${i}`} {...review} />
            ))}
            {/* Duplicate set for a seamless loop; hidden when the marquee is off. */}
            {reviews.map((review, i) => (
              <div key={`b-${i}`} aria-hidden="true" className="flex motion-reduce:hidden">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-12 flex flex-wrap justify-center gap-10 px-5 md:mt-[72px] md:gap-20">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </Reveal>

      <Reveal className="mt-12 flex justify-center px-5 md:mt-16">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy px-8 py-3.5 font-sans text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Case Studies →
        </Link>
      </Reveal>
    </section>
  );
}

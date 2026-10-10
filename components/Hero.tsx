import Link from "next/link";
import { marqueeItems } from "@/lib/home-content";

const rotatingWords = ["Predictable.", "Qualified.", "Consistent.", "Predictable."];

const marqueeItemClass =
  "mx-1.5 shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-sans text-xl font-semibold leading-none text-ink transition-colors duration-200 hover:bg-lime md:mx-4 md:px-6 md:text-[32px]";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative scroll-mt-20 dark-band overflow-hidden bg-ink text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(183,255,0,0.2),transparent_70%)]"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-[900px] px-5 pt-8 md:px-12 md:pt-24">
          <div className="eyebrow mb-6 text-[10px] md:mb-8 md:text-[13px]">
            <span className="pulse-dot" aria-hidden="true" />
            Lead Generation System for B2B Businesses
          </div>

          <h1 className="mb-6 flex flex-col items-start text-left font-hero text-[30px] font-medium leading-[1.08] tracking-[-0.02em] text-white lining-nums min-[391px]:text-[36px] min-[560px]:text-[50px] md:items-center md:text-center md:text-[61px] md:leading-[1.08] lg:text-[75px]">
            <span className="block md:whitespace-nowrap">
              Build a pipeline that’s
            </span>
            <span className="block h-[1.3em] w-full overflow-hidden">
              <span className="flex animate-hero-word flex-col will-change-transform motion-reduce:animate-none">
                {rotatingWords.map((word, i) => (
                  <span
                    key={i}
                    aria-hidden={i === rotatingWords.length - 1 || undefined}
                    className="flex h-[1.3em] shrink-0 items-center justify-start md:justify-center"
                  >
                    <span className="emph-accent">{word}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-full text-[15px] font-semibold leading-[1.65] text-white/75 md:max-w-[820px] md:text-2xl">
            Targeted outbound, authority-building content and search,{" "}
            <br className="hidden md:block" />
            working together to start the right conversations.
          </p>
        </div>

        <div className="px-5 pb-12 pt-2 md:px-12 md:pb-20">
          <a
            href="#contact"
            className="inline-flex min-h-[58px] items-center gap-1.5 rounded-full bg-lime px-[42px] py-[11px] font-sans text-[24px] font-semibold text-ink transition-opacity hover:opacity-80 md:px-[54px]"
          >
            Build Your Pipeline
          </a>
        </div>

        <div className="w-full overflow-hidden bg-white py-4 md:py-5">
          <div className="flex w-max animate-marquee items-center [animation-duration:22s] hover:[animation-play-state:paused] md:[animation-duration:28s] motion-reduce:animate-none">
            {[0, 1].map((set) =>
              marqueeItems.map((item) => (
                <Link
                  key={`${set}-${item.label}`}
                  href={item.href}
                  className={marqueeItemClass}
                  aria-hidden={set === 1 || undefined}
                  tabIndex={set === 1 ? -1 : undefined}
                >
                  {item.label}
                </Link>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

type ProcessStepsProps = {
  /** One entry per step; shown numbered 01, 02, ... */
  steps: string[];
  id?: string;
};

/** Numbered process steps on a dark band, joined by thin connectors. */
export default function ProcessSteps({ steps, id = "process" }: ProcessStepsProps) {
  return (
    <section id={id} className="dark-band scroll-mt-20 bg-ink px-5 py-16 md:px-12 md:py-[100px]">
      <SectionHeading light>
        Our <span className="emph-accent">process</span>
      </SectionHeading>

      <RevealGroup
        className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))] md:gap-0"
        // Number of columns follows the number of steps.
        style={{ "--cols": steps.length } as React.CSSProperties}
      >
        {steps.map((body, i) => (
          <RevealItem key={body} className="relative md:pr-10">
            <span className="font-sans text-sm font-bold tabular-nums text-lime">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-3.5 text-base leading-[1.75] text-white/70 md:text-lg md:leading-[1.85]">
              {body}
            </p>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute right-0 top-2.5 hidden h-px w-6 bg-white/20 md:block"
              />
            )}
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

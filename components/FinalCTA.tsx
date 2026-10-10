"use client";

import { useContactModal } from "./ContactModalContext";
import Reveal from "./Reveal";

type FinalCTAProps = {
  headline: React.ReactNode;
  body?: string;
  /** Optional element shown beside the text (e.g. the founder photo). */
  aside?: React.ReactNode;
  id?: string;
  /** Bigger headline and wider body, for the standalone contact section. */
  large?: boolean;
  /** Small label shown above the headline. */
  eyebrow?: string;
  /** Button text; defaults to "Let’s talk →". */
  buttonLabel?: string;
  /** When set, the button is a link opening this URL in a new tab instead of the contact modal. */
  buttonHref?: string;
};

/** Closing contact band: dark, ambient glow, opens the contact modal. */
export default function FinalCTA({
  headline,
  body,
  aside,
  id = "contact",
  large,
  eyebrow,
  buttonLabel = "Let’s talk →",
  buttonHref,
}: FinalCTAProps) {
  const { openModal } = useContactModal();

  return (
    <section
      id={id}
      className="dark-band ambient-glow relative w-full scroll-mt-20 overflow-hidden bg-ink px-5 py-16 md:px-12 md:py-[120px]"
    >
      <Reveal
        className={`relative z-10 mx-auto flex flex-col items-center justify-center text-center ${aside ? "max-w-[880px] gap-9 md:flex-row md:gap-14 md:text-left" : "max-w-[800px]"}`}
      >
        <div
          className={
            aside ? "w-full flex-1 md:min-w-[280px] md:max-w-[420px]" : ""
          }
        >
          {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
          <h2
            className={`font-hero font-bold leading-[1.15] tracking-[-0.01em] text-white ${aside ? "mb-6 text-[30px] min-[391px]:text-[34px] md:text-[56px]" : large ? "mb-8 text-[36px] md:text-[56px]" : "mb-6 text-[30px] md:text-5xl"}`}
          >
            {headline}
          </h2>
          {body && (
            <p
              className={`mb-8 max-w-full text-[15px] font-medium leading-[1.6] text-white/65 md:text-[17px] ${large ? "mx-auto md:max-w-[640px] md:text-lg" : "mx-auto md:mx-0 md:max-w-[360px]"}`}
            >
              {body}
            </p>
          )}
          {buttonHref ? (
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer rounded-full bg-lime px-9 py-4 font-sans text-[15px] font-semibold text-ink transition-transform hover:scale-105"
            >
              {buttonLabel}
            </a>
          ) : (
            <button
              type="button"
              onClick={openModal}
              className="cursor-pointer rounded-full bg-lime px-9 py-4 font-sans text-[15px] font-semibold text-ink transition-transform hover:scale-105"
            >
              {buttonLabel}
            </button>
          )}
        </div>
        {aside}
      </Reveal>
    </section>
  );
}

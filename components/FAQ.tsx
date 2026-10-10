"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FAQProps = {
  items: FaqItem[];
  id?: string;
  className?: string;
};

export default function FAQ({ items, id = "faq", className = "" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id={id}
      className={`scroll-mt-20 bg-white px-5 py-10 md:px-12 md:py-[100px] ${className}`}
    >
      <SectionHeading>FAQ</SectionHeading>

      <Reveal className="mx-auto max-w-[760px]">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q} className="border-b-[1.5px] border-line">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 text-left font-sans text-base font-semibold text-navy md:px-2 md:py-7 md:text-[21px]"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`flex size-[22px] shrink-0 items-center justify-center rounded-full border-2 border-lime text-sm text-navy transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-400 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-2 pb-6 text-sm leading-[1.65] text-navy/80 md:pb-7 md:text-base md:leading-[1.7]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

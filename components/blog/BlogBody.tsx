import Image from "next/image";
import { slugify } from "@/lib/blog";
import type { BlogBlock } from "@/lib/blog/types";
import Inline from "./Inline";

const pClass = "font-sans text-[18px] leading-[1.8] text-navy";

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={b.id ?? slugify(b.text)}
                className="mt-6 scroll-mt-28 font-hero text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-navy md:text-[34px]"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-2 font-sans text-xl font-semibold leading-[1.35] text-navy md:text-2xl">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className={pClass}>
                <Inline text={b.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className={`${pClass} list-disc space-y-2 pl-6 marker:text-lime`}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className={`${pClass} list-decimal space-y-2 pl-6 marker:font-semibold`}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-lime pl-5 font-sans text-xl italic leading-[1.6] text-navy"
              >
                <Inline text={b.text} />
                {b.cite && <footer className="mt-2 text-sm not-italic text-navy/70">{b.cite}</footer>}
              </blockquote>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-2xl border border-line bg-offwhite p-6">
                {b.title && (
                  <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-navy/70">
                    {b.title}
                  </p>
                )}
                <p className="font-sans text-lg leading-[1.7] text-navy">
                  <Inline text={b.text} />
                </p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[520px] border-collapse text-left font-sans text-base text-navy">
                  <thead className="bg-offwhite">
                    <tr>
                      {b.headers.map((h) => (
                        <th key={h} className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r} className="border-t border-line">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-3 align-top">
                            <Inline text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "image":
            return (
              <figure key={i}>
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={1200}
                  height={630}
                  className="h-auto w-full rounded-2xl border border-line"
                />
                {b.caption && (
                  <figcaption className="mt-2 text-center text-sm text-navy/70">{b.caption}</figcaption>
                )}
              </figure>
            );
        }
      })}
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
const linkClass =
  "font-semibold text-navy underline decoration-lime decoration-2 underline-offset-4 hover:bg-lime/30";

/** Renders **bold**, *italic* and [text](url) without any markdown dependency. */
export default function Inline({ text }: { text: string }): ReactNode {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener" className={linkClass}>
          {label}
        </a>
      );
    }
    return part;
  });
}

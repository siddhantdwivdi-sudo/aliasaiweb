"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ROTATE_WORDS = ["Meetings", "Clients", "Revenue"];

const navLinks = [
  { label: "Challenges", href: "/#why" },
  { label: "Solutions", href: "/#services" },
  { label: "Process", href: "/#what-you-get" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

const linkClass =
  "mb-3 w-fit text-sm font-semibold text-white transition-colors hover:text-lime md:text-[15px]";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 6l10 7 10-7" />
  </svg>
);

export default function Footer() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATE_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="dark-band bg-ink px-5 pb-4 pt-7 md:px-10 md:pb-6 md:pt-12">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-7 min-[901px]:flex-row min-[901px]:flex-wrap min-[901px]:gap-10">
        <div className="flex flex-col items-start min-[901px]:flex-[1_1_300px]">
          <Image
            src="/logo.png"
            alt="Alias AI"
            width={108}
            height={72}
            className="-mb-1.5 h-10 w-auto brightness-0 invert md:-mb-2.5 md:h-[72px]"
          />
          <p className="ml-2 mt-1 flex items-baseline gap-1.5 whitespace-nowrap font-hero text-base font-bold text-white md:ml-[15px] md:gap-2 md:text-[22px]">
            Turn conversations into{" "}
            <span
              key={wordIndex}
              className="inline-block min-w-[72px] animate-word-fade font-hero text-base font-bold text-lime motion-reduce:animate-none md:min-w-[120px] md:text-2xl"
            >
              {ROTATE_WORDS[wordIndex]}
            </span>
          </p>
        </div>

        <div className="flex gap-8 min-[901px]:gap-[60px]">
          <div className="flex flex-col">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
              Connect
            </p>
            <a
              href="https://www.linkedin.com/in/ankita-dwivedi30/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} inline-flex items-center gap-2`}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="mailto:ankita@aliasai.co"
              className={`${linkClass} inline-flex items-center gap-2`}
            >
              <EnvelopeIcon />
              ankita@aliasai.co
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1500px] border-t border-white/8" />

      <div className="mx-auto mt-4 max-w-[1500px] text-xs text-white/40 md:text-[13px]">
        <span>© 2025 Alias AI</span>
      </div>
    </footer>
  );
}

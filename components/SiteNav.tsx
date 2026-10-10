"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContactModal } from "./ContactModalContext";

const homeLinks = [
  { label: "Challenges", href: "#why" },
  { label: "Solutions", href: "#services", dropdown: true },
  { label: "Process", href: "#what-you-get" },
  { label: "Case Studies", href: "/case-studies" },
];

const serviceLinks = [
  { label: "Overview", href: "#overview" },
  { label: "What’s Included", href: "#included" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const solutionLinks = [
  { label: "LinkedIn Personal Branding", href: "/services/linkedin" },
  { label: "SEO & GEO", href: "/services/seo-geo" },
  { label: "Email Marketing & Outbound", href: "/services/email-outbound" },
];

const navLinkClass =
  "inline-block font-sans text-[19.5px] font-semibold text-navy transition-all duration-200 hover:scale-110 hover:font-bold";

export default function SiteNav() {
  const pathname = usePathname();
  const { openModal } = useContactModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const onServicePage = pathname.startsWith("/services/");
  // Home-page anchors need a "/" prefix when the nav is shown on another page (e.g. /case-studies).
  const links = onServicePage
    ? serviceLinks
    : homeLinks.map((link) =>
        pathname !== "/" && link.href.startsWith("#") ? { ...link, href: `/${link.href}` } : link,
      );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-100 border-b border-navy/12 bg-white/90 backdrop-blur-md">
      <nav className="flex items-center justify-between px-5 py-2.5 md:px-12 md:py-3.5">
        <Link href="/" aria-label="Alias AI home" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Alias AI Logo"
            width={120}
            height={80}
            priority
            className="h-11 w-auto md:h-20"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) =>
            "dropdown" in link && link.dropdown ? (
              <div key={link.label} className="group relative">
                <a href={link.href} className={navLinkClass}>
                  {link.label}
                </a>
                <div className="pointer-events-none absolute left-1/2 top-full z-200 min-w-[220px] -translate-x-1/2 -translate-y-1 pt-3 opacity-0 transition-all duration-200 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl border-[1.5px] border-navy/12 bg-white py-2 shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
                    {solutionLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block whitespace-nowrap px-5 py-2.5 text-[17px] font-medium text-navy transition-colors hover:bg-[#f5f5f5] hover:font-semibold hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ),
          )}
          <button
            type="button"
            onClick={openModal}
            className="cursor-pointer rounded-full bg-lime px-7 py-[11px] font-sans text-[17px] font-semibold text-ink transition-transform hover:scale-105"
          >
            Build Your Alias
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="flex cursor-pointer flex-col gap-[5px] p-1 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-navy transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-navy transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-navy transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col border-t border-navy/12 bg-white/97 px-6 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-navy/8 py-3 text-base font-semibold text-navy"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              closeMenu();
              openModal();
            }}
            className="cursor-pointer py-3 text-left text-base font-bold text-navy"
          >
            Build Your Alias
          </button>
        </div>
      )}
    </header>
  );
}

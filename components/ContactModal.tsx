"use client";

import { useEffect, useRef, useState } from "react";
import { useContactModal } from "./ContactModalContext";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-line bg-offwhite px-3.5 py-3 text-sm text-navy outline-none transition-[border-color,box-shadow] placeholder:text-navy/30 focus:border-navy focus:ring-2 focus:ring-lime/60";
const labelClass = "flex flex-col gap-2 text-[13px] font-medium text-navy/70";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage("The form isn’t configured yet. Please email us instead.");
      return;
    }

    const data = new FormData(form);
    data.append("access_key", accessKey);
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result?.success !== false) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  function handleClose() {
    closeModal();
    // Reset status after the slide-out finishes so a reopened panel doesn't flash the old state.
    window.setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 450);
  }

  return (
    <>
      {/* data-lenis-prevent keeps smooth-scroll from hijacking wheel/touch over the overlay */}
      <div
        data-lenis-prevent
        className={`fixed inset-0 z-[200] bg-ink/60 transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        inert={!isOpen}
        className={`fixed right-0 top-0 z-[201] h-screen w-[min(440px,100%)] overflow-y-auto border-l border-navy/8 bg-white px-8 py-12 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-6 top-6 flex size-9 cursor-pointer items-center justify-center rounded-full border border-navy/15 text-navy/70 transition-colors hover:border-navy/40 hover:text-navy"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <h2
          id="contact-modal-title"
          className="mt-5 font-hero text-[28px] font-bold leading-[1.15] tracking-[-0.01em] text-navy"
        >
          Let’s build something <span className="emph-accent">memorable</span>.
        </h2>
        <p className="mt-3 text-sm leading-[1.6] text-navy/55">
          Tell us about yourself. If it’s a fit, we’ll reach out within 24 hours to get you
          started.
        </p>

        {status === "success" ? (
          <p role="status" className="mt-10 text-lg font-semibold text-navy">
            Application received. We will be in touch within 24 hours.
          </p>
        ) : (
          <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2">
              <label className={labelClass}>
                First name
                <input type="text" name="first_name" placeholder="Alex" required className={fieldClass} />
              </label>
              <label className={labelClass}>
                Last name
                <input type="text" name="last_name" placeholder="Johnson" required className={fieldClass} />
              </label>
            </div>
            <label className={labelClass}>
              Email address
              <input
                type="email"
                name="email"
                placeholder="alex@company.com"
                required
                className={fieldClass}
              />
            </label>
            <label className={labelClass}>
              LinkedIn profile URL
              <input
                type="text"
                name="linkedin"
                placeholder="linkedin.com/in/yourprofile"
                required
                className={fieldClass}
              />
            </label>
            <label className={labelClass}>
              Tell us about your business
              <textarea
                name="business_info"
                rows={4}
                placeholder="Share what you do, who you serve, and what you're looking to achieve..."
                className={`${fieldClass} min-h-[90px] resize-y`}
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 cursor-pointer rounded-full bg-lime p-3.5 font-sans text-[15px] font-semibold text-ink transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Submit application ↗"}
            </button>

            {status === "error" && (
              <p role="alert" className="-mt-2 text-[13px] text-red-600">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </>
  );
}

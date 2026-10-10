import FinalCTA from "./FinalCTA";

export default function ContactSection() {
  return (
    <FinalCTA
      id="contact"
      large
      eyebrow="Get Started"
      headline={
        <>
          Ready to build a <span className="emph-accent">predictable</span> pipeline?
        </>
      }
      body="Tell us about your business, your buyers and where growth is stuck. We’ll show you how outbound, content and search can work together to start the right conversations."
      buttonLabel="Book a Strategy Call →"
      buttonHref="https://calendly.com/ankitadwivedi/1-1-consultation"
    />
  );
}

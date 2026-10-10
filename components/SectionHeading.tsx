import Reveal from "./Reveal";

type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2";
  /** White text, for use on dark sections (wrap the section in `dark-band`). */
  light?: boolean;
  className?: string;
};

/**
 * Centered section title. Wrap one word in <span className="emph-accent"> for
 * the bold Raleway + lime swash treatment.
 */
export default function SectionHeading({
  children,
  as: Tag = "h2",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <Tag
        className={`mb-8 text-center font-hero text-[30px] font-bold leading-[1.15] tracking-[-0.01em] md:mb-14 md:text-[52px] ${light ? "text-white" : "text-navy"} ${className}`}
      >
        {children}
      </Tag>
    </Reveal>
  );
}

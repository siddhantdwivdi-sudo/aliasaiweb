"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/** Fades a single block up when it scrolls into view. */
export default function Reveal({ children, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its <RevealItem> children. */
export function RevealGroup({ children, className, style }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      variants={stagger}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: RevealProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

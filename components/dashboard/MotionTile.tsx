// Client Component: shared motion wrapper for all interactive tiles.
"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface MotionTileProps {
  children: ReactNode;
  className?: string;
  order?: number;
  ariaLabel?: string;
}

interface EntryContext {
  order: number;
  reduce: boolean;
}

const entryVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.98
  },
  visible: (context: EntryContext) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 380,
      damping: 30,
      delay: context.reduce ? 0 : Math.min(context.order * 0.04, 0.2)
    }
  })
};

export default function MotionTile({
  children,
  className,
  order = 0,
  ariaLabel
}: MotionTileProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={`transform-gpu rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[#0d0f12] p-7 shadow-soft backdrop-blur-xl ${
        className ?? ""
      }`}
      custom={{ order, reduce: prefersReducedMotion }}
      variants={entryVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 28 }
            }
      }
      aria-label={ariaLabel}
    >
      {children}
    </motion.article>
  );
}

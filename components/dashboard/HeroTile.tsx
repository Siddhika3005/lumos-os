// Client Component: animated hero content with looping motion accents.
"use client";

import { motion, useReducedMotion } from "framer-motion";
import MotionTile from "@/components/dashboard/MotionTile";

interface HeroTileProps {
  userName: string;
  activeCourses: number;
  order?: number;
}

export default function HeroTile({ userName, activeCourses, order = 0 }: HeroTileProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionTile
      order={order}
      ariaLabel="Welcome back"
      className="relative col-span-1 overflow-hidden md:col-span-2"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/30 via-cyan-500/15 to-transparent blur-2xl"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/25 via-teal-300/10 to-transparent blur-3xl"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.32, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Welcome back, {userName}
          </h1>
          <p className="mt-3 max-w-md text-sm text-white/70">
            How are you doing right now? Here's your learning snapshot.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <motion.div
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.03, 1] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25, repeat: Infinity, repeatType: "mirror" }}
          >
            <span aria-hidden="true">🔥</span>
            <span>14 Day Streak</span>
          </motion.div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
            <span aria-hidden="true">⚡</span>
            <span className="text-white/70">Momentum</span>
            <span className="font-semibold">88/100</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
            <span aria-hidden="true">📚</span>
            <span className="font-semibold">{activeCourses}</span>
            <span className="text-white/70">Active Courses</span>
          </div>
        </div>
      </div>
    </MotionTile>
  );
}

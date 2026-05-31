// Client Component: motion tile wrapper requires client rendering.
"use client";
import MotionTile from "@/components/dashboard/MotionTile";
import type { Course } from "@/types/course";

interface LearningInsightsTileProps {
  courses: Course[];
  order?: number;
}

export default function LearningInsightsTile({
  courses,
  order = 0
}: LearningInsightsTileProps) {
  const activeCourse = courses
    .filter((course) => course.progress < 100)
    .sort((a, b) => b.progress - a.progress)[0];

  const message = activeCourse
    ? `Continue ${activeCourse.title}. You are only ${
        100 - activeCourse.progress
      }% away from mastery.`
    : "All courses complete. Time to start something bold.";

  return (
    <MotionTile
      order={order}
      ariaLabel="Learning insights"
      className="flex h-full flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200">
          <span aria-hidden="true">✦</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          AI Insight
        </span>
      </div>
      <div>
        <h3 className="mt-4 text-lg font-semibold text-white">
          Accelerate Mastery
        </h3>
        <p className="mt-3 text-sm text-white/60">{message}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200">
        Resume session
        <span aria-hidden="true">→</span>
      </div>
    </MotionTile>
  );
}

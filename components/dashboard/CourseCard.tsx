// Client Component: motion-rich course tile with progress animation on view.
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Code, Cpu, Layers } from "lucide-react";
import MotionTile from "@/components/dashboard/MotionTile";
import type { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  order?: number;
}

type IconKey = "book-open" | "code" | "cpu" | "layers";

const iconMap: Record<IconKey, typeof BookOpen> = {
  "book-open": BookOpen,
  code: Code,
  cpu: Cpu,
  layers: Layers
};

export default function CourseCard({ course, order = 0 }: CourseCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const iconKey = (course.icon_name as IconKey) || "book-open";
  const Icon = iconMap[iconKey] ?? BookOpen;

  return (
    <MotionTile order={order} ariaLabel={`${course.title} progress`}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Course
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {course.title}
            </h3>
          </div>
          <span className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-white/5">
            {prefersReducedMotion ? (
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-400 via-cyan-300 to-teal-200"
                style={{ width: `${course.progress}%` }}
                aria-label={`${course.progress}% complete`}
              />
            ) : (
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-400 via-cyan-300 to-teal-200"
                initial={{ width: "0%" }}
                whileInView={{ width: `${course.progress}%` }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
                aria-label={`${course.progress}% complete`}
              />
            )}
          </div>
        </div>
      </div>
    </MotionTile>
  );
}

// Server Component: courses route with server-side data fetching.
import type { Metadata } from "next";
import Link from "next/link";
import BentoGrid from "@/components/dashboard/BentoGrid";
import CourseCard from "@/components/dashboard/CourseCard";
import MotionTile from "@/components/dashboard/MotionTile";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Course } from "@/types/course";

export const metadata: Metadata = {
  title: "Lumos OS | Courses",
  description: "Browse and track every learning path in your Lumos workspace.",
  openGraph: {
    title: "Lumos OS | Courses",
    description: "Browse and track every learning path in your Lumos workspace.",
    type: "website"
  }
};

export default async function CoursesPage() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: false });

  const courses = (data ?? []) as Course[];
  const hasError = Boolean(error);
  const hasCourses = courses.length > 0;
  const completedCount = courses.filter((course) => course.progress >= 100).length;
  const averageProgress =
    courses.length > 0
      ? Math.round(
          courses.reduce((total, course) => total + course.progress, 0) /
            courses.length
        )
      : 0;

  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Courses
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Focused learning paths
        </h2>
      </div>

      <BentoGrid>
        <MotionTile order={0} ariaLabel="Course completion">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Completion
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white">
                {completedCount}/{courses.length}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Courses completed in your current track.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              Average progress: {averageProgress}%
            </div>
          </div>
        </MotionTile>

        <MotionTile order={1} ariaLabel="Course velocity">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Progression
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {hasCourses ? `${averageProgress}%` : "0%"}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Average completion across active courses.
              </p>
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-white/50">
              Keep momentum steady
            </div>
          </div>
        </MotionTile>
        {hasError ? (
          <MotionTile order={1} ariaLabel="Courses unavailable">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Courses
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  Sync interrupted
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  We could not load your courses. Check your Supabase connection or try again.
                </p>
              </div>
              <Link
                href="/dashboard/settings"
                className="mt-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                Review settings
              </Link>
            </div>
          </MotionTile>
        ) : null}
        {!hasError && !hasCourses ? (
          <MotionTile order={1} ariaLabel="No courses yet">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Courses
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  No courses yet
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  Add your first course in Supabase to start tracking mastery.
                </p>
              </div>
              <Link
                href="/dashboard/settings"
                className="mt-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-transparent px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                Configure Supabase
              </Link>
            </div>
          </MotionTile>
        ) : null}
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            order={index + 2}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

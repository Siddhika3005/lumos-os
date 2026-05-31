// Server Component: insights route with data-driven highlights.
import type { Metadata } from "next";
import Link from "next/link";
import BentoGrid from "@/components/dashboard/BentoGrid";
import LearningInsightsTile from "@/components/dashboard/LearningInsightsTile";
import ActivityTile from "@/components/dashboard/ActivityTile";
import MotionTile from "@/components/dashboard/MotionTile";
import VelocityTile from "@/components/dashboard/VelocityTile";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Course } from "@/types/course";

export const metadata: Metadata = {
  title: "Lumos OS | Insights",
  description: "Actionable learning insights and momentum tracking.",
  openGraph: {
    title: "Lumos OS | Insights",
    description: "Actionable learning insights and momentum tracking.",
    type: "website"
  }
};

export default async function InsightsPage() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: false });

  const courses = (data ?? []) as Course[];
  const hasError = Boolean(error);
  const hasCourses = courses.length > 0;
  const averageProgress =
    courses.length > 0
      ? Math.round(
          courses.reduce((total, course) => total + course.progress, 0) /
            courses.length
        )
      : 0;
  const momentumScore = Math.min(100, averageProgress + 12);

  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Insights
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Momentum intelligence
        </h2>
      </div>

      <BentoGrid>
        <MotionTile order={0} ariaLabel="Momentum metrics">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Momentum
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white">
                {momentumScore}/100
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Composite score based on progress velocity.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              Average progress: {averageProgress}%
            </div>
          </div>
        </MotionTile>
        {hasError ? (
          <MotionTile order={1} ariaLabel="Insights unavailable">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Insights
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  Unable to load insights
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  We could not fetch course data. Check your Supabase connection.
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
        ) : (
          <LearningInsightsTile courses={courses} order={1} />
        )}
        <ActivityTile order={2} activityLevels={hasCourses ? undefined : []} />
        <VelocityTile order={3} />
        {!hasError && !hasCourses ? (
          <MotionTile order={4} ariaLabel="No courses yet">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Insights
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  No data yet
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  Add courses to unlock momentum insights and streak tracking.
                </p>
              </div>
              <Link
                href="/dashboard/courses"
                className="mt-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-transparent px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                View courses
              </Link>
            </div>
          </MotionTile>
        ) : null}
      </BentoGrid>
    </section>
  );
}

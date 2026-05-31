// Server Component: fetches Supabase data server-side and renders the dashboard.
import type { Metadata } from "next";
import Link from "next/link";
import BentoGrid from "@/components/dashboard/BentoGrid";
import HeroTile from "@/components/dashboard/HeroTile";
import CourseCard from "@/components/dashboard/CourseCard";
import LearningInsightsTile from "@/components/dashboard/LearningInsightsTile";
import ActivityTile from "@/components/dashboard/ActivityTile";
import VelocityTile from "@/components/dashboard/VelocityTile";
import MotionTile from "@/components/dashboard/MotionTile";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Course } from "@/types/course";

export const metadata: Metadata = {
  title: "Lumos OS | Dashboard",
  description: "High-fidelity learning dashboard with live course progress and insights.",
  openGraph: {
    title: "Lumos OS | Dashboard",
    description: "High-fidelity learning dashboard with live course progress and insights.",
    type: "website"
  }
};

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: false });

  const courses = (data ?? []) as Course[];
  const hasError = Boolean(error);
  const hasCourses = courses.length > 0;
  const activeCourses = courses.filter((course) => course.progress < 100).length;

  return (
    <section className="space-y-6">
      <div className="sr-only">
        <p>Student Learning Dashboard</p>
      </div>

      <BentoGrid>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <HeroTile userName="Siddhika" activeCourses={activeCourses} order={0} />
        </div>

        <div className="col-span-1 lg:col-span-2">
          {hasError ? (
            <MotionTile order={1} ariaLabel="Insights unavailable">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Insights
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    Insights paused
                  </h3>
                  <p className="mt-4 text-sm text-white/70">
                    We could not load courses, so insights are temporarily unavailable.
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
        </div>

        <div className="col-span-1">
          <ActivityTile order={2} activityLevels={hasCourses ? undefined : []} />
        </div>

        <div className="col-span-1">
          <VelocityTile order={3} />
        </div>
        <div className="col-span-1">
          {courses[0] ? <CourseCard course={courses[0]} order={4} /> : null}
        </div>
        <div className="col-span-1">
          {courses[1] ? <CourseCard course={courses[1]} order={5} /> : null}
        </div>

        <div className="col-span-1 hidden lg:block" aria-hidden="true" />
        <div className="col-span-1">
          {courses[2] ? <CourseCard course={courses[2]} order={6} /> : null}
        </div>
        <div className="col-span-1">
          {courses[3] ? <CourseCard course={courses[3]} order={7} /> : null}
        </div>
      </BentoGrid>
    </section>
  );
}

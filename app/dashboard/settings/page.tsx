// Server Component: settings route with stable, server-rendered content.
import type { Metadata } from "next";
import MotionTile from "@/components/dashboard/MotionTile";

export const metadata: Metadata = {
  title: "Lumos OS | Settings",
  description: "Manage preferences, sync cadence, and notifications for Lumos OS.",
  openGraph: {
    title: "Lumos OS | Settings",
    description: "Manage preferences, sync cadence, and notifications for Lumos OS.",
    type: "website"
  }
};

export default function SettingsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Settings
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Personalize your learning flow
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <MotionTile ariaLabel="Account preferences">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Account
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Profile and security
              </h3>
              <p className="mt-4 text-sm text-white/70">
                Manage identity, password rotation, and trusted devices.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              Last review: 3 days ago
            </div>
          </div>
        </MotionTile>

        <MotionTile ariaLabel="Learning goals">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Goals
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Weekly objectives
              </h3>
              <p className="mt-4 text-sm text-white/70">
                Keep a 4-session streak and finish one core module each week.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              Current target: 6 hours
            </div>
          </div>
        </MotionTile>

        <MotionTile ariaLabel="Notification preferences">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Notifications
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Quiet hours
              </h3>
              <p className="mt-4 text-sm text-white/70">
                Weekly progress summaries and milestone nudges are enabled.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              Silence window: 8:00 PM - 6:00 AM
            </div>
          </div>
        </MotionTile>

        <MotionTile ariaLabel="Appearance settings">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Appearance
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Display profile
              </h3>
              <p className="mt-4 text-sm text-white/70">
                Keep the OS theme on deep dark mode with subtle grain.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              Theme: Lumos Noir
            </div>
          </div>
        </MotionTile>
      </div>
    </section>
  );
}

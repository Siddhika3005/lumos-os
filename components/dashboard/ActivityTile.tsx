// Client Component: motion tile wrapper requires client rendering.
"use client";
import MotionTile from "@/components/dashboard/MotionTile";

interface ActivityTileProps {
  order?: number;
  activityLevels?: number[];
}

const activityLevelsDefault = [
  0, 1, 2, 3, 2, 1, 0,
  1, 2, 3, 3, 2, 1, 0,
  0, 1, 2, 2, 2, 3, 1,
  0, 0, 1, 2, 3, 2, 1,
  1, 2, 2, 3, 3, 2, 1,
  0, 1, 2, 1, 2, 3, 2
];

const intensityMap: Record<number, string> = {
  0: "bg-white/5",
  1: "bg-purple-400/30",
  2: "bg-purple-400/60",
  3: "bg-cyan-300/80"
};

export default function ActivityTile({
  order = 0,
  activityLevels
}: ActivityTileProps) {
  const levels = activityLevels ?? activityLevelsDefault;

  return (
    <MotionTile order={order} ariaLabel="Learning activity">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Activity
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">
            Focus map
          </h3>
        </div>

        {levels.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent p-4 text-sm text-white/70">
            No activity data yet. Complete your next session to light up the focus map.
          </div>
        ) : (
          <div
            className="mt-4 grid grid-cols-7 gap-1"
            role="grid"
            aria-label="Weekly learning activity"
          >
            {levels.map((level, index) => (
              <span
                key={`activity-${index}`}
                role="gridcell"
                aria-label={`Day ${index + 1}, intensity ${level}`}
                title={`Day ${index + 1}: intensity ${level}`}
                data-intensity={level}
                className={`h-4 w-4 rounded-sm ${
                  intensityMap[level]
                } transition-transform duration-150 hover:scale-110 focus-visible:ring-2 focus-visible:ring-purple-500`}
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </div>
    </MotionTile>
  );
}

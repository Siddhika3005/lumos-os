// Client Component: velocity tile uses MotionTile for consistent motion behavior.
"use client";

import MotionTile from "@/components/dashboard/MotionTile";

interface VelocityTileProps {
  order?: number;
}

const velocityBars = [12, 18, 26, 34, 46, 58, 72, 64];

export default function VelocityTile({ order = 0 }: VelocityTileProps) {
  return (
    <MotionTile order={order} ariaLabel="Weekly velocity">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            Velocity
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            +12.4%
          </h3>
          <p className="mt-1 text-xs text-white/50">Weekly improvement</p>
        </div>

        <div className="mt-6 flex items-end gap-2">
          {velocityBars.map((height, index) => (
            <span
              key={`velocity-${index}`}
              className="w-3 rounded-full bg-[#aee8ff]/70"
              style={{ height }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </MotionTile>
  );
}

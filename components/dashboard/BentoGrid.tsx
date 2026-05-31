// Server Component: structural grid wrapper with no client-side behavior.
import type { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <section
      aria-label="Learning overview"
      className="grid auto-rows-[220px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {children}
    </section>
  );
}

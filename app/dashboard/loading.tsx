// Server Component: suspense fallback skeleton for dashboard tiles.
export default function DashboardLoading() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div className="h-3 w-40 rounded-full bg-white/10" />
        <div className="h-6 w-64 rounded-full bg-white/10" />
      </div>
      <div className="grid auto-rows-[180px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="animate-pulse rounded-3xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
    </section>
  );
}

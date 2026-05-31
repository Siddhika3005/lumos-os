// Client Component: error boundary with reset control.
"use client";

interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 text-white shadow-soft">
      <h2 className="text-lg font-semibold">Something drifted off course.</h2>
      <p className="mt-2 text-sm text-white/70">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-purple-500"
      >
        Reset stream
      </button>
    </section>
  );
}

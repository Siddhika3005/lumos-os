// Server Component: dashboard shell with sidebar and mobile navigation.
import type { ReactNode } from "react";
import { Bell, Search } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505]">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <main
          id="main-content"
          aria-label="Dashboard content"
          className="flex-1 px-8 pb-28 pt-10 md:px-14"
        >
          <div className="mx-auto w-full max-w-6xl">
            <header className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/40">
              <span className="flex items-center gap-2">
                <span className="text-white/50">Path</span>
                <span className="text-white/20">/</span>
                <span className="text-white/70">Dashboard</span>
              </span>
              <div className="flex items-center gap-4 text-white/60">
                <button
                  type="button"
                  aria-label="Search"
                  className="rounded-full p-2 transition hover:text-white focus-visible:ring-2 focus-visible:ring-[#aee8ff]"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Notifications"
                  className="rounded-full p-2 transition hover:text-white focus-visible:ring-2 focus-visible:ring-[#aee8ff]"
                >
                  <Bell className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </header>
            {children}
          </div>
        </main>
      </div>
      <MobileNav />
      <button
        type="button"
        aria-label="Create new"
        className="fixed bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-2xl bg-cyan-200 text-[#0b0c0e] shadow-soft transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-purple-500 md:flex"
      >
        +
      </button>
    </div>
  );
}

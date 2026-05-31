// Client Component: interactive navigation state with motion highlight and collapse toggle.
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BookOpen, Layers, LayoutGrid, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { label: "Insights", href: "/dashboard/insights", icon: Layers },
  { label: "Settings", href: "/dashboard/settings", icon: Settings }
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className={`hidden md:flex h-screen sticky top-0 ${
        collapsed ? "w-20" : "w-64"
      } flex-col gap-6 border-r border-white/5 bg-ink-800/60 px-4 py-6 backdrop-blur-xl transition-colors`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase tracking-[0.3em] text-white/60">
          Lumos
        </span>
        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white focus-visible:ring-2 focus-visible:ring-purple-500"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? ">>" : "<<"}
        </button>
      </div>

      <div className="relative flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium text-white/70 transition focus-visible:ring-2 focus-visible:ring-purple-500 ${
                collapsed ? "justify-center" : "justify-start"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="sidebar-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              ) : null}
              <Icon className="relative h-4 w-4" aria-hidden="true" />
              {!collapsed ? (
                <span className="relative text-white">{item.label}</span>
              ) : null}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent p-4 text-xs text-white/70 shadow-soft">
        <p className="text-white/80">Keep your streak alive.</p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
          4 modules today
        </p>
      </div>
    </nav>
  );
}

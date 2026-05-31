// Client Component: interactive bottom navigation for small viewports.
"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BookOpen, Layers, LayoutGrid, Settings } from "lucide-react";

const navItems = [
  { label: "Home", href: "/dashboard", icon: LayoutGrid },
  { label: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { label: "Insights", href: "/dashboard/insights", icon: Layers },
  { label: "Settings", href: "/dashboard/settings", icon: Settings }
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#070707] px-6 py-4 backdrop-blur-xl"
    >
      <div className="relative flex items-center justify-between">
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
              className={`relative flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] transition focus-visible:ring-2 focus-visible:ring-[#aee8ff] ${
                isActive ? "text-[#aee8ff]" : "text-white/50"
              }`}
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                {isActive ? (
                  <motion.span
                    layoutId="mobile-pill"
                    className="absolute inset-0 rounded-xl bg-[#aee8ff]/12"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                ) : null}
                <Icon className="relative h-4 w-4" aria-hidden="true" />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-[64px] rounded-full bg-surface-2" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-9 w-[64px] items-center rounded-full border border-border bg-surface-2 px-1 transition-colors duration-300 hover:border-accent/40"
    >
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-blue text-white shadow-accent-sm transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:shadow-lift"
        style={{ transform: isDark ? "translateX(0)" : "translateX(28px)" }}
      >
        <span className="transition-transform duration-500 group-active:scale-90">
          {isDark ? <Moon size={14} /> : <Sun size={14} />}
        </span>
      </span>
      <Moon
        size={14}
        className={`absolute left-[9px] transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40"}`}
      />
      <Sun
        size={14}
        className={`absolute right-[9px] transition-opacity duration-300 ${isDark ? "opacity-40" : "opacity-0"}`}
      />
    </button>
  );
}

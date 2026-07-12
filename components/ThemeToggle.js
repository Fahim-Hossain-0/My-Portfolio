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
      className="relative flex h-9 w-[64px] items-center rounded-full border border-border bg-surface-2 px-1 transition-colors"
    >
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow-sm transition-transform duration-200 ease-out"
        style={{ transform: isDark ? "translateX(0)" : "translateX(28px)" }}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
      <Moon
        size={14}
        className={`absolute left-[9px] transition-opacity ${isDark ? "opacity-0" : "opacity-40"}`}
      />
      <Sun
        size={14}
        className={`absolute right-[9px] transition-opacity ${isDark ? "opacity-40" : "opacity-0"}`}
      />
    </button>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check persisted theme or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div
        className="w-10 h-10 rounded-full border border-white/10 bg-white/5 opacity-50"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="btn-pop p-2.5 rounded-full glass-panel text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white text-slate-700 hover:text-slate-900 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-indigo-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <SunIcon size={18} className="text-amber-400" />
      ) : (
        <MoonIcon size={18} className="text-indigo-600" />
      )}
    </button>
  );
};

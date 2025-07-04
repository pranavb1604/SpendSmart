"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme from localStorage or system preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = storedTheme === "dark" || (!storedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", enabled);
    setIsDark(enabled);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isNowDark = !html.classList.contains("dark");

    html.classList.toggle("dark", isNowDark);
    localStorage.setItem("theme", isNowDark ? "dark" : "light");
    setIsDark(isNowDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full bg-muted text-muted-foreground dark:bg-muted-foreground dark:text-muted hover:ring-2 ring-ring transition-all duration-200"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

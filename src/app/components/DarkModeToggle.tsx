"use client";

import { useEffect, useState } from "react";
import { PiSunBold, PiMoonBold } from "react-icons/pi";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setIsDarkMode(JSON.parse(saved));
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode, mounted]);

  // Avoid hydration mismatch by rendering a placeholder until mounted
  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setIsDarkMode((d) => !d)}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 flex items-center justify-center rounded-xl
                 border border-border text-foreground-muted
                 hover:bg-muted hover:text-foreground hover:border-border-strong
                 transition-all duration-200"
    >
      {isDarkMode ? (
        /* Sun icon */
        <PiSunBold className="h-4 w-4 text-foreground" />
      ) : (
        /* Moon icon */
        <PiMoonBold className="h-4 w-4 text-foreground" />
      )}
    </button>
  );
}

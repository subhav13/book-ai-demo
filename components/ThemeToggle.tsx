"use client";
import { useTheme } from "@/app/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{
        backgroundColor: isDark ? "var(--color-primary)" : "var(--color-outline-variant)",
      }}
      aria-label="Toggle theme"
    >
      {/* Track knob */}
      <span
        className="absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
        style={{
          left: isDark ? "calc(100% - 1.375rem)" : "0.125rem",
          backgroundColor: "white",
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "12px", color: isDark ? "#5b52d9" : "#7b7891" }}>
          {isDark ? "dark_mode" : "light_mode"}
        </span>
      </span>
    </button>
  );
}

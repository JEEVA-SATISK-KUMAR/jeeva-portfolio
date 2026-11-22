"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { getTheme, subscribeTheme, toggleTheme } from "@/lib/theme";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => null);
  const label = theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === "light" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
    </button>
  );
}

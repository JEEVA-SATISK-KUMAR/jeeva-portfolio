"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mode, setMode] = useState<"night" | "signal">("night");

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  const isSignal = mode === "signal";

  return (
    <button
      className="mode-toggle"
      type="button"
      aria-label={`Switch to ${isSignal ? "night" : "signal"} mode`}
      aria-pressed={isSignal}
      onClick={() => setMode(isSignal ? "night" : "signal")}
    >
      {isSignal ? <SunMedium size={14} /> : <MoonStar size={14} />}
      <span>{isSignal ? "Signal" : "Night"}</span>
      <i aria-hidden="true" />
    </button>
  );
}


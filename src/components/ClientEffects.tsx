"use client";

import { useEffect } from "react";

/** Scroll-reveal for [data-reveal] and the pointer-following .spotlight glow. */
export function ClientEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;

    if (root.classList.contains("js-reveal")) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -6% 0px" },
      );
      targets.forEach((target) => observer?.observe(target));
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const card = (event.target as Element | null)?.closest?.<HTMLElement>(".spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return null;
}

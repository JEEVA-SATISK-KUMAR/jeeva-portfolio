"use client";

import { Activity, CircleDotDashed, Command, Menu } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { navLinks } from "@/lib/nav";
import { CommandMenu } from "./CommandMenu";
import { ThemeToggle } from "./ThemeToggle";


// Every section is observed so the highlight clears over sections without a nav link.
const observedIds = ["top", "terminal", "case-files", "experience", "leadership", "skills", "education", "contact"];

const noopSubscribe = () => () => {};
const isApple = () => /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

export function SiteHeader() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const apple = useSyncExternalStore(noopSubscribe, isApple, () => true);

  useEffect(() => {
    const sections = observedIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen((open) => !open);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Jeeva OS home" translate="no">
            <span className="brand-mark"><Activity size={16} aria-hidden="true" /></span><b>JEEVA</b><i>OS</i>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} aria-current={activeId === link.href.slice(1) ? "true" : undefined}>{link.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <div className="header-status"><CircleDotDashed size={14} aria-hidden="true" /><span>System online</span></div>
            <button className="kbd-button" type="button" onClick={() => setMenuOpen(true)} aria-haspopup="dialog" aria-label="Open command menu">
              <Command size={14} aria-hidden="true" />
              <kbd aria-hidden="true">{apple ? "⌘" : "Ctrl"}&nbsp;K</kbd>
            </button>
            <ThemeToggle />
            <button className="icon-button mobile-only" type="button" onClick={() => setMenuOpen(true)} aria-haspopup="dialog" aria-label="Open navigation">
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <CommandMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

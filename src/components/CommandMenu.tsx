"use client";

import { ArrowUpRight, Download, Hash, Mail, Search, SquareTerminal, SunMoon, type LucideIcon } from "lucide-react";
import { KeyboardEvent, MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { toggleTheme } from "@/lib/theme";
import { navLinks } from "@/lib/nav";

type Item = {
  id: string;
  label: string;
  group: "Navigate" | "Actions";
  icon: LucideIcon;
  href?: string;
  external?: boolean;
  hint?: string;
  run?: () => void;
};

// Reuses the contact section's existing mail link so the address lives in one place.
function openContactEmail() {
  document.querySelector<HTMLAnchorElement>('#contact a[href^="mailto:"]')?.click();
}

const items: Item[] = [
  { id: "top", label: "Home", group: "Navigate", icon: Hash, href: "#top" },
  { id: "terminal", label: "Interactive console", group: "Navigate", icon: SquareTerminal, href: "#terminal" },
  ...navLinks.map((link) => ({ id: link.href.slice(1), label: link.label, group: "Navigate" as const, icon: Hash, href: link.href })),
  { id: "education", label: "Education", group: "Navigate", icon: Hash, href: "#education" },
  { id: "resume", label: "Resume.pdf", group: "Actions", icon: Download, href: "/resume.pdf", external: true, hint: "PDF" },
  { id: "message", label: "Send a message", group: "Actions", icon: Mail, run: openContactEmail },
  { id: "linkedin", label: "LinkedIn", group: "Actions", icon: ArrowUpRight, href: "https://www.linkedin.com/in/jeeva-satish-kumar/", external: true },
  { id: "theme", label: "Toggle theme", group: "Actions", icon: SunMoon, run: toggleTheme },
];

export function CommandMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((item) => item.label.toLowerCase().includes(q)) : items;
  }, [query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleClose() {
    setQuery("");
    setActiveIndex(0);
    onClose();
    returnFocusRef.current?.focus?.({ preventScroll: true });
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;
    const last = results.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowDown") next = activeIndex >= last ? 0 : activeIndex + 1;
    else if (event.key === "ArrowUp") next = activeIndex <= 0 ? last : activeIndex - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else if (event.key === "Enter") {
      event.preventDefault();
      listRef.current?.querySelectorAll<HTMLElement>("[data-cmdk-item]")[activeIndex]?.click();
      return;
    }
    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    listRef.current?.querySelectorAll("[data-cmdk-item]")[next]?.scrollIntoView({ block: "nearest" });
  }

  function onItemClick(item: Item) {
    dialogRef.current?.close();
    item.run?.();
  }

  function onBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  }

  return (
    <dialog ref={dialogRef} className="cmdk" aria-label="Command menu" onClose={handleClose} onClick={onBackdropClick}>
      <div className="cmdk-input-row">
        <Search size={16} aria-hidden="true" />
        <input
          autoFocus
          role="combobox"
          aria-expanded="true"
          aria-controls="cmdk-list"
          aria-activedescendant={results[activeIndex] ? `cmdk-${results[activeIndex].id}` : undefined}
          aria-label="Jump to a section or action"
          placeholder="Jump to a section or action…"
          value={query}
          onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }}
          onKeyDown={onInputKeyDown}
          autoComplete="off"
          spellCheck={false}
        />
        <kbd aria-hidden="true">Esc</kbd>
      </div>
      <ul className="cmdk-list" id="cmdk-list" role="listbox" ref={listRef} aria-label="Results">
        {results.length === 0 && <li className="cmdk-empty">No matches for “{query.trim()}”. Try “projects” or “resume”.</li>}
        {results.map((item, index) => {
          const showGroup = index === 0 || results[index - 1].group !== item.group;
          const Icon = item.icon;
          const common = {
            id: `cmdk-${item.id}`,
            role: "option",
            "aria-selected": index === activeIndex,
            "data-active": index === activeIndex,
            "data-cmdk-item": "",
            className: "cmdk-item",
            tabIndex: -1,
            onMouseMove: () => { if (activeIndex !== index) setActiveIndex(index); },
            onClick: () => onItemClick(item),
          };
          return (
            <li key={item.id} role="presentation">
              {showGroup && <div className="cmdk-group" role="presentation">{item.group}</div>}
              {item.href ? (
                <a {...common} href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <Icon size={16} aria-hidden="true" />{item.label}{item.hint && <span className="cmdk-hint">{item.hint}</span>}
                </a>
              ) : (
                <button {...common} type="button">
                  <Icon size={16} aria-hidden="true" />{item.label}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </dialog>
  );
}

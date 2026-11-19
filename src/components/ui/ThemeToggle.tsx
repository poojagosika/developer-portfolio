"use client";

import { Moon, Sun } from "./Icons";

// Switches between the light and dark themes and remembers the choice.
// The icon is picked by CSS, so it is right before the page's code loads.
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private windows may block storage; the switch still works for now.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark"
      className="text-foreground/60 hover:text-primary mb-7 flex size-9 shrink-0 cursor-pointer items-center justify-center self-end transition-colors duration-150 [&_svg]:size-4"
    >
      <Moon className="dark:hidden" />
      <Sun className="hidden dark:block" />
    </button>
  );
}

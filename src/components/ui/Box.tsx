import type { ReactNode } from "react";

// Kept so existing callers can still name a colour; every square now uses
// the site's ink colour.
export type BoxColor = "indigo" | "teal" | "pink" | "amber" | "sky" | "dark";

// The small square that sits in front of a row. It uses the same colour as
// the buttons: black in the light theme, white in the dark theme.
export function Box({ children }: { color?: BoxColor; children: ReactNode }) {
  return (
    <span className="btn-ink flex size-8 shrink-0 items-center justify-center rounded-lg shadow-[inset_0_1px_0_var(--btn-bevel)] [&_svg]:size-4">
      {children}
    </span>
  );
}

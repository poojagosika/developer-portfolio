import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

// The one button used across the site. Its look lives in globals.css
// (.press for the edge, sweep and press-down; .btn-ink for the colour, which
// is black in the light theme and white in the dark theme). The label is
// centred both ways on the face.
const BUTTON =
  "press btn-ink group/btn inline-flex h-9 w-fit shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3.5 text-center text-sm leading-none font-medium whitespace-nowrap disabled:cursor-default disabled:opacity-60";

function Label({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowUpRight className="size-3.5 shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-px group-hover/btn:-translate-y-px" />
      ) : null}
    </>
  );
}

// A button that does something on the page.
export function Button({
  children,
  arrow,
  className = "",
  ...props
}: ComponentProps<"button"> & { arrow?: boolean }) {
  return (
    <button className={`${BUTTON} ${className}`} {...props}>
      <Label arrow={arrow}>{children}</Label>
    </button>
  );
}

// The same button as a link. Links to other sites open in a new tab.
export function ButtonLink({
  href,
  children,
  arrow,
  className = "",
}: {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={`${BUTTON} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Label arrow={arrow}>{children}</Label>
    </a>
  );
}

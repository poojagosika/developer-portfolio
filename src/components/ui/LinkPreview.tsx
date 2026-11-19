"use client";

import { useState, type MouseEvent, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { SPRING } from "../../lib/motion";

// An inline link that shows a screenshot of where it goes. The preview pops
// in above the word and leans toward the cursor.
export function LinkPreview({
  href,
  image,
  children,
}: {
  href: string;
  image: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 15 });

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) / 2);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="dotlink relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onMouseMove={onMove}
    >
      {children}
      <AnimatePresence>
        {open ? (
          <motion.span
            aria-hidden="true"
            style={{ x: springX, perspective: 800 }}
            className="pointer-events-none absolute bottom-full left-1/2 z-40 -ml-[100px] hidden w-[200px] pb-2.5 md:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={image}
              alt=""
              width={200}
              height={105}
              initial={{ opacity: 0, y: 20, scale: 0.6, rotateY: 40 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              transition={SPRING}
              className="aspect-[1200/630] w-full rounded-lg object-cover object-left-top shadow-2xl ring-1 ring-black/10"
            />
          </motion.span>
        ) : null}
      </AnimatePresence>
    </a>
  );
}

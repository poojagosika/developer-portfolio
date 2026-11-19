"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

// Turns animations down for people who ask their device for less motion.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

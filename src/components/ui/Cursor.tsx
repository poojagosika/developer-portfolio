"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Mode = "idle" | "link" | "hidden";

const CLICKABLE = "a, button, [role='button'], summary, label";
const TYPING = "input, textarea, select";

// A soft round cursor for mouse and trackpad users. It is a white circle
// blended by "difference", so it reads black on the light theme and white on
// the dark theme without knowing which one is on. Over anything clickable it
// grows; over text fields it steps aside for the normal text bar.
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("hidden");
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 900, damping: 55, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 900, damping: 55, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as Element | null;
      if (target?.closest?.(TYPING)) setMode("hidden");
      else if (target?.closest?.(CLICKABLE)) setMode("link");
      else setMode("idle");
    };
    const onLeave = () => setMode("hidden");
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = mode === "link" ? 44 : 16;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          opacity: mode === "hidden" ? 0 : 1,
          scale: pressed ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </motion.div>
  );
}

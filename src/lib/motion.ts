// Shared motion settings, so everything on the page moves the same way.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const SPRING = {
  type: "spring" as const,
  visualDuration: 0.6,
  bounce: 0.18,
};

export const SNAPPY = {
  type: "spring" as const,
  visualDuration: 0.35,
  bounce: 0.12,
};

// The ease used for reveals and accordions.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

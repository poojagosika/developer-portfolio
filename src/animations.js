// Rise — slide up with fade
export const rise = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Pan — horizontal slide
export const panLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export const panRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Fade — simple opacity
export const fade = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay: i * 0.15 },
  }),
};

// Pop — scale up with spring
export const pop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
};

// Wipe — clip path reveal
export const wipe = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: (i = 0) => ({
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.4, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Blur — blur to clear
export const blur = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (i = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Tumble — rotate while fading in
export const tumble = {
  hidden: { opacity: 0, rotate: -12, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Bounce — spring bounce entrance
export const bounce = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: i * 0.15,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

// Skate — smooth horizontal glide
export const skate = {
  hidden: { opacity: 0, x: 100 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Spread — scale from center
export const spread = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Stomp — scale down slam
export const stomp = {
  hidden: { opacity: 0, scale: 1.4 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Baseline — rise from bottom with overshoot
export const baseline = {
  hidden: { opacity: 0, y: 80 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.18,
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  }),
};

// Flicker — opacity flicker entrance
export const flicker = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: [0, 0.7, 0.2, 0.9, 0.3, 1],
    transition: { delay: i * 0.15, duration: 1.2, ease: "linear" },
  }),
};

// Roll — rotate in from side
export const roll = {
  hidden: { opacity: 0, x: -50, rotate: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Neon — glow pulse entrance
export const neon = {
  hidden: { opacity: 0, textShadow: "0 0 0px rgba(255,255,255,0)" },
  visible: (i = 0) => ({
    opacity: 1,
    textShadow: [
      "0 0 20px rgba(255,255,255,0.3)",
      "0 0 4px rgba(255,255,255,0.1)",
    ],
    transition: { duration: 1.4, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Block — reveal with width expansion
export const block = {
  hidden: { opacity: 0, scaleX: 0, originX: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Tectonic — split/shift appearance
export const tectonic = {
  hidden: { opacity: 0, y: 40, x: -20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1.2, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Scrapbook — playful drop-in with slight tilt
export const scrapbook = {
  hidden: { opacity: 0, y: -40, rotate: 8, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: i * 0.12,
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  }),
};

// Operation — mechanical structured appearance
export const operation = {
  hidden: { opacity: 0, y: 30, scaleY: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Seek — zoom and pan
export const seek = {
  hidden: { opacity: 0, scale: 1.2, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Chill — slow gentle float up
export const chill = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      delay: i * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Stagger containers
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

// Stagger items with different styles
export const staggerRise = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const staggerPop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 120, damping: 14 },
  },
};

export const staggerSkate = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerWipe = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const staggerBounce = {
  hidden: { opacity: 0, y: 35, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 12 },
  },
};

export const staggerSpread = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const staggerTumble = {
  hidden: { opacity: 0, rotate: -10, scale: 0.85 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Legacy aliases
export const fadeUp = rise;
export const fadeIn = fade;
export const slideLeft = panLeft;
export const slideRight = panRight;
export const scaleIn = pop;
export const staggerItem = staggerRise;

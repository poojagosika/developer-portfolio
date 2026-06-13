export const fadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.95, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -100, rotate: -2, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const slideRight = {
  hidden: { opacity: 0, x: 100, rotate: 2, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.7, rotate: -3, filter: 'blur(10px)' },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

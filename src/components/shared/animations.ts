// ===========================
// SHARED ANIMATION VARIANTS
// ===========================

export const slideInLeft = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const slideUpStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

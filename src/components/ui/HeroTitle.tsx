"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const line = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroTitle() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="font-display text-5xl sm:text-7xl leading-[1.05] text-cream"
    >
      <motion.span variants={line} className="block">
        Satu Ide.
      </motion.span>
      <motion.span
        variants={line}
        className="block italic bg-gradient-to-r from-magenta to-ember bg-clip-text text-transparent"
      >
        Satu Karya.
      </motion.span>
      <motion.span variants={line} className="block">
        Satu Dampak.
      </motion.span>
    </motion.h1>
  );
}

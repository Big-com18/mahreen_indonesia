"use client";

import { motion } from "framer-motion";

type Petal = {
  top: string;
  left: string;
  size: number;
  hue: string;
  duration: number;
  delay: number;
  rotate: number;
};

const petals: Petal[] = [
  { top: "8%", left: "12%", size: 46, hue: "#FF7A33", duration: 9, delay: 0, rotate: 15 },
  { top: "18%", left: "82%", size: 64, hue: "#E91E8C", duration: 11, delay: 0.6, rotate: -20 },
  { top: "62%", left: "6%", size: 38, hue: "#FFCB6B", duration: 8, delay: 1.2, rotate: 30 },
  { top: "74%", left: "88%", size: 52, hue: "#E91E8C", duration: 10, delay: 0.3, rotate: -10 },
  { top: "40%", left: "48%", size: 30, hue: "#FF7A33", duration: 7, delay: 1.8, rotate: 8 },
  { top: "85%", left: "38%", size: 40, hue: "#FFCB6B", duration: 9.5, delay: 0.9, rotate: -25 },
];

function PetalShape({ hue, size }: { hue: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 5C65 20 90 30 90 55C90 75 70 90 50 90C30 90 10 75 10 55C10 30 35 20 50 5Z"
        fill={hue}
        fillOpacity="0.55"
      />
    </svg>
  );
}

export default function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: p.top, left: p.left }}
          initial={{ y: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: [0, -22, 0],
            rotate: [0, p.rotate, 0],
            opacity: 0.9,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PetalShape hue={p.hue} size={p.size} />
        </motion.div>
      ))}
    </div>
  );
}

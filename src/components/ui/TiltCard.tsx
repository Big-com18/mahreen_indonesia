"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

export default function TiltCard({
  children,
  dark = false,
  padded = true,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  padded?: boolean;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.02 }}
      className={`relative h-full overflow-hidden rounded-2xl border transition-colors ${
        padded ? "p-7" : ""
      } ${
        dark
          ? "bg-ink/60 border-white/8 hover:border-magenta/40 hover:shadow-2xl hover:shadow-magenta/10"
          : "bg-white/[0.03] border-white/10 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

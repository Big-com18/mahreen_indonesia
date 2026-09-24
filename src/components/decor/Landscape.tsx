"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Landscape() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFar = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* glowing sun behind the peaks — evokes sunrise over the archipelago */}
      <motion.div
        style={{ y: sunY }}
        className="absolute left-1/2 top-[18%] -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-b from-gold to-ember blur-2xl opacity-60"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: sunY }}
        className="absolute left-1/2 top-[20%] -translate-x-1/2 w-24 h-24 rounded-full bg-gold/80"
      />

      {/* far mountain / volcano range */}
      <motion.svg
        style={{ y: yFar }}
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="absolute bottom-[18%] left-0 w-full h-[34%] text-indigo/70"
      >
        <path
          fill="currentColor"
          d="M0,300 L0,190 L160,60 L260,150 L400,20 L520,150 L680,80 L820,190 L960,110 L1080,190 L1200,140 L1200,300 Z"
        />
      </motion.svg>

      {/* mid volcano — a single clear cone, like Bromo/Merapi, with a wisp of smoke */}
      <motion.svg
        style={{ y: yMid }}
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="absolute bottom-[16%] left-0 w-full h-[38%] text-plum"
      >
        <path
          fill="currentColor"
          d="M0,300 L0,230 L300,230 L470,40 L520,90 L560,40 L720,230 L1200,230 L1200,300 Z"
        />
      </motion.svg>
      <motion.div
        animate={{ opacity: [0.15, 0.4, 0.15], y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[43%] bottom-[46%] w-10 h-16 rounded-full bg-cream/40 blur-md"
      />

      {/* near hills, darkest layer for depth */}
      <motion.svg
        style={{ y: yNear }}
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="absolute bottom-[8%] left-0 w-full h-[26%] text-ink"
      >
        <path
          fill="currentColor"
          d="M0,300 L0,180 L200,120 L380,190 L560,110 L760,190 L980,130 L1200,180 L1200,300 Z"
        />
      </motion.svg>

      {/* ocean — two looping wave layers */}
      <div className="absolute bottom-0 left-0 w-full h-[10%] overflow-hidden">
        <motion.svg
          viewBox="0 0 1200 60"
          className="absolute -bottom-1 left-0 w-[200%] h-full text-magenta/50"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M0,30 C150,60 300,0 450,30 C600,60 750,0 900,30 C1050,60 1150,20 1200,30 L1200,60 L0,60 Z M1200,30 C1350,60 1500,0 1650,30 C1800,60 1950,0 2100,30 C2250,60 2350,20 2400,30 L2400,60 L1200,60 Z"
          />
        </motion.svg>
        <motion.svg
          viewBox="0 0 1200 60"
          className="absolute -bottom-1 left-0 w-[200%] h-full text-ink"
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M0,38 C150,10 300,55 450,32 C600,10 750,55 900,32 C1050,10 1150,45 1200,38 L1200,60 L0,60 Z M1200,38 C1350,10 1500,55 1650,32 C1800,10 1950,55 2100,32 C2250,10 2350,45 2400,38 L2400,60 L1200,60 Z"
          />
        </motion.svg>
      </div>

      {/* birds drifting across the sky */}
      {[
        { top: "14%", delay: 0, duration: 22, scale: 0.8 },
        { top: "24%", delay: 4, duration: 26, scale: 0.6 },
        { top: "10%", delay: 9, duration: 24, scale: 0.5 },
      ].map((b, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 40 20"
          className="absolute w-6 text-cream/50"
          style={{ top: b.top, scale: b.scale }}
          initial={{ x: "-10vw" }}
          animate={{ x: "110vw" }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,10 Q10,0 20,10 Q30,0 40,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}
    </div>
  );
}

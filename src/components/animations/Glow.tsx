"use client";

import { motion } from "framer-motion";

interface GlowProps {
  className?: string;
}

export default function Glow({ className = "" }: GlowProps) {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute h-96 w-96 rounded-full bg-violet-500/15 blur-[140px] ${className}`}
      />

      <motion.div
        animate={{
          x: [20, -60, 40, 20],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[130px]"
      />
    </>
  );
}

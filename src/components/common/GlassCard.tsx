"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-4
    backdrop-blur-2xl
    shadow-[0_0_40px_rgba(255,255,255,0.03)]
    hover:border-violet-500/30
    hover:shadow-[0_0_60px_rgba(139,92,246,0.15)]
  "
    >
      {/* subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={clsx(
        "rounded-2xl px-6 py-3 font-semibold transition",

        variant === "primary"
          ? "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 text-white shadow-xl shadow-violet-600/20"
          : "border border-white/10 bg-white/5 text-white backdrop-blur-xl",

        className,
      )}
    >
      {children}
    </motion.button>
  );
}

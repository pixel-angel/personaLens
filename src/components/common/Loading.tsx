"use client";

import { motion } from "framer-motion";

interface LoadingProps {
  text?: string;
}

export default function Loading({
  text = "Analyzing your digital footprint...",
}: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="h-16 w-16 rounded-full border-2 border-violet-500 border-t-cyan-400"
      />

      <p className="text-sm text-zinc-400 tracking-wide">{text}</p>
    </div>
  );
}

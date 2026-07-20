"use client";

import { motion } from "framer-motion";

interface ProgressProps {
  value: number;
  max?: number;
  color?: string;
}

export default function Progress({
  value,
  max = 100,
  color = "from-violet-500 via-fuchsia-500 to-cyan-400",
}: ProgressProps) {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
        <span>Progress</span>

        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: 1,
          }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

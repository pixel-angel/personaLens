"use client";

import { motion } from "framer-motion";

interface ScoreRingProps {
  score?: number;
}

export default function ScoreRing({ score = 74 }: ScoreRingProps) {
  const radius = 90;
  const stroke = 12;

  const normalizedRadius = radius - stroke;

  const circumference = normalizedRadius * 2 * Math.PI;

  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="220" height="220" className="-rotate-90">
        <circle
          cx="110"
          cy="110"
          r={normalizedRadius}
          stroke="rgba(255,255,255,.08)"
          strokeWidth={stroke}
          fill="transparent"
        />

        <motion.circle
          cx="110"
          cy="110"
          r={normalizedRadius}
          stroke="url(#gradient)"
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: offset,
          }}
          transition={{
            duration: 1.8,
          }}
        />

        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#8b5cf6" />

            <stop offset="50%" stopColor="#d946ef" />

            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute text-center">
        <h2 className="text-5xl font-black">{score}</h2>

        <p className="mt-2 text-zinc-400">Exposure Score</p>
      </div>
    </div>
  );
}

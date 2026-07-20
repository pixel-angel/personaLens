"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Shield,
  UserRound,
  AlertTriangle,
  GitBranchIcon,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    title: "Recruiter View",
    subtitle: "Professional Presence",
    icon: Briefcase,
    color: "from-cyan-400 to-blue-500",
    position: "top-8 left-0 lg:-left-16",
  },
  {
    title: "Privacy Score",
    subtitle: "74 / 100",
    icon: Shield,
    color: "from-violet-400 to-fuchsia-500",
    position: "top-56 left-10 lg:-left-6",
  },
  {
    title: "Digital Twin",
    subtitle: "AI Engineer • Open Source",
    icon: UserRound,
    color: "from-emerald-400 to-green-500",
    position: "top-20 right-0 lg:-right-20",
  },
  {
    title: "Risk Signals",
    subtitle: "Email • Location • Metadata",
    icon: AlertTriangle,
    color: "from-orange-400 to-red-500",
    position: "top-64 right-8 lg:right-0",
  },
];

export default function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden xl:block">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${card.position}`}
          >
            <div className="w-64 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div
                  className={`rounded-xl bg-gradient-to-r ${card.color} p-3`}
                >
                  <Icon size={20} className="text-white" />
                </div>

                <Sparkles size={18} className="text-zinc-500" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>

              <p className="mt-2 text-sm text-zinc-400">{card.subtitle}</p>

              {card.title === "Privacy Score" && (
                <>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "74%" }}
                      transition={{
                        duration: 1.5,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                    />
                  </div>

                  <p className="mt-2 text-xs text-zinc-500">
                    Moderate Exposure
                  </p>
                </>
              )}

              {card.title === "Digital Twin" && (
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Tag>React</Tag>

                  <Tag>Python</Tag>

                  <Tag>AI</Tag>

                  <Tag>OSS</Tag>
                </div>
              )}

              {card.title === "Recruiter View" && (
                <div className="mt-5 flex items-center gap-2 text-sm text-zinc-400">
                  <GitBranchIcon size={16} />
                  Strong GitHub Profile
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
      {children}
    </div>
  );
}

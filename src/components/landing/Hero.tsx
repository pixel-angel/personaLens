"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck , GitBranchIcon} from "lucide-react";
import { motion } from "framer-motion";

import Glow from "@/components/animations/Glow";
import Reveal from "@/components/animations/Reveal";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    // <FloatingCards/>
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-32">
      <Glow />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating AI Cards */}
        <FloatingCards />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Badge */}

        <Reveal>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="mb-8 flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200 backdrop-blur-md"
          >
            <ShieldCheck size={16} />
            AI-Powered Digital Footprint Intelligence
          </motion.div>
        </Reveal>

        {/* Heading */}

        <Reveal>
          <div className="max-w-5xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
              }}
              className="text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-8xl"
            >
              THE INTERNET
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                ALREADY
              </span>
              <br />
              KNOWS YOU.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
              }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
            >
              Discover how recruiters, attackers and privacy experts interpret
              your digital footprint before they ever meet you.
            </motion.p>
          </div>
        </Reveal>

        {/* Buttons */}

        <Reveal>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/analyze">
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 text-lg font-semibold shadow-2xl shadow-violet-600/20"
              >
                Start Analysis
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </motion.button>
            </Link>

            <Link href="https://github.com/" target="_blank">
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg backdrop-blur-md transition hover:bg-white/10"
              >
                <GitBranchIcon size={20} />
                View GitHub
              </motion.button>
            </Link>
          </div>
        </Reveal>

        {/* Stats */}

        <Reveal>
          <div className="mt-24 grid w-full max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
            <Stat number="3" title="AI Perspectives" />

            <Stat number="100+" title="Digital Signals" />

            <Stat number="AI" title="Inference Engine" />

            <Stat number="Live" title="Privacy Score" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ number, title }: { number: string; title: string }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {number}
      </h2>

      <p className="mt-2 text-sm text-zinc-400">{title}</p>
    </motion.div>
  );
}

"use client";

import Fade from "@/components/animations/Fade";
import GlassCard from "@/components/common/GlassCard";
import { Upload, BrainCircuit, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Connect",
    description: "Link GitHub, LinkedIn or upload your resume.",
  },
  {
    icon: BrainCircuit,
    title: "Analyze",
    description: "Mirage builds an AI understanding of your public identity.",
  },
  {
    icon: ScanSearch,
    title: "Simulate",
    description:
      "See yourself through recruiters, attackers and privacy experts.",
  },
  {
    icon: ShieldCheck,
    title: "Improve",
    description: "Receive a personalized action plan to reduce your exposure.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-32">
      <Fade>
        <div className="text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            Four steps.
            <br />
            One digital mirror.
          </h2>
        </div>
      </Fade>

      <div className="mt-20 grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Fade key={step.title} delay={index * 0.1}>
              <GlassCard className="relative p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
                  <Icon className="text-violet-400" />
                </div>

                <span className="text-sm text-violet-400">
                  Step {index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 text-zinc-400">{step.description}</p>
              </GlassCard>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}

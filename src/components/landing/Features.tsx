"use client";
import {
  Shield,
  BrainCircuit,
  Briefcase,
  Network,
  Sparkles,
} from "lucide-react";

import Fade from "@/components/animations/Fade";
import GlassCard from "@/components/common/GlassCard";

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-32">
      <Fade>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            More than a
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Privacy Scanner
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Mirage doesn't just show what information is public. It reveals what
            people — and AI — can infer from it.
          </p>
        </div>
      </Fade>
      <div className="flex justify-center">
        <div className="grid w-full max-w-6xl auto-rows-[240px] gap-6 md:grid-cols-6">
          <FeatureCard
            className="md:col-span-4"
            icon={<BrainCircuit />}
            title="AI Digital Twin"
            description="Build an AI-generated representation of how your online identity appears to others."
            gradient="from-violet-500/20 to-cyan-500/10"
          />

          <FeatureCard
            className="md:col-span-2"
            icon={<Shield />}
            title="Privacy Score"
            description="Receive a live exposure score with actionable recommendations."
            gradient="from-cyan-500/20 to-blue-500/10"
          />

          <FeatureCard
            className="md:col-span-2"
            icon={<Briefcase />}
            title="Recruiter Perspective"
            description="Understand how hiring managers may evaluate your online presence."
            gradient="from-emerald-500/20 to-green-500/10"
          />

          <FeatureCard
            className="md:col-span-2"
            icon={<Sparkles />}
            title="AI Action Plan"
            description="Personalized privacy checklist ranked by impact."
            gradient="from-fuchsia-500/20 to-pink-500/10"
          />

          <FeatureCard
            className="md:col-span-2"
            icon={<Network />}
            title="Footprint Graph"
            description="Visualize how your public data connects across platforms."
            gradient="from-orange-500/20 to-red-500/10"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  gradient: string;
}

function FeatureCard({
  title,
  description,
  icon,
  className,
  gradient,
}: FeatureProps) {
  return (
    <Fade>
      <GlassCard
        className={`relative h-full overflow-hidden rounded-3xl p-8 ${className}`}
      >
        {/* Gradient */}
        <div
          className={`absolute inset-[1px] rounded-[22px] bg-gradient-to-br ${gradient} opacity-70`}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md md-2">
            {icon}
          </div>

          <div className="mt-auto">
            <h3 className="text-2xl font-bold mt-3">{title}</h3>

            <p className="mt-3 max-w-xs leading-7 text-zinc-400">
              {description}
            </p>
          </div>
        </div>
      </GlassCard>
    </Fade>
  );
}

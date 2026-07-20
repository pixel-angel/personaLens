"use client";

import { ShieldCheck, TriangleAlert, BrainCircuit, Globe } from "lucide-react";

import Fade from "@/components/animations/Fade";
import GlassCard from "@/components/common/GlassCard";

interface StatsGridProps {
  analysis: any;
}

export default function StatsGrid({ analysis }: StatsGridProps) {
  const score = analysis.score ?? 0;

  const riskCount = analysis.attacker?.risks?.length ?? 0;

  const inferenceCount =
    (analysis.digital_twin?.skills?.length ?? 0) +
    (analysis.digital_twin?.traits?.length ?? 0) +
    (analysis.digital_twin?.interests?.length ?? 0);

  // Since our API doesn't yet return metadata,
  // estimate connected profiles from available input.
  const connectedProfiles = [
    analysis.inputs?.github,
    analysis.inputs?.linkedin,
    analysis.inputs?.portfolio,
    analysis.inputs?.hasResume && "Resume",
  ].filter(Boolean).length;

  const stats = [
    {
      title: "Exposure Score",
      value: score.toString(),
      subtitle:
        score >= 75
          ? "High Exposure"
          : score >= 50
            ? "Moderate"
            : "Low Exposure",
      icon: ShieldCheck,
      color: "text-cyan-400",
    },
    {
      title: "Risk Signals",
      value: riskCount.toString(),
      subtitle:
        riskCount > 5
          ? "Needs Attention"
          : riskCount > 0
            ? "Some Risks"
            : "Secure",
      icon: TriangleAlert,
      color: "text-orange-400",
    },
    {
      title: "AI Inferences",
      value: inferenceCount.toString(),
      subtitle: "Generated",
      icon: BrainCircuit,
      color: "text-violet-400",
    },
    {
      title: "Connected Profiles",
      value: connectedProfiles.toString(),
      subtitle:
        connectedProfiles === 0 ? "None" : `${connectedProfiles} Connected`,
      icon: Globe,
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <Fade key={item.title} delay={index * 0.1}>
            <GlassCard className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-zinc-500">{item.title}</p>

                  <h2 className="mt-3 text-4xl font-bold">{item.value}</h2>

                  <p className="mt-2 text-sm text-zinc-400">{item.subtitle}</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-3">
                  <Icon className={item.color} size={22} />
                </div>
              </div>
            </GlassCard>
          </Fade>
        );
      })}
    </section>
  );
}

"use client";

import { Clock3, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface TimelineProps {
  analysis: any;
}

export default function Timeline({ analysis }: TimelineProps) {
  const events = [
    {
      title: "Profiles Submitted",
      description: "Mirage received your public profile information.",
    },
    {
      title: "AI Digital Twin Generated",
      description: `${analysis.digital_twin?.skills?.length ?? 0} skills and ${
        analysis.digital_twin?.traits?.length ?? 0
      } traits inferred.`,
    },
    {
      title: "Recruiter Analysis Complete",
      description: `${
        analysis.recruiter?.strengths?.length ?? 0
      } strengths identified.`,
    },
    {
      title: "Privacy Assessment Complete",
      description: `${
        analysis.privacy?.issues?.length ?? 0
      } privacy issues detected.`,
    },
    {
      title: "Exposure Report Generated",
      description: `Overall exposure score: ${analysis.score ?? 0}/100.`,
    },
  ];

  return (
    <GlassCard className="p-8 h-full">
      <div className="flex items-center gap-3">
        <Clock3 className="text-cyan-400" />

        <div>
          <h2 className="text-2xl font-bold">Analysis Timeline</h2>

          <p className="text-sm text-zinc-400">
            How Mirage processed your digital footprint.
          </p>
        </div>
      </div>

      <div className="relative mt-10 ml-3 border-l border-white/10">
        {events.map((event, index) => (
          <div key={index} className="relative mb-10 pl-8">
            <div className="absolute -left-[11px] top-1 rounded-full bg-[#09090B] p-1">
              <CheckCircle2 size={16} className="text-cyan-400" />
            </div>

            <h3 className="font-medium">{event.title}</h3>

            <p className="mt-2 text-sm text-zinc-500">{event.description}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

"use client";

import { BrainCircuit, Sparkles } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface DigitalTwinProps {
  analysis: any;
}

export default function DigitalTwin({ analysis }: DigitalTwinProps) {
  const twin = analysis.digital_twin ?? {};

  return (
    <GlassCard className="h-full p-8">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-violet-500/10 p-3">
          <BrainCircuit className="text-violet-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">AI Digital Twin</h2>

          <p className="text-sm text-zinc-400">
            AI-generated inferences, not verified facts.
          </p>
        </div>
      </div>

      <Section title="Likely Skills" items={twin.skills ?? []} />

      <Section title="Interests" items={twin.interests ?? []} />

      <Section title="Personality Signals" items={twin.traits ?? []} />

      <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-violet-400" />

          <span className="font-medium">AI Summary</span>
        </div>

        <p className="mt-3 leading-7 text-zinc-300">
          {twin.summary ?? "No summary generated."}
        </p>
      </div>
    </GlassCard>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 font-semibold">{title}</h3>

      {items.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">Nothing detected.</p>
      )}
    </div>
  );
}

"use client";

import GlassCard from "@/components/common/GlassCard";
import Progress from "@/components/common/Progress";
import ScoreRing from "./ScoreRing";

interface ExposureCardProps {
  analysis: any;
}

export default function ExposureCard({ analysis }: ExposureCardProps) {
  const score = analysis.score ?? 0;
  const risks = analysis.attacker?.risks ?? [];

  const exposureText =
    score >= 80
      ? "Your online footprint is highly exposed. A large amount of public information can be inferred from your digital presence."
      : score >= 60
        ? "Your online footprint is moderately exposed. Several public signals allow AI systems to infer information about your profile."
        : "Your digital footprint is relatively private, though there are still some publicly visible signals.";

  return (
    <GlassCard className="p-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <ScoreRing score={score} />

        <div>
          <h2 className="text-3xl font-bold">Exposure Overview</h2>

          <p className="mt-3 text-zinc-400">{exposureText}</p>

          <div className="mt-8">
            <Progress value={score} />
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">Top Risk Signals</h3>

            <div className="mt-4 space-y-3">
              {risks.length > 0 ? (
                risks.map((risk: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <span>{risk}</span>

                    <span className="text-orange-400">Medium</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-zinc-500">
                  No major risk signals detected.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

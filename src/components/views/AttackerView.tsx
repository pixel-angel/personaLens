"use client";

import { TriangleAlert, Eye } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface AttackerViewProps {
  analysis: any;
}

export default function AttackerView({ analysis }: AttackerViewProps) {
  const attacker = analysis.attacker ?? {};

  const visibleInformation = attacker.visible_information ?? [];
  const risks = attacker.risks ?? [];

  return (
    <GlassCard className="h-full p-8">
      <div className="flex items-center gap-3">
        <TriangleAlert className="text-orange-400" />

        <div>
          <h2 className="text-2xl font-bold">Exposure View</h2>

          <p className="text-sm text-zinc-400">
            Educational overview of what someone could infer from publicly
            available information.
          </p>
        </div>
      </div>

      {visibleInformation.length > 0 && (
        <>
          <div className="mt-8 flex items-center gap-2">
            <Eye size={18} className="text-cyan-400" />
            <h3 className="font-semibold">Publicly Visible Information</h3>
          </div>

          <div className="mt-4 space-y-3">
            {visibleInformation.map((item: string) => (
              <div
                key={item}
                className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </>
      )}

      {risks.length > 0 && (
        <>
          <div className="mt-8 flex items-center gap-2">
            <TriangleAlert size={18} className="text-orange-400" />
            <h3 className="font-semibold">Potential Exposure Risks</h3>
          </div>

          <div className="mt-4 space-y-3">
            {risks.map((risk: string) => (
              <div
                key={risk}
                className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4"
              >
                {risk}
              </div>
            ))}
          </div>
        </>
      )}

      {visibleInformation.length === 0 && risks.length === 0 && (
        <p className="mt-8 text-sm text-zinc-500">
          No exposure insights available.
        </p>
      )}
    </GlassCard>
  );
}

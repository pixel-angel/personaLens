"use client";

import GlassCard from "@/components/common/GlassCard";
import { CheckCircle2 } from "lucide-react";

interface Props {
  analysis: any;
}

export default function ActionPlan({ analysis }: Props) {
  const actions = analysis.action_plan ?? [];

  return (
    <GlassCard className="p-8">
      <h2 className="text-2xl font-bold">AI Action Plan</h2>

      <p className="mt-2 text-zinc-400">
        Prioritized recommendations to improve your digital footprint.
      </p>

      <div className="mt-8 space-y-5">
        {actions.length === 0 && (
          <p className="text-zinc-500">No recommendations available.</p>
        )}

        {actions.map((action: any, index: number) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{action.title}</h3>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  action.impact === "High"
                    ? "bg-red-500/20 text-red-300"
                    : action.impact === "Medium"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : "bg-green-500/20 text-green-300"
                }`}
              >
                {action.impact}
              </span>
            </div>

            <p className="mt-3 text-sm text-zinc-400">{action.description}</p>

            <div className="mt-5 flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={18} />
              Recommended by Mirage AI
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

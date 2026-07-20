"use client";

import { ShieldCheck, CircleAlert, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface PrivacyViewProps {
  analysis: any;
}

export default function PrivacyView({ analysis }: PrivacyViewProps) {
  const privacy = analysis.privacy ?? {};

  const issues = privacy.issues ?? [];
  const recommendations = privacy.recommendations ?? [];

  return (
    <GlassCard className="h-full p-8">
      <div className="flex items-center gap-3">
        <ShieldCheck className="text-violet-400" />

        <div>
          <h2 className="text-2xl font-bold">Privacy Expert</h2>

          <p className="text-sm text-zinc-400">
            Personalized privacy observations and recommendations.
          </p>
        </div>
      </div>

      <div className="mt-8">
        {issues.length > 0 && (
          <>
            <h3 className="mb-4 font-semibold text-red-300">Privacy Issues</h3>

            <div className="space-y-4">
              {issues.map((issue: string) => (
                <Item key={issue} title={issue} good={false} />
              ))}
            </div>
          </>
        )}

        {recommendations.length > 0 && (
          <>
            <h3 className="mb-4 mt-8 font-semibold text-green-300">
              Recommendations
            </h3>

            <div className="space-y-4">
              {recommendations.map((rec: string) => (
                <Item key={rec} title={rec} good />
              ))}
            </div>
          </>
        )}

        {issues.length === 0 && recommendations.length === 0 && (
          <p className="text-sm text-zinc-500">
            No privacy insights available.
          </p>
        )}
      </div>
    </GlassCard>
  );
}

function Item({ title, good }: { title: string; good: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
      <span>{title}</span>

      {good ? (
        <CheckCircle2 className="text-green-400" size={18} />
      ) : (
        <CircleAlert className="text-orange-400" size={18} />
      )}
    </div>
  );
}

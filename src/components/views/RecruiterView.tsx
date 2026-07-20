"use client";

import { Briefcase, CheckCircle2, CircleAlert } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

interface RecruiterViewProps {
  analysis: any;
}

export default function RecruiterView({ analysis }: RecruiterViewProps) {
  const recruiter = analysis.recruiter ?? {};

  const strengths = recruiter.strengths ?? [];
  const missing = recruiter.missing ?? [];

  return (
    <GlassCard className="p-8 h-full">
      <div className="flex items-center gap-3">
        <Briefcase className="text-cyan-400" />

        <div>
          <h2 className="text-2xl font-bold">Recruiter View</h2>

          <p className="text-sm text-zinc-400">
            How your profile may appear to potential employers.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {strengths.map((item: string) => (
          <Item key={item} title={item} status="Strength" good />
        ))}

        {missing.map((item: string) => (
          <Item key={item} title={item} status="Improve" />
        ))}

        {strengths.length === 0 && missing.length === 0 && (
          <p className="text-sm text-zinc-500">
            No recruiter insights available.
          </p>
        )}
      </div>
    </GlassCard>
  );
}

function Item({
  title,
  status,
  good = false,
}: {
  title: string;
  status: string;
  good?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
      <span>{title}</span>

      <div className="flex items-center gap-2">
        {good ? (
          <CheckCircle2 className="text-green-400" size={18} />
        ) : (
          <CircleAlert className="text-orange-400" size={18} />
        )}

        <span>{status}</span>
      </div>
    </div>
  );
}

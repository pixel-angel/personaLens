"use client";

import { useEffect, useState } from "react";

import StatsGrid from "@/components/dashboard/StatsGrid";
import ExposureCard from "@/components/dashboard/ExposureCard";
import Timeline from "@/components/dashboard/Timeline";
import ActionPlan from "@/components/dashboard/ActionPlan";

import DigitalTwin from "@/components/views/DigitalTwin";
import RecruiterView from "@/components/views/RecruiterView";
import PrivacyView from "@/components/views/PrivacyView";
import AttackerView from "@/components/views/AttackerView";

import FootprintGraph from "@/components/graph/FootprintGraph";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [analysis, setAnalysis] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const stored = sessionStorage.getItem("analysis");

    if (!stored) {
      router.replace("/analyze");
      return;
    }

    setAnalysis(JSON.parse(stored));
  }, [router]);

  if (!analysis) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
        Loading analysis...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090B] px-6 pb-20 pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-10">
          <h1 className="text-5xl font-black tracking-tight">
            Analysis Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-300">
            Here's how different perspectives interpret your online presence.
          </p>
        </div>

        <StatsGrid analysis={analysis} />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ExposureCard analysis={analysis} />

          <DigitalTwin analysis={analysis} />

          <RecruiterView analysis={analysis} />

          <PrivacyView analysis={analysis} />

          <AttackerView analysis={analysis} />

          <Timeline analysis={analysis} />
        </div>

        <div className="mt-8">
          <FootprintGraph analysis={analysis} />
          <div className="mt-8">
            <ActionPlan analysis={analysis} />
          </div>
        </div>
      </div>
    </main>
  );
}

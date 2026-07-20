"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GitBranchIcon,
  BrainCircuit,
  Briefcase,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Reading GitHub repositories",
    icon: GitBranchIcon,
  },
  {
    title: "Analyzing public signals",
    icon: Sparkles,
  },
  {
    title: "Building AI Digital Twin",
    icon: BrainCircuit,
  },
  {
    title: "Simulating Recruiter View",
    icon: Briefcase,
  },
  {
    title: "Evaluating Privacy Risks",
    icon: ShieldCheck,
  },
];


export default function AnalysisLoader() {
    const router = useRouter();

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (active >= steps.length) {
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 1000);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setActive((prev) => prev + 1);
    }, 1800);

    return () => clearTimeout(timer);
  }, [active, router]);

  return (
    <main className="flex min-h-screen items-center justify-center  px-6">

      <div className="w-full max-w-3xl">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-14 text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm  text-violet-300">

            <Sparkles size={16} />

            Mirage AI

          </div>

          <h1 className="mt-6 text-5xl font-black text-white">

            Building Your
            <br />

            Digital Identity

          </h1>

          <p className="mt-6 text-zinc-400">

            This usually takes only a few seconds.

          </p>

        </motion.div>

        <div className="space-y-5">

          {steps.map((step, index) => {

            const Icon = step.icon;

            const completed = index < active;
            const current = index === active;

            return (
              <motion.div
                key={step.title}
                layout
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`rounded-xl p-3 ${
                      completed || current
                        ? "bg-violet-500/20"
                        : "bg-white/5"
                    }`}
                  >
                    <Icon
                      className={
                        completed || current
                          ? "text-violet-300"
                          : "text-zinc-500"
                      }
                    />
                  </div>

                  <div>

                    <h3 className="font-medium text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm text-zinc-500">

                      {completed
                        ? "Completed"
                        : current
                        ? "Processing..."
                        : "Waiting..."}

                    </p>

                  </div>

                </div>

                {completed ? (
                  <CheckCircle2 className="text-green-400" />
                ) : current ? (
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      repeat: Infinity,
                      ease: "linear",
                      duration: 1.2,
                    }}
                    className="h-6 w-6 rounded-full border-2 border-violet-500 border-t-transparent"
                  />
                ) : (
                  <div className="h-6 w-6 rounded-full border border-white/10" />
                )}

              </motion.div>
            );

          })}

        </div>

        <div className="mt-10">

          <div className="h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              animate={{
                width: `${(active / steps.length) * 100}%`,
              }}
              transition={{
                duration: 0.6,
              }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
            />

          </div>

          <div className="mt-4 flex justify-between text-sm text-zinc-500">

            <span>
              AI Analysis Running
            </span>

            <span>
              {Math.round((active / steps.length) * 100)}%
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}
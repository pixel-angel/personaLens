"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GitBranchIcon,
  User,
  Globe,
  Upload,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import GlassCard from "@/components/common/GlassCard";
import Fade from "@/components/animations/Fade";

interface UploadFormProps {
  onAnalyze: (data: any) => void;
}

export default function UploadForm({ onAnalyze }: UploadFormProps) {
  const router = useRouter();

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!github.trim() && !linkedin.trim() && !portfolio.trim()) {
      alert("Please provide at least one profile.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          github,
          linkedin,
          portfolio,
        }),
      });

      if (!res.ok) {
        throw new Error("Analysis failed");
      }

      const data = await res.json();

      const analysis = {
        ...data,
        inputs: {
          github,
          linkedin,
          portfolio,
        },
      };

      localStorage.setItem("mirage-analysis", JSON.stringify(analysis));

      onAnalyze(analysis);

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong while analyzing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#09090B] via-[#0C0C12] to-[#09090B] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Fade>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              AI Analysis
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight">
              Build Your
              <br />
              Digital Footprint
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Share your public profiles and let Mirage reveal how your online
              presence could be interpreted from different perspectives.
            </p>
          </div>
        </Fade>

        <GlassCard className="p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <InputField
              icon={<GitBranchIcon size={18} />}
              label="GitHub Profile"
              placeholder="https://github.com/octocat"
              value={github}
              onChange={setGithub}
            />

            <InputField
              icon={<User size={18} />}
              label="LinkedIn URL"
              placeholder="https://linkedin.com/in/yourname"
              value={linkedin}
              onChange={setLinkedin}
            />

            <InputField
              icon={<Globe size={18} />}
              label="Portfolio Website"
              placeholder="https://yourportfolio.dev"
              value={portfolio}
              onChange={setPortfolio}
            />
          </div>

          {/* Resume Upload (Coming Soon) */}

          <div className="mt-10 rounded-2xl border-2 border-dashed border-white/10 p-10 text-center transition hover:border-violet-500/30">
            <Upload className="mx-auto mb-4 text-zinc-500" size={30} />

            <p className="font-medium">Upload Resume (Optional)</p>

            <p className="mt-2 text-sm text-zinc-500">
              PDF • DOCX • Coming Soon
            </p>

            {/* <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              onChange={(e) => {
                if (e.target.files?.length) {
                  setResume(e.target.files[0]);
                }
              }}
            /> */}

            <label
              htmlFor="resume"
              className="mt-6 inline-block cursor-pointer rounded-xl bg-white/5 px-5 py-3 transition hover:bg-white/10"
            >
              Coming soon
            </label>

            {/* {resume && (
              <p className="mt-4 text-sm text-violet-300">✓ {resume.name}</p>
            )} */}
          </div>

          <button
            disabled={loading}
            onClick={handleAnalyze}
            className="group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 py-4 text-lg font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Analyzing..."
            ) : (
              <>
                Analyze My Footprint
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </>
            )}
          </button>
        </GlassCard>
      </div>
    </main>
  );
}

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  icon: React.ReactNode;
  onChange: (value: string) => void;
}

function InputField({ label, placeholder, value, icon, onChange }: InputProps) {
  return (
    <div>
      <label className="mb-3 flex items-center gap-2 text-sm text-zinc-300">
        {icon}
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
  );
}

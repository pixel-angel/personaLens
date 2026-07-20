"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Fade from "@/components/animations/Fade";
import GlassCard from "@/components/common/GlassCard";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28">
      <Fade>
        <GlassCard className="relative overflow-hidden px-8 py-16 text-center md:px-16">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Ready to see
              {/* <br /> */}
              what the Internet remembers?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Generate your AI Digital Twin, measure your exposure, and
              understand how your online identity is perceived.
            </p>

            <Link
              href="/analyze"
              className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]"
            >
              Start Analysis
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </GlassCard>
      </Fade>
    </section>
  );
}

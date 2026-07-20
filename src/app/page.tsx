import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white bg-[#09090B]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute  inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[160px]" />
        <div className="absolute right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
      </div>

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <CTA />

      <Footer />
    </main>
  );
}

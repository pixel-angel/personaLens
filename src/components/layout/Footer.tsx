import Link from "next/link";
import { GitBranchIcon, Sparkles, ScanFace } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 p-1">
              <ScanFace size={20} />
            </div>

            <h2 className="text-xl font-bold">PersonaLens</h2>
          </div>

          <p className="mt-3 text-sm text-zinc-500">
            The Internet's Memory of You.
          </p>
        </div>

        <div className="flex gap-8 text-zinc-400 cursor-pointer">
          <Link href="#features">Features</Link>

          <Link href="#how-it-works">How It Works</Link>

          <Link href="/analyze">Analyze</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/"
            target="_blank"
            className="rounded-xl border border-white/10 p-3 hover:bg-white/5 cursor-pointer"
          >
            <GitBranchIcon size={18} />
          </Link>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Sparkles size={16} />
            Alisha Singh
          </div>
        </div>
      </div>
    </footer>
  );
}

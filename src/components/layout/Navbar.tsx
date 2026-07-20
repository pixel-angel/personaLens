"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X,ScanFace, GitBranchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How it Works",
    href: "#how-it-works",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#09090B]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 shadow-lg shadow-violet-500/20">
              <span className="text-lg font-bold text-white"><ScanFace/></span>
            </div>

            <div>
              <p className="text-lg font-semibold tracking-wide">
                PersonaLens
              </p>

              <p className="text-xs text-zinc-400">
                The Internet's Memory of You
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="https://github.com/"
            target="_blank"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:border-violet-500/40 hover:bg-white/10 hover:text-white"
          >
            <GitBranchIcon size={18} />
          </Link>

          <Link href="/analyze">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-medium shadow-xl shadow-violet-500/20 transition"
            >
            Start Analysis
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
              />
          </motion.button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[#09090B]/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300"
              >
                {item.name}
              </Link>
            ))}

            <button className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 py-3 font-medium">
              Start Analysis
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050709] text-white">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />

        <div className="absolute left-1/2 top-[65%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#B8F18D]/20 blur-[180px]" />

        <div className="absolute left-[10%] top-[30%] h-24 w-[1px] bg-[#B8F18D]/30" />
        <div className="absolute left-[10%] top-[35%] h-[1px] w-24 bg-[#B8F18D]/30" />

        <div className="absolute right-[15%] top-[55%] h-24 w-[1px] bg-[#B8F18D]/30" />
        <div className="absolute right-[15%] top-[60%] h-[1px] w-24 bg-[#B8F18D]/30" />
      </div>

      {/* Navbar */}

      {/* Hero */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3"
        >
          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
            New
          </span>

          <span className="text-white/80">
            Trusted Digital Agency
          </span>

          <ArrowRight size={16} />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
max-w-[850px]
mx-auto
text-center
font-semibold
leading-[1.05]
tracking-[-0.04em]
text-[clamp(3.5rem,6vw,6.5rem)]
"
        >
          Building Digital
          <br />
          Experiences That
          <br />
          Accelerate
          <span className="text-[#a2fa8e]">
            {" "}
            Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-8 max-w-2xl text-lg text-white/50"
        >
          Powering bold ideas with strategy,
          creativity and cutting-edge
          development.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="flex items-center gap-3 rounded-2xl bg-[#a2fa8e] px-8 py-4 font-semibold text-black">
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="flex items-center gap-3 rounded-2xl bg-white/10 px-8 py-4 font-semibold">
            <Play size={18} />
            Watch Demo
          </button>
        </motion.div>

        {/* Floating Cards */}
       </div>
    </section>
  );
}
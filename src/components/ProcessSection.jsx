"use client";
import SectionLabel from "./SectionLabel";
import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

import { motion } from "framer-motion";

const processes = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, and goals to create a clear roadmap.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We craft a winning digital strategy focused on growth, engagement, and conversions.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Using modern technologies, we build scalable, fast, and beautiful solutions.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and optimization, we deploy and support your product for success.",
  },
];

export default function ProcessSection() {
  const duplicatedCards = [...processes, ...processes];

  return (
    <section className="w-full py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-blackmd:p-12 lg:p-16">

          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-[150px]" />

          {/* Section Label */}
          <div className="relative z-10 mb-8 flex items-center gap-4">
          
           <SectionLabel
                           number="04"
                           label="Process"
                         />
          </div>

          {/* Heading */}
          <div className="relative z-10 mb-14">
           <h2
  className={`${spaceGrotesk.className}
  max-w-3xl
  text-white
  text-5xl
  md:text-7xl
  lg:text-[88px]
  font-semibold
  leading-[0.9]
  tracking-[-0.04em]`}
>
              Process that
              <br />
              powers success
            </h2>
          </div>

          {/* Scrolling Cards */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedCards.map((item, index) => (
                <motion.div
                  key={index}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    group
                    min-w-[280px]
                    md:min-w-[340px]
                    lg:min-w-[380px]
                    rounded-3xl
                    border
                    border-white/5
                    bg-zinc-800
                    p-8
                    text-white
                    transition-all
                    duration-500
                    hover:bg-[#a2fa8e]
                    hover:text-black
                  "
                >
                  <div className="mb-8 text-sm font-medium opacity-70">
                    {item.number}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-400 transition-colors duration-500 group-hover:text-black/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Line */}
          <div className="mt-12 h-[1px] w-full bg-white/10">
            <motion.div
              className="h-full bg-lime-400"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
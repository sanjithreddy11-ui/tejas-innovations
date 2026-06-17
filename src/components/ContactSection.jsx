"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
      <div className="absolute inset-0 overflow-hidden">
  <img
    src="/hand.png"
    alt="Background"
    className="
      absolute
      left-1/2
      top-1/2
      w-auto
      h-[120%]
      -translate-x-1/2
      -translate-y-1/2
      opacity-70
    "
  />
</div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            text-white
            leading-[0.95]
            tracking-tight
          "
        >
          Build Something
          <br />
          That Performs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="
            mt-8
            max-w-3xl
            mx-auto
            text-lg
            md:text-xl
            text-zinc-300
            leading-relaxed
          "
        >
          We partner with startups and growing businesses to create
          websites, brands, and products that perform.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-2xl
            bg-[#B8F18D]
            text-black
            font-semibold
            hover:bg-zinc-200
            transition-all
          "
        >
          Let's Talk

          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            <ArrowRight size={16} />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
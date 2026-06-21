"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CTASection({ onConfigureClick }) {
  return (
    <section id="cta" className="relative px-6 md:px-12 lg:px-20 py-40 md:py-56 overflow-hidden">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A2FA8E]/[0.055] rounded-full blur-[200px] pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <span className="inline-block text-[11px] font-mono tracking-[0.22em] uppercase text-[#A2FA8E] mb-8">
            Let's Work Together
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading font-bold text-white leading-[1.05] tracking-tighter mb-8"
            style={{ fontSize: "clamp(2.6rem, 6vw, 6rem)" }}>
            Ready to build your
            <br />
            <span className="text-[#A2FA8E]" style={{ textShadow: "0 0 60px rgba(162,250,142,0.2)" }}>
              next project?
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/45 text-lg md:text-xl max-w-xl mx-auto mb-14 font-light leading-[1.8]">
            Tell us about your vision and we'll craft a tailored strategy to bring
            it to life. No templates, no shortcuts — just precision engineering.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <button
  onClick={(e) => {
    e.stopPropagation();
    onConfigureClick?.();
  }}
 className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#A2FA8E] text-[#050709] font-heading font-semibold text-base tracking-tight hover:bg-[#bafca9] transition-colors duration-300 hover:shadow-[0_0_60px_rgba(162,250,142,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A2FA8E] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050709]"
>
  Configure

  <ArrowRight
    size={18}
    className="transition-transform group-hover:translate-x-1"
  />
</button>
        </ScrollReveal>
      </div>
    </section>
  );
}
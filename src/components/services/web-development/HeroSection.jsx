"use client";
import React from "react";
import { motion } from "framer-motion";

const heroImage = "https://media.base44.com/images/public/6a372733e10a6203782dd768/a4ad86b87_generated_5412eeac.png";

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 md:px-12 lg:px-20 pt-36 md:pt-44 pb-24 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#A2FA8E]/[0.04] rounded-full blur-[200px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A2FA8E]/[0.03] rounded-full blur-[180px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-mono tracking-[0.2em] uppercase text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A2FA8E] animate-pulse" />
                Web Design & Development Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease }}
              className="font-heading font-black text-white leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(4rem, 7.5vw, 9rem)" }}
            >
              WEB
              <br />
              DESIGN &amp;
              <br />
              <span
                className="text-[#A2FA8E]"
                style={{ textShadow: "0 0 60px rgba(162,250,142,0.3)" }}
              >
                DEVELOP
                <br />
                MENT
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-10 text-white/55 text-lg md:text-xl leading-[1.75] font-light max-w-lg"
            >
              We design and develop modern, high-performance websites that help
              businesses establish a strong online presence, generate qualified
              leads, and increase conversions. Every website is built with a
              focus on speed, user experience, scalability, mobile
              responsiveness, and search engine visibility.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease }}
              className="mt-14 flex gap-12"
            >
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "4.9★", label: "Average Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-white/30 mt-1 font-medium tracking-widest uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative self-start"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-6 bg-[#A2FA8E]/[0.07] rounded-3xl blur-[80px] pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/[0.12]" />
                  <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
                  <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
                </div>
                <div className="flex-1 mx-6">
                  <div className="h-5 rounded bg-white/[0.04] border border-white/[0.05] flex items-center justify-center max-w-[180px] mx-auto">
                    <span className="text-[10px] text-white/20 font-mono tracking-wide">
                      tejas.agency
                    </span>
                  </div>
                </div>
              </div>
              <img
                src={heroImage}
                alt="Modern SaaS dashboard by Tejas Agency"
                className="w-full block"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
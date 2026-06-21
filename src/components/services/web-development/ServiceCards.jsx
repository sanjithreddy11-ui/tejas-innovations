import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Globe, LayoutDashboard, MousePointerClick, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Corporate and brand websites built for credibility, speed, and search performance — designed to convert visitors into customers.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",
    description:
      "Full-stack product interfaces with intuitive UX, scalable architecture, and real-time data visualization.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    description:
      "High-converting campaign pages with optimised load times, A/B testing frameworks, and persuasive design patterns.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Bespoke applications engineered for complex workflows — from internal tools to customer-facing platforms.",
  },
];

export default function ServiceCards({ onConfigureClick }) {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-5 mb-16">
            <span className="shrink-0 text-[11px] font-mono tracking-[0.22em] uppercase text-[#A2FA8E]">
              What We Build
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.1}>
              <Card svc={svc} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ svc, index }) {
  const Icon = svc.icon;
  return (
    <div className="group relative h-full p-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] hover:border-[#A2FA8E]/20 hover:bg-white/[0.045] transition-all duration-500 overflow-hidden">
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(162,250,142,0.06) 0%, transparent 70%)" }} />

      {/* Ghost number */}
      <span className="absolute top-4 right-5 text-[5.5rem] font-black text-white/[0.025] leading-none select-none font-heading">
        0{index + 1}
      </span>

      {/* Icon */}
      <div className="relative z-10 mb-7 w-11 h-11 rounded-xl bg-[#A2FA8E]/[0.08] flex items-center justify-center group-hover:bg-[#A2FA8E]/[0.14] transition-all duration-500">
        <Icon className="w-5 h-5 text-[#A2FA8E]" strokeWidth={1.5} />
      </div>

      <h3 className="relative z-10 font-heading text-base font-semibold text-white mb-3 leading-snug">
        {svc.title}
      </h3>
      <p className="relative z-10 text-white/45 text-sm leading-relaxed font-light">
        {svc.description}
      </p>
    </div>
  );
}
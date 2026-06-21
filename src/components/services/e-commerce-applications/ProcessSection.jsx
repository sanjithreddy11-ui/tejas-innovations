import React from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your business, audience, and goals. Through deep research and stakeholder interviews, we define the strategic foundation that drives every decision.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes evolve into high-fidelity prototypes. Every visual decision is validated against your brand identity, user psychology, and conversion objectives.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, performant code brings the design to life. We build with modern frameworks ensuring scalability, security, and exceptional loading speed.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Rigorous QA, performance optimisation, and deployment. Post-launch we provide analytics setup, monitoring, and ongoing technical support.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative px-6 md:px-12 lg:px-20 py-32 md:py-44 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#A2FA8E]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-5 mb-16">
            <span className="shrink-0 text-[11px] font-mono tracking-[0.22em] uppercase text-[#A2FA8E]">
              Our Process
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-20 max-w-2xl">
            From concept to launch,
            <br />
            <span className="text-white/25">every step is intentional.</span>
          </h2>
        </ScrollReveal>

        {/* Steps grid */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px"
            style={{ background: "linear-gradient(to right, rgba(162,250,142,0.25), rgba(255,255,255,0.05), transparent)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.12}>
                <StepBlock step={step} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepBlock({ step }) {
  return (
    <div className="group relative pt-16">
      {/* Timeline dot */}
      <div className="hidden lg:block absolute top-[3.15rem] left-0 w-2.5 h-2.5 rounded-full border-2 border-[#A2FA8E]/30 bg-[#050709] group-hover:border-[#A2FA8E] group-hover:shadow-[0_0_10px_rgba(162,250,142,0.35)] transition-all duration-500" />

      {/* Ghost number */}
      <span className="absolute top-0 left-0 text-[5.5rem] font-black text-white/[0.03] leading-none select-none font-heading">
        {step.number}
      </span>

      <div className="relative z-10">
        <span className="block text-[11px] font-mono text-[#A2FA8E]/50 tracking-[0.2em] mb-3">
          Step {step.number}
        </span>
        <h3 className="font-heading text-xl font-semibold text-white mb-4 leading-snug">
          {step.title}
        </h3>
        <p className="text-white/45 text-sm leading-[1.85] font-light">
          {step.description}
        </p>
      </div>
    </div>
  );
}
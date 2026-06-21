import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ServiceOverview() {
  return (
    <section id="services" className="relative px-6 md:px-12 lg:px-20 py-32 md:py-44 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#A2FA8E]/[0.03] rounded-full blur-[180px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Label + divider */}
        <ScrollReveal>
          <div className="flex items-center gap-5 mb-16">
            <span className="shrink-0 text-[11px] font-mono tracking-[0.22em] uppercase text-[#A2FA8E]">
              Our Approach
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Building AI voice 
              <br />
              experiences that
              <br />
              
              <span className="text-[#A2FA8E]">engage,convert,scale. </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-7 flex flex-col justify-center gap-8">
            <p className="text-white/55 text-lg md:text-xl leading-[1.8] font-light">
             We help businesses deploy human-like AI voice agents capable of
handling inbound and outbound conversations with speed, accuracy,
and consistency. Every interaction is designed to deliver value,
whether it's capturing leads, scheduling appointments, or providing
instant customer support.
            </p>
            <p className="text-white/35 text-base leading-[1.8] font-light">
              From strategy and conversation design to deployment and
optimization, we create voice automation systems that work around
the clock, improve efficiency, and enhance customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              {[" Voice Automation", "Lead Qualification", "Appointment Booking", "Customer Support"].map((tag) => (
                <span key={tag} className="flex items-center gap-2 text-sm text-white/35 font-medium">
                  <span className="w-1 h-1 rounded-full bg-[#A2FA8E]" />
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your business goals, target audience, competitors, and project requirements to create a solid strategic foundation before development begins.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We create wireframes, define features, establish user flows, and map the technical architecture required for your project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our team crafts visually stunning interfaces that align with your brand while delivering an intuitive user experience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Using modern frameworks and best practices, we build scalable, fast, and secure digital products.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Every feature is rigorously tested across devices, browsers, and screen sizes to ensure flawless performance.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "After deployment we optimize, monitor, and provide support to ensure long-term success.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionLabel
          number="06"
          label="Process"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-6xl mb-6"
        >
          How We{" "}
          <span className="gradient-text">
            Work
          </span>
        </motion.h2>

        <p className="text-steel text-lg max-w-3xl mb-20">
          A systematic, transparent approach from concept to launch —
          keeping you informed at every stage.
        </p>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32 h-fit">

            <div className="space-y-6">

              {processSteps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActive(index)}
                  className="block text-left group"
                >
                  <div
                    className={`flex items-center gap-4 transition-all duration-300 ${
                      active === index
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        active === index
                          ? "bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                          : "bg-white/20"
                      }`}
                    />

                    <span className="text-xl md:text-2xl font-semibold">
                      {step.number} {step.title}
                    </span>
                  </div>
                </button>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-24">

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.8 }}
                onViewportEnter={() => setActive(index)}
                className="min-h-[70vh] flex items-center"
              >
                <div className="relative">

                  {/* Large Background Number */}
                  <div className="absolute -top-20 left-0 text-[120px] md:text-[180px] font-black text-white/[0.03] select-none">
                    {step.number}
                  </div>

                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <h3 className="text-4xl md:text-6xl font-bold mb-8">
                      <span className="gradient-text">
                        {step.title}
                      </span>
                    </h3>

                    <p className="text-steel text-lg md:text-xl leading-relaxed max-w-2xl">
                      {step.description}
                    </p>

                    <div className="mt-10 h-px w-full bg-gradient-to-r from-purple-500/50 via-blue-500/20 to-transparent" />
                  </motion.div>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
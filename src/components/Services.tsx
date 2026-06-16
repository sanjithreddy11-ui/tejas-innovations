"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectConfigModal from "./ProjectConfigModal";
import { ArrowUpRight } from "lucide-react";
const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Designing and building high-performance websites that combine exceptional user experience with modern technology.",
  },
  {
    number: "02",
    title: "AI Solutions",
    description:
      "Custom AI-powered solutions that streamline operations and enhance customer experiences.",
  },
  {
    number: "03",
    title: "AI Voice Agents",
    description:
      "Human-like AI calling systems that instantly engage, qualify, and nurture leads.",
  },
  {
    number: "04",
    title: "QR Ordering Systems",
    description:
      "Digital QR-based ordering systems for restaurants, cafés, cloud kitchens, and hospitality businesses.",
  },
  {
    number: "05",
    title: "SEO & Growth",
    description:
      "Strategies focused on improving visibility, traffic, and long-term business growth.",
  },
  {
    number: "06",
    title: "Business Automation",
    description:
      "Automating workflows, lead management, CRM processes, notifications, and operational tasks.",
  },
];

export default function Services() {
    const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  return (
    <>
    <section
  id="services"
  className="relative bg-[#f3f4f6] py-28 md:py-15"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
        Services
      </p>

      <h2 className="max-w-5xl text-4xl font-light leading-[1.05] tracking-tight text-zinc-950 md:text-6xl lg:text-5xl">
        Digital systems engineered
        <span className="block text-zinc-400">
          for growth, automation, and scale.
        </span>
      </h2>
    </motion.div>

    {/* Grid */}
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -8,
          }}
          className="group flex min-h-[420px] flex-col rounded-[32px] border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          {/* Number */}
          <span className="text-sm font-medium tracking-[0.25em] text-zinc-400">
            {service.number}
          </span>

          {/* Content */}
          <div className="mt-10 flex-1">
            <h3 className="mb-6 text-3xl font-light leading-tight text-zinc-950">
              {service.title}
            </h3>

            <p className="text-base leading-relaxed text-zinc-600">
              {service.description}
            </p>
          </div>

          {/* Configure Button */}
         <button
  onClick={() => setIsConfiguratorOpen(true)}
  className="mt-10 flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:border-[#C7F36B] hover:bg-[#C7F36B] hover:text-black"
>
  Configure
  <ArrowUpRight size={16} />
</button>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<ProjectConfigModal
      isOpen={isConfiguratorOpen}
      onClose={() => setIsConfiguratorOpen(false)}
    />
    </>

  );
}
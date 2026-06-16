"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ServiceCarousel from "./ServiceCarousel";

import {
Globe,
UtensilsCrossed,
QrCode,
CalendarCheck,
Megaphone,
Search,
Wrench,
Code2,
} from "lucide-react";

const services = [
{
icon: Globe,
title: "Web Design & Development",
description:
"Designing and building high-performance websites that combine exceptional user experience with modern technology.",
},
{
icon: UtensilsCrossed,
title: "AI Solutions",
description:
"Custom AI-powered solutions that streamline operations and enhance customer experiences.",
},
{
icon: QrCode,
title: "QR Ordering Systems",
description:
"Customers scan QR codes, browse digital menus, place orders from their table, and make payments — all digitally.",
},
{
icon: CalendarCheck,
title: "AI Voice Agents",
description:
"Human-like AI calling systems that instantly engage, qualify, and nurture leads.",
},
{
icon: Megaphone,
title: "Business Automation",
description:
"Automating workflows, lead management, CRM processes, notifications, and operational tasks.",
},
{
icon: Search,
title: "SEO Optimization",
description:
"Improve your search engine visibility with on-page SEO, technical audits, and content optimization strategies.",
},
];

export default function ServicesSection({
onConfigureClick,
}) {
return ( <section
   id="services"
   className="relative py-24 sm:py-32"
 >
{/* Ambient Glow */} <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[160px]" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <SectionLabel
      number="02"
      label="Services"
    />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
    >
      What We Build
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-zinc-400 text-lg max-w-2xl mb-16"
    >
      Modular digital solutions engineered for
      growth. Every service is designed to help
      businesses scale, automate workflows, and
      create better customer experiences.
    </motion.p>

    <ServiceCarousel
      services={services}
      onConfigureClick={onConfigureClick}
    />
  </div>
</section>

);
}

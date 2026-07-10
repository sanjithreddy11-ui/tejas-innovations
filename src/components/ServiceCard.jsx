"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({
service,
index,
onConfigureClick,
}) {
const Icon = service.icon;

return (
<motion.div
initial={{ opacity: 0, y: 25 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.08 }}
whileHover={{ y: -6 }}
className="group
rounded-[28px]
border border-white/15
bg-white/5
backdrop-blur-2xl
p-6
transition-all
duration-500
shadow-[0_10px_40px_rgba(0,0,0,0.35)]
hover:-translate-y-2
hover:border-white/30
hover:bg-white/10
hover:shadow-[0_0_60px_rgba(56,189,248,0.25)]
"
> <div className="bg-red-500/20
backdrop-blur-3xl
border
border-white/30
"> <Icon className="w-7 h-7 text-white" /> </div>
  <h3 className="text-xl font-semibold text-white mb-3">
    {service.title}
  </h3>

  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
    {service.description}
  </p>

  <button
  title="Next slide"
    onClick={onConfigureClick}
    className="mt-auto w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-all duration-300"
  >
    Configure 
  </button>
</motion.div>
);
}

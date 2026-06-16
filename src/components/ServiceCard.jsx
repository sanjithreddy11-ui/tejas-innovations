"use client";

import { motion } from "framer-motion";

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
className="rounded-3xl border border-white/10 bg-[#0B0F14] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
> <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5"> <Icon className="w-7 h-7 text-white" /> </div>
  <h3 className="text-xl font-semibold text-white mb-3">
    {service.title}
  </h3>

  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
    {service.description}
  </p>

  <button
    onClick={onConfigureClick}
    className="mt-auto w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-all duration-300"
  >
    Configure Project
  </button>
</motion.div>
);
}

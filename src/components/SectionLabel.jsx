import { motion } from "framer-motion";

export default function SectionLabel({ number, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-6"
    >
      

      <div className="w-12 h-px bg-zinc-700" />

      <span className="uppercase tracking-wider text-sm text-gray-400">
        {label}
      </span>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function CounterStat({ stat, index }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + index * 0.1 }}
      className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <Icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />

      <h3 className="text-xl font-bold text-white">
        {stat.value}
      </h3>

      <p className="text-sm text-gray-400 mt-2">
        {stat.label}
      </p>
    </motion.div>
  );
}
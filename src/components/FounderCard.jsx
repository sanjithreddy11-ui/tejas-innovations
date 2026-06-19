"use client";

import { motion } from "framer-motion";
import { Globe, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function FounderCard({ founder, index }) {
const [hovered, setHovered] = useState(false);

const patterns = [
"radial-gradient(circle at 30% 40%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.03) 0%, transparent 50%)",
"radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)",
];

return (
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.15 }}
whileHover={{ y: -6 }}
className={`rounded-3xl border bg-[#0B0F14] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500 ${
        hovered
          ? "border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          : "border-white/10"
      }`}
>
{/* Top Visual */}
<div
className="relative w-full overflow-hidden cursor-pointer"
style={{ height: "260px" }}
onMouseEnter={() => setHovered(true)}
onMouseLeave={() => setHovered(false)}
>
{/* Background */}
<div
className="absolute inset-0"
style={{
background: patterns[index % patterns.length],
backgroundColor: "#0B0F14",
}}
/>

```
    {/* Grid */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    />

    {/* Initials */}
    <div
      className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
        hovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
      }`}
    >
      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/15 flex items-center justify-center backdrop-blur-sm">
        <span className="text-3xl font-bold tracking-wide text-white">
          {founder.name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
    </div>

    {/* Hover Overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-zinc-900/85 to-zinc-800/50 transition-all duration-500 ${
        hovered ? "opacity-100" : "opacity-0"
      }`}
    />

    {/* Social Links */}
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-5 transition-all duration-500 ${
        hovered
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      <p className="text-white/80 text-xs font-semibold tracking-[0.35em] uppercase">
        Connect
      </p>

      <div className="flex items-center gap-4">
        <a
        aria-label="GitHub Profile"
          href={founder.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <Globe size={18} />
        </a>

        <a
        aria-label="GitHub Profile"
          href={founder.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <FileText size={18} />
        </a>

        <a
        aria-label="GitHub Profile"
          href={founder.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <FaGithub size={18} />
        </a>

        <a
        aria-label="GitHub Profile"
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="p-7 sm:p-8 flex flex-col flex-1">
    <div className="flex flex-wrap gap-2 mb-5">
      {founder.roles?.map((role, i) => (
        <span
          key={i}
          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-medium"
        >
          {role}
        </span>
      ))}
    </div>

    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
      {founder.name}
    </h3>

    <p className="text-zinc-400 text-sm leading-relaxed">
      {founder.bio}
    </p>
  </div>
</motion.div>
);56
}

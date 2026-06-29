"use client";

import { motion } from "framer-motion";
import { Globe, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function FounderCard({ founder, index }) {
  const initials = founder.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-3xl border border-white/10 bg-[#0B0F14] overflow-hidden"
    >
      {/* Background texture - soft glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 12% 15%, rgba(162,250,142,0.07) 0%, transparent 45%), radial-gradient(circle at 92% 85%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 10%, rgba(255,255,255,0.03) 0%, transparent 40%)",
        }}
      />

      {/* Faint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      <div className="relative grid md:grid-cols-[1.4fr_0.6fr] gap-10 lg:gap-16 items-center p-8 sm:p-10 lg:p-14">
      {/* Left: heading + text content */}
      <div className="flex flex-col">
        <p
          className="text-sm font-mono tracking-widest mb-4"
          style={{ color: "#a2fa8e" }}
        >
           MEET THE FOUNDER
        </p>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 text-white">
         Building the future of business
          <br />
          <span style={{ color: "#a2fa8e" }}>through technology.</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {founder.roles?.map((role, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-medium"
            >
              {role}
            </span>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
          {founder.name}
        </h3>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          {founder.bio}
        </p>

        {founder.highlights?.length > 0 && (
          <ul className="space-y-3 mb-8">
            {founder.highlights.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: "#a2fa8e" }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Social / contact links - always visible */}
        <div className="flex items-center gap-4">
          {founder.portfolio && (
            <a
              aria-label="Portfolio"
              href={founder.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Globe size={17} />
            </a>
          )}

          {founder.resume && (
            <a
              aria-label="Resume"
              href={founder.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FileText size={17} />
            </a>
          )}

          {founder.github && (
            <a
              aria-label="GitHub Profile"
              href={founder.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaGithub size={17} />
            </a>
          )}

          {founder.linkedin && (
            <a
              aria-label="LinkedIn Profile"
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaLinkedin size={17} />
            </a>
          )}
        </div>
      </div>

      {/* Right: photo - no card/border wrapper around the whole section, just the image itself framed */}
      <div className="flex flex-col items-center md:items-end gap-4 mx-auto md:mx-0">
        <div className="relative w-48 sm:w-56 md:w-full md:max-w-[260px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {founder.image ? (
            <img
              src={founder.image}
              alt={founder.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
          ) : null}

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ display: founder.image ? "none" : "flex" }}
          >
            <span className="text-3xl font-bold tracking-wide text-white">
              {initials}
            </span>
          </div>

          {/* name caption strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-3 py-2">
            <p className="text-white text-sm font-semibold text-center truncate">
              {founder.name}
            </p>
          </div>
        </div>

        {founder.roles?.[0] && (
          <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-zinc-200 text-xs sm:text-sm font-mono">
            &lt; {founder.roles[0]} /&gt;
          </span>
        )}
      </div>
      </div>
    </motion.div>
  );
}
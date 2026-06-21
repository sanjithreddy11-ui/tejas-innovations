"use client";

import { useEffect, useState } from "react";
import type { BlogSection } from "@/lib/blogData";

export default function PostSidebar({ sections }: { sections: BlogSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="space-y-6">
      {/* CTA card — gray-800 block, green kept as the accent */}
      <div className="rounded-2xl bg-zinc-800 p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-[#a2fa8e]">
          Tejas Innovations
        </p>
        <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#F4F7F3]">
          Get a fixed-price website quote in 24 hours
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          No vague estimates. Tell us what you need, get a clear number back.
        </p>
        <a
          href="/#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-[#a2fa8e] px-5 py-2.5 text-sm font-semibold text-[#0E1310] transition hover:bg-[#bdfcac]"
        >
          Get my quote
        </a>
      </div>

      {/* Table of contents */}
      <nav className="rounded-2xl border border-[#2A332D] bg-zinc-800 p-6">
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#F4F7F3]">
          In this article
        </p>
        <ul className="space-y-1 border-l border-[#2A332D]">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#section-${section.id}`}
                  className={`block border-l-2 py-1.5 pl-4 -ml-px text-sm transition ${
                    isActive
                      ? "border-[#a2fa8e] font-semibold text-[#a2fa8e]"
                      : "border-transparent text-[#8B978E] hover:text-[#F4F7F3]"
                  }`}
                >
                  {section.heading}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
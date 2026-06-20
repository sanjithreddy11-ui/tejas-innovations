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
      {/* CTA card */}
      <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
          Tejas Agency
        </p>
        <h3 className="mt-2 text-lg font-bold text-neutral-900">
          Get a fixed-price website quote in 24 hours
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          No vague estimates. Tell us what you need, get a clear number back.
        </p>
        <a
          href="/#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Get my quote
        </a>
      </div>

      {/* Table of contents */}
      <nav className="rounded-2xl border border-neutral-200 bg-white p-6">
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-900">
          In this article
        </p>
        <ul className="space-y-1 border-l border-neutral-200">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#section-${section.id}`}
                  className={`block border-l-2 py-1.5 pl-4 -ml-px text-sm transition ${
                    isActive
                      ? "border-orange-600 font-semibold text-neutral-900"
                      : "border-transparent text-neutral-500 hover:text-neutral-900"
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
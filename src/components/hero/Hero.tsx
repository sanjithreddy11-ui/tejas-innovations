"use client";

import { useEffect, useState } from "react";
import { ParticleMesh } from "./ParticleMesh";
import { Reveal } from "./Reveal";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#03060B] text-white overflow-hidden">
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-[#03060B]/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-6 md:px-10 md:py-7">
          <a
            href="#"
            className="text-[25px] font-medium tracking-tight"
          >
            ● Tejas
            <span className="text-[#B8F18D]">.</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-9 text-[13px] text-white/70">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[13px] text-white/85 transition-colors hover:text-white"
          >
            <span>Start Project</span>

            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#B8F18D] transition-transform group-hover:scale-125" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-screen min-h-[760px]">
        {/* Background */}
        <div className="absolute inset-0">
          <ParticleMesh />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_20%,transparent_0%,rgba(3,6,11,0.55)_70%,#03060B_100%)]" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#03060B]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col px-6 pt-28 md:px-10 md:pt-32">
          <div className="flex items-start justify-between">
            <Reveal>
              <p className="mt-20pb-16 md:pb-24 md:ml-40">
                An independent digital agency designing brand, product,
                <br />
                and web for category leaders.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-[12px] tracking-[0.22em] text-white/55">
                EST.{" "}
                 © 2026
              </p>
            </Reveal>
          </div>

<div className="mt-auto pb-16 md:pb-24 md:pl-40">            <Reveal>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                <span className="text-[#B8F18D]">
                  ★★★★★
                </span>

                <span className="text-[12px] text-white/75">
                  Trusted Digital Agency
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className=" text-[clamp(2.5rem,6.2vw,6.25rem)] leading-[0.92] tracking-[-0.06em] font-bold">
                Building digital
                experiences 
                 <br />
                that
                accelerate{" "}
                <span className="italic font-bold text-[#B8F18D]">
                  growth
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
                <p className="max-w-md text-[14px] leading-relaxed text-white/55">
                  A senior studio of designers,
                  engineers, and strategists
                  shipping flagship work for
                  funded startups and global
                  brands.
                </p>

                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 text-[13px] text-white/85 hover:text-white"
                >
                  <span className="inline-block h-px w-10 bg-white/40 transition-all group-hover:w-16 group-hover:bg-[#B8F18D]" />

                  Selected Work
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
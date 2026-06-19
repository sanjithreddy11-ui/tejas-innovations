"use client";

import { useEffect, useState } from "react";
import { ParticleMesh } from "./ParticleMesh";
import { Reveal } from "./Reveal";

const NAV = [
  { label: "About Us", href: "#AboutSection" },
  { label: "Services", href: "#services" },
  { label: "FAQS", href: "#FAQSection" },
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
    <section className="relative min-h-screen overflow-hidden bg-[#03060B] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <ParticleMesh />

        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_20%,transparent_0%,rgba(3,6,11,0.55)_70%,#03060B_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#03060B]" />
      </div>

      {/* Navbar */}
      <header
        className={`relative z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-[#03060B]/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-6 md:px-10">
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

        
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-[1480px] px-6 pt-10 pb-20 md:px-10 md:pt-20">
        {/* Badge */}
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-sm">
            <span className="text-[#B8F18D]">
              ★★★★★
            </span>

            <span className="text-sm text-white/75">
              Trusted Digital Agency
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={100}>
          <h1 className="max-w-[1000px] text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.05em]">
            Building digital
            <br />
            experiences that
            <br />
            accelerate{" "}
            <span className="italic text-[#B8F18D]">
              growth
            </span>
            .
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal delay={200}>
          <div className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-white/60 md:text-lg">
              A senior studio of designers,
              engineers and strategists
              shipping flagship work for
              funded startups and global
              brands.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
           

            
          </div>
        </Reveal>

        {/* Logo Strip */}
        <Reveal delay={400}>
          <div className="mt-20 flex flex-wrap gap-12 text-lg font-medium text-white/35">
            <span>Logoipsum</span>
            <span>Logoipsum</span>
            <span>Logoipsum</span>
            <span>Logoipsum</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
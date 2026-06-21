"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-50 pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-4 backdrop-blur-xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 bg-[#a2fa8e]" />
          <span className="text-3xl font-semibold">
            Tejas
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-white/70">
          <Link href="/about" aria-label="About Tejas Agency">
            About
          </Link>

          <Link href="/services" aria-label="Our Services">
            Services
          </Link>

          <Link href="/pricing" aria-label="Pricing Plans">
            Pricing
          </Link>

          <Link href="/contact" aria-label="Contact Tejas Agency">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
        >
          Contact Now
        </Link>
      </div>
    </header>
  );
}
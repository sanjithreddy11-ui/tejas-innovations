"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center gap-3"
          >
            <div className="h-3 w-3 bg-[#a2fa8e]" />
            <span className="text-3xl font-semibold text-white">
              Tejas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-white/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:block rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            Contact Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-6">
            <nav className="flex flex-col gap-5 text-white/80">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-2xl bg-white px-6 py-3 text-center font-medium text-black"
              >
                Contact Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Services", href: "/services" },
    { id: 3, name: "Blogs", href: "/blog" },
    { id: 4, name: "Pricing", href: "/pricing" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl">

        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-[#a2fa8e]" />

            <span className="text-3xl font-semibold tracking-tight text-white">
              Tejas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-white/70">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="transition duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:bg-gray-100"
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
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-5 px-6 py-6 text-white/80">

            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="transition duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-2xl bg-white px-5 py-3 text-center font-medium text-black transition duration-300 hover:bg-gray-100"
            >
              Contact Now
            </Link>

          </nav>
        </div>

      </div>
    </header>
  );
}
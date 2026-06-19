"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Business Websites",
  "Restaurant Websites",
  "QR Ordering Systems",
  "Booking Systems",
  "SEO Optimization",
  "Custom Web Apps",
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
<footer className="relative border-t border-white/10 pt-20 pb-8 bg-black overflow-hidden">      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[200px] bg-[#B8F18D]/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Brand */}
          <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              <span className="text-white">•</span> Tejas.
            </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Building premium digital experiences for businesses that want
              modern websites, automation, growth, and scale.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      flex items-center justify-center
                      text-zinc-400
                      hover:text-white
                      hover:border-[#B8F18D]/40
                      transition-all duration-300
                    "
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
           <h4 className="text-white font-semibold mb-3">
              Navigation
            </h4>

           <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      text-zinc-400
                      hover:text-white
                      transition-colors
                      text-sm
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li
                  key={service}
                  className="
                    text-zinc-400
                    hover:text-white
                    transition-colors
                    text-sm
                    cursor-pointer
                  "
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Start a Project
            </h4>

            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Ready to build something exceptional?
              Let's discuss your next project.
            </p>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-2xl
                bg-[#B8F18D]
                text-black
                font-medium
                hover:scale-105
                transition-all duration-300
              "
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Tejas. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="
              w-11 h-11
              rounded-full
              border border-white/10
              bg-white/[0.03]
              flex items-center justify-center
              text-zinc-400
              hover:text-white
              hover:border-[#B8F18D]/40
              transition-all duration-300
            "
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
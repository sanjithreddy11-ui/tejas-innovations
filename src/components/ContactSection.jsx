"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative h-[550px] md:h-[700px] overflow-hidden bg-black flex items-center justify-center"
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Desktop */}
          <img
            src="/hand-desktop.png"
            alt=""
            className="
              hidden md:block
              absolute
              bottom-[-5%]
              left-0
              w-full
              h-full
              object-cover
              opacity-70
            "
          />

          {/* Mobile */}
          <img
            src="/hand-mobile.png"
            alt=""
            className="
              md:hidden
              absolute
              bottom-[-8%]
              left-[-20%]
              w-[140%]
              max-w-none
              opacity-70
            "
          />

          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-[52px]
              md:text-7xl
              lg:text-8xl
              font-bold
              text-white
              leading-[0.95]
              tracking-tight
            "
          >
            Build Something
            <br />
            That Performs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-base
              md:text-xl
              text-zinc-300
              leading-relaxed
            "
          >
            We partner with startups and growing businesses to create
            websites, brands, and products that perform.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            onClick={() => setIsOpen(true)}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              px-7
              py-3
              rounded-2xl
              bg-[#B8F18D]
              text-black
              font-semibold
              text-lg
              transition-all
              hover:scale-[1.02]
            "
          >
            Let's Talk

            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight size={18} />
            </span>
          </motion.button>
        </div>
      </section>

      {/* Popup Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-5 top-5 text-zinc-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                Let's Build Your Project
              </h2>

              <p className="mt-3 text-center text-zinc-400">
                Tell us about your project and we'll get back to you shortly.
              </p>

              <form
                action="https://formspree.io/f/mnjyydeb"
                method="POST"
                className="mt-8 space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-[#B8F18D]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-[#B8F18D]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-[#B8F18D]"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-[#B8F18D]"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#B8F18D] py-4 font-semibold text-black"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
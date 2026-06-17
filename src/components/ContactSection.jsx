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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/hand.png"
              alt="Background"
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[250%]
                sm:w-[200%]
                md:w-[140%]
                max-w-none
                opacity-70
              "
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              md:text-xl
              text-zinc-300
              leading-relaxed
            "
          >
            We partner with startups and growing businesses to create
            websites, brands, and products that perform.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-2xl
              bg-[#B8F18D]
              text-black
              font-semibold
              hover:bg-zinc-200
              transition-all
              cursor-pointer
            "
          >
            Let's Talk

            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight size={16} />
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
  className="mt-8 space-y-5"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formspree.io/f/mnjyydeb",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
    }
  }}
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
                  className="w-full rounded-2xl bg-[#B8F18D] py-4 font-semibold text-black transition hover:scale-[1.02]"
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
"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCards() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-10 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-[28px] bg-[#B7F07D] p-8 min-h-[380px] flex flex-col justify-between overflow-hidden"
          >
            <div>
              <h3 className="text-black text-2xl font-medium leading-tight max-w-[250px] font-bold">
                Designing Digital Experiences That Perform
              </h3>

              <div className="mt-8 text-black/10">
                <ArrowRight size={100} strokeWidth={1.5} />
              </div>
            </div>

            <a
            aria-label="GitHub Profile"
              href="#contact"
              className="w-fit flex items-center gap-3 bg-black text-white px-4 py-1 rounded-2xl text-lg transition-all duration-300 hover:bg-white hover:text-black"
            >
              Let's Talk
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[28px] min-h-[380px]"
          >
          <video
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source
    src="/videos/showreel.mp4"
    type="video/mp4"
  />
</video>

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="text-white text-6xl font-semibold">
                98%
              </h3>

              <p className="text-white text-xl mt-2">
                Client Satisfaction Rate
              </p>
            </div>
          </motion.div>

           {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-[28px] overflow-hidden min-h-[380px] block cursor-pointer"
            >
              <img
                src="about-card.webp"
                alt="Meet The Founders"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h1 className="text-black text-5xl font-normal">
                    Meet the Founder
                  </h1>
                </div>

                <div className="flex justify-end">
                  <ArrowRight
                    size={100}
                    className="text-black/10"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
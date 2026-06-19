"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutCards() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-[28px] bg-[#B7F07D] p-8 min-h-[460px] flex flex-col justify-between overflow-hidden"
          >
            <div>
              <h3 className="text-black text-3xl font-medium leading-tight max-w-[250px]">
                Designing Digital Experiences That Perform
              </h3>

              <div className="mt-12 text-black/10">
                <ArrowRight size={120} strokeWidth={1.5} />
              </div>
            </div>

            <button className="w-fit flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl text-lg">
              Let's Talk
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-[28px] overflow-hidden min-h-[460px]"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-8 left-8">
              <h2 className="text-white text-7xl font-semibold">
                98%
              </h2>

              <p className="text-white text-2xl mt-2">
                Client Satisfaction Rate
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-[28px] overflow-hidden min-h-[460px] bg-[#F1F8EB]"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B7F07D] via-[#E9F9D6] to-white opacity-90" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-black text-7xl font-semibold">
                  20+
                </h2>

                <p className="text-black/70 text-2xl mt-2">
                  Successful Projects Delivered
                </p>
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
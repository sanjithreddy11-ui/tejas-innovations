"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraph =
  "At Tejas, we believe exceptional digital experiences aren't just about aesthetics—they're about creating meaningful connections between brands and people. We build websites, brands, and digital products that combine strategy, creativity, and technology to deliver lasting impact.";

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = paragraph.split(" ");

  return (
    <section
      id="about"
     className=" py-32"  >
      <div className="w-full px-8 lg:px-24">
   <div className="grid lg:grid-cols-[420px_1fr] gap-6">
          
          {/* LEFT LABEL */}
          <div className="pt-6 pl-16">
            <p className="text-[30px] text-neutral-400">
              About Tejas
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div
  ref={containerRef}
  className="flex-1 min-w-0"
>
           <h2
  className="
    text-[36px]
    md:text-[20px]
    lg:text-[35px]
    leading-[1.08]
    tracking-[-0.03em]
    font-semi-bold
    text-white
  "
>
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                const color = useTransform(
                  scrollYProgress,
                  [start, end],
                ["#6a6a6a", "#ffffff"]
                );

                return (
                  <motion.span
                    key={i}
                    style={{ color }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
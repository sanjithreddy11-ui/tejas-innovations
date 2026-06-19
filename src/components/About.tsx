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
className="pt-6 pb-8 lg:pb-16"
>
<div className="w-full px-7 sm:px-8 lg:px-24">
<div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-6">

      {/* ABOUT LABEL */}
    <div className="mb-4 lg:mb-0 lg:pt-6 lg:pl-16">
      <p className="text-[18px] lg:text-[18px] font-medium text-neutral-400">
  • About Us
</p>
      </div>

      {/* CONTENT */}
     <div
  ref={containerRef}
  className="w-full max-w-[950px]"
>
        <h2
          className="
            text-[24px]
            md:text-[34px]
            lg:text-[36px]
            leading-[1.12]
            tracking-[-0.03em]
            font-medium
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
                className="inline-block mr-2 lg:mr-3"
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
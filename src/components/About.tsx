"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});
const paragraph =
  "At Tejas, we believe exceptional digital experiences aren't just about aesthetics—they're about creating meaningful connections between brands and people. We build websites, brands, and digital products that combine strategy, creativity, and technology to deliver lasting impact.";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = paragraph.split(" ");

  return (
    <section
      id="about"
      className="bg-[#f5f5f5] pt-32 pb-36"
    >
      <div className="w-full px-8 lg:px-20">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-25">
          {/* LEFT LABEL */}
          <div className="w-[180px] shrink-0 pt-3">
            <p className="text-[20px] text-neutral-500">
              About Tejas
            </p>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div
            ref={containerRef}
            className="flex-1"
          >
            <h2
              className="
              {`${manrope.className} 
                text-[34px]
                md:text-[48px]
                lg:text-[35px]
                leading-[1.08]
                tracking-[-0.03em]
                font-[550]
                text-neutral-900
                max-w-none
              "
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                const color = useTransform(
                  scrollYProgress,
                  [start, end],
                  ["#8a8a8a", "#000000"]
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

        {/* FOUNDER CARDS */}
        <div className="mt-8 lg:ml-[280px]">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <FounderCard
              initials="YS"
              name="YARAMADA SANJITH REDDY"
              role1="Co-Founder"
              description="Passionate about crafting high-performance digital experiences that blend strategy, design, and technology. Focused on building modern brands and websites that help businesses stand out and grow online."
              portfolio="https://sanjith-portfolio-vcym-sanjithreddy08-7244s-projects.vercel.app/"
              github="https://www.github.com/sanjithreddy11-ui"
              Linkedin="https://www.linkedin.com/in/y-sanjith-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_android"

              
            />

            <FounderCard
              initials="AM"
              name="ALVALA MADHAVAN"
              role1="Co-Founder"
              description="Dedicated to creating impactful digital products and brands that drive growth. Skilled in blending creativity, strategy, and technology to deliver exceptional online experiences."
               portfolio="https://madhavan-alvala-portfolio-c726a76e.base44.app/"
              github="https://www.github.com/madhavanpc30"
              Linkedin="https://www.linkedin.com/in/madhavan-alvala-631198216?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderCard({
  initials,
  name,
  role1,
  description,
  portfolio,
  github,
  Linkedin,
}: {
  initials: string;
  name: string;
  role1: string;
  description: string;
  portfolio?: string;
    github?: string;
    Linkedin?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="
        bg-white
        border
        border-neutral-200
        rounded-[24px]
        p-8
      "
    >
      <div className="w-16 h-16 rounded-full border border-neutral-300 flex items-center justify-center text-lg font-medium mb-8 bg-gray
text-black font-[600]">
        {initials}
      </div>

      <h3 className="text-2xl text-neutral-900 mb-6 font-[550]">
        {name}
      </h3>

      <div className="mt-6">
  <p className="bg-black inline-flex px-3 py-1  text-gray-1000  text-xs tracking-[0.15em] uppercase mb-4 mt-1">
    {role1}
  </p>

  <p className="text-neutral-600 leading-relaxed">
    {description}
  </p>
</div>

     <div className="mt-10 pt-6 border-t border-neutral-200 flex gap-5">
  <a href={portfolio} target="_blank" rel="noopener noreferrer">
    <FaGlobe className="text-neutral-500 hover:text-black cursor-pointer transition-colors" />
  </a>

  <a href={github} target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-neutral-500 hover:text-black cursor-pointer transition-colors" />
  </a>

  <a href={Linkedin} target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-neutral-500 hover:text-black cursor-pointer transition-colors" />
  </a>
</div>
    </motion.div>
  );
}
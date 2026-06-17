"use client";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import FounderCard from "./FounderCard";

const founders = [
  {
    name: "Yaramada Sanjith Reddy",
    roles: ["Co-Founder", "Frontend Developer", "UI/UX Designer"],
    image: "https://www.image2url.com/r2/default/images/1781367349019-dd00ba69-8448-4872-b418-272891d3ae82.jpeg",
    bio: "Passionate about crafting pixel-perfect interfaces and intuitive user experiences. Specializes in transforming complex business requirements into elegant, responsive web applications.",
    github: "https://github.com/sanjithreddy11-ui",
    linkedin: "https://www.linkedin.com/in/y-sanjith-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    portfolio: "https://sanjith-portfolio-vcym-sanjithreddy08-7244s-projects.vercel.app/",
    resume: "https://drive.google.com/file/d/1cQ3QijDkOKSbsNUQ2VH1m4RPl5fTDyXR/view?usp=drivesdk",
  },
  {
    name: "Alvala Madhavan",
    roles: ["Co-Founder", "Full Stack Developer", "Backend Developer"],
    image: "https://www.image2url.com/r2/default/images/1781367576234-7f65d4d1-9443-4996-b414-e15df9383834.jpeg",
    bio: "Expert in building robust, scalable backend architectures and full-stack solutions. Focused on performance optimization, database design, and creating seamless API integrations.",
    github: "https://github.com/madhavanpc-30",
    linkedin: "https://www.linkedin.com/in/madhavan-alvala-631198216?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    portfolio: "https://madhavan-alvala-portfolio-c726a76e.base44.app/",
    resume: "https://drive.google.com/file/d/1cQ3QijDkOKSbsNUQ2VH1m4RPl5fTDyXR/view?usp=drivesdk",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="01" label="About Us" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
        >
          Meet The <span className="gradient-text">Founders</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-steel text-lg max-w-2xl mb-12"
        >
          Two driven engineers on a mission to transform how local businesses connect with their customers.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder, i) => (
            <FounderCard key={i} founder={founder} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 sm:p-10 text-center max-w-4xl mx-auto"
        >
          <p className="text-steel text-lg leading-relaxed italic">
            "We are two Computer Science & Engineering students from{" "}
            <span className="text-foreground font-medium">ADYPU</span> passionate about helping businesses
            establish a strong digital presence through modern technology and innovative web solutions."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
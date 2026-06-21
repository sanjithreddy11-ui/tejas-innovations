"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionLabel from "./SectionLabel";

const faqs = [
{
id: "01",
question: "How long does a website take to build?",
answer:
"Most business websites are completed within 2–4 weeks. Larger custom platforms may require additional development time depending on complexity.",
},
{
id: "02",
question: "Do you provide ongoing support?",
answer:
"Yes. We offer maintenance, security updates, performance monitoring, bug fixes, and feature enhancements after launch.",
},
{
id: "03",
question: "Do you offer SEO optimization?",
answer:
"Yes. We implement technical SEO best practices, performance optimization, metadata, and structured content.",
},
{
id: "04",
question: "Can I update my website myself?",
answer:
"Yes. We can build websites with user-friendly content management systems that allow easy updates.",
},
{
id: "05",
question: "Do you redesign existing websites?",
answer:
"Yes. We can modernize outdated websites with improved design, performance, responsiveness, and functionality.",
},

];

export default function FAQSection() {
const [active, setActive] = useState(0);

return ( <section
   id="faq"
   className="relative py-20 sm:py-15"
 > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <SectionLabel
       number="04"
       label="FAQ"
     />
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white mb-4"
    >
      Frequently Asked{" "}
      <span className="text-white/60 italic">
        Questions
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-zinc-400 text-lg mb-16 max-w-2xl"
    >
      Everything you need to know before
      starting your project with Tejas.
    </motion.p>

    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen =
          active === index;

        return (
          <motion.div
            key={faq.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.04,
            }}
            className="bg-zinc-800 rounded-3xl border border-white/10 bg-[#0B0F14] backdrop-blur-xl overflow-hidden hover:border-white/15 transition-all duration-300"
          >
            <button
            title="Next slide"
              onClick={() =>
                setActive(
                  isOpen
                    ? -1
                    : index
                )
              }
              className="w-full p-6 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <span className="text-5xl font-bold text-white/[0.05] select-none">
                    {faq.id}
                  </span>

                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  animate={{
                    rotate: isOpen
                      ? 180
                      : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <ChevronDown className="text-zinc-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pl-16 pt-5 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

);
}

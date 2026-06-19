"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

const plans = [
  {
    name: "Starter Plan",
    price: "₹14,999",
    description: "Perfect for small businesses and personal brands.",
    featured: false,
    buttonStyle: "bg-[#a2fa8e] text-black",
    features: [
      "Custom Landing Page",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "WhatsApp Integration",
      "Contact Form",
      "1 Revision",
      "Delivery in 5–7 Days",
    ],
  },
  {
    name: "Growth Plan",
    price: "₹29,999",
    description: "Ideal for startups and growing businesses.",
    featured: true,
    buttonStyle: "bg-black text-white",
    features: [
      "5–8 Page Website",
      "Premium UI/UX Design",
      "Advanced SEO Setup",
      "Performance Optimization",
      "CMS Integration",
      "Custom Animations",
      "3 Revisions",
      "Priority Support",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹49,999+",
    description: "Complete digital solution for established businesses.",
    featured: false,
    buttonStyle: "bg-[#a2fa8e] text-black",
    features: [
      "Custom Web Application",
      "Admin Dashboard",
      "Booking System",
      "Blog/CMS",
      "Advanced Integrations",
      "SEO Optimization",
      "Analytics Setup",
      "Dedicated Support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full py-24 lg:py-32  overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#B9FF66]/5 blur-[150px] rounded-full" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel
                number="03"
                label="Pricing"
              />

          <h2 className="text-white text-5xl md:text-6xl lg:text-5xl font-bold tracking-tight">
            Simple Pricing
          </h2>

          <p className="text-neutral-400 text-lg mt-5 max-w-2xl">
            Flexible pricing designed for startups, brands, and businesses
            looking to establish a powerful online presence.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative rounded-[32px] border transition-all duration-300 ${
                plan.featured
                  ? "bg-[#a2fa8e] text-black border-[#B9FF66]/20 "
                  : "bg-zinc-900 text-white border-white/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-6 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8 lg:p-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-medium mb-3">{plan.name}</h3>

                {/* Description */}
                <p
                  className={`mb-8 ${
                    plan.featured ? "text-black/70" : "text-neutral-400"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl lg:text-6xl font-bold">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-2 ${
                      plan.featured ? "text-black/70" : "text-neutral-400"
                    }`}
                  >
                    One-Time
                  </span>
                </div>

                {/* Button */}
                <button
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-[1.02] ${plan.buttonStyle}`}
                >
                  Get Started
                  <ArrowRight size={20} />
                </button>

                {/* Divider */}
                <div
                  className={`my-8 ${
                    plan.featured ? "border-black/10" : "border-white/10"
                  } border-t`}
                />

                {/* Features */}
                <div>
                  <p
                    className={`mb-5 font-medium ${
                      plan.featured ? "text-black" : "text-white"
                    }`}
                  >
                    Features
                  </p>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`flex items-center justify-center w-6 h-6 rounded-full border flex-shrink-0 ${
                            plan.featured
                              ? "border-black/50"
                              : "border-white/30"
                          }`}
                        >
                          <Check size={14} />
                        </div>

                        <span
                          className={
                            plan.featured
                              ? "text-black/80"
                              : "text-neutral-300"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
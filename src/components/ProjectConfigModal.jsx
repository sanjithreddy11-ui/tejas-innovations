"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Zap,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  UtensilsCrossed,
  QrCode,
  CalendarCheck,
  Megaphone,
  Search,
  Wrench,
  Code2,
  CheckCircle2,
} from "lucide-react";

const steps = ["Business", "Services", "Requirements", "Budget", "Summary"];

const serviceOptions = [
  { id: "business-website", icon: Globe, label: "Business Website" },
  { id: "restaurant-website", icon: UtensilsCrossed, label: "Restaurant Website" },
  { id: "qr-ordering", icon: QrCode, label: "QR Ordering System" },
  { id: "booking-system", icon: CalendarCheck, label: "Booking System" },
  { id: "landing-page", icon: Megaphone, label: "Landing Page" },
  { id: "seo", icon: Search, label: "SEO Optimization" },
  { id: "maintenance", icon: Wrench, label: "Website Maintenance" },
  { id: "custom-app", icon: Code2, label: "Custom Web Application" },
];

const budgetOptions = [
  { id: "starter", label: "₹10,000 – ₹25,000", subtitle: "Starter / Landing Page" },
  { id: "growth", label: "₹25,000 – ₹50,000", subtitle: "Business Website" },
  { id: "advanced", label: "₹50,000 – ₹1,00,000", subtitle: "Booking / QR / Custom Systems" },
  { id: "custom", label: "Custom Quote", subtitle: "Tell us more about your needs" },
];

const timelineOptions = ["ASAP", "Within 2 weeks", "Within a month", "Flexible"];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  business: "",
  services: [],
  requirements: "",
  timeline: "",
  budget: "",
};

export default function ProjectConfigModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    onClose?.();
    setTimeout(() => {
      setStep(0);
      setFormData(initialFormData);
      setSubmitted(false);
    }, 300);
  };

  const update = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (id) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isStepValid = () => {
    switch (step) {
      case 0:
        return formData.name.trim() && formData.email.trim();
      case 1:
        return formData.services.length > 0;
      default:
        return true;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            onClick={handleClose}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
           className="
relative
w-full
max-w-2xl
max-h-[90vh]
overflow-y-auto
rounded-2xl
border border-blue-500/20
bg-gradient-to-br
from-slate-950
via-slate-900
to-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.5)]
p-6 sm:p-8
"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amethyst to-cyan flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                    Configure Your Project
                  </h2>
                  <p className="text-steel text-sm">Tell us about your requirements</p>
                </div>
              </div>
              <button
              title="Next slide"
                onClick={handleClose}
                className="p-2 rounded-lg text-steel hover:text-foreground hover:bg-white/5 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-cyan mb-4" />
                <h3 className="font-display font-bold text-2xl mb-2">Request Submitted!</h3>
                <p className="text-steel max-w-md mb-8">
                  Thanks {formData.name || "there"}! We've received your project details and will reach
                  out to you at {formData.email || "your email"} within 24 hours.
                </p>
                <button
                title="Next slide"
                  onClick={handleClose}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amethyst to-amethyst/80 text-white text-sm font-medium hover:shadow-lg hover:shadow-amethyst/25 transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center mb-8 overflow-x-auto pb-2">
                  {steps.map((label, i) => (
                    <div key={label} className="flex items-center flex-1 last:flex-initial">
                      <div className="flex flex-col items-center gap-2 flex-shrink-0">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all ${
                            i < step
                              ? "bg-gradient-to-br from-amethyst to-cyan border-transparent text-white"
                              : i === step
                              ? "border-amethyst bg-amethyst/20 text-amethyst"
                              : "border-white/10 text-steel"
                          }`}
                        >
                          {i < step ? <Check className="w-4 h-4" /> : i + 1}
                        </div>
                        <span
                          className={`text-xs font-mono whitespace-nowrap ${
                            i <= step ? "text-foreground" : "text-steel"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={`flex-1 h-px mx-2 transition-all ${
                            i < step ? "bg-gradient-to-r from-amethyst to-cyan" : "bg-white/10"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="min-h-[280px]"
                  >
                    {step === 0 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-bold text-lg mb-1">Step 1: Your Business</h3>
                        <p className="text-steel text-sm mb-4">
                          Let's start with some basic information about you.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-mono text-steel mb-2">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => update("name", e.target.value)}
                              placeholder="John Doe"
                              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:border-amethyst/50 focus:ring-1 focus:ring-amethyst/30 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-mono text-steel mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => update("email", e.target.value)}
                              placeholder="john@example.com"
                              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:border-amethyst/50 focus:ring-1 focus:ring-amethyst/30 transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-mono text-steel mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              placeholder="+91 98765 43210"
                              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:border-amethyst/50 focus:ring-1 focus:ring-amethyst/30 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-mono text-steel mb-2">
                              Business Name
                            </label>
                            <input
                              type="text"
                              value={formData.business}
                              onChange={(e) => update("business", e.target.value)}
                              placeholder="Your Company"
                              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:border-amethyst/50 focus:ring-1 focus:ring-amethyst/30 transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div>
                        <h3 className="font-display font-bold text-lg mb-1">Step 2: Service Selection</h3>
                        <p className="text-steel text-sm mb-4">
                          Select the services you're interested in.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {serviceOptions.map((service) => {
                            const Icon = service.icon;
                            const active = formData.services.includes(service.id);
                            return (
                              <button
                              title="Next slide"
                                key={service.id}
                                onClick={() => toggleService(service.id)}
                                className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                                  active
                                    ? "border-amethyst/50 bg-amethyst/10"
                                    : "border-white/10 bg-white/5 hover:border-white/20"
                                }`}
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                    active ? "bg-amethyst/20" : "bg-white/5"
                                  }`}
                                >
                                  <Icon
                                    className={`w-4 h-4 ${active ? "text-amethyst" : "text-steel"}`}
                                  />
                                </div>
                                <span
                                  className={`text-sm font-medium ${
                                    active ? "text-foreground" : "text-steel"
                                  }`}
                                >
                                  {service.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-bold text-lg mb-1">Step 3: Requirements</h3>
                        <p className="text-steel text-sm mb-4">
                          Give us a few details about what you need.
                        </p>

                        <div>
                          <label className="block text-sm font-mono text-steel mb-2">
                            Project Details
                          </label>
                          <textarea
                            rows={5}
                            value={formData.requirements}
                            onChange={(e) => update("requirements", e.target.value)}
                            placeholder="Describe your business, goals, and what you'd like the website or system to do..."
                            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:border-amethyst/50 focus:ring-1 focus:ring-amethyst/30 transition-all resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-mono text-steel mb-2">
                            Preferred Timeline
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {timelineOptions.map((opt) => (
                              <button
                              title="Next slide"
                                key={opt}
                                onClick={() => update("timeline", opt)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                  formData.timeline === opt
                                    ? "bg-gradient-to-r from-amethyst to-amethyst/80 text-white"
                                    : "bg-white/5 text-steel hover:bg-white/10"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h3 className="font-display font-bold text-lg mb-1">Step 4: Budget</h3>
                        <p className="text-steel text-sm mb-4">
                          What budget range fits your project?
                        </p>

                        <div className="space-y-3">
                          {budgetOptions.map((opt) => (
                            <button
                            title="Next slide"
                              key={opt.id}
                              onClick={() => update("budget", opt.label)}
                              className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                                formData.budget === opt.label
                                  ? "border-amethyst/50 bg-amethyst/10"
                                  : "border-white/10 bg-white/5 hover:border-white/20"
                              }`}
                            >
                              <div>
                                <p className="font-display font-semibold text-foreground">
                                  {opt.label}
                                </p>
                                <p className="text-steel text-xs mt-1">{opt.subtitle}</p>
                              </div>
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                  formData.budget === opt.label
                                    ? "border-amethyst bg-amethyst"
                                    : "border-white/20"
                                }`}
                              >
                                {formData.budget === opt.label && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <h3 className="font-display font-bold text-lg mb-1">Step 5: Summary</h3>
                        <p className="text-steel text-sm mb-4">
                          Review your project details before submitting.
                        </p>

                        <div className="space-y-3">
                          <div className="glass-card rounded-xl p-4 flex justify-between items-center">
                            <span className="text-steel text-sm">Name</span>
                            <span className="text-foreground font-medium text-sm">
                              {formData.name || "—"}
                            </span>
                          </div>
                          <div className="glass-card rounded-xl p-4 flex justify-between items-center">
                            <span className="text-steel text-sm">Email</span>
                            <span className="text-foreground font-medium text-sm">
                              {formData.email || "—"}
                            </span>
                          </div>
                          <div className="glass-card rounded-xl p-4 flex justify-between items-center">
                            <span className="text-steel text-sm">Business</span>
                            <span className="text-foreground font-medium text-sm">
                              {formData.business || "—"}
                            </span>
                          </div>
                          <div className="glass-card rounded-xl p-4">
                            <span className="text-steel text-sm block mb-2">Services</span>
                            <div className="flex flex-wrap gap-2">
                              {formData.services.length > 0 ? (
                                formData.services.map((id) => {
                                  const s = serviceOptions.find((s) => s.id === id);
                                  return (
                                    <span
                                      key={id}
                                      className="px-3 py-1 rounded-full bg-amethyst/15 text-amethyst text-xs"
                                    >
                                      {s?.label}
                                    </span>
                                  );
                                })
                              ) : (
                                <span className="text-foreground text-sm">—</span>
                              )}
                            </div>
                          </div>
                          <div className="glass-card rounded-xl p-4 flex justify-between items-center">
                            <span className="text-steel text-sm">Timeline</span>
                            <span className="text-foreground font-medium text-sm">
                              {formData.timeline || "—"}
                            </span>
                          </div>
                          <div className="text-center text-5xl font-bold bg-gradient-to-r from-amethyst to-cyan bg-clip-text text-transparent py-4">
                            {formData.budget || "Custom Quote"}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="border-t border-white/10 pt-6 mt-6 flex items-center justify-between">
                  <button
                  title="Next slide"
                    onClick={prevStep}
                    disabled={step === 0}
                    className="flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-medium text-steel hover:text-foreground hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {step < steps.length - 1 ? (
                    <button
                    title="Next slide"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className="flex items-center gap-1 px-6 py-2.5 rounded-full bg-gradient-to-r from-amethyst to-amethyst/80 text-white text-sm font-medium hover:shadow-lg hover:shadow-amethyst/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                    title="Next slide"
                      onClick={handleSubmit}
                      className="flex items-center gap-1 px-6 py-2.5 rounded-full bg-gradient-to-r from-amethyst to-cyan text-white text-sm font-medium hover:shadow-lg hover:shadow-amethyst/25 transition-all"
                    >
                      Submit Request
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
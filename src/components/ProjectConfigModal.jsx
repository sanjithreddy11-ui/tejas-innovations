"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";

const steps = ["Business", "Services", "Requirements", "Budget", "Summary"];

const services = [
  "Web Design & Development",
  "AI Solutions",
  "AI Voice Agents",
  "QR Ordering Systems",
  "SEO & Growth",
  "Business Automation",
];

const ACCENT = "#2563EB";
const ACCENT_BORDER = "#1d4ed8";

export default function ProjectConfigModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    services: [],
    requirements: "",
    budget: "",
  });

  const updateField = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const toggleService = (service) =>
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));

  const handleSubmit = () => {
    alert(
      `Project submitted successfully!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness: ${formData.business}\nServices: ${formData.services.join(", ")}\nBudget: ${formData.budget}\n\nWe'll get back to you soon!`
    );
    onClose();
  };

  if (!isOpen) return null;

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "14px",
    border: "1px solid #e4e4e7",
    background: "#fafafa",
    color: "#111",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(4px)",
          }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "860px",
            maxHeight: "90vh",
            overflowY: "auto",
            borderRadius: "28px",
            border: "1px solid #e4e4e7",
            background: "#ffffff",
            boxShadow: "0 20px 80px rgba(0,0,0,0.10)",
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ margin: 0, fontSize: "11px", letterSpacing: "0.3em", color: "#a1a1aa", textTransform: "uppercase" }}>
                Tejas
              </p>
              <h2 style={{ margin: "10px 0 6px", fontSize: "36px", fontWeight: 300, color: "#111" }}>
                Configure Your Project
              </h2>
              <p style={{ margin: 0, fontSize: "15px", color: "#71717a" }}>
                Tell us about your requirements.
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                border: "1px solid #e4e4e7",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                cursor: "pointer",
                color: "#71717a",
                flexShrink: 0,
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Step Progress */}
          <div style={{ display: "flex", alignItems: "flex-start", marginTop: "36px" }}>
            {steps.map((item, index) => (
              <div key={item} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: step >= index ? "none" : "1px solid #e4e4e7",
                      background: step >= index ? "#111" : "transparent",
                      color: step >= index ? "#fff" : "#a1a1aa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    {step > index ? <Check size={14} /> : index + 1}
                  </div>
                  <span style={{
                    fontSize: "12px",
                    color: step >= index ? "#111" : "#a1a1aa",
                    fontWeight: step >= index ? 500 : 400,
                    whiteSpace: "nowrap",
                  }}>
                    {item}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div style={{
                    flex: 1,
                    height: "1px",
                    background: step > index ? ACCENT_BORDER : "#e4e4e7",
                    margin: "0 8px",
                    marginBottom: "24px",
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div style={{ marginTop: "40px", minHeight: "280px" }}>
            {step === 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input style={inputStyle} placeholder="Full Name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} />
                <input style={inputStyle} placeholder="Email Address" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                <input style={inputStyle} placeholder="Phone Number" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />
                <input style={inputStyle} placeholder="Business Name" value={formData.business} onChange={(e) => updateField("business", e.target.value)} />
              </div>
            )}

            {step === 1 && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {services.map((service) => {
                  const active = formData.services.includes(service);
                  return (
                    <button
                      key={service}
                      onClick={() => toggleService(service)}
                      style={{
                        padding: "18px 20px",
                        borderRadius: "14px",
                        border: active ? `1.5px solid ${ACCENT_BORDER}` : "1px solid #e4e4e7",
                        background: active ? ACCENT : "#fafafa",
                        color: active ? "#fff" : "#111",
                        fontSize: "14px",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.15s",
                        fontWeight: active ? 500 : 400,
                      }}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <textarea
                rows={8}
                placeholder="Tell us about your project..."
                value={formData.requirements}
                onChange={(e) => updateField("requirements", e.target.value)}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            )}

            {step === 3 && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["₹25K - ₹50K", "₹50K - ₹1L", "₹1L - ₹3L", "₹3L+"].map((budget) => (
                  <button
                    key={budget}
                    onClick={() => updateField("budget", budget)}
                    style={{
                      padding: "24px 20px",
                      borderRadius: "14px",
                      border: formData.budget === budget ? `1.5px solid ${ACCENT_BORDER}` : "1px solid #e4e4e7",
                      background: formData.budget === budget ? ACCENT : "#fafafa",
                      color: formData.budget === budget ? "#fff" : "#111",
                      fontSize: "15px",
                      fontWeight: formData.budget === budget ? 600 : 400,
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            )}

            {step === 4 && (
              <div style={{ borderRadius: "20px", border: `1px solid ${ACCENT_BORDER}`, background: "#eff6ff", padding: "32px" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: "22px", fontWeight: 300, color: "#111" }}>
                  Review & Submit
                </h3>
                <p style={{ margin: "0 0 28px", color: "#71717a", fontSize: "14px" }}>
                  Review your information before submitting.
                </p>

                {/* Business Details */}
                <p style={{ margin: "0 0 12px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a1aa" }}>
                  Business Details
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                  {[
                    { label: "Name", value: formData.name },
                    { label: "Email", value: formData.email },
                    { label: "Phone", value: formData.phone },
                    { label: "Business", value: formData.business },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e4e4e7", padding: "14px 16px" }}>
                      <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</p>
                      <p style={{ margin: 0, fontSize: "14px", color: "#111", fontWeight: 500 }}>{value || "—"}</p>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <p style={{ margin: "0 0 12px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a1aa" }}>
                  Selected Services
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {formData.services.length > 0 ? formData.services.map((s) => (
                    <span key={s} style={{ padding: "6px 14px", borderRadius: "99px", background: ACCENT, border: `1px solid ${ACCENT_BORDER}`, fontSize: "13px", color: "#fff", fontWeight: 500 }}>
                      {s}
                    </span>
                  )) : <p style={{ margin: 0, fontSize: "14px", color: "#a1a1aa" }}>None selected</p>}
                </div>

                {/* Requirements & Budget */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e4e4e7", padding: "14px 16px" }}>
                    <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em" }}>Requirements</p>
                    <p style={{ margin: 0, fontSize: "14px", color: "#111", fontWeight: 500 }}>{formData.requirements || "—"}</p>
                  </div>
                  <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e4e4e7", padding: "14px 16px" }}>
                    <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em" }}>Budget</p>
                    <p style={{ margin: 0, fontSize: "14px", color: "#111", fontWeight: 500 }}>{formData.budget || "—"}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={{ marginTop: "36px", paddingTop: "28px", borderTop: "1px solid #f4f4f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
              onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 20px",
                borderRadius: "99px",
                border: "1px solid #e4e4e7",
                background: "white",
                color: "#3f3f46",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <ChevronLeft size={15} /> Previous
            </button>

            {step < 4 ? (
              <button
                onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 24px",
                  borderRadius: "99px",
                  border: "none",
                  background: "#111",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Next <ChevronRight size={15} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                style={{
                  padding: "10px 24px",
                  borderRadius: "99px",
                  border: "none",
                  background: "#111",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Submit Project
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
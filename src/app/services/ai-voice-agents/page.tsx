"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

import HeroSection from "@/components/services/ai-voice-agents/HeroSection";
import ServiceOverview from "@/components/services/ai-voice-agents/ServiceOverview";
import ServiceCards from "@/components/services/ai-voice-agents/ServiceCards";
import ProcessSection from "@/components/services/ai-voice-agents/ProcessSection";
import CTASection from "@/components/services/ai-voice-agents/CTASection";
import ProjectConfigModal from "@/components/ProjectConfigModal";

export default function WebDevelopmentPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <main className="bg-[#050709] text-white">
        <HeroSection />

        <ServiceOverview />

        <ServiceCards
          onConfigureClick={() => setModalOpen(true)}
        />

        <ProcessSection />

        <CTASection
          onConfigureClick={() => setModalOpen(true)}
        />
      </main>

      <ProjectConfigModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Footer />
    </>
  );
}
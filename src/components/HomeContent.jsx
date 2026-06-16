"use client";

import { useState } from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProjectConfigModal from "./ProjectConfigModal";

export default function HomeContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AboutSection />

      <ServicesSection
        onConfigureClick={() => setIsModalOpen(true)}
      />

      <ProjectConfigModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
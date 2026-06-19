"use client";

import { useState } from "react";

import ServicesSection from "./ServicesSection";
import ProjectConfigModal from "./ProjectConfigModal";

export default function HomeContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      

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
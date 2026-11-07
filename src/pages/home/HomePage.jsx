import React, { useState } from 'react';
import HeroSection from '../../components/home/HeroSection';
import ShowreelSection from '../../components/home/ShowreelSection';
import SocialProofBar from '../../components/home/SocialProofBar';
import FeaturedWorks from '../../components/home/FeaturedWorks';
import AISupportSection from '../../components/home/AISupportSection';
import TrustSection from '../../components/home/TrustSection';
import CommitmentSection from '../../components/home/CommitmentSection';
import ProcessSection from '../../components/home/ProcessSection';
import ProjectModal from '../../components/ui/ProjectModal';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseProject = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white text-[#0f0f11]">
      {/* 01. Shakuro Hero */}
      <HeroSection />

      {/* 02. Shakuro Video Showreel Banner */}
      <ShowreelSection />

      {/* 03. Shakuro Clutch & Trust Bar (Dark Contrast) */}
      <SocialProofBar />

      {/* 04. Shakuro 2-Column Staggered Works */}
      <FeaturedWorks onSelectProject={handleOpenProject} />

      {/* 05. AI Support for Smarter Product Development */}
      <AISupportSection />

      {/* 06. Trust is Earned, Not Given (Logos & Quote) */}
      {/* <TrustSection /> */}

      {/* 07. Commitment to Innovative Solutions (Industry Pills & Numbers) */}
      <CommitmentSection />

      {/* 08. Process Built for Efficient Product Development (Sticky Workflow) */}
      <ProcessSection />

      {/* Case Study Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseProject}
      />
    </div>
  );
}

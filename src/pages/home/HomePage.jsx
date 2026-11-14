import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import ShowreelSection from '../../components/home/ShowreelSection';
import SocialProofBar from '../../components/home/SocialProofBar';
import FeaturedWorks from '../../components/home/FeaturedWorks';
import AISupportSection from '../../components/home/AISupportSection';
import CommitmentSection from '../../components/home/CommitmentSection';
import ProcessSection from '../../components/home/ProcessSection';

export default function HomePage() {
  return (
    <div className="bg-white text-[#0f0f11]">
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Video Showreel Banner */}
      <ShowreelSection />

      {/* 03. Clutch & Trust Bar (Dark Contrast) */}
      <SocialProofBar />

      {/* 04. Featured Works (Coming Soon Placeholder) */}
      <FeaturedWorks />

      {/* 05. AI Support for Smarter Product Development */}
      <AISupportSection />

      {/* 06. Commitment to Innovative Solutions (Industry Pills & Numbers) */}
      {/* <CommitmentSection /> */}

      {/* 07. Process Built for Efficient Product Development */}
      <ProcessSection />
    </div>
  );
}

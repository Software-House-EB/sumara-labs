import React from 'react';
import { clientLogos } from '../../data/projectsData';

export default function TrustSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto flex max-w-[900px] flex-col gap-4 text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#0f0f11] leading-[1.12]">
            Trust is earned, not given
          </h2>
          <p className="text-base sm:text-lg lg:text-[20px] text-[#55555c] leading-relaxed">
            Every project is a chance to change someone's life. Courtesy of our clients, we impact millions of lives and create a better future for everyone.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center mb-16 sm:mb-24 opacity-75">
          {clientLogos.slice(0, 6).map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-3 text-sm sm:text-base font-bold font-mono tracking-wider text-zinc-400 hover:text-black transition-colors uppercase cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Featured Big Quote Block (Exact Shakuro Style) */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-[24px] sm:rounded-[32px] bg-[#f9fafb] border border-zinc-200/80 text-center space-y-6 sm:space-y-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#0f0f11] leading-relaxed">
            “Their organization and skill level are excellent. Sumara Labs hires very skilled engineers and designers who understand commercial product goals from day one and deliver with extreme precision.”
          </p>

          <div className="flex flex-col items-center gap-1.5">
            <span className="font-semibold text-base sm:text-lg text-[#0f0f11]">Michael Moore</span>
            <span className="text-xs sm:text-sm text-[#55555c]">Chief Technology Officer, FinTech ScaleUp</span>
          </div>
        </div>
      </div>
    </section>
  );
}


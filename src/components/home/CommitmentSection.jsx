import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  'Gaming',
  'E-Learning',
  'Social Platforms',
  'Fintech',
  'Healthcare',
  'Web3',
  'Real Estate',
  'SaaS',
  'E-Commerce',
  'Sports'
];

export default function CommitmentSection() {
  const [activeIndustry, setActiveIndustry] = useState('Fintech');

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Industry Pills */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#0f0f11] leading-[1.12]">
              We are committed to finding innovative and unconventional solutions. Pushing boundaries to exceed client goals.
            </h2>

            {/* Shakuro Industry Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`rounded-[48px] px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeIndustry === ind
                      ? 'bg-[#0f0f11] text-white border border-[#0f0f11]'
                      : 'bg-transparent text-[#0f0f11] border border-zinc-300 hover:border-black'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center text-sm font-semibold text-[#0f0f11] hover:text-primary transition-colors group"
              >
                <span>View {activeIndustry} case studies</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Big Metrics Display */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12 lg:pl-8 lg:border-l lg:border-zinc-200">
            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-medium tracking-tight text-[#0f0f11]">14+</p>
              <p className="text-xs sm:text-sm text-[#55555c]">years on the market</p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-medium tracking-tight text-[#0f0f11]">350+</p>
              <p className="text-xs sm:text-sm text-[#55555c]">completed projects</p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-medium tracking-tight text-[#0f0f11]">25+</p>
              <p className="text-xs sm:text-sm text-[#55555c]">countries worldwide</p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-6xl font-medium tracking-tight text-[#0f0f11]">70%</p>
              <p className="text-xs sm:text-sm text-[#55555c]">senior engineers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


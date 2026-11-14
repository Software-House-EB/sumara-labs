import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedWorks() {
  return (
    <section id="selected-work" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        {/* Playful "Coming Soon" Empty State */}
        <div className="max-w-[920px] mx-auto text-center space-y-6 py-8 sm:py-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#0f0f11] leading-[1.1]">
              Something amazing is<br className="hidden sm:block" /> in the making
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed max-w-[560px] mx-auto">
              Our team is heads-down crafting extraordinary digital products. The first wave of case studies will land here soon — and trust us, they'll be worth the wait.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="btn-pill-primary group inline-flex"
            >
              <span>Be our first case study</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/service"
              className="btn-pill-secondary group inline-flex"
            >
              <span>Explore our services</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

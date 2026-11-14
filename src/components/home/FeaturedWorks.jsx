import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import RollingText from '../ui/RollingText';

export default function FeaturedWorks() {
  return (
    <section id="selected-work" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        {/* Playful "Coming Soon" Empty State */}
        <div className="max-w-[920px] mx-auto text-center space-y-6 py-8 sm:py-12">
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-[#8e8e93] font-semibold">
              Our works
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#0f0f11] leading-[1.1]">
              No projects here yet,<br className="hidden sm:block" /> but we're on it
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed max-w-[580px] mx-auto">
              We just launched and haven't shipped our first project yet. But our engineers are ready, our stack is sharp, and this space won't stay empty for long.
            </p>
          </div>

          {/* Skeleton Preview Cards (2 cards, 1 row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-[780px] mx-auto pt-6 text-left">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-[20px] md:rounded-[24px] bg-[#f6f7f9] border border-zinc-100 overflow-hidden"
              >
                {/* Skeleton Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite] -translate-x-full" />
                </div>

                {/* Skeleton Text Lines */}
                <div className="p-5 space-y-3">
                  <div className="h-3 w-20 rounded-full bg-zinc-200/80" />
                  <div className="h-4 w-3/4 rounded-full bg-zinc-200/60" />
                  <div className="h-3 w-full rounded-full bg-zinc-100" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="btn-pill-primary group/btn inline-flex"
            >
              <RollingText text="Work with us" />
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
            <Link
              to="/service"
              className="btn-pill-secondary group/btn inline-flex"
            >
              <RollingText text="Explore our services" />
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

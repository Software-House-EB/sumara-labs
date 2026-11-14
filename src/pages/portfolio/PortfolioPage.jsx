import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 bg-white text-[#0f0f11]">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-[1100px] mb-10 sm:mb-14">
          <p className="text-sm sm:text-base text-[#8e8e93] font-semibold mb-5 sm:mb-6">
            Our works
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] font-medium tracking-tight-2 text-[#0f0f11] leading-[1.08] max-w-[1040px]">
            No work to show yet — but that's about to change.
          </h1>
          <p className="text-base sm:text-lg text-[#55555c] mt-5 leading-relaxed max-w-[680px]">
            We just launched Sumara Labs and haven't published our first project yet. Our engineers are building right now — and these slots will feature our first releases.
          </p>
        </div>

        {/* Skeleton Preview Cards (2 cards, 1 row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[880px] mb-12 sm:mb-16">
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

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-20 sm:mb-28">
          <Link
            to="/contact"
            className="btn-pill-primary group inline-flex"
          >
            <span>Work with us</span>
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

        {/* Bottom Banner */}
        <div className="p-10 sm:p-16 rounded-[28px] bg-[#0c0d10] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Ready to start your project?
            </h3>
            <p className="text-sm sm:text-base text-zinc-400">
              Let's evaluate your technical requirements and formulate an executable roadmap.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-pill-white shrink-0"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

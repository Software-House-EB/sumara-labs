import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Plus } from 'lucide-react';

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
            We just launched Sumara Labs and haven't published our first client build yet. Our engineers are building right now — and these 2 slots will feature the first releases.
          </p>
        </div>

        {/* 2-Column Single Row Empty Project Skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-14 sm:mb-18">
          {/* Empty Project Card 01 */}
          <article className="flex flex-col gap-4 sm:gap-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f4f6f8] border border-zinc-200/70 p-6 sm:p-8 flex flex-col justify-between">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2.5s_infinite] -translate-x-full pointer-events-none" />

              {/* Top Bar inside card skeleton */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300/80" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white/90 backdrop-blur-sm border border-zinc-200 text-zinc-600 shadow-sm">
                  Work #01 • In Progress
                </span>
              </div>

              {/* Center Wireframe Mockup */}
              <div className="space-y-3 z-10 my-auto py-6">
                <div className="h-3 w-32 rounded-full bg-zinc-200/90" />
                <div className="h-7 w-3/4 rounded-lg bg-zinc-200/70" />
                <div className="h-3.5 w-1/2 rounded-full bg-zinc-200/50" />
              </div>

              {/* Bottom Tags Skeleton */}
              <div className="flex items-center gap-2 z-10 pt-3 border-t border-zinc-200/60">
                <span className="h-5 w-20 rounded-md bg-zinc-200/70" />
                <span className="h-5 w-24 rounded-md bg-zinc-200/70" />
              </div>
            </div>

            {/* Description details */}
            <div className="flex gap-4">
              <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch" />
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#55555c]">
                  <span className="font-semibold text-zinc-950 uppercase">Upcoming Work</span>
                  <span>•</span>
                  <span>Sumara Labs</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#0f0f11]">
                  Flagship Product 01
                </h3>
                <p className="text-sm text-[#55555c] leading-relaxed">
                  Architecture blueprint and frontend in active sprint. Full case study coming upon client launch.
                </p>
              </div>
            </div>
          </article>

          {/* Empty Project Card 02 */}
          <article className="flex flex-col gap-4 sm:gap-5">
            <Link
              to="/contact"
              className="group block relative aspect-[4/3] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f8f9fb] border border-dashed border-blue-300 hover:border-blue-500 transition-colors p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/40 to-transparent animate-[shimmer_2.5s_infinite] -translate-x-full pointer-events-none" />

              {/* Top Bar */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-200" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-blue-50 border border-blue-200 text-[#1649FF] shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Work #02 • Open Slot
                </span>
              </div>

              {/* Center Wireframe with Prompt */}
              <div className="text-center space-y-2 z-10 my-auto py-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 text-[#1649FF] flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                  <Plus className="w-5 h-5" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-zinc-900">
                  This spot is waiting for your product
                </p>
                <p className="text-xs text-zinc-500 max-w-[260px] mx-auto">
                  Click to kick off your build with our senior team
                </p>
              </div>

              {/* Bottom Tags Skeleton */}
              <div className="flex items-center justify-between z-10 pt-3 border-t border-blue-100">
                <span className="text-xs font-mono text-[#1649FF] font-medium">Claim this showcase</span>
                <ArrowUpRight className="w-4 h-4 text-[#1649FF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>

            {/* Description details */}
            <div className="flex gap-4">
              <div className="w-[3px] rounded-full bg-[#1649FF] shrink-0 self-stretch" />
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#55555c]">
                  <span className="font-semibold text-[#1649FF] uppercase">Reserved Slot</span>
                  <span>•</span>
                  <span>Available</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#0f0f11]">
                  Your Project Here
                </h3>
                <p className="text-sm text-[#55555c] leading-relaxed">
                  Partner with us to architect and launch. Let's make your vision our next featured work.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-20 sm:mb-28">
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

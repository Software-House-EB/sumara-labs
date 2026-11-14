import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Plus } from 'lucide-react';

export default function FeaturedWorks() {
  return (
    <section id="selected-work" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-[880px] mb-10 sm:mb-14">
          <p className="text-sm sm:text-base text-[#8e8e93] font-semibold mb-3 sm:mb-4">
            Our works
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0f0f11] leading-[1.1]">
            No projects here yet —<br className="hidden sm:block" /> but we're on it.
          </h2>
          <p className="text-base sm:text-lg text-[#55555c] mt-4 leading-relaxed max-w-[620px]">
            We just launched and haven't published our first project yet. These slots are reserved for the builds currently underway.
          </p>
        </div>

        {/* 2-Column Single Row Empty Project Skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Empty Project Card 01 */}
          <article className="flex flex-col gap-4 sm:gap-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f4f6f8] border border-zinc-200/70 p-5 sm:p-6 flex flex-col justify-between">
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
              <div className="space-y-3 z-10 my-auto py-4">
                <div className="h-3 w-28 rounded-full bg-zinc-200/90" />
                <div className="h-6 w-3/4 rounded-lg bg-zinc-200/70" />
                <div className="h-3 w-1/2 rounded-full bg-zinc-200/50" />
              </div>

              {/* Bottom Tags Skeleton */}
              <div className="flex items-center gap-2 z-10 pt-2 border-t border-zinc-200/60">
                <span className="h-5 w-16 rounded-md bg-zinc-200/70" />
                <span className="h-5 w-20 rounded-md bg-zinc-200/70" />
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
                  Currently in development by our engineering squad. First showcase dropping soon.
                </p>
              </div>
            </div>
          </article>

          {/* Empty Project Card 02 */}
          <article className="flex flex-col gap-4 sm:gap-5">
            <Link
              to="/contact"
              className="group block relative aspect-[4/3] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f8f9fb] border border-dashed border-blue-300 hover:border-blue-500 transition-colors p-5 sm:p-6 flex flex-col justify-between"
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
              <div className="text-center space-y-2 z-10 my-auto py-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 text-[#1649FF] flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                  <Plus className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-zinc-900">
                  This spot is waiting for your product
                </p>
                <p className="text-xs text-zinc-500 max-w-[240px] mx-auto">
                  Click to kick off your build with our senior team
                </p>
              </div>

              {/* Bottom Tags Skeleton */}
              <div className="flex items-center justify-between z-10 pt-2 border-t border-blue-100">
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
      </div>
    </section>
  );
}

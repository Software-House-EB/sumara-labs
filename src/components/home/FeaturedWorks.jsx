import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export default function FeaturedWorks({ onSelectProject }) {
  // Take top 4 flagship case studies
  const featuredCases = projectsData.slice(0, 4);

  return (
    <section id="selected-work" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        {/* Shakuro Staggered 2-Column Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
          {/* Column 1 (Normal flow) */}
          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
            {/* Project 1 */}
            <article
              onClick={() => onSelectProject(featuredCases[0])}
              className="group cursor-pointer flex flex-col gap-4 sm:gap-5"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f2f5f7]">
                <img
                  src={featuredCases[0].image}
                  alt={featuredCases[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch" />
                <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#55555c]">
                  <span className="font-semibold text-zinc-950 uppercase">{featuredCases[0].category}</span>
                  <span>•</span>
                  <span>{featuredCases[0].client}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0f0f11] group-hover:text-primary transition-colors leading-snug">
                  {featuredCases[0].title}
                </h3>
                <p className="text-sm sm:text-base text-[#55555c] leading-relaxed line-clamp-2">
                  {featuredCases[0].description}
                </p>
              </div>
              </div>
            </article>

            {/* Project 3 */}
            <article
              onClick={() => onSelectProject(featuredCases[2])}
              className="group cursor-pointer flex flex-col gap-4 sm:gap-5"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f2f5f7]">
                <img
                  src={featuredCases[2].image}
                  alt={featuredCases[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch" />
                <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#55555c]">
                  <span className="font-semibold text-zinc-950 uppercase">{featuredCases[2].category}</span>
                  <span>•</span>
                  <span>{featuredCases[2].client}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0f0f11] group-hover:text-primary transition-colors leading-snug">
                  {featuredCases[2].title}
                </h3>
                <p className="text-sm sm:text-base text-[#55555c] leading-relaxed line-clamp-2">
                  {featuredCases[2].description}
                </p>
              </div>
              </div>
            </article>
          </div>

          {/* Column 2 (Staggered offset downward on desktop for Shakuro masonry look!) */}
          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 md:pt-14 lg:pt-20">
            {/* Project 2 */}
            <article
              onClick={() => onSelectProject(featuredCases[1])}
              className="group cursor-pointer flex flex-col gap-4 sm:gap-5"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f2f5f7]">
                <img
                  src={featuredCases[1].image}
                  alt={featuredCases[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch" />
                <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#55555c]">
                  <span className="font-semibold text-zinc-950 uppercase">{featuredCases[1].category}</span>
                  <span>•</span>
                  <span>{featuredCases[1].client}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0f0f11] group-hover:text-primary transition-colors leading-snug">
                  {featuredCases[1].title}
                </h3>
                <p className="text-sm sm:text-base text-[#55555c] leading-relaxed line-clamp-2">
                  {featuredCases[1].description}
                </p>
              </div>
              </div>
            </article>

            {/* Project 4 */}
            <article
              onClick={() => onSelectProject(featuredCases[3])}
              className="group cursor-pointer flex flex-col gap-4 sm:gap-5"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f2f5f7]">
                <img
                  src={featuredCases[3].image}
                  alt={featuredCases[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch" />
                <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#55555c]">
                  <span className="font-semibold text-zinc-950 uppercase">{featuredCases[3].category}</span>
                  <span>•</span>
                  <span>{featuredCases[3].client}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0f0f11] group-hover:text-primary transition-colors leading-snug">
                  {featuredCases[3].title}
                </h3>
                <p className="text-sm sm:text-base text-[#55555c] leading-relaxed line-clamp-2">
                  {featuredCases[3].description}
                </p>
              </div>
              </div>
            </article>
          </div>
        </div>

        {/* Shakuro "See more work" Bottom Pill Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            to="/portfolio"
            className="btn-pill-secondary group inline-flex"
          >
            <span>See more work</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { clientLogos } from '../../data/projectsData';
import { Star } from 'lucide-react';

export default function LogoTicker() {
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-10 border-y border-white/[0.08] bg-[#060709] relative overflow-hidden">
      {/* Side gradient fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#060709] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#060709] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
          Enterprise & Ecosystem Trust
        </span>

        <div className="flex items-center gap-2 text-zinc-300">
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
          <span className="font-semibold text-white">4.9 / 5.0</span>
          <span className="text-zinc-400">Verified Client Reviews</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {repeatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[160px] text-zinc-400 hover:text-white font-display font-bold text-lg sm:text-xl tracking-wider transition-colors duration-200 cursor-default uppercase"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


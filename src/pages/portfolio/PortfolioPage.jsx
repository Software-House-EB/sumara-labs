import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Rocket, Code2, Palette, Zap, Layers } from 'lucide-react';

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
            Great things take a little time — ours are almost ready.
          </h1>
        </div>

        {/* Fun Empty State */}
        <div className="max-w-[860px] mx-auto pt-4 sm:pt-8">
          {/* Animated icon cluster */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-10 sm:mb-14">
            {[
              { Icon: Rocket, bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-[#1649FF]', delay: '0ms' },
              { Icon: Code2, bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-500', delay: '100ms' },
              { Icon: Palette, bg: 'bg-violet-50', border: 'border-violet-100', text: 'text-violet-500', delay: '200ms' },
              { Icon: Sparkles, bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-500', delay: '300ms' },
              { Icon: Zap, bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-500', delay: '400ms' },
              { Icon: Layers, bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-500', delay: '500ms' },
            ].map(({ Icon, bg, border, text, delay }, i) => (
              <div
                key={i}
                className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl ${bg} border ${border} flex items-center justify-center ${text} animate-bounce`}
                style={{ animationDelay: delay }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            ))}
          </div>

          {/* Main message */}
          <div className="text-center space-y-4 max-w-[680px] mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#0f0f11] leading-[1.15]">
              We're cooking up something special 🍳
            </h2>
            <p className="text-sm sm:text-base text-[#55555c] leading-relaxed">
              Our engineers and designers are deep in the trenches building remarkable products for our first clients. This wall will soon be filled with real case studies, live demos, and the stories behind each build.
            </p>
            <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed">
              In the meantime — want to be featured here? Let's create something extraordinary together.
            </p>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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

        {/* Bottom Banner */}
        <div className="mt-20 sm:mt-28 p-10 sm:p-16 rounded-[28px] bg-[#0c0d10] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
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

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import RollingText from '../ui/RollingText';

export default function HeroSection() {
  return (
    <section
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className="relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 flex flex-col justify-center bg-white overflow-hidden"
    >
      {/* Right Half: Slight Transparent Background Image with Semi-Blurred Faded Edges */}
      <div
        className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Subtle Ambient Breathing Motion */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            x: [0, -8, 0],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-[110%] h-[110%] -top-[5%] -left-[5%]"
        >
          {/* Main Semi-Transparent Image */}
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800&auto=format&fit=crop&q=85"
            alt=""
            className="w-full h-full object-cover object-center lg:object-left-center opacity-45 mix-blend-multiply filter contrast-[1.05]"
          />

          {/* Semi-Blur Edge Layer (Blurs the perimeter smoothly) */}
          <div className="absolute inset-0 backdrop-blur-[1.5px]" />
        </motion.div>

        {/* Soft Feather Gradients: Left Edge (blends seamlessly with text & white canvas) */}
        <div className="absolute top-0 left-0 bottom-0 w-32 sm:w-48 lg:w-72 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Soft Feather Gradients: Top Edge */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white via-white/60 to-transparent z-10" />

        {/* Soft Feather Gradients: Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

        {/* Right Edge — no fade, let image reach the viewport edge */}
      </div>

      {/* Hero Content Container */}
      <div className="section-container relative z-10">
        <div className="max-w-[780px] space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-medium tracking-tight-2 lg:tracking-tight-3 text-[#0f0f11] leading-[1.05]">
            Build Your App <br className="hidden sm:inline" />
            in Less than a Day
          </h1>

          <p className="text-lg sm:text-xl lg:text-[22px] text-[#55555c] max-w-[620px] leading-relaxed">
            Working alongside ambitious startups and enterprises to build scalable web, mobile, and cross-platform products — from concept to launch worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/contact"
              className="btn-pill-primary group/btn"
            >
              <RollingText text="Let's discuss your project" />
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>

            <a
              href="#selected-work"
              className="btn-pill-secondary group/btn"
            >
              <RollingText text="Explore our work" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import logoDark from '../../assets/images/main-logo.png';

const placeholderLogos = [1, 2, 3, 4, 5, 6, 7, 8];

const testimonials = [
  {
    id: 1,
    text: "A partner who thinks along with you. Sumara Labs was instrumental in delivering our platform ahead of schedule. Their engineering quality and communication were absolutely top-notch throughout the collaboration.",
    name: "Michael Moore",
    title: "CTO, FinTech StartUp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    text: "Exceptional commercial clarity. Unlike other agencies, they didn't try to build things we didn't need. They focused on business value and delivered a reliable system that scaled seamlessly.",
    name: "Sarah Jenkins",
    title: "Product VP, HealthTech Enterprise",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    text: "Their organization and skill level are excellent. Sumara Labs hires very skilled engineers and designers who understand commercial product goals from day one and deliver with extreme precision.",
    name: "David Chen",
    title: "Head of Engineering, ScioPay FX",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

export default function SocialProofBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative z-20 bg-white py-12 sm:py-16 lg:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clutch Proof, Heading & Navigation Arrows */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              {/* Clutch Rating Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-[#0f0f11] text-sm">5.0</span>
                <span className="text-[#55555c] text-xs">/ 60+ Clutch reviews</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#0f0f11] leading-[1.12]">
                Hear from <br className="hidden sm:inline" />
                our clients
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#55555c] leading-relaxed max-w-[420px]">
                Proven client satisfaction and verified recommendations reflecting our focus on high-impact, business-centric solutions.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-zinc-200 hover:border-zinc-400 bg-white flex items-center justify-center text-[#0f0f11] transition-all hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#1649FF] hover:bg-blue-700 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-500/25"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              <span className="text-xs font-mono text-[#55555c] ml-2">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Testimonial Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[24px] sm:rounded-[32px] bg-white border border-zinc-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-7 sm:p-10 md:p-12 overflow-hidden min-h-[260px] sm:min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Quote Body */}
                  <p className="text-base sm:text-lg md:text-xl text-[#0f0f11] font-normal leading-relaxed pr-4">
                    "{current.text}"
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3.5 pt-2">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-zinc-200 ring-2 ring-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[#0f0f11]">
                        {current.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#55555c]">
                        {current.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Trusted By: Auto Infinite Horizontal Scrolling Marquee */}
        <div className="mt-14 sm:mt-18 pt-10 sm:pt-14 border-t border-zinc-100">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-[#8e8e93] mb-8">
            Trusted by fast-growing startups and digital brands
          </p>

          {/* Marquee Wrapper with smooth side gradient fades */}
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
            <div className="flex items-center gap-14 sm:gap-20 w-max animate-marquee">
              {/* Duplicate array for seamless infinite looping */}
              {[...placeholderLogos, ...placeholderLogos].map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default px-2"
                >
                  <img
                    src={logoDark}
                    alt="Partner logo"
                    className="h-6 sm:h-7 w-auto object-contain select-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

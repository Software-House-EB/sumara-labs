import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    quote: "A true technology partner who thinks along with you. Sumara Labs was instrumental in delivering our platform three weeks ahead of schedule. Their engineering quality, architectural rigor, and transparent communication were absolutely world-class.",
    author: "Michael Moore",
    role: "Chief Technology Officer",
    company: "FinTech ScaleUp",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    verified: "Verified Clutch Review"
  },
  {
    quote: "Exceptional commercial clarity. Unlike other agencies, they didn't push us to build bloated features we didn't need. They focused squarely on business value and delivered a reliable system that handled our 10x traffic spike without a single hitch.",
    author: "Sarah Jenkins",
    role: "Vice President of Product",
    company: "HealthTech Enterprise",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    verified: "Verified Clutch Review"
  },
  {
    quote: "Sumara Labs built our FDA-compliant clinical screening architecture with zero data loss. The speed of their development team, paired with their deep expertise in healthcare compliance, makes them our go-to engineering squad.",
    author: "Dr. Elena Rostova",
    role: "Director of Biometric Research",
    company: "UNC Clinical Partners",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    verified: "Verified Sponsor Review"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const item = testimonials[current];

  return (
    <section className="py-24 sm:py-32 relative bg-[#060709] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Controls */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-400">
              [ 06 / CLIENT VOICES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
              Trusted by Founders <br />
              & Enterprise Leaders.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Read how our dedicated engineering squads solve mission-critical challenges for companies worldwide.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center text-white transition-all hover:scale-105 shadow-lg shadow-primary-600/30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-zinc-500 pl-4">
                0{current + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Column: Active Testimonial Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-8 sm:p-12 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl"
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-white/[0.04] pointer-events-none" />

                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-zinc-400 ml-2">
                    {item.verified}
                  </span>
                </div>

                <p className="text-base sm:text-xl text-zinc-200 leading-relaxed font-normal mb-8">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-14 h-14 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      {item.author}
                    </h4>
                    <p className="text-xs text-primary-400 font-medium">
                      {item.role}
                    </p>
                    <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3" />
                      {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


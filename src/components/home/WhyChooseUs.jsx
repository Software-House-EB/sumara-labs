import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Scale, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Delivery, Not Theatre',
    description: 'No endless months of conceptual workshops and abstract slide decks. We focus squarely on shipping functional, test-covered code that delivers measurable business outcomes from Sprint 1.',
  },
  {
    icon: Users,
    title: 'Senior Engineering Force (70%+)',
    description: 'Never outsourced to unsupervised juniors. Your project is led and coded by seasoned systems architects and principal engineers with 8 to 15+ years of production experience.',
  },
  {
    icon: Scale,
    title: 'Commercial Clarity from Day One',
    description: 'Predictable milestones, fixed-scope previews, and full budget transparency. We act as genuine technology co-founders rather than opportunistic billable-hour agencies.',
  },
  {
    icon: ShieldCheck,
    title: '100% Code & IP Ownership',
    description: 'Clean repository structures, enterprise documentation, zero proprietary vendor lock-in. You own every line of code, Dockerfile, and architecture diagram completely.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-400">
              [ 03 / OUR PHILOSOPHY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Engineered to Survive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Commercial Reality.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Derived from Sanskrit, our foundational ethos is <span className="text-white font-bold">"Sutra"</span> — truth, purity, and clarity. We remove the friction typical of digital agencies through transparent communication, rigorous engineering discipline, and uncompromised accountability.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary-600/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


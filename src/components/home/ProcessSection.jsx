import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import RollingText from '../ui/RollingText';

const whyChoosePoints = [
  {
    number: '01',
    title: 'Multinational company experience',
    desc: 'Our founders bring proven experience from leading multinational companies, combining deep business strategy with robust engineering skills to deliver high impact products.'
  },
  {
    number: '02',
    title: 'Affordable and worth the price',
    desc: 'Premium software development without enterprise markups. We provide transparent, accessible pricing designed to give you maximum value for every investment.'
  },
  {
    number: '03',
    title: 'Trusted partner',
    desc: 'We take genuine ownership of your product, maintaining total transparency, predictable delivery schedules, and clear communication from kickoff to launch.'
  },
  {
    number: '04',
    title: 'Free warranty and feedback',
    desc: 'We stand by everything we build with complimentary post launch warranty coverage, free bug fixes, and open feedback rounds so your product launches with complete peace of mind.'
  },
  {
    number: '05',
    title: '24/7 dedicated support',
    desc: 'Tech challenges and urgent needs do not stop after business hours. Our team is available around the clock to assist, monitor, and keep your systems operating smoothly.'
  }
];

export default function ProcessSection() {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* ========================================================
              LEFT COLUMN: Standard Flow (No Sticky / Split Scroll)
              ======================================================== */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#0f0f11] leading-[1.12]">
              Why Choose Sumara Labs?
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              No complicated jargon or endless delays. We follow modern software development best practices to make building your product smooth, fast, and completely stress free.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-pill-primary group/btn inline-flex"
              >
                <RollingText text="Let's discuss your project" />
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Aligned at top horizontally with Left
              ======================================================== */}
          <div className="md:col-span-7 divide-y divide-zinc-200">
            {whyChoosePoints.map((step, idx) => {
              const isOpen = openStep === idx;
              return (
                <div
                  key={idx}
                  className={`${idx === 0 ? 'pb-6 sm:pb-8 pt-1 sm:pt-1.5' : 'py-6 sm:py-8'} transition-colors`}
                >
                  <button
                    onClick={() => setOpenStep(isOpen ? -1 : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className={`text-sm font-mono font-medium transition-colors ${isOpen ? 'text-[#1649FF]' : 'text-zinc-400'
                        }`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-medium text-[#0f0f11] group-hover:text-[#1649FF] transition-colors leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900 shrink-0 transition-colors mt-0.5">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-8 sm:pl-12 text-sm sm:text-base text-[#55555c] leading-relaxed">
                          {step.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

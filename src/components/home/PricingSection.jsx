import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Crown, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { packagesData } from '../../data/projectsData';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-400">
            [ 07 / TRANSPARENT COMMERCIALS ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Predictable Packages. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Zero Hidden Costs.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Fixed scope, crystal-clear deliverable timelines, and full IP ownership guaranteed.
          </p>
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-primary-950/40 via-[#0e1220] to-[#090b14] border-2 border-primary-500 shadow-2xl shadow-primary-500/10 lg:-translate-y-2'
                  : 'bg-white/[0.02] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" />
                  <span>Most Selected</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    {pkg.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-primary-400" />
                    <span>{pkg.turnaround}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-8">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xs font-bold text-zinc-400">{pkg.currency}</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-zinc-400 ml-1">{pkg.unit}</span>
                  </div>
                  <span className="text-[11px] font-mono text-primary-400 mt-1 block">
                    Approx. {pkg.priceUsd} for international accounts
                  </span>
                </div>

                {/* Feature checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block font-semibold">
                    Included Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/[0.08]">
                <Link
                  to={`/contact?package=${encodeURIComponent(pkg.title)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    pkg.isPopular
                      ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-white/10 hover:bg-white text-white hover:text-zinc-950 border border-white/10'
                  }`}
                >
                  <span>Select {pkg.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


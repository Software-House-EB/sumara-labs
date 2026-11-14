import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowUpRight, Check, Clock } from 'lucide-react';
import { packagesData } from '../../data/projectsData';
import RollingText from '../../components/ui/RollingText';

const faqs = [
  {
    q: 'How quickly can our team begin development?',
    a: 'Typically within 3 to 5 business days after the initial technical discovery session. We assign dedicated lead architects and engineers right away.'
  },
  {
    q: 'Who owns the code and intellectual property?',
    a: 'You own 100% of the code, intellectual property, architecture designs, and infrastructure configurations from Day 1. Zero proprietary vendor lock-in.'
  },
  {
    q: 'Can we hire a dedicated monthly engineering squad?',
    a: 'Yes. In addition to our fixed-scope packages, we provide dedicated senior squads (Full-Stack + AI Engineers) on monthly sprint retainers with dedicated Slack channels and daily async standups.'
  },
  {
    q: 'How do you handle post-launch maintenance & warranty?',
    a: 'Every package comes with 30 to 60 days of complimentary post-launch warranty covering bug fixes, performance monitoring, and handover documentation. Ongoing SLA support retainers are also available.'
  }
];

export default function ServicePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 bg-white text-[#0f0f11]">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-[1000px] mb-12 sm:mb-16 space-y-4">
          <p className="text-sm sm:text-base text-[#8e8e93] font-semibold">
            Services & Packages
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#0f0f11] leading-[1.08]">
            Full-cycle product design and software development
          </h1>
          <p className="text-base sm:text-lg text-[#55555c] max-w-[720px] leading-relaxed">
            Transparent pricing and predictable deliverables tailored to your launch milestone — from our same-day instant MVP build to multi-week enterprise engineering sprints.
          </p>
        </div>

        {/* Featured Special Card: Instant Build Package (< 1 Day) */}
        <div className="mb-16 sm:mb-20 rounded-[24px] p-8 sm:p-10 lg:p-12 bg-white border-2 border-zinc-950 shadow-xl relative overflow-hidden">
          {/* Huge Semi-Transparent Background Watermark */}
          <div
            className="absolute right-4 sm:right-10 top-2 lg:top-4 pointer-events-none select-none text-[120px] sm:text-[180px] lg:text-[240px] font-bold tracking-tighter text-black/[0.05] leading-none z-0 whitespace-nowrap"
            aria-hidden="true"
          >
            &lt; 24 h
          </div>

          <div className="relative z-10 flex items-center justify-between mb-8 pb-6 border-b border-zinc-100">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-zinc-950 text-white">
              Instant Build
            </span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-stretch">
            {/* Left: Info & Scope */}
            <div className="flex-1 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch my-1" />
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#0f0f11]">
                    Instant App Build & Launch
                  </h2>
                  <p className="text-sm sm:text-base text-[#55555c] leading-relaxed max-w-2xl">
                    Build and launch your production web application in less than a day. Specifically designed for founders validating an MVP, urgent campaign launches, and next-day investor demos.
                  </p>
                </div>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                  Scope of Deliverables
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Complete responsive web application',
                    'Interactive UI/UX with custom layout',
                    'Form integrations, database & API routing',
                    'Production deployment on custom domain',
                    '100% full source code ownership',
                    'Real-time communication & live demo handover'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#55555c]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Pricing & Action Box */}
            <div className="w-full lg:w-[320px] shrink-0 p-6 sm:p-8 rounded-[20px] bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="pb-6 border-b border-zinc-200/60">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-zinc-400">Rp</span>
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f11]">
                      1.500.000
                    </span>
                    <span className="text-xs text-zinc-500 ml-1">/ Sprint</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    Fixed transparent scope agreed prior to kickoff. Zero hidden fees.
                  </p>
                </div>

                <p className="text-[11px] text-zinc-400 font-mono">
                  Kickoff begins immediately after scope approval
                </p>
              </div>

              <Link
                to="/contact?package=Instant%20App%20Build%20(%3C%2024%20Hours)"
                className="w-full py-3.5 rounded-[48px] bg-[#0f0f11] text-white hover:bg-black font-semibold text-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2 group/btn"
              >
                <RollingText text="Select Instant Build" />
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Milestone Packages */}
        <div className="mb-24 sm:mb-32">
          <div className="mb-10 sm:mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#55555c] font-semibold block">
              Milestone Sprints
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#0f0f11]">
              Standard Commercial Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-[24px] p-8 sm:p-10 flex flex-col justify-between bg-white border ${
                  pkg.isPopular
                    ? 'border-zinc-950 shadow-xl relative lg:-translate-y-2'
                    : 'border-zinc-200/80 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full ${
                      pkg.isPopular ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600'
                    }`}>
                      {pkg.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.turnaround}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0f0f11] mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-[#55555c] leading-relaxed mb-8">
                    {pkg.description}
                  </p>

                  <div className="pb-8 border-b border-zinc-100 mb-8">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-zinc-400">{pkg.currency}</span>
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f11]">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-zinc-500 ml-1">{pkg.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-10">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#55555c]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/contact?package=${encodeURIComponent(pkg.title)}`}
                  className={`w-full py-3.5 rounded-[48px] text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95 flex items-center justify-center gap-2 group/btn ${
                    pkg.isPopular
                      ? 'bg-[#0f0f11] text-white hover:bg-black hover:shadow-black/20'
                      : 'border border-zinc-300 text-zinc-950 hover:border-black hover:shadow-black/10'
                  }`}
                >
                  <RollingText text={`Select ${pkg.title}`} />
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#0f0f11] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-zinc-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-medium text-lg text-[#0f0f11]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-zinc-400">{isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
                  </button>
                  {isOpen && (
                    <p className="pt-3 text-sm sm:text-base text-[#55555c] leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

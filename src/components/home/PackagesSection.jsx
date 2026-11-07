import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Clock } from 'lucide-react';
import { packagesData } from '../../data/projectsData';

export default function PackagesSection() {
  return (
    <section id="pricing" className="py-14 sm:py-20 lg:py-24 bg-[#fafafa] relative">
      <div className="section-container">
        {/* Header */}
        <div className="mx-auto flex max-w-[900px] flex-col gap-4 text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#0f0f11] leading-[1.12]">
            Transparent commercial models
          </h2>
          <p className="text-base sm:text-lg lg:text-[20px] text-[#55555c] leading-relaxed">
            Predictable billing tailored to your milestone deliverables. No hidden overheads, no endless revision billing.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-[24px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 bg-white border ${
                pkg.isPopular
                  ? 'border-zinc-950 shadow-xl relative lg:-translate-y-2'
                  : 'border-zinc-200/80 hover:border-zinc-400 shadow-sm'
              }`}
            >
              <div>
                {/* Badge & Turnaround */}
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

                {/* Price Display */}
                <div className="pb-8 border-b border-zinc-100 mb-8">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    Investment from
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-zinc-400">{pkg.currency}</span>
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0f11]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-zinc-500 ml-1">{pkg.unit}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 mt-1 block">
                    Approx. {pkg.priceUsd} for international accounts
                  </span>
                </div>

                {/* Feature checklist */}
                <div className="space-y-3 mb-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block font-semibold">
                    Scope of Deliverables:
                  </span>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#55555c]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  to={`/contact?package=${encodeURIComponent(pkg.title)}`}
                  className={`w-full py-3.5 rounded-[48px] text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? 'bg-[#0f0f11] text-white hover:bg-black shadow-lg shadow-black/10'
                      : 'border border-zinc-300 text-zinc-950 hover:border-black hover:bg-zinc-50'
                  }`}
                >
                  <span>Select {pkg.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


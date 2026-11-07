import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Brand strategy & Discovery',
    sub: ['Discovery', 'Architecture blueprint', 'Technical feasibility'],
    desc: 'We clarify the core business model, audit existing codebases and APIs, define high-level system architecture, and lay out predictable milestone schedules.'
  },
  {
    number: '02',
    title: 'UI & UX design',
    sub: ['UI/UX', 'Interactive prototyping', 'Design systems'],
    desc: 'Translating product workflows into pixel-perfect Figma components, clickable prototypes, and unified design token systems before backend coding begins.'
  },
  {
    number: '03',
    title: 'Full-cycle engineering',
    sub: ['Frontend', 'Backend microservices', 'Database architecture'],
    desc: 'High-velocity two-week sprints. Continuous deployment to staging environments, automated test coverage, and transparent git repository access.'
  },
  {
    number: '04',
    title: 'AI-assisted product development',
    sub: ['RAG pipelines', 'Model integration', 'Autonomous workflows'],
    desc: 'Integrating enterprise LLMs, fine-tuned private models, vector embeddings, and autonomous agent loops into functional production features.'
  },
  {
    number: '05',
    title: 'Support & maintenance (SRE)',
    sub: ['Security audit', 'SOC2 / HIPAA compliance', '24/7 Monitoring'],
    desc: 'Rigorous end-to-end load testing, penetration testing, automated telemetry alerts, and 30 to 60 days of post-launch warranty.'
  },
  {
    number: '06',
    title: 'Scale & grow',
    sub: ['Performance optimization', 'Feature iterations', 'Global CDN'],
    desc: 'Continuous iteration and dedicated senior squads to scale user throughput, optimize database queries, and support international expansion.'
  }
];

export default function ProcessSection() {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section id="process" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column (Sticky Headline & CTA) */}
          <div className="md:col-span-5 md:sticky md:top-36 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#0f0f11] leading-[1.12]">
              A process built for efficient product development
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Sumara Labs combines strategy, design, engineering, AI-assisted workflows, and post-launch support to move products from early idea to launch and beyond.
            </p>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Each step is shaped to reduce waste, keep decisions clear, and help teams build faster without losing product quality.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="btn-pill-primary group inline-flex"
              >
                <span>Let's discuss your project</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column (Structured Accordion Steps) */}
          <div className="md:col-span-7 divide-y divide-zinc-200">
            {processSteps.map((step, idx) => {
              const isOpen = openStep === idx;
              return (
                <div key={idx} className="py-6 sm:py-8 transition-colors">
                  <button
                    onClick={() => setOpenStep(isOpen ? -1 : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-sm font-mono text-zinc-400 font-medium">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-medium text-[#0f0f11] group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {step.sub.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs text-zinc-500 font-mono"
                            >
                              {s} {sIdx < step.sub.length - 1 ? '•' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 group-hover:border-black shrink-0 transition-colors mt-1">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pl-8 sm:pl-12 text-sm sm:text-base text-[#55555c] leading-relaxed">
                      {step.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

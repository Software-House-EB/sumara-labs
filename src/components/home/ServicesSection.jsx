import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Code2, Smartphone, Cloud, Plus, Minus, CheckCircle } from 'lucide-react';
import RollingText from '../ui/RollingText';

const serviceDisciplines = [
  {
    number: '01',
    title: 'AI & Intelligent Systems Engineering',
    summary: 'Custom private RAG architectures, LLM fine-tuning, autonomous agentic workflows, and predictive analytics pipelines.',
    icon: Cpu,
    accentColor: 'from-blue-500/20 to-cyan-500/20',
    deliverables: [
      'Private HIPAA/SOC2 compliant RAG enclaves',
      'Autonomous multi-agent orchestration (CrewAI, AutoGen)',
      'Domain fine-tuned embedding & reranking engines',
      'Automated data ingestion & document parsing pipelines',
      'AI guardrails, evaluation frameworks & prompt ops'
    ],
    tech: ['Anthropic Claude', 'OpenAI GPT-4o', 'AWS Bedrock', 'LangChain', 'LlamaIndex', 'Pinecone', 'vLLM']
  },
  {
    number: '02',
    title: 'Full-Cycle Web & Enterprise Software',
    summary: 'High-concurrency web applications, microservices, secure REST/GraphQL APIs, and resilient data backbones.',
    icon: Code2,
    accentColor: 'from-purple-500/20 to-blue-500/20',
    deliverables: [
      'Mission-critical enterprise SaaS architectures',
      'High-throughput transaction and settlement engines',
      'Role-based access management (RBAC, OAuth, SAML)',
      'Sub-50ms low-latency frontend user experiences',
      'Comprehensive integration with Stripe, ERPs, and banking APIs'
    ],
    tech: ['.NET Core 8', 'React 18', 'Next.js 14', 'TypeScript', 'Node.js', 'SQL Server', 'PostgreSQL', 'Redis']
  },
  {
    number: '03',
    title: 'High-Performance Mobile Applications',
    summary: 'Fluid 120fps iOS and Android cross-platform solutions engineered for immediate consumer delight and offline resilience.',
    icon: Smartphone,
    accentColor: 'from-emerald-500/20 to-teal-500/20',
    deliverables: [
      'Cross-platform React Native codebases with native modules',
      'Biometric authentication & secure on-device keychain vaults',
      'Offline-first synchronization with conflict resolution',
      'Real-time WebSocket notifications & geofencing',
      'Seamless Apple App Store & Google Play publishing compliance'
    ],
    tech: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Redux Toolkit', 'Fastlane', 'Firebase']
  },
  {
    number: '04',
    title: 'Cloud Infrastructure, Security & DevOps',
    summary: 'Zero-downtime CI/CD deployment pipelines, automated Kubernetes orchestration, and enterprise security compliance.',
    icon: Cloud,
    accentColor: 'from-amber-500/20 to-orange-500/20',
    deliverables: [
      'Infrastructure as Code (Terraform / Pulumi) automated setups',
      'Multi-region high-availability cluster scaling',
      'Automated staging preview environments on every pull request',
      'Continuous security audit logging, pen-testing & compliance',
      '24/7 proactive telemetry, Datadog alerts & automated rollbacks'
    ],
    tech: ['AWS', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog', 'Cloudflare']
  }
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#060709] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-400">
              [ 02 / CAPABILITIES & DISCIPLINES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              End-to-End Execution. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                Zero Hand-off Friction.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              From early-stage architectural discovery to autonomous AI agent orchestration and enterprise production scale.
            </p>
          </div>

          <Link
            to="/service"
            className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-medium text-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5 active:translate-y-0 active:scale-95"
          >
            <RollingText text="View Pricing Packages" />
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>

        {/* Shakuro Interactive Accordion/Card Discipline Rows */}
        <div className="space-y-4">
          {serviceDisciplines.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0e111a] border-white/20 shadow-2xl'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/15'
                }`}
              >
                {/* Row Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="text-sm sm:text-base font-mono font-bold text-zinc-500">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary-400 shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
                        {item.title}
                      </h3>
                      <p className="hidden sm:block text-xs sm:text-sm text-zinc-400 mt-1 line-clamp-1">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/[0.06]"
                    >
                      <p className="sm:hidden text-sm text-zinc-400 mb-6 leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        {/* Deliverables Checklist */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                            Core Deliverables & Outputs
                          </h4>
                          <div className="space-y-2.5">
                            {item.deliverables.map((del, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack Matrix */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                            Ecosystem & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.08]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="pt-6">
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 text-xs font-bold text-primary-400 hover:text-white transition-colors"
                            >
                              <span>Consult on {item.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


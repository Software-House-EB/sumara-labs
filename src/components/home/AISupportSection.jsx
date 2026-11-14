import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bot, Gamepad2, Sparkles, Check } from 'lucide-react';
import RollingText from '../ui/RollingText';

export default function AISupportSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="section-container">
        {/* Header Block */}
        <div className="mb-10 sm:mb-14 flex flex-col items-center text-center max-w-[900px] mx-auto gap-4">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#0f0f11] leading-[1.12]">
            Building faster with the latest AI tech & trends
          </h2>
          <p className="text-base sm:text-lg lg:text-[20px] text-[#55555c] leading-relaxed">
            Sumara Labs uses AI where it makes product work clearer, faster, and more practical: early exploration, prototyping, documentation, QA, smarter workflows, and features that process text, images, voice, data, or user intent. Product logic, UX, architecture, security, and launch quality stay in human hands.
          </p>
        </div>

        {/* 3-Column Grid with Left Border Lines (Exact Shakuro Architecture) */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {/* Item 1 */}
          <li className="relative flex flex-col justify-between border-l border-zinc-200 pl-6 sm:pl-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 mb-6">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#0f0f11] mb-3 leading-snug">
                AI in the delivery process
              </h3>
              <p className="text-sm sm:text-base text-[#55555c] leading-relaxed mb-8">
                We use AI for rapid prototyping and QA. We can deliver to you in{' '}
                <span className="text-[#1649FF] font-medium">less than a day</span>.
              </p>
            </div>
            <div>
              <Link
                to="/service"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0f0f11] hover:text-primary transition-colors group"
              >
                <span>Explore our AI workflow</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </li>

          {/* Item 2 */}
          <li className="relative flex flex-col justify-between border-l border-zinc-200 pl-6 sm:pl-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 mb-6">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#0f0f11] mb-3 leading-snug">
                We can build almost anything
              </h3>
              <p className="text-sm sm:text-base text-[#55555c] leading-relaxed mb-8">
                From websites and digital invitations to Roblox games, we build tailored experiences for any idea.
              </p>
            </div>
            <div>
              <Link
                to="/service"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0f0f11] hover:text-primary transition-colors group"
              >
                <span>See what we can build</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </li>

          {/* Item 3 */}
          <li className="relative flex flex-col justify-between border-l border-zinc-200 pl-6 sm:pl-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#0f0f11] mb-3 leading-snug">
                With AI, the sky is the limit
              </h3>
              <p className="text-sm sm:text-base text-[#55555c] leading-relaxed mb-8">
                AI video content, workflow automation, and custom tech solutions. Message us anytime on social media.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0f0f11] hover:text-primary transition-colors group"
              >
                <span>Consult with us on socials</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </li>
        </ul>

        {/* Featured Instant Build Card (< 24h) */}
        <div className="mt-14 sm:mt-18 lg:mt-20">
          <div className="rounded-[24px] sm:rounded-[28px] p-7 sm:p-10 lg:p-12 bg-white border border-zinc-200/90 shadow-xl shadow-black/[0.03] relative overflow-hidden">
            {/* Background Watermark */}
            <div
              className="absolute right-4 sm:right-10 top-2 lg:top-4 pointer-events-none select-none text-[100px] sm:text-[160px] lg:text-[220px] font-bold tracking-tighter text-black/[0.04] leading-none z-0 whitespace-nowrap"
              aria-hidden="true"
            >
              &lt; 24h
            </div>

            {/* Top Bar of the Card */}
            <div className="relative z-10 flex items-center mb-8 pb-5 border-b border-zinc-100">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#0f0f11] text-white">
                Instant Build
              </span>
            </div>

            {/* Content Flex / Grid */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-stretch">
              {/* Left Column: Title, Description, & Deliverables */}
              <div className="flex-1 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-[3px] rounded-full bg-[#1649FF] shrink-0 self-stretch my-1" />
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#0f0f11]">
                      Instant App Build & Launch
                    </h3>
                    <p className="text-sm sm:text-base text-[#55555c] leading-relaxed max-w-2xl">
                      Build and launch your production web application in less than a day. Specifically designed for founders validating an MVP, urgent campaign launches, and next day investor demos.
                    </p>
                  </div>
                </div>

                {/* Scope of Deliverables Checklist */}
                <div className="space-y-3 pt-1">
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
                      'Realtime communication & live demo handover'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#55555c]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Instant Build Action */}
              <div className="w-full lg:w-[320px] shrink-0 p-6 sm:p-8 rounded-[20px] bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="pb-5 border-b border-zinc-200/60">
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

          {/* Centered Button & Description to Services Page */}
          <div className="mt-10 sm:mt-14 flex flex-col items-center text-center gap-4">
            <p className="text-sm sm:text-base text-[#55555c] max-w-lg">
              Want another option such as complex business platforms, game development, or even AI video content?
            </p>
            <Link
              to="/service"
              className="btn-pill-secondary group/btn inline-flex items-center gap-2"
            >
              <RollingText text="Explore our services" />
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

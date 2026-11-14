import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bot, Gamepad2, Sparkles } from 'lucide-react';

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
                We use AI for rapid discovery, architectural prototyping, automated documentation, synthetic test generation, and QA, helping teams ship weeks ahead of schedule without sacrificing code quality.
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
                From modern websites and digital wedding invitations to interactive Roblox games, we have hands-on experience developing diverse digital products tailored to your exact vision.
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
                More than standard development: we create AI content videos, automate workflows, and tackle any custom tech request. Have an idea? Feel free to consult with us directly or message us on social media.
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
      </div>
    </section>
  );
}

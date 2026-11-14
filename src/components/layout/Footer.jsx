import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import whiteLogo from '../../assets/images/white-logo.png';
import RollingText from '../ui/RollingText';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0d10] text-white relative z-10 pt-14 sm:pt-20 lg:pt-24 pb-12 overflow-hidden" id="footer">
      <div className="section-container">
        {/* Top Split Section: "Have an idea? We can help." & CTA */}
        <div className="pb-16 sm:pb-20 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start justify-between">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-white leading-[1.05]">
              Have an idea? <br />
              <span className="text-zinc-400">We can help.</span>
            </h2>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-[48px] bg-white text-zinc-950 hover:bg-zinc-100 px-8 py-4 text-base font-semibold transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:translate-y-0 active:scale-95 group/btn"
              >
                <RollingText text="Start your project" />
                <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>

              <a
                href="mailto:sumaralabs@gmail.com"
                className="inline-flex items-center justify-center rounded-[48px] border border-white/20 text-white hover:border-white px-7 py-4 text-base font-medium transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/5 active:translate-y-0 active:scale-95 group/btn"
              >
                <RollingText text="sumaralabs@gmail.com" />
              </a>
            </div>
          </div>

          {/* Clutch Rating Box on Right */}
          <div className="lg:col-span-4 lg:text-right space-y-3">
            <div className="inline-flex flex-col lg:items-end p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white font-bold text-base ml-1">5.0</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium">Based on 60+ verified reviews</p>
              <p className="text-xs text-zinc-500 mt-2">Recognized for top digital product engineering</p>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation Sitemap (Exact Shakuro Schema) */}
        <div className="py-16 sm:py-20 border-b border-white/10 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 text-sm">
          {/* Col 1: Development */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Development</h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><Link to="/service" className="hover:text-white transition-colors">Custom Software Development</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">AI & LLM Integration</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">.NET Core & Microservices</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">React & Next.js Platforms</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Mobile App Engineering</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Cloud & Site Reliability (SRE)</Link></li>
            </ul>
          </div>

          {/* Col 2: Design */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Design</h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><Link to="/service" className="hover:text-white transition-colors">Digital Product Design</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">UI & UX Architecture</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Design Systems & Tokens</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Interactive Prototyping</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Brand Identity & Strategy</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Industries</h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Fintech & Banking</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Healthcare & MedTech</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Enterprise SaaS</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">E-Commerce</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">E-Learning & Education</Link></li>
            </ul>
          </div>

          {/* Col 4: Company & Locations */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Company</h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><Link to="/aboutus" className="hover:text-white transition-colors">About Sumara Labs</Link></li>
              <li><Link to="/aboutus" className="hover:text-white transition-colors">Our Values ("Sutra")</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Selected Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
            <div className="pt-3 text-xs text-zinc-400 space-y-1">
              <p className="text-white font-medium">Prague • Jakarta</p>
              <p>+420 603 410 127</p>
            </div>
          </div>
        </div>

        {/* Socials & Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-6">
            <img src={whiteLogo} alt="Sumara Labs" className="h-6 sm:h-10 w-auto object-contain opacity-90" />
            <p>© {year} Sumara Labs Limited. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-zinc-400 font-medium">
            <a href="https://linkedin.com/company/sumara-labs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com/sumaralabs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://tiktok.com/@sumara.labs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Dribbble</a>
            <a href="https://clutch.co" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Clutch</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

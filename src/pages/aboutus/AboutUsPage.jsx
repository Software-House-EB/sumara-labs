import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '14+', label: 'Years on the market' },
  { value: '350+', label: 'Completed projects' },
  { value: '25+', label: 'Countries worldwide' },
  { value: '70%', label: 'Senior engineers' },
  { value: '98%', label: 'Client satisfaction' }
];

const values = [
  {
    title: 'Speed with Efficiency',
    desc: 'Velocity is meaningless without architectural discipline. We build clean, tested systems that launch rapidly and survive scale.'
  },
  {
    title: 'Customer-Centric Approach',
    desc: 'We obsess over commercial deliverables. Code is a lever for company growth, not an academic exercise.'
  },
  {
    title: 'Truth, Purity & Clarity ("Sutra")',
    desc: 'Derived from Sanskrit, our name embodies radical honesty in engineering estimates, transparent code reviews, and zero agency posturing.'
  },
  {
    title: 'Solution Driven',
    desc: 'We never point out architectural bottlenecks without offering viable, cost-effective solutions.'
  },
  {
    title: 'Respect and Partnership',
    desc: 'We act as authentic technology co-founders, treating your team and vision with long-term accountability.'
  }
];

const team = [
  {
    name: 'Edward Anthony',
    role: 'Principal Technology Director',
    experience: '15+ Years Experience',
    bio: 'Pioneering distributed web architectures, high-concurrency cloud systems, and industrial UI/UX standards that maximize commercial conversion.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80'
  },
  {
    name: 'Sidomo Siriki',
    role: 'Head of Infrastructure & Operations',
    experience: '9+ Years Experience',
    bio: 'Expert in microservices orchestration, zero-downtime CI/CD deployment pipelines, and enterprise-grade site reliability engineering.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80'
  }
];

export default function AboutUsPage() {
  return (
    <div className="pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 bg-white text-[#0f0f11]">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-[1000px] mb-16 sm:mb-24 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#55555c] block">
            About Sumara Labs
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#0f0f11] leading-[1.05]">
            Engineering digital products on truth and clarity
          </h1>
          <p className="text-lg sm:text-xl text-[#55555c] leading-relaxed max-w-[760px]">
            Rooted in the Sanskrit "Sutra" (truth, purity, and clarity), Sumara Labs was established to eliminate the unnecessary friction and theatre common in traditional agencies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 pb-16 sm:pb-20 border-b border-zinc-200 mb-20 sm:mb-28">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0f0f11]">{s.value}</p>
              <p className="text-xs sm:text-sm text-[#55555c]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 sm:mb-32">
          <div className="md:col-span-5 space-y-4 md:sticky md:top-36">
            <span className="text-xs font-mono uppercase tracking-widest text-[#55555c]">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0f0f11] leading-tight">
              Values that guide our craft
            </h2>
            <p className="text-sm sm:text-base text-[#55555c] leading-relaxed">
              We hold ourselves to strict architectural truth, transparent communication, and uncompromised commercial accountability.
            </p>
          </div>

          <div className="md:col-span-7 space-y-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-[20px] bg-[#fafafa] border border-zinc-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="text-xl font-medium text-[#0f0f11]">{v.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-[#55555c] leading-relaxed pl-7">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-24 sm:mb-32 space-y-12">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#55555c]">
              Engineering Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0f0f11]">
              Guided by senior architects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.map((t, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-zinc-100">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/90 backdrop-blur-md text-zinc-950 font-medium">
                      {t.experience}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-medium text-[#0f0f11]">{t.name}</h3>
                  <p className="text-xs font-mono text-zinc-500">{t.role}</p>
                  <p className="text-sm text-[#55555c] leading-relaxed pt-2">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="p-10 sm:p-16 rounded-[28px] bg-[#fafafa] border border-zinc-200/80 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Prague, Czech Republic</span>
            </div>
            <h4 className="text-xl font-medium text-[#0f0f11]">Central European Hub</h4>
            <p className="text-sm text-[#55555c] leading-relaxed">
              Mezibranská 1668/5, New Town, 111 00 Prague 1.<br />
              Enterprise coordination, European partner relations, and Western timezone alignment.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </div>
            <h4 className="text-xl font-medium text-[#0f0f11]">Southeast Asia Production Base</h4>
            <p className="text-sm text-[#55555c] leading-relaxed">
              Software house operations, AI laboratory testing, and round-the-clock development supporting Asia-Pacific and North American clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

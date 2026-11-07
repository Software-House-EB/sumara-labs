import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Building, Layers, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Healthcare Tech', value: 'healthcare' },
  { label: 'FinTech & Web3', value: 'fintech' },
  { label: 'Enterprise SaaS', value: 'enterprise' },
  { label: 'Mobile Apps', value: 'mobile' },
];

export default function SelectedWork({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categorySlug === activeCategory);

  return (
    <section id="selected-work" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-400">
              [ 01 / SELECTED WORK ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              Real-World Products. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                Engineered for Scale.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Explore how we translate ambitious commercial roadmaps into high-converting, resilient digital platforms for industry leaders.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>View All Archives ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-white text-zinc-950 font-bold shadow-lg shadow-white/10'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-3xl bg-[#0e111a] border border-white/[0.08] hover:border-primary-500/40 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-[#0e111a]/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary-500 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Main Impact Metric Highlight Overlay */}
                {project.impact && project.impact[0] && (
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-display">
                      {project.impact[0].metric}
                    </span>
                    <span className="text-[11px] text-zinc-300 font-medium">
                      {project.impact[0].label}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="flex gap-4">
                  <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch" />
                  <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                    <Building className="w-3.5 h-3.5 text-primary-400" />
                    <span>Client: {project.client}</span>
                    <span className="text-zinc-600">•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-primary-300 transition-colors font-display">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-3 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  </div>
                </div>

                {/* Tech Chips & Button */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-zinc-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-primary-400 group-hover:text-white transition-colors shrink-0">
                    Inspect Case &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


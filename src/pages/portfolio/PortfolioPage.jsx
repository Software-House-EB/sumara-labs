import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import ProjectModal from '../../components/ui/ProjectModal';

const categories = [
  { label: 'Featured', value: 'featured' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Others', value: 'others' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('web');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = projectsData.filter((p) => {
    // 1. Search Query Filter (Title, Client, Category, TechStack, Deliverables, Description)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matches =
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.deliverables?.some((d) => d.toLowerCase().includes(q)) ||
        p.techStack?.some((t) => t.toLowerCase().includes(q));
      if (!matches) return false;
    }

    // 2. Category Tab Filter
    if (activeCategory === 'featured') return p.featured === true;
    if (activeCategory === 'web') {
      return (
        p.categorySlug === 'enterprise' ||
        p.categorySlug === 'fintech' ||
        p.categorySlug === 'healthcare'
      );
    }
    if (activeCategory === 'mobile') {
      return (
        p.categorySlug === 'mobile' ||
        p.deliverables?.some((d) => d.toLowerCase().includes('mobile') || d.toLowerCase().includes('app'))
      );
    }
    if (activeCategory === 'others' || activeCategory === 'Others') {
      return (
        p.deliverables?.some((d) => d.toLowerCase().includes('design') || d.toLowerCase().includes('brand')) ||
        p.categorySlug === 'fintech'
      );
    }
    return true;
  });

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 bg-white text-[#0f0f11]">
      <div className="section-container">
        {/* Shakuro Header Layout */}
        <div className="max-w-[1100px] mb-10 sm:mb-14">
          <p className="text-sm sm:text-base text-[#8e8e93] font-semibold mb-5 sm:mb-6">
            Our works
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] font-medium tracking-tight-2 text-[#0f0f11] leading-[1.08] max-w-[1040px]">
            Here are some of the projects we've done for our clients.
          </h1>
        </div>

        {/* Shakuro Category Filter Links & Right Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 sm:mb-16">
          {/* Left: Plain Text Category Filter Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-base sm:text-lg transition-colors duration-200 ${isActive
                    ? 'text-[#0f0f11] font-semibold'
                    : 'text-[#8e8e93] hover:text-[#0f0f11] font-semibold'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right: Rounded Pill Search Bar (Matching Shakuro Design) */}
          <div className="relative w-full sm:w-48 md:w-64">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-9 py-2 rounded-full border border-zinc-200/90 hover:border-zinc-300 focus:border-zinc-900 focus:outline-none text-sm text-[#0f0f11] placeholder:text-zinc-400 font-semibold bg-white transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 text-zinc-400 hover:text-zinc-600 transition-colors p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2-Column Staggered Grid (Matching Shakuro Case Studies) */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
            {filtered.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => handleOpenProject(project)}
                className={`group cursor-pointer flex flex-col gap-4 sm:gap-5 ${idx % 2 === 1 ? 'md:pt-16' : ''
                  }`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#f2f5f7]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[3px] rounded-full bg-blue-500 shrink-0 self-stretch" />
                  <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#55555c]">
                    <span className="font-semibold text-zinc-950 uppercase">{project.category}</span>
                    <span>•</span>
                    <span>{project.client}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0f0f11] group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#55555c] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-3">
            <p className="text-lg font-medium text-[#0f0f11]">No projects found</p>
            <p className="text-sm text-[#55555c]">
              No projects matched "{searchQuery}". Try another keyword or clear the search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('web');
              }}
              className="btn-pill-secondary text-xs inline-flex mt-2"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-20 sm:mt-28 p-10 sm:p-16 rounded-[28px] bg-[#0c0d10] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Ready to start your project?
            </h3>
            <p className="text-sm sm:text-base text-zinc-400">
              Let's evaluate your technical requirements and formulate an executable roadmap.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-pill-white shrink-0"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

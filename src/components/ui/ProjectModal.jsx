import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import RollingText from './RollingText';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container (Clean Light Minimalist Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl z-10 text-[#0f0f11] border border-zinc-200"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-zinc-200 flex items-center justify-center transition-all duration-200 text-zinc-950 hover:scale-105 shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image */}
            <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-zinc-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-[#0f0f11] text-white">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-mono text-zinc-700 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200">
                    {project.year}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#0f0f11] leading-tight">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 flex items-center gap-1.5 font-medium">
                  <Building className="w-4 h-4 text-zinc-400" />
                  Client: <span className="text-zinc-900">{project.client}</span>
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 space-y-10">
              {/* Metrics Grid */}
              {project.impact && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="space-y-1 text-center sm:text-left">
                      <p className="text-3xl sm:text-4xl font-medium text-[#0f0f11] tracking-tight">
                        {item.metric}
                      </p>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-[#0f0f11] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-zinc-600" />
                    The Challenge
                  </h3>
                  <p className="text-sm text-[#55555c] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-[#0f0f11] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Engineering Solution
                  </h3>
                  <p className="text-sm text-[#55555c] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              {project.deliverables && (
                <div className="space-y-3 pt-6 border-t border-zinc-100">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                    Key Deliverables & Systems
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-3 pt-6 border-t border-zinc-100">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-500">
                  Interested in scaling a similar architecture for your platform?
                </p>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[48px] bg-[#0f0f11] hover:bg-black text-white font-medium text-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-95 group/btn"
                >
                  <RollingText text="Discuss This Architecture" />
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

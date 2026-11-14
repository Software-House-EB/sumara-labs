import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, Send, ShieldCheck } from 'lucide-react';
import RollingText from '../ui/RollingText';

const projectTypes = [
  { id: 'web', label: 'Web Application / SaaS', baseTime: '4-8 wks' },
  { id: 'mobile', label: 'Mobile App (iOS / Android)', baseTime: '6-10 wks' },
  { id: 'ai', label: 'AI & LLM Agent Pipeline', baseTime: '3-6 wks' },
  { id: 'design', label: 'UI/UX & Product Design', baseTime: '2-4 wks' },
];

const projectStages = [
  'Concept / Idea Stage',
  'Figma Wireframes Ready',
  'Existing Codebase Scale-Up',
  'Architecture Audit'
];

const featureList = [
  { id: 'auth', label: 'User Auth & Role Management' },
  { id: 'payments', label: 'Payment Gateway (Stripe/Midtrans)' },
  { id: 'ai-chat', label: 'Private AI / RAG Chatbot' },
  { id: 'realtime', label: 'Real-time Telemetry & Websockets' },
  { id: 'cms', label: 'Admin CMS & Analytics Dashboard' },
  { id: 'multi-lang', label: 'Multi-Language / Localization' },
];

export default function CostEstimatorSection() {
  const [selectedType, setSelectedType] = useState('web');
  const [selectedStage, setSelectedStage] = useState('Concept / Idea Stage');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'cms']);
  const [timeline, setTimeline] = useState('1 — 3 months');
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-24 sm:py-32 relative bg-[#060709] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-400">
            [ 08 / INTERACTIVE ESTIMATOR ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Calculate Your Scope & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              Get an Immediate Roadmap.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Select your project parameters to receive a custom engineering preview and timeline estimate within 24 hours.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0e111a] border border-white/[0.08] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-6 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white font-display">
                Estimate Request Received!
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formState.name}</span>. Our technical architects are reviewing your specifications. Expect a detailed breakdown in your inbox at <span className="text-primary-400 font-semibold">{formState.email}</span> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                >
                  Configure another estimate
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Project Type */}
              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                  Step 1: What are you looking to build?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                        selectedType === type.id
                          ? 'bg-primary-600/20 border-primary-500 text-white shadow-lg shadow-primary-600/10'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-mono text-primary-400 block mb-1">
                        Typical: {type.baseTime}
                      </span>
                      <p className="text-sm font-bold leading-snug">{type.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Current Stage */}
              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                  Step 2: What is the current status of your project?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {projectStages.map((stage) => (
                    <button
                      type="button"
                      key={stage}
                      onClick={() => setSelectedStage(stage)}
                      className={`px-4 py-3 rounded-xl text-xs font-medium text-center border transition-all ${
                        selectedStage === stage
                          ? 'bg-white text-zinc-950 font-bold border-white'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white'
                      }`}
                    >
                      {stage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Feature Checklist */}
              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                  Step 3: Required Core Capabilities (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {featureList.map((feature) => {
                    const isChecked = selectedFeatures.includes(feature.id);
                    return (
                      <button
                        type="button"
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`p-3.5 rounded-xl text-left border flex items-center gap-3 transition-all ${
                          isChecked
                            ? 'bg-primary-950/40 border-primary-500 text-white'
                            : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? 'bg-primary-500 border-primary-400 text-white'
                              : 'border-white/20'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs font-medium">{feature.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact details to receive the estimate */}
              <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                  Step 4: Where should we deliver your estimate & architecture roadmap?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp (Optional)"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Additional project nuances or target launch date..."
                  value={formState.note}
                  onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict NDA Protected • Zero Spam Guarantee</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-bold text-sm sm:text-base transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-600/30 active:translate-y-0 active:scale-95 group/btn cursor-pointer"
                >
                  <RollingText text="Generate Custom Proposal" />
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}


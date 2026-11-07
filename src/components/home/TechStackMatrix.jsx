import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Server, Smartphone, Check } from 'lucide-react';

const techGroups = [
  {
    id: 'ai',
    title: 'AI Models & LLMs',
    icon: Cpu,
    items: ['Anthropic Claude 3.5', 'OpenAI GPT-4o', 'AWS Bedrock', 'Mistral Large', 'Meta Llama 3', 'Azure OpenAI', 'Pinecone Vector DB', 'vLLM']
  },
  {
    id: 'agents',
    title: 'Agentic Frameworks',
    icon: Layers,
    items: ['LangChain', 'LlamaIndex', 'CrewAI', 'AutoGen', 'DSPy', 'Semantic Kernel', 'Haystack']
  },
  {
    id: 'software',
    title: 'Enterprise & Full-Stack',
    icon: Server,
    items: ['.NET Core 8 / C#', 'React 18', 'Next.js 14', 'TypeScript', 'Node.js', 'Python FastAPI', 'SQL Server', 'PostgreSQL', 'Redis']
  },
  {
    id: 'mobile',
    title: 'Mobile & Cloud Ops',
    icon: Smartphone,
    items: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Terraform']
  }
];

export default function TechStackMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-400">
            [ 05 / ENGINEERING ARSENAL ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Built on Modern, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Battle-Tested Technologies.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            We do not chase transient tech fads. Every library, model, and framework in our stack has proven enterprise reliability.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {techGroups.map((group, idx) => {
            const Icon = group.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-zinc-950 shadow-xl shadow-white/10'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Tech Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {techGroups[activeTab].items.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary-500/40 transition-all flex flex-col justify-between group hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-2 h-2 rounded-full bg-primary-400" />
                <span className="text-[10px] font-mono text-zinc-500">PROD READY</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-primary-300 transition-colors">
                {tech}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


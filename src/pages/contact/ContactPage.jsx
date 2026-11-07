import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

const budgetOptions = ['< $5k / Rp 50M', '$5k — $15k / Rp 150M', '$15k — $40k / Rp 400M', '$40k+ Enterprise'];
const serviceOptions = ['Web Application & SaaS', 'AI & Machine Learning', 'UI & UX Product Design', 'Mobile App Development', 'Dedicated Engineering Squad'];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefilled = searchParams.get('package') || '';

  const [selectedServices, setSelectedServices] = useState(
    prefilled ? [prefilled] : ['Web Application & SaaS']
  );
  const [selectedBudget, setSelectedBudget] = useState('$5k — $15k / Rp 150M');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: prefilled ? `Hello Sumara Labs, I would like to inquire about the ${prefilled} package.` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 bg-white text-[#0f0f11]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct Info & Addresses */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#55555c] block">
                Start a Conversation
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#0f0f11] leading-[1.05]">
                Let's discuss your project
              </h1>
              <p className="text-lg text-[#55555c] leading-relaxed">
                Leave your contact info and project outline. You will hear directly from a lead technology architect within 24 hours.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-zinc-200">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">Email us</p>
                <a href="mailto:sumaralabs@gmail.com" className="text-xl sm:text-2xl font-medium text-[#0f0f11] hover:text-primary transition-colors">
                  sumaralabs@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">Direct phone</p>
                <a href="tel:+420603410127" className="text-lg font-medium text-[#0f0f11] hover:text-primary transition-colors">
                  +420 603 410 127
                </a>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">Office hubs</p>
                <p className="text-sm text-[#55555c] leading-relaxed">
                  <strong className="text-zinc-900">Prague:</strong> Mezibranská 1668/5, New Town, 111 00 Prague 1, Czech Republic<br />
                  <strong className="text-zinc-900">Jakarta:</strong> Southeast Asia Software House & Production Operations
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Shakuro Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[28px] bg-[#fafafa] border border-zinc-200/80">
              {submitted ? (
                <div className="py-16 text-center space-y-6 max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0f0f11]">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#55555c] leading-relaxed">
                    We have received your specifications. Our lead architect will review the technical scope and reach out to <strong className="text-zinc-900">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-pill-primary text-xs"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Service selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block">
                      Services Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`rounded-[48px] px-4 py-2 text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-[#0f0f11] text-white border border-[#0f0f11]'
                                : 'bg-white text-[#0f0f11] border border-zinc-300 hover:border-black'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block">
                      Expected Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setSelectedBudget(opt)}
                          className={`p-2.5 rounded-[16px] text-xs font-medium border text-center transition-all ${
                            selectedBudget === opt
                              ? 'bg-[#0f0f11] text-white border-[#0f0f11]'
                              : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-500">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-[16px] bg-white border border-zinc-300 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-500">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-[16px] bg-white border border-zinc-300 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500">Phone / WhatsApp (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+62 812... / +420..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[16px] bg-white border border-zinc-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500">Project Overview *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what you want to build, current challenges, or target launch schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[16px] bg-white border border-zinc-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-zinc-500">
                      Bilateral NDA protected. Zero spam.
                    </p>

                    <button
                      type="submit"
                      className="btn-pill-primary group w-full sm:w-auto"
                    >
                      <span>Send inquiry</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
  X
} from 'lucide-react';
import RollingText from '../../components/ui/RollingText';

export default function ContactPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const prefilled = searchParams.get('package') || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    message: prefilled
      ? `Hello Sumara Labs, I would like to inquire about the ${prefilled} package.`
      : ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const clearPrefill = () => {
    searchParams.delete('package');
    setSearchParams(searchParams);
    setFormData((prev) => ({
      ...prev,
      message: ''
    }));
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Top Blue Hero Section - Compact Sleek Height with Subtle Organic Wave Curves */}
      <div className="relative bg-[#1649FF] text-white pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28 overflow-hidden">
        {/* Layered fluid wave shapes & subtle ambient light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Subtle gradient depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c39d8] via-[#1649FF] to-[#1e58ff]" />

          {/* Organic wave shape 1 */}
          <svg
            className="absolute -top-32 -right-20 w-[600px] h-[600px] text-white/[0.06] transform rotate-12"
            viewBox="0 0 600 600"
            fill="currentColor"
          >
            <path d="M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z" />
          </svg>

          {/* Organic wave shape 2 */}
          <svg
            className="absolute -bottom-32 -left-20 w-[550px] h-[550px] text-black/[0.08]"
            viewBox="0 0 600 600"
            fill="currentColor"
          >
            <path d="M300,100 C420,100 520,200 520,300 C520,420 420,520 300,520 C180,520 80,420 80,300 C80,180 180,100 300,100 Z" />
          </svg>

          {/* Flowing ribbon wave */}
          <svg
            className="absolute top-1/2 left-0 w-full h-48 -translate-y-1/2 text-white/[0.04]"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,160 C320,280 420,20 720,160 C1020,300 1120,60 1440,160 L1440,320 L0,320 Z" />
          </svg>
        </div>

        {/* Hero Content - Compact & Punchy */}
        <div className="section-container relative z-10 text-center max-w-[760px] mx-auto space-y-3">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-white/90 bg-white/15 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/20">
            [ Start a Conversation ]
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-white/85 max-w-[560px] mx-auto leading-relaxed">
            Have an ambitious idea, need an MVP launched rapidly, or looking for a dedicated engineering squad? Leave your details below and our lead architect will reach out within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content: Floating Split Dual-Card Container (Overlapping Blue Banner) */}
      <div className="section-container relative z-20 -mt-12 sm:-mt-16 md:-mt-20 pb-20 sm:pb-28">
        <div className="max-w-[1140px] mx-auto rounded-[28px] sm:rounded-[36px] bg-white border border-zinc-200/90 shadow-[0_20px_60px_-15px_rgba(22,73,255,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Send a Message Form (White Card) */}
          <div className="lg:col-span-7 p-7 sm:p-10 md:p-12 bg-white flex flex-col justify-between">
            {submitted ? (
              <div className="py-16 text-center space-y-6 max-w-md mx-auto my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0f0f11]">
                    Thank you, {formData.firstName || 'there'}!
                  </h3>
                  <p className="text-sm text-[#55555c] leading-relaxed">
                    We have received your message. Our lead technology architect will review your project scope and get back to{' '}
                    <strong className="text-zinc-900">{formData.email}</strong> within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      phone: '',
                      email: '',
                      company: '',
                      message: ''
                    });
                  }}
                  className="rounded-full bg-[#0f0f11] text-white px-7 py-3 text-sm font-medium hover:bg-black transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-95 group/btn"
                >
                  <RollingText text="Send another message" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7 flex flex-col justify-between h-full">
                {/* Form Title & Icon */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-5">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f0f11] tracking-tight">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-[#55555c] mt-0.5">
                      Bilateral NDA protected. Zero spam guarantee.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#1649FF] shrink-0">
                    <Mail className="w-5 h-5 stroke-[1.75]" />
                  </div>
                </div>

                {/* Prefilled Banner if came from Services */}
                {prefilled && (
                  <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-[#1649FF]">
                    <span className="font-medium">
                      Selected Package: <strong>{prefilled}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={clearPrefill}
                      className="text-blue-500 hover:text-blue-800 p-0.5 rounded transition-colors"
                      title="Clear selection"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Inputs Stack (Clean Underline Style Matching Reference) */}
                <div className="space-y-6">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-transparent border-b border-zinc-200 py-2.5 text-sm sm:text-base text-[#0f0f11] placeholder:text-zinc-300 focus:outline-none focus:border-[#1649FF] transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-transparent border-b border-zinc-200 py-2.5 text-sm sm:text-base text-[#0f0f11] placeholder:text-zinc-300 focus:outline-none focus:border-[#1649FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+62 812... / +420..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-zinc-200 py-2.5 text-sm sm:text-base text-[#0f0f11] placeholder:text-zinc-300 focus:outline-none focus:border-[#1649FF] transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-zinc-200 py-2.5 text-sm sm:text-base text-[#0f0f11] placeholder:text-zinc-300 focus:outline-none focus:border-[#1649FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Group or Company */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Group or Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp / Startup Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-b border-zinc-200 py-2.5 text-sm sm:text-base text-[#0f0f11] placeholder:text-zinc-300 focus:outline-none focus:border-[#1649FF] transition-colors"
                    />
                  </div>

                  {/* Row 4: How can we help? */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      How can we help? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what you want to build, current challenges, or desired launch schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-zinc-200 py-2.5 text-sm sm:text-base text-[#0f0f11] placeholder:text-zinc-300 focus:outline-none focus:border-[#1649FF] transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="rounded-full bg-[#1649FF] hover:bg-[#0d3bf0] text-white px-9 py-3.5 text-sm sm:text-base font-semibold transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/35 active:translate-y-0 active:scale-95 inline-flex items-center gap-2 group/btn cursor-pointer"
                  >
                    <RollingText text="Submit" />
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info (Soft Light Slate-Blue Card - NOT black, NO SLA tag) */}
          <div className="lg:col-span-5 p-7 sm:p-10 md:p-12 bg-[#f6f8fc] text-[#0f0f11] border-t lg:border-t-0 lg:border-l border-zinc-200/80 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Card Header */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0f0f11] tracking-tight">
                  Contact Info
                </h3>
                <p className="text-xs sm:text-sm text-[#55555c] mt-1">
                  Direct channels to our engineering leadership.
                </p>
              </div>

              {/* Contact rows */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-zinc-200/90 shadow-sm flex items-center justify-center shrink-0 text-[#1649FF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e8e93] block mb-0.5">
                      Phone Number
                    </span>
                    <a
                      href="tel:+420603410127"
                      className="text-sm sm:text-base font-medium text-[#0f0f11] hover:text-[#1649FF] transition-colors block"
                    >
                      +420 603 410 127
                    </a>
                    <a
                      href="https://wa.me/420603410127"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#55555c] hover:text-[#1649FF] transition-colors block mt-0.5"
                    >
                      Available on WhatsApp & Signal
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-zinc-200/90 shadow-sm flex items-center justify-center shrink-0 text-[#1649FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e8e93] block mb-0.5">
                      Direct Email
                    </span>
                    <a
                      href="mailto:sumaralabs@gmail.com"
                      className="text-sm sm:text-base font-medium text-[#0f0f11] hover:text-[#1649FF] transition-colors block break-all"
                    >
                      sumaralabs@gmail.com
                    </a>
                    <span className="text-xs text-[#55555c] block mt-0.5">
                      Fast response under 24 hours
                    </span>
                  </div>
                </div>

                {/* Office Hubs */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-zinc-200/90 shadow-sm flex items-center justify-center shrink-0 text-[#1649FF]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e8e93] block mb-0.5">
                      Office Hubs
                    </span>
                    <p className="text-sm text-[#0f0f11] leading-relaxed">
                      <strong className="font-semibold text-zinc-900">Prague:</strong> Mezibranská 1668/5, New Town, 111 00 Prague 1
                    </p>
                    <p className="text-xs text-[#55555c] leading-relaxed">
                      <strong className="font-medium text-zinc-800">Jakarta:</strong> Southeast Asia Software House & Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels (Circular Badges Matching Reference) */}
            <div className="pt-8 sm:pt-10 border-t border-zinc-200/70 mt-8">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e8e93] block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-zinc-200 bg-white shadow-sm flex items-center justify-center text-zinc-600 hover:text-[#1649FF] hover:border-[#1649FF] hover:bg-blue-50/50 hover:shadow transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-zinc-200 bg-white shadow-sm flex items-center justify-center text-zinc-600 hover:text-[#1649FF] hover:border-[#1649FF] hover:bg-blue-50/50 hover:shadow transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-zinc-200 bg-white shadow-sm flex items-center justify-center text-zinc-600 hover:text-[#1649FF] hover:border-[#1649FF] hover:bg-blue-50/50 hover:shadow transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/420603410127"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border border-zinc-200 bg-white shadow-sm flex items-center justify-center text-zinc-600 hover:text-[#1649FF] hover:border-[#1649FF] hover:bg-blue-50/50 hover:shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

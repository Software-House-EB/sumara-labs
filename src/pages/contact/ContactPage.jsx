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
    <div className="pt-28 sm:pt-36 md:pt-44 pb-20 sm:pb-28 bg-white text-[#0f0f11]">
      <div className="section-container">
        {/* Header Section */}
        <div className="max-w-[1000px] mb-12 sm:mb-16 space-y-4">
          <p className="text-sm sm:text-base text-[#8e8e93] font-semibold tracking-wide">
            [ CONTACT US ]
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#0f0f11] leading-[1.08]">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-[#55555c] max-w-[660px] leading-relaxed">
            Have an ambitious idea, need an MVP launched rapidly, or looking for a dedicated engineering squad? Leave your details below and our lead architect will reach out within 24 hours.
          </p>
        </div>

        {/* Dual Split Card Container */}
        <div className="max-w-[1140px] mx-auto rounded-[28px] sm:rounded-[36px] bg-white border border-zinc-200/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Send a Message Form */}
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
                  className="rounded-full bg-[#0f0f11] text-white px-7 py-3 text-sm font-medium hover:bg-black transition-colors"
                >
                  Send another message
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
                  <div className="w-10 h-10 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center text-[#1649FF] shrink-0">
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

                {/* Inputs Stack */}
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
                    className="rounded-full bg-[#1649FF] hover:bg-[#0d3bf0] text-white px-9 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 active:scale-[0.98] inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Submit</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info (Dark Card) */}
          <div className="lg:col-span-5 p-7 sm:p-10 md:p-12 bg-[#0c0d10] text-white flex flex-col justify-between relative overflow-hidden">
            {/* Subtle decorative background glow */}
            <div
              className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#1649FF]/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-[#1649FF]/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-8">
              {/* Card Header */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Contact Info
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Reach out directly through any channel.
                </p>
              </div>

              {/* Contact list */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#1649FF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                      Phone Number
                    </span>
                    <a
                      href="tel:+420603410127"
                      className="text-sm sm:text-base font-medium text-white hover:text-[#1649FF] transition-colors block"
                    >
                      +420 603 410 127
                    </a>
                    <a
                      href="https://wa.me/420603410127"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white transition-colors block mt-0.5"
                    >
                      Available on WhatsApp & Signal
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#1649FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                      Direct Email
                    </span>
                    <a
                      href="mailto:sumaralabs@gmail.com"
                      className="text-sm sm:text-base font-medium text-white hover:text-[#1649FF] transition-colors block break-all"
                    >
                      sumaralabs@gmail.com
                    </a>
                    <span className="text-xs text-zinc-400 block mt-0.5">
                      Fast response under 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#1649FF] hover:bg-[#1649FF]/20 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#1649FF] hover:bg-[#1649FF]/20 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#1649FF] hover:bg-[#1649FF]/20 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/420603410127"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#1649FF] hover:bg-[#1649FF]/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Map Preview Card (Prague & Jakarta Hubs) */}
            <div className="relative z-10 pt-8 mt-4">
              <a
                href="https://maps.google.com/?q=Mezibransk%C3%A1+1668/5,+Prague"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[20px] overflow-hidden border border-white/15 bg-[#14151b] hover:border-white/30 transition-all duration-300 relative"
              >
                {/* Stylized Vector Map Preview Graphic */}
                <div className="h-32 sm:h-36 w-full relative overflow-hidden bg-[#181a22]">
                  {/* Subtle map road lines and water paths */}
                  <svg
                    className="w-full h-full object-cover opacity-60"
                    viewBox="0 0 320 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background grid */}
                    <rect width="320" height="160" fill="#151720" />
                    {/* Water body */}
                    <path
                      d="M-20 60 C40 50, 80 90, 150 70 C220 50, 260 85, 340 75 L340 120 C260 130, 200 95, 140 115 C80 135, 30 100, -20 110 Z"
                      fill="#1b2438"
                    />
                    {/* Green park / zone */}
                    <path
                      d="M180 20 C210 15, 240 30, 245 55 C230 65, 190 70, 175 45 Z"
                      fill="#1c2d28"
                    />
                    {/* Secondary roads */}
                    <path d="M-10 30 L330 30" stroke="#252836" strokeWidth="2.5" />
                    <path d="M-10 130 L330 130" stroke="#252836" strokeWidth="2.5" />
                    <path d="M60 -10 L60 170" stroke="#252836" strokeWidth="2" />
                    <path d="M260 -10 L260 170" stroke="#252836" strokeWidth="2" />
                    <path d="M0 100 L320 20" stroke="#232734" strokeWidth="1.5" />
                    {/* Main artery road */}
                    <path
                      d="M-10 80 Q120 75 160 50 T330 40"
                      stroke="#32384a"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M160 -10 L160 170"
                      stroke="#353b4e"
                      strokeWidth="3"
                    />
                  </svg>

                  {/* Pulsing Pin Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-[#1649FF]/30 animate-ping" />
                    <div className="relative w-8 h-8 rounded-full bg-[#1649FF] text-white flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <MapPin className="w-4 h-4 fill-white" />
                    </div>
                  </div>

                  {/* Overlay pill tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#0c0d10]/90 backdrop-blur-md border border-white/10 text-xs text-white">
                    <span className="font-medium truncate pr-2">
                      Prague & Jakarta Hubs
                    </span>
                    <span className="text-[11px] text-[#1649FF] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform shrink-0">
                      Open Maps <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Address caption */}
                <div className="px-4 py-3 bg-[#101217] border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span className="truncate">Mezibranská 1668/5, Prague 1</span>
                  <span className="font-mono text-[10px] text-zinc-500 shrink-0 ml-2">HQ</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import logoDark from '../../assets/images/main-logo.png';
import logoWhite from '../../assets/images/white-logo.png';

// Rolling text hover effect (Aaron Iker / Dribbble style)
function RollingText({ text, className = '' }) {
  return (
    <span className={`inline-flex items-center overflow-hidden leading-none ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="relative inline-block h-[1.15em] overflow-hidden leading-[1.15em]"
        >
          <span
            className="block leading-[1.15em] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span
            className="absolute top-0 left-0 block leading-[1.15em] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover/btn:translate-y-0"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}

const navItems = [
  { label: 'Works', path: '/portfolio', count: '06' },
  { label: 'Services', path: '/service', count: '04' },
  { label: 'Process', path: '/#process', count: '06' },
  { label: 'About', path: '/aboutus', count: '14+' },
  { label: 'Contact', path: '/contact', count: '24h' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past top threshold
      setIsScrolled(currentScrollY > 20);

      // Top of page: always show
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY.current;
        if (diff > 8) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
        } else if (diff < -8) {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] ${
          !isVisible && !menuOpen ? '-translate-y-full pointer-events-none' : 'translate-y-0 pointer-events-auto'
        } ${
          isScrolled
            ? 'py-3.5 bg-white/95 backdrop-blur-md shadow-sm'
            : 'py-5 sm:py-7 bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Shakuro-Style Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group py-1">
            <img
              src={logoDark}
              alt="Sumara Labs"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* "Get in touch" Pill Button */}
            <Link
              to="/contact"
              className="group/btn hidden sm:inline-flex items-center justify-center h-9 sm:h-10 rounded-[48px] bg-[#0f0f11] text-white hover:bg-black px-4 sm:px-5 text-xs sm:text-[13px] font-medium transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/15 active:translate-y-0 active:scale-95"
            >
              <RollingText text="Get in touch" />
            </Link>

            {/* Shakuro Signature 2-Bar Animated Menu Toggle Button (Alt-Button Hover Interaction) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/15 group bg-white/90 backdrop-blur-sm active:translate-y-0 active:scale-95 overflow-hidden"
            >
              {/* Dynamic Expanding Fill Layer (Alt-Button Style - Origin from Bottom Center) */}
              <span
                className={`absolute inset-0 rounded-full bg-black origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  menuOpen ? 'scale-100' : 'scale-0 group-hover:scale-100'
                }`}
              />

              {/* Icon Container with Spring Physics */}
              <div className="relative z-10 w-4 h-[7.5px] flex items-center justify-center pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[0.82]">
                <span
                  className={`absolute left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    menuOpen
                      ? 'bg-white top-1/2 -translate-y-1/2 rotate-45'
                      : 'bg-[#0f0f11] group-hover:bg-white top-0 group-hover:-translate-y-[1px]'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    menuOpen
                      ? 'bg-white bottom-1/2 translate-y-1/2 -rotate-45'
                      : 'bg-[#0f0f11] group-hover:bg-white bottom-0 group-hover:translate-y-[1px]'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Shakuro Slide-Over Sidebar (Takes less than half the screen with smooth slide-in animation) */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Dimmed Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
            />

            {/* Slide-in White Sidebar */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              data-lenis-prevent="true"
              className="relative z-10 w-full sm:w-[440px] md:w-[480px] lg:w-[520px] max-w-[92vw] h-full max-h-screen bg-white text-[#0f0f11] shadow-[-20px_0_60px_rgba(0,0,0,0.15)] overflow-y-auto overflow-x-hidden overscroll-contain border-l border-zinc-200/80"
            >
              <div className="min-h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 pb-16 sm:pb-24">
                {/* Top Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-10 h-10 -mr-2 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-900 transition-all hover:scale-110"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Main Content with Staggered Cascading Animation */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05, delayChildren: 0.08 },
                    },
                  }}
                  className="space-y-8 flex-1"
                >
                  {/* Menu Tag */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="text-xs font-mono text-zinc-400 uppercase tracking-wider"
                  >
                    Menu
                  </motion.p>

                  {/* Primary Large Links (Works, About us, Services) */}
                  <nav className="flex flex-col space-y-4">
                    {[
                      { label: 'Works', path: '/portfolio' },
                      { label: 'About us', path: '/aboutus' },
                      { label: 'Services', path: '/service' },
                    ].map((item) => (
                      <motion.div
                        key={item.label}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0f0f11] hover:text-zinc-500 transition-colors inline-block"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* "Get in touch" Pill Button */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="pt-2"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center justify-center rounded-[48px] bg-[#0f0f11] text-white hover:bg-black px-8 py-3.5 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                    >
                      Get in touch
                    </Link>
                  </motion.div>

                  {/* Development Category Tags */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="pt-6 border-t border-zinc-100 space-y-2.5"
                  >
                    <p className="text-xs font-medium text-zinc-400">Development</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-zinc-800 leading-relaxed font-normal">
                      <span className="hover:text-black cursor-pointer">Web Development</span>
                      <span className="hover:text-black cursor-pointer">Mobile App Development</span>
                      <span className="hover:text-black cursor-pointer">iOS Apps</span>
                      <span className="hover:text-black cursor-pointer">Android Apps</span>
                      <span className="hover:text-black cursor-pointer">C# .NET</span>
                      <span className="hover:text-black cursor-pointer">React JS</span>
                      <span className="hover:text-black cursor-pointer">Next.js</span>
                      <span className="hover:text-black cursor-pointer">Python</span>
                      <span className="hover:text-black cursor-pointer">AI Development</span>
                      <span className="hover:text-black cursor-pointer">Support & Maintenance</span>
                      <span className="hover:text-black cursor-pointer">Code audit</span>
                      <span className="hover:text-black cursor-pointer">QA</span>
                    </div>
                  </motion.div>

                  {/* Design Category Tags */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="space-y-2.5"
                  >
                    <p className="text-xs font-medium text-zinc-400">Design</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-zinc-800 leading-relaxed font-normal">
                      <span className="hover:text-black cursor-pointer">Web Design</span>
                      <span className="hover:text-black cursor-pointer">UI/UX Design</span>
                      <span className="hover:text-black cursor-pointer">Design Concept</span>
                      <span className="hover:text-black cursor-pointer">Design Systems</span>
                      <span className="hover:text-black cursor-pointer">Interactive Prototyping</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Bottom Direct Contacts (with ample padding so never cut off) */}
                <div className="pt-8 mt-10 border-t border-zinc-100 flex flex-col gap-2 text-xs text-zinc-500">
                  <a
                    href="mailto:sumaralabs@gmail.com"
                    className="font-medium text-zinc-900 hover:underline"
                  >
                    sumaralabs@gmail.com
                  </a>
                  <div className="flex items-center justify-between text-zinc-400 pt-1">
                    <span>Prague • Jakarta</span>
                    <span>+420 603 410 127</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

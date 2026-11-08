import React, { useEffect, useRef } from 'react';
import { useLocation, Link, useOutlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from '../ui/PageTransition';

// Solid 3-dot chat bubble icon matching user reference
function ChatBubbleIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.5C6.753 3.5 2.5 7.306 2.5 12c0 2.152.88 4.12 2.348 5.61-.318 1.62-.99 2.924-1.85 3.904a.45.45 0 0 0 .39.733c3.04-.127 5.28-1.42 6.398-2.256.713.136 1.453.209 2.214.209 5.247 0 9.5-3.806 9.5-8.5S17.247 3.5 12 3.5ZM8 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      />
    </svg>
  );
}

export default function MainLayout() {
  const location = useLocation();
  const element = useOutlet();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  const isContactPage = location.pathname === '/contact';

  return (
    <div className="flex min-h-screen flex-col bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-primary-600 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden" id="main-content">
        <AnimatePresence mode="wait" initial={true}>
          {element && (
            <PageTransition key={location.pathname}>
              {element}
            </PageTransition>
          )}
        </AnimatePresence>
      </main>
      <Footer />

      {/* Sticky Floating Chat Icon (Bottom-Right, hidden on Contact page) */}
      <AnimatePresence>
        {!isContactPage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
          >
            <Link
              to="/contact"
              aria-label="Contact Us"
              className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#0f0f11] shadow-lg shadow-black/5 border-2 border-[#0f0f11] hover:bg-zinc-50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {/* Online Indicator Pulse Dot (no border outline) */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>

              {/* Solid 3-dot Chat Bubble Icon in Black */}
              <ChatBubbleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0f0f11] transition-transform duration-300 group-hover:scale-110" />

              {/* Hover Tooltip Pill (Desktop) */}
              <div className="absolute right-full mr-3 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-white text-[#0f0f11] text-xs font-medium px-3.5 py-1.5 rounded-full border border-zinc-200 shadow-xl whitespace-nowrap hidden sm:flex items-center gap-1.5">
                <span>Start a conversation</span>
                <span className="text-[10px] text-zinc-500 font-mono">24h</span>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


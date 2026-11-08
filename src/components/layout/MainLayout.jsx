import React, { useEffect, useRef } from 'react';
import { useLocation, Link, useOutlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from '../ui/PageTransition';

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

      {/* Floating Live Studio Status Capsule (Bottom-Right, hidden on Contact page) */}
      <AnimatePresence>
        {!isContactPage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40"
          >
            <Link
              to="/contact"
              aria-label="Available for projects - Let's talk"
              className="group relative flex items-center gap-2.5 sm:gap-3 h-10 sm:h-12 pl-3.5 pr-4 sm:pl-4 sm:pr-5 rounded-[48px] bg-white/95 backdrop-blur-md text-[#0f0f11] border border-zinc-200/90 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:border-zinc-300 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              {/* Live Availability Beacon */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[12px] sm:text-[13px] font-medium text-zinc-600 hidden xs:inline sm:inline">
                  Available for projects
                </span>
              </div>

              {/* Subtle Divider */}
              <span className="w-px h-3.5 bg-zinc-200" aria-hidden="true" />

              {/* Action Callout */}
              <div className="flex items-center gap-1 font-semibold text-[12px] sm:text-[13px] text-[#0f0f11] group-hover:text-black">
                <span>Let's talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


import React, { useEffect, useRef } from 'react';
import { useLocation, Link, useOutlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from '../ui/PageTransition';
import RollingText from '../ui/RollingText';

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
    <div className="flex min-h-screen flex-col bg-white text-[#0f0f11] antialiased selection:bg-[#0f0f11] selection:text-white">
      <Navbar />
      <main className="flex-1 w-full" id="main-content">
        <AnimatePresence mode="wait" initial={true}>
          {element && (
            <PageTransition key={location.pathname}>
              {element}
            </PageTransition>
          )}
        </AnimatePresence>
      </main>
      <Footer />

      {/* Floating CTA Button (Bottom-Right, hidden on Contact page) */}
      <AnimatePresence>
        {!isContactPage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
          >
            <Link
              to="/contact"
              aria-label="Let's talk"
              className="group/btn relative inline-flex items-center gap-1.5 h-9 sm:h-10 px-4 sm:px-4.5 rounded-[48px] bg-white/95 backdrop-blur-md text-[#0f0f11] border border-zinc-200/90 shadow-md shadow-black/5 hover:border-black hover:bg-black hover:text-white transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95"
            >
              <RollingText text="Let's talk" className="text-xs sm:text-[13px] font-medium" />
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


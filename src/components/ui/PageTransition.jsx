import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoWhite from '../../assets/images/white-logo.png';

// Premium agency cubic-bezier curve (Locomotive / Awwwards style)
const transitionEase = [0.76, 0, 0.24, 1];

export default function PageTransition({ children }) {
  useEffect(() => {
    // If navigating with a hash (e.g. /#process), scroll to element
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        if (window.__lenis) {
          window.__lenis.scrollTo(target, { immediate: true });
        } else {
          target.scrollIntoView();
        }
        return;
      }
    }
    // Ensure scroll position is reset to top when new page component mounts
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* ========================================================
          EXIT CURTAINS: Slide from RIGHT (100%) to CENTER (0%)
          Triggered when leaving the current page (moving LEFT)
          ======================================================== */}
      {/* Exit Layer 1: Electric Blue Accent */}
      <motion.div
        className="fixed inset-y-0 left-0 w-full bg-[#1649FF] z-[9991] pointer-events-none"
        initial={{ x: '100%', display: 'none' }}
        animate={{ x: '100%', display: 'none' }}
        exit={{ x: '0%', display: 'block' }}
        transition={{
          duration: 0.52,
          ease: transitionEase,
          delay: 0,
        }}
      />

      {/* Exit Layer 2: Deep Graphite / Zinc-900 */}
      <motion.div
        className="fixed inset-y-0 left-0 w-full bg-[#16171d] z-[9992] pointer-events-none"
        initial={{ x: '100%', display: 'none' }}
        animate={{ x: '100%', display: 'none' }}
        exit={{ x: '0%', display: 'block' }}
        transition={{
          duration: 0.52,
          ease: transitionEase,
          delay: 0.07,
        }}
      />

      {/* Exit Layer 3: Studio Dark Background + Brand Center */}
      <motion.div
        className="fixed inset-y-0 left-0 w-full bg-[#09090b] z-[9993] flex items-center justify-center pointer-events-auto"
        initial={{ x: '100%', display: 'none' }}
        animate={{ x: '100%', display: 'none' }}
        exit={{ x: '0%', display: 'flex' }}
        transition={{
          duration: 0.52,
          ease: transitionEase,
          delay: 0.14,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          exit={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.22, ease: 'easeOut' }}
          className="flex flex-col items-center gap-3 select-none"
        >
          <img
            src={logoWhite}
            alt="Sumara Labs"
            className="h-9 w-auto object-contain opacity-90"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================
          ENTER CURTAINS: Slide from CENTER (0%) to LEFT (-100%)
          Triggered on page refresh / initial load & when new page mounts
          ======================================================== */}
      {/* Enter Layer 3: Studio Dark Background + Brand Center */}
      <motion.div
        className="fixed inset-y-0 left-0 w-full bg-[#09090b] z-[9993] flex items-center justify-center pointer-events-none"
        initial={{ x: '0%', display: 'flex' }}
        animate={{ x: '-100%', transitionEnd: { display: 'none' } }}
        transition={{
          duration: 0.55,
          ease: transitionEase,
          delay: 0.08,
        }}
      >
        <div className="flex flex-col items-center gap-3 select-none">
          <img
            src={logoWhite}
            alt="Sumara Labs"
            className="h-9 w-auto object-contain opacity-90"
          />
        </div>
      </motion.div>

      {/* Enter Layer 2: Deep Graphite */}
      <motion.div
        className="fixed inset-y-0 left-0 w-full bg-[#16171d] z-[9992] pointer-events-none"
        initial={{ x: '0%', display: 'block' }}
        animate={{ x: '-100%', transitionEnd: { display: 'none' } }}
        transition={{
          duration: 0.55,
          ease: transitionEase,
          delay: 0.15,
        }}
      />

      {/* Enter Layer 1: Electric Blue Accent */}
      <motion.div
        className="fixed inset-y-0 left-0 w-full bg-[#1649FF] z-[9991] pointer-events-none"
        initial={{ x: '0%', display: 'block' }}
        animate={{ x: '-100%', transitionEnd: { display: 'none' } }}
        transition={{
          duration: 0.55,
          ease: transitionEase,
          delay: 0.22,
        }}
      />

      {/* ========================================================
          PAGE CONTENT CONTAINER
          Gently pushes left on exit, reveals on enter
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0.9, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.7, x: -30, scale: 0.99 }}
        transition={{ duration: 0.45, ease: transitionEase }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

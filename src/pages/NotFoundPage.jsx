import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import RollingText from '../components/ui/RollingText';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-32 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-lg mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-primary-400 font-bold">
          [ 404 / ERROR ]
        </span>
        <h1 className="text-7xl sm:text-9xl font-black font-display text-white tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white font-display">
          Page Not Found
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          The requested coordinate does not exist or has been shifted in the latest deployment cycle.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:translate-y-0 active:scale-95"
          >
            <Home className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
            <RollingText text="Return to Flagship" />
          </Link>
        </div>
      </div>
    </div>
  );
}


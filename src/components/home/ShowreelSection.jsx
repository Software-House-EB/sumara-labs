import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function ShowreelSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="px-2 sm:px-4 md:px-8 xl:px-10 pb-10 sm:pb-14 bg-white">
      <div className="mx-auto w-full max-w-[1760px]">
        <div
          onClick={togglePlay}
          className="relative z-10 flex w-full cursor-pointer justify-center overflow-hidden rounded-[20px] md:rounded-[32px] h-[360px] sm:h-[360px] md:h-[460px] lg:h-[620px] xl:h-[680px] bg-zinc-950 group"
        >
          {/* Looping Showreel Video (Exact Shakuro Agency Video Stream) */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          >
            <source src="https://cms.shakuro.com/api/media/file/showreel-home.webm" type="video/webm" />
            <source src="https://cms.shakuro.com/api/media/file/showreel-home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Top Label & Sound Control */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-medium text-white bg-black/40 backdrop-blur-md border border-white/10">
              Sumara Labs • Showreel 2026
            </span>

            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all"
              aria-label="Toggle sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Center Play/Pause indicator on hover */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Audio could not be played:', error);
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.025;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-center w-5/6 max-w-2xl h-20 bg-cyan-50/10 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
      <div className="flex items-center gap-4 w-full px-6 bg-transparent">
        
        <audio
          ref={audioRef}
          src="/LimbusTheme.mp3"
        />

        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="size-10 shrink-0 flex items-center justify-center bg-white/90 text-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <span className={`text-xs ${!isPlaying ? 'ml-0.5' : ''}`}>
            {isPlaying ? '❚❚' : '▶'}
          </span>
        </button>

        <div className="text-white min-w-12 flex flex-col justify-center">
          <p className="text-sm font-bold leading-tight truncate">VII Boss 4</p>
          <p className="text-xs opacity-70 tracking-tight truncate">Project Moon</p>
        </div>

        <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden relative cursor-pointer">
          <div
            className="bg-white/90 h-full shadow-[0_0_8px_white] rounded-full"
            style={{
              width: `${progress}%`,
              transition: 'width 0.1s linear',
            }}
          />
        </div>

      </div>
    </div>
  );
}
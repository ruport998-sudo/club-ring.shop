import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white text-center leading-none tracking-wider">
          <span className="text-[#C0C0C0]">МОЙ СПОРТ</span>
          <br />
          <span className="text-[#A67C52]">МОЯ ЖИЗНЬ</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-[#C5C3C6] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center px-2">
          Премиальная спортивная одежда
        </p>
      </div>
    </div>
  );
}

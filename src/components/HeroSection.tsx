import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-107-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay" />
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
          Creative Studio
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center text-gray-200 animate-fade-in" style={{ animationDelay: '200ms' }}>
          We craft digital experiences that inspire and innovate
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
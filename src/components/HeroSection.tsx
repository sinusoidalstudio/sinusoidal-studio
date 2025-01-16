import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const handleVideoEnd = () => {
    setShowText(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/WebVideo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay" />
      <div className={`relative z-20 h-full flex flex-col justify-center max-w-[90%] mx-auto transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-gradient animate-fade-in max-w-[1400px]">
          Sinusoidal is a creative design studio that partners with visionary
          brands to transform their innovations into impactful and unforgettable experiences.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
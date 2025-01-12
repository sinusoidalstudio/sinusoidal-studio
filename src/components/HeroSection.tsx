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
      <div className={`relative z-20 h-full flex flex-col justify-center items-center text-white px-8 md:px-16 lg:px-24 transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-medium mb-6 text-gradient animate-fade-in">
          Sinusoidal is a design office that helps forward-thinking brands make their innovation clear and unmissable.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
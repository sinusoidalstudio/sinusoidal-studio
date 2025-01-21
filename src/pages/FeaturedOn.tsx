import React from 'react';
import Navigation from '../components/Navigation';

const FeaturedOn = () => {
  return (
    <main className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/lookBg.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-20">
        <h1 className="text-4xl font-bold text-white mb-12">Featured On</h1>
        <div className="space-y-12">
          <a 
            href="https://www.behance.net/gallery/212771711/Temple-Glasses?tracking_source=curated_galleries_product-design" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Behance Industrial Design Gallery
          </a>
          <a 
            href="https://www.yankodesign.com/2024/11/29/revolutionary-glasses-ditch-ear-straps-for-temple-pads-but-will-it-work/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Yanko Design
          </a>
          <a 
            href="https://en.futuroprossimo.it/2024/11/addio-stanghette-i-nuovi-occhiali-si-poggiano-solo-sulle-tempie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Futuro Prossimo
          </a>
          <a 
            href="https://designwanted.com/temple-eyewear-modern-day-armor/?fbclid=PAZXh0bgNhZW0CMTEAAaaVSUFs7c0LaiR6LIQi3PbUMGWm3jMI98RYBHE4Z7Ohj3yHaDF2wfbAawI_aem_7IFWMynrzh-TCGu6FSjo8Q" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            DesignWanted
          </a>
          <a 
            href="https://www.beautifullife.info/fashion-design/temple-eyewear-reinvents-glasses-for-maximum-comfort/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Beautiful Life
          </a>
          <a 
            href="https://c.m.163.com/news/a/JI49QARO0511AR28.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            163
          </a>
        </div>
      </div>
    </main>
  );
};

export default FeaturedOn;
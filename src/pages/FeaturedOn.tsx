import React from 'react';
import Navigation from '../components/Navigation';

const FeaturedOn = () => {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">Featured On</h1>
        <div className="space-y-8">
          <a 
            href="https://www.yankodesign.com/2024/11/29/revolutionary-glasses-ditch-ear-straps-for-temple-pads-but-will-it-work/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Forbes
          </a>
          <a 
            href="https://en.futuroprossimo.it/2024/11/addio-stanghette-i-nuovi-occhiali-si-poggiano-solo-sulle-tempie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            TechCrunch
          </a>
          <a 
            href="https://designwanted.com/temple-eyewear-modern-day-armor/?fbclid=PAZXh0bgNhZW0CMTEAAaaVSUFs7c0LaiR6LIQi3PbUMGWm3jMI98RYBHE4Z7Ohj3yHaDF2wfbAawI_aem_7IFWMynrzh-TCGu6FSjo8Q" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Wired
          </a>
        </div>
      </div>
    </main>
  );
};

export default FeaturedOn;
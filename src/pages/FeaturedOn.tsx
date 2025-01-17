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
            href="https://www.forbes.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Forbes
          </a>
          <a 
            href="https://www.techcrunch.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            TechCrunch
          </a>
          <a 
            href="https://www.wired.com" 
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
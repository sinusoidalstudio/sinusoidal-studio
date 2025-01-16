import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-gradient animate-fade-in text-center">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-center leading-relaxed animate-fade-in">
            We are a forward-thinking design studio dedicated to collaborating with ambitious brands. We bring bold ideas to life by transforming innovations into meaningful and memorable experiences that resonate.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
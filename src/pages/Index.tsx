import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
    </main>
  );
};

export default Index;
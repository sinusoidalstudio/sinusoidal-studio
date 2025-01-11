import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">STUDIO</Link>
        <div className="space-x-8">
          <Link to="/work" className="text-white hover:text-gray-300 transition-colors">Work</Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
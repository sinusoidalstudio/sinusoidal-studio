import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Sinusoidal Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>
        {isMobile ? (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <Menu size={24} />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                <Link to="/work" className="block px-4 py-2 text-white hover:bg-secondary transition-colors font-bold">Work</Link>
                <Link to="/about" className="block px-4 py-2 text-white hover:bg-secondary transition-colors font-bold">About</Link>
                <Link to="/contact" className="block px-4 py-2 text-white hover:bg-secondary transition-colors font-bold">Contact</Link>
              </div>
            )}
          </div>
        ) : (
          <div className="space-x-8">
            <Link to="/work" className="text-white hover:text-gray-300 transition-colors font-bold">Work</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors font-bold">About</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors font-bold">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
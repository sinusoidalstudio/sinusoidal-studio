
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="flex justify-between items-center px-6 py-4">
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
              <div className="absolute right-0 top-full mt-2 bg-[#222222] border border-[#333333] rounded-lg shadow-lg py-2 animate-fade-in">
                <Link to="/work" className="block px-4 py-2 text-white hover:bg-[#333333] transition-colors font-bold">Work</Link>
                <Link to="/featured" className="block px-4 py-2 text-white hover:bg-[#333333] transition-colors font-bold">Featured On</Link>
                <Link to="/about" className="block px-4 py-2 text-white hover:bg-[#333333] transition-colors font-bold">About</Link>
                <a 
                  href="https://childishcolors.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block px-4 py-2 text-white hover:bg-[#333333] transition-colors font-bold"
                >
                  Games
                </a>
                <Link to="/contact" className="block px-4 py-2 text-white hover:bg-[#333333] transition-colors font-bold">Contact</Link>
              </div>
            )}
          </div>
        ) : (
          <div className="space-x-8">
            <Link to="/work" className="text-white hover:text-gray-300 transition-colors font-bold">Work</Link>
            <Link to="/featured" className="text-white hover:text-gray-300 transition-colors font-bold">Featured On</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors font-bold">About</Link>
            <a 
              href="https://childishcolors.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 transition-colors font-bold"
            >
              Games
            </a>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors font-bold">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-solar-gold mr-2" />
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-solar-black' : 'text-white'
            }`}>
              SOLAR<span className="font-light"> by </span>SMARTS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Projects', 'Benefits', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-solar-gold transition-colors ${
                  isScrolled ? 'text-solar-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-solar-gold text-white px-5 py-2 rounded-md flex items-center font-medium hover:bg-opacity-90 transition-colors">
              Get a Quote <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-solar-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className={`h-6 w-6 ${isScrolled ? 'text-solar-black' : 'text-white'}`} /> : 
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-solar-black' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {['Home', 'Services', 'About', 'Projects', 'Benefits', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-solar-gray-700 hover:text-solar-gold transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-solar-gold text-white px-5 py-3 rounded-md flex items-center justify-center font-medium hover:bg-opacity-90 transition-colors">
                Get a Quote <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
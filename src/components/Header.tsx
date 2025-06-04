import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  // Throttle scroll handler
  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 50;
    if (shouldBeScrolled !== isScrolled) {
      window.requestAnimationFrame(() => {
        setIsScrolled(shouldBeScrolled);
      });
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleLanguage = useCallback((lang: string) => {
    setCurrentLanguage(lang);
    setLanguageOpen(false);
  }, []);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => [
    { href: '#rooms', label: 'Rooms' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ], []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <h1 
            className={`font-display text-2xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Canobeach
          </h1>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#rooms" 
            className={`transition-colors duration-300 hover:text-gray-900 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Rooms
          </a>
          <a 
            href="#experiences" 
            className={`transition-colors duration-300 hover:text-gray-900 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Experiences
          </a>
          <a 
            href="#about" 
            className={`transition-colors duration-300 hover:text-gray-900 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`transition-colors duration-300 hover:text-gray-900 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Contact
          </a>
          
          <div className="relative">
            <button 
              className={`flex items-center space-x-1 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <Globe size={18} />
              <span>{currentLanguage}</span>
              <ChevronDown size={16} />
            </button>
            
            {languageOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-md shadow-lg rounded-md overflow-hidden w-24 animate-fade-in">
                <button 
                  className="w-full px-4 py-2 text-left hover:bg-white/50 text-gray-800 transition-colors duration-300"
                  onClick={() => toggleLanguage('EN')}
                >
                  English
                </button>
                <button 
                  className="w-full px-4 py-2 text-left hover:bg-white/50 text-gray-800 transition-colors duration-300"
                  onClick={() => toggleLanguage('ES')}
                >
                  Español
                </button>
              </div>
            )}
          </div>
          
          <button 
            className={`group relative inline-flex items-center px-6 py-2.5 rounded-full transition-all duration-500 overflow-hidden ${
              isScrolled 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-900'
            }`}
          >
            <span className="relative z-10">Book Now</span>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              isScrolled 
                ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
                : 'bg-gradient-to-r from-white to-gray-100'
            }`}></div>
          </button>
        </nav>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`} 
              size={24} 
            />
          ) : (
            <Menu 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`} 
              size={24} 
            />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#rooms" className="py-2 text-gray-800 hover:text-gray-900 transition-colors duration-300">
              Rooms
            </a>
            <a href="#experiences" className="py-2 text-gray-800 hover:text-gray-900 transition-colors duration-300">
              Experiences
            </a>
            <a href="#about" className="py-2 text-gray-800 hover:text-gray-900 transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="py-2 text-gray-800 hover:text-gray-900 transition-colors duration-300">
              Contact
            </a>
            
            <div className="flex items-center space-x-4 py-2">
              <Globe size={18} className="text-gray-800" />
              <button 
                className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
                onClick={() => toggleLanguage('EN')}
              >
                English
              </button>
              <button 
                className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
                onClick={() => toggleLanguage('ES')}
              >
                Español
              </button>
            </div>
            
            <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-gray-900/10">
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-display font-semibold text-auto-dark tracking-tight">
              AutoParts<span className="text-auto-blue">Pro</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-medium text-auto-gray hover:text-auto-blue transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 px-5 py-2.5 bg-auto-blue text-white hover:bg-auto-blue/90"
            >
              Get Started
            </a>
          </div>
          
          <button className="md:hidden p-2 text-auto-dark focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

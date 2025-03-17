
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      ref={containerRef}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-auto-silver to-auto-light z-0" 
        aria-hidden="true"
      />
      
      <div className="container relative z-10 mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between md:space-x-12">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="overflow-hidden mb-3">
              <span className="inline-block text-auto-blue text-sm md:text-base font-medium tracking-wide uppercase opacity-0 animate-on-scroll animate-text-reveal">
                E-Commerce Specialists for Automotive Industry
              </span>
            </div>
            
            <div className="overflow-hidden mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight md:leading-tight opacity-0 animate-on-scroll animate-text-reveal reveal-delay-1">
                Driving Auto Parts <br />E-Commerce <span className="text-auto-blue">Forward</span>
              </h1>
            </div>
            
            <div className="overflow-hidden mb-8">
              <p className="text-lg md:text-xl text-auto-gray opacity-0 animate-on-scroll animate-text-reveal reveal-delay-2 max-w-lg">
                Leveraging 10+ years of expertise to build high-performance e-commerce solutions tailored for the automotive parts industry across Australia.
              </p>
            </div>
            
            <div className="space-x-4 opacity-0 animate-on-scroll animate-fade-in-up reveal-delay-3">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-all duration-200 px-6 py-3 bg-auto-blue text-white hover:bg-auto-blue/90 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
              >
                Start Your Project
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors duration-200 px-6 py-3 bg-transparent border border-auto-gray/30 text-auto-dark hover:bg-auto-gray/10"
              >
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="opacity-0 animate-on-scroll animate-fade-in-up reveal-delay-4">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-auto-blue/20 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern auto parts e-commerce interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass-morphism rounded-lg p-4 md:p-6 shadow-lg max-w-[200px] md:max-w-[280px]">
                <p className="text-sm md:text-base font-medium">
                  "The most intuitive auto parts platform we've used."
                </p>
                <p className="text-xs md:text-sm text-auto-gray mt-2">
                  — Automotive Retailer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-auto-gray hover:text-auto-blue transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

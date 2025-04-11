
import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('all');

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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'oem', label: 'OEM Parts' },
    { id: 'aftermarket', label: 'Aftermarket' },
    { id: 'specialty', label: 'Specialty Parts' }
  ];

  const projects = [
    {
      id: 1,
      title: "Premium Auto Parts Direct",
      description: "A comprehensive NopCommerce solution for a leading Australian OEM parts supplier with vehicle fitment integration.",
      image: "/images/auto-parts-warehouse.jpg",
      category: "oem",
      results: "42% increase in conversion rate"
    },
    {
      id: 2,
      title: "SpeedShop Performance",
      description: "Custom e-commerce platform for performance auto parts with advanced filtering and product comparison.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "aftermarket",
      results: "3x increase in average order value"
    },
    {
      id: 3,
      title: "Classic Auto Restoration",
      description: "Specialized NopCommerce implementation for vintage and classic car parts with era-specific search.",
      image: "/images/classic-auto-restoration.jpg",
      category: "specialty",
      results: "58% growth in international sales"
    },
    {
      id: 4,
      title: "4x4 Outfitters",
      description: "Vehicle-specific e-commerce solution for off-road and 4x4 accessories with interactive fitment guides.",
      image: "/images/4x4-outfitters.jpg",
      category: "aftermarket",
      results: "65% increase in mobile conversions"
    },
    {
      id: 5,
      title: "Elite European Auto",
      description: "Premium NopCommerce store for luxury European vehicle parts with VIN scanning technology.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "oem",
      results: "2.8x ROI within first 6 months"
    },
    {
      id: 6,
      title: "Electric Vehicle Components",
      description: "Forward-thinking parts platform for the growing EV market with specialized categorization.",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "specialty",
      results: "First-to-market advantage in EV space"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-auto-blue bg-auto-blue/10 rounded-full mb-4 opacity-0 animate-on-scroll animate-fade-in">
            Case Studies
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 opacity-0 animate-on-scroll animate-fade-in reveal-delay-1">
            Our Auto Parts E-Commerce Portfolio
          </h2>
          
          <p className="text-lg text-auto-gray opacity-0 animate-on-scroll animate-fade-in reveal-delay-2">
            Explore our successful NopCommerce implementations for auto parts retailers across Australia, each delivering exceptional results and return on investment.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 opacity-0 animate-on-scroll animate-fade-in reveal-delay-3">
          <div className="inline-flex bg-auto-silver p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === category.id 
                    ? 'bg-white text-auto-dark shadow-sm' 
                    : 'text-auto-gray hover:text-auto-dark'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white border border-auto-silver rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl opacity-0 animate-on-scroll animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-auto-blue text-white rounded">
                    {categories.find(c => c.id === project.category)?.label}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-medium mb-2 group-hover:text-auto-blue transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-auto-gray mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-auto-blue">
                    {project.results}
                  </span>
                  
                  <button className="text-auto-gray hover:text-auto-blue transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

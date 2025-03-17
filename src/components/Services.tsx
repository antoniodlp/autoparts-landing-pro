
import React, { useEffect, useRef } from 'react';
import { ShoppingCart, Settings, BarChart, Layers, Database, Search } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const services = [
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "NopCommerce Development",
      description: "Specialised NopCommerce solutions designed specifically for auto parts retailers with vehicle compatibility features.",
      features: ["Custom theme development", "Plugin customisation", "Seamless upgrades", "Performance optimisation"]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Auto Parts Integration",
      description: "Connect your inventory systems and vehicle databases for a comprehensive parts lookup experience.",
      features: ["Vehicle fitment database", "Parts interchange functionality", "OEM & aftermarket catalogues", "Real-time inventory"]
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Advanced Search Solutions",
      description: "Sophisticated search systems allowing customers to find the exact parts they need with minimal effort.",
      features: ["VIN-based search", "Year/Make/Model lookup", "Part number recognition", "Visual parts selection"]
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Performance Optimisation",
      description: "Ensure lightning-fast load times and responsive experiences across all devices and connection speeds.",
      features: ["Speed optimisation", "Mobile responsiveness", "Core Web Vitals focus", "Caching strategies"]
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Migration",
      description: "Seamlessly transition your existing product database to your new NopCommerce platform without disruption.",
      features: ["Clean data transfer", "Category restructuring", "SEO URL preservation", "Image optimisation"]
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Ongoing Support",
      description: "Comprehensive maintenance and support services to keep your auto parts e-commerce platform running smoothly.",
      features: ["Proactive monitoring", "Regular updates", "Technical support", "Performance reviews"]
    },
  ];

  return (
    <section id="services" className="py-24 bg-auto-silver" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-auto-blue bg-auto-blue/10 rounded-full mb-4 opacity-0 animate-on-scroll animate-fade-in">
            Our Expertise
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 opacity-0 animate-on-scroll animate-fade-in reveal-delay-1">
            Specialised E-Commerce Services for Auto Parts Retailers
          </h2>
          
          <p className="text-lg text-auto-gray opacity-0 animate-on-scroll animate-fade-in reveal-delay-2">
            We deliver tailored NopCommerce solutions that address the unique challenges of selling automotive parts online, from complex fitment data to intuitive parts discovery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] border border-transparent hover:border-auto-blue/20 opacity-0 animate-on-scroll animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="text-auto-blue mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-display font-medium mb-3">
                {service.title}
              </h3>
              
              <p className="text-auto-gray mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <svg className="h-4 w-4 text-auto-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

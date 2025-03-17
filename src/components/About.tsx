
import React, { useEffect, useRef } from 'react';
import { MapPin, Award, Users, Zap } from 'lucide-react';

const About = () => {
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

  const stats = [
    { 
      icon: <Award className="h-6 w-6 text-auto-blue" />,
      value: "10+",
      label: "Years Experience",
      description: "Delivering automotive e-commerce excellence"
    },
    { 
      icon: <Users className="h-6 w-6 text-auto-blue" />,
      value: "200+",
      label: "Clients Served",
      description: "Across Australia and beyond"
    },
    { 
      icon: <Zap className="h-6 w-6 text-auto-blue" />,
      value: "98%",
      label: "Client Retention",
      description: "Long-term partnerships built on trust"
    },
    { 
      icon: <MapPin className="h-6 w-6 text-auto-blue" />,
      value: "AU",
      label: "Australian Owned",
      description: "Serving the local automotive industry"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-auto-blue bg-auto-blue/10 rounded-full mb-4 opacity-0 animate-on-scroll animate-fade-in">
            Our Story
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 opacity-0 animate-on-scroll animate-fade-in reveal-delay-1">
            Australia's Trusted Auto Parts E-Commerce Specialists
          </h2>
          
          <p className="text-lg text-auto-gray opacity-0 animate-on-scroll animate-fade-in reveal-delay-2">
            For over a decade, we've been crafting bespoke digital experiences that transform how Australians shop for automotive parts online. Our journey began with a simple mission: to make finding and purchasing the right parts as effortless as driving your car.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 opacity-0 animate-on-scroll animate-fade-in reveal-delay-3">
            <div className="bg-auto-silver p-8 rounded-lg">
              <h3 className="text-2xl font-display font-medium mb-4">Our Approach</h3>
              <p className="text-auto-gray mb-6">
                We blend technical expertise with automotive industry knowledge to create e-commerce solutions that not only look magnificent but deliver exceptional user experiences and conversion rates.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom-tailored e-commerce development with NopCommerce",
                  "Automotive-specific search and filtering systems",
                  "Vehicle fitment integration for parts compatibility",
                  "Mobile-first responsive design for modern shoppers",
                  "Performance optimisation for lightning-fast experiences"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-auto-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2 opacity-0 animate-on-scroll animate-fade-in reveal-delay-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-auto-blue to-transparent opacity-20 rounded-lg z-10" />
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Auto parts warehouse"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 glass-morphism rounded-lg p-4 shadow-lg max-w-[200px]">
                <p className="text-sm font-medium">
                  Our Melbourne headquarters, where innovation meets automotive expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white border border-auto-silver rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] opacity-0 animate-on-scroll animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center bg-auto-blue/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl font-display font-semibold text-auto-dark mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-auto-blue mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-auto-gray">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

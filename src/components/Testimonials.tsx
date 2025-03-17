
import React, { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const testimonials = [
    {
      quote: "The team's understanding of both e-commerce and the auto parts industry is unmatched. They built us a NopCommerce store that has transformed our business and doubled our online revenue within a year.",
      author: "Michael Thompson",
      position: "Director, Australian Auto Spares",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "After struggling with an outdated website for years, the custom NopCommerce solution delivered by this team has completely changed how our customers find and purchase parts. The vehicle fitment tool alone has reduced returns by 42%.",
      author: "Sarah Chen",
      position: "E-Commerce Manager, Performance Parts Direct",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "As a specialty parts retailer for classic cars, we needed a unique solution that understood our inventory and customer needs. The NopCommerce platform we received exceeded all expectations and has brought our vintage parts business into the modern era.",
      author: "David Reynolds",
      position: "Owner, Classic Auto Restoration Supplies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Working with a team that understands the intricacies of auto parts e-commerce has been game-changing. Their NopCommerce expertise combined with automotive knowledge created the perfect online store for our customers.",
      author: "Emma Williams",
      position: "Marketing Director, 4x4 Outfitters Australia",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-auto-silver" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-auto-blue bg-auto-blue/10 rounded-full mb-4 opacity-0 animate-on-scroll animate-fade-in">
            Client Success
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 opacity-0 animate-on-scroll animate-fade-in reveal-delay-1">
            What Our Clients Say
          </h2>
          
          <p className="text-lg text-auto-gray opacity-0 animate-on-scroll animate-fade-in reveal-delay-2">
            Hear from Australian auto parts retailers who've transformed their businesses with our NopCommerce solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 opacity-0 animate-on-scroll animate-fade-in reveal-delay-3">
            <div className="absolute -top-6 left-12 text-auto-blue text-6xl">"</div>
            
            <div className="relative z-10">
              <div className="min-h-[200px] flex items-center">
                <blockquote className="text-lg md:text-xl italic text-auto-dark">
                  {testimonials[activeIndex].quote}
                </blockquote>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="font-medium text-auto-dark">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-auto-gray">
                    {testimonials[activeIndex].position}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 opacity-0 animate-on-scroll animate-fade-in reveal-delay-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                  activeIndex === index ? 'bg-auto-blue w-6' : 'bg-auto-gray/40 hover:bg-auto-gray'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

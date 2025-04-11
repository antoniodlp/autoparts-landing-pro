
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-auto-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-display font-semibold mb-6">
              AutoParts<span className="text-auto-blue">Pro</span>
            </h3>
            <p className="text-auto-gray mb-6 max-w-md">
              Specialized e-commerce development for the automotive parts industry. Leveraging 10+ years of expertise to deliver exceptional online shopping experiences.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href={`#${platform}`}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-auto-blue transition-colors duration-200"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-auto-gray hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "NopCommerce Development",
                "Custom E-Commerce Solutions",
                "Auto Parts Integration",
                "Vehicle Fitment Database",
                "Performance Optimisation",
                "Mobile Responsive Design"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-auto-gray hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-auto-gray text-sm mb-4 md:mb-0">
              © {currentYear} AutoPartsPro. All rights reserved. Proudly Australian owned and operated.
            </div>
            
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="text-auto-gray hover:text-white text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


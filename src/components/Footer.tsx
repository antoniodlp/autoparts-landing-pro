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

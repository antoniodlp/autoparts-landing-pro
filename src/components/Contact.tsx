
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "1300 AUTO PARTS"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "info@autopartspro.com.au"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Office",
      value: "Melbourne, Victoria, Australia"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-auto-blue bg-auto-blue/10 rounded-full mb-4 opacity-0 animate-on-scroll animate-fade-in">
            Get In Touch
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 opacity-0 animate-on-scroll animate-fade-in reveal-delay-1">
            Ready to Accelerate Your Auto Parts E-Commerce?
          </h2>
          
          <p className="text-lg text-auto-gray opacity-0 animate-on-scroll animate-fade-in reveal-delay-2">
            Let's discuss how our NopCommerce expertise can transform your automotive parts business online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 opacity-0 animate-on-scroll animate-fade-in reveal-delay-3">
            <div className="bg-auto-silver rounded-lg p-8">
              <h3 className="text-2xl font-display font-medium mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-auto-blue/10 flex items-center justify-center text-auto-blue mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-auto-gray">
                        {item.label}
                      </div>
                      <div className="font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Business Hours</h4>
                <div className="space-y-2 text-auto-gray">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:30 PM AEST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM AEST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 opacity-0 animate-on-scroll animate-fade-in reveal-delay-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-auto-silver p-8 shadow-lg">
              <h3 className="text-2xl font-display font-medium mb-6">
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">We'll be in touch with you shortly.</p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-auto-gray mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-auto-silver focus:border-auto-blue focus:ring focus:ring-auto-blue/20 focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-auto-gray mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-auto-silver focus:border-auto-blue focus:ring focus:ring-auto-blue/20 focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-auto-gray mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-auto-silver focus:border-auto-blue focus:ring focus:ring-auto-blue/20 focus:outline-none transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-auto-gray mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-auto-silver focus:border-auto-blue focus:ring focus:ring-auto-blue/20 focus:outline-none transition-colors duration-200"
                  placeholder="Tell us about your project and requirements..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-all duration-200 px-6 py-3 bg-auto-blue text-white hover:bg-auto-blue/90 focus:outline-none focus:ring-2 focus:ring-auto-blue focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

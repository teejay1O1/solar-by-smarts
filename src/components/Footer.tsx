import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Sun, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-solar-black text-white pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Sun className="h-8 w-8 text-solar-gold mr-2" />
              <h3 className="text-2xl font-bold">
                SOLAR<span className="font-light"> by </span>SMARTS
              </h3>
            </div>
            <p className="text-solar-gray-300 mb-6">
              Powering a sustainable future through innovative commercial solar solutions since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-solar-gray-800 p-2 rounded-full hover:bg-solar-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-solar-gray-800 p-2 rounded-full hover:bg-solar-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-solar-gray-800 p-2 rounded-full hover:bg-solar-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-solar-gray-800 p-2 rounded-full hover:bg-solar-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Projects', 'Benefits', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-solar-gray-300 hover:text-solar-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Industrial Solar Installations', 
                'Commercial Building Integrations', 
                'Office Complex Solutions', 
                'Smart Energy Management', 
                'Energy Storage Solutions', 
                'Consultation & Planning'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-solar-gray-300 hover:text-solar-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-solar-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on solar technology and incentives.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-solar-gold text-solar-black"
                  aria-label="Email address"
                />
                <button 
                  type="submit" 
                  className="bg-solar-gold hover:bg-solar-gold/90 text-white px-4 py-2 rounded-r-md transition-colors"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-solar-gray-800 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-solar-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SOLAR by SMARTS. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-solar-gray-400">
            <a href="#" className="hover:text-solar-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-solar-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-solar-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-solar-gold p-3 rounded-full shadow-lg hover:bg-solar-gold/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
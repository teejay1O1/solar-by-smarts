import React, { useEffect, useState } from 'react';
import { Sun, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-solar-black py-24"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-solar-black/90 to-solar-black/70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`flex items-center justify-center mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <Sun className="h-12 w-12 text-solar-gold animate-pulse-slow" />
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Powering Commercial Success With <span className="text-solar-gold">Solar Energy</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-solar-gray-300 mb-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            SOLAR by SMARTS delivers professional mid-scale solar installations for businesses 
            seeking to reduce costs and environmental impact. Our custom solutions are designed 
            to maximize your investment and sustainability goals.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <button className="bg-solar-gold hover:bg-solar-gold/90 text-white font-medium px-8 py-3 rounded-md transition-all">
              Get Started Today
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white font-medium px-8 py-3 rounded-md transition-all">
              View Our Projects
            </button>
          </div>
          
          <div className={`mt-16 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href="#services" 
              className="inline-flex items-center text-white hover:text-solar-gold transition-colors"
            >
              <span className="mr-2">Discover Our Services</span>
              <ArrowDown className="h-5 w-5 animate-float" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
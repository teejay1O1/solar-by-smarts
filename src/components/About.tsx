import React, { useRef, useState, useEffect } from 'react';
import { Shield, Trophy, Clock, BadgeCheck } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-solar-gold" />,
      title: "Over Five Decades of Expertise",
      description: "With over five decades of experience in the power industry, we bring unmatched expertise to every solar installation."
    },
    {
      icon: <Trophy className="h-6 w-6 text-solar-gold" />,
      title: "Top 100 Exide Battery Dealership",
      description: "Recognized among the Top 100 Exide Battery Dealerships, demonstrating our commitment to quality and service excellence."
    },
    {
      icon: <Clock className="h-6 w-6 text-solar-gold" />,
      title: "Proven Track Record",
      description: "Successfully completed projects with over 5 MW of solar installations and counting, showcasing our expertise in the field."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-solar-gold" />,
      title: "Certified Specialists",
      description: "Certified specialists for Microinverter based Installations, ensuring the highest quality and efficiency in solar solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <img 
              src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Solar Installation Team" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div className="lg:w-1/2">
            <div className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About <span className="text-solar-gold">SOLAR by SMARTS</span>
              </h2>
              <p className="text-solar-gray-600 mb-6">
                To not be any Solar co. but The Solar Co. We strive to give Value Added Rooftop Solar installations. With a dedicated team of professionals, we execute projects which are built to last. Quality is all about maximum efficiency and minimum failure.
              </p>
              <p className="text-solar-gray-600 mb-6">
                In partnerships with major brands in the UPS and Inverter industry since 2002, we started Renewable Energy as a business vertical in 2010, completing our first project with Common Wealth Games.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="mr-4 p-2 bg-solar-gold/10 rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-solar-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
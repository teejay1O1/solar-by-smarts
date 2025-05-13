import React, { useRef, useEffect, useState } from 'react';
import { Factory, Building2, Building, CircuitBoard, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: <Factory className="h-10 w-10 text-solar-gold" />,
    title: "Engineering Excellence",
    description: "Engineering, design and technology is of foremost importance for us. Our designs deliver maximum efficiency and flawless working. We select and recommend modules and inverters of highest efficiency and least failure rate in the industry."
  },
  {
    icon: <Building2 className="h-10 w-10 text-solar-gold" />,
    title: "Quality Procurement",
    description: "Our approach towards Solar is based on the fact that any installation is as strong as its weakest component. With an operating life of 25 years, all components from a screw to a solar panel are meant to last the entire lifetime of the Solar plant."
  },
  {
    icon: <Building className="h-10 w-10 text-solar-gold" />,
    title: "Professional Commissioning",
    description: "We strictly adhere to the installation norms and safety guidelines listed by the governing authority MNRE and local discoms. We ensure all relevant documents and approvals are taken at each step to ensure a smooth commissioning."
  },
  {
    icon: <CircuitBoard className="h-10 w-10 text-solar-gold" />,
    title: "Tailored Power Solutions",
    description: "We provide customized power solutions for Residential, Commercial, and Industrial clients, ensuring optimal performance and maximum returns on investment."
  },
  {
    icon: <Zap className="h-10 w-10 text-solar-gold" />,
    title: "Microinverter Specialists",
    description: "As certified specialists for Microinverter based Installations, we ensure superior performance and reliability in all our solar installations."
  },
  {
    icon: <Users className="h-10 w-10 text-solar-gold" />,
    title: "Expert Consultation",
    description: "With over five decades of expertise in the power industry, we provide comprehensive consultation services to help you make informed decisions about your solar investment."
  }
];

const Services: React.FC = () => {
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

  return (
    <section id="services" className="py-20 bg-solar-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our <span className="text-solar-gold">Solar</span> Services
          </h2>
          <p className={`text-lg text-solar-gray-600 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            We provide comprehensive solar solutions tailored specifically for commercial and industrial applications, helping businesses reduce costs and environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-5px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-solar-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
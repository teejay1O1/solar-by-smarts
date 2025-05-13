import React, { useRef, useState, useEffect } from 'react';
import { DollarSign, Leaf, TrendingUp, Clock, Shield, BarChart2 } from 'lucide-react';

const Benefits: React.FC = () => {
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

  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-solar-gold" />,
      title: "Significant Cost Savings",
      description: "Reduce operating expenses with predictable energy costs that protect against utility rate increases."
    },
    {
      icon: <Leaf className="h-12 w-12 text-solar-gold" />,
      title: "Environmental Leadership",
      description: "Demonstrate your commitment to sustainability by significantly reducing your carbon footprint."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-solar-gold" />,
      title: "Enhanced Property Value",
      description: "Solar installations increase property values and make commercial buildings more attractive to tenants."
    },
    {
      icon: <Clock className="h-12 w-12 text-solar-gold" />,
      title: "Quick ROI",
      description: "With tax incentives and energy savings, most installations achieve ROI in just 3-7 years."
    },
    {
      icon: <Shield className="h-12 w-12 text-solar-gold" />,
      title: "Energy Independence",
      description: "Reduce dependency on the grid and protect your operations from power outages with optional storage."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-solar-gold" />,
      title: "Marketing Advantage",
      description: "Strengthen your brand by highlighting your sustainable practices to customers and stakeholders."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-solar-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Benefits of <span className="text-solar-gold">Commercial Solar</span>
          </h2>
          <p className={`text-lg text-solar-gray-600 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Investing in solar energy offers numerous advantages for your business beyond just saving on electricity bills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 hover:shadow-lg hover:translate-y-[-5px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-solar-gold/10 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-solar-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
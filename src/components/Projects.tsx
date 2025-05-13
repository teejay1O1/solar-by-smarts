import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../config/projects';
import type { Project } from '../types/project';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

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

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="py-20 bg-solar-black" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Salient <span className="text-solar-gold">Projects</span>
          </h2>
          <p className={`text-lg text-solar-gray-300 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Explore our portfolio of successful commercial solar installations that demonstrate our expertise across various sectors.
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col lg:flex-row bg-solar-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="lg:w-1/2 relative overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ height: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-solar-gold text-solar-black px-3 py-1 rounded-md text-sm font-medium mb-2">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-solar-gray-300 mb-8">{activeProject.description}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {Object.entries(activeProject.metrics).map(([key, value]) => (
                    <div key={key} className="bg-solar-gray-800 p-4 rounded-lg">
                      <p className="text-solar-gray-400 text-sm mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                      <p className="text-solar-gold font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-solar-gray-400">
                  Project {activeIndex + 1} of {projects.length}
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevProject}
                    className="p-2 rounded-full bg-solar-gray-800 hover:bg-solar-gold transition-colors"
                    aria-label="Previous project"
                  >
                    <ArrowLeft className="h-5 w-5 text-white" />
                  </button>
                  <button 
                    onClick={nextProject}
                    className="p-2 rounded-full bg-solar-gray-800 hover:bg-solar-gold transition-colors"
                    aria-label="Next project"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  activeIndex === index ? 'bg-solar-gold w-6' : 'bg-solar-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
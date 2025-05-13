import React, { useState, useRef, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Reynolds",
    title: "Operations Director, TechPark",
    content: "SOLAR by SMARTS transformed our energy profile completely. The installation was professional and minimally disruptive to our operations. We've seen a 40% reduction in our electricity costs, and the monitoring system they provided gives us real-time insights into our energy production.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    rating: 5
  },
  {
    name: "Sarah Chen",
    title: "Sustainability Manager, Riverfront Manufacturing",
    content: "Working with SOLAR by SMARTS was a game-changer for our sustainability goals. Their team was knowledgeable, efficient, and accommodating of our complex manufacturing schedule. The 1.2MW installation has significantly reduced our carbon footprint while providing substantial cost savings.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    rating: 5
  },
  {
    name: "David Harrison",
    title: "Property Manager, Greencrest Retail",
    content: "The solar canopy solution that SOLAR by SMARTS designed for our retail center was ingenious. Not only are we generating clean energy, but our customers appreciate the covered parking. The project was completed on time and on budget, and their after-installation support has been excellent.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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

  return (
    <section className="py-20 bg-solar-gold/10" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            What Our <span className="text-solar-gold">Clients Say</span>
          </h2>
          <p className={`text-lg text-solar-gray-600 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Hear from businesses that have transformed their energy profile with our solar solutions.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 md:p-10 shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-solar-black rounded-full p-4">
                  <MessageSquare className="h-8 w-8 text-solar-gold" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center pt-6">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-solar-amber fill-solar-amber' : 'text-solar-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-solar-gray-700 italic mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="h-full w-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-semibold">{testimonials[activeIndex].name}</h4>
                <p className="text-solar-gray-600">{testimonials[activeIndex].title}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-solar-gold hover:text-white transition-colors mr-4"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              
              <div className="flex items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-all ${
                      activeIndex === index ? 'bg-solar-gold w-6' : 'bg-solar-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-solar-gold hover:text-white transition-colors ml-4"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
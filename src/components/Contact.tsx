import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-solar-gold" />,
      title: "Call Us",
      details: "098101 33191",
      link: "tel:09810133191"
    },
    {
      icon: <Mail className="h-5 w-5 text-solar-gold" />,
      title: "Email Us",
      details: "info@solarbysmarts.com",
      link: "mailto:info@solarbysmarts.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-solar-gold" />,
      title: "Visit Us",
      details: "A-26&30, Vaishno Devi Marg, near BSES Office, Block A, Part 1, Lajpat Nagar, New Delhi, Delhi 110024",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Get In <span className="text-solar-gold">Touch</span>
          </h2>
          <p className={`text-lg text-solar-gray-600 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Ready to start your solar journey? Contact us today for a free consultation and custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="bg-solar-black rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    className="flex items-start group"
                  >
                    <div className="bg-solar-gray-800 p-3 rounded-md mr-4 group-hover:bg-solar-gold transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-solar-gray-300 font-medium">{item.title}</h4>
                      <p className="text-white group-hover:text-solar-gold transition-colors">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-white font-medium mb-3">Business Hours</h4>
                <p className="text-solar-gray-300">Monday - Friday: 8am - 6pm</p>
                <p className="text-solar-gray-300">Saturday: 9am - 2pm</p>
                <p className="text-solar-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="bg-solar-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-solar-green/10 border border-solar-green rounded-md p-4 text-center">
                  <h4 className="text-solar-green font-medium text-lg mb-2">Message Sent Successfully!</h4>
                  <p className="text-solar-gray-600">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-solar-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-solar-gray-300 focus:border-solar-gold focus:ring focus:ring-solar-gold/20 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-solar-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-solar-gray-300 focus:border-solar-gold focus:ring focus:ring-solar-gold/20 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-solar-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-solar-gray-300 focus:border-solar-gold focus:ring focus:ring-solar-gold/20 transition-colors"
                        placeholder="098101 33191"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-solar-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-solar-gray-300 focus:border-solar-gold focus:ring focus:ring-solar-gold/20 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-solar-gray-700 mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-solar-gray-300 focus:border-solar-gold focus:ring focus:ring-solar-gold/20 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-solar-gold hover:bg-solar-gold/90 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useRef, useEffect } from 'react';
import { Calculator as CalcIcon, BarChart3 } from 'lucide-react';

const Calculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(400000); // Changed from $5000 to ₹400,000
  const [roofArea, setRoofArea] = useState<number>(10000);
  const [sunlightHours, setSunlightHours] = useState<number>(5);
  const [savings, setSavings] = useState<number>(0);
  const [co2Reduction, setCo2Reduction] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);
  const [capacity, setCapacity] = useState<number>(0);
  
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

  useEffect(() => {
    // Updated calculations for INR
    const potentialCapacity = Math.min(roofArea / 100, monthlyBill / 12000) * 10; // Adjusted for INR
    const adjustedCapacity = potentialCapacity * (sunlightHours / 5);
    setCapacity(Math.round(adjustedCapacity));
    
    const annualSavings = adjustedCapacity * 96000; // Approximate ₹96,000 savings per kW annually
    setSavings(Math.round(annualSavings));
    
    const carbonReduction = adjustedCapacity * 1.5; // tons of CO2 per year
    setCo2Reduction(Math.round(carbonReduction));
    
    const estimatedCost = adjustedCapacity * 160000; // ₹160,000 per kW
    const simplePayback = estimatedCost / annualSavings;
    setPaybackPeriod(Math.round(simplePayback * 10) / 10);
  }, [monthlyBill, roofArea, sunlightHours]);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Solar Savings <span className="text-solar-gold">Calculator</span>
          </h2>
          <p className={`text-lg text-solar-gray-600 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Estimate your potential savings and environmental impact with our solar calculator.
          </p>
        </div>

        <div className={`bg-solar-gray-100 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-solar-black">
              <div className="flex items-center mb-8">
                <CalcIcon className="h-10 w-10 text-solar-gold mr-4" />
                <h3 className="text-2xl font-semibold text-white">Enter Your Details</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-solar-gray-300 mb-2">Monthly Electricity Bill (₹)</label>
                  <input
                    type="range"
                    min="80000"
                    max="4000000"
                    step="40000"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-solar-gray-400 text-sm mt-1">
                    <span>₹80,000</span>
                    <span>₹{monthlyBill.toLocaleString('en-IN')}</span>
                    <span>₹40,00,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-solar-gray-300 mb-2">Available Roof Area (sq ft)</label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={roofArea}
                    onChange={(e) => setRoofArea(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-solar-gray-400 text-sm mt-1">
                    <span>1,000</span>
                    <span>{roofArea.toLocaleString('en-IN')}</span>
                    <span>1,00,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-solar-gray-300 mb-2">Average Daily Sunlight Hours</label>
                  <input
                    type="range"
                    min="3"
                    max="7"
                    step="0.5"
                    value={sunlightHours}
                    onChange={(e) => setSunlightHours(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-solar-gray-400 text-sm mt-1">
                    <span>3</span>
                    <span>{sunlightHours}</span>
                    <span>7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <BarChart3 className="h-10 w-10 text-solar-gold mr-4" />
                <h3 className="text-2xl font-semibold">Your Potential Impact</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-solar-gray-500 text-sm mb-1">Estimated System Size</p>
                  <p className="text-3xl font-bold text-solar-black">{capacity} <span className="text-lg font-normal">kW</span></p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-solar-gray-500 text-sm mb-1">Annual Savings</p>
                  <p className="text-3xl font-bold text-solar-green">₹{savings.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-solar-gray-500 text-sm mb-1">CO₂ Reduction</p>
                  <p className="text-3xl font-bold text-solar-blue">{co2Reduction} <span className="text-lg font-normal">tons/year</span></p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-solar-gray-500 text-sm mb-1">Payback Period</p>
                  <p className="text-3xl font-bold text-solar-amber">{paybackPeriod} <span className="text-lg font-normal">years</span></p>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-solar-gold hover:bg-solar-gold/90 text-white font-medium py-3 rounded-md transition-colors">
                  Get Your Detailed Report
                </button>
                <p className="text-solar-gray-500 text-sm text-center mt-4">
                  This is an estimate. Contact us for a precise assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
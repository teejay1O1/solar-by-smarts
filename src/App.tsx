import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-solar-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Benefits />
        <Calculator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
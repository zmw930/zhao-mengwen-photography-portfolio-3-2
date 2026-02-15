
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-stone-200 selection:text-stone-900">
      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="portfolio" className="py-24 bg-white">
          <Portfolio />
        </section>

        <section id="about" className="py-24 bg-[#f9f7f4]">
          <About />
        </section>

        <section id="contact" className="py-24 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

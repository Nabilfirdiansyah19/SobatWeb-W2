import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import Preloader from './components/Preloader';
import Testimonials from './components/Testimonials';
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FAF9F6] scroll-smooth min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
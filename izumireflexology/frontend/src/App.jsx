import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats'; 
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Simulasi loading preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F5EBE0] min-h-screen font-sans selection:bg-[#8B5E3C] selection:text-white">
      {/* Scroll Progress Bar  */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#DDB892] origin-left z-[110]"
      />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Stats /> 
              <About />    
              <Services />
              <Gallery />
              <Contact />
            </main>
            <Footer />
            
            {/* Floating Elements */}
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
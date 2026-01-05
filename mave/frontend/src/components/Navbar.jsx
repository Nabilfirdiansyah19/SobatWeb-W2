import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  return (
    <nav className="fixed w-full z-[100] flex justify-center px-4 py-6 pointer-events-none">
      <motion.div
        className={`
          pointer-events-auto flex justify-between items-center 
          rounded-full px-5 py-2 md:px-8 md:py-3 transition-all duration-700 w-full max-w-7xl
          backdrop-blur-xl border
          ${scrolled 
            ? 'bg-[#4A0E0E]/95 border-[#A67B5B]/20 shadow-2xl' 
            : 'bg-white/10 border-white/20'}
        `}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#A67B5B] rounded-lg flex items-center justify-center text-white shadow-lg">
            <Sparkles size={16} />
          </div>
          <span className={`font-black tracking-tighter italic text-xl ${scrolled ? 'text-[#F5F5DC]' : 'text-[#4A0E0E]'}`}>MAVE.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={`text-[10px] font-black uppercase tracking-widest hover:text-[#A67B5B] transition-colors ${scrolled ? 'text-[#F5F5DC]' : 'text-[#4A0E0E]'}`}>
              {link}
            </a>
          ))}
          <button className="bg-[#A67B5B] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Book Now</button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#A67B5B]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 bg-[#4A0E0E] rounded-[2rem] p-8 shadow-2xl border border-[#A67B5B]/30 pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-[#F5F5DC] text-2xl font-black italic uppercase tracking-tighter hover:text-[#A67B5B]">
                  {link}
                </a>
              ))}
              <button className="w-full mt-4 py-4 bg-[#A67B5B] text-white rounded-2xl font-black uppercase text-xs tracking-widest">Book Appointment</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
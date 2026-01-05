import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

  return (
    <nav className="fixed w-full z-[100] flex justify-center px-4 py-3 md:py-6 pointer-events-none">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0, width: scrolled ? '95%' : '100%', maxWidth: '1200px' }}
        // PERBAIKAN: px-6 di mobile agar teks iZUMi tidak nempel border
        className={`pointer-events-auto flex justify-between items-center rounded-full px-6 md:px-8 py-2.5 md:py-4 transition-all duration-500 border ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl border-[#DDB892]/20 shadow-xl text-[#432818]' 
            : 'bg-[#432818] border-white/10 text-white'
        }`}
      >
        {/* Logo dengan sedikit tracking agar lebih elegan */}
        <span className="font-black text-lg md:text-2xl italic tracking-tighter uppercase whitespace-nowrap">
          iZUMi
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center font-black text-[10px] uppercase tracking-[0.2em]">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#DDB892] transition-all">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Book Now Button: Sekarang lebih proporsional di mobile */}
          <button className="flex items-center gap-2 bg-[#DDB892] text-[#432818] px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg border border-white/20">
            <Calendar size={12} className="md:size-4" />
            <span className="leading-none">Book</span>
          </button>
          
          <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-[#432818] rounded-[2.5rem] p-8 flex flex-col gap-5 md:hidden shadow-2xl pointer-events-auto border border-white/10"
          >
            {links.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-white font-black uppercase italic text-2xl tracking-tighter border-b border-white/5 pb-3 last:border-none"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
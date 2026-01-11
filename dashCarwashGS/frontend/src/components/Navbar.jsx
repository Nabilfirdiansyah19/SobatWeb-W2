import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <nav className="fixed w-full z-50 flex justify-center px-6 py-6 pointer-events-none">
      {/* Main Bar */}
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? '1000px' : '1280px',
          width: '100%',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`
          pointer-events-auto flex justify-between items-center
          rounded-full px-8 py-4 transition-all duration-500
          backdrop-blur-xl border shadow-xl
          ${scrolled
            ? 'bg-white/80 border-slate-200 shadow-black/10'
            : 'bg-white/60 border-slate-200/70 shadow-transparent'}
        `}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-950 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">
            D
          </div>
          <span className="font-black text-blue-950 tracking-tighter text-xl uppercase italic">
            DASH
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center font-bold text-[10px] uppercase tracking-[0.25em] text-slate-600">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-blue-950 transition-all group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-950 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-blue-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="
              absolute top-28 left-6 right-6
              bg-white
              border border-slate-200
              shadow-2xl
              rounded-[2.5rem]
              p-8
              flex flex-col gap-6
              md:hidden
              pointer-events-auto
            "
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-black text-slate-800 hover:text-blue-950 transition-colors"
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

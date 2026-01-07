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
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? "1000px" : "1280px",
          width: "100%",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`
          pointer-events-auto flex justify-between items-center
          rounded-full px-8 py-4 transition-all duration-500
          backdrop-blur-xl border shadow-lg
          ${
            scrolled
              ? "bg-[#F7F3EE]/80 border-[#E6D8B8] shadow-[#C6A15B]/10"
              : "bg-[#F7F3EE]/60 border-[#E6D8B8]/60 shadow-transparent"
          }
        `}
        style={{
          backdropFilter: "blur(18px) saturate(160%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
        }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-black tracking-tight text-xl uppercase text-[#1C1C1C]">
            Lovrich
          </span>
        </div>
  
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center font-bold text-[10px] uppercase tracking-[0.25em] text-[#6B4F3F]">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative transition-colors hover:text-[#C6A15B] group"
            >
              {item}
              <span
                className="
                  absolute -bottom-1 left-0
                  w-0 h-0.5
                  bg-[#C6A15B]
                  group-hover:w-full
                  transition-all duration-300
                "
              />
            </a>
          ))}
        </div>
  
        {/* Mobile Button */}
        <button
          className="md:hidden text-[#1C1C1C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>
  
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            className="
              absolute top-28 left-6 right-6
              bg-[#F7F3EE]/90
              backdrop-blur-2xl
              shadow-xl
              rounded-[2.5rem]
              p-8
              flex flex-col gap-6
              md:hidden
              border border-[#E6D8B8]
              pointer-events-auto
            "
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-[#1C1C1C] hover:text-[#C6A15B] transition-colors"
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
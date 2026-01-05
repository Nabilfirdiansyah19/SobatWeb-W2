import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";

const Gallery = () => {
  const scrollRef = useRef(null);
  const photos = [
    { url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000", title: "Premium Oils" },
    { url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000", title: "Cinema Suite" },
    { url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000", title: "Zen Garden" },
  ];


  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveDistance = clientWidth * 0.8;
      scrollRef.current.scrollTo({ 
        left: direction === 'left' ? scrollLeft - moveDistance : scrollLeft + moveDistance, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#DDB892] font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Visual Journey</span>
          <h2 className="text-5xl md:text-8xl font-black text-[#432818] italic uppercase tracking-tighter leading-none">
            THE <span className="text-[#DDB892] lg:text-[#432818]">SANCTUARY.</span>
          </h2>
        </motion.div>
        
        {/* Navigation - Hidden on very small mobile to save space, but swipe still works */}
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#432818] flex items-center justify-center text-[#432818] active:bg-[#432818] active:text-white transition-all">
            <ArrowLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#432818] flex items-center justify-center text-white active:bg-[#8B5E3C] transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Snap Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-8 overflow-x-auto px-6 md:px-[10%] pb-8 no-scrollbar snap-x snap-mandatory touch-pan-x"
      >
        {photos.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[4rem] overflow-hidden snap-center shadow-2xl bg-[#F5EBE0]"
          >
            <img src={item.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#432818]/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              <p className="text-white font-black text-2xl md:text-4xl uppercase italic tracking-tighter">{item.title}</p>
              <div className="flex items-center gap-2 text-[#DDB892] font-bold text-[10px] uppercase tracking-[0.2em] mt-2 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity">
                Experience Ritual <MoveRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile Swipe Indicator */}
      <div className="text-center md:hidden mt-4">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DDB892] animate-pulse">Swipe to Explore</p>
      </div>
    </section>
  );
};

export default Gallery;
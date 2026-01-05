import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF9F6] pt-32 pb-16 md:py-0"
    >
      {/* Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E3CAA5]/20 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6"
            >
              <div className="hidden md:block h-[1px] w-12 bg-[#4A0E0E]" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#A67B5B]">
                Professional Studio
              </span>
            </motion.div>

            <h1 className="relative inline-block lg:block">
              <motion.span 
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                className="block text-6xl md:text-[10rem] font-black leading-[0.85] text-[#4A0E0E] italic tracking-tighter"
              >
                MAVE
              </motion.span>
              <motion.span 
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.2 }} 
                className="block text-5xl md:text-[7rem] font-light font-serif text-[#A67B5B] md:ml-40 mt-1 md:mt-2"
              >
                Beauty.
              </motion.span>
            </h1>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }} 
              className="mt-6 md:mt-12 max-w-md mx-auto lg:ml-40"
            >
              <p className="text-[#4A0E0E]/70 text-sm md:text-lg leading-relaxed mb-8 italic border-l-2 border-[#A67B5B] pl-4 md:pl-6 text-left">
                Defining elegance in every detail. Seni kecantikan abadi untuk wajah Anda.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <button className="group px-8 md:px-10 py-4 bg-[#4A0E0E] text-[#F5F5DC] rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-[#A67B5B] transition-all flex items-center gap-3">
                  Explore Treatment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image Container - Responsive sizing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative w-full max-w-[280px] md:max-w-md lg:w-2/5"
          >
             <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800" 
                  className="w-full h-[300px] md:h-[500px] object-cover" 
                  alt="Hero" 
                />
             </div>
             <div className="absolute top-4 -left-4 w-full h-full bg-[#A67B5B] rounded-[2rem] md:rounded-[3rem] -z-10 -rotate-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
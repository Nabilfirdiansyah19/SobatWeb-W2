import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Droplets, Sparkles } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / 25);
    mouseY.set(e.clientY / 25);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      // Perbaikan: pt-32 memastikan konten tidak tertutup navbar di mobile
      className="relative min-h-screen flex flex-col justify-start md:justify-center pt-32 md:pt-40 overflow-hidden bg-white"
    >
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/5 blur-[80px] md:blur-[120px] rounded-full -z-10"
      />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-xl mb-6 md:mb-8 mx-auto"
        >
          <Droplets size={14} className="text-blue-950" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-blue-950/60">
            Premium Auto Detailing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-[8.5rem] font-black leading-[1] md:leading-[0.85] tracking-tighter mb-6 md:mb-8 italic text-black"
        >
          ULTIMATE <br />
          <span className="text-blue-950">SHINE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed px-4"
        >
          Berikan perlindungan terbaik untuk kendaraan Anda dengan teknologi 
          Nano Ceramic Coating dan sistem pencucian PH Neutral yang mendetail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <button className="px-8 py-4 md:px-10 md:py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-3 hover:bg-blue-950 transition-all group shadow-2xl">
            Book Appointment
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>

      <div className="bg-blue-950 py-6 md:py-8 overflow-hidden whitespace-nowrap mt-16 md:mt-20 rotate-1 border-y border-white/10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 pr-12 items-center"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-white text-xl md:text-2xl font-black uppercase italic tracking-tighter">CERAMIC COATING 9H</span>
              <Sparkles className="text-blue-400" size={20} />
              <span className="text-white text-xl md:text-2xl font-black uppercase italic tracking-tighter">PAINT PROTECTION</span>
              <Sparkles className="text-blue-400" size={20} />
              <span className="text-white text-xl md:text-2xl font-black uppercase italic tracking-tighter">DEEP INTERIOR CLEAN</span>
              <Sparkles className="text-blue-400" size={20} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
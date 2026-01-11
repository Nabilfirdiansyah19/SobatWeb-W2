import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Droplets, Sparkles } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Efek smooth untuk paralaks orbs
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    // Membagi angka untuk intensitas pergerakan
    mouseX.set(e.clientX / 25);
    mouseY.set(e.clientY / 25);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Parallax Orbs - Menggunakan Navy Blue yang sangat soft */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full -z-10 will-change-transform"
      />
      <motion.div
        style={{ x: smoothX.get() * -0.8, y: smoothY.get() * -0.8 }}
        className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-slate-200/50 blur-[100px] rounded-full -z-10 will-change-transform"
      />

      <div className="container mx-auto px-6 text-center grow flex flex-col justify-center">
        {/* Badge: Putih & Navy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-xl shadow-blue-900/5 mb-8 mx-auto"
        >
          <Droplets size={16} className="text-blue-950" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-950/60">
            Premium Auto Detailing
          </span>
        </motion.div>

        {/* Heading: Hitam & Navy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-6xl md:text-[8.5rem] font-black leading-[0.85] tracking-tighter mb-8 italic text-black"
        >
          ULTIMATE <br />
          <span className="text-blue-950">
            SHINE.
          </span>
        </motion.h1>

        {/* Paragraph: Slate/Grey */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Berikan perlindungan terbaik untuk kendaraan Anda dengan teknologi 
          Nano Ceramic Coating dan sistem pencucian PH Neutral yang mendetail.
        </motion.p>

        {/* CTA Button: Hitam ke Navy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex justify-center"
        >
          <button className="px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-blue-950 transition-all duration-300 group shadow-2xl shadow-blue-900/20 hover:scale-105 active:scale-95">
            Book Appointment
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>

      {/* Marquee: Navy Blue Background */}
      <div className="bg-blue-950 py-8 overflow-hidden whitespace-nowrap mt-20 rotate-1 border-y border-white/10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 pr-12 items-center"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-white text-2xl font-black uppercase italic tracking-tighter opacity-90">
                CERAMIC COATING 9H
              </span>
              <Sparkles className="text-blue-400" size={24} />
              <span className="text-white text-2xl font-black uppercase italic tracking-tighter opacity-90">
                PAINT PROTECTION
              </span>
              <Sparkles className="text-blue-400" size={24} />
              <span className="text-white text-2xl font-black uppercase italic tracking-tighter opacity-90">
                DEEP INTERIOR CLEAN
              </span>
              <Sparkles className="text-blue-400" size={24} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
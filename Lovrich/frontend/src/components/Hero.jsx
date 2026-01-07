import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / 30);
    mouseY.set(e.clientY / 30);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#F7F3EE]"
    >
      {/* Ambient Orbs (Classic Tone) */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#E6D8B8]/40 blur-[160px] rounded-full -z-10"
      />
      <motion.div
        style={{ x: smoothX.get() * -0.6, y: smoothY.get() * -0.6 }}
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#C6A15B]/20 blur-[140px] rounded-full -z-10"
      />
  
      <div className="container mx-auto px-6 min-h-screen grid lg:grid-cols-2 gap-20 items-center pt-32">
  
        {/* TEXT */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-[#1C1C1C]"
          >
            Lovrich <br />
            <span className="text-[#C6A15B]">
              Spa & Wellness
            </span>
          </motion.h1>
  
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-[#6B4F3F] max-w-xl font-medium"
          >
            A peaceful sanctuary for body, mind, and soul.
            Experience premium treatments designed to restore balance,
            beauty, and inner calm.
          </motion.p>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              className="
                px-10 py-5
                bg-[#C6A15B] text-white
                rounded-full
                font-black uppercase tracking-widest text-xs
                flex items-center gap-3
                hover:bg-[#B08E4F]
                transition-colors
                shadow-lg
              "
            >
              Explore Treatments
              <ArrowUpRight />
            </button>
  
            <button
              className="
                px-10 py-5
                bg-white
                text-[#1C1C1C]
                rounded-full
                font-black uppercase tracking-widest text-xs
                border border-[#E6D8B8]
                hover:bg-[#F1ECE4]
                transition-colors
              "
            >
              Book Session
            </button>
          </motion.div>
        </div>
  
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C6A15B]/20 to-transparent rounded-[3rem]" />
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200"
            alt="Lovrich Spa Treatment"
            className="relative rounded-[3rem] shadow-2xl object-cover h-[520px] w-full"
          />
        </motion.div>
  
      </div>
    </section>
  );
  
};

export default Hero;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const words = "IZUMI".split("");

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 1, ease: [0.8, 0, 0.1, 1], delay: 0.5 } 
      }}
      className="fixed inset-0 z-[9999] bg-[#432818] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <h2 className="text-[30vw] font-black italic">SERENITY</h2>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="flex overflow-hidden mb-4">
          {words.map((l, i) => (
            <motion.span
              key={i}
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: i * 0.1, 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-[#DDB892] text-6xl md:text-8xl font-black italic tracking-tighter"
            >
              {l}
            </motion.span>
          ))}
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-48 h-[1px] bg-white/10 mt-2 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            className="absolute inset-0 bg-[#DDB892]"
          />
        </div>

        {/* Counter Percentage */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <span className="text-[#DDB892] font-mono text-sm tracking-[0.3em] font-bold">
            {count}%
          </span>
          <motion.p 
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-[9px] uppercase tracking-[0.5em] font-black"
          >
            Entering Sanctuary
          </motion.p>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 text-[10px] text-[#DDB892]/40 font-bold tracking-[0.3em] uppercase"
      >
        Cinema • Massage • Soul
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      // Animasi keluar: slide ke atas dengan kurva bezier yang smooth
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[10000] bg-[#4A0E0E] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <motion.h1
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }}
          className="text-[15vw] md:text-[10vw] font-black italic text-[#F5F5DC] leading-none tracking-tighter uppercase"
        >
          MAVE
        </motion.h1>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="w-32 h-[1px] bg-[#A67B5B]/30 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="absolute h-full bg-[#A67B5B]"
          />
        </div>
        <span className="text-[#A67B5B] font-mono text-[10px] mt-4 tracking-[0.4em]">
          {percent}%
        </span>
      </div>
    </motion.div>
  );
};

export default Preloader;
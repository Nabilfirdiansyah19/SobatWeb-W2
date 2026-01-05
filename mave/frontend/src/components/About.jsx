import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative grid grid-cols-12 gap-4 items-center">
          
          {/* Floating Element 1 */}
          <motion.div 
            whileInView={{ y: [20, -20] }}
            transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
            className="hidden lg:block absolute top-0 left-10 w-24 h-24 border-2 border-[#A67B5B]/30 rounded-full"
          />

          {/* Left Text Content */}
          <div className="col-span-12 lg:col-span-5 z-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#A67B5B] font-black tracking-[0.5em] text-[10px] uppercase mb-4 block"
            >
              Philosophy
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-[#4A0E0E] italic uppercase leading-none mb-8">
              Artistic <br /> <span className="text-[#A67B5B]">Precision.</span>
            </h2>
            <div className="space-y-6 text-[#4A0E0E]/80 font-medium leading-relaxed italic">
              <p>Mavebeauty bukan sekadar studio kecantikan biasa. Kami adalah tempat di mana seni dan presisi bertemu untuk menciptakan harmoni visual pada wajah Anda.</p>
              <p className="bg-[#4A0E0E] text-[#F5F5DC] p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl">
                "Kami percaya setiap individu memiliki kanvas yang unik. Tugas kami adalah menonjolkan kecantikan alami tersebut dengan teknik semi-permanent makeup paling mutakhir."
              </p>
            </div>
          </div>

          {/* Right Visual Content (The Unique Overlap) */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="pt-20"
            >
              <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=500" className="rounded-t-full w-full h-[400px] object-cover shadow-2xl sepia-[0.3]" alt="Detail" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500" className="rounded-b-full w-full h-[400px] object-cover shadow-2xl" alt="Work" />
              <div className="absolute top-1/2 -right-4 w-20 h-20 bg-[#A67B5B] rounded-full blur-[40px] opacity-30" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
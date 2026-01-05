import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#F5EBE0] flex items-center overflow-hidden px-6 pt-32 md:pt-20 pb-12">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-[#DDB892] blur-[100px] opacity-10 md:hidden" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="font-bold uppercase tracking-[0.3em] text-[10px] text-[#8B5E3C] mb-4 block">
            The Art of Cinematic Healing
          </span>
          <h1 className="text-[13vw] md:text-7xl lg:text-9xl font-light text-[#432818] leading-[0.85] tracking-tighter mb-6">
            REDEFINE <br /> 
            <span className="font-black italic text-[#8B5E3C] lg:text-[#432818]">SERENITY.</span>
          </h1>
          <p className="text-[#8B5E3C] text-sm md:text-lg max-w-md mx-auto lg:mx-0 mb-8 font-medium italic leading-relaxed px-4 md:px-0">
            Perpaduan relaksasi mendalam dan pengalaman sinematik yang memanjakan jiwa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#432818] text-white rounded-full font-bold uppercase tracking-widest text-[10px] shadow-xl active:scale-95 transition-all">
              Reserve Experience
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-[#432818] text-[#432818] rounded-full font-bold uppercase tracking-widest text-[10px] active:scale-95 transition-all">
              Discover More
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full mt-6 lg:mt-0"
        >
          <div className="rounded-t-[7rem] md:rounded-t-[20rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white h-[300px] md:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000" 
              className="w-full h-full object-cover"
              alt="Luxury Spa"
            />
          </div>
          {/* Badge Rating - Scale down for mobile */}
          <div className="absolute -bottom-4 -left-2 md:-left-6 bg-white p-4 md:p-8 rounded-2xl shadow-xl flex flex-col items-center min-w-[100px] md:min-w-[150px]">
            <p className="text-[#432818] font-black text-lg md:text-2xl italic leading-none">9.8/10</p>
            <p className="text-[#8B5E3C] text-[7px] md:text-[9px] uppercase font-bold tracking-tighter mt-1">Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import { motion } from "framer-motion";
import { Wind, Moon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative px-6 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
          <motion.img 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=500" 
            className="rounded-[2rem] md:rounded-[3rem] aspect-[3/4] object-cover mt-8 md:mt-12 shadow-lg" 
          />
          <motion.img 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500" 
            className="rounded-[2rem] md:rounded-[3rem] aspect-[3/4] object-cover shadow-lg" 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[#432818] uppercase italic leading-[0.9] mb-8 tracking-tighter">
            Your New <br /> <span className="text-[#DDB892]">Sanctuary.</span>
          </h2>
          <p className="text-[#8B5E3C] text-base md:text-lg font-medium leading-relaxed mb-10 italic">
            "Kami mengombinasikan seni pijat tradisional dengan teknologi sinema modern untuk relaksasi maksimal."
          </p>
          
          <div className="space-y-4">
            {[{ icon: Wind, text: "Sistem filtrasi udara standar medis" }, { icon: Moon, text: "Suite kedap suara untuk privasi total" }].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="flex gap-4 items-center p-5 bg-[#F5EBE0] rounded-[1.5rem] md:rounded-[2rem] border border-[#DDB892]/30"
              >
                <item.icon className="text-[#432818]" size={24} />
                <span className="font-black uppercase text-[9px] md:text-[10px] tracking-widest text-[#432818]">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
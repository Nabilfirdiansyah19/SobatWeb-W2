import { motion } from 'framer-motion';
import { Sparkles, Scissors, Heart, ArrowRight } from 'lucide-react';

const Services = () => {
  const categories = [
    { title: "Semi-Permanent", price: "1.500", icon: <Sparkles size={24} />, features: ["Microblading", "Lip Blush", "Eyeliner"] },
    { title: "Lash & Nails", price: "350", icon: <Scissors size={24} />, features: ["Lash Extension", "Gel Art", "Manicure"] },
    { title: "Beauty Care", price: "850", icon: <Heart size={24} />, features: ["Glass Skin", "V-Shape", "Lifting"] }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-[#4A0E0E] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center md:text-left mb-16">
          <span className="text-[#A67B5B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Premium Selection</span>
          <h2 className="text-4xl md:text-7xl font-black text-[#F5F5DC] italic uppercase leading-none">Our Secret <span className="text-[#A67B5B]">Menu.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#A67B5B] text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-[#F5F5DC] uppercase mb-2 italic">{service.title}</h3>
              <p className="text-[#A67B5B] text-sm font-black mb-8">Starts from IDR {service.price}K</p>
              
              <ul className="space-y-3 mb-10 w-full">
                {service.features.map((f, idx) => (
                  <li key={idx} className="text-[10px] font-bold uppercase tracking-wider text-[#F5F5DC]/60 flex items-center justify-center gap-2">
                    <div className="w-1 h-1 bg-[#A67B5B] rounded-full" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-[#F5F5DC] text-[#4A0E0E] rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-[#A67B5B] hover:text-white transition-all">Booking Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
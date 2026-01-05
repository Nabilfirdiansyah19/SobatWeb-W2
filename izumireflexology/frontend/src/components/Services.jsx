import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const packages = [
    { name: "Wellness", time: "90", price: "249k", popular: false },
    { name: "Refresh", time: "120", price: "349k", popular: true },
    { name: "Princess", time: "180", price: "499k", popular: false },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#432818] px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter text-center mb-16 md:mb-24"
        >
          Choose Ritual.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -20, rotateX: 5 }}
              // Tambahkan flex flex-col items-center untuk meratakan ke tengah
              className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] transition-all relative flex flex-col items-center text-center ${
                pkg.popular 
                ? 'bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] z-10 scale-100 md:scale-105 border-none' 
                : 'bg-[#F5EBE0]/10 border border-white/10 shadow-xl'
              }`}
              style={{ perspective: "1000px" }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DDB892] text-[#432818] text-[8px] md:text-[9px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Most Preferred
                </div>
              )}
              
              <h3 className={`text-2xl md:text-3xl font-black uppercase italic mb-2 tracking-tighter ${pkg.popular ? 'text-[#432818]' : 'text-[#DDB892]'}`}>
                {pkg.name}
              </h3>
              
              {/* PERBAIKAN: Warna teks waktu diubah agar terlihat jelas di background gelap */}
              <p className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8 ${
                pkg.popular ? 'text-[#8B5E3C]' : 'text-[#DDB892]/80'
              }`}>
                {pkg.time} Mins Experience
              </p>
              
              <p className={`text-5xl md:text-6xl font-black mb-8 md:mb-10 italic ${pkg.popular ? 'text-[#432818]' : 'text-white'}`}>
                {pkg.price}
              </p>
              
              {/* List item juga diposisikan di tengah */}
              <ul className="space-y-4 mb-10 md:mb-12 flex flex-col ">
                {["Private Suite", "Cinema Access", "Organic Oil"].map((f) => (
                  <li key={f} className={`flex items-center gap-1 text-xs md:text-sm font-bold italic ${
                    pkg.popular ? 'text-[#8B5E3C]' : 'text-white/70'
                  }`}>
                    <Check size={16} className={pkg.popular ? 'text-[#432818]' : 'text-[#DDB892]'}/> 
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 md:py-5 rounded-2xl font-black uppercase text-[9px] md:text-[10px] tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${
                pkg.popular 
                  ? 'bg-[#432818] text-white shadow-xl hover:bg-[#8B5E3C]' 
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#432818]'
              }`}>
                Reserve Now <ArrowRight size={14}/>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
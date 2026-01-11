import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, Clock, Check, Calendar, Sparkles } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const features = [
    { 
      icon: Droplets, 
      title: 'PH Neutral Foam', 
      desc: 'Menggunakan sampo pH neutral yang aman untuk menjaga lapisan wax dan coating mobil Anda.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Paint Protection', 
      desc: 'Teknik mencuci "Two-Bucket Method" untuk menghindari baret halus (swirl marks) pada cat.' 
    },
    { 
      icon: Clock, 
      title: 'Express Detailing', 
      desc: 'Layanan cepat dan efisien tanpa mengurangi ketelitian pada setiap sudut interior & eksterior.' 
    }
  ];

  const packages = [
    { 
      name: "Regular Shine", 
      price: "75", 
      features: ["Exterior Power Wash", "Tire Dressing", "Interior Vacuum", "Free Fragrance"], 
      popular: false 
    },
    { 
      name: "Signature Glow", 
      price: "185", 
      features: ["Deep Clean Exterior", "Machine Waxing", "Engine Bay Cleaning", "Interior Detailing", "Glass Scrub"], 
      popular: true 
    },
    { 
      name: "Ultimate Coating", 
      price: "1.500", 
      features: ["Multi-stage Polishing", "Ceramic Coating 9H", "Interior Deep Clean", "Window Coating", "Maintenance Kit"], 
      popular: false 
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#020630] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full z-0" />

      {/* Section Header */}
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black uppercase italic text-white tracking-tighter"
        >
          Premium <span className="text-blue-400">Auto Care</span>
        </motion.h2>
        <p className="text-slate-400 mt-4 font-bold uppercase tracking-[0.3em] text-[10px]">
          Professional Detailing & Wash System
        </p>
      </div>

      {/* Features */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-10 container mx-auto px-6 relative z-10 mb-32"
      >
        {features.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -15 }}
            className="group bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 shadow-2xl shadow-black/10"
          >
            <div className="w-16 h-16 mb-8 rounded-2xl flex items-center justify-center bg-blue-950 text-white shadow-lg shadow-blue-900/30 group-hover:rotate-12 transition-transform duration-500">
              <item.icon size={30} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase italic tracking-tighter">
              {item.title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pricing */}
      <div id="pricing" className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
            Wash <span className="text-blue-400">Packages</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((tier, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative p-12 rounded-[3.5rem] border transition-all duration-500
                ${tier.popular 
                  ? 'bg-blue-950 text-slate-100 border-blue-900 shadow-2xl scale-105 z-20' 
                  : 'bg-slate-50 text-slate-900 border-slate-200 shadow-xl'}`}
            >
              {tier.popular && (
                <div className="absolute -top-5 right-10 flex items-center gap-2 bg-blue-900 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                  <Sparkles size={12} className="text-yellow-400" /> Best Seller
                </div>
              )}

              <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${tier.popular ? 'opacity-60' : 'text-slate-400'}`}>
                {tier.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xs font-bold mr-1 opacity-70">IDR</span>
                <span className="text-5xl font-black italic tracking-tighter">
                  {tier.price}{tier.name === "Ultimate Coating" ? "" : "K"}
                </span>
                {tier.name === "Ultimate Coating" && (
                  <span className="text-xl font-black italic ml-1">JT</span>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3 font-bold italic text-sm">
                    <Check size={18} className={tier.popular ? "text-blue-400" : "text-blue-950"} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all duration-300
                  ${tier.popular 
                    ? 'bg-white text-blue-950 hover:bg-slate-100' 
                    : 'bg-blue-950 text-white hover:bg-blue-900'}`}
              >
                <Calendar size={14} /> Book Schedule
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

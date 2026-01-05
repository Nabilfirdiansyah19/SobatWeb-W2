import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Eyebrows', 'Lips', 'Lashes'];
  
  const works = [
    { id: 1, cat: "Eyebrows", img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800", title: "Korean Mist" },
    { id: 2, cat: "Lips", img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800", title: "Natural Blush" },
    { id: 3, cat: "Lashes", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800", title: "Volume Set" },
    { id: 4, cat: "Eyebrows", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800", title: "Feather Stroke" },
  ];

  return (
    <section id="gallery" className="py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl font-black text-[#4A0E0E] italic uppercase leading-none mb-4"
            >
              The Glow <br /><span className="text-[#A67B5B]">Portofolio.</span>
            </motion.h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {cats.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all
                  ${filter === c ? 'bg-[#4A0E0E] text-[#F5F5DC]' : 'bg-white text-[#4A0E0E]/40 border border-[#4A0E0E]/10'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {works.filter(w => filter === 'All' || w.cat === filter).map((w) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={w.id}
                className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group shadow-lg"
              >
                <img src={w.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E0E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end">
                  <span className="text-[#A67B5B] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{w.cat}</span>
                  <h4 className="text-white text-2xl font-black italic uppercase">{w.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Exterior", "Interior", "Detailing", "Coating"];

  const results = [
    { id: 1, title: "Deep Gloss Polish", category: "Coating", price: "Premium", img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800" },
    { id: 2, title: "Engine Bay Detail", category: "Detailing", price: "Clean", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800" },
    { id: 3, title: "Interior Steam", category: "Interior", price: "Fresh", img: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?w=800" },
    { id: 4, title: "Super Foam Wash", category: "Exterior", price: "Standard", img: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?w=800" },
  ];

  const filtered = filter === "All" ? results : results.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-32 bg-[#020617]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-blue-400 font-bold tracking-widest uppercase text-[10px]">
              Our Gallery
            </span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white">
              Signature <span className="text-blue-400">Shine.</span>
            </h2>
          </motion.div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border relative overflow-hidden
                ${filter === cat
                  ? "text-white border-blue-400"
                  : "bg-[#020617] text-slate-400 border-slate-700 hover:border-blue-400"}`}
              >
                <span className="relative z-10">{cat}</span>
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-blue-950 -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-xl"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={12} className="text-blue-400" />
                      <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-white text-2xl font-black italic uppercase tracking-tighter mb-4">
                      {p.title}
                    </h3>

                    <div className="flex justify-between items-center border-t border-white/10 pt-4">
                      <span className="text-white/80 text-sm font-medium">
                        Service: <span className="font-bold text-white">{p.price}</span>
                      </span>
                      <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-950 hover:bg-blue-400 hover:text-white transition-all">
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>
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

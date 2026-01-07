import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Body Spa", "Massage", "Face", "Hair"];

  const treatments = [
    {
      id: 1,
      title: "Basic Oil Massage",
      category: "Body Spa",
      price: "180K / 60 min",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    },
    {
      id: 2,
      title: "Dry Massage Therapy",
      category: "Massage",
      price: "150K / 60 min",
      img: "https://images.unsplash.com/photo-1519824145371-296894a0daa9",
    },
    {
      id: 3,
      title: "Facial Treatment",
      category: "Face",
      price: "260K / 60 min",
      img: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea",
    },
    {
      id: 4,
      title: "Face Acupressure",
      category: "Face",
      price: "140K / 45 min",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
    },
    {
      id: 5,
      title: "Premium Hair Spa",
      category: "Hair",
      price: "220K / 60 min",
      img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9",
    },
  ];  

  const filtered =
    filter === "All"
      ? treatments
      : treatments.filter((t) => t.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="gallery" className="py-32 bg-[#F7F3EE]">
      <div className="container mx-auto px-6">
  
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#1C1C1C]">
              Spa Experiences
            </h2>
            <p className="text-[#6B4F3F] mt-2 max-w-md">
              Carefully curated treatments designed for total relaxation.
            </p>
          </div>
  
          {/* Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-colors
                  ${
                    filter === cat
                      ? "bg-[#C6A15B] text-white border-[#C6A15B]"
                      : "bg-white text-[#6B4F3F] border-[#E6D8B8] hover:border-[#C6A15B]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
  
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="
                group relative aspect-[3/4] 
                rounded-[2.5rem] overflow-hidden
                bg-white/70 backdrop-blur-xl
                border border-[#E6D8B8]
                shadow-sm
              "
            >
              <img
                src={t.img}
                alt={t.title}
                className="w-full h-full object-cover"
              />
  
              {/* Overlay */}
              <div className="
                absolute inset-0 
                bg-gradient-to-t from-black/60 via-black/20 to-transparent
                p-6 flex flex-col justify-end
              ">
                <span className="text-[#E6D8B8] text-xs font-bold tracking-widest uppercase">
                  {t.category}
                </span>
  
                <h3 className="text-white text-xl font-semibold mt-1">
                  {t.title}
                </h3>
  
                <div className="flex justify-between items-center mt-4">
                  <span className="text-white text-sm font-medium">
                    {t.price}
                  </span>
  
                  <button
                    className="
                      w-10 h-10 rounded-full
                      bg-white
                      border border-[#E6D8B8]
                      flex items-center justify-center
                      text-[#6B4F3F]
                      hover:bg-[#C6A15B]
                      hover:text-white
                      transition-colors
                    "
                  >
                    <Calendar size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    </section>
  );
  
};

export default Gallery;

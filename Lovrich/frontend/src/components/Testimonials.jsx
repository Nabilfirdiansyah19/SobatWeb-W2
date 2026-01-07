import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { name: "ANARIA KHANTI", role: "Pelanggan", text: "Tempat buat me time baru yg nyaman bgt, terapis handal dan ramah, krn lg soft opening jadi ada diskon 😁 …", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Shelly Angelica", role: "Pelanggan", text: "recommended❤️ tempat nya nyaman, bersih, terapis nya ramah, pijetan nya mantep! bakal langganan pasti nya😍", avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Chavella", role: "Pelanggan", text: "tempatnya super comfy & relaxing, therapistnya juga ramah bgt", avatar: "https://i.pravatar.cc/150?img=5" },
  ];

  return (
    <section
      id="testimonials"
      className="py-32 bg-[#F7F3EE] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
  
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-[#1C1C1C]">
            Client <span className="text-[#C6A15B]">Voices</span>
          </h2>
        </div>
  
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-white/70
                backdrop-blur-xl
                p-10
                rounded-[3.5rem]
                border border-[#E6D8B8]
                shadow-lg
                flex flex-col
              "
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#C6A15B]/20 mb-6" />
  
              {/* Text */}
              <p className="text-lg font-medium text-[#6B4F3F] italic mb-8 leading-relaxed">
                “{rev.text}”
              </p>
  
              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="
                    w-14 h-14
                    rounded-2xl
                    border border-[#E6D8B8]
                    shadow-md
                    object-cover
                  "
                />
                <div>
                  <h4 className="font-black text-[#1C1C1C] leading-none">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] font-bold text-[#C6A15B] uppercase tracking-widest mt-1">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
  
      </div>
    </section>
  );  
};

export default Testimonials;
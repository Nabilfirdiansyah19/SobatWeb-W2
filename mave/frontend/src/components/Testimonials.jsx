import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { name: "Jessica Loren", text: "Hasil sulam alisnya natural banget, banyak yang kira ini asli! Studio paling nyaman di Gading Serpong.", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Sarah Amalia", text: "Lip blush-nya juara. Warnanya keluar tapi tetap soft. Admin Jakarta fast response banget!", avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Budi Santoso", text: "Istri saya treatment di sini, pelayanannya premium. Sangat worth it dengan harganya.", avatar: "https://i.pravatar.cc/150?img=12" },
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#4A0E0E] relative overflow-hidden">
      {/* Decorative Gradient to transition back to Cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 " />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-[#F5F5DC]"
          >
            True <span className="text-[#A67B5B]">Glow Stories.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[3.5rem] border border-white/10 group flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#A67B5B] text-[#A67B5B]" />)}
              </div>
              <p className="text-lg font-medium text-[#F5F5DC]/80 italic mb-8 leading-relaxed">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={rev.avatar} className="w-12 h-12 rounded-2xl border-2 border-[#A67B5B] object-cover" alt="" />
                <div>
                  <h4 className="font-black text-[#F5F5DC] text-sm uppercase">{rev.name}</h4>
                  <p className="text-[10px] text-[#A67B5B] font-bold uppercase tracking-widest">Verified Client</p>
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
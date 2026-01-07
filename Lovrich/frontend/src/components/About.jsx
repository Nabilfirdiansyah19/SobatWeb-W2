import { motion } from "framer-motion";
import {
  Flower,
  ShieldCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const About = () => {
  const perks = [
    {
      icon: Flower,
      label: "Premium Treatments",
      desc: "Perawatan spa berkualitas dengan bahan alami pilihan.",
    },
    {
      icon: ShieldCheck,
      label: "Certified Therapists",
      desc: "Terapis berpengalaman & tersertifikasi profesional.",
    },
    {
      icon: HeartPulse,
      label: "Holistic Wellness",
      desc: "Relaksasi tubuh, pikiran, dan energi secara menyeluruh.",
    },
    {
      icon: Sparkles,
      label: "Calm & Private Space",
      desc: "Suasana tenang, higienis, dan nyaman untuk Anda.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#F7F3EE]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
        />
  
        <div>
          <h2 className="text-5xl font-black uppercase italic mb-8 text-[#1C1C1C]">
            Experience{" "}
            <span className="text-[#C6A15B]">True Relaxation.</span>
          </h2>
  
          <p className="text-[#6B4F3F] mb-10 max-w-xl">
            Lovrich Spa menghadirkan pengalaman spa & wellness eksklusif
            yang dirancang untuk mengembalikan keseimbangan tubuh dan pikiran
            Anda di tengah kesibukan sehari-hari.
          </p>
  
          <div className="grid grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="
                  p-6 bg-white rounded-3xl shadow
                  border border-[#E6D8B8]
                "
              >
                <p.icon className="text-[#C6A15B] mb-3" />
                <h4 className="font-black text-[#1C1C1C]">
                  {p.label}
                </h4>
                <p className="text-xs text-[#6B4F3F]">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );  
};

export default About;

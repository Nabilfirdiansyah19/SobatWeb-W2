import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Sparkles, Clock } from "lucide-react";

const About = () => {
  // Keunggulan layanan car wash
  const perks = [
    { icon: Droplets, label: "PH Neutral", desc: "Sampo khusus menjaga kilau cat." },
    { icon: ShieldCheck, label: "Certified Team", desc: "Detailer berpengalaman & terlatih." },
    { icon: Sparkles, label: "Nano Coating", desc: "Proteksi tambahan setiap cuci." },
    { icon: Clock, label: "Efficient Process", desc: "Cepat tanpa mengurangi kualitas." },
  ];

  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Gambar Detailing - Link Aktif (HD) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
<img
  src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?w=800"
  alt="Car Wash Process"
  referrerPolicy="no-referrer"
  className="rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover h-[500px] w-full"
/>
          {/* Aksen dekoratif navy di belakang gambar */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-950 -z-10 rounded-full blur-2xl opacity-20" />
        </motion.div>

        <div>
          {/* Heading: Navy & Black */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black uppercase italic mb-8 leading-tight text-black"
          >
            Defining The <span className="text-blue-950">Shine Standard.</span>
          </motion.h2>

          <p className="text-slate-500 mb-10 font-medium leading-relaxed">
            Kami bukan sekadar tempat mencuci mobil. Kami adalah laboratorium perawatan kendaraan 
            yang menggabungkan teknologi modern dengan ketelitian tangan para ahli. 
            Setiap jengkel kendaraan Anda adalah prioritas kami.
          </p>

          {/* Grid Perk Cards */}
          <div className="grid grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, backgroundColor: "#020617", color: "#ffffff" }} // Berubah ke Navy saat hover
                className="p-6 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 transition-colors duration-300 group"
              >
                <p.icon className="text-blue-950 mb-4 group-hover:text-blue-400 transition-colors" size={28} />
                <h4 className="font-black uppercase italic tracking-tighter text-lg">{p.label}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-300 transition-colors">
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
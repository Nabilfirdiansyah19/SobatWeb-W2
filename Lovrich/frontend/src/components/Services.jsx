import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";

const SERVICES = [
  {
    category: "Body Spa",
    icon: Flame,
    services: [
      {
        name: "Basic Oil Massage",
        options: [
          { duration: "60 min", price: "180K" },
          { duration: "90 min", price: "250K" },
        ],
      },
      {
        name: "Dry Massage",
        options: [
          { duration: "60 min", price: "150K" },
          { duration: "90 min", price: "210K" },
        ],
      },
      {
        name: "Hot Stone Massage",
        options: [
          { duration: "60 min", price: "280K" },
          { duration: "90 min", price: "360K" },
        ],
      },
    ],
  },
  {
    category: "Face & Hair",
    icon: Sparkles,
    services: [
      {
        name: "Basic Hair Spa",
        options: [
          { duration: "45 min", price: "120K" },
          { duration: "60 min", price: "160K" },
        ],
      },
      {
        name: "Premium Hair Spa",
        options: [{ duration: "60 min", price: "220K" }],
      },
      {
        name: "Wash & Styling",
        options: [{ duration: "30 min", price: "90K" }],
      },
      {
        name: "Face Acupressure",
        options: [{ duration: "45 min", price: "140K" }],
      },
      {
        name: "Facial Treatment",
        options: [{ duration: "60 min", price: "260K" }],
      },
      {
        name: "Face Mask",
        options: [{ duration: "30 min", price: "80K" }],
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#E8DEC9]">
      <div className="container mx-auto px-6 max-w-6xl">
  
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1C1C1C]">
            Our <span className="text-[#C6A15B]">Treatments</span>
          </h2>
          <p className="mt-4 text-[#6B4F3F] max-w-xl mx-auto font-medium">
            Pilih perawatan favorit Anda dan nikmati relaksasi terbaik.
          </p>
        </motion.div>
  
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((category) => (
            <div
              key={category.category}
              className="
                bg-white/70 backdrop-blur-xl
                rounded-[3rem] p-10
                border border-[#E6D8B8]
                shadow-lg
              "
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-[#C6A15B]
                    text-white
                    flex items-center justify-center
                    shadow-md
                  "
                >
                  <category.icon size={26} />
                </div>
                <h3 className="text-3xl font-black italic tracking-tight text-[#1C1C1C]">
                  {category.category}
                </h3>
              </div>
  
              {/* Services */}
              <div className="space-y-10">
                {category.services.map((service) => (
                  <div key={service.name}>
                    <h4 className="font-black uppercase italic mb-4 text-[#1C1C1C]">
                      {service.name}
                    </h4>
  
                    <ul className="space-y-3 mb-4">
                      {service.options.map((opt, i) => (
                        <li
                          key={i}
                          className="
                            flex justify-between items-center
                            bg-white
                            rounded-xl px-5 py-3
                            text-sm font-bold
                            border border-[#E6D8B8]/60
                          "
                        >
                          <span className="text-[#6B4F3F]">
                            {opt.duration}
                          </span>
                          <span className="text-[#C6A15B] text-base font-black">
                            {opt.price}
                          </span>
                        </li>
                      ))}
                    </ul>
  
                    {/* CTA */}
                    <button
                      className="
                        w-full mt-3 py-3 rounded-xl
                        border border-[#C6A15B]
                        text-[#C6A15B]
                        font-black uppercase tracking-wide
                        hover:bg-[#C6A15B]
                        hover:text-white
                        transition-colors
                      "
                    >
                      Book Treatment
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
};

export default Services;

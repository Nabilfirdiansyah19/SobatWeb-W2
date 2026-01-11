import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Soft Background Glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[900px] h-[900px]
          bg-blue-400/10
          blur-[180px]
          rounded-full
          z-0
        "
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
            Bring Your Car to <span className="text-blue-950">DASH</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-xl mx-auto">
            Experience professional care that elevates your car’s presence.
          </p>
        </motion.div>

        {/* Map Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative min-h-[520px]
            bg-white
            border border-slate-200
            rounded-[4rem]
            p-6
            shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9211026076277!2d106.61769909999997!3d-6.2741045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd0e4350bb79%3A0x5849b19484e7b097!2sDash%20Carwash!5e0!3m2!1sid!2sid!4v1768109869813!5m2!1sid!2sid"
            className="
              absolute inset-0 w-full h-full
              rounded-[3rem]
              grayscale
              contrast-110
              opacity-95
            "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />

          {/* Location Card */}
          <div className="absolute bottom-12 left-12 right-12">
            <div
              className="
                bg-white
                border border-slate-200
                p-6
                rounded-[2.5rem]
                shadow-xl
                flex items-center gap-5
                max-w-xl
              "
            >
              <div
                className="
                  w-14 h-14
                  bg-blue-950
                  rounded-2xl
                  flex items-center justify-center
                  text-white
                  shadow-lg
                "
              >
                <MapPin size={24} />
              </div>
              <div>
                <p
                  className="
                    text-[10px]
                    font-black
                    text-blue-950
                    uppercase
                    tracking-widest
                    mb-1
                  "
                >
                  Visit us at
                </p>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  Jalan Kampung Gunung Batu, Cijantra, Medang, Kabupaten Tangerang, Banten
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

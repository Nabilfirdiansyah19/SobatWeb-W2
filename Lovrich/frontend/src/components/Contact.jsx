import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#F7F3EE] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-[900px] h-[900px] 
        bg-[#C6A15B]/20 
        blur-[180px] 
        rounded-full 
        z-0
      " />
  
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black text-[#1C1C1C] uppercase italic tracking-tighter">
            Visit <span className="text-[#C6A15B]">Us.</span>
          </h2>
          <p className="mt-4 text-[#6B4F3F] font-medium max-w-xl mx-auto">
            Experience a peaceful sanctuary in the heart of the city.
          </p>
        </motion.div>
  
        {/* Map Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            relative min-h-[520px]
            bg-white/60
            backdrop-blur-2xl
            border border-[#E6D8B8]
            rounded-[4rem]
            p-6
            shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]
          "
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9353626056645!2d106.6381313!3d-6.2722304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb6ea1535921%3A0xaa0d0fac9b5a705c!2sLovrich%20Hair%20Beauty%20%26%20Spa!5e0!3m2!1sid!2sid!4v1767763445223!5m2!1sid!2sid"
            className="
              absolute inset-0 w-full h-full
              rounded-[3rem]
              grayscale
              contrast-110
              opacity-90
            "
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
  
          {/* Location Card */}
          <div className="absolute bottom-12 left-12 right-12">
            <div className="
              bg-white/80
              backdrop-blur-2xl
              border border-[#E6D8B8]
              p-6
              rounded-[2.5rem]
              shadow-2xl
              flex items-center gap-5
              max-w-xl
            ">
              <div className="
                w-12 h-12
                bg-[#C6A15B]
                rounded-2xl
                flex items-center justify-center
                text-white
                shadow-lg
              ">
                <MapPin size={24} />
              </div>
              <div>
                <p className="
                  text-[10px]
                  font-black
                  text-[#C6A15B]
                  uppercase
                  tracking-widest
                  leading-none
                  mb-1
                ">
                  Visit us at
                </p>
                <p className="
                  text-sm
                  font-bold
                  text-[#1C1C1C]
                  leading-tight
                ">
                  Maggiore Grande Blok M No. 5, Gading Serpong
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

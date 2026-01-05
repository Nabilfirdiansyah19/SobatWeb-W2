import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#F5EBE0] px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-2xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-8xl font-black text-[#432818] italic uppercase tracking-tighter leading-none mb-10">Start Your <br /> Journey.</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, text: "Gading Serpong, Tangerang" },
                { icon: Phone, text: "+62 812 3456 7890" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[#432818] font-black uppercase tracking-widest text-[10px] md:text-xs">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F5EBE0] rounded-xl md:rounded-2xl flex items-center justify-center"><item.icon size={20} /></div>
                  {item.text}
                </div>
              ))}
            </div>
            <button className="mt-10 md:mt-12 w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-[#432818] text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-[#DDB892] transition-all active:scale-95">
              Contact Now
            </button>
          </div>
          
          <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-[#F5EBE0] shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d106.6!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1" 
              className="w-full h-full grayscale"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
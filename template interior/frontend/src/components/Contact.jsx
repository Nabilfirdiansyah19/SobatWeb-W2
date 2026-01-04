import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Compass } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-[#FDFBF7] overflow-hidden relative">
      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <span className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest block mb-4">Get In Touch</span>
          <h2 className="text-5xl font-serif mb-10">Mari Mulai <br/> Proyek Anda.</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm"><MapPin size={18} /></div>
              <p className="text-sm text-slate-600">{businessConfig.contact.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm"><Phone size={18} /></div>
              <p className="text-sm text-slate-600">Contact us via Whatsapp</p>
            </div>
          </div>
        </motion.div>

        <form className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-black/5 space-y-8">
          <input type="text" placeholder="Your Name" className="w-full border-b border-slate-200 py-4 outline-none focus:border-[#D4AF37] bg-transparent" />
          <input type="email" placeholder="Email Address" className="w-full border-b border-slate-200 py-4 outline-none focus:border-[#D4AF37] bg-transparent" />
          <textarea placeholder="Tell us about your project" rows="4" className="w-full border-b border-slate-200 py-4 outline-none focus:border-[#D4AF37] bg-transparent resize-none"></textarea>
          <button className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#D4AF37] transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
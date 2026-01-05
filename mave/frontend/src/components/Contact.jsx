import { motion } from 'framer-motion';
import { Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-[#4A0E0E]/5 flex flex-col lg:flex-row">
          {/* Left: Info */}
          <div className="lg:w-1/2 p-12 md:p-20 bg-[#4A0E0E] text-[#F5F5DC]">
            <h2 className="text-5xl font-black italic uppercase mb-12">Connect <br /><span className="text-[#A67B5B]">With Us.</span></h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#A67B5B]/20 flex items-center justify-center text-[#A67B5B] shrink-0"><MapPin /></div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-2">Gading Serpong</h4>
                  <p className="text-sm opacity-70">Ruko Golden 8, Blok K No. 12, Tangerang</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#A67B5B]/20 flex items-center justify-center text-[#A67B5B] shrink-0"><Phone /></div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-2">Jakarta</h4>
                  <p className="text-sm opacity-70">Jl. Senopati No. 88, Kebayoran Baru, Jaksel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2 p-12 md:p-20">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#4A0E0E]/40">Your Name</label>
                  <input type="text" className="w-full border-b border-[#4A0E0E]/10 py-2 outline-none focus:border-[#A67B5B] transition-all bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#4A0E0E]/40">Your Email</label>
                  <input type="email" className="w-full border-b border-[#4A0E0E]/10 py-2 outline-none focus:border-[#A67B5B] transition-all bg-transparent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#4A0E0E]/40">Message</label>
                <textarea rows="4" className="w-full border-b border-[#4A0E0E]/10 py-2 outline-none focus:border-[#A67B5B] transition-all bg-transparent"></textarea>
              </div>
              <button className="px-12 py-4 bg-[#A67B5B] text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#4A0E0E] transition-all flex items-center gap-3">
                Send Now <Send size={14}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Instagram, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4A0E0E] pt-20 pb-10 text-[#F5F5DC]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-black italic tracking-tighter mb-6 uppercase">MAVEBEAUTY.</h3>
            <p className="text-sm font-light leading-relaxed opacity-70 mb-8 font-serif italic">
              "Beauty is not about being perfect. It's about being confident in your own skin. Stay tuned for the glow."
            </p>
            <div className="flex gap-4">
              {[Instagram, Globe, Mail].map((Icon, i) => (
                <div key={i} className="w-10 h-10 border border-[#F5F5DC]/20 rounded-xl flex items-center justify-center hover:bg-[#A67B5B] transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-black uppercase text-xs tracking-[0.3em] text-[#A67B5B]">Locations</h4>
            <div className="space-y-6">
              <div>
                <p className="font-black text-xs uppercase mb-1">Gading Serpong</p>
                <p className="text-[11px] opacity-60 font-medium">Ruko Golden 8, Blok K No. 12, Gading Serpong, Tangerang</p>
              </div>
              <div>
                <p className="font-black text-xs uppercase mb-1">Jakarta</p>
                <p className="text-[11px] opacity-60 font-medium">Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-black uppercase text-xs tracking-[0.3em] text-[#A67B5B]">Business Hours</h4>
            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase">Tue - Sun</span>
                <span className="text-xs font-bold uppercase">10:00 - 19:00</span>
              </div>
              <div className="flex justify-between items-center opacity-40">
                <span className="text-xs font-bold uppercase">Monday</span>
                <span className="text-xs font-bold uppercase italic">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">© 2024 MAVEBEAUTY STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest opacity-40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
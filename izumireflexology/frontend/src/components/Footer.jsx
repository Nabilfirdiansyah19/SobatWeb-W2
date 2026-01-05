import { Instagram, Globe, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Footer = () => {
  return (
    <footer className="bg-[#432818] pt-24 pb-12 text-[#EDE0D4]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">iZUMi</h2>
            <p className="text-[#DDB892] font-medium leading-relaxed opacity-80">
              Your escape from the city noise. The original home of Cinemaflexology in Gading Serpong.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-black uppercase text-xs tracking-[0.2em] text-[#DDB892]">Quick Links</h4>
            <ul className="space-y-3 font-bold text-sm">
              <li><a href="#home" className="hover:ml-2 transition-all">Home</a></li>
              <li><a href="#services" className="hover:ml-2 transition-all">Treatments</a></li>
              <li><a href="#gallery" className="hover:ml-2 transition-all">Sanctuary</a></li>
            </ul>
          </div>

          <div className="space-y-6 text-right md:text-left">
            <h4 className="font-black uppercase text-xs tracking-[0.2em] text-[#DDB892]">Visit Us</h4>
            <p className="text-sm font-medium">{businessConfig.address}</p>
            <div className="flex gap-4 mt-6">
              {[Instagram, MessageCircle, Globe].map((Icon, i) => (
                <div key={i} className="w-10 h-10 border border-[#DDB892]/30 rounded-full flex items-center justify-center hover:bg-[#DDB892] hover:text-[#432818] transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#DDB892]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#DDB892]/50">
          <p>© 2026 IZUMI REFLEXOLOGY. ALL RIGHTS RESERVED.</p>
          <p>GADING SERPONG • INDONESIA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
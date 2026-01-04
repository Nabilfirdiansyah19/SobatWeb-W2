import { Instagram, Send, MapPin, Phone, Mail } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Footer = () => {
  return (
    <footer className="relative bg-[#1A1A1A] pt-32 pb-10 px-6 md:px-20 overflow-hidden text-white">
      {/* Background Decor - Efek Glow Mewah */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          
          {/* Section 1: Brand & Bio */}
          <div className="col-span-2 space-y-8">
            <h2 className="text-5xl font-serif">
              {businessConfig.brandName}<span className="text-[#D4AF37]">.</span>
            </h2>
            <p className="max-w-md text-slate-400 font-light leading-relaxed">
              Mewujudkan hunian impian dengan sentuhan profesional yang abadi. Kami percaya setiap ruang memiliki potensi untuk menjadi karya seni yang fungsional bagi pemiliknya.
            </p>
            <div className="flex gap-4">
              <a 
                href={businessConfig.contact.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={businessConfig.contact.whatsapp} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Section 2: Contact Info */}
          <div className="space-y-8">
            <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 text-sm italic font-light">
                <MapPin size={16} className="text-[#D4AF37]"/> 
                {businessConfig.contact.address}
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm italic font-light">
                <Mail size={16} className="text-[#D4AF37]"/> 
                {businessConfig.contact.email}
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm italic font-light">
                <Phone size={16} className="text-[#D4AF37]"/> 
                Admin Support Available
              </div>
            </div>
          </div>

          {/* Section 3: Navigation Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm uppercase tracking-widest font-bold">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#D4AF37] transition-all opacity-0 group-hover:opacity-100"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#D4AF37] transition-all opacity-0 group-hover:opacity-100"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#D4AF37] transition-all opacity-0 group-hover:opacity-100"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#D4AF37] transition-all opacity-0 group-hover:opacity-100"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-500">
            © {new Date().getFullYear()} {businessConfig.brandName.toUpperCase()} STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[8px] uppercase tracking-widest text-slate-600 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[8px] uppercase tracking-widest text-slate-600 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
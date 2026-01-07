import { Instagram, Globe, Mail, Phone, MapPin } from "lucide-react";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Wellness Programs", href: "/programs" },
  { label: "Testimonials", href: "/testimonials" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Website", href: "#", icon: Globe },
];

const Footer = () => {
  return (
    <footer className="bg-[#F7F3EE] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="bg-white/70 backdrop-blur-xl border border-[#E6D8B8] rounded-[3rem] p-12 shadow-lg">
          <div className="grid gap-12 md:grid-cols-4">
  
            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black tracking-tight text-[#1C1C1C] uppercase">
                  Lovrich
                </span>
              </div>
              <p className="text-[#6B4F3F] leading-relaxed">
                Your sanctuary for total relaxation. <br />
                A peaceful sanctuary for body, mind, and soul. <br />
                Experience total relaxation and wellness.
              </p>
            </div>
  
            {/* Company Links */}
            <nav>
              <h4 className="mb-4 text-xs font-black tracking-[0.25em] uppercase text-[#C6A15B]">
                Company
              </h4>
              <ul className="space-y-3 text-sm font-semibold text-[#6B4F3F]">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-[#C6A15B] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
  
            {/* Contact */}
            <div>
              <h4 className="mb-4 text-xs font-black tracking-[0.25em] uppercase text-[#C6A15B]">
                Contact
              </h4>
              <address className="not-italic space-y-3 text-sm font-semibold text-[#6B4F3F]">
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#C6A15B]" />
                  Maggiore Grande Blok M No. 5, Gading Serpong
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-[#C6A15B]" />
                  +62 0813-1122-889
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-[#C6A15B]" />
                  lovrichspa@gmail.com
                </p>
              </address>
            </div>
  
            {/* Social */}
            <div className="md:text-right">
              <h4 className="mb-4 text-xs font-black tracking-[0.25em] uppercase text-[#C6A15B]">
                Follow Us
              </h4>
              <div className="flex md:justify-end gap-4">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      w-12 h-12 rounded-full 
                      bg-white 
                      border border-[#E6D8B8] 
                      flex items-center justify-center 
                      text-[#6B4F3F]
                      hover:bg-[#C6A15B] 
                      hover:text-white 
                      transition-all 
                      shadow-sm
                    "
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
  
          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-[#E6D8B8] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] font-bold tracking-widest text-[#6B4F3F] uppercase">
              © {new Date().getFullYear()} Lovrich. All rights reserved.
            </p>
            <p className="text-xs text-[#6B4F3F]">
              Licensed Wellness & Spa Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
  
};

export default Footer;

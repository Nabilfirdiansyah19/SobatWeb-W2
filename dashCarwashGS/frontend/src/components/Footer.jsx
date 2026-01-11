import { Instagram, Globe, Mail, MapPin } from "lucide-react";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Website", href: "#", icon: Globe },
];

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-xl">

          <div className="grid gap-12 md:grid-cols-4">

            {/* Brand */}
            <div className="space-y-5">
              <span className="text-2xl font-black tracking-tight text-blue-950 uppercase">
                DASH
              </span>
              <p className="text-slate-500 leading-relaxed">
                Your car deserves a refined and professional touch.
              </p>
            </div>

            {/* Company */}
            <nav>
              <h4 className="mb-4 text-xs font-black tracking-[0.25em] uppercase text-blue-950">
                Company
              </h4>
              <ul className="space-y-3 text-sm font-semibold text-slate-600">
                {COMPANY_LINKS.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-blue-950 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-xs font-black tracking-[0.25em] uppercase text-blue-950">
                Contact
              </h4>
              <address className="not-italic space-y-3 text-sm font-semibold text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-blue-950" />
                  Medang, Tangerang
                </p>
                <p className="flex items-center gap-2">
                  <Instagram size={14} className="text-blue-950" />
                  @dashcarwash.gs
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-blue-950" />
                  dashcarwash@gmail.com
                </p>
              </address>
            </div>

            {/* Social */}
            <div className="md:text-right">
              <h4 className="mb-4 text-xs font-black tracking-[0.25em] uppercase text-blue-950">
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
                      bg-slate-100
                      border border-slate-200
                      flex items-center justify-center
                      text-blue-950
                      hover:bg-blue-950
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
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
              © {new Date().getFullYear()} Dash Carwash. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Licensed Dash Carwash Gading Serpong
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

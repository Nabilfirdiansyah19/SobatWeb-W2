import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageSquare, Send, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Selamat datang di iZUMi. Ada yang bisa kami bantu mengenai reservasi hari ini?' }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const qaData = {
    "Cinemaflexology": "Cinemaflexology adalah layanan unggulan kami dimana Anda dapat menikmati refleksi premium di dalam suite privat yang dilengkapi layar besar untuk menonton film.",
    "Lokasi & Jam": `iZUMi berlokasi di ${businessConfig.address}. Kami buka setiap hari mulai pukul 10:00 hingga 22:00.`,
    "Daftar Harga": "Kami memiliki paket mulai dari Wellness, Refresh, hingga Princess Suite. Harga bervariasi tergantung durasi (90-180 menit)."
  };

  const handleUserClick = (question) => {
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: qaData[question] }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="pointer-events-auto mb-6 w-[90vw] md:w-[400px] h-[550px] bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] border border-[#EDE0D4] overflow-hidden flex flex-col"
          >
            {/* Header: Professional & Clean */}
            <div className="bg-[#432818] p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#DDB892] rounded-full flex items-center justify-center">
                  <Sparkles size={18} className="text-[#432818]" />
                </div>
                <div>
                  <h4 className="font-black text-sm tracking-widest uppercase italic">iZUMi AI</h4>
                  <p className="text-[9px] opacity-60 uppercase font-bold tracking-widest">Digital Concierge</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20}/>
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#F5EBE0]/30 no-scrollbar">
              {messages.map((m, i) => (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${
                    m.role === 'user' ? 'bg-[#8B5E3C] text-white rounded-tr-none' : 'bg-white text-[#432818] rounded-tl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Actions: No Naughty Design */}
            <div className="p-6 bg-white border-t border-[#EDE0D4]">
              <div className="flex flex-col gap-2 mb-4">
                {Object.keys(qaData).map((q) => (
                  <button key={q} onClick={() => handleUserClick(q)} className="text-left text-[11px] font-black uppercase p-3 border border-[#EDE0D4] rounded-xl text-[#8B5E3C] hover:bg-[#F5EBE0] transition-all tracking-wider">
                    {q}
                  </button>
                ))}
              </div>
              <button onClick={() => window.open(`https://wa.me/${businessConfig.whatsapp?.replace(/\D/g,'')}`)} className="w-full bg-[#432818] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                <Phone size={14}/> Contact Live Agent
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher: Unik & Orang Pasti Tau Ini Chat */}
      <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto relative w-16 h-16 md:w-20 md:h-20 bg-[#432818] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] group border-4 border-white"
        >
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-[#DDB892] rounded-full blur-xl"
        />
        <div className="relative z-10 text-white flex flex-col items-center">
          {isOpen ? <X size={24} /> : (
            <>
              <MessageSquare size={24} />
              <span className="text-[8px] font-black mt-1 tracking-widest">HELP</span>
            </>
          )}
        </div>
      </motion.button>
    </div>
  );
};

export default Chatbot;
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, MessageSquare, Phone, Car } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const CarWashChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo! Saya Gloss-Bot. Ada yang bisa saya bantu terkait perawatan kendaraan Anda hari ini?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Berapa harga cuci mobil?', a: 'Harga mulai dari IDR 75K untuk Regular Shine, hingga 185K untuk Signature Glow. Untuk Coating mulai dari 1.5JT.' },
    { q: 'Berapa lama pengerjaannya?', a: 'Cuci reguler sekitar 45-60 menit. Untuk Signature Glow/Detailing butuh 2-4 jam, dan Ceramic Coating minimal 1-2 hari.' },
    { q: 'Apakah ada garansi hujan?', a: 'Tentu! Kami memberikan garansi cuci ulang GRATIS jika kendaraan Anda terkena hujan dalam waktu 24 jam.' },
    { q: 'Bisa Home Service?', a: 'Layanan panggil ke rumah tersedia khusus untuk paket Detailing dan Coating. Hubungi admin via WhatsApp.' },
  ];
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const phone = "628123456789"; 
    const text = "Halo, saya ingin booking jadwal cuci mobil...";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[99999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-[380px] md:w-[400px] h-[70vh] md:h-[600px] bg-white shadow-[0_30px_100px_-15px_rgba(2,6,23,0.3)] rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header: justify-between agar X di kanan */}
            <div className="bg-blue-950 p-5 md:p-7 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Car size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black italic uppercase tracking-tighter leading-none text-lg md:text-xl">Gloss-Bot</h3>
                  <span className="text-[8px] md:text-[9px] text-blue-400 font-black uppercase tracking-[0.2em]">Auto Care Specialist</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors shrink-0">
                <X size={24} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50/30">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-3 md:p-4 rounded-[1.5rem] text-xs md:text-sm font-bold leading-relaxed shadow-sm border
                    ${msg.role === 'bot' 
                      ? 'bg-white text-slate-700 rounded-bl-none border-slate-100' 
                      : 'bg-blue-950 text-white rounded-br-none border-blue-900'}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-950 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-blue-950 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-blue-950 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 bg-white border-t border-slate-100 space-y-4 shrink-0">
              <div className="flex flex-wrap gap-2 max-h-[100px] overflow-y-auto">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-2 bg-white hover:bg-blue-950 text-blue-950 hover:text-white rounded-full border border-blue-950/20 transition-all"
                  >
                    {opt.q}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-black hover:bg-blue-950 text-white py-3 md:py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95"
              >
                <Phone size={14} className="text-green-400" /> Hubungi Admin
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 md:w-20 md:h-20 bg-blue-950 text-white rounded-[1.8rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl hover:bg-black transition-all relative border-4 border-white"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-400 rounded-full border-4 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default CarWashChatbot;
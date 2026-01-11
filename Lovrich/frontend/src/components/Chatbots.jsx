import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, MessageSquare, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo ✨ Selamat datang di Lovrich Spa. Ada yang bisa kami bantu hari ini?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Treatment apa saja?', a: 'Kami menyediakan Body Spa, Face & Hair Treatment. Cek menu Services ya!' },
    { q: 'Harga & Durasi?', a: 'Durasi 30–90 menit dengan harga bervariasi tergantung jenis layanan.' },
    { q: 'Perlu reservasi?', a: 'Ya, kami menyarankan reservasi agar terapis & ruangan siap untukmu.' },
    { q: 'Jam operasional?', a: 'Lovrich Spa buka setiap hari pukul 10.00 – 22.00 WIB.' },
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
    }, 900);
  };

  const handleWhatsApp = () => {
    const phone = "628123456789";
    const text = "Halo Lovrich Spa, saya ingin reservasi treatment.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    // Penyesuaian posisi container: di mobile lebih rapat ke pinggir
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[99999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="
              mb-4 
              w-[calc(100vw-32px)] sm:w-[380px] md:w-[400px] 
              h-[70vh] md:h-[550px]
              bg-white
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)]
              rounded-[2rem] md:rounded-[2.5rem]
              border border-[#E6D8B8]
              overflow-hidden flex flex-col
            "
          >
            {/* Header: Flex justify-between memastikan X tetap di kanan */}
            <div className="bg-[#1C1C1C] p-5 md:p-6 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C6A15B] rounded-2xl flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-black italic uppercase tracking-tighter leading-none text-base md:text-lg">
                    Spa Assistant
                  </h3>
                  <span className="text-[10px] text-[#E6D8B8] font-bold uppercase tracking-widest">
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-xl transition-colors shrink-0"
              >
                <X size={24} />
              </button>
            </div>
  
            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-[#F7F3EE]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] text-sm font-medium shadow-sm border
                    ${msg.role === 'bot' ? 'bg-white text-[#6B4F3F] rounded-bl-none border-[#E6D8B8]' : 'bg-[#1C1C1C] text-white rounded-br-none border-[#1C1C1C]'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-[#E6D8B8]">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-[#C6A15B] rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-[#C6A15B] rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-[#C6A15B] rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
  
            {/* Footer */}
            <div className="p-4 bg-white border-t border-[#E6D8B8] space-y-3 shrink-0">
              <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[10px] md:text-[11px] font-black uppercase tracking-tighter px-3 py-2 bg-[#F7F3EE] hover:bg-[#E6D8B8] text-[#6B4F3F] rounded-full border border-[#E6D8B8] transition-all"
                  >
                    {opt.q}
                  </button>
                ))}
              </div>
  
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#C6A15B] text-white py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-[#C6A15B]/30 active:scale-95 transition-all"
              >
                <Phone size={14} /> WhatsApp Reservasi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  
      {/* Launcher Button: Dikecilkan sedikit untuk mobile */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-16 h-16 md:w-20 md:h-20
          bg-[#1C1C1C]
          hover:bg-[#C6A15B]
          text-white
          rounded-[1.8rem] md:rounded-[2.5rem]
          flex items-center justify-center
          shadow-[0_15px_40px_rgba(0,0,0,0.3)]
          transition-all relative
          border-4 border-white
        "
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C6A15B] rounded-full border-4 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );  
};

export default Chatbot;
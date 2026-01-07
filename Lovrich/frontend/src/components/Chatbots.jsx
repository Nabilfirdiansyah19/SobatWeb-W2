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

  // === SPA QUESTIONS ===
  const options = [
    { 
      q: 'Treatment apa saja yang tersedia?', 
      a: 'Kami menyediakan Body Spa (Oil Massage, Dry Massage, Hot Stone) serta Face & Hair Treatment seperti Hair Spa, Facial, dan Face Acupressure.' 
    },
    { 
      q: 'Berapa durasi & harga treatment?', 
      a: 'Setiap treatment memiliki pilihan durasi (30–90 menit) dengan harga yang menyesuaikan. Kamu bisa lihat detail lengkap di menu Services.' 
    },
    { 
      q: 'Apakah perlu reservasi?', 
      a: 'Kami sangat menyarankan reservasi terlebih dahulu agar terapis dan ruangan dapat kami siapkan dengan maksimal.' 
    },
    { 
      q: 'Apakah terapis bersertifikat?', 
      a: 'Ya, seluruh terapis kami berpengalaman dan telah melalui pelatihan profesional sesuai standar spa.' 
    },
    { 
      q: 'Jam operasional Lovrich Spa?', 
      a: 'Lovrich Spa buka setiap hari pukul 10.00 – 22.00 WIB.' 
    },
  ];

  // Auto scroll
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
    const phone = "628123456789"; // GANTI
    const text = "Halo Lovrich Spa, saya ingin reservasi treatment.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-[99999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="
              mb-6 w-[350px] md:w-[400px] h-[550px]
              bg-white
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)]
              rounded-[2.5rem]
              border border-[#E6D8B8]
              overflow-hidden flex flex-col
            "
          >
            {/* Header */}
            <div className="bg-[#1C1C1C] p-6 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C6A15B] rounded-2xl flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-black italic uppercase tracking-tighter leading-none text-lg">
                    Spa Assistant
                  </h3>
                  <span className="text-[10px] text-[#E6D8B8] font-bold uppercase tracking-widest">
                    Online Support
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>
  
            {/* Chat Body */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F7F3EE]"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${
                    msg.role === 'bot' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm font-medium shadow-sm border
                    ${
                      msg.role === 'bot'
                        ? 'bg-white text-[#6B4F3F] rounded-bl-none border-[#E6D8B8]'
                        : 'bg-[#1C1C1C] text-white rounded-br-none border-[#1C1C1C]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
  
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-[#E6D8B8] shadow-sm">
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
              <div className="flex flex-wrap gap-2">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="
                      text-[11px] font-black uppercase tracking-tighter
                      px-4 py-2
                      bg-[#F7F3EE]
                      hover:bg-[#E6D8B8]
                      text-[#6B4F3F]
                      hover:text-[#1C1C1C]
                      rounded-full
                      border border-[#E6D8B8]
                      transition-all
                    "
                  >
                    {opt.q}
                  </button>
                ))}
              </div>
  
              <button
                onClick={handleWhatsApp}
                className="
                  w-full bg-[#C6A15B]
                  hover:bg-[#B08E4E]
                  text-white py-3 rounded-2xl
                  font-black uppercase tracking-widest text-[10px]
                  flex items-center justify-center gap-2
                  shadow-lg shadow-[#C6A15B]/30
                  transition-all active:scale-95
                "
              >
                <Phone size={14} /> Reservasi via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  
      {/* Launcher */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-20 h-20
          bg-[#1C1C1C]
          hover:bg-[#C6A15B]
          text-white
          rounded-[2.5rem]
          flex items-center justify-center
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          transition-all relative
          border-4 border-white
        "
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#C6A15B] rounded-full border-4 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );  
};

export default Chatbot;

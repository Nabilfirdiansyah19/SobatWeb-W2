import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, ChevronRight, Phone, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [answer, setAnswer] = useState(null);

  const faqs = [
    { q: "Apa itu Mave Korean Mist?", a: "Teknik sulam alis terbaru yang memberikan hasil gradasi lembut seperti memakai eyebrow powder, sangat natural!" },
    { q: "Berapa lama proses pengerjaan?", a: "Rata-rata pengerjaan memakan waktu 1.5 - 2 jam, sudah termasuk konsultasi bentuk dan anestesi." },
    { q: "Apakah ada garansi retouch?", a: "Ya! Setiap treatment sudah termasuk 1x free retouch dalam jangka waktu 2-3 bulan." }
  ];

  const handleFaqClick = (a) => {
    setAnswer(null);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setAnswer(a);
    }, 1500);
  };

  const handleWhatsApp = (admin) => {
    const num = admin === 'Jaksel' ? '628123000222' : '628123000111';
    window.open(`https://wa.me/${num}`, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-80 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#4A0E0E]/5"
          >
            {/* Header - Fixed Flex Justify Between */}
            <div className="bg-[#4A0E0E] p-6 text-white flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Bot size={20} className="text-[#A67B5B]" />
                <span className="font-black text-[10px] uppercase tracking-widest">Mave-Bot</span>
              </div>
              <button 
                onClick={() => {setIsOpen(false); setAnswer(null);}}
                className="hover:rotate-90 transition-transform p-1"
              >
                <X size={20}/>
              </button>
            </div>

            <div className="p-6 bg-[#FAF9F6] min-h-[300px] flex flex-col">
              {!answer && !isTyping && (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-[#4A0E0E]/40 uppercase mb-4 tracking-widest text-center">Pilih Pertanyaan:</p>
                  {faqs.map((f, i) => (
                    <button key={i} onClick={() => handleFaqClick(f.a)} className="w-full text-left p-4 bg-white rounded-2xl border border-[#4A0E0E]/5 text-[11px] font-bold text-[#4A0E0E] hover:bg-[#A67B5B] hover:text-white transition-all flex justify-between items-center group">
                      {f.q} <ChevronRight size={14} />
                    </button>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex flex-col items-center justify-center mt-10">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="flex gap-2">
                    <div className="w-2 h-2 bg-[#A67B5B] rounded-full" />
                    <div className="w-2 h-2 bg-[#A67B5B] rounded-full" />
                    <div className="w-2 h-2 bg-[#A67B5B] rounded-full" />
                  </motion.div>
                </div>
              )}

              {answer && !isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <div className="bg-white p-5 rounded-3xl border border-[#A67B5B]/20 text-xs font-medium leading-relaxed text-[#4A0E0E]">
                    {answer}
                  </div>
                  <button onClick={() => setAnswer(null)} className="text-[9px] font-black text-[#A67B5B] uppercase underline tracking-widest">Tanya yang lain</button>
                </motion.div>
              )}

              <div className="mt-auto pt-6 border-t border-[#4A0E0E]/5 grid grid-cols-2 gap-2">
                 <button onClick={() => handleWhatsApp('Jaksel')} className="py-3 bg-[#4A0E0E] text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-[#A67B5B] transition-all">
                  <Phone size={10}/> Jaksel
                 </button>
                 <button onClick={() => handleWhatsApp('Serpong')} className="py-3 bg-[#4A0E0E] text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-[#A67B5B] transition-all">
                  <Phone size={10}/> Serpong
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-[#4A0E0E] text-white rounded-[2.5rem] flex flex-col items-center justify-center shadow-2xl border-4 border-white relative group"
      >
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#A67B5B] rounded-full flex items-center justify-center animate-pulse">
           <Sparkles size={12} />
        </div>
        <Bot size={32} />
      </motion.button>
    </div>
  );
};

export default Chatbot;
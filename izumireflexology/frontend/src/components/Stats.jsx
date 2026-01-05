import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2;
      let timer = setInterval(() => {
        start += end / (duration * 60);
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const data = [
    { label: "Happy Souls", value: "5000", suffix: "+" },
    { label: "Luxury Suites", value: "12", suffix: "" },
    { label: "Expert Therapist", value: "25", suffix: "+" },
  ];

  return (
    <section className="py-16 bg-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F5EBE0]/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-[#DDB892]/20 flex flex-col items-center text-center"
            >
              <h4 className="text-4xl md:text-5xl font-black text-[#432818] italic tracking-tighter mb-2">
                <Counter value={item.value} />{item.suffix}
              </h4>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B5E3C]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
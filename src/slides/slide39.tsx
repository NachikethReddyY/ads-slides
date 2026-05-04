import { motion } from 'framer-motion';

const heads = [
  { name: 'Kendrick', initial: 'K', color: '#007AFF' },
  { name: 'Janston', initial: 'J', color: '#34C759' },
];

export default function Slide39() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-12"
        >
          Heads of Operations
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-10">
          {heads.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5, type: 'spring' }}
              className="apple-card p-10 flex flex-col items-center gap-5 min-w-[180px]"
            >
              <div
                className="h-24 w-24 rounded-full flex items-center justify-center text-white text-3xl font-bold"
                style={{ background: h.color }}
              >
                {h.initial}
              </div>
              <span className="text-xl font-bold text-[#1D1D1F]">{h.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide23() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="15" width="60" height="70" rx="12" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2.5" />
            <path d="M30 35H70M30 45H60M30 55H50M30 65H55" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="70" cy="25" r="6" fill="#007AFF" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-[#1D1D1F]"
        >
          Secretary
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 h-1.5 rounded-full bg-[#007AFF]"
        />
      </motion.div>
    </div>
  );
}

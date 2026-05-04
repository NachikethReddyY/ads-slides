import { motion } from 'framer-motion';

export default function Slide32() {
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
          className="mb-6"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="15" y="10" width="50" height="60" rx="10" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
            <path d="M25 28H55M25 38H50M25 48H45M25 58H40" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          WHAT DOES SECRETARY DO?
        </motion.h1>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide17() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <rect x="10" y="20" width="60" height="40" rx="6" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
          <path d="M20 40H60M40 25V55M25 30H30M25 35H30M25 45H30M25 50H30" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="55" cy="30" r="4" fill="#007AFF" opacity="0.3" />
        </motion.svg>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          Timeline
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

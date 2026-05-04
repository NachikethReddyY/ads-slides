import { motion } from 'framer-motion';

export default function Slide54() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="3" />
            <path d="M45 60L55 70L75 50" stroke="#007AFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter text-[#1D1D1F]"
        >
          Ready?
        </motion.h1>
      </motion.div>
    </div>
  );
}

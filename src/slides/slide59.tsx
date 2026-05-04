import { motion } from 'framer-motion';

export default function Slide59() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="10" width="80" height="100" rx="20" fill="#007AFF" />
            <rect x="35" y="30" width="50" height="60" rx="10" fill="white" opacity="0.2" />
            <path d="M50 50L55 55L65 45" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="40" y="70" width="40" height="6" rx="3" fill="white" opacity="0.4" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-[#1D1D1F]"
        >
          Join ADS <span className="text-[#007AFF]">Today!</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}

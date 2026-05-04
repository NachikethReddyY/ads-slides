import { motion } from 'framer-motion';

export default function Slide20() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="3" />
            <path d="M40 60L55 75L80 45" stroke="#007AFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-[#1D1D1F]"
        >
          Join the <span className="text-[#007AFF]">club!</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}

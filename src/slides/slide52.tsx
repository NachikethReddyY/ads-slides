import { motion } from 'framer-motion';

export default function Slide52() {
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
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="20" width="80" height="80" rx="20" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="3" />
            <path d="M40 60L55 75L80 45" stroke="#007AFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="85" cy="35" r="10" fill="#34C759" />
            <path d="M80 35L83 38L90 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-[#1D1D1F]"
        >
          Join <span className="text-[#007AFF]">Operations</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide45() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="20" width="80" height="80" rx="20" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="3" />
            <path d="M50 40L70 60L50 80" stroke="#007AFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="75" cy="45" r="8" fill="#FF2D55" opacity="0.2" />
            <circle cx="45" cy="75" r="8" fill="#34C759" opacity="0.2" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(3rem,9vw,7rem)] font-black tracking-tighter text-[#1D1D1F]"
        >
          Let&apos;s <span className="text-[#007AFF]">play</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}

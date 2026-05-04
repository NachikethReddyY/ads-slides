import { motion } from 'framer-motion';

export default function Slide09() {
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
            <rect x="25" y="15" width="70" height="90" rx="16" fill="#007AFF" />
            <rect x="35" y="30" width="50" height="60" rx="8" fill="white" opacity="0.2" />
            <path d="M50 50L58 58L70 42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="45" y="75" width="30" height="4" rx="2" fill="white" opacity="0.4" />
            <rect x="50" y="85" width="20" height="4" rx="2" fill="white" opacity="0.4" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          so they started <span className="text-[#007AFF]">ADS.</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}

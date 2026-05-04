import { motion } from 'framer-motion';

export default function Slide07() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="20" width="80" height="80" rx="20" fill="#007AFF" opacity="0.1" />
            <rect x="20" y="20" width="80" height="80" rx="20" stroke="#007AFF" strokeWidth="3" />
            <path d="M40 60L52 72L80 44" stroke="#007AFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45 35H75M45 45H65" stroke="#007AFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight text-[#1D1D1F] leading-tight"
        >
          and they discovered
          <br />
          how powerful <span className="text-[#007AFF]">Swift</span> actually is.
        </motion.h1>
      </motion.div>
    </div>
  );
}

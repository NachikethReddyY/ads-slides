import { motion } from 'framer-motion';

export default function Slide13() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="15" width="80" height="70" rx="14" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
            <rect x="25" y="30" width="50" height="8" rx="4" fill="#007AFF" opacity="0.3" />
            <rect x="25" y="45" width="35" height="8" rx="4" fill="#007AFF" opacity="0.3" />
            <rect x="25" y="60" width="45" height="8" rx="4" fill="#007AFF" opacity="0.3" />
            <circle cx="75" cy="70" r="10" fill="#007AFF" />
            <path d="M70 70L73 73L80 66" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          Swift <span className="text-[#007AFF]">Workshop</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 text-[clamp(1rem,2vw,1.5rem)] text-[#86868B] max-w-2xl"
        >
          Hands-on sessions to learn by building
        </motion.p>
      </motion.div>
    </div>
  );
}

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="32" fill="#007AFF" opacity="0.1" />
            <circle cx="40" cy="40" r="32" stroke="#007AFF" strokeWidth="2" />
            <path d="M30 40L37 47L50 33" stroke="#007AFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
                <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-[#007AFF]"
        >
          Nachiketh Reddy
        </motion.h1>
                        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-tight text-[#1D1D1F] mb-2"
        >
          Vice President of ADS
        </motion.h2>
      </motion.div>
    </div>
  );
}

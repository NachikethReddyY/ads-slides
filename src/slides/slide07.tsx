import { motion } from 'framer-motion';

export default function Slide07() {
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
          className="mb-10 flex items-center justify-center gap-8"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" fill="#007AFF" opacity="0.1" />
            <circle cx="40" cy="40" r="30" stroke="#007AFF" strokeWidth="2" />
            <circle cx="40" cy="32" r="10" fill="#007AFF" opacity="0.3" />
            <path d="M25 55C25 45 55 45 55 55" stroke="#007AFF" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
            <path d="M5 10H35M28 4L35 10L28 16" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" fill="#007AFF" opacity="0.1" />
            <circle cx="40" cy="40" r="30" stroke="#007AFF" strokeWidth="2" />
            <circle cx="40" cy="32" r="10" fill="#007AFF" opacity="0.3" />
            <path d="M25 55C25 45 55 45 55 55" stroke="#007AFF" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 text-[clamp(1rem,2vw,1.5rem)] text-[#86868B]"
        >
          Building a community of passionate developers
        </motion.p>
      </motion.div>
    </div>
  );
}

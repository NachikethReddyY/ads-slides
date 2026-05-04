import { motion } from 'framer-motion';

export default function Slide11() {
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
            <rect x="15" y="20" width="70" height="60" rx="12" fill="#007AFF" opacity="0.1" />
            <rect x="15" y="20" width="70" height="60" rx="12" stroke="#007AFF" strokeWidth="2" />
            <rect x="25" y="32" width="50" height="8" rx="4" fill="#007AFF" opacity="0.3" />
            <rect x="25" y="46" width="35" height="8" rx="4" fill="#007AFF" opacity="0.3" />
            <rect x="25" y="60" width="45" height="8" rx="4" fill="#007AFF" opacity="0.3" />
            <circle cx="75" cy="68" r="12" fill="#007AFF" />
            <path d="M70 68L73 71L80 64" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,5.5vw,4rem)] font-bold tracking-tight text-[#1D1D1F] leading-tight"
        >
          We teach <span className="text-[#007AFF]">Swift</span> to people
          <br />
          to develop their own apps.
        </motion.h1>
      </motion.div>
    </div>
  );
}

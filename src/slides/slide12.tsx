import { motion } from 'framer-motion';

export default function Slide12() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="20" width="70" height="60" rx="12" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
            <rect x="25" y="35" width="50" height="6" rx="3" fill="#007AFF" opacity="0.3" />
            <rect x="25" y="48" width="40" height="6" rx="3" fill="#007AFF" opacity="0.3" />
            <rect x="25" y="61" width="30" height="6" rx="3" fill="#007AFF" opacity="0.3" />
            <path d="M72 28L76 32L84 22" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          Swift Nano <span className="text-[#007AFF]">Bootcamp</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 text-[clamp(1rem,2vw,1.5rem)] text-[#86868B] max-w-2xl"
        >
          An intensive program to master Swift fundamentals and build real apps
        </motion.p>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide41() {
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
          className="apple-card px-8 py-3 mb-6"
        >
          <span className="text-sm font-bold tracking-widest text-[#007AFF] uppercase">
            GAME 01
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-black tracking-tighter text-[#1D1D1F] mb-4"
        >
          The Apple Ladder
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#86868B]"
        >
          A Tiered Rock &middot; Paper &middot; Scissors Tournament
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" fill="#FF3B30" opacity="0.15" stroke="#FF3B30" strokeWidth="2" />
            <circle cx="20" cy="20" r="6" fill="#FF3B30" />
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="8" y="8" width="24" height="24" rx="4" fill="#007AFF" opacity="0.15" stroke="#007AFF" strokeWidth="2" />
            <rect x="14" y="14" width="12" height="12" rx="2" fill="#007AFF" opacity="0.3" />
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 30L20 10L32 30H8Z" fill="#34C759" opacity="0.15" stroke="#34C759" strokeWidth="2" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

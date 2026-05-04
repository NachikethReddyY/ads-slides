import { motion } from 'framer-motion';

export default function Slide60() {
  return (
    <div className="slide-base" style={{ background: 'linear-gradient(135deg, #1D1D1F 0%, #434344 100%)' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="20" width="80" height="80" rx="20" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
            <circle cx="60" cy="50" r="16" fill="white" opacity="0.2" />
            <path d="M48 72C48 60 72 60 72 72" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="85" cy="35" r="8" fill="#007AFF" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter text-white"
        >
          Photo Time
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 h-1.5 rounded-full bg-white/50"
        />
      </motion.div>
    </div>
  );
}

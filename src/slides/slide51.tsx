import { motion } from 'framer-motion';

export default function Slide51() {
  return (
    <div className="slide-base" style={{ background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <circle cx="70" cy="70" r="60" stroke="white" strokeWidth="4" fill="none" opacity="0.3" />
            <path d="M45 70L60 85L95 55" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="70" cy="35" r="8" fill="#FFD60A" />
            <path d="M70 30V40M65 35H75" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter text-white"
        >
          We have a winner!
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 h-1.5 rounded-full bg-white/50"
        />
      </motion.div>
    </div>
  );
}

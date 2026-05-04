import { motion } from 'framer-motion';

export default function Slide31() {
  return (
    <div className="slide-base" style={{ background: 'linear-gradient(135deg, #FF9500 0%, #FF2D55 100%)' }}>
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
            <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="4" fill="none" opacity="0.3" />
            <path d="M60 30V60L85 75" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter text-white"
        >
          BREAK
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 text-[clamp(1.5rem,4vw,3rem)] font-semibold text-white/90"
        >
          10 Minutes
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 h-1.5 rounded-full bg-white/50"
        />
      </motion.div>
    </div>
  );
}

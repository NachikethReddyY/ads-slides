import { motion } from 'framer-motion';

export default function Slide03() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="mb-4"
        >
          <circle cx="50" cy="50" r="40" stroke="#007AFF" strokeWidth="3" fill="none" />
          <circle cx="50" cy="35" r="12" fill="#007AFF" />
          <path d="M30 70C30 55 70 55 70 70" stroke="#007AFF" strokeWidth="3" fill="none" strokeLinecap="round" />
        </motion.svg>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          Who are we?
        </motion.h1>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide26() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          Pass on to <span className="text-[#007AFF]">Secretary</span>
        </motion.h1>
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <circle cx="40" cy="40" r="32" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
          <path d="M28 40L38 50L52 30" stroke="#007AFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

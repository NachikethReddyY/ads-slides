import { motion } from 'framer-motion';

export default function Slide57() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-[#007AFF]"
        >
          Phebe
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-tight text-[#1D1D1F] mb-2"
        >
          Head of Publicity, ADS
        </motion.h2>
      </motion.div>
    </div>
  );
}
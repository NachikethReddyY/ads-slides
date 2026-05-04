import { motion } from 'framer-motion';

export default function Slide38() {
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
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          What we <span className="text-[#007AFF]">look for</span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 h-1.5 rounded-full bg-[#007AFF]"
        />
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide04() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="apple-card px-10 py-6 mb-10"
        >
          <span className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-medium text-[#86868B]">Established</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-4"
        >
          ADS started in
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          className="apple-card px-16 py-8 bg-[#007AFF]/10 border-[#007AFF]/20"
        >
          <span className="text-[clamp(3rem,10vw,8rem)] font-black text-[#007AFF] tracking-tighter">
            MARCH 2024
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

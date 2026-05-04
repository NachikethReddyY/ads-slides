import { motion } from 'framer-motion';

export default function Slide10() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="apple-card px-12 py-6 mb-8"
        >
          <span className="text-[clamp(1rem,2vw,1.5rem)] font-semibold tracking-widest text-[#86868B] uppercase">
            Flagship Event
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter text-[#1D1D1F]"
        >
          NSC <span className="text-[#007AFF]">2025</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-4 text-[clamp(1rem,2vw,1.5rem)] text-[#86868B]"
        >
          National Software Competition
        </motion.p>
      </motion.div>
    </div>
  );
}

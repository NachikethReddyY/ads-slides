import { motion } from 'framer-motion';

export default function Slide02() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 h-32 w-32 rounded-full bg-[#007AFF] flex items-center justify-center text-white text-4xl font-bold"
        >
          NR
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-[#86868B] mb-4"
        >
          Speaker Introduction
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          Nachiketh Reddy
        </motion.h1>
      </motion.div>
    </div>
  );
}

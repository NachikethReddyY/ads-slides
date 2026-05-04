import { motion } from 'framer-motion';

export default function Slide07() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <img src="/assets/swift.svg" alt="Swift" className="h-32 w-32" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight text-[#1D1D1F] leading-tight"
        >
          and they discovered
          <br />
          how powerful <span className="text-[#FF5134]">Swift</span> actually is.
        </motion.h1>
      </motion.div>
    </div>
  );
}

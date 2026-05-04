import { motion } from 'framer-motion';

export default function Slide09() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <img src="/src/assets/logo.png" alt="Logo" className="h-23 w-32" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight text-[#1D1D1F]"
        >
          so they started <span className="text-[#007AFF]">ADS.</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}

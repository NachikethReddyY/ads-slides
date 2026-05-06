import { motion } from 'framer-motion';

export default function Slide60() {
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
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-tight text-[#007AFF]"
        >
          Thank You!
        </motion.h1>
      </motion.div>
    </div>
  );
}

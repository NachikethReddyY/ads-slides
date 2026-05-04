import { motion } from 'framer-motion';

export default function Slide06() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex gap-8"
        >
          <div className="apple-card p-8 flex items-center justify-center">
            <img src="/src/assets/sp.png" alt="SP" className="h-20 w-40 object-contain" />
          </div>
          <div className="apple-card p-8 flex items-center justify-center">
            <img src="/src/assets/sutd.png" alt="SUTD" className="h-20 w-40 object-contain" />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,5.5vw,4rem)] font-bold tracking-tight text-[#1D1D1F] leading-tight"
        >
          They went to a <span className="text-[#007AFF]">hackathon</span>
          <br />
          organized by SP and SUTD
        </motion.h1>
      </motion.div>
    </div>
  );
}

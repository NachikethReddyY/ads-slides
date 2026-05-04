import { motion } from 'framer-motion';

export default function Slide05() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#86868B] mb-6"
        >
          It all began with one idea...
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight text-[#1D1D1F] leading-tight"
        >
          Started by <span className="text-[#007AFF]">Kaushik</span>
          <br />
          and his friends
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex gap-4"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 w-16 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="12" r="6" fill="#007AFF" opacity="0.3" />
                <path d="M8 28C8 22 24 22 24 28" stroke="#007AFF" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

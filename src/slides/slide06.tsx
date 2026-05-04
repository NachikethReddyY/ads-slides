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
          className="mb-8 flex gap-6"
        >
          <div className="apple-card p-6 flex flex-col items-center gap-3">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="12" width="40" height="28" rx="4" fill="#007AFF" opacity="0.15" />
              <rect x="4" y="12" width="40" height="28" rx="4" stroke="#007AFF" strokeWidth="2" />
              <path d="M16 24H32M24 18V30" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-[#1D1D1F]">SP</span>
          </div>
          <div className="apple-card p-6 flex flex-col items-center gap-3">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="12" width="40" height="28" rx="4" fill="#007AFF" opacity="0.15" />
              <rect x="4" y="12" width="40" height="28" rx="4" stroke="#007AFF" strokeWidth="2" />
              <circle cx="24" cy="26" r="6" stroke="#007AFF" strokeWidth="2" />
              <path d="M28 22L32 18" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-[#1D1D1F]">SUTD</span>
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

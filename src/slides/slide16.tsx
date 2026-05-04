import { motion } from 'framer-motion';

export default function Slide16() {
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
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#86868B] mb-8"
        >
          NSC Competition Video
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="apple-card p-3 w-full max-w-3xl"
        >
          <div className="relative aspect-video w-full rounded-xl bg-[#1D1D1F] flex items-center justify-center overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="vidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007AFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5856D6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <rect width="800" height="450" fill="url(#vidGrad)" />
              <circle cx="400" cy="225" r="60" fill="white" opacity="0.15" />
              <polygon points="380,195 380,255 430,225" fill="white" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="h-20 w-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <polygon points="12,8 12,24 24,16" fill="#007AFF" />
                </svg>
              </motion.button>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#86868B]">Click to play competition highlights</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide01() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <img src="/assets/logo.png" alt="Logo" width="120" height="120" />
        </motion.div>
                <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-tight text-[#1D1D1F] mb-2"
        >
          Apple Developer Society
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-[#1D1D1F] mb-2"
        >
          Annual General Meeting 2026
        </motion.h1>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center gap-6 text-[clamp(1rem,2vw,1.25rem)] text-[#86868B]"
        > 
          <span className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86868B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2V6M8 2V6M3 10H21" />
            </svg>
            6 May 2026
          </span> 
          <span className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86868B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Apple Developer Center
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

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
        {/* ADS Logo SVG */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="100" height="100" rx="24" fill="#007AFF" />
            <path d="M60 30C48 30 40 38 40 50C40 62 50 72 60 82C70 72 80 62 80 50C80 38 72 30 60 30Z" fill="white" />
            <path d="M60 35C55 35 50 40 50 47C50 54 56 62 60 68C64 62 70 54 70 47C70 40 65 35 60 35Z" fill="#007AFF" />
            <text x="60" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="system-ui">ADS</text>
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-[#1D1D1F] mb-4"
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

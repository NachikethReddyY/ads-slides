import { motion } from 'framer-motion';

export default function Slide08() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="15" width="60" height="50" rx="8" fill="#F5F5F7" stroke="#86868B" strokeWidth="2" />
            <rect x="35" y="75" width="30" height="8" rx="4" fill="#86868B" />
            <path d="M45 40L50 45L60 35" stroke="#34C759" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="75" cy="25" r="10" fill="#FF3B30" />
            <path d="M70 25H80M75 20V30" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,5.5vw,4rem)] font-bold tracking-tight text-[#1D1D1F] leading-tight"
        >
          They wanted to bring it to the school
          <br />
          <span className="text-[#86868B]">but there was no one to teach them</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}

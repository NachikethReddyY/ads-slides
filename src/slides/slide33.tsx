import { motion } from 'framer-motion';

export default function Slide33() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[clamp(2rem,5.5vw,4rem)] font-bold tracking-tight text-[#1D1D1F] mb-10"
        >
          Meet your Heads of <span className="text-[#007AFF]">Operations</span>
        </motion.h1>
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <circle cx="35" cy="35" r="20" fill="#007AFF" opacity="0.2" />
          <circle cx="35" cy="35" r="20" stroke="#007AFF" strokeWidth="2" />
          <path d="M28 38L33 43L42 30" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="65" cy="65" r="20" fill="#34C759" opacity="0.2" />
          <circle cx="65" cy="65" r="20" stroke="#34C759" strokeWidth="2" />
          <path d="M58 68L63 73L72 60" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

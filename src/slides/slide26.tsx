import { motion } from 'framer-motion';

const points = [
  'Influence the events we host',
  'Host your own events',
  'And more...',
];

export default function Slide26() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-10"
        >
          What you can do as a member
        </motion.h1>
        <div className="flex flex-col gap-5 w-full max-w-2xl">
          {points.map((pt, i) => (
            <motion.div
              key={pt}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="apple-card p-6 flex items-center gap-5"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" fill="#007AFF" opacity="0.1" />
                <circle cx="16" cy="16" r="12" stroke="#007AFF" strokeWidth="2" />
                <path d="M12 16L14.5 18.5L20 13" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-semibold text-[#1D1D1F]">
                {pt}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

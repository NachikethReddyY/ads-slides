import { motion } from 'framer-motion';

const values = [
  'RESPECTFUL',
  'PROFESSIONAL',
  'COMMUNICATION',
  'RESPONSIBLE',
  'RESPONSIVE',
];

export default function Slide35() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-10"
        >
          Our Core Values
        </motion.h1>
        <div className="flex flex-col gap-4 w-full">
          {values.map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="apple-card px-8 py-5 flex items-center gap-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#007AFF]">
                <span className="text-sm font-bold text-white">{i + 1}</span>
              </div>
              <span className="text-[clamp(1.2rem,3vw,2rem)] font-bold tracking-wide text-[#1D1D1F]">
                {v}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

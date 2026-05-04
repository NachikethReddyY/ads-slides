import { motion } from 'framer-motion';

const steps = [
  { num: '1', text: 'Stand up, Spread out' },
  { num: '2', text: 'Find someone you\u2019ve never met' },
  { num: '3', text: 'Introduce yourselves' },
  { num: '4', text: 'Share one thing you\u2019re excited to learn this year' },
];

export default function Slide15() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-10"
        >
          Let&apos;s <span className="text-[#007AFF]">Connect</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="apple-card p-6 flex items-center gap-5 text-left"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#007AFF] text-white text-xl font-bold">
                {step.num}
              </div>
              <span className="text-[clamp(1rem,2vw,1.25rem)] font-medium text-[#1D1D1F]">
                {step.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

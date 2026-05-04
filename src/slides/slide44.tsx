import { motion } from 'framer-motion';

const rules = [
  {
    num: '1',
    title: 'Everyone starts at AirPods.',
    body: 'The journey begins at tier one. No exceptions, no head starts.',
  },
  {
    num: '2',
    title: 'Flash your signal first.',
    body: 'Find someone on your tier. Verify signals. Then play one round.',
  },
  {
    num: '3',
    title: 'Win → climb. Lose → drop.',
    body: 'Winner moves up a tier. Loser moves down — but never below AirPods.',
  },
];

export default function Slide44() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#86868B] mb-8"
        >
          The basics. Memorise these.
        </motion.p>
        <div className="flex flex-col gap-5 w-full">
          {rules.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="apple-card p-6 flex items-start gap-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#007AFF] text-white text-xl font-bold">
                {r.num}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-[#1D1D1F]">{r.title}</h3>
                <p className="text-sm text-[#86868B] leading-relaxed">{r.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

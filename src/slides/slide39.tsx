import { motion } from 'framer-motion';

const traits = [
  {
    title: 'Energy',
    body: "You bring it. Events feed off it.",
    color: '#FF9500',
  },
  {
    title: 'Team-first',
    body: 'We win together. Always.',
    color: '#007AFF',
  },
  {
    title: 'Reliability',
    body: "When you say you'll do it, it gets done.",
    color: '#34C759',
  },
  {
    title: 'Initiative',
    body: "See a gap? Step in. We'll back you.",
    color: '#AF52DE',
  },
];

export default function Slide39() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-8"
        >
          What We Look For
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="apple-card p-6 flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full" style={{ background: t.color }} />
                <h3 className="text-lg font-bold text-[#1D1D1F]">{t.title}</h3>
              </div>
              <p className="text-sm text-[#86868B] leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Help run real events',
    body: 'Be on the team behind every workshop and bootcamp.',
    color: '#007AFF',
  },
  {
    title: 'Lead, plan, execute',
    body: 'Own decisions. Ship outcomes. Build the muscle.',
    color: '#5856D6',
  },
  {
    title: 'Find your people',
    body: 'A small, tight crew that builds — and hangs — together.',
    color: '#34C759',
  },
];

export default function Slide42() {
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
          Operations — What We Do
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="apple-card p-7 flex flex-col gap-3"
            >
              <div className="h-2 w-12 rounded-full" style={{ background: c.color }} />
              <h3 className="text-lg font-bold text-[#1D1D1F]">{c.title}</h3>
              <p className="text-sm text-[#86868B] leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

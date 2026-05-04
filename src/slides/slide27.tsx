import { motion } from 'framer-motion';

const committees = [
  {
    name: 'Publicity',
    color: '#FF3B30',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="8" width="30" height="24" rx="4" fill="#FF3B30" opacity="0.15" stroke="#FF3B30" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" fill="#FF3B30" opacity="0.3" />
        <path d="M20 15V10M20 25V30M15 20H10M25 20H30" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Secretary',
    color: '#007AFF',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="4" width="28" height="32" rx="4" fill="#007AFF" opacity="0.15" stroke="#007AFF" strokeWidth="2" />
        <path d="M12 12H28M12 18H24M12 24H20" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Operations',
    color: '#34C759',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="32" height="20" rx="4" fill="#34C759" opacity="0.15" stroke="#34C759" strokeWidth="2" />
        <circle cx="14" cy="20" r="3" fill="#34C759" />
        <circle cx="26" cy="20" r="3" fill="#34C759" opacity="0.3" />
        <path d="M17 20H23" stroke="#34C759" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Slide27() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#86868B] mb-8"
        >
          To learn about our subcommittees
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {committees.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5, type: 'spring' }}
              className="apple-card p-8 flex flex-col items-center gap-4 min-w-[160px]"
            >
              {c.icon}
              <span className="text-lg font-bold text-[#1D1D1F]">{c.name}</span>
            </motion.div>
          ))}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-[#1D1D1F]"
        >
          Now let&apos;s hear from them!
        </motion.h2>
      </motion.div>
    </div>
  );
}

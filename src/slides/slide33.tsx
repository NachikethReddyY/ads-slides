import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Admin & Documentation',
    points: [
      'Take meeting minutes',
      'CCA point allocation',
      'Helps President and Vice President with admin work',
      'Ensure clear documentation after every event',
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="4" width="28" height="32" rx="6" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <path d="M12 14H28M12 20H24M12 26H20" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Communication & Budget',
    points: [
      'Communicate with Teacher in Charge',
      'Sending out emails',
      'Review and approve event proposals',
      'Manage budgets with accuracy and care',
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="32" height="22" rx="6" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <path d="M8 14L20 22L32 14" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Slide33() {
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
          Secretary Responsibilities
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              className="apple-card p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                {c.icon}
                <h3 className="text-lg font-bold text-[#1D1D1F]">{c.title}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {c.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-[#86868B]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#007AFF]" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

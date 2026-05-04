import { motion } from 'framer-motion';

const techs = [
  {
    name: 'SwiftUI',
    desc: 'Modern UI framework',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="36" height="32" rx="6" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <rect x="12" y="16" width="24" height="4" rx="2" fill="#007AFF" opacity="0.4" />
        <rect x="12" y="24" width="16" height="4" rx="2" fill="#007AFF" opacity="0.4" />
        <rect x="12" y="32" width="20" height="4" rx="2" fill="#007AFF" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'ARKit',
    desc: 'Augmented Reality',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="28" rx="6" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <path d="M18 28L22 24L26 28L32 20" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="16" r="4" fill="#007AFF" />
      </svg>
    ),
  },
  {
    name: 'Core ML',
    desc: 'Machine Learning',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="8" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <circle cx="18" cy="20" r="3" fill="#007AFF" />
        <circle cx="30" cy="20" r="3" fill="#007AFF" />
        <circle cx="24" cy="30" r="3" fill="#007AFF" />
        <path d="M18 20L24 30L30 20" stroke="#007AFF" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Slide13() {
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
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#86868B] mb-4"
        >
          We use 3 main technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        >
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              className="apple-card p-8 flex flex-col items-center gap-4 min-w-[220px]"
            >
              {t.svg}
              <h3 className="text-xl font-bold text-[#1D1D1F]">{t.name}</h3>
              <p className="text-sm text-[#86868B]">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

const events = [
  { month: 'May', title: 'AGM 2026', highlight: true, desc: 'Annual General Meeting' },
  { month: 'May', title: 'Apple Accessibility Event', highlight: false, desc: '16 May' },
  { month: 'Jun', title: 'Swift Nano Bootcamp', highlight: false, desc: 'Internal SOC + Swift workshop + Subcom Recruitment' },
  { month: 'Jul', title: 'Beyond WWDC', highlight: false, desc: 'Post-WWDC event' },
  { month: 'Jul', title: 'ARKit Workshop', highlight: false, desc: '' },
  { month: 'Sep', title: 'National Software Competition', highlight: false, desc: '' },
  { month: 'Oct', title: 'Core ML Workshop', highlight: false, desc: '' },
  { month: 'TBC', title: 'More events in planning...', highlight: false, desc: '' },
];

export default function Slide23() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-6xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-[#1D1D1F] mb-8"
        >
          2026 Event <span className="text-[#007AFF]">Timeline</span>
        </motion.h1>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-4">
            {events.map((evt, i) => (
              <motion.div
                key={evt.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className={`apple-card p-5 flex flex-col gap-2 min-w-[180px] max-w-[220px] ${
                  evt.highlight ? 'bg-[#007AFF]/10 border-[#007AFF]/30' : ''
                }`}
              >
                <span className="text-xs font-bold tracking-wider text-[#007AFF] uppercase">
                  {evt.month}
                </span>
                <h3 className="text-sm font-bold text-[#1D1D1F] leading-snug">
                  {evt.title}
                </h3>
                {evt.desc && (
                  <p className="text-xs text-[#86868B] leading-relaxed">{evt.desc}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

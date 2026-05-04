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
          className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-[#1D1D1F] mb-1"
        >
          2026 Event <span className="text-[#007AFF]">Timeline</span>
        </motion.h1>

          <div className="relative w-full overflow-x-auto">
            <div className="absolute top-10 left-8 right-52 h-0.5 bg-[#007AFF]/30" />

            <div className="flex items-start justify-start gap-20 min-w-max pl-8 pr-52 pt-2 pb-8" style={{ paddingLeft: '2rem' }}>
              {events.map((evt, i) => (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center w-64"
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-lg font-bold mb-4 z-10 ${
                    evt.highlight ? 'bg-[#007AFF] text-white' : 'bg-white border-2 border-[#D1D1D6] text-[#707070]'
                  }`}>
                    {evt.month}
                  </div>
                  <div className={`apple-card p-8 text-center shadow-xl ${
                    evt.highlight ? 'bg-[#E9EBF1]' : 'bg-white'
                  }`} style={{ minWidth: 220 }}>
                    <h3 className="text-lg font-bold text-[#1D1D1F] mb-2">{evt.title}</h3>
                    {evt.desc && (
                      <p className="text-sm text-[#6B6B70] leading-relaxed">{evt.desc}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </motion.div>
    </div>
  );
}

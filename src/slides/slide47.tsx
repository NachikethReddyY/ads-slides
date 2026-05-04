import { motion } from 'framer-motion';

export default function Slide47() {
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
          className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-[#1D1D1F] mb-8"
        >
          The <span className="text-[#007AFF]">Ladder</span>
        </motion.h1>

        <div className="flex flex-col items-center gap-2 w-full max-w-md">
          {[
            { num: '07', name: 'Mac Pro', color: '#1D1D1F', action: 'Arms crossed' },
            { num: '06', name: 'iMac', color: '#5856D6', action: 'Large screen frame' },
            { num: '05', name: 'MacBook', color: '#007AFF', action: 'Mime typing' },
            { num: '04', name: 'iPad', color: '#5AC8FA', action: 'Wide rectangle, two hands' },
            { num: '03', name: 'iPhone', color: '#34C759', action: 'Hand to ear' },
            { num: '02', name: 'Apple Watch', color: '#FF9500', action: 'Tap your wrist' },
            { num: '01', name: 'AirPods', color: '#FF3B30', action: 'Two fingers to ears' },
          ].map((tier, i) => (
            <motion.div
              key={tier.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              className="apple-card px-6 py-3 flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-lg font-black w-8 text-center"
                  style={{ color: tier.color }}
                >
                  {tier.num}
                </span>
                <span className="text-base font-bold text-[#1D1D1F]">{tier.name}</span>
              </div>
              <span className="text-xs text-[#86868B]">{tier.action}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide46() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="apple-card px-8 py-3 mb-6 bg-[#FF9500]/10 border-[#FF9500]/20"
        >
          <span className="text-sm font-bold tracking-widest text-[#FF9500] uppercase">
            THE TWIST
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-black tracking-tighter text-[#1D1D1F] mb-6"
        >
          The Mac Pro Rule
        </motion.h1>

        <div className="flex flex-col gap-4 w-full max-w-2xl">
          {[
            { title: 'Mac Pros don\u2019t drop.', body: 'Once you reach the Mac Pro tier, you only challenge other Mac Pros. No going back.' },
            { title: 'Losers join the line.', body: 'Lose to another Mac Pro? You stand behind them. Their line keeps growing — and your whole line falls with you if they lose.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
              className="apple-card p-6 text-left"
            >
              <h3 className="text-lg font-bold text-[#1D1D1F] mb-2">{item.title}</h3>
              <p className="text-sm text-[#86868B] leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

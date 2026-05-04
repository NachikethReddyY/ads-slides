import { motion } from 'framer-motion';

export default function Slide53() {
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
          className="apple-card px-8 py-3 mb-6 bg-[#AF52DE]/10 border-[#AF52DE]/20"
        >
          <span className="text-sm font-bold tracking-widest text-[#AF52DE] uppercase">
            THE FINAL
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-black tracking-tighter text-[#1D1D1F] mb-6"
        >
          Two leaders. Best of three.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="apple-card p-8 max-w-2xl text-center"
        >
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#86868B] leading-relaxed">
            When only two Mac Pros remain — each with their long line behind them —
            they face off in a <span className="text-[#1D1D1F] font-semibold">best-of-three</span>.
            One champion takes it all.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 flex items-center gap-6"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 w-14 rounded-full bg-[#007AFF] flex items-center justify-center text-white text-xl font-bold">A</div>
            <div className="h-10 w-10 rounded-full bg-[#007AFF] opacity-40 flex items-center justify-center text-white text-sm font-bold" />
            <div className="h-10 w-10 rounded-full bg-[#007AFF] opacity-30 flex items-center justify-center text-white text-sm font-bold" />
          </div>
          <span className="text-2xl font-bold text-[#86868B]">VS</span>
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 w-14 rounded-full bg-[#FF3B30] flex items-center justify-center text-white text-xl font-bold">B</div>
            <div className="h-10 w-10 rounded-full bg-[#FF3B30] opacity-40 flex items-center justify-center text-white text-sm font-bold" />
            <div className="h-10 w-10 rounded-full bg-[#FF3B30] opacity-30 flex items-center justify-center text-white text-sm font-bold" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Slide52() {
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
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-8"
        >
          Picture it
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl items-center justify-center">
          {/* Round 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="apple-card p-6 flex flex-col items-center gap-4"
          >
            <span className="text-xs font-bold tracking-wider text-[#86868B] uppercase">ROUND 1</span>
            <span className="text-sm font-semibold text-[#1D1D1F]">A defeats B</span>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-full bg-[#007AFF] flex items-center justify-center text-white font-bold">A</div>
                <span className="text-xs text-[#007AFF] font-bold">Crown</span>
              </div>
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                <path d="M4 8H28M24 4L28 8L24 12" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="h-12 w-12 rounded-full bg-[#D1D1D6] flex items-center justify-center text-white font-bold opacity-50">B</div>
            </div>
          </motion.div>

          {/* Round 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="apple-card p-6 flex flex-col items-center gap-4"
          >
            <span className="text-xs font-bold tracking-wider text-[#86868B] uppercase">ROUND 2</span>
            <span className="text-sm font-semibold text-[#1D1D1F]">C defeats A</span>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-full bg-[#FF3B30] flex items-center justify-center text-white font-bold">C</div>
                <span className="text-xs text-[#FF3B30] font-bold">Crown</span>
              </div>
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                <path d="M4 8H28M24 4L28 8L24 12" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-full bg-[#007AFF] flex items-center justify-center text-white font-bold opacity-50">A</div>
                <div className="h-10 w-10 rounded-full bg-[#D1D1D6] flex items-center justify-center text-white font-bold opacity-50 -mt-2">B</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-xs text-[#86868B]"
        >
          Crown = active leader &middot; Faded = eliminated, in line
        </motion.p>
      </motion.div>
    </div>
  );
}

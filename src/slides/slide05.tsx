import { motion } from 'framer-motion';

export default function Slide05() {
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
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#86868B] mb-6"
        >
          It all began with one idea...
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(1.5rem,4.5vw,3rem)] font-bold tracking-tight text-[#1D1D1F] leading-tight"
        >
          Started by <span className="text-[#007AFF]">Kaushik, Harry and Min Thet</span>
          <br />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex gap-6"
        >
          <img src="/assets/people/kaushik.jpeg" alt="Kaushik" className="h-40 w-40 rounded-full object-cover" />
          <img src="/assets/people/harry.jpeg" alt="Harry" className="h-40 w-40 rounded-full object-cover" />
          <img src="/assets/people/min thet.jpeg" alt="Min Thet" className="h-40 w-40 rounded-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
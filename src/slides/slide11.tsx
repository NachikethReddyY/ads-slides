import { motion } from 'framer-motion';

export default function Slide11() {
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
          NSC Competition Video
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="apple-card p-3 w-full max-w-3xl"
        >
          <div className="relative aspect-video w-full rounded-xl bg-[#1D1D1F] flex items-center justify-center overflow-hidden">
            <video
              className="w-full h-full rounded-xl"
              controls
              src="/assets/WhatsApp%20Video%202026-05-05%20at%2014.11.29.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-3 text-sm text-[#86868B]">Click play to watch the competition highlights</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

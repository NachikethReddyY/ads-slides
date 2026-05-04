import { motion } from 'framer-motion';

const techs = [
  {
    name: 'SwiftUI',
    desc: 'Modern UI framework',
    img: '/assets/swiftui.svg',
  },
  {
    name: 'ARKit',
    desc: 'Augmented Reality',
    img: '/assets/arkit.png',
  },
  {
    name: 'Core ML',
    desc: 'Machine Learning',
    img: '/assets/core-ml-256x256_2x.png',
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
              <img src={t.img} alt={t.name} className="h-12 w-12 object-contain" />
              <h3 className="text-xl font-bold text-[#1D1D1F]">{t.name}</h3>
              <p className="text-sm text-[#86868B]">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Creating Posters',
    body: 'We brainstorm engaging concepts, design visually appealing layouts, and craft concise yet impactful messaging to promote events or initiatives. We also ensure that the poster effectively communicates its purpose by carefully selecting designs that align with the theme and target audience.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="4" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <rect x="13" y="12" width="22" height="14" rx="2" fill="#007AFF" opacity="0.2" />
        <rect x="13" y="30" width="14" height="3" rx="1.5" fill="#007AFF" opacity="0.3" />
        <rect x="13" y="36" width="10" height="3" rx="1.5" fill="#007AFF" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Video Editing',
    body: 'We carry out basic video editing tasks such as trimming clips, adjusting audio levels, adding subtitles or transitions, and selecting the best highlights to ensure the final video is engaging and polished for our audience.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="12" width="36" height="24" rx="6" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <polygon points="21,18 21,30 30,24" fill="#007AFF" opacity="0.4" />
        <rect x="32" y="18" width="3" height="12" rx="1.5" fill="#007AFF" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Visuals',
    body: 'During events, we capture photos and videos from start to finish and store them in a Google Drive folder for future use.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="24" rx="6" fill="#007AFF" opacity="0.1" stroke="#007AFF" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" fill="#007AFF" opacity="0.2" />
        <circle cx="34" cy="17" r="2.5" fill="#007AFF" />
      </svg>
    ),
  },
];

export default function Slide25() {
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
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight text-[#1D1D1F] mb-8"
        >
          Publicity — What We Do
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="apple-card p-6 flex flex-col gap-4"
            >
              {c.icon}
              <h3 className="text-lg font-bold text-[#1D1D1F]">{c.title}</h3>
              <p className="text-sm text-[#86868B] leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

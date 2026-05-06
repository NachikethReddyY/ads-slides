import { motion } from 'framer-motion';

export default function Slide61() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full px-3 py-3 md:px-6 md:py-6 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-4xl space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#007AFF] text-center">Discover More from Apple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="flex flex-col items-center">
              <img
                src="/assets/swift-building-for-everyone-qr.png"
                alt="Developing with Swift QR Code"
                className="w-36 h-36 md:w-60 md:h-60 border-4 border-[#007AFF]/30 rounded-2xl shadow-2xl"
              />
              <p className="mt-3 text-center text-[#1D1D1F] font-semibold text-base md:text-lg">Developing with Swift: Building for Everyone</p>
              <p className="text-center text-[#86868B] text-sm mt-1">s.apple.com/dG0d9v7ft6</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/swift-stories-ar-qr.png"
                alt="Swift Stories AR QR Code"
                className="w-36 h-36 md:w-60 md:h-60 border-4 border-[#007AFF]/30 rounded-2xl shadow-2xl"
              />
              <p className="mt-3 text-center text-[#1D1D1F] font-semibold text-base md:text-lg">Swift Stories: Augmented Reality & Storytelling</p>
              <p className="text-center text-[#86868B] text-sm mt-1">s.apple.com/dY6y8b8jH1</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/accessibility-event.png"
                alt="Accessibility Event QR Code"
                className="w-36 h-36 md:w-60 md:h-60 border-4 border-[#007AFF]/30 rounded-2xl shadow-2xl"
              />
              <p className="mt-3 text-center text-[#1D1D1F] font-semibold text-base md:text-lg">Accessibility Event</p>
              <p className="text-center text-[#86868B] text-sm mt-1">May 16</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

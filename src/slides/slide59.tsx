import { motion } from 'framer-motion';

export default function Slide59() {
  return (
    <div className="slide-base gradient-mesh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full px-3 py-3 md:px-6 md:py-6 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#007AFF] text-center">Scan to Participate</h2>
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center">
              <img
                src="/assets/join-qr.png"
                alt="Join the Club QR Code"
                className="w-48 h-48 md:w-60 md:h-60 border-4 border-[#007AFF]/30 rounded-2xl shadow-2xl"
              />
              <p className="mt-4 text-center text-[#1D1D1F] font-semibold text-lg">Join the Club</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/QR.png"
                alt="Feedback Form QR Code"
                className="w-48 h-48 md:w-60 md:h-60 border-4 border-[#007AFF]/30 rounded-2xl shadow-2xl"
              />
              <p className="mt-4 text-center text-[#1D1D1F] font-semibold text-lg">Feedback Form</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/ads-instagram.jpeg"
                alt="Instagram QR Code"
                className="max-w-60 h-auto mx-auto rounded-2xl shadow-2xl"
              />
              <p className="mt-4 text-center text-[#1D1D1F] font-semibold text-lg">Follow us on Instagram</p>
              <p className="text-center text-[#86868B] text-sm mt-1">@SOC_ADS</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

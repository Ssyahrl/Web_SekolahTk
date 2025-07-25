import { motion } from "framer-motion";

export function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-amber-400 text-gray-800">
      <motion.div
        className="text-center p-8 rounded-3xl bg-white shadow-2xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Website kami sedang dalam tahap pengembangan.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="inline-block px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-semibold shadow-md">
            Stay Tuned!
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

import { useLoveStore } from '../../store/useLoveStore'
import { motion } from 'framer-motion'

export default function ProgressBar() {
  const { hearts } = useLoveStore()
  const displayHearts = Math.min(hearts, 5)
  const progress = (displayHearts / 5) * 100

  // Hide completely when 5/5 is reached
  if (hearts >= 5) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-2xl px-8 py-3 rounded-3xl flex items-center gap-4 shadow-2xl"
    >
      <span className="text-3xl">❤️</span>
      <div className="w-56 h-3 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <span className="font-medium text-xl tabular-nums">{displayHearts}/5</span>
    </motion.div>
  )
}
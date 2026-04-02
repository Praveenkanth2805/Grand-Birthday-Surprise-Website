import { useLoveStore } from '../store/useLoveStore'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProgressBar from '../components/common/ProgressBar'

export default function Secret() {
  const { secretUnlocked } = useLoveStore()
  const herName = import.meta.env.VITE_HER_NAME || 'My Love'

  if (!secretUnlocked) return <Navigate to="/" />

  return (
    <>
      <ProgressBar />
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center max-w-3xl px-6"
        >
          <h1 className="text-7xl md:text-8xl font-display mb-6 romantic-glow">
            You found it, {herName}! 🎉
          </h1>
          <p className="text-3xl leading-relaxed">
            This was all made with love by Praveenkanth just for you.<br />
            You are the most precious person in my universe.<br />
            Happy Birthday, my forever love 💖
          </p>
          <div className="mt-16 text-8xl animate-bounce">🌌❤️🌌</div>
        </motion.div>
      </div>
    </>
  )
}
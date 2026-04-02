import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProgressBar from '../components/common/ProgressBar'
import HeartCollector from '../components/common/HeartCollector'

export default function LoveLetter() {
  const herName = import.meta.env.VITE_HER_NAME || 'My Love'
  const yourName = import.meta.env.VITE_YOUR_NAME || 'Praveenkanth'

  return (
    <>
      <ProgressBar />
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
        {/* Soft romantic background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-2xl w-full bg-white/5 backdrop-blur-3xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative"
        >
          {/* Decorative hearts */}
          <div className="absolute -top-6 -right-6 text-6xl opacity-30">💖</div>
          <div className="absolute -bottom-8 -left-6 text-5xl opacity-30">❤️</div>

          <HeartCollector />

          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl sm:text-5xl font-display romantic-glow text-center mb-10"
          >
            My Dearest {herName},
          </motion.h1>

          <div className="prose prose-invert text-lg sm:text-xl leading-relaxed space-y-8 text-justify">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              From the moment you entered my life, every day became a celebration.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              You are my star, my moon, my entire universe. On your birthday, I want the whole cosmos to know how deeply I love you.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Thank you for being the most beautiful part of my story.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-right mt-12 pt-8 border-t border-white/20"
            >
              <p className="text-3xl font-display text-pink-200">Forever yours,</p>
              <p className="text-4xl mt-2 romantic-glow">{yourName} 💖</p>
            </motion.div>
          </div>
        </motion.div>

        <Link 
          to="/" 
          className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 text-xl flex items-center gap-2 hover:text-pink-300 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  )
}
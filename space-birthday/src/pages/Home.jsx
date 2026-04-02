import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SpaceScene from '../components/three/SpaceScene'
import TypingIntro from '../components/entry/TypingIntro'
import GiftBox from '../components/entry/GiftBox'
import ProgressBar from '../components/common/ProgressBar'
import MusicPlayer from '../components/common/MusicPlayer'
import HeartCollector from '../components/common/HeartCollector'
import { useLoveStore } from '../store/useLoveStore'

export default function Home() {
  const { secretUnlocked } = useLoveStore()
  const herName = import.meta.env.VITE_HER_NAME || 'My Love'
  const [stage, setStage] = useState('intro')

  return (
    <>
      <SpaceScene />
      <MusicPlayer />
      <ProgressBar />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        {stage === 'intro' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-xl">
            <TypingIntro herName={herName} />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStage('gift')}
              className="mt-12 px-10 py-6 text-2xl sm:text-3xl bg-white/10 hover:bg-white/20 backdrop-blur-2xl rounded-3xl transition-all"
            >
              Open the surprise for her ✨
            </motion.button>
          </motion.div>
        )}

        {stage === 'gift' && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
            <p className="text-xl sm:text-2xl mb-8">Click the gift, my love...</p>
            <GiftBox onOpen={() => setStage('main')} />
          </motion.div>
        )}

        {stage === 'main' && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display romantic-glow mb-4">
              Welcome to our universe, {herName} 💫
            </h1>
            <p className="text-pink-300 text-lg sm:text-xl">Collect 5 hearts to unlock a secret just for you ❤️</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-4">
              <Link to="/letter" className="bg-white/10 hover:bg-white/20 backdrop-blur-2xl p-8 rounded-3xl text-left transition-all group">
                <span className="text-5xl block mb-4 group-hover:scale-110 transition">💌</span>
                <h3 className="text-2xl font-medium">Love Letter</h3>
              </Link>
              <Link to="/countdown" className="bg-white/10 hover:bg-white/20 backdrop-blur-2xl p-8 rounded-3xl text-left transition-all group">
                <span className="text-5xl block mb-4 group-hover:scale-110 transition">⏳</span>
                <h3 className="text-2xl font-medium">Countdown to Your Day</h3>
              </Link>
              <Link to="/game" className="bg-white/10 hover:bg-white/20 backdrop-blur-2xl p-8 rounded-3xl text-left transition-all group">
                <span className="text-5xl block mb-4 group-hover:scale-110 transition">🎮</span>
                <h3 className="text-2xl font-medium">Romantic Shooter</h3>
              </Link>
            </div>

            {secretUnlocked && (
              <Link to="/secret" className="block mt-8 mx-auto max-w-md bg-gradient-to-r from-pink-500 to-purple-600 py-8 rounded-3xl text-center text-3xl font-medium shadow-xl hover:scale-105 transition">
                🎉 YOUR SECRET IS UNLOCKED — Tap to see it!
              </Link>
            )}

            {/* Hidden hearts - more positions for mobile */}
            <div className="absolute top-1/4 left-6 sm:left-12"><HeartCollector /></div>
            <div className="absolute top-1/3 right-6 sm:right-12"><HeartCollector /></div>
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2"><HeartCollector /></div>
          </motion.div>
        )}
      </div>
    </>
  )
}
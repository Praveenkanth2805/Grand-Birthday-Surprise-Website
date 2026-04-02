import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCountdown } from '../utils/countdown';
import ProgressBar from '../components/common/ProgressBar';
import HeartCollector from '../components/common/HeartCollector';
import { useLoveStore } from '../store/useLoveStore';

export default function Countdown() {
  const birthday = import.meta.env.VITE_BIRTHDAY;
  const [time, setTime] = useState(getCountdown(birthday));
  const herName = import.meta.env.VITE_HER_NAME || 'my love';
  const yourName = import.meta.env.VITE_YOUR_NAME || 'Praveenkanth';
  
  const { hearts } = useLoveStore();

  const rosePetals = ['🌸','🌹', '🌸'];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCountdown(birthday));
    }, 1000);
    return () => clearInterval(timer);
  }, [birthday]);

  return (
    <>
      <ProgressBar />

      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-[#0a0a2a]">
        
        {/* Rose Petals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={`petal-${i}`}
              className="absolute text-4xl sm:text-5xl drop-shadow-2xl"
              initial={{ y: '-20vh', x: Math.random() * 100 + 'vw', rotate: Math.random() * 180 - 90, opacity: 0.9 }}
              animate={{
                y: '120vh',
                x: [null, `${(Math.random() - 0.5) * 80}vw`],
                rotate: [null, Math.random() * 900 - 450],
                opacity: [0.9, 1, 0.35],
              }}
              transition={{
                duration: 13 + Math.random() * 17,
                repeat: Infinity,
                delay: Math.random() * -30,
                ease: "linear"
              }}
              style={{ left: `${Math.random() * 100}vw`, color: '#ff69b4' }}
            >
              {rosePetals[i % rosePetals.length]}
            </motion.div>
          ))}
        </div>

        {/* Heart Collector - Center */}
        {hearts < 5 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <HeartCollector />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto z-10 mt-24"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 px-2 romantic-glow text-white">
            Every second brings me closer to celebrating you,<br />
            <span className="text-pink-300">{herName}</span>
          </h1>

          <p className="text-pink-200 text-lg sm:text-xl mb-12 max-w-md mx-auto font-light">
            I can't wait to make your birthday the most magical day ever...
          </p>

          {/* Simple Countdown with Solid Colors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl mx-auto">

            <div className="bg-white/10 backdrop-blur-3xl p-6 sm:p-9 rounded-3xl border border-white/20 shadow-2xl">
              <div className="font-light text-5xl sm:text-7xl tabular-nums text-white tracking-wider">
                {time.days.toString().padStart(2, '0')}
              </div>
              <div className="mt-4 text-sm sm:text-base tracking-[3px] uppercase text-pink-300 font-medium">
                DAYS
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-3xl p-6 sm:p-9 rounded-3xl border border-white/20 shadow-2xl">
              <div className="font-light text-5xl sm:text-7xl tabular-nums text-white tracking-wider">
                {time.hours.toString().padStart(2, '0')}
              </div>
              <div className="mt-4 text-sm sm:text-base tracking-[3px] uppercase text-purple-300 font-medium">
                HOURS
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-3xl p-6 sm:p-9 rounded-3xl border border-white/20 shadow-2xl">
              <div className="font-light text-5xl sm:text-7xl tabular-nums text-white tracking-wider">
                {time.minutes.toString().padStart(2, '0')}
              </div>
              <div className="mt-4 text-sm sm:text-base tracking-[3px] uppercase text-pink-300 font-medium">
                MINUTES
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-3xl p-6 sm:p-9 rounded-3xl border border-white/20 shadow-2xl">
              <div className="font-light text-5xl sm:text-7xl tabular-nums text-white tracking-wider">
                {time.seconds.toString().padStart(2, '0')}
              </div>
              <div className="mt-4 text-sm sm:text-base tracking-[3px] uppercase text-rose-400 font-medium">
                SECONDS
              </div>
            </div>

          </div>

          <p className="mt-14 text-2xl sm:text-3xl text-pink-100 font-light">
            With all my love forever,<br />{yourName} 🌹💕
          </p>
        </motion.div>

        <Link
          to="/"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 
                     bg-white/10 hover:bg-white/20 backdrop-blur-2xl 
                     px-10 py-4 rounded-full text-xl flex items-center gap-3 
                     transition-all active:scale-95 shadow-xl"
        >
          ← Back to Welcome Page
        </Link>
      </div>
    </>
  )
}
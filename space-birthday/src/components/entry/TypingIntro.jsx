import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TypingIntro({ herName }) {
  const fullText = `Happy Birthday, ${herName} 💖`
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1))
        i++
      } else clearInterval(timer)
    }, 80)
    return () => clearInterval(timer)
  }, [herName])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center font-display text-6xl md:text-7xl leading-tight romantic-glow min-h-[200px]"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.div>
  )
}
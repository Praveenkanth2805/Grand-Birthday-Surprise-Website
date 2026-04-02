import { motion } from 'framer-motion'
import { useLoveStore } from '../../store/useLoveStore'

export default function HeartCollector() {
  const { collectHeart, hearts } = useLoveStore()

  if (hearts >= 5) return null // ← No more clicking after 5

  return (
    <motion.div
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.85 }}
      onClick={collectHeart}
      className="cursor-pointer text-7xl absolute select-none z-40 drop-shadow-[0_0_25px_#ff69b4]"
      animate={{ 
        y: [0, -25, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 1.6,
        ease: "easeInOut"
      }}
    >
      ❤️
    </motion.div>
  )
}
import { motion } from 'framer-motion'

export default function GiftBox({ onOpen }) {
  return (
    <motion.div
      initial={{ scale: 0.8, rotate: -8 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 8 }}
      whileTap={{ scale: 0.95 }}
      onClick={onOpen}
      className="mx-auto cursor-pointer text-[180px] leading-none transition-transform"
    >
      🎁
    </motion.div>
  )
}
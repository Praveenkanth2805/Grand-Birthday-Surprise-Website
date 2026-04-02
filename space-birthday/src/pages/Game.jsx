import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProgressBar from '../components/common/ProgressBar'

export default function Game() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let playerX = 400
    let bullets = []
    let fallingHearts = []
    let particles = []
    let animationFrame
    let width = 800
    let height = 500

    const heartEmojis = ['❤️', '💖', '💗', '💕', '💘']

    class FallingHeart {
      constructor() {
        this.x = Math.random() * width
        this.y = -60
        this.size = 28 + Math.random() * 24
        this.speed = 2.5 + Math.random() * 3.5
        this.emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
        this.hit = false
        this.hitTime = 0
      }
    }

    class Bullet {
      constructor(x) { this.x = x; this.y = height - 90; this.speed = 13 }
    }

    class Particle {
      constructor(x, y) {
        this.x = x; this.y = y
        this.vx = (Math.random() - 0.5) * 9
        this.vy = (Math.random() - 0.5) * 9
        this.life = 28
      }
    }

    const resizeCanvas = () => {
      width = Math.min(window.innerWidth * 0.92, 800)
      height = 500
      canvas.width = width
      canvas.height = height
      playerX = width / 2
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Spawn hearts
    const spawn = () => fallingHearts.push(new FallingHeart())
    for (let i = 0; i < 14; i++) spawn()

    const loop = () => {
      // Background
      ctx.fillStyle = 'rgba(10, 10, 42, 0.92)'
      ctx.fillRect(0, 0, width, height)

      // Stars
      ctx.fillStyle = '#ffffff'
      for (let i = 0; i < 120; i++) {
        const x = (i * 17) % width
        const y = (i * 29) % height
        ctx.fillRect(x, y, 1.5, 1.5)
      }

      // Player (romantic heart ship)
      ctx.font = '48px system-ui'
      ctx.shadowColor = '#ff69b4'
      ctx.shadowBlur = 25
      ctx.fillText('💖', playerX - 24, height - 35)
      ctx.shadowBlur = 0

      // Bullets (arrows)
      ctx.font = '24px system-ui'
      bullets = bullets.filter(b => {
        b.y -= b.speed
        ctx.fillText('💘', b.x - 10, b.y)
        return b.y > 0
      })

      // Falling hearts
      fallingHearts.forEach((h, i) => {
        if (h.hit) {
          h.hitTime++
          const scale = Math.max(0.2, 1 - h.hitTime / 12)
          ctx.save()
          ctx.translate(h.x, h.y)
          ctx.scale(scale, scale)
          ctx.shadowColor = '#ff1493'
          ctx.shadowBlur = 30
          ctx.font = `${h.size}px system-ui`
          ctx.fillText(h.emoji, -h.size / 2, h.size / 2)
          ctx.restore()
          if (h.hitTime > 12) fallingHearts.splice(i, 1)
          return
        }

        h.y += h.speed
        ctx.font = `${h.size}px system-ui`
        ctx.fillText(h.emoji, h.x, h.y)

        if (h.y > height + 50) fallingHearts.splice(i, 1)
      })

      // Collision
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i]
        for (let j = fallingHearts.length - 1; j >= 0; j--) {
          const h = fallingHearts[j]
          if (h.hit) continue
          const dx = b.x - h.x
          const dy = b.y - h.y
          if (Math.hypot(dx, dy) < h.size * 0.8) {
            h.hit = true
            h.hitTime = 0
            bullets.splice(i, 1)
            // Particles explosion
            for (let k = 0; k < 18; k++) particles.push(new Particle(h.x, h.y))
            setScore(prev => prev + 25)
            break
          }
        }
      }

      // Particles
      ctx.fillStyle = '#ff69b4'
      particles = particles.filter(p => {
        p.x += p.vx
        p.y += p.vy
        p.life--
        ctx.globalAlpha = p.life / 28
        ctx.fillRect(p.x, p.y, 5, 5)
        return p.life > 0
      })
      ctx.globalAlpha = 1

      // Spawn more hearts
      if (Math.random() < 0.045 || fallingHearts.length < 9) spawn()

      animationFrame = requestAnimationFrame(loop)
    }

    loop()

    // Controls
    const move = (clientX) => {
      const rect = canvas.getBoundingClientRect()
      playerX = clientX - rect.left
      playerX = Math.max(40, Math.min(width - 40, playerX))
    }

    const shoot = () => bullets.push(new Bullet(playerX))

    canvas.addEventListener('mousemove', e => move(e.clientX))
    canvas.addEventListener('click', shoot)

    // Mobile touch
    canvas.addEventListener('touchmove', e => {
      e.preventDefault()
      move(e.touches[0].clientX)
    })
    canvas.addEventListener('touchstart', e => {
      e.preventDefault()
      move(e.touches[0].clientX)
      shoot()
    })

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      <ProgressBar />
      <div className="min-h-screen bg-[#0a0a2a] flex flex-col items-center justify-center p-4">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl sm:text-5xl font-display romantic-glow mb-2 text-center"
        >
          Romantic Space Shooter 💘
        </motion.h1>
        <p className="text-pink-200 mb-6">Move • Tap to shoot arrows at hearts!</p>

        <canvas
          ref={canvasRef}
          className="border-4 border-pink-400/50 rounded-3xl shadow-2xl max-w-full cursor-crosshair"
        />

        <div className="mt-6 text-3xl font-light">Score: <span className="font-mono text-pink-300">{score}</span></div>

        <Link to="/" className="mt-8 text-xl underline flex items-center gap-2 hover:text-pink-300">
          ← Back to Home
        </Link>
      </div>
    </>
  )
}
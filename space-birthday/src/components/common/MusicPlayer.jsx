import { useEffect, useRef } from 'react'
import { useLoveStore } from '../../store/useLoveStore'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const { isMuted, toggleMute } = useLoveStore()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const playAudio = () => {
      audio.play().catch(() => {})
    }

    document.body.addEventListener('click', playAudio, { once: true })
    return () => document.body.removeEventListener('click', playAudio)
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted
  }, [isMuted])

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/bg.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-3xl w-14 h-14 rounded-2xl flex items-center justify-center transition-all"
      >
        {isMuted ? '🔇' : '🎵'}
      </button>
    </>
  )
}
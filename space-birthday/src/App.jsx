import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import LoveLetter from './pages/LoveLetter'
import Countdown from './pages/Countdown'
import Game from './pages/Game'
import Secret from './pages/Secret'
import { useLoveStore } from './store/useLoveStore'

function ProtectedRoute({ children }) {
  const { secretUnlocked } = useLoveStore()
  return secretUnlocked ? children : <Navigate to="/" replace />
}

export default function App() {
  return (
    <BrowserRouter basename="/space-birthday">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<LoveLetter />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/game" element={<Game />} />
        <Route path="/secret" element={
          <ProtectedRoute>
            <Secret />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}
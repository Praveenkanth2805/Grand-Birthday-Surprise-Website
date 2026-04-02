import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import FloatingHearts from './FloatingHearts'
import { Suspense } from 'react'

export default function SpaceScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff69b4" />
          <Stars radius={300} depth={60} count={8000} factor={7} saturation={0} fade />
          <FloatingHearts />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.3} />
        </Suspense>
      </Canvas>
    </div>
  )
}
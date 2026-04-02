import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function HeartMesh({ position }) {
  const meshRef = useRef()

  const heartShape = new THREE.Shape()
  heartShape.bezierCurveTo(0, 0, 0.5, -0.8, 1, 0)
  heartShape.bezierCurveTo(1.5, 0.8, 0, 1.2, 0, 0)

  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.8
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1
  })

  return (
    <mesh ref={meshRef} position={position}>
      <extrudeGeometry args={[heartShape, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.05 }]} />
      <meshStandardMaterial color="#ff69b4" emissive="#c026d3" emissiveIntensity={0.6} />
    </mesh>
  )
}

export default function FloatingHearts() {
  const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 30,
      Math.random() * 20 - 10,
      (Math.random() - 0.5) * 20
    ]
  }))

  return (
    <>
      {hearts.map((h) => (
        <HeartMesh key={h.id} position={h.position} />
      ))}
    </>
  )
}
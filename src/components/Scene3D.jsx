// import { Canvas, useFrame } from '@react-three/fiber'
// import { useTexture } from '@react-three/drei'
// import { useEffect, useRef, useState } from 'react'
// import { PHOTOS } from '../data/photos'

// const POSITIONS = [
//   [-2.8, 1.2, 0.0],
//   [0.0, 1.6, -0.6],
//   [2.8, 1.2, 0.3],
//   [-2.2, -1.1, 0.5],
//   [0.4, -0.8, -0.3],
//   [2.4, -1.2, 0.1],
// ]

// function Lights() {
//   return (
//     <>
//       <ambientLight color="#f0ede8" intensity={0.4} />
//       <directionalLight position={[3, 4, 5]} intensity={0.9} />
//       <pointLight
//         position={[-3, 2, 3]}
//         color="#e8d8b0"
//         intensity={1.4}
//         distance={14}
//       />
//     </>
//   )
// }

// function Panel({ photo, position, phase }) {
//   const meshRef = useRef()
//   const [hovered, setHovered] = useState(false)
//   const texture = useTexture(photo.thumb)

//   useFrame((state) => {
//     const t = state.clock.elapsedTime
  
//     if (!meshRef.current) return
  
//     meshRef.current.position.y =
//       position[1] + Math.sin(t * 0.3 + phase) * 0.05
  
//     meshRef.current.rotation.y =
//       Math.sin(t * 0.2 + phase) * 0.08
  
//     meshRef.current.rotation.x =
//       Math.cos(t * 0.15 + phase) * 0.03
//   })

//   return (
//     <mesh
//       ref={meshRef}
//       position={position}
//       scale={hovered ? 1.05 : 1}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <boxGeometry args={[1.65, 1.1, 0.045]} />
//       <meshStandardMaterial map={texture} roughness={0.4} metalness={0.1} />
//     </mesh>
//   )
// }

// function FloatingPanels() {
//   return (
//     <>
//       {PHOTOS.slice(0, 6).map((photo, i) => (
//         <Panel
//           key={photo.id}
//           photo={photo}
//           position={POSITIONS[i]}
//           phase={Math.random() * Math.PI * 2}
//         />
//       ))}
//     </>
//   )
// }

// function RotationController() {
//   const groupRef = useRef()
//   const [target, setTarget] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const onMove = (e) => {
//       const xNorm = e.clientX / window.innerWidth - 0.5
//       const yNorm = e.clientY / window.innerHeight - 0.5
//       setTarget({
//         y: xNorm * 0.9,
//         x: yNorm * 0.35,
//       })
//     }
//     window.addEventListener('mousemove', onMove)
//     return () => window.removeEventListener('mousemove', onMove)
//   }, [])

//   useFrame(() => {
//     if (!groupRef.current) return
//     groupRef.current.rotation.y += (target.y - groupRef.current.rotation.y) * 0.04
//     groupRef.current.rotation.x += (target.x - groupRef.current.rotation.x) * 0.04
//   })

//   return <group ref={groupRef}>{<FloatingPanels />}</group>
// }

// export default function Scene3D() {
//   return (
//     <section className="relative h-screen overflow-hidden">
//       <Canvas
//         camera={{ position: [0, 0, 5.5], fov: 50 }}
//         gl={{ alpha: true, antialias: true }}
//         style={{ position: 'absolute', inset: 0 }}
//       >
//         <Lights />
//         <RotationController />
//       </Canvas>

//       <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center text-center">
//         <h2 className="font-display text-[clamp(36px,5vw,72px)] font-extrabold tracking-[-0.04em] text-[#f0ede8] mix-blend-difference">
//           The Collection
//         </h2>
//         <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.55)]">
          
//         </p>
//       </div>
//     </section>
//   )
// }

import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { PHOTOS } from '../data/photos'

const POSITIONS = [
  [-2.8, 1.2, 0.0],
  [0.0, 1.6, -0.6],
  [2.8, 1.2, 0.3],
  [-2.2, -1.1, 0.5],
  [0.4, -0.8, -0.3],
  [2.4, -1.2, 0.1],
]

function Lights() {
  return (
    <>
      <ambientLight color="#f0ede8" intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={0.9} />
      <pointLight
        position={[-3, 2, 3]}
        color="#e8d8b0"
        intensity={1.4}
        distance={14}
      />
    </>
  )
}

function Panel({ photo, position, phase }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(photo.thumb)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!meshRef.current) return

    // Floating animation
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.3 + phase) * 0.05

    meshRef.current.rotation.y =
      Math.sin(t * 0.2 + phase) * 0.08

    meshRef.current.rotation.x =
      Math.cos(t * 0.15 + phase) * 0.03

    // Smooth hover scale (no flicker)
    const targetScale = hovered ? 1.06 : 1
    const currentScale = meshRef.current.scale
    const targetVector = new THREE.Vector3(
      targetScale,
      targetScale,
      targetScale
    )
    currentScale.lerp(targetVector, 0.1)
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.65, 1.1, 0.08]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.4}
        metalness={0.1}
        depthWrite={false}
      />
    </mesh>
  )
}

function FloatingPanels() {
  return (
    <>
      {PHOTOS.slice(0, 6).map((photo, i) => (
        <Panel
          key={photo.id}
          photo={photo}
          position={POSITIONS[i]}
          phase={Math.random() * Math.PI * 2}
        />
      ))}
    </>
  )
}

function RotationController() {
  const groupRef = useRef()
  const [target, setTarget] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const xNorm = e.clientX / window.innerWidth - 0.5
      const yNorm = e.clientY / window.innerHeight - 0.5
      setTarget({
        y: xNorm * 0.9,
        x: yNorm * 0.35,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    if (!groupRef.current) return

    groupRef.current.rotation.y +=
      (target.y - groupRef.current.rotation.y) * 0.04

    groupRef.current.rotation.x +=
      (target.x - groupRef.current.rotation.x) * 0.04
  })

  return (
    <group ref={groupRef}>
      <FloatingPanels />
    </group>
  )
}

export default function Scene3D() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Lights />
        <RotationController />
      </Canvas>

      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2 className="font-display text-[clamp(36px,5vw,72px)] font-extrabold tracking-[-0.04em] text-[#f0ede8] mix-blend-difference">
          The Collection
        </h2>
      </div>
    </section>
  )
}

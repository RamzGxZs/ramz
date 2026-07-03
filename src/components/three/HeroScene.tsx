"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function WireframeGlobe() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.08
    mesh.current.rotation.x = Math.sin(t * 0.1) * 0.1
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2.2, 2]} />
      <meshStandardMaterial
        color="#f97316"
        wireframe
        transparent
        opacity={0.12}
        emissive="#f97316"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

function InnerGlobe() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.rotation.y = -t * 0.12
    mesh.current.rotation.z = t * 0.05
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <dodecahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#c2410c"
        wireframe
        transparent
        opacity={0.08}
        emissive="#c2410c"
        emissiveIntensity={0.05}
      />
    </mesh>
  )
}

function CodeBrackets({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.x = rotation[0] + Math.sin(t * 0.5 + position[0]) * 0.3
    group.current.rotation.y = rotation[1] + t * 0.2
    group.current.position.y = position[1] + Math.sin(t * 0.3 + position[0] * 2) * 0.3
  })

  return (
    <group ref={group} position={position}>
      <mesh>
        <torusGeometry args={[0.3, 0.04, 8, 3, Math.PI]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

function FloatingSlash({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.rotation.z = 0.785 + Math.sin(t * 0.4 + position[0]) * 0.2
    mesh.current.position.y = position[1] + Math.sin(t * 0.25 + position[2]) * 0.4
  })

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.04, 0.5, 0.04]} />
      <meshStandardMaterial
        color="#fb923c"
        emissive="#f97316"
        emissiveIntensity={0.3}
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

function NetworkNode({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    const pulse = Math.sin(t * 2 + position[0] * 3) * 0.15 + 1
    mesh.current.scale.setScalar(scale * pulse)
  })

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color="#f97316"
        emissive="#f97316"
        emissiveIntensity={0.6}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

function NetworkLines() {
  const linesRef = useRef<THREE.Group>(null)

  const nodes = useMemo(() => [
    [-4, 2, -3], [-2, 3, -2], [0, 2.5, -4], [2, 3.5, -2], [4, 2, -3],
    [-3, -1, -2], [-1, 0, -3], [1, -0.5, -2], [3, 0.5, -3],
    [-2, -3, -2], [0, -2.5, -3], [2, -3, -2],
  ], [])

  const connections = useMemo(() => [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [5, 6], [6, 7], [7, 8],
    [9, 10], [10, 11],
    [0, 5], [1, 6], [2, 7], [3, 8],
    [5, 9], [6, 10], [7, 11],
  ], [])

  const linePositions = useMemo(() => {
    const positions: number[] = []
    connections.forEach(([a, b]) => {
      positions.push(...nodes[a], ...nodes[b])
    })
    return new Float32Array(positions)
  }, [nodes, connections])

  useFrame(({ clock }) => {
    if (!linesRef.current) return
    const t = clock.getElapsedTime()
    linesRef.current.rotation.y = Math.sin(t * 0.05) * 0.1
  })

  return (
    <group ref={linesRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#f97316" transparent opacity={0.08} />
      </lineSegments>
      {nodes.map((pos, i) => (
        <NetworkNode key={i} position={pos as [number, number, number]} scale={0.8} />
      ))}
    </group>
  )
}

function FloatingParticles({ count = 120 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        speed: 0.001 + Math.random() / 300,
        x: -15 + Math.random() * 30,
        y: -10 + Math.random() * 20,
        z: -8 + Math.random() * 16,
        size: 0.02 + Math.random() * 0.04,
      })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(() => {
    if (!mesh.current) return
    particles.forEach((p, i) => {
      p.t += p.speed
      const y = p.y + Math.sin(p.t * 0.5) * 0.5
      const x = p.x + Math.cos(p.t * 0.3) * 0.3

      dummy.position.set(x, y, p.z)
      dummy.scale.setScalar(p.size * (Math.sin(p.t) * 0.3 + 0.7))
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial
        color="#f97316"
        emissive="#f97316"
        emissiveIntensity={0.5}
        transparent
        opacity={0.5}
      />
    </instancedMesh>
  )
}

function FloatingMonitor({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t * 0.2 + position[0]) * 0.3
    group.current.position.y = position[1] + Math.sin(t * 0.15 + position[2]) * 0.4
  })

  return (
    <group ref={group} position={position} scale={0.4}>
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.05]} />
        <meshStandardMaterial
          color="#1a1a24"
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial
          color="#2a2a38"
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[1, 0.6]} />
        <meshStandardMaterial
          color="#0a0a0f"
          emissive="#f97316"
          emissiveIntensity={0.05}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

function FloatingBracket({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.x = rotation[0] + Math.sin(t * 0.3 + position[0]) * 0.4
    group.current.rotation.y = rotation[1] + t * 0.15
    group.current.position.y = position[1] + Math.sin(t * 0.2 + position[1]) * 0.3
  })

  return (
    <group ref={group} position={position}>
      <mesh>
        <torusGeometry args={[0.25, 0.03, 8, 12, Math.PI * 1.2]} />
        <meshStandardMaterial
          color="#fb923c"
          emissive="#f97316"
          emissiveIntensity={0.3}
          transparent
          opacity={0.45}
        />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} color="#f97316" />
        <pointLight position={[-5, -5, 5]} intensity={0.2} color="#c2410c" />
        <pointLight position={[5, -3, -5]} intensity={0.15} color="#fb923c" />

        <WireframeGlobe />
        <InnerGlobe />
        <NetworkLines />
        <FloatingParticles count={100} />

        <CodeBrackets position={[-4, 2.5, -2]} rotation={[0, 0, 0]} />
        <CodeBrackets position={[4.5, -1.5, -3]} rotation={[0.5, 1, 0]} />
        <CodeBrackets position={[-3, -2.5, -1]} rotation={[0.3, 0.5, 0.2]} />
        <CodeBrackets position={[3, 2, -4]} rotation={[0.8, 0.3, 0]} />

        <FloatingSlash position={[-5, 0, -2]} />
        <FloatingSlash position={[5, 1, -3]} />
        <FloatingSlash position={[-2, -3.5, -2]} />
        <FloatingSlash position={[2, 3.5, -3]} />

        <FloatingBracket position={[-3.5, 3, -3]} rotation={[0, 0, 0]} />
        <FloatingBracket position={[3.5, -2.5, -2]} rotation={[0.3, 1, 0]} />
        <FloatingBracket position={[-4.5, -1, -4]} rotation={[0.5, 0.5, 0.3]} />
        <FloatingBracket position={[4.5, 3, -2]} rotation={[0.2, 0.8, 0]} />

        <FloatingMonitor position={[-5, -2, -4]} />
        <FloatingMonitor position={[5, 2, -5]} />
      </Canvas>
    </div>
  )
}

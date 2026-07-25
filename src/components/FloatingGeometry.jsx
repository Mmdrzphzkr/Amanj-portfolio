import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

const FloatingGeometry = () => {
  const torusRef = useRef();
  const octaRef = useRef();
  const icoRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.4;
      octaRef.current.rotation.z = t * 0.2;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.3;
      icoRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <>
      {/* Main central wireframe sphere */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.8, 4]} />
          <MeshDistortMaterial
            color="#6c63ff"
            emissive="#6c63ff"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.25}
            speed={2}
            wireframe
          />
        </mesh>
      </Float>

      {/* Torus Ring */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={torusRef} position={[3.5, 1, -2]}>
          <torusGeometry args={[0.7, 0.2, 16, 32]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Octahedron */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={octaRef} position={[-3.5, -1, -1]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>
      </Float>

      {/* Small Icosahedron */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh ref={icoRef} position={[2, -2.5, 1]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#ff006e"
            emissive="#ff006e"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Dodecahedron */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 2.5, -2]}>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#6c63ff"
            emissive="#6c63ff"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Tetrahedron */}
      <Float speed={2.2} rotationIntensity={0.7} floatIntensity={1.3}>
        <mesh position={[4, -0.5, -3]}>
          <tetrahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>
      </Float>
    </>
  );
};

export default FloatingGeometry;

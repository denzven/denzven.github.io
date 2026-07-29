import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a sphere to simulate a complex neural network/brain
const generateBrainParticles = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Random point inside a sphere using spherical coordinates
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * 4; // Radius 4

    // Morph the sphere slightly to look more like a brain (elongated front-to-back, slightly squashed top-to-bottom)
    const sinPhi = Math.sin(phi);
    const x = r * sinPhi * Math.cos(theta) * 0.8; 
    const y = r * sinPhi * Math.sin(theta) * 0.9;
    const z = r * Math.cos(phi) * 1.2;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const BrainParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => generateBrainParticles(6000), []);
  
  // Track scroll to change color and rotation speed
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalScroll;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Base rotation
      ref.current.rotation.y -= delta * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

      // Add scroll-based rotation
      ref.current.rotation.y += scrollProgress * Math.PI * 2 * delta * 0.5;
    }
  });

  // Calculate color based on scroll progress
  // 0.0 -> White (Hero)
  // 0.33 -> Terracotta (Chemical)
  // 0.66 -> Neon Blue (Code)
  // 1.0 -> Gold/Green (Arts/Leadership)
  const color = new THREE.Color();
  if (scrollProgress < 0.25) {
    color.lerpColors(new THREE.Color('#ffffff'), new THREE.Color('#ea580c'), scrollProgress * 4);
  } else if (scrollProgress < 0.5) {
    color.lerpColors(new THREE.Color('#ea580c'), new THREE.Color('#38bdf8'), (scrollProgress - 0.25) * 4);
  } else if (scrollProgress < 0.75) {
    color.lerpColors(new THREE.Color('#38bdf8'), new THREE.Color('#fbbf24'), (scrollProgress - 0.5) * 4);
  } else {
    color.lerpColors(new THREE.Color('#fbbf24'), new THREE.Color('#4ade80'), (scrollProgress - 0.75) * 4);
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export const Brain3D: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, background: '#000000', pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        
        {/* The Brain */}
        <BrainParticles />
        
      </Canvas>
    </div>
  );
};

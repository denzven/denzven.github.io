import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, Stars, Line, Float, useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Import our HTML UI Components
import { HeroSection } from './HeroSection';
import { ChemicalProcess } from './ChemicalProcess';
import { CodeEcosystem } from './CodeEcosystem';
import { KineticArts } from './KineticArts';
import { Leadership } from './Leadership';

// The Camera rig that flies through the network based on scroll
const CameraRig = () => {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;


    // Camera moves forward along Z axis, and pans X slightly to look at nodes
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 10 - scroll.offset * 80, 0.05);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, Math.sin(scroll.offset * Math.PI * 2) * 10, 0.05);
    
    // Look slightly ahead
    state.camera.lookAt(
      Math.sin((scroll.offset + 0.1) * Math.PI * 2) * 10, 
      0, 
      10 - (scroll.offset + 0.1) * 80
    );
  });

  return <group ref={group} />;
};

// A Polymath Node in the network
const Node = ({ position, color, type }: { position: [number, number, number], color: string, type: 'reactor' | 'code' | 'art' | 'lead' }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        {type === 'reactor' && <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />}
        {type === 'code' && <boxGeometry args={[2.5, 2.5, 2.5]} />}
        {type === 'art' && <octahedronGeometry args={[2, 0]} />}
        {type === 'lead' && <icosahedronGeometry args={[2, 1]} />}
        
        <meshStandardMaterial color={color} wireframe={type !== 'reactor'} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

export const Scene3D: React.FC = () => {
  const nodePositions: [number, number, number][] = [
    [0, 0, 0],         // Hero (Start)
    [10, 0, -20],      // Chemical
    [-10, 0, -40],     // Code
    [10, 0, -60],      // Art
    [0, 0, -80]        // Lead
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000000' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ScrollControls pages={5} damping={0.2}>
          
          {/* The 3D World */}
          <CameraRig />
          
          {/* Nodes */}
          <Node position={nodePositions[0]} color="#ffffff" type="reactor" />
          <Node position={nodePositions[1]} color="#ea580c" type="reactor" />
          <Node position={nodePositions[2]} color="#38bdf8" type="code" />
          <Node position={nodePositions[3]} color="#fbbf24" type="art" />
          <Node position={nodePositions[4]} color="#4ade80" type="lead" />

          {/* Network Connection Lines */}
          <Line points={[nodePositions[0], nodePositions[1]]} color="#ffffff" opacity={0.2} transparent lineWidth={2} />
          <Line points={[nodePositions[1], nodePositions[2]]} color="#ea580c" opacity={0.2} transparent lineWidth={2} />
          <Line points={[nodePositions[2], nodePositions[3]]} color="#38bdf8" opacity={0.2} transparent lineWidth={2} />
          <Line points={[nodePositions[3], nodePositions[4]]} color="#fbbf24" opacity={0.2} transparent lineWidth={2} />

          {/* The HTML Overlay */}
          <Scroll html style={{ width: '100%', height: '100%' }}>
            
            {/* Page 1: Hero */}
            <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', padding: '0 5vw' }}>
              <HeroSection />
            </div>

            {/* Page 2: Chemical Process */}
            <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', padding: '0 5vw', justifyContent: 'flex-start' }}>
              <div style={{ width: '600px' }}>
                <ChemicalProcess />
              </div>
            </div>

            {/* Page 3: Code Ecosystem */}
            <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', padding: '0 5vw', justifyContent: 'flex-end' }}>
              <div style={{ width: '600px' }}>
                <CodeEcosystem />
              </div>
            </div>

            {/* Page 4: Kinetic Arts */}
            <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', padding: '0 5vw', justifyContent: 'flex-start' }}>
              <div style={{ width: '600px' }}>
                <KineticArts />
              </div>
            </div>

            {/* Page 5: Leadership */}
            <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', padding: '0 5vw', justifyContent: 'center' }}>
              <div style={{ width: '800px' }}>
                <Leadership />
              </div>
            </div>

          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

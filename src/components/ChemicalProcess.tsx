import React from 'react';
import { motion } from 'framer-motion';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 250, y: 5 }, data: { label: 'Bharati Vidyapeeth (BE Chemical)' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: 'RCF: Continuous Flow (Sulphuric Acid)' } },
  { id: '3', position: { x: 400, y: 100 }, data: { label: 'APL: Batch Kinetics (Specialty Chemicals)' } },
  { id: '4', position: { x: 250, y: 200 }, data: { label: 'Research: Algal Biodiesel & Solid Propellants' } },
  { id: '5', position: { x: 250, y: 300 }, data: { label: 'Process Optimization & AOP Scavengers' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5', animated: true },
];

export const ChemicalProcess: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <section id="engineering" className="section-container">
      <h2 className="section-title">Chemical Engineering Paradigm</h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="minimal-card" style={{ height: '500px', padding: '10px' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          colorMode="dark"
          zoomOnScroll={false}
          panOnScroll={false}
          preventScrolling={false}
        >
          <Controls />
          <MiniMap nodeColor="var(--accent-terracotta)" maskColor="rgba(0,0,0,0.2)" />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </motion.div>
      <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="minimal-card" style={{ flex: '1 1 300px' }}
        >
          <h3 className="text-terracotta">Academics</h3>
          <p>CGPA: 6.95 (Mumbai University)</p>
          <p>NPTEL Aspen Plus Simulation (Silver)</p>
          <p>VBA & Regression Modeling (Udemy)</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="minimal-card" style={{ flex: '1 1 300px' }}
        >
          <h3 className="text-neon-green">Scale Translation</h3>
          <p>Proficient in steady-state continuous operations (RCF) and dynamic batch processing (APL).</p>
        </motion.div>
      </div>
    </section>
  );
};

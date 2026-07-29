import React from 'react';
import { motion } from 'framer-motion';


export const KineticArts: React.FC = () => {
  return (
    <section className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>

      
      <h2 className="section-title">Somatic Disciplines & Physical Syntax</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="minimal-card"
        >
          <h3 className="text-terracotta">Shito-Ryu Karate</h3>
          <h4 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Blue Belt | SSKKA Dojo</h4>
          <p>
            An art of strict physical algorithm. Just as a Python script executes sequential logic, Karate Katas demand rigorous sequences of bio-mechanical movements. This iterative physical conditioning translates directly to resilience in debugging complex systems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="minimal-card"
        >
          <h3 className="text-gold">Classical Bharatanatyam</h3>
          <h4 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Natesha Kautuvam | Chatushra Eka Talam</h4>
          <p>
            An invocation of extreme geometric precision and kinetic syntax. Synchronizing physical postures (Aramandi) with rhythmic, percussive syllables (chollukattus) demands spatial awareness that maps perfectly to architecting Cartesian grids and fluid dynamics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

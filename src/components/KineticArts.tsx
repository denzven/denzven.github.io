import React from 'react';
import { motion } from 'framer-motion';

export const KineticArts: React.FC = () => {
  return (
    <section id="arts" style={{ position: 'relative', overflow: 'hidden' }}>
      
      <h2 className="section-title text-gradient-gold">Somatic Disciplines & Physical Syntax</h2>
      <p className="section-subtitle">
        Merging bio-mechanical precision with rhythmic algorithms.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="royal-card" style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h3 className="text-rose" style={{ marginBottom: '0.5rem' }}>Shito-Ryu Karate</h3>
          <h4 style={{ color: 'var(--accent-lilac)', marginBottom: '1.5rem', fontWeight: 500, fontSize: '0.95rem' }}>Blue Belt | SSKKA Dojo</h4>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem', flex: 1 }}>
            <li><strong>Discipline:</strong> An art of strict physical algorithm.</li>
            <li><strong>Execution:</strong> Karate Katas demand rigorous sequences of bio-mechanical movements.</li>
            <li><strong>Translation:</strong> Iterative physical conditioning translates directly to resilience in debugging complex systems.</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="royal-card" style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h3 className="text-gold" style={{ marginBottom: '0.5rem' }}>Classical Bharatanatyam</h3>
          <h4 style={{ color: 'var(--accent-lilac)', marginBottom: '1.5rem', fontWeight: 500, fontSize: '0.95rem' }}>Natesha Kautuvam | Chatushra Eka Talam</h4>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem', flex: 1 }}>
            <li><strong>Precision:</strong> An invocation of extreme geometric precision.</li>
            <li><strong>Rhythm:</strong> Synchronizing physical postures (Aramandi) with rhythmic, percussive syllables (chollukattus).</li>
            <li><strong>Translation:</strong> Demands spatial awareness that maps perfectly to architecting Cartesian grids.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

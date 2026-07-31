import React from 'react';
import { motion } from 'framer-motion';
import { Target, Activity, Cpu, Map } from 'lucide-react';

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Target size={18} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Discipline:</span> An art of strict physical algorithm.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Activity size={18} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Execution:</span> Karate Katas demand rigorous sequences of bio-mechanical movements.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Cpu size={18} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Translation:</span> Iterative physical conditioning translates directly to resilience in debugging complex systems.
              </p>
            </div>
          </div>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Target size={18} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Precision:</span> An invocation of extreme geometric precision.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Activity size={18} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Rhythm:</span> Synchronizing physical postures (Aramandi) with rhythmic, percussive syllables (chollukattus).
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Map size={18} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Translation:</span> Demands spatial awareness that maps perfectly to architecting Cartesian grids.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

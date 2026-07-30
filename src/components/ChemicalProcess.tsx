import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Factory, FlaskConical, ArrowDown } from 'lucide-react';

export const ChemicalProcess: React.FC = () => {
  return (
    <section id="engineering">
      <h2 className="section-title text-gradient-gold">Chemical Engineering Paradigm</h2>
      <p className="section-subtitle">
        Bridging the gap between molecular theory and industrial-scale production.
      </p>
      
      {/* Process Flow Diagram */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="royal-panel" 
        style={{ padding: '2.5rem', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
      >
        <h3 className="text-gold" style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Career Process Flow</h3>
        
        {/* Node 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', width: '100%', maxWidth: '600px', border: '1px solid rgba(216, 180, 226, 0.2)' }}>
          <div style={{ background: 'rgba(216, 180, 226, 0.1)', padding: '1rem', borderRadius: '50%' }}>
            <Beaker className="text-lilac" size={28} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Academics</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Bharati Vidyapeeth (BE Chemical)</p>
          </div>
        </div>

        <ArrowDown className="text-gold" size={24} style={{ opacity: 0.5 }} />

        {/* Node 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', width: '100%', maxWidth: '600px', border: '1px solid rgba(226, 180, 180, 0.2)' }}>
          <div style={{ background: 'rgba(226, 180, 180, 0.1)', padding: '1rem', borderRadius: '50%' }}>
            <Factory className="text-rose" size={28} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Scale Translation</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>RCF (Continuous) & APL (Batch)</p>
          </div>
        </div>

        <ArrowDown className="text-gold" size={24} style={{ opacity: 0.5 }} />

        {/* Node 3 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', width: '100%', maxWidth: '600px', border: '1px solid rgba(138, 180, 248, 0.2)' }}>
          <div style={{ background: 'rgba(138, 180, 248, 0.1)', padding: '1rem', borderRadius: '50%' }}>
            <FlaskConical className="text-blue" size={28} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Research & Optimization</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Algal Biodiesel & Process Scavengers</p>
          </div>
        </div>
      </motion.div>
      
      {/* Detail Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="royal-card" style={{ flex: '1 1 300px' }}
        >
          <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Academic Foundation</h3>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
            <li><strong>CGPA:</strong> 6.95 (Mumbai University)</li>
            <li><strong>Certification:</strong> NPTEL Aspen Plus Simulation (Silver Medal)</li>
            <li><strong>Computation:</strong> VBA & Regression Modeling (Udemy)</li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="royal-card" style={{ flex: '1 1 300px' }}
        >
          <h3 className="text-rose" style={{ marginBottom: '1.5rem' }}>Industrial Experience</h3>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
            <li><strong>Continuous Flow:</strong> Sulphuric Acid production at RCF.</li>
            <li><strong>Batch Kinetics:</strong> Specialty Chemicals processing at APL.</li>
            <li><strong>Core Focus:</strong> Steady-state operations & dynamic scaling.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

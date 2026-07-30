import React from 'react';
import { motion } from 'framer-motion';
import { Network, Users, Mic, Award } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership">
      <h2 className="section-title text-gradient-accent">Leadership & Orchestration</h2>
      <p className="section-subtitle">
        Directing teams, managing logistics, and bridging disciplines.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="royal-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
        >
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', flexShrink: 0 }}>
            <Network className="text-blue" size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>ARISE Tech Festival (2025–2026)</h3>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem', margin: 0 }}>
              <li><strong>Role:</strong> Technical Head</li>
              <li><strong>Team Size:</strong> Led a team of 7 developers.</li>
              <li><strong>Impact:</strong> Developed an in-house application for the InQUIZitive Tech Quiz at the premier International Technical Level Paper Presentation festival.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="royal-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
        >
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', flexShrink: 0 }}>
            <Users className="text-gold" size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>ChEQ26 (2026)</h3>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem', margin: 0 }}>
              <li><strong>Role:</strong> Technical Head</li>
              <li><strong>Team Size:</strong> Coordinated a team of 6.</li>
              <li><strong>Impact:</strong> Executed the Prof. N.R. Kamath Memorial Quiz, bridging academic legacies with inter-collegiate interaction.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="royal-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
        >
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', flexShrink: 0 }}>
            <Mic className="text-lilac" size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Council Anchoring Team (2024–2026)</h3>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem', margin: 0 }}>
              <li><strong>Role:</strong> Anchoring Head</li>
              <li><strong>Team Size:</strong> Managed 12 members.</li>
              <li><strong>Impact:</strong> Coordinated large-scale cultural events; validated by Cambridge Assessment English B2 First (FCE) Certificate.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="royal-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
        >
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', flexShrink: 0 }}>
            <Award className="text-rose" size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>The Literature Club (2025–2026)</h3>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem', margin: 0 }}>
              <li><strong>Role:</strong> Supervisor</li>
              <li><strong>Focus:</strong> Digital marketing and logistical administration.</li>
              <li><strong>Impact:</strong> Managed meetings, agendas, and expanding digital outreach for the club.</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

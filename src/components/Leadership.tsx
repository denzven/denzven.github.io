import React from 'react';
import { motion } from 'framer-motion';
import { Network, Users, Mic, Award } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Leadership & Orchestration</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="minimal-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
        >
          <Network className="text-neon-blue" size={32} />
          <div>
            <h3>Technical Head, ARISE Team (2025–2026)</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Led a team of 7 to develop an in-house application for the InQUIZitive Tech Quiz at the premier International Technical Level Paper Presentation festival.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
        >
          <Users className="text-terracotta" size={32} />
          <div>
            <h3>Technical Head, ChEQ26 (2026)</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Coordinated a team of 6 for the Prof. N.R. Kamath Memorial Quiz, bridging academic legacies with inter-collegiate interaction.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
        >
          <Mic className="text-neon-green" size={32} />
          <div>
            <h3>Anchoring Head, Council Anchoring Team (2024–2026)</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Managed 12 members coordinating with cultural events and student committees. Validated by Cambridge Assessment English B2 First (FCE) Certificate.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
        >
          <Award className="text-gold" size={32} />
          <div>
            <h3>Supervisor, The Literature Club (2025–2026)</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Managed meetings, agendas, and digital outreach, emphasizing digital marketing and logistical administration.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

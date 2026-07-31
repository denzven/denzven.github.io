import React from 'react';
import { motion } from 'framer-motion';
import { Network, Users, Mic, Award, UserCheck, Target, Rocket, Star } from 'lucide-react';

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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <UserCheck size={16} className="text-blue" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Role:</span> Technical Head
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Users size={16} className="text-blue" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Team Size:</span> Led a team of 7 developers.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Rocket size={16} className="text-blue" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Impact:</span> Developed an in-house application for the InQUIZitive Tech Quiz at the premier International Technical Level Paper Presentation festival.
                </p>
              </div>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <UserCheck size={16} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Role:</span> Technical Head
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Users size={16} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Team Size:</span> Coordinated a team of 6.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Rocket size={16} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Impact:</span> Executed the Prof. N.R. Kamath Memorial Quiz, bridging academic legacies with inter-collegiate interaction.
                </p>
              </div>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <UserCheck size={16} className="text-lilac" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Role:</span> Anchoring Head
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Users size={16} className="text-lilac" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Team Size:</span> Managed 12 members.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Star size={16} className="text-lilac" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Impact:</span> Coordinated large-scale cultural events; validated by Cambridge Assessment English B2 First (FCE) Certificate.
                </p>
              </div>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <UserCheck size={16} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Role:</span> Supervisor
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Target size={16} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Focus:</span> Digital marketing and logistical administration.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Rocket size={16} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Impact:</span> Managed meetings, agendas, and expanding digital outreach for the club.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

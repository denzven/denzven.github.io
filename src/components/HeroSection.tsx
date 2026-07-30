import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, TerminalSquare, Swords } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Main Glass Panel */}
      <motion.div 
        className="royal-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', width: '100%', maxWidth: '900px' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span className="tech-font" style={{ fontSize: '0.95rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            The Multidisciplinary Engineer
          </span>
        </motion.div>
        
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          Hi, I'm <br />
          <span className="text-gradient-accent">Denzven Ignatius</span>
        </h1>
        
        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: '1.8' }}>
          "A jack of all trades is a master of none, but oftentimes better than a master of one." <br/><br/>
          Synthesizing <span className="text-gold">Chemical Engineering</span> logic, <span className="text-blue">Full-Stack scalable architecture</span>, and the somatic discipline of <span className="text-rose">Martial Arts</span> into unified, robust solutions.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#software" className="pastel-btn btn-primary">
            <TerminalSquare size={20} /> View Ecosystem
          </a>
          <a href="#engineering" className="pastel-btn btn-secondary">
            <FlaskConical size={20} /> Explore Processes
          </a>
        </div>
      </motion.div>

      {/* Trait Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem', width: '100%' }}
      >
        <div className="royal-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
          <TerminalSquare size={36} className="text-blue" />
          <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Full-Stack Developer</h3>
          <p className="tech-font" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>React, Node.js, Python, AWS. Building scalable decentralized tools.</p>
        </div>

        <div className="royal-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
          <FlaskConical size={36} className="text-gold" />
          <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Chemical Engineer</h3>
          <p className="tech-font" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Process engineering, material balances, and flow dynamics at scale.</p>
        </div>

        <div className="royal-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
          <Swords size={36} className="text-rose" />
          <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Somatic Artist</h3>
          <p className="tech-font" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Bharatanatyam & Shito-Ryu Karate. Discipline and physical geometry.</p>
        </div>
      </motion.div>

    </section>
  );
};

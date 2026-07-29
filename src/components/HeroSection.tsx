import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, TerminalSquare, Swords } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'left' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: '1.5rem', display: 'inline-block' }}
          >
            <span className="tech-font" style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              The Multidisciplinary Engineer
            </span>
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Hi, I'm <br />
            <span style={{ color: 'white' }}>Denzven Ignatius</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: '1.8', marginBottom: '3rem' }}>
            "A jack of all trades is a master of none, but oftentimes better than a master of one." <br/><br/>
            Synthesizing Chemical Engineering logic, Full-Stack scalable architecture, and the somatic discipline of Martial Arts into unified, robust solutions.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#software" style={{ padding: '1rem 2rem', borderRadius: '4px', background: 'white', color: 'black', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
              <TerminalSquare size={20} /> View Ecosystem
            </a>
            <a href="#engineering" style={{ padding: '1rem 2rem', borderRadius: '4px', background: 'transparent', color: 'white', border: '1px solid white', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
              <FlaskConical size={20} /> Explore Processes
            </a>
          </div>
        </motion.div>

        {/* Trait Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}
        >
          <div className="minimal-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TerminalSquare size={32} style={{ color: 'var(--accent-neon-blue)' }} />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Full-Stack Developer</h3>
            <p className="tech-font" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>React, Node.js, Python, AWS. Building scalable decentralized tools.</p>
          </div>

          <div className="minimal-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <FlaskConical size={32} style={{ color: 'var(--accent-neon-green)' }} />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Chemical Engineer</h3>
            <p className="tech-font" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Process engineering, material balances, and flow dynamics at scale.</p>
          </div>

          <div className="minimal-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Swords size={32} style={{ color: 'var(--accent-terracotta)' }} />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Somatic Artist</h3>
            <p className="tech-font" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Bharatanatyam & Shito-Ryu Karate. Discipline and physical geometry.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

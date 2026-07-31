import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Calendar, Target, Globe, Terminal, Cpu } from 'lucide-react';

export const CodeEcosystem: React.FC = () => {
  const [formula, setFormula] = useState('sin(x)+cos(y)');
  const [imgSrc, setImgSrc] = useState('https://denzven.pythonanywhere.com/DenzGraphingApi/v1/flat_graph/test/plot?formula=sin(x)%2Bcos(y)');
  const [loading, setLoading] = useState(false);
  const [errorJson, setErrorJson] = useState<string | null>(null);

  const handleGraphSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorJson(null);
    const encoded = encodeURIComponent(formula);
    const targetUrl = `https://denzven.pythonanywhere.com/DenzGraphingApi/v1/flat_graph/test/plot?formula=${encoded}`;
    const url = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;
    
    try {
      const response = await fetch(url);
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        const json = await response.json();
        setErrorJson(JSON.stringify(json, null, 2));
        setImgSrc('');
      } else if (!response.ok) {
        setErrorJson(`Error: ${response.status} ${response.statusText}`);
        setImgSrc('');
      } else {
        const blob = await response.blob();
        setImgSrc(URL.createObjectURL(blob));
      }
    } catch (err: any) {
      setErrorJson(`Network/CORS Error: Could not fetch graph.\nMake sure the equation is valid (e.g. x+y).`);
      setImgSrc('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="software">
      <h2 className="section-title text-gradient-accent">Software Ecosystem</h2>
      <p className="section-subtitle">
        Building scalable infrastructure, full-stack applications, and algorithmic logic.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Graphing API Live Demo (Side-by-side layout) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="royal-panel" style={{ gridColumn: '1 / -1', padding: '2rem' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            
            {/* Left Column: Text and Form */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
              <h3 className="text-blue" style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>Live Demo: Graphing API</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '600px' }}>
                A Python-based parametric graphing engine designed for rapid rendering of mathematical expressions.
              </p>
              
              <form onSubmit={handleGraphSubmit} style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '400px', flexWrap: 'wrap' }}>
                <input 
                  type="text" 
                  value={formula}
                  onChange={(e) => setFormula(e.target.value)}
                  placeholder="Enter equation (e.g., sin(x)+cos(y))"
                  style={{ flex: '1 1 200px', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--accent-lilac)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                />
                <button type="submit" className="pastel-btn btn-primary" disabled={loading} style={{ padding: '10px 16px' }}>
                  {loading ? '...' : 'Render'}
                </button>
              </form>
            </div>
            
            {/* Right Column: Graph Output */}
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px', 
                width: '100%', 
                maxWidth: '350px', 
                aspectRatio: '1 / 1',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                overflow: 'hidden',
                padding: errorJson ? '1rem' : '0'
              }}>
                {loading ? (
                  <p style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>Rendering...</p>
                ) : errorJson ? (
                  <pre style={{ color: '#ffb3b3', background: 'rgba(255,0,0,0.1)', padding: '1rem', borderRadius: '12px', width: '100%', height: '100%', overflow: 'auto', fontSize: '0.75rem', margin: 0 }}>
                    {errorJson}
                  </pre>
                ) : imgSrc ? (
                  <img 
                    src={imgSrc} 
                    alt="Graphing API Output" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'white' }}
                  />
                ) : null}
              </div>
            </div>

          </div>
        </motion.div>

        {/* Projects with bullet points */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="royal-card" style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Lazer Showdown</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Gamepad2 size={18} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Type:</span> Physics-based Puzzle Game
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Calendar size={18} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Event:</span> Developed for ARISE Tech Festival
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Cpu size={18} className="text-gold" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Core Mechanic:</span> Utilizes vector calculations and Cartesian grid logic.
              </p>
            </div>
          </div>
          <a href="https://denzven.github.io" target="_blank" className="pastel-btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: '1.5rem' }}>Play Build</a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="royal-card" style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h3 className="text-blue" style={{ marginBottom: '1rem' }}>Spyboy OSINT Ecosystem</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Globe size={18} className="text-blue" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Scale:</span> Deployed across 6,800+ Discord servers.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Terminal size={18} className="text-blue" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Role:</span> Core open-source contributor.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Target size={18} className="text-blue" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Focus:</span> Automated intelligence gathering & reconnaissance modules.
              </p>
            </div>
          </div>
          <a href="https://spyboy.in/" target="_blank" className="pastel-btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: '1.5rem' }}>View Ecosystem</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="royal-card" style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h3 className="text-rose" style={{ marginBottom: '1rem' }}>Object-Oriented Utilities</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Terminal size={18} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>PetGame:</span> Java-based robust state management application.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Cpu size={18} className="text-rose" style={{ marginTop: '4px', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Spotify Script:</span> Advanced DOM manipulation for automated screenshot generation.
              </p>
            </div>
          </div>
          <a href="https://github.com/denzven" target="_blank" className="pastel-btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: '1.5rem' }}>View GitHub</a>
        </motion.div>
      </div>
    </section>
  );
};

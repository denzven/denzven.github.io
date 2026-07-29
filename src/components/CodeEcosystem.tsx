import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CodeEcosystem: React.FC = () => {
  const [formula, setFormula] = useState('x+y');
  const [imgSrc, setImgSrc] = useState('http://denzven.pythonanywhere.com/DenzGraphingApi/v1/flat_graph/test/plot?formula=x%2By');
  const [loading, setLoading] = useState(false);
  const [errorJson, setErrorJson] = useState<string | null>(null);

  const handleGraphSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorJson(null);
    const encoded = encodeURIComponent(formula);
    const url = `http://denzven.pythonanywhere.com/DenzGraphingApi/v1/flat_graph/test/plot?formula=${encoded}`;
    
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
      // Fallback for CORS or network issues where we can't read the response
      setErrorJson(`Network/CORS Error: Could not fetch graph.\nMake sure the equation is valid (e.g. x+y).`);
      setImgSrc('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="software" className="section-container">
      <h2 className="section-title">Software Ecosystem & Algorithmic Logic</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Graphing API Live Demo */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="minimal-card" style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h3 className="text-neon-blue" style={{ marginBottom: '1rem' }}>Live Demo: Graphing API</h3>
          <form onSubmit={handleGraphSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', width: '100%', maxWidth: '500px' }}>
            <input 
              type="text" 
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              placeholder="Enter equation (e.g., x^2+y^2=10)"
              style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid var(--accent-neon-blue)', background: 'rgba(0,0,0,0.5)', color: 'white' }}
            />
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Rendering...' : 'Render Plot'}
            </button>
          </form>
          
          <div style={{ 
            background: 'white', 
            borderRadius: '8px', 
            width: '100%', 
            maxWidth: '500px', 
            aspectRatio: '1 / 1',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            overflow: 'hidden',
            padding: errorJson ? '1rem' : '0'
          }}>
            {loading ? (
              <p style={{ color: 'black', fontFamily: 'monospace' }}>Rendering Graph...</p>
            ) : errorJson ? (
              <pre style={{ color: '#dc2626', background: '#fee2e2', padding: '1rem', borderRadius: '4px', width: '100%', height: '100%', overflow: 'auto', fontSize: '0.8rem', margin: 0 }}>
                {errorJson}
              </pre>
            ) : imgSrc ? (
              <img 
                src={imgSrc} 
                alt="Graphing API Output" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            ) : null}
          </div>
          
          <p style={{ marginTop: '1rem', fontFamily: 'monospace', color: 'var(--accent-neon-green)' }}>
            &gt; Executing Graphing API. Powered by Python. Note: eval() is bad, but it works... Kinda...
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="minimal-card"
        >
          <h3 className="text-gold">Lazer Showdown</h3>
          <p>A strategic physics-based puzzle game built for ARISE festival. Utilizes vector calculations and Cartesian grid logic.</p>
          <a href="https://denzven.github.io" target="_blank" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Play Build</a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="minimal-card"
        >
          <h3 className="text-neon-green">Spyboy OSINT Ecosystem</h3>
          <p>Contributed to a massive open-source cybersecurity Discord bot deployed across 6,800+ servers. Built modules for reconnaissance and automation.</p>
          <a href="https://spyboy.in/" target="_blank" className="btn btn-secondary" style={{ marginTop: '1rem' }}>View Ecosystem</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-panel"
        >
          <h3 className="text-neon-blue">Object-Oriented Utilities</h3>
          <p>Created <em>PetGame</em> (Java) demonstrating state management, and <em>Spotify_Album_Cover_ScreenShot_Maker</em> (DOM manipulation).</p>
          <a href="https://github.com/denzven" target="_blank" className="btn btn-secondary" style={{ marginTop: '1rem' }}>View GitHub</a>
        </motion.div>
      </div>
    </section>
  );
};

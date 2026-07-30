import { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ChemicalBackground } from './components/ChemicalBackground';
import { HeroSection } from './components/HeroSection';
import { ChemicalProcess } from './components/ChemicalProcess';
import { CodeEcosystem } from './components/CodeEcosystem';
import { KineticArts } from './components/KineticArts';
import { Leadership } from './components/Leadership';
import { HireMeSection } from './components/HireMeSection';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => {
          preloader.remove();
        }, 800);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <CustomCursor />
      <ChemicalBackground />

      {/* Header */}
      <header style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, 
        background: 'rgba(10, 10, 26, 0.6)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ 
          maxWidth: '1200px', margin: '0 auto', padding: '0.75rem 2rem', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'white', letterSpacing: '-0.05em' }}>
            <a href="#hero" style={{ color: 'white', textDecoration: 'none' }}>Denzven.</a>
          </div>
          
          {/* Navigation Links */}
          <nav className="desktop-nav" style={{ gap: '2rem' }}>
            <a href="#engineering" className="nav-link">Engineering</a>
            <a href="#software" className="nav-link">Software</a>
            <a href="#arts" className="nav-link">Somatic Arts</a>
          </nav>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://github.com/denzven" target="_blank" rel="noreferrer" className="nav-link hover-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/denzven" target="_blank" rel="noreferrer" className="nav-link hover-white">
              LinkedIn
            </a>
            <a href="https://twitter.com/denzven" target="_blank" rel="noreferrer" className="nav-link hover-white">
              X
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="section-container">
        
        {/* Adds extra top padding to clear the fixed header */}
        <div style={{ marginTop: '4rem' }}>
          <HeroSection />
        </div>

        <ChemicalProcess />
        <CodeEcosystem />
        <KineticArts />
        <Leadership />
        <HireMeSection />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ 
            textAlign: 'center', 
            paddingTop: '2rem',
            paddingBottom: '2rem',
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.4rem', 
            color: 'var(--accent-lilac)',
            fontWeight: 500,
            letterSpacing: '1px'
          }}
        >
          Made with Love by Denzven 💜
        </motion.div>

      </main>

      <footer style={{ 
        position: 'relative', zIndex: 10, textAlign: 'center', 
        padding: '3rem 2rem', color: 'var(--text-muted)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        fontSize: '0.9rem', marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>Built with Google Antigravity & React.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '0.5rem 0' }}>
            <a href="https://github.com/denzven" target="_blank" rel="noreferrer" className="nav-link hover-white">GitHub</a>
            <span>&bull;</span>
            <a href="https://linkedin.com/in/denzven" target="_blank" rel="noreferrer" className="nav-link hover-white">LinkedIn</a>
          </div>
          <p style={{ margin: 0 }}>&copy; 2026 Denzven Ignatius Vadakkan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

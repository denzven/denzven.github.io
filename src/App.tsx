import { CustomCursor } from './components/CustomCursor';
import { Brain3D } from './components/Brain3D';
import { HeroSection } from './components/HeroSection';
import { ChemicalProcess } from './components/ChemicalProcess';
import { CodeEcosystem } from './components/CodeEcosystem';
import { KineticArts } from './components/KineticArts';
import { Leadership } from './components/Leadership';
import './App.css';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <CustomCursor />
      
      {/* 3D Brain Background (Fixed) */}
      <Brain3D />

      {/* Header */}
      <header style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, 
        background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
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
          <nav style={{ display: 'none', gap: '2rem', '@media (min-width: 768px)': { display: 'flex' } } as any} className="desktop-nav">
            <a href="#engineering" className="nav-link">Engineering</a>
            <a href="#software" className="nav-link">Software</a>
          </nav>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://github.com/denzven" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', textDecoration: 'none', fontWeight: 'bold' }} className="hover-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/denzven" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', textDecoration: 'none', fontWeight: 'bold' }} className="hover-white">
              LinkedIn
            </a>
            <a href="https://twitter.com/denzven" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', textDecoration: 'none', fontWeight: 'bold' }} className="hover-white">
              X
            </a>
          </div>
        </div>
      </header>

      {/* Scrollable Content overlaying the center */}
      <main style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          
        <HeroSection />
        <ChemicalProcess />
        <CodeEcosystem />
        <KineticArts />
        <Leadership />

      </main>

      <footer style={{ 
        position: 'relative', zIndex: 10, textAlign: 'center', 
        padding: '2rem', color: 'var(--text-muted)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        fontSize: '0.9rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>Built with Google Antigravity & Vite/React Ecosystem.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '1rem 0' }}>
            <a href="https://github.com/denzven" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="hover-white">GitHub</a>
            <span>&bull;</span>
            <a href="https://linkedin.com/in/denzven" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="hover-white">LinkedIn</a>
          </div>
          <p style={{ margin: 0 }}>&copy; 2026 Denzven Ignatius Vadakkan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';

export const HireMeSection: React.FC = () => {
  const [isBegging, setIsBegging] = useState(false);

  const [showPDF, setShowPDF] = useState(false);

  const handleBeg = () => {
    if (isBegging) return;
    setIsBegging(true);
    setTimeout(() => {
      setIsBegging(false);
    }, 4000);
  };

  // Generate particles for the flood
  const particles = Array.from({ length: 50 }).map((_, i) => {
    const emojis = ['🙏', '😭', '🥺', '💼', '🚀', '🙏', '😭'];
    return {
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 0.5,
      duration: 1.5 + Math.random() * 2,
    };
  });

  return (
    <section id="hire-me" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        onViewportEnter={() => {
          if (!isBegging) {
            setIsBegging(true);
            setTimeout(() => {
              setIsBegging(false);
            }, 4000);
          }
        }}
        className="royal-panel"
        style={{ padding: '3rem', textAlign: 'center', maxWidth: '800px', width: '90%', zIndex: 10, background: 'rgba(20, 10, 40, 0.6)' }}
      >
        <h2 className="text-gradient-rose" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Mujhe Job Dedo! 🥺</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          I have the skills, the passion, and the chemical equations. Now all I need is an offer letter! 
        </p>

        {/* CV Image Preview with 3D Flying In Animation on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: -150, scale: 0.7, rotateX: 30, rotateY: 15, rotateZ: -10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{
            width: '100%',
            marginTop: '3rem',
            transformOrigin: 'top center',
            perspective: '1200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          <div style={{
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.02)',
            minHeight: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src="/cv_preview.jpg" 
              alt="Denzven CV Preview" 
              style={{ width: '100%', display: 'block', objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<p style="color: var(--text-muted); padding: 3rem;">Please place cv_preview.jpg in the public folder!</p>';
              }}
            />
          </div>

          <a 
            href="/CH_Denzven_Ignatius_Vadakkan.pdf" 
            download="Denzven_Ignatius_Vadakkan_CV.pdf"
            className="pastel-btn btn-primary"
            style={{
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            Download Full PDF
          </a>
        </motion.div>
      </motion.div>

      {/* Flying CV Animation */}
      <AnimatePresence>
        {isBegging && (
          <motion.div
            initial={{ x: '-50vw', y: '20vh', rotate: -45, scale: 0 }}
            animate={{ 
              x: '150vw', 
              y: '-50vh',
              rotate: 360,
              scale: 2
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{ 
              position: 'absolute', 
              zIndex: 20, 
              pointerEvents: 'none',
              filter: 'drop-shadow(0 0 20px var(--accent-gold))'
            }}
          >
            <FileText size={100} color="var(--accent-gold)" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flood of Emojis */}
      <AnimatePresence>
        {isBegging && particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ bottom: '-10%', left: p.left, opacity: 0, scale: 0.5 }}
            animate={{ 
              bottom: '120%', 
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.5, 1],
              rotate: [0, Math.random() * 360 - 180]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: p.duration, 
              delay: p.delay, 
              ease: 'easeOut'
            }}
            style={{
              position: 'absolute',
              fontSize: '2rem',
              zIndex: 5,
              pointerEvents: 'none'
            }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

    </section>
  );
};

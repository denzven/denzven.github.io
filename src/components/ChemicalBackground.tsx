import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Hardcoded elements for variety
const FORMULAS = ['H₂SO₄', 'C₆H₆', 'CH₃OH', 'ΔH < 0', 'Re = 2100', 'C₂H₅OH', 'NaCl', 'CO₂', 'H₂O', 'NH₃', 'C₈H₁₈', 'ΔS > 0', 'PV = nRT', 'O₂', 'N₂'];
const COLORS = ['var(--accent-lilac)', 'var(--accent-gold)', 'var(--accent-rose)', 'var(--accent-blue)'];
const LABELS = ['T-101 Temp', 'Flow R-20', 'Pressure V1', 'Conversion', 'Viscosity', 'RPM Agitator', 'pH Level', 'Density', 'Conductivity', 'Catalyst wt%'];
const UNITS = ['°C', 'L/h', 'atm', '%', 'cP', 'rpm', '', 'g/mL', 'mS/cm', '%'];

const FloatingReading: React.FC<{ initialX: number, initialY: number, label: string, unit: string, baseValue: number, color: string, delay: number }> = ({ initialX, initialY, label, unit, baseValue, color, delay }) => {
  const [value, setValue] = useState(baseValue);

  // Tick the value slightly
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prev => {
        const variance = (Math.random() - 0.5) * (baseValue * 0.05);
        return Math.max(0, prev + variance);
      });
    }, 2000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [baseValue]);

  return (
    <motion.div
      initial={{ left: `${initialX}%`, top: `${initialY}%`, opacity: 0 }}
      animate={{ 
        top: [`${initialY}%`, `${initialY - 5}%`, `${initialY - 10}%`],
        left: [`${initialX}%`, `${initialX + 2}%`, `${initialX - 1}%`],
        opacity: [0, 0.4, 0]
      }}
      transition={{ 
        duration: 15 + Math.random() * 10, 
        repeat: Infinity, 
        delay: delay,
        ease: 'linear'
      }}
      style={{
        position: 'absolute',
        color: color,
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0
      }}
    >
      {label}: {value.toFixed(1)} {unit}
    </motion.div>
  );
};

const FloatingFormula: React.FC<{ formula: string, initialX: number, initialY: number, color: string, delay: number }> = ({ formula, initialX, initialY, color, delay }) => {
  return (
    <motion.div
      initial={{ left: `${initialX}%`, top: `${initialY}%`, opacity: 0, rotate: 0, scale: 0.8 }}
      animate={{ 
        top: [`${initialY}%`, `${initialY + 5}%`],
        left: [`${initialX}%`, `${initialX - 2}%`, `${initialX + 1}%`],
        opacity: [0, 0.3, 0],
        rotate: [0, 15, -10],
        scale: [0.8, 1.2, 0.9]
      }}
      transition={{ 
        duration: 20 + Math.random() * 10, 
        repeat: Infinity, 
        delay: delay,
        ease: 'linear'
      }}
      style={{
        position: 'absolute',
        color: color,
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.15
      }}
    >
      {formula}
    </motion.div>
  );
};

export const ChemicalBackground: React.FC = () => {
  // Generate a large number of random background elements that span the entire document height
  const elements = useMemo(() => {
    const readings = [];
    const formulas = [];
    
    // Generate 40 readings scattered across 100% of height and width
    for(let i = 0; i < 40; i++) {
      readings.push({
        id: `r-${i}`,
        x: Math.random() * 90, // 0-90% width
        y: Math.random() * 100, // 0-100% height of document
        label: LABELS[i % LABELS.length],
        unit: UNITS[i % UNITS.length],
        base: Math.random() * 500,
        color: COLORS[i % COLORS.length],
        delay: Math.random() * 20
      });
    }

    // Generate 50 formulas
    for(let i = 0; i < 50; i++) {
      formulas.push({
        id: `f-${i}`,
        x: Math.random() * 90,
        y: Math.random() * 100,
        formula: FORMULAS[i % FORMULAS.length],
        color: COLORS[i % COLORS.length],
        delay: Math.random() * 20
      });
    }

    return { readings, formulas };
  }, []);

  return (
    // Changed from position 'fixed' to 'absolute' so it spans full document height and scrolls naturally!
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
      
      {/* Ticking Readings */}
      {elements.readings.map(r => (
        <FloatingReading key={r.id} initialX={r.x} initialY={r.y} label={r.label} unit={r.unit} baseValue={r.base} color={r.color} delay={r.delay} />
      ))}

      {/* Floating Formulas */}
      {elements.formulas.map(f => (
        <FloatingFormula key={f.id} formula={f.formula} initialX={f.x} initialY={f.y} color={f.color} delay={f.delay} />
      ))}

      {/* Mini SVG Graph Decals - Fixed positions spaced throughout page */}
      <motion.svg 
        width="100" height="50" viewBox="0 0 100 50"
        initial={{ opacity: 0, left: '70%', top: '15%' }}
        animate={{ opacity: [0, 0.2, 0], left: ['70%', '65%'], top: ['15%', '10%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        style={{ position: 'absolute', stroke: 'var(--accent-gold)', strokeWidth: 2, fill: 'none', pointerEvents: 'none' }}
      >
        <path d="M0,25 Q10,5 20,25 T40,25 T60,25 T80,25 T100,25" />
      </motion.svg>
      
      <motion.svg 
        width="120" height="40" viewBox="0 0 120 40"
        initial={{ opacity: 0, left: '20%', top: '40%' }}
        animate={{ opacity: [0, 0.15, 0], left: ['20%', '25%'], top: ['40%', '45%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
        style={{ position: 'absolute', stroke: 'var(--accent-blue)', strokeWidth: 1.5, fill: 'none', pointerEvents: 'none' }}
      >
        <polyline points="0,40 20,30 40,35 60,10 80,15 100,5 120,0" />
      </motion.svg>
      
      <motion.svg 
        width="80" height="60" viewBox="0 0 80 60"
        initial={{ opacity: 0, left: '80%', top: '70%' }}
        animate={{ opacity: [0, 0.15, 0], left: ['80%', '75%'], top: ['70%', '75%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 8 }}
        style={{ position: 'absolute', stroke: 'var(--accent-rose)', strokeWidth: 1.5, fill: 'none', pointerEvents: 'none' }}
      >
        <polyline points="0,60 20,40 40,50 60,20 80,10" />
      </motion.svg>

    </div>
  );
};

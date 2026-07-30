import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Hexagon } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Inner Dot (Electron / Nucleus) */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          backgroundColor: 'var(--accent-lilac)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 12px var(--accent-lilac)'
        }}
      />
      {/* Outer Ring (Benzene Ring) */}
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 90 : 0,
          opacity: isHovering ? 0.7 : 1,
        }}
        transition={{ 
          scale: { duration: 0.2 },
          rotate: { duration: 0.4, ease: "backOut" },
          opacity: { duration: 0.2 }
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          width: 48,
          height: 48,
          pointerEvents: 'none',
          zIndex: 9998,
          translateX: '-50%',
          translateY: '-50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--accent-lilac)'
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Hexagon size={48} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </>
  );
};

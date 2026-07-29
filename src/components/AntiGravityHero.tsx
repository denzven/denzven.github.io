import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { motion } from 'framer-motion';
import { Mic, FlaskConical, Sheet, Swords, Palmtree } from 'lucide-react';

export const AntiGravityHero: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const [logMessages, setLogMessages] = useState<string[]>([
    '> System Initialized. Awaiting raw materials...'
  ]);

  const tokens = [
    { label: 'Microphone', icon: <Mic size={40} color="var(--accent-neon-blue)" /> },
    { label: 'Beaker', icon: <FlaskConical size={40} color="var(--accent-neon-green)" /> },
    { label: 'Excel', icon: <Sheet size={40} color="#10b981" /> },
    { label: 'Karate', icon: <Swords size={40} color="var(--accent-terracotta)" /> },
    { label: 'Kerala', icon: <Palmtree size={40} color="var(--accent-gold)" /> }
  ];

  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // We use a small timeout to ensure React has fully painted the DOM and layout dimensions are available
    const initTimer = setTimeout(() => {
      if (!sceneRef.current) return;

      // 1. Setup Matter.js Engine and World
      const engine = Matter.Engine.create();
      engine.gravity.y = 0; // Anti-gravity
      engine.gravity.x = 0;
      engineRef.current = engine;
      const world = engine.world;

      const width = sceneRef.current.clientWidth || window.innerWidth || 1000;
      const height = sceneRef.current.clientHeight || 600;

      // 2. Setup Renderer
      const render = Matter.Render.create({
        element: sceneRef.current,
        engine: engine,
        options: {
          width,
          height,
          wireframes: false,
          background: 'transparent',
        }
      });

    // 3. Create Boundaries
    const wallOptions = { isStatic: true, render: { fillStyle: 'transparent' } };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(width / 2, -50, width, 100, wallOptions),
      Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions),
      Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOptions),
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions),
    ]);

    // 4. Create The Reactor
    const reactorX = width / 2;
    const reactorY = height / 2 + 50;
    const reactorRadius = 80;
    const reactor = Matter.Bodies.circle(reactorX, reactorY, reactorRadius, {
      isStatic: true,
      isSensor: true,
      label: 'Reactor',
      render: {
        fillStyle: 'var(--bg-card)',
        strokeStyle: 'var(--accent-gold)',
        lineWidth: 4,
      }
    });
    Matter.World.add(world, reactor);

    // 5. Create Floating Tokens
    const tokenBodies = tokens.map((token) => {
      return Matter.Bodies.circle(
        Math.random() * (width - 100) + 50,
        Math.random() * (height - 100) + 50,
        40,
        {
          label: token.label,
          restitution: 0.9,
          frictionAir: 0.01,
          render: {
            fillStyle: 'var(--bg-dark)',
            strokeStyle: 'var(--accent-neon-green)',
            lineWidth: 2,
          }
        }
      );
    });
    Matter.World.add(world, tokenBodies);

    tokenBodies.forEach(body => {
      Matter.Body.applyForce(body, body.position, {
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05
      });
    });

    // 6. Setup Mouse Control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    let insideReactor = new Set<string>();

    // Animation loops
    Matter.Events.on(engine, 'beforeUpdate', () => {
      tokenBodies.forEach(body => {
        if (insideReactor.has(body.label)) {
          // Magnetic pull towards the reactor center
          const dx = reactorX - body.position.x;
          const dy = reactorY - body.position.y;
          Matter.Body.applyForce(body, body.position, {
            x: dx * 0.0001,
            y: dy * 0.0001
          });
          // High friction so it settles down
          Matter.Body.set(body, 'frictionAir', 0.05);
        } else {
          // Normal drifting outside the reactor
          Matter.Body.set(body, 'frictionAir', 0.01);
          if (Math.random() < 0.05) {
            Matter.Body.applyForce(body, body.position, {
              x: (Math.random() - 0.5) * 0.005,
              y: (Math.random() - 0.5) * 0.005
            });
          }
        }
      });
    });

    Matter.Events.on(engine, 'afterUpdate', () => {
      tokenBodies.forEach((body, i) => {
        if (iconRefs.current[i]) {
          iconRefs.current[i]!.style.transform = `translate(${body.position.x}px, ${body.position.y}px) rotate(${body.angle}rad)`;
        }
      });
    });

    // 7. Collision Detection

    Matter.Events.on(engine, 'collisionStart', (event) => {
      event.pairs.forEach(pair => {
        const { bodyA, bodyB } = pair;
        let tokenLabel = '';

        if (bodyA.label === 'Reactor' && tokenBodies.includes(bodyB as any)) {
          tokenLabel = bodyB.label;
        } else if (bodyB.label === 'Reactor' && tokenBodies.includes(bodyA as any)) {
          tokenLabel = bodyA.label;
        }

        if (tokenLabel) {
          insideReactor.add(tokenLabel);
          processCombinations(Array.from(insideReactor));
        }
      });
    });

    Matter.Events.on(engine, 'collisionEnd', (event) => {
      event.pairs.forEach(pair => {
        const { bodyA, bodyB } = pair;
        if (bodyA.label === 'Reactor') insideReactor.delete(bodyB.label);
        if (bodyB.label === 'Reactor') insideReactor.delete(bodyA.label);
      });
    });

    const processCombinations = (currentItems: string[]) => {
      const has = (item: string) => currentItems.includes(item);
      let message = `> Added ${currentItems[currentItems.length - 1]} to Reactor...`;

      if (has('Excel') && has('Karate')) {
        message = "> Process Log: Pivot table successfully Karate-chopped into organized data!";
      } else if (has('Beaker') && has('Kerala')) {
        message = "> Process Log: Distilling pure coconut oil at optimum reflux ratio. Smell the nostalgia.";
      } else if (has('Microphone') && has('Beaker')) {
        message = "> Process Log: Now enthusiastically narrating a highly volatile exothermic reaction to a live audience!";
      } else if (has('Microphone') && has('Karate')) {
        message = "> Process Log: Providing live color-commentary for my own Kata routine!";
      } else if (currentItems.length === 5) {
        message = "> SYSTEM OVERLOAD! Jack of all trades achieved. Master of none, but better than one. Portfolio unlocked!";
      }

      setLogMessages(prev => {
        const newLogs = [...prev, message];
        if (newLogs.length > 5) newLogs.shift();
        return newLogs;
      });
    };

    // Run Engine and Renderer
    Matter.Runner.run(engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
    }, 100);

    return () => clearTimeout(initTimer);
  }, []);

  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '100px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
          "A Jack of all trades is a master of none..."
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
          ...but oftentimes better than a master of one.
        </h2>
        <p className="tech-font" style={{ marginTop: '1rem', color: 'var(--accent-neon-green)' }}>
          Drag the floating skills into the Process Reactor.
        </p>
      </motion.div>

      {/* Physics Container Wrapper */}
      <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '16px', border: 'var(--glass-border)', background: 'var(--bg-dark)', overflow: 'hidden' }}>
        
        {/* The Matter.js Canvas Container (Empty so Matter.js can mount its canvas alone) */}
        <div ref={sceneRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
        
        {/* React UI Overlays (Pointer events none so mouse events pass to canvas) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          
          {/* Reactor Label */}
          <div style={{
            position: 'absolute',
            top: 'calc(50% + 50px)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px var(--accent-gold))' }}>⚗️</div>
            <div className="tech-font" style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>REACTOR</div>
          </div>
          
          {/* Floating Icons */}
          {tokens.map((token, i) => (
            <div
              key={i}
              ref={el => { iconRefs.current[i] = el; }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '80px',
                height: '80px',
                marginLeft: '-40px',
                marginTop: '-40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                borderRadius: '50%',
                border: '2px solid var(--accent-neon-green)',
                boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)'
              }}
            >
              {token.icon}
            </div>
          ))}

        </div>
      </div>

      <div className="glass-panel" style={{ marginTop: '2rem', background: '#000', border: '1px solid var(--accent-neon-green)' }}>
        <h3 className="tech-font text-neon-green" style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(57, 255, 20, 0.3)', paddingBottom: '0.5rem' }}>
          ~/process_log.exe
        </h3>
        <div className="tech-font text-neon-green" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minHeight: '120px' }}>
          {logMessages.map((log, index) => (
            <div key={index} style={{ opacity: index === logMessages.length - 1 ? 1 : 0.6 }}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import './GradualSpacing.css'; 

export function GradualSpacing({ text,color,fontSize }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const baseDelay = 1;

  return (
    <div className="gradual-spacing-container">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.span
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.1, delay:  baseDelay +i * 0.1 }}
            className="gradual-spacing-letter"
            style={{color:color,fontSize:fontSize}}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

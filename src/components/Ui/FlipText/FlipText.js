import React, {useEffect} from 'react'
import { motion,useAnimation  } from "framer-motion";
import './FlipText.css'; 

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ children}) => {
    const controls = useAnimation();
  const letters = children.split("");
  
  useEffect(() => {
    const interval = setInterval(async () => {
      await controls.start("hovered");
      await controls.start("initial");
    }, 4000); 

    return () => clearInterval(interval);
  }, [controls]);
    return (
        <motion.a
      className="flip-text-link"
      onMouseEnter={() => controls.start("hovered")}
      onMouseLeave={() => controls.start("initial")}
    >
            <div>
            {letters.map((l, i) => (
          <motion.span
            key={`front-${i}`}
            className="flip-letter"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            animate={controls}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            style={{ marginRight: l === " " ? "0.25em" : undefined }}
          >
            {l}
          </motion.span>
        ))}
            </div>
            <div className="flip-overlay">
            {letters.map((l, i) => (
          <motion.span
            key={`back-${i}`}
            className="flip-letter"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            animate={controls}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            style={{ marginRight: l === " " ? "0.25em" : undefined }}
          >
            {l}
          </motion.span>
        ))}
            </div>
        </motion.a>
    );
}

export default FlipText;

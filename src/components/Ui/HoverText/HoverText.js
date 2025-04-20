import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import './HoverText.css'; 

const HoverText = ({ children }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };
  const words = children.split(" ");

  return (
    <motion.a
    ref={ref}
    onMouseMove={handleMouseMove}
    initial="initial"
    whileHover="whileHover"
    className="hover-text-link"
  >
    <motion.div
      className="hover-text-heading"
      variants={{
        initial: { x: 0 },
        whileHover: { x: -16 },
      }}
      transition={{
        type: "spring",
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="hover-text-word">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`letter-${wordIndex}-${letterIndex}`}
              className="hover-text-letter"
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{
                type: "spring",
                delay: 0.025 * (wordIndex * 10 + letterIndex),
              }}
            >
              {letter}
            </motion.span>
          ))}
          <span className="hover-text-space">&nbsp;</span>
        </span>
      ))}
    </motion.div>
  </motion.a>
  );
};

export default HoverText;

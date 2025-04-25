import { motion, useMotionValue} from "framer-motion";
import { useRef, useState } from "react";
import './HoverText.css'; 

const HoverText = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [animationState, setAnimationState] = useState("initial");

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleTouchStart = () => {
    setAnimationState("whileHover");
  };

  const handleTouchEnd = () => {
    setAnimationState("initial");
  };

  const words = children.split(" ");

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setAnimationState("whileHover")}
      onMouseLeave={() => setAnimationState("initial")}
      className="hover-text-link"
    >
      <motion.div
        className="hover-text-heading"
        animate={animationState}
        variants={{
          initial: { x: 0 },
          whileHover: { x: -16 },
        }}
        transition={{ type: "spring" }}
      >
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="hover-text-word">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`letter-${wordIndex}-${letterIndex}`}
                className="hover-text-letter"
                animate={animationState}
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

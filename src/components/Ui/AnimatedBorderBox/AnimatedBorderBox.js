import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AnimatedBorderBox.css";
import {Box} from "@mui/material";

export default function AnimatedBorderBox({ children }) {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!divRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    });

    resizeObserver.observe(divRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    
    <div className="container" ref={divRef}>
      <motion.svg
        className="svg-border"
        viewBox={`0 0 ${dimensions.width + 20} ${dimensions.height + 20}`}
      >
        <svg className="neon" x={10} y={10}>
          <motion.path
            d={`M 0 0 h ${dimensions.width} v ${dimensions.height} h -${dimensions.width} v -${dimensions.height}`}
            stroke="#A7E92D"
            strokeWidth="3"
            fill="none"
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.svg>
      
      <Box sx={{ 
        display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
        //        position: "relative",
        //        borderRadius: "24px",
                paddingTop: "16px",
                paddingBottom: "16px",
                zIndex: 1,
        //        "&::before": {
        //          content: '""',
        //          position: "absolute",
        //          inset: 0,
        //          padding: "2px",
        //          borderRadius: "inherit",
        //          background:
        //            "linear-gradient(143.61deg, #A7E92D -16.22%, #222F09 42.86%, rgba(167, 233, 45, 0.8) 101.93%)",
        //          WebkitMask:
        //            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", 
        //          maskComposite: "exclude",
        //          zIndex: -1,
        //        }
                }}>{children}</Box>
    </div>
  );
}


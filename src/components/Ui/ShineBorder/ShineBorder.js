import { clsx as cn } from 'clsx';
import './ShineBorder.css';
import {Box} from '@mui/material';

export default function ShineBorder({
  duration = 12,
  color,
  className,
  children,
}) {
  const backgroundGradient = `radial-gradient(transparent,transparent, ${
    Array.isArray(color) ? color.join(",") : color
  },transparent,transparent)`;

  return (
    <Box
      className={cn("shine-border-container", className)}
    >
      <div
        style={{
          '--border-width': `2px`,
          '--border-radius': `12px`,
          '--duration': `${duration}s`,
          '--mask-linear-gradient': `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          '--background-radial-gradient': backgroundGradient,
        }}
        className="shine-border-effect"
      ></div>
      {children}
    </Box>
  );
}

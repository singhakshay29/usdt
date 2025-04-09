import {
    motion
  } from "framer-motion";
export const Transition = ({
    initial,
    whileInView,
    transition,
    ...rest
  }) => {
    const init = initial ? initial : { opacity: 0 };
    const inView = whileInView ? whileInView : { opacity: 1 };
    const trans = transition ? transition : { duration: 0.8, delay: 0.4 };
  
    return (
      <motion.div
        initial={init}
        whileInView={inView}
        transition={trans}
        {...rest}
      />
    );
  };
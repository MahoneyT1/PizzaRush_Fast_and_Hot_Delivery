import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const RouteTransition = ({ children }) => {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const transition = {
    type: "spring",
    stiffness: 50,
    damping: 20,
    duration: 0.5,
  };

  return (
    <motion.div
      key={location.pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default RouteTransition;

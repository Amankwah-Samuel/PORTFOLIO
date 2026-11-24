import React from "react";
import { motion } from "framer-motion";

/** Subtle fade-up used for every section block. */
const Reveal = ({ children, delay = 0, as = "div", className, ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

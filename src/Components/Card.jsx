import React from "react";
import { motion } from "framer-motion";
import "../Styles/Card.css";

const Card = ({ icon, heading, info }) => {
  return (
    <motion.div
      className="service-card"
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="service-icon">
        {icon}
      </div>

      <h3>{heading}</h3>

      <p>{info}</p>

      <span className="learn-more">
        Learn More →
      </span>
    </motion.div>
  );
};

export default Card;

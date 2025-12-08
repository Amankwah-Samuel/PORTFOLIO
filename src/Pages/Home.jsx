import React from "react";
import { motion } from "framer-motion";
import "../Styles/Home.css";
import coder from "../assets/coder2.jpg";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        {/* LEFT */}
        <motion.div
          className="hero-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Hey, I'm</h3>
          <h1>Samuel Ntem Amankwah </h1>
          <h2>Junior Software Developer</h2>

          <p className="hero-desc">
            I build clean, modern and efficient software — specializing in
            full-stack development and user-friendly interfaces.
          </p>

          <div className="hero-buttons">
            <a href="/CV.pdf" download="Samuel-Kofi-Ntem-CV.pdf">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn primary-btn"
              >
                Download CV
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn secondary-btn"
              >
                Hire Me
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={coder} alt="samuel-kofi" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;

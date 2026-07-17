import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import "../Styles/Home.css";
import coder from "../assets/coder2.jpg";

const techStack = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaGithub />, name: "GitHub" },
];

const Home = () => {
  return (
    <section id="home" className="home-container">
      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="hero-content">
        {/* LEFT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="status-badge"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="status-dot"></span>
            Available for Internship & Freelance 
          </motion.div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Samuel <span>Amankwah</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-desc">
            I design and build responsive, scalable and user-focused web
            applications using modern technologies. Passionate about creating
            intuitive digital experiences with clean code and elegant UI.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a
              href="/AMANKWAH SAMUEL KOFI NTEM (CV)-FINAL.pdf"
              download="Samuel-Kofi-Ntem-CV.pdf"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn primary-btn"
              >
                <FaDownload />
                Download CV
              </motion.button>
            </a>

            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn secondary-btn"
              >
                View Projects
                <FaArrowRight />
              </motion.button>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <motion.div
                className="tech-pill"
                key={index}
                whileHover={{ y: -6 }}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div>
              <h3>15+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>6+</h3>
              <p>Technologies</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Commitment</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image-circle"></div>

          <img src={coder} alt="Samuel Amankwah" />

          <motion.div
            className="floating-card card1"
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            ⚛ React
          </motion.div>

          <motion.div
            className="floating-card card2"
            animate={{ y: [8, -8, 8] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            🚀 Node.js
          </motion.div>

          <motion.div
            className="floating-card card3"
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            🍃 MongoDB
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span>Scroll Down</span>
        <div className="mouse"></div>
      </motion.div>
    </section>
  );
};

export default Home;
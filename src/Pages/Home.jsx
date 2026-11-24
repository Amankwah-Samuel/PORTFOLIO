import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import "../Styles/Home.css";
import portrait from "../assets/kofi.png";

const stats = [
  { value: "10+", label: "Projects built" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

const ease = [0.22, 1, 0.36, 1];

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="status-badge">
            <span className="status-dot" />
            Available for internships &amp; freelance
          </span>

          <h1>
            Samuel Kofi Ntem <span>Amankwah.</span>
          </h1>

          <p className="hero-role">Full Stack Developer</p>

          <p className="hero-desc">
            I design and build responsive, scalable web applications with clean
            code and thoughtful interfaces — from React front ends to Node.js
            and Django back ends.
          </p>

          <div className="hero-buttons">
            <a
              href="/AMANKWAH SAMUEL KOFI NTEM (CV)-FINAL.pdf"
              download="Samuel-Kofi-Ntem-CV.pdf"
              className="btn btn-primary"
            >
              <FaDownload /> Download CV
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Projects <FaArrowRight />
            </a>
          </div>

          <dl className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
        >
          <div className="portrait">
            <img src={portrait} alt="Samuel Amankwah at work" />
          </div>

          <motion.div
            className="float-card float-a"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
          >
            <span className="float-icon">
              <HiAcademicCap />
            </span>
            <div>
              <strong>Computer Science</strong>
              <small>University of Ghana</small>
            </div>
          </motion.div>

          <motion.div
            className="float-card float-b"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.65 }}
          >
            <span className="float-icon">
              <FaMapMarkerAlt />
            </span>
            <div>
              <strong>Accra, Ghana</strong>
              <small>Open to remote</small>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

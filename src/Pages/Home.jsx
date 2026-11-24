import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import "../Styles/Home.css";

const stats = [
  { value: "10+", label: "Projects built" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

const ease = [0.22, 1, 0.36, 1];

const Home = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="container hero-inner"
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
          code and thoughtful interfaces — from React front ends to Node.js and
          Django back ends.
        </p>

        <ul className="hero-meta">
          <li>
            <HiAcademicCap /> Computer Science, University of Ghana
          </li>
          <li>
            <FaMapMarkerAlt /> Accra, Ghana
          </li>
        </ul>

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
    </section>
  );
};

export default Home;

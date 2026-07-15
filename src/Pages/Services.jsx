import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaDatabase,
  FaAws,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

import "../Styles/Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">

      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          Tech Stack
        </span>

        <h2>
          Technologies I
          <span> Work With</span>
        </h2>

        <p>
          These are the technologies I use to build responsive,
          scalable and modern web applications.
        </p>

      </motion.div>

      <div className="tech-grid">

        <motion.div
          className="tech-card"
          whileHover={{ y: -8 }}
        >

          <h3>Frontend</h3>

          <div className="tech-list">

            <span><FaReact /> React</span>

            <span><FaJsSquare /> JavaScript</span>

          </div>

        </motion.div>

        <motion.div
          className="tech-card"
          whileHover={{ y: -8 }}
        >

          <h3>Backend</h3>

          <div className="tech-list">

            <span><FaPython /> Python</span>

            <span><SiDjango /> Django</span>

          </div>

        </motion.div>

        <motion.div
          className="tech-card"
          whileHover={{ y: -8 }}
        >

          <h3>Databases</h3>

          <div className="tech-list">

            <span><SiMongodb /> MongoDB</span>

            <span><SiMysql /> MySQL</span>

            <span><SiPostgresql /> PostgreSQL</span>

          </div>

        </motion.div>

        <motion.div
          className="tech-card"
          whileHover={{ y: -8 }}
        >

          <h3>Cloud</h3>

          <div className="tech-list">

            <span><FaAws /> AWS Cloud</span>

          </div>

        </motion.div>

      </div>

      <motion.div
        className="learning-box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .3 }}
        viewport={{ once: true }}
      >

        <h3>Always Learning 🚀</h3>

        <p>
          I'm continuously improving my development skills by
          building projects, exploring new technologies,
          and learning industry best practices.
        </p>

      </motion.div>

    </section>
  );
};

export default Services;
import React from "react";
import "../Styles/About.css";
import kofiImage from "../assets/kofi.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about-container"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="about-card">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-image-wrapper"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={kofiImage}
            alt="profile"
            className="about-img"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          className="about-text"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-title">About Me</h2>

          <p>
            I'm <strong>Samuel Kofi Ntem Amankwah</strong>, a passionate Level 300
            Computer Science student at the University of Ghana. I’m driven by
            the desire to build meaningful and innovative software solutions
            that solve real-world problems.
          </p>

          <p>
            Over the years, I have  developed a strong foundation in software
            development and continuously push myself to learn new technologies
            and refine my craft. This portfolio showcases my journey,
            experiences, and the projects that reflect my growth as a developer.
          </p>

          <p>
            I’m always excited to collaborate, build impactful systems, and
            take on challenges that bring out creativity, skill and excellence.
          </p>

          <div className="about-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

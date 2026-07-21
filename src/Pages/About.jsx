import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import "../Styles/About.css";
import kofiImage from "../assets/kofi.png";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaGithub />, name: "Git & GitHub" },
];

const About = () => {
  return (
    <section className="about-container" id="about">

      <div className="about-bg-circle one"></div>
      <div className="about-bg-circle two"></div>

      <div className="about-wrapper">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="image-glow"></div>

          <img
            src={kofiImage}
            alt="Samuel Amankwah"
            className="about-image"
          />

          <div className="experience-card">
            <h3>15+</h3>
            <p>Completed Projects</p>
          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            About Me
          </span>

          <h2>
            Passionate About Building
            <span> Modern Digital Experiences.</span>
          </h2>

          <p className="about-description">
            I'm <strong>Samuel Kofi Ntem Amankwah</strong>,
            a Computer Science student at the University of Ghana
            with a passion for creating scalable, responsive,
            and user-friendly software solutions.
          </p>

          <p className="about-description">
            I enjoy transforming ideas into real-world
            applications through clean architecture,
            intuitive interfaces, and modern technologies.
            Every project I build is an opportunity to
            improve my problem-solving skills and create
            experiences that users genuinely enjoy.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <h3>10+</h3>
              <p>Projects and builds</p>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <p>Dedication</p>
            </div>

          </div>

          <div className="skills-container">

            {skills.map((skill, index) => (

              <motion.div
                key={index}
                className="skill-pill"
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>

            ))}

          </div>
                    {/* What I Do */}
          <div className="about-services">

            <motion.div
              className="service-card"
              whileHover={{ y: -8 }}
            >
              <FaCode className="service-icon" />

              <h4>Frontend Development</h4>

              <p>
                Building modern, responsive and visually
                appealing interfaces using React,
                JavaScript and modern CSS.
              </p>
            </motion.div>

            <motion.div
              className="service-card"
              whileHover={{ y: -8 }}
            >
              <FaLaptopCode className="service-icon" />

              <h4>Backend Development</h4>

              <p>
                Developing secure REST APIs and scalable
                server-side applications with Node.js,
                Express and MongoDB.
              </p>
            </motion.div>

          </div>

          {/* Buttons */}

          <div className="about-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;
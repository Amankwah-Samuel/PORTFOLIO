import React from "react";
import "../Styles/Home.css";
import coder from "../assets/coder2.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home-main"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-sections">
        {/* Left Section */}
        <motion.div
          className="home-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <b>HELLO,</b>
          <p>I AM SAMUEL KOFI NTEM AMANKWAH,</p>
          <p>A JUNIOR SOFTWARE DEVELOPER</p>
          <b>WELCOME</b>
          <p>THIS IS MY PORTFOLIO</p>

          <div className="resume">
            <b>DOWNLOAD RESUME HERE</b>
            <a href="/CV.pdf" download="Samuel-Kofi-Ntem-CV.pdf">
              <motion.button
                className="button-wrapper"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DOWNLOAD
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="home-right"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={coder} alt="samuel kofi" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;

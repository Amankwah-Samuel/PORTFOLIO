import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">

      <nav className="navbar">

        <motion.a
          href="#home"
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          Samuel<span>.</span>
        </motion.a>

        <ul className={`nav-menu ${isOpen ? "show" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={closeMenu}>
              Tech Stack
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

        </ul>

        <motion.a
          href="#contact"
          className="hire-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
        >
          Hire Me
        </motion.a>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </nav>

    </header>
  );
};

export default Navbar;
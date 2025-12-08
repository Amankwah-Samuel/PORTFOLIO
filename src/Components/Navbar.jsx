import React, { useState } from "react";
import "../Styles/Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="nav-left">
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>

          <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
            <li><a onClick={closeMenu} href="#home">Home</a></li>
            <li><a onClick={closeMenu} href="#services">Services</a></li>
            <li><a onClick={closeMenu} href="#about">About</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact</a></li>
          </ul>
        </div>

        <motion.a
          href="#contact"
          className="nav-link"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          LET'S LINK UP
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;

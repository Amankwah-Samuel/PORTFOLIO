import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">

        <div className="social-icons">
          <a href="https://www.facebook.com/share/1AP8w2D8Mj/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/digginssammy/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/233537387548" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/samuel-amankwah-785341323?" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Samuel Amankwah • All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import "../Styles/Footer.css";

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Amankwah-Samuel" },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-amankwah-785341323",
  },
  { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/digginssammy/" },
  { icon: <FaFacebook />, label: "Facebook", href: "https://www.facebook.com/share/1AP8w2D8Mj/" },
  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/233537387548" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo">
            Samuel<span>.</span>
          </a>
          <p>Full Stack Developer · Accra, Ghana</p>
        </div>

        <div className="footer-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Samuel Kofi Ntem Amankwah. All rights reserved.</p>
        <a href="#home" className="to-top">
          Back to top <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar container" aria-label="Main">
        <a href="#home" className="logo" onClick={closeMenu}>
          Samuel<span>.</span>
        </a>

        <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={closeMenu}
                className={active === l.href ? "active" : ""}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
              Hire Me
            </a>
          </li>
        </ul>

        <a href="#contact" className="hire-btn">
          Hire Me
        </a>

        <button
          className="menu-btn"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

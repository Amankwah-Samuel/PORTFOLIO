import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import "../Styles/Contact.css";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-bg one"></div>
      <div className="contact-bg two"></div>

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <span className="section-badge">
          Contact Me
        </span>

        <h2>
          Let's Build Something
          <span> Amazing Together.</span>
        </h2>

        <p>
          Whether you have a project, internship opportunity,
          collaboration or just want to say hello,
          I'd love to hear from you.
        </p>

      </motion.div>

      <div className="contact-wrapper">

        {/* LEFT */}

        <motion.div
          className="contact-left"
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="image-glow"></div>

          <img
            src={contactImage}
            alt="Contact Samuel"
          />

          <div className="availability-card">

            <h3>Currently Available</h3>

            <p>
              Open to internships,
              freelance opportunities
              and exciting collaborations.
            </p>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="contact-right"
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <form className="contact-form">

            <div className="form-row">

              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

            </div>

            <div className="input-group">

              <label>Subject</label>

              <input
                type="text"
                placeholder="Project Discussion"
              />

            </div>

            <div className="input-group">

              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>

            </div>

            <button className="send-btn">

              <FaPaperPlane />

              Send Message

            </button>

          </form>
                    {/* Contact Information */}

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope className="info-icon" />

              <div>
                <h4>Email</h4>

                <a href="mailto:samuelamankwah157@gmail.com">
                  samuelamankwah157@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="info-icon" />

              <div>
                <h4>Phone</h4>

                <p>+233 537 387 548</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />

              <div>
                <h4>Location</h4>

                <p>Accra, Ghana</p>
              </div>
            </div>

          </div>

          {/* Social Links */}

          <div className="social-links">

            <a
              href="https://github.com/Amankwah-Samuel"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;
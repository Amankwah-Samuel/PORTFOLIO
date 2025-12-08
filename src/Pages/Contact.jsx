import React, { useEffect } from "react";
import "../Styles/Contact.css";
import contactImage from "../assets/contact.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <h1 data-aos="fade-down">Let’s Work Together</h1>

      <div className="contact-wrapper">
        
        {/* IMAGE */}
        <div className="contact-image" data-aos="zoom-in">
          <img src={contactImage} alt="Contact" />
        </div>

        {/* CONTACT FORM + INFO */}
        <div className="contact-container" data-aos="fade-up">
          <div className="contact-form">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Samuel Amankwah" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows={4}></textarea>
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="e.g. +233 555 000 000" />
            </div>

            <button className="send-btn">Send Message</button>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-info" data-aos="fade-left">
            <div className="info-box">
              <FaEnvelope />
              <div>
                <b>Email</b>
                <a href="mailto:samuelamakwah157@gmail.com">
                  samuelamakwah157@gmail.com
                </a>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt />
              <div>
                <b>Phone</b>
                +233 537 387 548
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />
              <div>
                <b>Location</b>
                Accra • Takoradi • Ghana
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

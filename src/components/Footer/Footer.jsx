import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>WORLD ATLAS</h2>
          <p>
            Explore countries, flags, and facts from around the globe in one
            unified platform.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/country">Country</NavLink>
            </li>
            <li>
              <NavLink to="/contact">ContactUs</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: aayushbharda999@gmail.com</p>
          <p>Phone: +91 9167541096</p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ECOMMERCE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

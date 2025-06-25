import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar-container ${scrolled ? "glass" : ""}`}>
        <div className="nav-left">WorldAtlas</div>

        <div className="nav-right">
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

        <div className="mobile-nav" onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu className="hamburger" />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>
        <ul>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/country" onClick={() => setMenuOpen(false)}>
              Country
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              ContactUs
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

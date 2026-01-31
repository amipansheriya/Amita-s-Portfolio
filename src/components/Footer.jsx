import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-text">
          © {new Date().getFullYear()} Amita Pansheriya. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

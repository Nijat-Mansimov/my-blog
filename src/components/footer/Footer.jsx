import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
      MANSIMOV
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nijat-mansimov-9a4b59212/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Nijat-Mansimov">
          <GoMarkGithub />
        </a>
        <a href="https://www.instagram.com/nijatmansimov/">
          <AiFillInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MANSIMOV. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

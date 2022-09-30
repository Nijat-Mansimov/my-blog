import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nijat-mansimov-9a4b59212/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Nijat-Mansimov">
        <GoMarkGithub />
      </a>
      <a href="https://www.instagram.com/mansimov.dev/" target="_blank">
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;

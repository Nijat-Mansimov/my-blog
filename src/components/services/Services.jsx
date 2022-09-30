import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>SMM Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Management of social media accounts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Verification of Instagram, Facebook, TikTok accounts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Management of social media accounts</p>
            </li>
            
            <li>
              <BiCheck className="service__list-icon-1" />
              <p>Distribution of articles on wikipedia and famous foreign websites</p>
            </li>
          </ul>
        </article>
          {/* WEB  */}
        <article className="service">
          <div className="service__head">
            <h3> Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Coding of personal and business websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Coding websites in responsive design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Preparation of designs according to standards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of web applications</p>
            </li>
          </ul>
        </article>
        {/* personal training courses */}
        <article className="service">
          <div className="service__head">
            <h3>Personal Training Courses</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Python Fundamentals courses</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML,CSS courses</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript courses</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React JS courses</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Node JS courses</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

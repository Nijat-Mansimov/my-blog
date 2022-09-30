import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>React Blog site</h3>
          <a
            href="https://github.com/Nijat-Mansimov/react-blog-project"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>E-commerce website design</h3>
          <a
            href="https://github.com/Nijat-Mansimov/e-commerce-design"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Authentication and Authorization proccess</h3>
          <a
            href="https://github.com/Nijat-Mansimov/authentication-and-authorization-with-jwt"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>App for Get Film name and director</h3>
          <a
            href="https://github.com/Nijat-Mansimov/NetflixClone"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Translator with Ajax</h3>
          <a
            href="https://github.com/Nijat-Mansimov/ajax-translator"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>FPS Game with Python</h3>
          <a
            href="https://github.com/Nijat-Mansimov/fpsGame"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import "./Home.css";
import banner from "../Assets/banner.jpg";
import profile from "../Assets/profile.jpeg";
import Projects from "../Components/Projects";
import Typewriter from "typewriter-effect";
import Particle from "../Components/Particle";

function Home() {
  return (
    <div>
      <section id="nav-bar" class="container">
        <header class="nav-bar">
          <div class="brand">
            <a href="#prathikshetty">
              <h1>PRATHEEK SHETTY</h1>
            </a>
          </div>
          <div class="nav-list">
            {/* <div class="hamburger">
							<div class="bar"></div>
						</div> */}
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a href="#hire">Contact</a>
              </li>
            </ul>
          </div>
        </header>
      </section>
      {/* <!-- End nav-bar  --> */}

      {/* <!-- Hero Section  --> */}
      <section id="hero" class="hero container">
        <div class="hero-info">
          <h1 class="hero-info-heading">Hey</h1>
          <p class="hero-info-subheading">
            <Typewriter
              options={{
                strings: ["This is", "Pratheek Shetty"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <a href="#" type="button" class="hero-info-button">
            Portfolio
          </a>
        </div>
        <div class="hero-img">
          <img src={banner} alt="" />
        </div>
      </section>
      {/* <!-- End Hero Section  --> */}

      {/* <!-- About section  --> */}
      <section id="about" class="about container">
        <div class="about-info">
          <h1 class="about-info-heading">About Me</h1>
          <p class="about-info-desc">
            I am a Fullstack developer capable of Building both Web Apps and
            Mobile Apps and skilled with the Technologies like React js, React
            Native , Front End development using HTML,CSS,BOOTSTRAP. and Backend
            Technologies like Node.js and core JavaScript.And expert in Mongodb
            and JS Authentications
          </p>
          <a href="#" type="button" class="about-info-button">
            B in B{" "}
          </a>
        </div>
        <div class="about-img">
          <div class="about-img-wrapper">
            <img src={profile} alt="" />
          </div>
        </div>
        <Particle />
      </section>
      {/* <!-- End About section  --> */}

      {/* <!-- Service Section  --> */}
      <section id="services" class="services container">
        <div class="services-header">
          <h1 class="services-header-heading">services</h1>
          <p class="services-header-desc">
            Web Applications and Mobile Applications development
          </p>
        </div>
        <div class="services-info">
          <div class="service">
            <div class="service-card">
              <div class="service-front">
                <i class="fa fa-palette"></i>
                <h1 class="service-front-heading">Web Design</h1>
              </div>
              <div class="service-back">
                <h1 class="service-back-heading">Web Design</h1>
                <p class="service-back-desc">
                  Web design refers to the design of websites that are displayed
                  on the internet. It usually refers to the user experience
                  aspects of website development rather than software developmen
                </p>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="service-card">
              <div class="service-front">
                <i class="fa fa-laptop-code"></i>
                <h1 class="service-front-heading">Font End Dev</h1>
              </div>
              <div class="service-back">
                <h1 class="service-back-heading">Front End Dev</h1>
                <p class="service-back-desc">
                  Front-end web development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website or Web Application so that a user can
                  see and interact with them directly
                </p>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="service-card">
              <div class="service-front">
                <i class="fa fa-building"></i>
                <h1 class="service-front-heading">Mobile Application</h1>
              </div>
              <div class="service-back">
                <h1 class="service-back-heading">Mobile Application</h1>
                <p class="service-back-desc">
                  Mobile Application development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website or Web Application so that a user can
                  see and interact with them directly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        {" "}
        <Projects />
      </section>

      {/* <!-- End Service Section  --> */}

      {/* <!-- Hire Section  --> */}
      <section id="hire" class="hire container">
        <h1 class="hire-heading">Hire me to build your dream website</h1>
        <a
          href="mailto:prathikshetty366@gmail.com"
          type="button"
          class="hire-button"
        >
          Let's Go !!
        </a>
      </section>
      {/* <!-- End Hire Section  --> */}

      {/* <!-- Footer section  --> */}
      <footer id="footer" class="footer container">
        <div class="footer-contact">
          <h1 class="footer-contact-heading">Contact Details</h1>
          <p class="footer-contact-info">Email: prathikshetty366@gamil.com</p>
          <p class="footer-contact-info">Mobile: 948 0300 096</p>
        </div>
        <div class="footer-social-follow">
          {/* <h1 class="footer-social-follow-heading">Follow Me</h1> */}
          <div class="footer-social-icon">
            {/* <!-- <a href="#"><i class="fab fa-facebook"></i></a> --> */}
            <a
              target="_blank"
              href="https://www.instagram.com/pratheek_.shetty/"
            >
              <i class="fab fa-instagram-square"></i>
            </a>
            <a target="_blank" href="https://twitter.com/Prathikshetty11">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pratheek-shetty-10a173186/"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

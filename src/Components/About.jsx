import React, { Component } from "react";
import "../css/About.css";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="parent-container">
        <div className="container">
          {/* <!-- about --> */}
          <div className="about">
            <h1>About Us</h1>
            <p>
              At <span className="app">What's the Weather?</span>, our mission
              is to deliver accurate, real-time forecasts tailored to your
              lifestyle. Founded by a team of dedicated developers and weather
              enthusiasts, our app combines cutting-edge technology with a
              user-friendly interface to keep you ahead of the weather. Designed
              for the spontaneous and adventurous, our app merges sleek design
              with user-friendly functionality. Explore the world with
              confidence as What's the Weather? brings precise, real-time
              weather forecasts to the palm of your hand.
            </p>
          </div>

          {/* <!-- team --> */}
          <div className="team">
            <h1 id="team-header">Minds Behind the App</h1>
            <div className="team-cards">
              <div className="card" id="card-1">
                <img src="../img/kristanna.jpeg" id="kristanna" />
                <div className="content">
                  <span className="name">Kristanna Agnes</span>
                  <span className="subtitle">Web Developer</span>
                  <p className="details">
                    A dynamic Web Developer with a flair for crafting engaging
                    user experiences, driven by a passion for the latest web
                    technologies and a continuous pursuit of learning.
                  </p>
                  <div className="links">
                    <a href="https://github.com/thekristanna" target="_blank">
                      <i className="ri-github-fill"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/thekristanna/"
                      target="_blank"
                    >
                      <i className="ri-linkedin-box-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card" id="card-2">
                <img src="../img/maynard.jpg" id="maynard" />
                <div className="content">
                  <span className="name">Maynard Arvin</span>
                  <span className="subtitle">Web Developer</span>
                  <p className="details">
                    A creative and detail-oriented Web Developer proficient in
                    modern technologies, dedicated to crafting responsive,
                    user-centric websites through innovative design solutions.
                  </p>
                  <div className="links">
                    <a href="https://github.com/zzzarkaztik" target="_blank">
                      <i className="ri-github-fill"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maynard-arvin-villalobos-lpt-7a7aa3242/"
                      target="_blank"
                    >
                      <i className="ri-linkedin-box-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- home --> */}

        <div className="home-icon-container">
          <Link to="/" id="home">
            <i className="ri-arrow-left-circle-line"></i>Back to Home
          </Link>
        </div>
      </div>
    );
  }
}
export default About;

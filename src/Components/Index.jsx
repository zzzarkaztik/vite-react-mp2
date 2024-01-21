import React, { Component } from "react";
import "../css/Index.css";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

class Index extends Component {
  render = () => {
    return (
      <>
        <div className="weather">
          <h1>What's the Weather?</h1>
          <div className="search tooltip">
            <div className="tooltip-text">
              <p id="tooltip-search">
                Search any city worldwide. For precision, use commas, e.g.,
                <i>La Union, PH</i>.
              </p>
            </div>
            <form action="/weather" id="weatherForm" method="get">
              <input
                type="text"
                id="weather_city"
                name="city"
                placeholder="Enter City"
              />
              <img src="img/search.png" alt="search" type="submit" id="look" />
            </form>
          </div>
          {/* <!-- about --> */}
          <div className="about-icon-container">
            <Link to="/about" id="about">
              About Us <i className="ri-arrow-right-circle-line"></i>
            </Link>
          </div>
        </div>
      </>
    );
  };
}

export default Index;

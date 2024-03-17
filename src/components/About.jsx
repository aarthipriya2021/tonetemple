import React from "react";
import aboutPic from "../assets/image/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="section3" className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center">
          <img className="img-fluid mb-4 mb-lg-0" src={aboutPic} alt="Img" />
        </div>
        <div className="col-lg-6">
          <h2 className="display-4 mb-4 text-sm-start text-center">
            10 Years Experience
          </h2>
          <p className="text-sm-start text-center">
            For ten years, we've been the cornerstone of fitness, providing
            expert guidance, state-of-the-art facilities, and a supportive
            community.
          </p>
          <div className="about row py-2 text-sm-start text-center">
            <div className="col-sm-6">
              <i className="flaticon-barbell display-2"></i>
              <h4>Certified GYM Center</h4>
              <p>
                Join a community dedicated to certified fitness standards,
                ensuring your success and well-being.
              </p>
            </div>
            <div className="col-sm-6">
              <i className="flaticon-barbell display-2"></i>
              <h4>Fitness Haven</h4>
              <p>
                Discover a sanctuary where fitness meets inspiration,
                transforming bodies and lives.
              </p>
            </div>
            <div className="col-sm-6">
              <i className="flaticon-medal display-2"></i>
              <h4>Fitness Pioneers</h4>
              <p>
                As fitness pioneers, we believe in pushing boundaries and
                challenging limitations to help you achieve your best self.
              </p>
            </div>
            <div className="col-sm-6">
              <i className="flaticon-medal display-2"></i>
              <h4>Award Winning</h4>
              <p>
                We're honored to be recognized as an award-winning gym center,
                setting the standard for fitness excellence.
              </p>
            </div>
          </div>
          <div className="text-sm-start text-center">
            <Link to="/" className="btn btn-lg px-4">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

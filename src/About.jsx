import React from "react";
import Banner from "./Banner";

const About = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center">
          Welcome to Everest Greenscape Group
        </h3>
        <p className="text-center fw-bold">Building Excellence, Cultivating Greenery</p>

        <p className="text-justify">
          At Everest Greenscape Group, we bring together expertise across horticulture, construction, and supply chain solutions, ensuring innovation and quality in every project. Our group consists of four specialized firms, each committed to delivering excellence in their respective fields.
        </p>

        <div className="m-5">
          <h4 className="text-center">Our Companies:</h4>
          <div className="row text-center">
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">Everest Enterprise:</span> With over 20 years in horticulture and garden maintenance, we create and sustain green spaces that thrive.
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">SP Enterprise:</span> Specializing in exterior design, sculptures, swimming pools, and lighting solutions, we shape spaces into architectural masterpieces.
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">Aurinko:</span> A trusted name in general order supply, with a focus on premium horticulture items to support businesses and individuals.
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">Scrictop:</span> Your go-to partner for garden material supply, offering innovative and sustainable solutions for modern landscaping needs.
              </p>
            </div>
          </div>
        </div>

        <div className="m-5">
          <h4 className="text-center">Why Choose Everest Greenscape Group?</h4>
          <div className="row text-center">
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">Multi-Industry Expertise:</span> A comprehensive approach to landscaping, construction, and supply solutions.
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">Decades of Trust:</span> A legacy of over 20 years in the industry, delivering quality and reliability.
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">Innovation & Sustainability:</span> We blend creativity with eco-friendly practices to shape the future.
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p>
                <span className="fw-bold">Client-Focused Solutions:</span> Tailored services designed to meet unique project needs.
              </p>
            </div>
          </div>
        </div>

        <div className="m-5 text-center">
          <p>Discover how Everest Greenscape Group can transform your vision into reality.</p>
          <p>Contact us today to explore new possibilities!</p>
        </div>
      </div>
    </>
  );
};

export default About;

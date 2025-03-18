import React from "react";
const Contact = () => {
  return (
    <div className="container my-5">
      {/* Professional Description */}
      <div className="text-center bg-gradient p-4 rounded shadow mb-5">
        <h4 className="text-success fw-bold">
          If you're looking for a professional way to invite clients to contact you for horticulture and exterior work:
        </h4>
        <p className="text-secondary">
          "Enhance your outdoor spaces with our expert horticulture and exterior design services. From lush landscaping and sustainable gardens to stunning exterior lighting and architectural features, we bring your vision to life. Contact us today to discuss your project and discover how we can transform your space!"
        </p>
        <small className="text-dark fw-bold">
        Let me know if you want a more specific approach based on your company’s branding.
        </small>
      </div>

      {/* Contact Card */}
      <div className="card mx-auto shadow-lg" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h2 className="card-title fw-bold mb-4">Contact Us</h2>
          <p className="card-text">
            <strong>Contact Number:</strong>{" "}
            <a href="tel:9874742653" className="text-primary text-decoration-none">
              9874742653
            </a>
          </p>
          <p className="card-text">
            <strong>Email ID:</strong>{" "}
            <a href="mailto:contact.egsg@gmail.com" className="text-primary text-decoration-none">
              contact.egsg@gmail.com
            </a>
          </p>
          <p className="card-text">
            <strong>Address:</strong> Holding No. 95, Gate No. 1/A, Basunagar, Madhyamgram, Kolkata-700129, West Bengal, India
          </p>
          {/* Get In Touch Button */}
          <a
            href="mailto:contact.egsg@gmail.com"
            className="btn btn-success btn-lg rounded-pill fw-bold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

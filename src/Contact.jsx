import React from "react";
const Contact = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="card mx-auto shadow-lg" style={{ maxWidth: "600px" }}>
          <div className="card-body text-center">
            <h2 className="card-title mb-3">Contact Us</h2>
            <p className="card-text">
              <strong>Contact number:</strong> 9874742653
            </p>
            <p className="card-text">
              <strong>Email id:</strong>{" "}
              <a href="mailto:contact.egsg@gmail.com">contact.egsg@gmail.com</a>
            </p>
            <p className="card-text">
              <strong>Address:</strong> Holding No. 95, Gate No. 1/A, Basunagar,
              Madhyamgram, Kolkata-700129, West Bengal, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

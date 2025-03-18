import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from "./assets/logo.png";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // Get the current route

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar 
      className="custom-header base-bg-color p-0 m-0" 
      variant="dark" 
      expand="lg" 
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleClose}>
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto dark">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={handleClose} 
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about-us" 
              onClick={handleClose} 
              className={location.pathname === "/about-us" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact-us" 
              onClick={handleClose} 
              className={location.pathname === "/contact-us" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

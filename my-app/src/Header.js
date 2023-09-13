import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import './Header.css'
function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Nav>
          <Navbar.Brand className="nav"><img src="logo.jpg" width="30" height="30"/>Hurain Infotech</Navbar.Brand>
          <Nav.Link href="#" className="nav">Getting Started</Nav.Link>
          <Nav.Link href="#" className="nav">Components</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Header;

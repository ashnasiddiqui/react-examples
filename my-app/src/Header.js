import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "./Header.css"
function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Nav>
        <Container className="contain">
          <Navbar.Toggle/>
          <Navbar.Brand className="nav brand">
            <img src="logoimage.png" height="30" alt="logo" />
          </Navbar.Brand>
        </Container>
        <Navbar.Collapse>
          <Nav.Link href="#" className="nav">
            Dashboard
          </Nav.Link>
          <Nav.Link href="#" className="nav">
            About
          </Nav.Link>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}

export default Header;


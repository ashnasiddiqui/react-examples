import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "./Header.css"
import { NavLink,Link } from "react-router-dom";
function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Nav>
        <Container className="contain">
          <Navbar.Toggle/>
          <Navbar.Brand className="nav brand">
          <Link to="/">
            <img src="logoimage.png" height="30" alt="logo" />
            </Link>
          </Navbar.Brand>
        </Container>
        <Navbar.Collapse>
          <NavLink to="/dashboard" className="link">
            Dashboard
            </NavLink>
          <NavLink to="/about" className="link">
            About
            </NavLink>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}

export default Header;


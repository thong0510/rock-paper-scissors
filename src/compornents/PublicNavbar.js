import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.svg";
import githubIco from "../images/github_icon.png";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="mr-auto">
        <img src={logo} alt="Logo" width="200px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="mr-auto">
        <a href="#git" target="_blank">
          <img src={githubIco} alt="Github" width="32px" />
        </a>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;

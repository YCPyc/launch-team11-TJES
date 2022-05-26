import React from "react";

import {
  Navbar,
  Jumbotron,
  Button,
  Nav,
  NavDropdown,
  Container,
  NavItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">TJES</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/teacher">Teacher Directory</Nav.Link>
          <Nav.Link href="/student">Student Directory</Nav.Link>
          <Nav.Link href="/calendar">Event Calendar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

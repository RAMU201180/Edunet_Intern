import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Ensure this import is present

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

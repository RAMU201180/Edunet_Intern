import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; 

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
        <Nav className="ms-auto">
        <Nav.Link as={Link} to="/add-product">ADD</Nav.Link>
          <Nav.Link as={Link} to="/signin"> Log In</Nav.Link>
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

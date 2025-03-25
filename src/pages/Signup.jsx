
/* src/pages/Signup.js */
import React from "react";
import { Card, Button, Form, Container } from "react-bootstrap";

function Signup() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "25rem" }} className="p-4 shadow-lg">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
          </Form.Group>
          <Button variant="primary" className="w-100">Sign Up</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Signup;
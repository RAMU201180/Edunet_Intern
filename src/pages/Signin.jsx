import React from "react";
import { Card, Button, Form, Container } from "react-bootstrap";

function Signin() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "25rem" }} className="p-4 shadow-lg">
        <h2 className="text-center mb-4">Sign In</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" className="w-100">Sign In</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Signin;
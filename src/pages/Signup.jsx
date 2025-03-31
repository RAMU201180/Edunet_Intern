import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    name: "", fatherName: "", dob: "", branch: "", rollNo: "",
    section: "", address: "", mobileNo: "", password: "", confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/signup", user);
      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "30rem" }} className="p-4 shadow-lg">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text" name="name" placeholder="Full Name"
              value={user.name} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text" name="fatherName" placeholder="Father's Name"
              value={user.fatherName} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date" name="dob" placeholder="Date of Birth"
              value={user.dob} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text" name="branch" placeholder="Branch"
              value={user.branch} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text" name="rollNo" placeholder="Roll Number"
              value={user.rollNo} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text" name="section" placeholder="Section"
              value={user.section} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text" name="address" placeholder="Address"
              value={user.address} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text" name="mobileNo" placeholder="Mobile Number"
              value={user.mobileNo} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password" name="password" placeholder="Password"
              value={user.password} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password" name="confirmPassword" placeholder="Confirm Password"
              value={user.confirmPassword} onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="I agree to the Terms and Conditions" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Signup;

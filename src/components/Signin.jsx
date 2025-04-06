import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [credentials, setCredentials] = useState({ rollNo: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signin", credentials);
      alert("Login successful! Token: " + response.data.token);
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Sign-in</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="rollNo" placeholder="Roll No" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signin;

import React, { useState } from "react";
import "./NewRegister.css";
import axios from "axios";

const NewRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
    } else {
      await axios
        .post("https://blog-app-backend-75ae.onrender.com/register", {
          uname: formData.username,
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          console.log(res);
          alert("Registered Successfully");
        })
        .catch((error) => {
          console.error("There was an error registering:", error);
          alert("Error during registration. Please try again.");
        });
    }
  };

  return (
    <div className="register-container">
      <h2>Create a New Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default NewRegister;

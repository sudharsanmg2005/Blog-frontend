import React from "react";
import Header from "./Header";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <header
        style={{ width: "100%", position: "fixed", top: 0, left: 0, zIndex: 100 }}
      >
        <Header />
      </header>

      <div className="contact-container" style={{ marginTop: "120px" }}>
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Send me the queries and your feedback. I will get back to you as soon
          as possible.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> mgsudharsan05@gmail.com
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> +91 8807607899
          </div>
          <div className="contact-item">
            <strong>Address:</strong> 5/19-5 Amrita Nagar,
            <br />
            Paramathalingapuram,
            <br />
            Mahadhanapuram <br />629702
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message" required></textarea>
          </div>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

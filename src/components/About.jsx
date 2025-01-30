import React from "react";
import "./About.css";
import Header from "./Header";

const About = () => {
  return (   <>          
  <header style={{ width: "100%", position: "fixed", top: 0, left: 0, zIndex: 100 }}>
    <Header />
  </header>
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to our website! We are passionate about delivering quality content and keeping our users informed about the latest trends in technology, lifestyle, and more.
      </p>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
        Our mission is to provide a platform that offers insightful, engaging, and thought-provoking content to a global audience. We aim to foster a community where ideas are shared, stories are told, and knowledge is spread to inspire and educate
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
        Our vision is to become a leading source of quality content that empowers individuals to think critically, stay informed, and lead fulfilling lives. We aspire to build a vibrant and inclusive space that encourages creativity, collaboration, and continuous learning.
        </p>
      </section>
    </div>
    </> 
  );
};

export default About;

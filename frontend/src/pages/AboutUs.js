import React from 'react';
import '../styles/AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>Our Journey 🚀</h1>
        <p className="quote">"Empowering Farmers, Connecting Bharat - One Step at a Time."</p>
      </header>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="content">
            <h2>📌 The Start</h2>
            <p>In the beginning, Shivendra and Tushar were passionate MCA students with a vision to bring transformation in Indian agriculture using tech.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h2>🌱 The Idea - KisanKart</h2>
            <p>KisanKart was born — a platform to connect farmers and consumers directly, ensuring transparency and fair pricing.</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h2>🛠️ Development Phase</h2>
            <p>We developed modules like Cart, Product Management, Farmer Dashboard, Admin Panel, Secure Auth, and more using React.js, Spring Boot, and MySQL.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h2>🌍 Vision for Future</h2>
            <p>"Our goal is to expand KisanKart into a full-scale agri-commerce solution across India with AI-driven recommendations and smart logistics."</p>
          </div>
        </div>
      </div>

      <footer className="about-footer">
        <p>Developed with ❤️ by <strong>Shivendra</strong> & <strong>Tushar</strong></p>
      </footer>
    </div>
  );
}

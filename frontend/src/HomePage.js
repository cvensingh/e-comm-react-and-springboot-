import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import GitBtn from "./GitBtn";
import { FaUserShield } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const texts = ["Direct from Farm to You", "Enriching Farmer's life"];

  const typingSpeed = 100;
  const erasingSpeed = 20;
  const delayBetweenTexts = 1000;

  const [userInitial, setUserInitial] = useState("");

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserInitial(name.charAt(0).toUpperCase());
    }
  }, []);

  useEffect(() => {
    let timer;

    if (!isErasing && charIndex < texts[index].length) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isErasing && charIndex > 0) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);
    } else if (!isErasing && charIndex === texts[index].length) {
      timer = setTimeout(() => setIsErasing(true), delayBetweenTexts);
    } else if (isErasing && charIndex === 0) {
      setIsErasing(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isErasing, index, texts]);

  const handleAdminClick = () => {
    setShowAdminModal(true);
    setAdminPassword("");
    setAdminError("");
  };

  const handleAdminLogin = () => {
    if (adminPassword === "cvensingh") {
      setShowAdminModal(false);
      navigate("/AdminPage");
    } else {
      setAdminError("Wrong admin password! Password is hardcoded, plz go and find in code snoppet.");
      setTimeout(() => {
        setAdminError("");
      }, 3000);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="#">
            <img
              src="./images/kisankartLogo.png"
              alt="Logo"
              style={{ width: "40px", marginRight: "10px" }}
            />
            Kisan Kart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/MarketPlace")}>Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/AboutUs")}>About Us</a>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a className="nav-link text-white dropdown-toggle" style={{ cursor: "pointer" }}>
                  Account & Lists
                </a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show">
                    <li><a className="dropdown-item" href="#">My Account</a></li>
                    <li><a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => navigate("/MyOrderPage")}>My Orders</a></li>
                    <li><a className="dropdown-item" href="#">Lists</a></li>
                    <li><a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => navigate("/HelpAndContact")}>Help & Contact</a></li>
                    <li><a className="dropdown-item" href="/GiftCard">Gift Card</a></li>
                    <li><a className="dropdown-item text-danger" href="/Login">LogOut</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>Cart</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light me-3 d-flex align-items-center" onClick={handleAdminClick} type="button">
                  <FaUserShield className="me-2 fa-bounce" style={{ fontSize: "1.5rem", color: "#ffc107" }} />
                  Admin
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning" onClick={() => navigate("/login")}>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={showAdminModal} onHide={() => setShowAdminModal(false)} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <FaUserShield className="me-2 fa-bounce" style={{ fontSize: "2rem", color: "#ffc107" }} />
            Admin Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="adminPassword" className="form-label">Please enter admin password:</label>
            <input
              type="password"
              className="form-control"
              id="adminPassword"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              autoFocus
            />
            {adminError && <div className="text-danger mt-2">{adminError}</div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowAdminModal(false)}>Cancel</button>
          <button className="btn btn-primary" onClick={handleAdminLogin}>Enter</button>
        </Modal.Footer>
      </Modal>

      {/* Hero Section */}
      <div
        className="hero-section text-center text-white py-5"
        style={{
          backgroundImage: 'url(/images/KisanKartHomePageImage.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold" style={{ minHeight: "5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>{currentText}</h1>
          <p className="lead fw-bold">Empowering Farmers, Enriching Lives</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-success btn-lg" onClick={() => navigate("/MarketPlace")}>Marketplace</button>
            <button className="btn btn-warning btn-lg" onClick={() => navigate("/create-account")}>Register</button>
            <button className="btn btn-primary btn-lg" onClick={() => navigate("/AddProducts")}>Add Product</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-card fresh-produce p-4 rounded">
                <h4>Fresh Produce</h4>
                <p>Get fresh, farm-picked products delivered to your doorstep.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card fair-prices p-4 rounded">
                <h4>Fair Prices</h4>
                <p>Direct pricing from farmers to consumers for transparency.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card support-farmers p-4 rounded">
                <h4>Support Farmers</h4>
                <p>Contribute to rural communities and empower local farmers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 KisanKart. All rights reserved.</p>
        </div>
      </footer>
      <GitBtn />
    </div>
  );
}
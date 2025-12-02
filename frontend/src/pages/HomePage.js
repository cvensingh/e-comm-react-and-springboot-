import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import GitBtn from "../components/GitBtn";
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
      setAdminError("Wrong admin password! Password is hardcoded, plz find in code snippet.");
      setTimeout(() => {
        setAdminError("");
      }, 3000);
    }
  };

  return (
    <div>
      {/* Navigation Bar - Modern Box Style */}
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light navbar-modern">
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
      </div>

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

      {/* Hero Section - Modern Box Style */}
      <div className="hero-wrapper">
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
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <h1 className="display-4 fw-bold hero-title" style={{ minHeight: "5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>{currentText}</h1>
            <p className="lead fw-bold hero-subtitle">Empowering Farmers, Enriching Lives</p>
            <div className="d-flex justify-content-center gap-3 hero-buttons">
              <button type="button" className="btn btn-success btn-lg" onClick={() => navigate("/MarketPlace")}>MarketPlace</button>
              <button type="button" className="btn btn-warning btn-lg" onClick={() => navigate("/create-account")}>Register</button>
              <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate("/AddProducts")}>Add Product</button>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Top Deals Section */}
      <div className="deals-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Today's Top Deals</h2>

          <div className="deals-row d-flex gap-3 overflow-auto pb-2">
            {/* Deal 1 */}
            <div className="deal-card bg-white rounded p-3 position-relative text-center" style={{ minWidth: '220px', maxWidth: '260px' }}>
              <div className="deal-badge position-absolute">-20%</div>
              <img src="images/organictomato.jpg" alt="Organic Tomatoes" className="deal-image img-fluid rounded" />
              <h6 className="mt-3">Organic Tomatoes (500g)</h6>
              <div className="deal-prices mt-1"><span className="price">₹120</span> <small className="original-price text-muted ms-2">₹150</small></div>
              <button className="btn btn-sm btn-success mt-3">Add to cart</button>
            </div>

            {/* Deal 2 */}
            <div className="deal-card bg-white rounded p-3 position-relative text-center" style={{ minWidth: '220px', maxWidth: '260px' }}>
              <div className="deal-badge position-absolute">-15%</div>
              <img src="images/freshmilk.jpg" alt="Fresh Milk" className="deal-image img-fluid rounded" />
              <h6 className="mt-3">Fresh Milk (1L)</h6>
              <div className="deal-prices mt-1"><span className="price">₹60</span> <small className="original-price text-muted ms-2">₹70</small></div>
              <button className="btn btn-sm btn-success mt-3">Add to cart</button>
            </div>

            {/* Deal 3 */}
            <div className="deal-card bg-white rounded p-3 position-relative text-center" style={{ minWidth: '220px', maxWidth: '260px' }}>
              <div className="deal-badge position-absolute">-25%</div>
              <img src="images/premiummango.jpg" alt="Premium Mango" className="deal-image img-fluid rounded" />
              <h6 className="mt-3">Premium Mango (500g)</h6>
              <div className="deal-prices mt-1"><span className="price">₹180</span> <small className="original-price text-muted ms-2">₹240</small></div>
              <button className="btn btn-sm btn-success mt-3">Add to cart</button>
            </div>

            {/* Deal 4 */}
            <div className="deal-card bg-white rounded p-3 position-relative text-center" style={{ minWidth: '220px', maxWidth: '260px' }}>
              <div className="deal-badge position-absolute">-18%</div>
              <img src="images/brownrice.jpg" alt="Brown Rice" className="deal-image img-fluid rounded" />
              <h6 className="mt-3">Brown Rice (1kg)</h6>
              <div className="deal-prices mt-1"><span className="price">₹220</span> <small className="original-price text-muted ms-2">₹270</small></div>
              <button className="btn btn-sm btn-success mt-3">Add to cart</button>
            </div>

            {/* Deal 5 */}
            <div className="deal-card bg-white rounded p-3 position-relative text-center" style={{ minWidth: '220px', maxWidth: '260px' }}>
              <div className="deal-badge position-absolute">-30%</div>
              <img src="images/mixednuts.jpg" alt="Mixed Nuts" className="deal-image img-fluid rounded" />
              <h6 className="mt-3">Mixed Nuts (250g)</h6>
              <div className="deal-prices mt-1"><span className="price">₹210</span> <small className="original-price text-muted ms-2">₹300</small></div>
              <button className="btn btn-sm btn-success mt-3">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Registered Farmers */}
      <div className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 registered-farmers-title">Registered Farmers</h2>
          <div className="row">
            {/* Farmer Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="farmer-card">
                <div className="farmer-header">
                  <h4 className="farmers-produces-title">Farmers Produces</h4>
                </div>
                <div className="farmer-profile-container">
                  <div className="farmer-profile-circle">
                    <img src="images/rajeshfarmer.jpg" alt="Farmer 1" className="farmer-image" />
                  </div>
                  <h5 className="farmer-name mt-3">Rajesh Kumar</h5>
                  <p className="farmer-joining-date">Joined: Jan 15, 2022</p>
                </div>
                <p className="farmer-products-details">
                  Rajesh grows premium quality organic vegetables including tomatoes, cucumbers, and lettuce. 
                  With over 10 years of farming experience, he ensures the highest standards of quality and freshness. 
                  His farm is certified for sustainable agriculture practices.
                </p>
              </div>
            </div>

            {/* Farmer Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="farmer-card">
                <div className="farmer-header">
                  <h4 className="farmers-produces-title">Farmers Produces</h4>
                </div>
                <div className="farmer-profile-container">
                  <div className="farmer-profile-circle">
                    <img src="images/priyafarmer.png" alt="Farmer 2" className="farmer-image" />
                  </div>
                  <h5 className="farmer-name mt-3">Priya Singh</h5>
                  <p className="farmer-joining-date">Joined: Mar 22, 2021</p>
                </div>
                <p className="farmer-products-details">
                  Priya specializes in dairy farming and produces fresh milk, yogurt, and ghee. 
                  Her cattle are well-maintained and fed with organic fodder. She is committed to providing 
                  pure and hygienic dairy products to ensure your family's health and wellness.
                </p>
              </div>
            </div>

            {/* Farmer Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="farmer-card">
                <div className="farmer-header">
                  <h4 className="farmers-produces-title">Farmers Produces</h4>
                </div>
                <div className="farmer-profile-container">
                  <div className="farmer-profile-circle">
                    <img src="images/moahanfarmer.jpg" alt="Farmer 3" className="farmer-image" />
                  </div>
                  <h5 className="farmer-name mt-3">Mohan Patel</h5>
                  <p className="farmer-joining-date">Joined: Jul 08, 2020</p>
                </div>
                <p className="farmer-products-details">
                  Mohan cultivates a variety of fruits including mangoes, oranges, and bananas. 
                  His orchards are spread across 50 acres and use traditional farming methods combined with modern irrigation. 
                  Every fruit is hand-picked to ensure premium quality and taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Site Links / Mega Footer-like Section (above footer) */}
      <div className="site-links-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-2 mb-4">
              <h6 className="site-links-heading">Buy</h6>
              <ul className="list-unstyled site-links-list">
                <li><a href="#">Registration</a></li>
                <li><a href="#">Bidding & buying help</a></li>
                <li><a href="#">Stores</a></li>
                <li><a href="#">Creator Collections</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-4">
              <h6 className="site-links-heading">Sell</h6>
              <ul className="list-unstyled site-links-list">
                <li><a href="#">Start selling</a></li>
                <li><a href="#">How to sell</a></li>
                <li><a href="#">Business sellers</a></li>
                <li><a href="#">Affiliates</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-4">
              <h6 className="site-links-heading">Tools & apps</h6>
              <ul className="list-unstyled site-links-list">
                <li><a href="#">Developers</a></li>
                <li><a href="#">Security center</a></li>
                <li><a href="#">Site map</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-4">
              <h6 className="site-links-heading">About</h6>
              <ul className="list-unstyled site-links-list">
                <li><a href="#">Company info</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Policies</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-4">
              <h6 className="site-links-heading">Help & Contact</h6>
              <ul className="list-unstyled site-links-list">
                <li><a href="#">Seller Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Money Back Guarantee</a></li>
              </ul>
            </div>

            <div className="col-12 col-md-2 mb-4 d-flex flex-column align-items-start">
              <h6 className="site-links-heading">Sites</h6>
              <div className="country-selector mt-2">
                <span className="flag" aria-hidden="true">IN</span>
                <span className="country-name">BHARAT</span>
                
              </div>
              <div className="mt-3 small text-muted">Stay connected</div>
              <div className="social-icons mt-2">
                <a href="#" className="me-2">Facebook</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="small text-muted">Copyright © 1995-2025 KisanKart Inc. All Rights Reserved.</div>
              <div className="mt-2 mt-md-0">
                <a className="mx-2 small site-legal-link" href="#">Accessibility</a>
                <a className="mx-2 small site-legal-link" href="#">User Agreement</a>
                <a className="mx-2 small site-legal-link" href="#">Privacy</a>
                <a className="mx-2 small site-legal-link" href="#">Cookies</a>
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

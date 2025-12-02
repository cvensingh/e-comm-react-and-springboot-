import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MarketPlace.css";

const Spices = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();
  const products = [
    { id: 70, title: "Turmeric", price: 30, image: "/images/TurmericIMage.jpg" },
    { id: 71, title: "Coriander", price: 50, image: "/images/Corianderimage.jpg" },
    { id: 72, title: "Jira", price: 70, image: "/images/CuminImage.jpg" },
    { id: 73, title: "Red Chilli", price: 70, image: "/images/RedChilliImage.jpg" },
  ];

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const getQuantity = (productId) => cartItems.find((item) => item.id === productId)?.quantity || 0;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="/">
            <img src="/images/kisankartLogo.png" alt="Logo" style={{ width: "40px", marginRight: "10px" }} />
            KisanKart
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</a></li>
              <li className="nav-item"><a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/MarketPlace")}>Marketplace</a></li>
              <li className="nav-item"><a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="spices">
        <header><h5>KisanKart - Spices</h5></header>
        <section className="products-section">
          <h5>Available Spices</h5>
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>₹{product.price}/kg</p>
                <div className="cart-controls">
                  <button className="btn btn-danger" onClick={() => updateCart(product.id, -1, product.title, product.price, product.image)}>-</button>
                  <span className="cart-quantity">{getQuantity(product.id)}</span>
                  <button className="btn btn-success" onClick={() => updateCart(product.id, 1, product.title, product.price, product.image)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <footer className="bg-dark text-white py-4">
          <div className="container text-center">
            <p>© 2024 KisanKart. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Spices;

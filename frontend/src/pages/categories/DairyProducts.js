import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MarketPlace.css";

const DairyProducts = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();
  const products = [
    { id: 57, title: "Regular Milk", price: 50, image: "/images/RegularMilkImage.jpg" },
    { id: 58, title: "Cow's Milk", price: 60, image: "/images/CowMilkImage.jpg" },
    { id: 59, title: "Buffalo Milk", price: 80, image: "/images/BuffaloMilkImage.jpg" },
    { id: 62, title: "Cow Cheese", price: 200, image: "/images/CowCheeseImage.jpg" },
    { id: 65, title: "Cow Curd", price: 300, image: "/images/CowCurdImage.jpg" },
    { id: 69, title: "Cow Ghee", price: 300, image: "/images/CowgheeImage.jpg" },
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

      <div className="dairy">
        <header><h5>KisanKart - Dairy Products</h5></header>
        <section className="products-section">
          <h5>Available Dairy Products</h5>
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h6>{product.title}</h6>
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

export default DairyProducts;

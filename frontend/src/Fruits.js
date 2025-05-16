import React from "react";
import { useNavigate } from "react-router-dom";
import "./MarketPlace.css";

const Fruits = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 39, title: "Apples", price: 40, image: "/images/AppleImage.jpg" },
    //{ id: 40, title: "Bananas", price: 50, image: "/images/BananaImage.jpg" },
    { id: 41, title: "Grapes", price: 70, image: "/images/GrapesImage.jpg" },
    { id: 42, title: "Oranges", price: 30, image: "/images/OrangeImage.jpg" },
    { id: 43, title: "Pineapples", price: 80, image: "/images/PineappleImage.jpg" },
    { id: 44, title: "Guava", price: 80, image: "/images/GuvavaImage.jpg" },
    { id: 45, title: "Mangoes", price: 80, image: "/images/MangoImage.jpg" },
    { id: 46, title: "Papaya", price: 80, image: "/images/PapayaImage.jpg" },
  ];

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const getQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleUpdateCart = (productId, change, title, price, image) => {
    updateCart(productId, change, title, price, image);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="/">
            <img
              src="/images/kisankartLogo.png"
              alt="Logo"
              style={{ width: "40px", marginRight: "10px" }}
            />
            KisanKart
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/MarketPlace")}>Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="FoodGrains">
        <header className="FoodGrains-header">
          <h5>KisanKart - Fruits</h5>
        </header>

        <section id="products" className="products-section">
          <h5>Available Fruits</h5>
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>₹{product.price}/kg</p>
                <div className="cart-controls">
                  <button className="btn btn-danger" onClick={() => handleUpdateCart(product.id, -1, product.title, product.price, product.image)}>-</button>
                  <span className="cart-quantity">{getQuantity(product.id)}</span>
                  <button className="btn btn-success" onClick={() => handleUpdateCart(product.id, 1, product.title, product.price, product.image)}>+</button>
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

export default Fruits;

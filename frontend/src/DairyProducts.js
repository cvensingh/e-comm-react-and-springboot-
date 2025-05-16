import React from "react";
import { useNavigate } from "react-router-dom";
import "./MarketPlace.css";

const DairyProducts = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 57, title: "Regular Milk", price: 50, image: "/images/RegularMilkImage.jpg" },
    { id: 58, title: "Cow's Milk", price: 60, image: "/images/CowMilkImage.jpg" },
    { id: 59, title: "Cow's Milk (Full Cream)", price: 70, image: "/images/CowCreamyMilkImage.jpg" },
    { id: 60, title: "Buffalo Milk", price: 80, image: "/images/BuffaloMilkImage.jpg" },
    { id: 61, title: "Buffalo Milk (Full Cream)", price: 90, image: "/images/BuffalowCreamMilkImage.jpg" },
    { id: 62, title: "Cow Milk Cheese", price: 200, image: "/images/CowCheeseImage.jpg" },
    { id: 63, title: "Buffalo Milk Cheese", price: 250, image: "/images/BuffalowCheeseImage.jpg" },
    { id: 64, title: "Goat Milk", price: 300, image: "/images/GoatMilkImage.jpg" },
    { id: 65, title: "Cow Curd", price: 300, image: "/images/CowCurdImage.jpg" },
    { id: 66, title: "Butter", price: 300, image: "/images/ButterImage.jpg" },
    { id: 67, title: "Buffalo Curd", price: 300, image: "/images/BuffalowCurdImage.jpg" },
    { id: 68, title: "Buffalo Ghee", price: 300, image: "/images/BuffalowgheeImage.jpg" },
    { id: 69, title: "Cow Ghee", price: 300, image: "/images/CowgheeImage.jpg" },
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
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="/">
            <img src="/images/kisankartLogo.png" alt="Logo" style={{ width: "40px", marginRight: "10px" }} />
            KisanKart
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white"  style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  style={{ cursor: "pointer" }} onClick={() => navigate("/MarketPlace")}>Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="FoodGrains">
        <header className="FoodGrains-header">
          <h5>KisanKart - Dairy Products</h5>
        </header>

        <section id="products" className="products-section">
          <h5>Available Dairy Products</h5>
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h6>{product.title}</h6>
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

export default DairyProducts;

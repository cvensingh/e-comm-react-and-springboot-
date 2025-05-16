import React from "react";
import { useNavigate } from "react-router-dom";
//import "./MarketPlace.css";

const Vegetables = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 14, title: "Potatoes", price: 40, image: "/images/potatoeImage.jpg" },
    { id: 15, title: "Tomatoes", price: 50, image: "/images/TomatoImage.jpg" },
    { id: 16, title: "Onions", price: 70, image: "/images/onionImage.jpg" },
    { id: 17, title: "Garlic", price: 30, image: "/images/GarlicImage.jpg" },
    { id: 18, title: "Ginger", price: 80, image: "/images/GingerImage.jpg" },
    { id: 19, title: "Carrot", price: 80, image: "/images/CarrotImage.jpg" },
    { id: 20, title: "Cauliflower", price: 80, image: "/images/CauliflowerImage.jpg" },
    { id: 21, title: "Cabbage", price: 80, image: "/images/CabbageImage.jpg" },
    { id: 22, title: "Spinach", price: 80, image: "/images/spinachImage.jpg" },
    { id: 23, title: "Capsicum", price: 80, image: "/images/CapsicumImage.jpg" },
    { id: 24, title: "Ladyfinger", price: 80, image: "/images/LadyFingerImage.jpg" },
    { id: 25, title: "Brinjal", price: 80, image: "/images/BrinjalImage.jpg" },
    { id: 26, title: "Bitter Gourd", price: 80, image: "/images/BitterGaurdImage.jpg" },
    { id: 27, title: "Pumpkin", price: 80, image: "/images/PumpkinImage.jpg" },
    { id: 28, title: "Bean", price: 80, image: "/images/BeanImage.jpg" },
    { id: 29, title: "Beetroot", price: 80, image: "/images/BeetRootImage.jpg" },
    { id: 30, title: "Radish", price: 80, image: "/images/RaddishImage.jpg" },
    { id: 31, title: "Turnip", price: 80, image: "/images/TurnipImage.jpg" },
    { id: 32, title: "Mushroom", price: 80, image: "/images/MushroomImage.jpg" },
    { id: 33, title: "Lemon", price: 80, image: "/images/LemonImage.jpg" },
    { id: 34, title: "Green Chilli", price: 80, image: "/images/GreenChilliImage.jpg" },
    { id: 35, title: "Coriander", price: 80, image: "/images/CorrianderImage.jpg" },
    { id: 36, title: "Mint", price: 80, image: "/images/MintImage.jpg" },
    { id: 37, title: "Curry Leaves", price: 80, image: "/images/CurryLeavesImage.jpg" },
    { id: 38, title: "Cucumber", price: 80, image: "/images/CucumberImage.jpg" },
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
            <img src="/images/kisankartLogo.png" alt="Logo" style={{ width: "40px", marginRight: "10px" }} />
            KisanKart
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/Marketplace")}>Marketplace</a>
              </li>
              <li className="nav-item position-relative">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>
                  Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="Vegetables">
        <header className="Vegetables-header">
          <h5>KisanKart - Vegetables</h5>
        </header>

        <section id="products" className="products-section">
          <h5>Available Vegetables</h5>
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

export default Vegetables;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./MarketPlace.css";

const FoodGrains = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 1, title: "Wheat", price: 40, image: "/images/WheatImage.jpg" },
    { id: 2, title: "Rice", price: 50, image: "/images/RiceImage.jpg" },
    { id: 3, title: "Soyabeans", price: 70, image: "/images/soyabeanImage.jpg" },
    { id: 4, title: "Maize", price: 30, image: "/images/MaizeImage.jpg" },
    { id: 5, title: "Arhar", price: 80, image: "/images/ArharImage.jpg" },
  ];

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const getQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleUpdateCart = (productId, change, title, price, image) => {
    console.log(`Button clicked: Product ${productId}, Change ${change}`); // Debug log
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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/Marketplace")}>Marketplace</a>
              </li>
              <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>
                  Cart
                  {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </a>

            { /* <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/AboutUs")}>About Us</a>
              </li>
              <li className="nav-item position-relative">
                
              </li>
              <li className="nav-item">
                <button className="btn btn-warning" onClick={() => navigate("/login")}>Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger ms-2" onClick={() => navigate("/logout")}>Log Out</button>
              </li>*/}
            </ul>
          </div>
        </div>
      </nav>

      <div className="FoodGrains">
        <header className="FoodGrains-header">
          <h5>KisanKart - Food Grains</h5>
        </header>

        <section id="products" className="products-section">
          <h5>Available Food Grains</h5>
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>₹{product.price}/kg</p>
                <div className="cart-controls">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleUpdateCart(product.id, -1, product.title, product.price, product.image)}
                  >
                    -
                  </button>
                  <span className="cart-quantity">{getQuantity(product.id)}</span>
                  <button
                    className="btn btn-success"
                    onClick={() => handleUpdateCart(product.id, 1, product.title, product.price, product.image)}
                  >
                    +
                  </button>
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

export default FoodGrains;
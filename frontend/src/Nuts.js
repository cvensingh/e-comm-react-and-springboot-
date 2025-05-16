import React from "react";
import { useNavigate } from "react-router-dom";

const Nuts = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 6, title: "Almonds", price: 40, image: "/images/AlmondImage.jpg" },
    { id: 7, title: "Cashews", price: 50, image: "/images/cashewImage.jpg" },
    { id: 8, title: "Black Plums", price: 70, image: "/images/BlackPlumImage.jpg" },
    { id: 9, title: "Pumpkin seeds", price: 30, image: "/images/PumpkinSeedImage.jpg" },
    { id: 10, title: "Walnuts", price: 80, image: "/images/WalnutImage.jpg" },
    { id: 11, title: "Peanuts", price: 80, image: "/images/PeanutImage.jpg" },
    { id: 12, title: "Sharifa", price: 80, image: "/images/custardAppleImage.jpg" },
    { id: 13, title: "Raisins", price: 80, image: "/images/RaisinImage.jpg" },
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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</a></li>
              <li className="nav-item"><a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/Marketplace")}>MarketPlace</a></li>
              {/* <li className="nav-item"><a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/AboutUs")}>AboutUs</a></li>
                   <li className="nav-item"><button className="btn btn-warning" onClick={() => navigate("/login")}>Login</button></li>
                   <li className="nav-item"><button className="btn btn-danger ms-2" onClick={() => navigate("/logout")}>Log Out</button></li> */}
              <li className="nav-item position-relative">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</a>
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="Nuts">
        <header className="Nuts-header">
          <h5>KisanKart - Nuts</h5>
        </header>

        <section id="products" className="products-section">
          <h5>Available Dry Fruits</h5>
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

export default Nuts;

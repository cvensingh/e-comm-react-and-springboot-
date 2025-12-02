import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MarketPlace.css";

const MarketPlace = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const categories = [
    { title: "Food Grains", description: "Wheat, Rice, Soyabeans, Maize, Arahar.", image: "/images/foodGrainsImage.jpg", path: "/FoodGrains" },
    { title: "Nuts", description: "Dry Fruits, Almond, Cashew, Apricot.", image: "/images/nutsImage.jpg", path: "/nuts" },
    { title: "Vegetables", description: "Green Leafy Vegetables, Onion, Tomato, Potato, Garlic.", image: "/images/vegetableImage.jpg", path: "/vegetables" },
    { title: "Fruits", description: "Apples, Banana, Mango, Orange, Papaya.", image: "/images/fruitImage.jpg", path: "/fruits" },
    { title: "Dairy Products", description: "Milk, Cheese, Butter, Yogurt.", image: "/images/dairyImage.jpg", path: "/DairyProducts" },
    { title: "Spices", description: "Spices, Exotic Herbs, Stems, Flowers, Leaves.", image: "/images/spiceImage.jpg", path: "/spices" },
  ];

  const products = [
    { title: "Potatoes", price: "₹50/kg", image: "/images/potatoeImage.jpg" },
    { title: "Mangoes", price: "₹120/kg", image: "/images/mangoImage.jpg" },
    { title: "Onions", price: "₹40/kg", image: "/images/onionImage.jpg" },
    { title: "Cashews", price: "₹700/kg", image: "/images/cashewImage.jpg" },
  ];

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
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/AboutUs")}>About Us</a>
              </li>
              <li className="nav-item dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <a className="nav-link text-white dropdown-toggle" style={{ cursor: "pointer" }}>Account & Lists</a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show">
                    <li><a className="dropdown-item" href="#">My Account</a></li>
                    <li><a className="dropdown-item" href="#">My Orders</a></li>
                    <li><a className="dropdown-item" href="#">Lists</a></li>
                    <li><a className="dropdown-item" href="#">Help & Contact</a></li>
                    <li><a className="dropdown-item" href="#">Gift Card</a></li>
                    <li><a className="dropdown-item text-danger" href="#">LogOut</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/CartPage")}>Cart</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning" onClick={() => navigate("/login")}>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="marketplace">
        <header className="marketplace-header">
          <h2>KisanKart - Marketplace</h2>
        </header>

        <section id="categories" className="categories-section">
          <h3>Categories</h3>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div className="category-card" key={index} onClick={() => category.path && navigate(category.path)} style={{ cursor: "pointer" }}>
                <img src={category.image} alt={category.title} />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="products-section">
          <h3>Products</h3>
          <div className="products-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-dark text-white py-4">
          <div className="container text-center">
            <p>&copy; 2024 KisanKart. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MarketPlace;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import MarketPlace from './pages/MarketPlace';
import AboutUs from './pages/AboutUs';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import InvoicePage from './pages/InvoicePage';
import MyOrderPage from './pages/MyOrderPage';
import HelpAndContact from './pages/HelpAndContact';
import GiftCard from './pages/GiftCard';
import GoogleAuth from './pages/GoogleAuth';

// Category Pages
import FoodGrains from './pages/categories/FoodGrains';
import Nuts from './pages/categories/Nuts';
import Vegetables from './pages/categories/Vegetables';
import Fruits from './pages/categories/Fruits';
import DairyProducts from './pages/categories/DairyProducts';
import Spices from './pages/categories/Spices';

// Admin Pages
import AdminPage from './pages/admin/AdminPage';
import AddProduct from './pages/admin/AddProduct';
import AddProducts from './pages/admin/AddProducts';
import ManageUser from './pages/admin/ManageUser';



export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (productId, change, title, price, image) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((item) => item.id === productId);

      if (itemIndex !== -1) {
        updatedCart[itemIndex].quantity += change;
        if (updatedCart[itemIndex].quantity <= 0) {
          updatedCart.splice(itemIndex, 1);
        }
      } else if (change > 0) {
        updatedCart.push({ id: productId, title, price, image, quantity: 1 });
      }

      console.log(`Updated cart for product ${productId}:`, updatedCart);
      return updatedCart;
    });
  };

  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/CartPage" element={<CartPage cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/CheckOutPage" element={<CheckOutPage cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/InvoicePage" element={<InvoicePage />} />
        <Route path="/MyOrderPage" element={<MyOrderPage />} />
        <Route path="/HelpAndContact" element={<HelpAndContact />} />
        <Route path="/GiftCard" element={<GiftCard />} />
        <Route path="/GoogleAuth" element={<GoogleAuth />} />

        {/* Category Routes */}
        <Route path="/FoodGrains" element={<FoodGrains cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/Nuts" element={<Nuts cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/Vegetables" element={<Vegetables cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/Fruits" element={<Fruits cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/DairyProducts" element={<DairyProducts cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/Spices" element={<Spices cartItems={cartItems} updateCart={updateCart} />} />

        {/* Admin Routes */}
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/AddProducts" element={<AddProducts />} />
        <Route path="/ManageUser" element={<ManageUser />} />
      </Routes>
    </Router>
  );
}

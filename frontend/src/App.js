import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import HomePage from './HomePage';
import ForgotPassword from './ForgotPassword';
import MarketPlace from './MarketPlace';
import AboutUs from './AboutUs';
import AddProducts from './AddProducts';
import FoodGrains from './FoodGrains';
import Nuts from './Nuts';
import Vegetables from './Vegetables';
import Fruits from './Fruits';
import DairyProducts from './DairyProducts';
import Spices from './Spices';
import CartPage from './CartPage';
import CheckOutPage from './CheckOutPage';
import AddProduct from './AddProduct';
import InvoicePage from './InvoicePage';
import MyOrderPage from './MyOrderPage';
import AdminPage from './AdminPage';
import GoogleAuth from './GoogleAuth';
import HelpAndContact from './HelpAndContact';
import GiftCard from './GiftCard';
import ManageUser from "./ManageUser";




export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (productId, change, title, price, image) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((item) => item.id === productId);

      if (itemIndex !== -1) {
        // Update existing item
        updatedCart[itemIndex].quantity += change;
        if (updatedCart[itemIndex].quantity <= 0) {
          updatedCart.splice(itemIndex, 1); // Remove if quantity becomes 0 or less
        }
      } else if (change > 0) {
        // Add new item only if incrementing
        updatedCart.push({ id: productId, title, price, image, quantity: 1 });
      }

      console.log(`Updated cart for product ${productId}:`, updatedCart); // Debug log
      return updatedCart;
    });
  };

 
  // Debug log for cart items
  console.log("Current cart items:", cartItems);
  // Debug log for updateCart function
  console.log("updateCart function:", updateCart);
  // Debug log for AOS initialization
  console.log("AOS initialized");
  // Debug log for React useEffect
  console.log("React useEffect executed");
  // Debug log for App component
  console.log("App component rendered");
  // Debug log for Router
  console.log("Router initialized");
  // Debug log for Routes
  console.log("Routes initialized");
  // Debug log for Route
  console.log("Route initialized");
  // Debug log for HomePage
  console.log("HomePage component rendered");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AddProducts" element={<AddProducts />} />
        <Route path="/FoodGrains" element={<FoodGrains cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/Nuts" element={<Nuts cartItems = { cartItems} updateCart = {updateCart}/>} />
        <Route path="/Vegetables" element={<Vegetables cartItems = { cartItems} updateCart = {updateCart} />} />
        <Route path="/Fruits" element={<Fruits cartItems = {cartItems} updateCart = {updateCart} />} />
        <Route path="/DairyProducts" element={<DairyProducts cartItems = {cartItems} updateCart = {updateCart} />} />
        <Route path="/Spices" element={<Spices cartItems = {cartItems} updateCart = {updateCart}/>} />
        <Route path="/CartPage" element={<CartPage cartItems={cartItems} updateCart={updateCart} />} />
        <Route path="/CheckOutPage" element={<CheckOutPage cartItems={cartItems} updateCart={updateCart} />} />
        <Route path = "/AddProduct" element = {<AddProduct />} />
        <Route path="/InvoicePage" element={<InvoicePage />} />
        <Route path = "/MyOrderPage" element = {<MyOrderPage />} />
        <Route path = "/AdminPage" element = {<AdminPage />} />
        <Route path = "/GoogleAuth" element = {<GoogleAuth />} />
        <Route path = "/HelpAndContact" element = {<HelpAndContact />} />
        <Route path = "/GiftCard" element = {<GiftCard />} />
        <Route path = "/ManageUser" element = {<ManageUser />} />
        {/* Add more routes as needed */}
        
      </Routes>
    </Router>
  );
}
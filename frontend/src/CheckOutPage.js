import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckOutPage.css"; // Make sure to create this CSS file

const CheckoutPage = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Cash on Delivery",
  });

  // ✅ Handle Form Changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Calculate Total Price
  const totalPrice = Object.values(cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ✅ Handle Order Placement
  const placeOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all details before placing the order.");
      return;
    }
    alert(`Order placed successfully! 🎉`);
    navigate("/"); // Navigate to home page after order
  };

  return (
    <div className="checkout-container">
      <h2>Proceed to Checkout</h2>

      {/* ✅ Display Cart Items */}
      {Object.keys(cartItems).length > 0 ? (
        <div className="checkout-items">
          {Object.values(cartItems).map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.image} alt={item.title} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price}/kg</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="empty-cart">Your cart is empty 😔</h3>
      )}

      {/* ✅ Shipping Form */}
      <div className="checkout-form">
        <h3>Shipping Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="UPI Payment">UPI Payment</option>
          <option value="Credit/Debit Card">Credit/Debit Card</option>
        </select>
      </div>

      {/* ✅ Total Price & Actions */}
      <div className="checkout-footer">
        <h3>Total Price: ₹{totalPrice}</h3>
        <button className="btn btn-secondary" onClick={() => navigate("/CartPage")}>Back to Cart</button>
        {Object.keys(cartItems).length > 0 && (
          <button
            className="btn btn-success"
            onClick={() => {
              placeOrder();
              navigate('/InvoicePage', {
                state: {
                  cartItems: cartItems,
                  shippingDetails: {
                    name: formData.name,
                    address: formData.address,
                    mobile: formData.phone,
                    paymentMethod: formData.paymentMethod
                  },
                  totalPrice: totalPrice
                }
              });
            }}
          >
            Place Order
          </button>
          
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;

import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleUpdateCart = (productId, change, title, price, image) => {
    console.log(`CartPage button clicked: Product ${productId}, Change ${change}`); // Debug log
    updateCart(productId, change, title, price, image);
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h2>Your Shopping Cart 🛒</h2>
        <button className="continue-btn" onClick={() => navigate("/marketplace")}>
          Continue Shopping
        </button>
      </header>

      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price:₹ {item.price}</p>
                <div className="cart-controls">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleUpdateCart(item.id, -1, item.title, item.price, item.image)}
                  >
                    -
                  </button>
                  <span className="cart-quantity">{item.quantity}</span>
                  <button
                    className="btn btn-success"
                    onClick={() => handleUpdateCart(item.id, 1, item.title, item.price, item.image)}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="cart-item-total">Subtotal: ₹{item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="empty-cart">Your cart is empty 😔</h3>
      )}

      <div className="cart-footer">
        <h3>Total Price: ₹{totalPrice}</h3>
        {cartItems.length > 0 && <button className="btn btn-primary" onClick={() => navigate("/CheckOutPage")}>Proceed to Checkout</button>}
      </div>
    </div>
  );
};

export default CartPage;
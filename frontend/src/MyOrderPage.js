import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyOrderPage.css';

const MyOrderPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Fetch orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

  const filteredOrders = orders.filter(order =>
    order.orderDate.includes(selectedYear.toString())
  );

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>

      <div className="orders-filter mb-3">
        <span>{filteredOrders.length} orders placed in</span>
        <select
          className="form-select w-auto ms-2"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="text-center mt-5">
          <h5 className="text-muted">You have not placed any orders in {selectedYear}.</h5>
        </div>
      ) : (
        filteredOrders.map((order, idx) => (
          <div className="order-card" key={idx}>
            <div className="order-meta">
              <div>
                <small>ORDER PLACED</small>
                <p>{order.orderDate}</p>
              </div>
              <div>
                <small>TOTAL</small>
                <p>₹{order.total}.00</p>
              </div>
              <div>
                <small>SHIP TO</small>
                <p>{order.customer}</p>
              </div>
              <div>
                <small>ORDER #</small>
                <p>{order.orderId}</p>
              </div>
            </div>

            <div className="order-status mt-3">
              <h5>{order.status}</h5>
              {order.status === 'Refunded' && <p>Your return is in transit. Refund issued.</p>}
              {order.status === 'Cancelled' && <p>Your order was cancelled.</p>}
              {order.status === 'Delivered' && <p>Delivered successfully. Thank you!</p>}
            </div>

            <div className="order-items">
              {order.items.map((item, i) => (
                <div key={i} className="order-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h6>{item.title}</h6>
                    <p>Quantity: {item.quantity}</p>
                    <p>₹{item.price}/kg</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-actions">
              <button className="btn btn-warning" onClick={() => alert('Track/Return')}>
                View Return/Refund Status
              </button>
              <button className="btn btn-outline-primary">Ask Product Question</button>
              <button className="btn btn-outline-primary">Write Product Review</button>
              <button className="btn btn-outline-secondary" onClick={() => navigate('/invoice')}>
                View Invoice
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrderPage;
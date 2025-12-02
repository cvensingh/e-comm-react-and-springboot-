import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MyOrderPage.css';

const MyOrderPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
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
          <button className="btn btn-primary mt-3" onClick={() => navigate('/MarketPlace')}>
            Continue Shopping
          </button>
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
                <p>₹{order.total}</p>
              </div>
              <div>
                <small>SHIP TO</small>
                <p>{order.shipTo}</p>
              </div>
            </div>
            <div className="order-items">
              {order.items && order.items.map((item, i) => (
                <div key={i} className="order-item">
                  <span>{item.name}</span>
                  <span>Qty: {item.qty}</span>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrderPage;

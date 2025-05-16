// File: src/AdminPage.js
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();

  // Fetching data from the server
  const [stats, setStats] = useState({
  // Initializing stats with default values
  // These values will be replaced with actual data from the server
  farmers: 0,
  consumers: 0,
  // revenue: 0,
});

// Fetching admin stats from the server
const fetchAdminStats = async () => {
  try {
    const response = await axios.get("http://localhost:8080/admin/stats");
    setStats(response.data);
  } catch (error) {
    console.error("Error fetching stats:", error);
  }
};

useEffect(() => {
  fetchAdminStats();
}, []);



  return (
    <div className="admin-dashboard bg-light p-4">
      <h2 className="mb-4 text-center">KisanKart Admin Panel</h2>
      
      

       {/* Dynamic stats from the server */}

      <div className="col-md-3" >

  
</div>
<div className="mt-8"/>
<div className="col-md-3">  
  <div className="admin-title bg-success text-white p-4 rounded shadow">
    <h5>Registered Farmers</h5>
    <p>👨‍🌾 {stats.farmers}</p>
  </div>
</div>
<div className="col-md-3">
  <div className="admin-tile bg-warning text-dark p-4 rounded shadow">
    <h5>Registered Consumers</h5>
    <p>🧑‍🤝‍🧑 {stats.consumers}</p>
  </div>
</div>
<div className="col-md-3">
  {/* <div className="admin-tile bg-danger text-white p-4 rounded shadow">
    <h5>Revenue</h5>
    <p>💰 ₹{stats.revenue.toLocaleString()}</p>
  </div> */}
</div>



      <div className="mt-5">
        <h4>Manage Operations</h4>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <button className="btn btn-outline-dark" onClick={() => navigate("/MarketPlace")}>🛒 View All Products</button>
          <button className="btn btn-outline-dark" onClick={() => navigate("/MyOrderPage")}>📦 Orders</button>
          <button className="btn btn-outline-dark" onClick={() => navigate("/AddProducts")}>➕ Add New Product</button>
          <button className="btn btn-outline-dark" onClick={() => navigate("/ManageUser")}>👥 Manage Users</button>
          <button className="btn btn-outline-dark" onClick={() => navigate("/")}>🏠 Back to Home</button>
          <button className="btn btn-outline-info" onClick={fetchAdminStats}>🔄 Refresh</button>

        </div>
      </div>
    </div>
  );
}

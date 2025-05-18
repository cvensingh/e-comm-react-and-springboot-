import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!mobileNumber || !password) {
      alert('Please enter both mobile number and password');
      return;
    }
    try {
      const response = await axios.post(`http://localhost:8080/api/login`, {
        mobileNumber,
        password
      });

      if (response.data === "Login successful!") {
        alert("Login successful!");
        navigate('/');
      } else {
        alert("Login failed. Please check credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow rounded bg-white w-100" style={{ maxWidth: 800 }}>
        {/* Left Section */}
        <div className="col-12 col-md-6 bg-primary text-white p-4 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-3 text-center">KisanKart (KK)</h1>
          <p className="text-center">Get access to your Orders, Wishlist, and Recommendations</p>
          <div className="w-100 d-flex justify-content-center align-items-center mt-4">
            <img
              src="./images/farmer-consumer.webp"
              alt="Illustration"
              className="img-fluid"
              style={{
                maxHeight: '250px',
                width: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

        </div>

        {/* Right Section */}
        <div className="col-12 col-md-6 p-4">
          <h2 className="mb-3 text-center">Login</h2>
          {/* Login Form */}
          <form onSubmit={handleFormSubmit} autoComplete="off">
            <div className="mb-3">
              <label className="form-label">Enter Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                autoComplete="new-mobile"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <button type="submit" className="btn btn-warning w-100 mb-3">
              Login
            </button>
          </form>

          <button
            className="btn btn-outline-danger w-100 mb-3"
            onClick={() => navigate('/GoogleAuth')}
          >
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>

          <p className="text-muted text-center" style={{ fontSize: '0.9rem' }}>
            By continuing, you agree to KisanKart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </p>

          <p className="text-center mb-1">
            <a href="#" onClick={() => navigate('/ForgotPassword')}>
              Forgot Password?
            </a>
          </p>

          <p className="text-center">
            New to KisanKart? <a href="" onClick={() => navigate('/create-account')}>Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );

}

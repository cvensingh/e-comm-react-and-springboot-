import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateAccount.css';

export default function CreateAccount() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('Farmer');
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    mobile_number: '',
    address: '',
    password: '',
    confirmPassword: '',
    farming_name: '',
    farming_address: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const endpoint = userType === 'Farmer'
      ? "http://192.168.31.211:8080/api/users/register/farmer"
      : "http://192.168.31.211:8080/api/users/register/consumer";

    const payload = userType === 'Farmer'
      ? { ...formData }
      : {
          name: formData.name,
          dob: formData.dob,
          email: formData.email,
          mobile_number: formData.mobile_number,
          address: formData.address,
          password: formData.password
        };

    try {
      const response = await axios.post(endpoint, payload);
      alert(response.data);
      navigate('/');
    } catch (error) {
      alert(error + ', Registration failed!');
      console.error(error);
    }
  };

  return (
    <div className="vh-300 d-flex justify-content-center align-items-center bg-light">
      <div className="shadow p-4 rounded bg-white" style={{ width: '800px' }}>
        <div className="d-flex align-items-center justify-content-center mb-4" 
          style={{ fontWeight: 'bold', gap: '10px', backgroundColor: '#a5d6a7', padding: '15px', borderRadius: '8px' }}>
          <img src="./images/kisankartLogo.png" alt="KisanKartLogo" style={{ width: '100px', height: '100px' }} />
          <h2 style={{ color: 'green', margin: 0 }}>KisanKart</h2>
        </div>

        <div className="d-flex justify-content-center mb-4" style={{ gap: '20px' }}>
          <button className={`btn me-2 ${userType === 'Farmer' ? 'btn-success' : 'btn-outline-secondary'}`} onClick={() => setUserType('Farmer')}>Farmer</button>
          <button className={`btn ${userType === 'Consumer' ? 'btn-success' : 'btn-outline-secondary'}`} onClick={() => setUserType('Consumer')}>Consumer</button>
        </div>

        <div className="d-flex" style={{ gap: '20px' }}>
          <div style={{ width: '40%', backgroundColor: userType === 'Farmer' ? '#c8e6c9' : '#E8F8F5', padding: '10px', borderRadius: '8px' }} className="pe-3">
            <img src={userType === 'Farmer' ? './images/farmer.webp' : './images/consumer.webp'} alt={`${userType} Illustration`} className="img-fluid rounded" />
            <p className="text-center mt-2">
              {userType === 'Farmer' ? '"Empowering farmers through direct access to consumers."' : '"Connecting consumers with the freshest products, directly from farmers."'}
            </p>
          </div>

          <div style={{ width: '60%' }}>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control mb-2" placeholder="Name" required />
              <input type="text" name="dob" value={formData.dob} onChange={handleChange} className="form-control mb-2" placeholder="Date of Birth" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control mb-2" placeholder="Email" required />
              <input type="tel" name="mobile_number" value={formData.mobile_number} onChange={handleChange} className="form-control mb-2" placeholder="Mobile Number" required />
              <textarea name="address" value={formData.address} onChange={handleChange} className="form-control mb-2" placeholder="Address" required />
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control mb-2" placeholder="Password" required />
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control mb-2" placeholder="Confirm Password" required />

              {userType === 'Farmer' && (
                <>
                  <input type="text" name="farming_name" value={formData.farming_name} onChange={handleChange} className="form-control mb-2" placeholder="Farming Name" required />
                  <textarea name="farming_address" value={formData.farming_address} onChange={handleChange} className="form-control mb-2" placeholder="Farming Address" required />
                </>
              )}

              <button type="submit" className="btn btn-warning w-100"> Create Your Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

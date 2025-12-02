import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const { email, mobile } = formData;

    if (!email || !mobile) {
      setErrors({
        email: !email ? 'Email is required' : '',
        mobile: !mobile ? 'Mobile number is required' : ''
      });
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/verify-user', { email, mobile });
      if (res.data === 'User verified') {
        setIsVerified(true);
      } else {
        alert('User not found with provided credentials.');
      }
    } catch (err) {
      console.error('Verification error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const { email, mobile, newPassword, confirmPassword } = formData;

    if (!newPassword || !confirmPassword) {
      setErrors({
        newPassword: !newPassword ? 'New password is required' : '',
        confirmPassword: !confirmPassword ? 'Confirm your password' : ''
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/reset-password', {
        email,
        mobile,
        newPassword
      });
      if (res.data === 'Password updated successfully') {
        alert('Password successfully reset!');
        navigate('/login');
      } else {
        alert('Failed to reset password');
      }
    } catch (err) {
      console.error('Reset error:', err);
      alert('Error occurred. Try again.');
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow rounded bg-white w-100" style={{ maxWidth: 900 }}>
        <div className="col-12 col-md-6 bg-primary text-white p-4 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-3 text-center">KisanKart (KK)</h1>
          <p className="text-center">Reset your password to continue accessing your account.</p>
          <div className="mt-auto w-100 d-flex justify-content-center">
            <video autoPlay loop muted className="w-100" style={{ borderRadius: '8px', maxHeight: 200 }}>
              <source src="./images/ForgotPassword.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col-12 col-md-6 p-4">
          <h2 className="mb-4 text-center">Reset Password</h2>
          {!isVerified ? (
            <form onSubmit={handleVerify}>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Verify Account</button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword}>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                />
                {errors.newPassword && <small className="text-danger">{errors.newPassword}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
              </div>
              <button type="submit" className="btn btn-success w-100">Reset Password</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

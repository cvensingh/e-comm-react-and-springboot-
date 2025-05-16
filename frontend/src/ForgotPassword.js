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
  const [isVerified, setIsVerified] = useState(false); // Step toggle

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
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="d-flex shadow rounded w-50 bg-white">
        <div className="bg-primary text-white p-4 d-flex flex-column justify-content-center" style={{ width: '50%' }}>
          <h1 className="mb-3">KisanKart (KK)</h1>
          <p>Reset your password to continue accessing your account.</p>
          <div className="mt-auto">
            <video autoPlay loop muted className="w-100" style={{ borderRadius: '8px' }}>
              <source src="./images/ForgotPassword.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="p-4" style={{ width: '50%' }}>
          <h2 className="mb-3">Forgot Password</h2>
          <form onSubmit={isVerified ? handleResetPassword : handleVerify}>
            <div className="mb-3">
              <label>Email Address</label>
              <input type="email" name="email" className="form-control"
                value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="mb-3">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" className="form-control"
                value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
              {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
            </div>

            {isVerified && (
              <>
                <div className="mb-3">
                  <label>New Password</label>
                  <input type="password" name="newPassword" className="form-control"
                    value={formData.newPassword} onChange={handleChange} placeholder="Enter new password" />
                  {errors.newPassword && <small className="text-danger">{errors.newPassword}</small>}
                </div>

                <div className="mb-3">
                  <label>Confirm Password</label>
                  <input type="password" name="confirmPassword" className="form-control"
                    value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
                  {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                </div>
              </>
            )}

            <button type="submit" className="btn btn-warning w-100 mt-3">
              {isVerified ? 'Reset Password' : 'Verify'}
            </button>

            <button type="button" className="btn btn-light w-100 mt-3" onClick={() => navigate('/login')}>
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

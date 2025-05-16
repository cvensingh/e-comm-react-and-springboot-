import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleAuth = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log('Google login success:', user);
      alert('Logged in with Google successfully!');
      navigate('/'); // Redirect to home page or desired route
    } catch (error) {
      console.error('Google login failed:', error);
      alert('Google Sign-In failed. Please try again.');
    }
  };

  useEffect(() => {
    handleGoogleLogin(); // Automatically trigger login on page load
  }, []);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="text-center p-5 shadow bg-white rounded">
        <h2>Redirecting to Google Sign-In...</h2>
        <p>If you are not redirected, please click below:</p>
        <button className="btn btn-danger" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleAuth;

import React, { useState } from 'react';
import '../../../../styles/login.css';
/**
 login
 */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission event
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    alert('Login simulation successful!');
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email or phone number"
              aria-label="Email or phone number"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Sign In</button>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" defaultChecked />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="need-help">Need help?</a>
          </div>

          <div className="signup-section">
            <p>New to this site? <a href="#" className="signup-link">Sign up now</a>.</p>
          </div>

          <div className="recaptcha-notice">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. 
              <a href="#">Learn more.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
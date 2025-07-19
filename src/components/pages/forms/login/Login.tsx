import React, { useState } from 'react';
import '../../../../styles/login.css';
import { showError, showSuccess } from '../../../../utilities/apis/alerts';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    const emailRegex = /\S+@\S+\.\S+/;

    if (!email || !password) {
      showError('Campos Incompletos', 'Por favor, ingresa tu correo y contraseña.');
      return;
    }

    if (!emailRegex.test(email)) {
      showError('Correo Inválido', 'Por favor, introduce una dirección de correo válida.');
      return;
    }

    console.log('Login attempt with:', { email, password });
    showSuccess('¡Inicio de Sesión Exitoso!', 'Has ingresado correctamente.');
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        {}
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <h1>Sign In</h1>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email or phone number"
              aria-label="Email or phone number"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NegociosEspecificos from "./components/pages/company/Negocios_Especificos";
import Login from "./components/pages/forms/login/Login";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToNegocio = (businessId: number) => {
    navigate(`/negocio/${businessId}`);
  };

  return (
    <main className="main-content">
      <div className="hero-section">
        <h1>Welcome to BookingStore</h1>
        <h1>Ejemplo de funcionamiento xd</h1>
        <p>
          Your premier destination for booking services and managing business
          operations.
        </p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "15px",
              minWidth: "250px",
            }}
          >
            <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>
              Tech Solutions Co.
            </h3>
            <p style={{ color: "#666", marginBottom: "1.5rem" }}>
              Professional IT services and software development
            </p>
            <button
              className="cta-button"
              onClick={() => handleNavigateToNegocio(1)} // Aqui se le manda UNO a la funcion para que le pase el parametro
              style={{ fontSize: "0.9rem", padding: "0.8rem 1.5rem" }}
            >
              View Business #1
            </button>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "15px",
              minWidth: "250px",
            }}
          >
            <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>
              Creative Studio
            </h3>
            <p style={{ color: "#666", marginBottom: "1.5rem" }}>
              Design and marketing services for modern businesses
            </p>
            <button
              className="cta-button"
              onClick={() => handleNavigateToNegocio(2)} // Aqui se le manda DOS a la funcion para que le pase el parametro
              style={{ fontSize: "0.9rem", padding: "0.8rem 1.5rem" }}
            >
              View Business #2
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// Para llevar a las distintas pantallas, se agregan en "route"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/negocio/:id" element={<NegociosEspecificos />} />
          <Route path="/forms/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;

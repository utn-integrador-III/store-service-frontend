import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div className="hero-section">
          <h1>Welcome to Store Service</h1>
          <p>
            Your premier destination for booking services and managing business
            operations.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

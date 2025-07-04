
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
import Register from "./components/pages/forms/registers/registerenterprise";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToCategoria = (categoryId: number) => {
    navigate(`/categoria/${categoryId}`);
  };

  return (
    <main className="main-content">
      <div className="empresa-banner">
        <img
          src="/images/2d85f6ff-64b6-42c1-87ce-e397aa8f8461.png"
          alt="Descripción empresa"
          className="empresa-imagen"
        />
        <div className="empresa-descripcion">
          <h1>Bienvenido a BookingStore</h1>
          <p>
            Tu plataforma central para reservar servicios y gestionar negocios
            fácilmente. Descubre nuestras categorías principales y encuentra el
            negocio ideal para ti.
          </p>
        </div>
      </div>

      <div className="categorias-grid">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="categoria-card"
            onClick={() => handleNavigateToCategoria(id)}
          >
            <img
              src={`/images/categoria${id}.png`}
              alt={`Categoría ${id}`}
              className="categoria-imagen"
            />
            <h4>Categoría {id}</h4>
          </div>
        ))}
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
          <Route path="/forms/registers" element={<Register />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  )
  }



export default App;

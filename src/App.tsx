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
import NegociosEspecificosPorCategoria from "./components/pages/company/Negocios_Especificos_por_categoria";
import NegocioEspecifico from "./components/pages/company/Negocio_Especifico";
import Login from "./components/pages/forms/login/Login";
import Register from "./components/pages/forms/registers/registerenterprise";

import ClinicImg from "./assets/images/Clinics.png";
import RestaurantImg from "./assets/images/Restaurant.png";
import HotelImg from "./assets/images/Hotels.png";
import BarbershopImg from "./assets/images/Barbershop.png";
import EmpresaBanner from "./assets/images/empresa.jpg"; 
import RegisterUser from "./components/pages/forms/registers/registeruser";

function HomePage() {
  const navigate = useNavigate();

  const categorias = [
    {
      id: 2,
      imagen: ClinicImg,
    },
    {
      id: 1,
      imagen: RestaurantImg,
    },
    {
      id: 4,
      imagen: HotelImg,
    },
    {
      id: 3,
      imagen: BarbershopImg,
    },
  ];

  const handleNavigateToCategoria = (categoryId: number) => {
    navigate(`/categoria/${categoryId}`);
  };

  return (
    <main className="main-content">
      <div className="empresa-banner">
        <img
          src={EmpresaBanner}
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
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="categoria-card"
            onClick={() => handleNavigateToCategoria(categoria.id)}
          >
            <img
              src={categoria.imagen}
              className="categoria-imagen"
            />
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
          <Route
            path="/categoria/:id"
            element={<NegociosEspecificosPorCategoria />}
          />
          <Route
            path="/negocio-especifico/:id"
            element={<NegocioEspecifico />}
          />
          <Route path="/forms/login" element={<Login />} />
          <Route path="/forms/registers" element={<Register />} />
          <Route path="/forms/registersusers" element={<RegisterUser />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

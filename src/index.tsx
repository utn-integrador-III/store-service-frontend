import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Negocios_Especificos from "./components/pages/company/Negocios_Especificos";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Navbar />
    <Negocios_Especificos />
    <Footer />
  </div>
);

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Negocios_Especificos = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  // Business data based on ID
  const getBusinessData = (businessId: string) => {
    switch (businessId) {
      case "1":
        return {
          name: "Tech Solutions Co.",
          description:
            "Professional IT services and software development company with over 10 years of experience.",
          services: [
            "Web Development",
            "Mobile Apps",
            "Cloud Solutions",
            "IT Consulting",
          ],
          contact: "tech@solutions.com",
          phone: "+1 (555) 123-4567",
        };
      case "2":
        return {
          name: "Creative Studio",
          description:
            "Design and marketing services for modern businesses. We help brands tell their story.",
          services: [
            "Graphic Design",
            "Brand Identity",
            "Digital Marketing",
            "Social Media",
          ],
          contact: "hello@creativestudio.com",
          phone: "+1 (555) 987-6543",
        };
      default:
        return {
          name: "Unknown Business",
          description: "Business information not found.",
          services: [],
          contact: "",
          phone: "",
        };
    }
  };

  const business = getBusinessData(id || "");

  return (
    <main className="main-content">
      <div className="hero-section">
        <h1>{business.name}</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          Business ID: <strong>{id}</strong>
        </p>

        <h1>Work in progress xd</h1>

        <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
          <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>About</h3>
          <p style={{ marginBottom: "2rem", lineHeight: "1.6" }}>
            {business.description}
          </p>

          <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>
            Services
          </h3>
          <ul style={{ marginBottom: "2rem", textAlign: "left" }}>
            {business.services.map((service, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {service}
              </li>
            ))}
          </ul>

          <h3 style={{ color: "var(--navy)", marginBottom: "1rem" }}>
            Contact Information
          </h3>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong>Email:</strong> {business.contact}
          </p>
          <p style={{ marginBottom: "2rem" }}>
            <strong>Phone:</strong> {business.phone}
          </p>
        </div>

        <button className="cta-button" onClick={handleGoBack}>
          Back to Home
        </button>
      </div>
    </main>
  );
};

export default Negocios_Especificos;

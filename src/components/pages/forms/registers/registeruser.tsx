import React, { useState, ChangeEvent, FormEvent } from "react";
import '../../../../styles/registerenterprise.css';

interface UserFormData {
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
}

export default function UserRegisterForm() {
  const [formData, setFormData] = useState<UserFormData>({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Registro de Usuario</h2>

        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
            required
          />

          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="form-control"
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="form-control"
            required
          />

          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={formData.contrasena}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Registrarse
        </button>
      </form>
    </div>
  );
}

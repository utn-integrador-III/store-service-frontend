import React, { useState, ChangeEvent, FormEvent } from "react";
import '../../../../styles/registerenterprise.css';
import { showError, showSuccess } from "../../../../utilities/apis/alerts";

interface UserFormData {
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  confirmarContrasena: string;
}

export default function UserRegisterForm() {
  const [formData, setFormData] = useState<UserFormData>({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nombre, apellido, correo, contrasena, confirmarContrasena } = formData;

    const emailRegex = /\S+@\S+\.\S+/;

    if (!nombre || !apellido || !correo || !contrasena || !confirmarContrasena) {
      showError('Formulario Incompleto', 'Por favor, rellena todos los campos.');
      return;
    }
    
    if (!emailRegex.test(correo)) {
      showError('Correo Inválido', 'Por favor, ingresa un formato de correo electrónico válido.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      showError('Error de Contraseña', 'Las contraseñas no coinciden.');
      return;
    }

    showSuccess('¡Registro Exitoso!', 'Tu cuenta ha sido creada correctamente.');
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
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="form-control"
          />
          {}
          <input
            type="text" 
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="form-control"
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={formData.contrasena}
            onChange={handleChange}
            className="form-control"
          />
          <input
            type="password"
            name="confirmarContrasena"
            placeholder="Confirmar Contraseña"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-btn">
          Registrarse
        </button>
      </form>
    </div>
  );
}
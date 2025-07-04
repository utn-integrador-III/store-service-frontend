import React, { useState, ChangeEvent, FormEvent } from "react";
import '../../../../styles/registerenterprise.css';



interface FormData {
  tipoCedula: string;
  numeroCedula: string;
  nombreEmpresa: string;
  direccion: string;
  categoria: string;
  correo: string;
  telefono: string;
  infoEmpresa: string;
  horario: string;
  fotos: File[];
  contrasena: string;
  confirmarContrasena: string;
}

export default function BusinessForm() {
  const [formData, setFormData] = useState<FormData>({
    tipoCedula: "fisica",
    numeroCedula: "",
    nombreEmpresa: "",
    direccion: "",
    categoria: "",
    correo: "",
    telefono: "",
    infoEmpresa: "",
    horario: "",
    fotos: [],
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    if (type === "file" && files) {
      setFormData({ ...formData, [name]: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTipoCedula = (tipo: string) => {
    setFormData({ ...formData, tipoCedula: tipo });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Información de empresa</h2>

        <div className="form-group">
          <input
            type="text"
            name="nombreEmpresa"
            placeholder="Nombre de la empresa"
            value={formData.nombreEmpresa}
            onChange={handleChange}
            className="form-control"
          />

          <div className="tipo-cedula-group">
            <span>Tipo de cédula:</span>
            <button
              type="button"
              onClick={() => handleTipoCedula("fisica")}
              className={`tipo-cedula-btn ${
                formData.tipoCedula === "fisica" ? "active" : ""
              }`}
            >
              Física
            </button>
            <button
              type="button"
              onClick={() => handleTipoCedula("juridica")}
              className={`tipo-cedula-btn ${
                formData.tipoCedula === "juridica" ? "active" : ""
              }`}
            >
              Jurídica
            </button>
          </div>

          <input
            type="text"
            name="numeroCedula"
            placeholder="Número de cédula"
            value={formData.numeroCedula}
            onChange={handleChange}
            className="form-control"
          />

          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="form-control"
          />

          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Seleccione categoría</option>
            <option value="restaurante">Restaurante</option>
            <option value="tienda">Tienda</option>
            <option value="servicio">Servicio</option>
          </select>

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="form-control"
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Número telefónico"
            value={formData.telefono}
            onChange={handleChange}
            className="form-control"
          />

          <input
            type="text"
            name="horario"
            placeholder="Horario"
            value={formData.horario}
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
            placeholder="Confirmar contraseña"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            className="form-control"
          />

          <textarea
            name="infoEmpresa"
            placeholder="Información de la empresa"
            value={formData.infoEmpresa}
            onChange={handleChange}
            className="form-control"
            rows={4}
          />

          <input
            type="file"
            name="fotos"
            multiple
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign up
        </button>
      </form>
    </div>
  );
}

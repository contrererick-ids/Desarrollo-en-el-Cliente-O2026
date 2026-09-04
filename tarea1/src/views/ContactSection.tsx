import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";

interface ContactFormData {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

function submitHandler(data: ContactFormData) {
  console.log(`Envío de datos de formulario exitoso. Datos del usuario: Nombre: ${data.nombre}, Email: ${data.correo}, Telefono: ${data.telefono}, Mensaje: ${data.mensaje}`);
}

function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(formData);
  };

  return (
    <div id="contact" className="contact-section">
      <h2>Contact</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="correo">Correo</label>
          <input
            id="correo"
            name="correo"
            type="email"
            placeholder="Tu correo electrónico"
            value={formData.correo}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="Tu teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}

export default ContactSection;
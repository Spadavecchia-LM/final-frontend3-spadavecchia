import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [contactUser, setContactUser] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [valido, setValido] = useState({ showError: false, esValido: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarEmail(contactUser.email) && validarNombre(contactUser.nombre)) {
      setValido({ showError: false, esValido: true });
      displayAlert(
        `Gracias por contactarnos ${contactUser.nombre}. en breve te responderemos via email.`,
        "success"
      );
    } else {
      setValido({ showError: true, esValido: false });
      displayAlert("por favor revisar los campos", "error");
    }
  };
  const handleUserChange = (e) => {
    const { name, value } = e.target;

    setContactUser({ ...contactUser, [name]: value });
  };
  const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  };
  const validarNombre = (nombre) => {
    const nombreRegex = /^[a-zA-Z\s]{6,}$/;

    return nombreRegex.test(nombre);
  };
  const displayAlert = (mensaje, estado) => {
    Swal.fire({
      text: mensaje,
      icon: estado,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed && estado == "success") {
        setContactUser({ nombre: "", email: "", mensaje: "" });
      }
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre Completo</label>
      </div>
      <input
        name="nombre"
        type="text"
        id="nombre"
        placeholder="nombre"
        value={contactUser.nombre}
        onChange={handleUserChange}
      />

      <div>
        <label htmlFor="email">Correo Electronico</label>
      </div>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="example@gmail.com"
        value={contactUser.email}
        onChange={handleUserChange}
      />

      <div>
        <label htmlFor="mensaje">Dejanos tu mensaje</label>
      </div>
      <textarea
        name="mensaje"
        id="mensaje"
        cols="30"
        rows="10"
        value={contactUser.mensaje}
        onChange={handleUserChange}
      ></textarea>

      <div>
        <button>Enviar Mensaje</button>
        {valido.showError && !valido.esValido && (
          <span style={{ color: "red" }}>
            Por favor revise los datos ingresados
          </span>
        )}
      </div>
    </form>
  );
};

export default Form;

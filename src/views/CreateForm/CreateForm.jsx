import { useState } from "react";
import axios from "axios";
import "./CreateForm.css";

function CreateForm() {
  const [Information, setInformation] = useState({
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
  });
  function handleInformation(e) {
    setInformation({ ...Information, [e.target.name]: e.target.value });
  }

  function handleInsert(e) {
    const formData = new FormData();
    formData.append("nombre", Information.nombre);
    formData.append("apellido_materno", Information.apellido_materno);
    formData.append("apellido_paterno", Information.apellido_paterno);

    fetch("http://localhost:8080/alumnos/new", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: Information.nombre,
        apellido_materno: Information.apellido_materno,
        apellido_paterno: Information.apellido_paterno
      }),
    });
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={Information.nombre}
          onChange={handleInformation}
        />
        <label htmlFor="image">Apellido Paterno</label>
        <input
          type="text"
          id="description"
          name="apellido_materno"
          value={Information.apellido_materno}
          onChange={handleInformation}
        />
        <label htmlFor="description">Apellido Materno</label>
        <input
          type="text"
          id="description"
          name="apellido_paterno"
          value={Information.apellido_paterno}
          onChange={handleInformation}
        />
        <button type="post" onClick={handleInsert}>
          Insertar
        </button>
      </form>
    </div>
  );
}

export default CreateForm;

import React, { useState } from "react";
import "../hojasDeEstilo/Formulario.css"
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({ onSubmit }) => {

  const [input, setInput] = useState("");

  const manejarCambio = e => {

    setInput(e.target.value);
  };


  const manejarEnvio = e => {

    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    { onSubmit(tareaNueva) };
  };

  return (

    <form
      className="tarea-formulario"
      onSubmit={manejarEnvio}>

      <input
        className="tarea-input"
        type="text"
        placeholder="Escribir una Tarea"
        name="texto"
        onChange={manejarCambio}

      />
      <button className="tarea-boton">Agregar tarea</button>


    </form>

  );
};

export default Formulario;
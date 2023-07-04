import React from "react";
import "../hojasDeEstilo/Tareas.css"
import { AiOutlineDelete } from "react-icons/ai";

const Tareas = ({ id, texto, completada, completarTarea, eliminarTarea }) => {

    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div
                className="tarea-texto"
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div
                className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}>
                <AiOutlineDelete className="tarea-icono" />
            </div>
        </div>

    );
};


export default Tareas;
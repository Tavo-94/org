import React from "react";
import "./ListaOpciones.css";

const index = ({ value, onChange, equipos }) => {


  return (
    <div className="listaOpciones">
      <label>Equipos</label>
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value={""} disabled defaultValue={""} hidden>
          seleccionar equipo
        </option>
        {equipos.map((equipo, index) => {
          return <option key={index} value={equipo}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};

export default index;

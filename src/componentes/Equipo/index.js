import { useState } from "react";
import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, id } = props.equipo;

  const { colaboradores, eliminarColaborador, actualizarColor, colaboradorFavorito } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: colorSecundario }}
        >
          <h3 style={{ borderBottom: `4px solid ${colorPrimario}` }}>
            {titulo}
          </h3>
          <input
            type="color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <div className="card-container">
            {colaboradores.map((colaborador, index) => {
              return (
                <Colaborador
                  key={index}
                  datos={colaborador}
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                  colaboradorFavorito={colaboradorFavorito}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;

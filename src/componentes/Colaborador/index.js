import React from "react";
import "./Colaborador.css";
import { LuXCircle } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuHeartOff } from "react-icons/lu";

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, esFavorito } = props.datos;
  return (
    <div className="colaborador">
      <div
        className="img-container"
        style={{ backgroundColor: props.colorPrimario }}
      >
        <button
          className="btn-colaborador"
          onClick={() => {
            props.eliminarColaborador(id);
          }}
        >
          <LuXCircle title="icono eliminar colaborador" size={"1.5em"} />
        </button>

        <img src={foto} alt="perfil del colaborador" />
      </div>
      <div className="card-body">
        <h4>{nombre}</h4>
        <p>{puesto}</p>
      </div>

      {!esFavorito ? (
        <LuHeart
          style={{ cursor: "pointer" }}
          color="red"
          size={"1.5em"}
          onClick={() => {
            props.colaboradorFavorito(id);
          }}
        />
      ) : (
        <LuHeartOff
          style={{ cursor: "pointer" }}
          size={"1.5em"}
          onClick={() => {
            props.colaboradorFavorito(id);
          }}
        />
      )}
    </div>
  );
};

export default Colaborador;

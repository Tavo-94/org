import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = ({
  equipos,
  callbackNuevoColaborador,
  callbackNuevoEquipo,
}) => {
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log({
      id: crypto.randomUUID(),
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    });
    callbackNuevoColaborador({
      id: crypto.randomUUID(),
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
      esFavorito: false,
    });
  };

  const enviarFormEquipo = (e) => {
    e.preventDefault();
    callbackNuevoEquipo({
      id: crypto.randomUUID(),
      titulo: titulo,
      colorPrimario: color,
      colorSecundario: color + "2f",
    });
  };

  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("#000000");

  return (
    <section className="formulario">
      <form
        onSubmit={(e) => {
          enviarFormulario(e);
        }}
      >
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          key={1}
          label={"Nombre"}
          placeholder={"ingresar nombre"}
          value={nombre}
          onChange={setNombre}
          required
        />
        <CampoTexto
          key={2}
          label={"Puesto"}
          placeholder={"ingresar puesto"}
          value={puesto}
          onChange={setPuesto}
          required
        />
        <CampoTexto
          key={3}
          label={"Foto"}
          placeholder={"ingresar enlace de la foto"}
          value={foto}
          onChange={setFoto}
          required
        />
        <ListaOpciones value={equipo} onChange={setEquipo} equipos={equipos} />
        <Boton titulo={"Crear"} />
      </form>

      <form
        onSubmit={(e) => {
          enviarFormEquipo(e);
        }}
      >
        <h2>Rellena el formulario para crear un equipo.</h2>
        <CampoTexto
          key={1}
          label={"titulo"}
          placeholder={"ingresar titulo del equipo"}
          value={titulo}
          onChange={setTitulo}
          required
        />
        <CampoTexto
          key={2}
          type="color"
          placeholder={color}
          label={"Color"}
          value={color}
          onChange={setColor}
          required
        />

        <Boton titulo={"Crear Equipo"} />
      </form>
    </section>
  );
};

export default Formulario;

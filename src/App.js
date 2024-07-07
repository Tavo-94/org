import "./App.css";
import Header from "./componentes/header/Header.js";
import Formulario from "./componentes/formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg";
import { useState } from "react";
import Equipo from "./componentes/Equipo/index.js";
import Footer from "./componentes/Footer/index.jsx";

function App() {
  const [esFormVisible, setEsFormVisible] = useState(true);
  const [colaboradores, setColaboradores] = useState([]);

  const desarrollador = {
    nombre: "Gustavo Heredia",
    perfilFacebook: "https://www.facebook.com/gustavo.herediaperez",
    perfilInstagram: "https://www.instagram.com/m.tavo94",
    perfilTwitter: "https://x.com/MphGustavo",
  };

  const toggleForm = () => {
    setEsFormVisible(!esFormVisible);
  };

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);

    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id != id)
    );
  };

  const colaboradorFavorito = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.esFavorito = !colaborador.esFavorito;
        }
        return colaborador;
      })
    );
  };

  const registrarEquipo = (equipo) => {
    setEquipos([...equipos, equipo]);
  };

  const actualizarColor = (color, id) => {
    console.log("actualizar : ", color, id);
    setEquipos(
      equipos.map((equipo) => {
        if (equipo.id === id) {
          equipo.colorPrimario = color;
          equipo.colorSecundario = color + "7f";
        }
        return equipo;
      })
    );
  };

  const [equipos, setEquipos] = useState([
    {
      id: crypto.randomUUID(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: crypto.randomUUID(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  return (
    <>
      <Header />
      {esFormVisible && (
        <Formulario
          equipos={equipos.map((equipo) => {
            return equipo.titulo;
          })}
          callbackNuevoColaborador={registrarColaborador}
          callbackNuevoEquipo={registrarEquipo}
        />
      )}
      <MiOrg toggleFormVisibility={toggleForm} />

      {equipos.map((equipo, index) => {
        return (
          <Equipo
            key={equipo.id}
            equipo={equipo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            colaboradorFavorito={colaboradorFavorito}
          />
        );
      })}

      <Footer desarrollador={desarrollador} />
    </>
  );
}

export default App;

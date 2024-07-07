import "./MiOrg.css";

const MiOrg = ({ toggleFormVisibility }) => {
  return (
    <section className="orgSection">
      <header>
        <h3>Mi organización</h3>
        <img
          src="/img/botonAdd.png"
          alt="add"
          onClick={toggleFormVisibility}
        />
      </header>
    </section>
  );
};

export default MiOrg;

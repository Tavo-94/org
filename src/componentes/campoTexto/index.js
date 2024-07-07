import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, required = false, value, onChange, type = "text" }) => {
  
  return (
    <div className="campo">
      <label>{label}</label>
      <input
        name={label.toLowerCase()}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        required={required}
      />
    </div>
  );
};

export default CampoTexto;
